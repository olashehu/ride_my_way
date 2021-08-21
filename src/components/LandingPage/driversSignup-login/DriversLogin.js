import React, { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom';
import {  useDispatch, connect } from 'react-redux';
import NavigationBar from '../NavigationBar';
import { driverLoggedIn, driverSignupError } from '../../../reducers/driverSlice';
import axios from 'axios';
import jwtDecode from "jwt-decode";

toast.configure();
const DriversLogin = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [driverLogin, setDriverLogin] = useState({
    email: '',
    password: ''
  })

  function handleChange(e){
    setDriverLogin({...driverLogin, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const{ data } = await axios({
        method: 'post',
        baseURL: "http://localhost:3000/v1/driver/login",
        data: driverLogin
      })
      const token = data.token;
      localStorage.setItem("driver-token", JSON.stringify(token));
      const isToken = localStorage.getItem("driver-token");
      let decoded = jwtDecode(isToken);
      localStorage.setItem("driver-info",JSON.stringify(decoded.data));
      dispatch(driverLoggedIn(decoded.data));
      history.push('/driver/dashboard');
      const notify = () => toast(data.message);
      notify();
    } catch (error) {
      dispatch(driverSignupError({driverError: error.response.data.message}))
    }
     
  }
  return(
        <div>
          <NavigationBar></NavigationBar>
          <div className="container-login">
             <div className="header">
               <h3>Login as a driver here</h3>
             </div>
             <form className="main-form" onSubmit={handleSubmit}>
              <div className="form">
                <label htmlFor="email" className="label-text">Email</label>
                <input
                  type="email"
                  placeholder="mail@mail.com"
                  required
                  name="email"
                  
                  onChange={handleChange}
                />
     
              </div>
              <div className="form">
                <label htmlFor="password" className="label-text"> Password</label>
                <input
                 type="password"
                 placeholder="Enter your password"        
                 name="password"
                 required
                 
                 onChange={handleChange}
                />
              </div>

             <button className="login-btn" >Login</button>
             <div className="forget-password-container">
              <a href="/forgetPassword">Forget password ?</a>
             </div>
             <div className="not_account_yet_container">
               <p>
               {" "}
               Don't have an account?{" "}
               <Link to="/driver/signup">
                 <span>Register here</span>
               </Link>
              </p>
             </div>
             </form>
            </div>
        </div>
    )
}

const mapStateToProps =(state) =>{
  return {
    driverAuth: state.driverAuth
  }
}
export default connect(mapStateToProps)(DriversLogin);