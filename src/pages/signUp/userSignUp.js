/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

import UserSignup from "../../components/LandingPage/Account/UserSignup/Signup.jsx";
import { setCurrentUser, signupError } from "../../reducers/authslice.js";

const UserSignupPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        baseURL: "http://localhost:3000/v1/user/signup",
        data: userRegister,
      });
      const token = data.token;
      localStorage.setItem("user-token", JSON.stringify(token));
      const getToken = JSON.parse(localStorage.getItem("user-token"));
      const decodedToken = jwtDecode(getToken);
      localStorage.setItem("user-info", JSON.stringify(decodedToken));
      dispatch(setCurrentUser(decodedToken.data));
      history.push("/ride/offer");
      const notify = () => toast(data.message);
      notify();
    } catch (error) {
      dispatch(signupError({ userError: err.response.data.message }));
    }
  };
  return (
    <UserSignup
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      data={userRegister}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(UserSignupPage);
