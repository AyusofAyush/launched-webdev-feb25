import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []); // if empty array passed -> only runs once when component loads

  const handleLogin = async (credentials) => {
    const userData = await login(credentials);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleRegister = async (userData) => {
    const registeredUser = await register(userData);
    setUser(registeredUser);
    localStorage.setItem('user', JSON.stringify(registeredUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
