import React from 'react'
import NavigationBar from './LandingPage/NavigationBar'

const ForgetPassword = () => {
    return (
        <div>
       <NavigationBar/>
      <div className="container-forgetPass">
        <div className="header">
          <h3>Reset Password</h3>
        </div>
        <form
          action="backend.php"
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
          <button className="login-btn">Reset</button>
      
          
        </form>
      </div>
      </div>
    )
}

export default ForgetPassword
