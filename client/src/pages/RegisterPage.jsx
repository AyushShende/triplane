import { Link, useNavigate } from 'react-router-dom';
import { Logo, Button } from '../components';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerUser } from '../api/authApi';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useUser } from '../hooks/useUser';

export default function RegisterPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { mutate: registerMutation } = useMutation({
    mutationFn: (credentials) => registerUser(credentials),
    onSuccess: (user) => {
      toast.success('Registered successfully');
      queryClient.setQueryData(['user'], user);
      navigate('/', { replace: true });
    },
  });

  const onSubmit = (data) => {
    registerMutation(data);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <main className="bg-gray-50 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-b-4 shadow-lg border-emerald-700 w-[350px] sm:w-[450px] p-6"
      >
        <Logo />
        <h1 className="font-bold text-gray-600 my-4 text-3xl">
          Welcome to Triplane
        </h1>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="email">
            Name
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            name="name"
            type="text"
            {...register('name', {
              required: 'Please enter your name',
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm font-medium mt-2">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            name="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid Email.',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-medium mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            name="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be at-least 8 characters.',
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-medium mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="passwordConfirm">
            Password
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            name="passwordConfirm"
            type="password"
            {...register('passwordConfirm', {
              required: 'Please confirm your password',
              validate: (val) =>
                val === getValues('password') || 'passwords do not match',
            })}
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm font-medium mt-2">
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>
        <Button className="w-full mb-4" secondary>
          Sign Up
        </Button>
        <p>
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold cursor-pointer text-orange-500"
          >
            Login here!
          </Link>
        </p>
      </form>
    </main>
  );
}
