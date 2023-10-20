import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useUser } from '../hooks/useUser';
import FullScreenLoader from './FullScreenLoader';

export default function RequireUser({ allowedRoles }) {
  const location = useLocation();

  const { user, isLoading } = useUser();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return allowedRoles.includes(user?.role) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
