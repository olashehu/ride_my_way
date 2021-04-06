import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../LandingPage/NavigationBar";


export const Signup = () => {


  return (
    <div>
      <NavigationBar></NavigationBar>
    <div className="container-sign">
      <div className="header">
        <h3>Register</h3>
      </div>
      <form
        action=""
        className="main-form"
        
      >
          <div className="form-sign">
          <label htmlFor="email" className="label-text">
            First Name
          </label>
          <input
            type="email"
            name="firstName"
            />
      
        </div>
        <div className="form-sign">
          <label htmlFor="email" className="label-text">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            required
          />
        </div>
        <div className="form-sign">
          <label htmlFor="address" className="label-text">
            Address
          </label>
          <input
            type="text"
            required
            name="address"
          />
        </div>
        <div className="form-sign">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
        
          />
    
        </div>
        <div className="form-sign">
          <label htmlFor="password" className="label-text">
            Password
          </label>
          <input
            type="password"
            name="password1"  
            required
          />
       
        </div>
       

        <button className="Sign-btn">Sign up</button>
        <div className="forget-password-containe" style={{display:"flex", marginTop:"1.5rem"}}>
          <input type="checkbox" style={{marginRight:'1rem'}}/>
          <p>I agree to the Terms and Conditions</p>
        </div>
        <div className="not_account_yet_container">
          <p>
            {" "}
            Already a registered user?{" "}
            <Link to="/login">
              <span>Login here</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};
export default Signup;
