import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import "./Navbar.css"
import { LiaCartPlusSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
 // const history = useHistory();
  const cookies = new Cookies();
  const navigate = useNavigate()

  const onLogout = () => {
    // Remove the JWT token from cookies
    cookies.remove("jwt");
    navigate("/")

    // Dispatch an action to clear user data from Redux store (if needed)
    // dispatch(logoutAction());

    // Redirect to the login page
   // history.push("/login");
  }

  const nofitems = useSelector((item) => item.Ganesh_reddy);

  return (
    <div className='navbar'>
      <h1>Navbar</h1>

      <form>
        <input className="inpt" type="text" placeholder='Search products here' size={40} />
      </form>

      <div className='nav_con'>
        <NavLink to="/login"><span>Home</span></NavLink>
        <NavLink to="/product"><span> Products </span></NavLink>
        <NavLink to="/cart"><span> Cart {nofitems.length}</span></NavLink>

        <button onClick={onLogout}>Logout</button>

        <h1> <LiaCartPlusSolid /> </h1>
      </div>
    </div>
  )
}

export default Navbar;
