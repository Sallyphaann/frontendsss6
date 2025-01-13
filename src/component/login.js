// src/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [failMessage, setFailMessage] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      const userData = {
        email,
        password,
      };

      try {
        // Replace with your API endpoint
        const response = await axios.post('http://localhost:8081/login', userData);
        console.log('Login successful:', response.data);

        // Show success message
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 2000);

        // Navigate to profile page
        navigate('/profile');
      } catch (error) {
        console.error('Login failed:', error);

        // Show failure message
        setFailMessage(true);
        setTimeout(() => {
          setFailMessage(false);
        }, 5000);
      }
    } else {
      console.error('Please fill in all fields.');
    }
  };
  
    return (
      <div className="login-container">
        <div className="login-left">
          <img
            src="https://t4.ftcdn.net/jpg/01/09/23/89/360_F_109238979_8qLUFshVRXss6meBwqudhyDCxAcURXYP.jpg"
            alt="Login Banner"
            width="500"
            height="200"
          />
          <p>Please enter your email & password</p>
  
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
  
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              required
            />
  
            <button type="submit" className="btn btn-signin">
              Sign In
            </button>
          </form>
  
          <p>
            Don't have an account? <a href="/register">Register Now</a>
          </p>
  
          {successMessage && (
            <div className="success-message">Login success!!!</div>
          )}
  
          {failMessage && (
            <div className="fail-message">
              Login failed. Please check your credentials.
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Login;