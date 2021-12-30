

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
toast.configure();

import { userLoggedIn, signupError } from "../../reducers/authslice";
import Login from "../../components/LandingPage/Account/UserLogin/Login.jsx";

const UserLoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userLogin, setUserLoggin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserLoggin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        baseURL: "http://localhost:3000/v1/user/login",
        data: userLogin,
      });
      const token = data.token;
      localStorage.setItem("token", JSON.stringify(token));
      const isToken = JSON.parse(localStorage.getItem("token"));
      const decodedToken = jwtDecode(isToken);
      localStorage.setItem("user", JSON.stringify(decodedToken));
      dispatch(userLoggedIn(decodedToken.data));
      history.push("/ride/offer");
      const notify = () => toast(data.message);
      notify();
    } catch (error) {
      dispatch(signupError({ userError: error.response.data.message }));
    }
  };

  return (
    <Login handleChange={handleChange} handleSubmit={handleSubmit} data={userLogin} />
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(UserLoginPage);
