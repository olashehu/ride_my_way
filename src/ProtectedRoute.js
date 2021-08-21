import React from 'react'
import { useDispatch } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import { setCurrentUser  } from './reducers/authslice';
//import { setCurrentDriver } from './reducers/driverSlice';

function ProtectedRoute({component: Component,...rest}) {
  const dispatch = useDispatch()
  let isAuthenticated = false
  const user = JSON.parse(localStorage.getItem('user'));
  if(user){
    dispatch(setCurrentUser(user));
    isAuthenticated = true
  }
  return (
    <div>
      <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />
    </div>
  );
}
export default withRouter(ProtectedRoute);