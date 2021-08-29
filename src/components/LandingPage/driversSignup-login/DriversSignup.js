import React, { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import './DriversSignup.css';
import NavigationBar from '../NavigationBar';
import { useDispatch, connect } from 'react-redux';
import NextSignup from './NextSignup';
import jwtDecode from "jwt-decode";
import { setCurrentDriver, driverSignupError } from '../../../reducers/driverSlice';

toast.configure();
const DriversSignup = (props) => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const [driverSignup, setDriverSignup] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    carModel: '',
    modelYear: '',
    licencePlate: ''
  })
 
  const [showNextComponent, setShowNextComponent] = useState(false);

  function handleChange(e){
    setDriverSignup(
      {...driverSignup, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      const { data }= await axios({
       method: 'post',
       baseURL: 'http://localhost:3000/v1/driver/signup',
       data: driverSignup,
    });
     const token = data.token;
     localStorage.setItem("driver-token", JSON.stringify(token));
     const isToken = localStorage.getItem("driver-token")
     const decoded = jwtDecode(isToken);
     localStorage.setItem("driver-info",JSON.stringify(decoded.data))
     dispatch(setCurrentDriver(decoded.data))
     history.push("/driver/dashboard");
     const notify = () => toast(data.message);
     notify();

    } catch (err) {
      dispatch(driverSignupError({userError: err.response.data.message}))
    }
  }

    return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="imgbg-drivers-sign-in">
          <div className="drivers-sign-in">
      <div className="drivers-header">
        <h3>Signup as a driver below</h3>
      </div>
      <h3 style={{color: 'red'}}>{props.driverAuth.driverError}</h3>
      <form
        action=""
        className="main-drivers-form">
      <>
        {
          !showNextComponent && 
          (
          <>
          <div className="pilot-sign">
          <label htmlFor="first-name" className="label-text-pilot">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={driverSignup.firstName}
          />
        </div>
        <div className="pilot-sign">
          <label htmlFor="lastNname" className="label-text-pilot">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={driverSignup.lastName}
            required
          />
        </div>
        <div className="pilot-sign">
          <label htmlFor="telphone" className="label-text-pilot">Phone</label>
          <input
            type="tel"
            required
            name="phone"
            placeholder="123-45-678" 
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={handleChange}
            value={driverSignup.phone}
          />
        </div>
        <div className="pilot-sign">
          <label htmlFor="email" className="label-text-pilot">Email</label>
          <input
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={driverSignup.email}
         />
        </div>
        <div className="pilot-sign">
          <label htmlFor="password" className="label-text-pilot">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={driverSignup.password}  
            required
          />
        </div>
       
        <button className="Sign-btn-pilot" onClick = {() => setShowNextComponent(true)}>Next</button>
        <div className="terms-condition" style={{display:"flex", marginTop:"1.5rem"}}>
        
        </div>
        </>
        )
        
        }
        {showNextComponent && <NextSignup data={driverSignup} handleChange={handleChange} handleSubmit={handleSubmit} />}
        </>
        <div className="have-account">
          <p>
            {" "}
            Already a registered user?{" "}
            <Link to="/driver/login">
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

const mapStateToProps =(state) =>{
return {
  driverAuth: state.driverAuth
}
}
export default connect(mapStateToProps)(DriversSignup);
