import Tour from '../models/Tour.js';
import catchAsync from '../middlewares/catchAsync.js';
import AppError from '../utils/appError.js';
import ApiFeatures from '../utils/apiFeatures.js';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from './handlerFactory.js';

// Middleware to GET top 5 rated and cheap tours.
export const aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,difficulty,price,summary,ratingsAverage';
  next();
  // Call the GetAllTours with this prefilled querstring
};

export const getAlltours = async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new ApiFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const tours = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// export const getAlltours = getAll(Tour);

export const createTour = createOne(Tour);

export const getTour = getOne(Tour, { path: 'reviews' });

export const updateTour = updateOne(Tour);

export const deleteTour = deleteOne(Tour);
