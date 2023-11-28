import { Navigate } from 'react-router-dom';


function PrivateRoute({ isLogged, children } ) {
  if (!isLogged) {
    return <Navigate to="/auth/login" replace />;
  } else {
    return <>{children}</>;
  }
}

export default PrivateRoute;
