import React from 'react';
//import Navbar from "./components/Navbar.jsx"
import Movies from './components/Movies.jsx';
import "./App.css";
import Login from "./components/Login.jsx"
import Cart from './components/Cart.jsx';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import NOtfound from './components/NOtfound.jsx';
import RegistrationForm from './components/Registration.jsx';
import Protect from './components/ProtectedRoute.jsx';
//import  Scroll from "./components/Scroll.jsx"


function App() {
  return (
   
      

    
<div className='disply_con'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/regi" element={<RegistrationForm />} />
           
        <Route element={<Protect/>}>        
            <Route  index path="/cart" element={<Cart/>}/>
            <Route path="/product" element = {<Movies/>} />
           </Route>        

 {/* <Route  path="/cart" element={<Protect>  <Cart/>  </Protect>} />
 <Route  path="/product" element={<Protect>  <Movies/>  </Protect>} /> */}


          <Route path="*" element={<NOtfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  

  
}

export default App

{/* <Route path="/cart" element={<Cart />} />
  <Route path="/product" element={<Movies />} /> */}

