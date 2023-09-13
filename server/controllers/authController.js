import User from '../models/User.js';
import catchAsync from '../middlewares/catchAsync.js';
import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.js';
import Email from '../utils/email.js';
import crypto from 'crypto';
import { promisify } from 'util';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  // Remove password from output.
  user.password = undefined;

  res.cookie('access_token', token, cookieOptions).status(statusCode).json({
    status: 'success',
    data: user,
  });
};

//
//

export const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  await new Email(
    newUser,
    `${req.protocol}://${req.get('host')}/me`
  ).sendWelcome();

  createSendToken(newUser, 201, res);
});

//
//

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1. Check if email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  //2. Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect Email or Password', 401));
  }

  //3. If everything is ok, send token to the client
  createSendToken(user, 200, res);
});

//
//

export const forgotPassword = catchAsync(async (req, res, next) => {
  //1. Get user based on posted email.
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with this email address', 404));
  }
  //2. Generate a random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  //3. Send it to user's email

  // const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    // await sendEmail({
    //   email: user.email,
    //   subject: 'Your password reset token (valid for 10 min)',
    //   message,
    // });
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/users/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});

//
//

export const resetPassword = catchAsync(async (req, res, next) => {
  //1. Get the user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  //2. If the user is there and the token has not expired, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  //3. Update the changedPasswordAt property for the user
  //4. Log the user in, send JWT
  createSendToken(user, 200, res);
});

//
//

export const updatePassword = catchAsync(async (req, res, next) => {
  //1. Get the user from the collection
  const user = await User.findById(req.user.id).select('+password');

  //2.Check if posted current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(
      new AppError('Your current password is wrong, please log in again!', 401)
    );
  }

  //3. If correct then update the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  //4.Log user in, send JWT
  createSendToken(user, 200, res);
});

export const logout = (req, res) => {
  res.cookie('access_token', 'loggedout', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({ status: 'success' });
};
