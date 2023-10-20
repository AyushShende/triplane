import { Link } from 'react-router-dom';
import notFoundImg from '../assets/404.svg';
import { Button } from '../components';

export default function NotFound() {
  return (
    <div className="bg-green-50 flex flex-col gap-3 h-screen items-center justify-center">
      <img src={notFoundImg} alt="not found" />
      <h1 className="font-bold text-2xl md:text-4xl">Oh-oh! Page not found</h1>
      <p className="text-lg mb-1">
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
