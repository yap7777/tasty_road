import { createContext, useEffect, useState } from 'react';

// 1. context 생성
export const AuthContext = createContext({
  isLoggedIn: false,
  setLogin: () => {},
  setLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    setIsLoggedIn(!!user);
  }, []);

  const setLogin = () => {
    setIsLoggedIn(true);
  };

  const setLogout = () => {
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{ isLoggedIn, setLogin, setLogout }}>{children}</AuthContext.Provider>;
};
