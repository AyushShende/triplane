import { Logo, Button } from '../components';

export default function RegisterPage() {
  return (
    <main className="bg-gray-50 flex justify-center items-center h-screen">
      <form className="bg-white border-b-4 shadow-lg border-emerald-700 w-[350px] sm:w-[450px] p-6">
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
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            id="email"
            name="email"
            type="email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="outline-none py-2 px-3 w-full bg-gray-50"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
        </div>
        <Button className="w-full mb-4" secondary>
          Sign Up
        </Button>
        <p>
          Already have an account?{' '}
          <span className="font-semibold cursor-pointer text-orange-500">
            Login here!
          </span>
        </p>
      </form>
    </main>
  );
}
