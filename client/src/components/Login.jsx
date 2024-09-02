import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [classes, setClasses] = useState([]); 

  useEffect(() => {
    if (location.state) {
      const { email, password } = location.state;
      if (email) setEmail(email);
      if (password) setPassword(password);
    }
  }, [location.state]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/login', { email, password });
      const { token , username } = response.data;
        console.log(response.data.username)
        console.log(response.data.token)
      if (token) {
        login(token); // Set the user as authenticated and store token
        navigate('/home',{ state: { username } });
      } else {
        setStatus('Login failed');
      }
    } catch (err) {
      console.error(err.response.data);
      setStatus(err.response.data || 'Login failed');
    }
  };

  
  let  handleSubmit1=()=>{
    setClasses([...classes, 'animate__animated animate__shakeX']);
  }
  // useEffect(()=>{
  //   handleSubmit1()
      
    
  // },[handleSubmit1])
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <span className="title">Log in</span>
          <span className="subtitle">Welcome back! Please enter your details.</span>
          <div className="form-container">
            <input 
              type="email" 
              className="input" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              className="input" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit1} className="button" type="submit">Log in</button>
          {status && <p className={classes.join('')}>{status} </p>}
        </form>
        <div className="form-section">
          <p >Don't have an account? <Link to='/'>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
