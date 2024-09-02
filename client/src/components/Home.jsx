import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const location = useLocation();
  const [username,setUserName]=useState('')
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    if (location.state) {
      const { username } = location.state;
    if(username) setUserName(username)
    }
  }, [location.state]);
  
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>Welcome to the Home Page! </h1>
        <h2> hello  {username}!</h2>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
