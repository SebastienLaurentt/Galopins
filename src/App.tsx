
import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import MainPage from './sections/MainPage';
import Login from './sections/Account/Login';
import Account from './sections/Account/Account';
import PrivateRoute from './components/Account/PrivateRoute';
import { useAuth } from './components/Account/Auth';
import { useEffect } from 'react';
import AccountNewsAdd from './sections/Account/AccountNewsAdd';
import AccountRandoAdd from './sections/Account/AccountRandoAdd';
// import AccountProgAdd from './sections/Account/AccountProgAdd';
import Mentions from './sections/Mentions';
import AccountRandoUpdate from './sections/Account/AccountRandoUpdate';
import AccountNewsUpdate from './sections/Account/AccoutNewsUpdate';

const App = () => {
  const { isLogged, login  }  = useAuth();
  console.log (`Is Logged = ${isLogged}`)

  useEffect(() => {
    const storedAuth = Cookies.get('isLogged');
    if (storedAuth === 'true') {
      // Restaure l'authentification au chargement de l'application
      login();
    }
  }, [login]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mentions" element={<Mentions />} />
      <Route path="/auth/login" element={<Login />} />
      <Route
            path="/account"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Account />
              </PrivateRoute>
            }
      />
      <Route
            path="/account/addnews"
            element={
              <PrivateRoute isLogged={isLogged}>
                <AccountNewsAdd />
              </PrivateRoute>
            }
      />
      <Route
            path="/account/updatenews/:id"
            element={
              <PrivateRoute isLogged={isLogged}>
                <AccountNewsUpdate />
              </PrivateRoute>
            }
      />
      <Route
            path="/account/addrando"
            element={
              <PrivateRoute isLogged={isLogged}>
                <AccountRandoAdd />
              </PrivateRoute>
            }
      />
      <Route
            path="/account/updaterando/:id"
            element={
              <PrivateRoute isLogged={isLogged}>
                <AccountRandoUpdate />
              </PrivateRoute>
            }
      />
      {/* <Route
            path="/account/addprogs"
            element={
              <PrivateRoute isLogged={isLogged}>
                <AccountProgAdd />
              </PrivateRoute>
            }
      /> */}
    </Routes>
  );
};

export default App;