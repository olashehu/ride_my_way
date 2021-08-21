import React,{useState} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from "react-router-dom";
import NavigationBar from "../LandingPage/NavigationBar";
import {  useDispatch, connect } from 'react-redux';
import { userLoggedIn, signupError } from '../../reducers/authslice';
import axios from 'axios';
import jwtDecode from "jwt-decode";
 
 toast.configure();
 const Login = (props) => {
  const history = useHistory()
  const [isLoggedIn, setIsLogged] = useState({
    email: '',
    password: ''
  })
  const dispatch =useDispatch()
   function handleChange(e){
    setIsLogged(
      {...isLoggedIn, [e.target.name]: e.target.value})
  }
   async function handleSubmit(e){
    e.preventDefault();
    try {
    const {data} = await  axios({
      method: 'post',
      baseURL: 'http://localhost:3000/v1/user/login',
      data: isLoggedIn,
    });
     const token = data.token;
     localStorage.setItem("token",JSON.stringify(token))
     const validToken = localStorage.getItem("token");
     const decoded = jwtDecode(validToken);
     localStorage.setItem("user", JSON.stringify(decoded.data))
     dispatch(userLoggedIn(decoded.data))
     history.push('/ride/offer')
     const notify = () => toast(data.message);
      notify();
    } catch (error) {
      dispatch(signupError({userError: error.response.data.message}))
    }
    
  }
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
      onSubmit={handleSubmit}
      >
        <div><span style={{color:'red'}}>{props.auth.userError}</span></div>
        <div className="form">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            type="email"
            placeholder="mail@mail.com"
            required
            name="email"
            value={isLoggedIn.email}
            onChange = {handleChange}
          />
     
        </div>
        <div className="form">
          <label htmlFor="password" className="label-text">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"        
            name="password"
           required
           value={isLoggedIn.password}
           onChange = {handleChange}
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
 const mapStateToProps =(state) =>{
return {
  auth: state.auth
}
}
export default connect(mapStateToProps)(Login);
