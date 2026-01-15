import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa';
const LoginForm = ({ onLogin }) => {
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      console.log('Sending:', { user_id, password });

      const response = await axios.post('http://192.168.78.157:5000/api/v1/login', {
        user_id,
        password,  // No need for `username`
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Response:', response.data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      onLogin(token);
      navigate('/home');
    } catch (error) {
      console.log('Error:', error.response?.data || error.message);
      setErrorMessage('Invalid user ID or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <div className="login-form">
          <h2>Login</h2>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="user_id">
                <FaUser /> User ID
              </label>
              <input
                type="text"
                id="user_id"
                name="user_id"
                value={user_id}
                onChange={(e) => setUser_id(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">
                <FaLock /> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn2">Login</button>


          </form>
        </div>
        <div className="image-section">
          <div><h1>Welcome</h1></div>
          <div><p>Start your journey with us today and discover endless new opportunities!</p></div>

          <button type="button" className="btn3" onClick={() => navigate('/')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
