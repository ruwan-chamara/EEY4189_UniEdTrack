import bgImage from './assets/loging_background.jpg';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          navigate('/dashboard');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bg-white p-3 rounded w-25 shadow">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input 
              type="email"
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
              type="password"
              placeholder='Enter Password'
              autoComplete='new-password'
              name='password'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-0">
            Login
          </button>
          
          <p className="forgot-password text-end mt-2">
            <small>
              <Link to={'/forgot-password'}>Forgot password?</Link>
            </small>
          </p>
        </form>

        <p className='text-center mt-3'>Don't have an account</p>
        <Link to="/register" className="btn btn-default border w-100 bg-secondary text-white rounded-0 text-decoration-none">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
export default Login;