// Auth.js
import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(Cookies.get('isLogged') === 'true');

  const login = () => {
    setIsLogged(true);
    Cookies.set('isLogged', 'true', { expires: 1/24 });
  };

  const logout = () => {
    setIsLogged(false);
    Cookies.remove('isLogged');
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

