import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { addtocart } from './Store.jsx';
import { useDispatch } from 'react-redux';
import "./Movies.css"
import Navbar from './Navbar.jsx';

function Movies() {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      const url = 'https://dummyjson.com/products';
      const options = {
        method: 'GET',
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setState(result.products);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []); 
  return (<>     
    <Navbar/>

    <div className='product_container'>
          <ul>
          {state.map((movie) => (
        <li>  <div className='image_card' key={movie.id}>
                        <div>
                          <img   src={movie.images[0]} alt={movie.title}/>
                        </div>
                             <hr/>
                             <div>
                             <h6 className="card-title"> &nbsp;&nbsp;{movie.title}</h6>
                               <p className="card-text"> &nbsp;&nbsp;{movie.description}</p>
                             </div>
                             <hr/>
                             <div>
                             <span> &nbsp;&nbsp;<span>Price&nbsp;:&nbsp;&nbsp;<sup>₹</sup></span>{movie.price}</span><br/>
                             <span>&nbsp;&nbsp;<span>Rating&nbsp;:&nbsp;&nbsp;</span>{movie.rating}</span><br/>
                             </div>
                             <hr/>
                            <div>
                              <button onClick={()=>dispatch(addtocart(movie))}> <NavLink to="/cart"> Add to Cart</NavLink></button>
                              <button> Buy now</button>
                            </div>
                               
        </div>
        </li>
      ))}
          </ul>
    </div>
    </>
  );
}

export default Movies;






















