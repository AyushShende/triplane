import { Link, NavLink } from 'react-router-dom';

import Button from './Button';
import Logo from './Logo';
import { useUser } from '../hooks/useUser';
import userAvatar from '../assets/user-12.jpg';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '../api/authApi';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);

  const { mutate: logoutMutation } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      toast.success('logged out successfully');
      window.location.href = '/';
    },
  });

  return (
    <nav className="flex justify-between items-center py-4 padding-x z-20 absolute w-full">
      <Logo />
      {user ? (
        <div
          onClick={() => setShowDropdown((prev) => !prev)}
          className="flex gap-2 relative items-center cursor-pointer"
        >
          <img
            className="w-8 h-8 rounded-full"
            src={userAvatar}
            alt="user profile"
          />
          <p className="text-orange-500 capitalize font-medium">
            {user.name.split(' ')[0]}
          </p>
          {showDropdown && (
            <ul className="absolute top-10 bg-orange-100 py-1 px-1 rounded">
              <li className="cursor-pointer hover:bg-orange-50 font-medium rounded px-3 py-2">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="cursor-pointer hover:bg-orange-50 font-medium rounded px-3 py-2">
                <Link to="/profile">Bookings</Link>
              </li>
              <li className="cursor-pointer hover:bg-orange-50 font-medium rounded px-3 py-2">
                <Link to="/profile">Reviews</Link>
              </li>
              <li
                onClick={() => logoutMutation()}
                className="cursor-pointer hover:bg-orange-50 font-medium rounded px-3 py-2"
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      ) : (
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
      )}
    </nav>
  );
}
