
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  toast('Please enter the registered email address', {
  id: 'forgot-email-hint',
  //icon: '📧',
   duration: 4000,
  })
}, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3001/forgot-password',
        {
          email,
          password
        }
      );

      if (res.data.Status === 'Success') {
        alert('Password updated successfully!');
        navigate('/login');
      } else {
        setMessage(res.data.Status);
      }

    } catch (err) {
    console.log("Error:", err.response?.data);
    console.log("Status:", err.response?.status);
    }
  };

  return (
    <div className="d-flex justify-content-center bg-secondary align-items-center vh-100">
      <div className="bg-white p-4 rounded shadow"
        style={{ width: '400px' }}>

        <h3 className="mb-4">Forgot Password</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Email
            </label>

            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter New Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className="text-danger">{message}</p>
          )}

          <button
            type="submit"
            className="btn w-100 text-white btn-primary fw-semibold"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
