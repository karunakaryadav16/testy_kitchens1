/*import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Movies from './Movies';

const ProtectedRoute = ({ element, ...rest }) => {
  const cookies = new Cookies();
  const token = cookies.get('jwt');

  return token ? (
    <Route {...rest} element={<Movies/>} />
  ) : (
    <Navigate to="/"/>
  );
};

export default ProtectedRoute;
*/

import { Navigate } from 'react-router-dom';

//import { Route} from 'react-router-dom'
import Cookies from 'universal-cookie';


const ProtectedRoute = ({children}) => {
 // const navigate = useNavigate();
  const cookie = new Cookies();


  const token = cookie.get('jwt')
  console.log(token)//////read
  if(token){
    return children
  }else{
    return <Navigate to="/" />
    
  }
}

export default ProtectedRoute




//




















