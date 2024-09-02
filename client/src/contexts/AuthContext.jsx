import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.get('/api/auth/validate', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
      })
      .finally(() => {
        setLoading(false); // Stop loading once validation is complete
      });
    } else {
      setLoading(false); // Stop loading if no token is found
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
