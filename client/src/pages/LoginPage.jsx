import { Link, useNavigate } from 'react-router-dom';
import { Logo, Button } from '../components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser } from '../api/authApi';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useUser } from '../hooks/useUser';
import { useEffect } from 'react';

export default function LoginPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: loginMutation } = useMutation({
    mutationFn: (credentials) => loginUser(credentials),
    onSuccess: (user) => {
      toast.success('logged in successfully');
      queryClient.setQueryData(['user'], user);
      navigate('/profile', { replace: true });
    },
  });

  const onSubmit = async (formData) => {
    loginMutation(formData);
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
        className="bg-white border-b-4 shadow-lg border-emerald-700 p-6 w-[350px] sm:w-[450px] "
      >
        <Logo />
        <h1 className="font-bold text-gray-600 my-4 text-3xl">
          Welcome to Triplane
        </h1>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            defaultValue="ayushshende9@gmail.com"
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
            defaultValue="test1234"
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
        <Button className="w-full mb-4" secondary>
          Login
        </Button>
        <p>
          Need an account?{' '}
          <Link
            to="/register"
            className="font-semibold cursor-pointer text-orange-500"
          >
            Sign Up here!
          </Link>
        </p>
      </form>
    </main>
  );
}
