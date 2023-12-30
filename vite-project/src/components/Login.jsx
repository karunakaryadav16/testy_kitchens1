import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import "./Login.css";
import Cookies from 'universal-cookie';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const cookie = new Cookies();
  console.log(username, password)
  const renderSuccess = jwtToken => {
    cookie.set("jwt", jwtToken)
    navigate("/")
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    // const options = {
    //   body: JSON.stringify({ username, password })
    // }

    const response = await axios.post('http://localhost:2025/login', { username, password });
    // const data = await response.json()
    renderSuccess(response.data.token)

  };


  const token = cookie.get("jwt")
  if (token !== undefined) {
    return <Navigate to="/" />
  }


  return (
    <div className='login_con'>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div>
          <button type='submit'>Login</button>
          <NavLink to="/regi"> <button> Sign up</button></NavLink>
        </div>
      </form>
    </div >
  );
};

export default Login;











