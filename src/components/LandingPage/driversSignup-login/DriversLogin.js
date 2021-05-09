import React from 'react'
import {Link} from 'react-router-dom'
import NavigationBar from '../NavigationBar'
const DriversLogin = () => {
    return (
        <div>
          <NavigationBar></NavigationBar>
          <div className="container-login">
             <div className="header">
               <h3>Login as a driver here</h3>
             </div>
             <form action="" className="main-form">
              <div className="form">
                <label htmlFor="email" className="label-text">Email</label>
                <input
                 type="email"
                 placeholder="mail@mail.com"
                 required
                 name="email"/>
     
              </div>
              <div className="form">
                <label htmlFor="password" className="label-text"> Password</label>
                <input
                 type="password"
                 placeholder="Enter your password"        
                 name="password1"
                 required
                />
              </div>

             <Link to = '/drivers-dashboard' ><button className="login-btn">Login</button></Link>
        <div className="forget-password-container">
          <a href="/forgetPassword">Forget password ?</a>
        </div>
        <div className="not_account_yet_container">
          <p>
            {" "}
            Don't have an account?{" "}
            <Link to="/driversignup">
              <span>Register here</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
        </div>
    )
}

export default DriversLogin
