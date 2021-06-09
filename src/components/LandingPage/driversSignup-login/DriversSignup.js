import React from 'react'
import {Link} from 'react-router-dom'
import './DriversSignup.css'
import NavigationBar from '../NavigationBar'


const DriversSignup = () => {
    return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="imgbg-drivers-sign-in">
          <div className="drivers-sign-in">
      <div className="drivers-header">
        <h3>Signup as a driver below</h3>
      </div>
      <form
        action=""
        className="main-drivers-form">

        <div className="pilot-sign">
          <label htmlFor="first-name" className="label-text-pilot">
            First Name
          </label>
          <input
            type="text"
            name="first-name"
          />
      
        </div>
        <div className="pilot-sign">
          <label htmlFor="last-name" className="label-text-pilot">
            Last Name
          </label>
          <input
            type="text"
            name="last-name"
            required
          />
        </div>
        <div className="pilot-sign">
          <label htmlFor="address" className="label-text-pilot">
            Address
          </label>
          <input
            type="text"
            required
            name="address"
          />
          </div>
          <div className="pilot-sign">
          <label htmlFor="telphone" className="label-text-pilot">
            Phone Number
          </label>
          <input
            type="tel"
            required
            name="telephone"
            placeholder="123-45-678" 
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </div>
        <div className="pilot-sign">
          <label htmlFor="email" className="label-text-pilot">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
        
          />
    
        </div>
        <div className="pilot-sign">
          <label htmlFor="password" className="label-text-pilot">
            Password
          </label>
          <input
            type="password"
            name="password1"  
            required
          />
       
        </div>
       

        <Link to = '/next'> <button className="Sign-btn-pilot">Next</button></Link>
        <div className="terms-condition" style={{display:"flex", marginTop:"1.5rem"}}>
          {/* <input type="checkbox" style={{marginRight:'1rem'}}/> */}
          {/* <p>I agree to the Terms and Conditions</p> */}
        </div>
        <div className="have-account">
          <p>
            {" "}
            Already a registered user?{" "}
            <Link to="/driverslogin">
              <span>Login here</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
</div>    
    </div>
  );
};


export default DriversSignup
