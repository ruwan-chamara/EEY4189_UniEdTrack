import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    axios.post('http://localhost:3001/forgot-password', { email, password })
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/login');
        } else {
          alert(res.data.Status); 
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div 
      className="d-flex justify-content-center bg-secondary align-items-center vh-100" 
    >
      <div className="bg-white p-4 rounded shadow" style={{ width: '400px' }}>
        <h3 className=" mb-4 ">Forgot Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter New Password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         <button type="submit" className="btn btn-primary w-100 fw-semibold">
           Submit
         </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;