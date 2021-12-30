import React from 'react'
import { useDispatch } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import { setCurrentDriver } from './reducers/driverSlice';

function PivateRoute({component: Component,...rest}) {
  const dispatch = useDispatch()
  let isAuthenticated = false
  const driver = localStorage.getItem("driver-info");
  if(driver){
    dispatch(setCurrentDriver(JSON.parse(driver)));
    isAuthenticated = true
  }
  return (
    <div>
      <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/driver/login" />)} />
    </div>
  );
}
export default withRouter(PivateRoute);