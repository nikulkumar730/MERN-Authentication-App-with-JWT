import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking authentication
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
