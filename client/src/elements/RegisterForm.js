// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './RegisterForm.css';  

// const RegisterForm = () => {
//   const [user_id, setUser_id] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');
  
//     try {
//       const response = await axios.post('http://192.168.78.157:5000/api/v1/register', {
//         user_id,
//         username,
//         email,
//         password,
//       });
  
//       setSuccessMessage('Registration successful! Please log in.');
//       setTimeout(() => navigate('/login'), 2000); 
//     } catch (error) {
//       setErrorMessage('An error occurred during registration');
//     }
//   };

//   return (
//     <div className="register-form">
//       <h2>Register</h2>
//       {errorMessage && <p className="error">{errorMessage}</p>}
//       {successMessage && <p className="success">{successMessage}</p>}
//       <form onSubmit={handleSubmit}>
//       <div>
//           <label htmlFor="user_id">User Id</label>
//           <input
//             type="text"
//             id="user_id"
//             name="user_id"
//             value={user_id}
//             onChange={(e) => setUser_id(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//         <button type="button" onClick={() => navigate('/login')}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa';

import './RegisterForm.css';

const RegisterForm = () => {
  const [user_id, setUser_id] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://192.168.78.157:5000/api/v1/register', {
        user_id,
        username,
        email,
        password,
      });

      setSuccessMessage('Registration successful! Please log in.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || 'An error occurred during registration');
      } else {
        setErrorMessage('An error occurred during registration');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="image-section">
          <div><h1>Welcome</h1></div>



          <div><p>Stay connected by logging in with your personal information</p></div>
          <button type="button" className="btn3" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
        <div className="register-form">
          <h2>Create Account</h2>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <div className="input-group" >
                <label htmlFor="user_id">
                  <FaUser /> User ID
                </label>
                <input
                  type="text"
                  id="user_id"
                  value={user_id}
                  onChange={(e) => setUser_id(e.target.value)}
                  required
                  
                />
              </div>
              <div className="input-group">
                <label htmlFor="username">
                  <FaUserCircle /> Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn2">Register</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
