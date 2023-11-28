
import { Routes, Route } from 'react-router-dom';

import MainPage from './sections/MainPage';
import Login from './sections/Login';
import Account from './sections/Account';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './components/Auth';

const App = () => {
  const { isLogged }  = useAuth();
  console.log (`Is Logged = ${isLogged}`)

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route
            path="/account"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Account />
              </PrivateRoute>
            }
          />
    </Routes>
  );
};

export default App;