import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import "./Login.css";
import Cookies from 'universal-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const cookie = new Cookies();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:2024/login', { username, password });
      
      // Set the JWT token in a cookie with the name 'jwt'
      console.log([response])
      cookie.set('jwt', response.data.token);
  
      const getCookie = cookie.get('jwt');
      //console.log(getCookie);
  
     if (getCookie) {
        navigate('/product');
      } else {
        console.log('Cookie is set. Redirecting to /product');
      navigate('/');
      }
     }catch (error) {
      console.error('Login error:', error);
    }
  };
  
  ;

  return (
    <div className='login_con'>
      <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div>
          <button onClick={handleLogin}>Login</button>
          <NavLink to="/regi"> <button> Sign up</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;











