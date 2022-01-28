

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
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
      const {token, userData } = data;
      localStorage.setItem("user-token", JSON.stringify(token));
      localStorage.setItem("user-info", JSON.stringify(userData));
      dispatch(userLoggedIn(userData));
      history.push("/ride/offer");
      const notify = () => toast(data.message);
      notify();
    } catch (err) {
      dispatch(signupError({ userError: err.response.data.message }));
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
export default UserLoginPage;
