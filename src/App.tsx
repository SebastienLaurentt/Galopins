
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './components/Auth';
import MainPage from './sections/MainPage';
import Login from './sections/Login';
import Account from './sections/Account';

const App = () => {
  const  isAuthenticated  = useAuth();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route
        path="/account"
        element={isAuthenticated ? <Account /> : <Navigate to="/auth/login" />}
      />
    </Routes>
  );
};

export default App;