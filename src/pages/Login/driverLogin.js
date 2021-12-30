/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
toast.configure();

import DriverLogin from "../../components/LandingPage/Account/DriverLogin/DriverLogin";
import { driverLoggedIn, driverSignupError } from "../../reducers/driverSlice";

const DriverLoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [driverLogin, setDriverLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setDriverLogin({ ...driverLogin, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        baseURL: "http://localhost:3000/v1/driver/login",
        data: driverLogin,
      });
      const token = data.token;
      localStorage.setItem("driver-token", JSON.stringify(token));
      const isToken = JSON.parse(localStorage.getItem("driver-token"));
      const decodedToken = jwtDecode(isToken);
      localStorage.setItem("driver-info", JSON.stringify(decodedToken.data));
      dispatch(driverLoggedIn(decodedToken.data));
      history.push("/driver/add-offer");
      const notify = () => toast(data.message);
      notify();

    } catch (error) {
      dispatch(driverSignupError({ driverError: error.response.data.message }));
    }
  };

  return (
    <DriverLogin
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      data={driverLogin}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    driverAuth: state.driverAuth,
  };
};
export default connect(mapStateToProps)(DriverLoginPage);
