import React, {useState} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { useDispatch, connect } from 'react-redux';
import jwtDecode from "jwt-decode";

import NavigationBar from "../LandingPage/Header/NavigationBar";
import { setCurrentUser, signupError } from "../../reducers/authslice";

 toast.configure();
 const Signup = (props) => {
  const history = useHistory()
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  })
  const dispatch = useDispatch();

  function handleChange(e){
    setRegister(
      {...register, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const {data} = await axios({
       method: 'post',
       baseURL: 'http://localhost:3000/v1/user/signup',
       data: register,
    });
     dispatch(signupError({userError: ""}))
      const token = data.token;
      localStorage.setItem("token",JSON.stringify(token))
      const validToken = localStorage.getItem("token");
      const decoded = jwtDecode(validToken);
      localStorage.setItem("user", JSON.stringify(decoded.data))
      dispatch(setCurrentUser(decoded.data))
      history.push('/ride/offer')
      const notify = () => toast(data.message);
      notify();
    } catch (err) {
      dispatch(signupError({userError: err.response.data.message}))
    }
    
  }
  
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
         onSubmit = {handleSubmit}
        >
        <div className="form-sign">
          <label htmlFor="firstName" className="label-text">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={register.firstName}
            onChange = {handleChange}
          />
        </div>

        <div className="form-sign">
          <label htmlFor="lastName" className="label-text">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={register.lastName}
            onChange = {handleChange}
          />
        </div>

        <div className="form-sign">
          <label htmlFor="phone" className="label-text">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="080********"
            value={register.phone}
            onChange = {handleChange}
          />
        </div>

        <div className="form-sign">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={register.email}
            onChange = {handleChange}
          />
        </div>

        <div className="form-sign">
          <label htmlFor="password" className="label-text">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={register.password}
            onChange = {handleChange}
          />
        </div>
        <div><span style={{color:'red'}}>{props.auth.userError}</span></div>
        <button type="submit" className="Sign-btn">Sign up</button>
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
const mapStateToProps =(state) =>{
  return {
    auth: state.auth
}
}
export default connect(mapStateToProps)(Signup);
