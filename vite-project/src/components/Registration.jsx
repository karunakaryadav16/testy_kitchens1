import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:2024/register', { username, password }, { headers: { 'Content-Type': 'application/json' } });
      console.log(response.data);
      setRegistrationMessage(response.data.message);
    } catch (error) {
      console.error('Registration error:', error.response);
      setRegistrationMessage('Registration failed');
    }
  };

  return (
    <div className="regis_con">
      <div>
        <h2>Register yourself</h2>
        <div>           
        <label for="mail"> <span> Username or Email</span></label><br/>
        <input id="mail" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>          
        <label for="pas"><span> Password</span></label><br/>
        <input id="pas" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <span>{registrationMessage}</span>
        <div>
          <button onClick={handleRegister}>Register</button>
          {registrationMessage === 'User registered successfully' ?<NavLink to="/"> <button>Back to login page</button> </NavLink>:""}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
