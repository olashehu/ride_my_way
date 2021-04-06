import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../LandingPage/NavigationBar";


export const Login = () => {

  return (
    <div>
      <NavigationBar></NavigationBar>
    <div className="container-login">
      <div className="header">
        <h3>Login</h3>
      </div>
      <form
        action=""
        className="main-form"

      >
        <div className="form">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            type="email"
            placeholder="mail@mail.com"
            required
            name="email"
          
          />
     
        </div>
        <div className="form">
          <label htmlFor="password" className="label-text">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"        
            name="password1"
           required
          />
          
        </div>

        <button className="login-btn">Login</button>
        <div className="forget-password-container">
          <a href="/forgetPassword">Forget password ?</a>
        </div>
        <div className="not_account_yet_container">
          <p>
            {" "}
            Don't have an account?{" "}
            <Link to="/signup">
              <span>Register here</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};
export default Login;
