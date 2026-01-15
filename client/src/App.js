import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './elements/Home';
import Edit from './elements/Edit';
import Create from './elements/Create';
import Show from './elements/Show';
import LoginForm from './elements/LoginForm';
import RegisterForm from './elements/RegisterForm';
import Logout from './elements/Logout'; 
import AddMember from './elements/AddMember';
import UserProfile from './elements/UserProfile';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/" element={<RegisterForm />} />
          <Route path="/members" element={<AddMember />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:project_id" element={<Edit />} />
          <Route path="/show/:project_id" element={<Show />} />
          <Route path="/logout" element={<Logout />} /> 
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
