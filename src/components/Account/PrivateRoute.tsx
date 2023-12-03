import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  isLogged: boolean;
  children: ReactNode;
}

function PrivateRoute({ isLogged, children }: PrivateRouteProps ) {
  if (!isLogged) {
    return <Navigate to="/auth/login" replace />;
  } else {
    return <>{children}</>;
  }
}

export default PrivateRoute;
