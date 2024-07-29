import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuthorized } from '../../services/slices/auth';
import { useSelector } from '../../services/store';

type TProps = {
  authRoute?: boolean;
};

export const ProtectedRoute: React.FC<TProps> = ({ authRoute }) => {
  const location = useLocation();
  const isAuthorized = useSelector(selectIsAuthorized);

  if (!authRoute && !isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  if (authRoute && isAuthorized) {
    const from = location.state?.from || { pathname: '/' };

    return <Navigate replace to={from} />;
  }

  return <Outlet />;
};
