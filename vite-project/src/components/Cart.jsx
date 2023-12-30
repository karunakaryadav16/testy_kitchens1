
import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { removefromcart } from './Store';
import Navbar from './Navbar';

import './Cart.css';

function Cart() {
  const cartItems = useSelector((store) => store.Ganesh_reddy);
  //console.log(cartItems)
  const dispatch = useDispatch()

  return (<>          
    <Navbar/>
    <div>
      
      {cartItems.length === 0 ? (
        <h1>Your Cart Is Empty</h1>
      ) : (
        <ul className='cart_items'>
          {cartItems.map((movie) => (
            <li><div className="card" style={{width:'18rem'}}>
            <img src={movie.images[0]} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <hr/>
            </div>
                <div className="card-body">
                    <span> <span>Price&nbsp;:&nbsp;&nbsp;<sup>₹</sup></span>{movie.price}</span><br/>
                    <span><span>Rating&nbsp;:&nbsp;&nbsp;</span>{movie.rating}</span><br/>
                    <span> <span> Brand&nbsp;:&nbsp;&nbsp;</span>{movie.brand}</span><br/>
                    
                        <hr/>
                </div>
                  <div className="card-body , cart_con" style={{width:"100%"}}>
                       
                       <button  className="addto" onClick={()=>(dispatch(removefromcart(movie)))}>Remove from Cart </button> 
                    
                </div>
            
      
      </div></li>
           
          ))}
        </ul>
      )}
    </div>
    </>
  );
}

export default Cart;


























































