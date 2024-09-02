import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
