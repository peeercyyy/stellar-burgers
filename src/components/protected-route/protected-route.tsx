import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuthorized } from '../../services/slices/auth';
import { useSelector } from '../../services/store';

export const ProtectedRoute = () => {
  const isAuthorized = useSelector(selectIsAuthorized);

  if (!isAuthorized) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
};
