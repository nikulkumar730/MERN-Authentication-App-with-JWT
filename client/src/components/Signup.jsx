import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.post('/api/users/register', { name, email, password })
      .then((result) => {
        setStatus('Successfully submitted');
        setTimeout(() => {
          setLoading(false);
          navigate('/login', { state: { email, password } });
        }, 1000);
      })
      .catch(error => {
        setLoading(false);
        setStatus('Something went wrong');
        console.error(error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {loading ? (
        <div className="loading-box">
          <img src="/loaderIMG.gif" alt="Loading..." />
        </div>
      ) : (
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">Sign up</span>
            <span className="subtitle">Create a free account with your email.</span>
            <div className="form-container">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button" type="submit" disabled={loading}>Sign up</button>
            {status && <p>{status}</p>}
          </form>
          <div className="form-section">
            <p>
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
