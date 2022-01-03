/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
toast.configure();

import DriverSignup from "../../components/LandingPage/Account/DriverSignup/DriverSignup";
import { setCurrentDriver, driverSignupError } from "../../reducers/driverSlice";

const DriverSignupPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [driverSignup, setDriverSignup] = useState({
    firstName: "",
    lastName: "",
    phone: '',
    email: '',
    password: ''
  });
  function handleChange(e) {
    setDriverSignup({ ...driverSignup, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("how");
      const { data } = await axios({
        method: "post",
        baseURL: "http://localhost:3000/v1/driver/signup",
        data: driverSignup,
      });
      const token = data.token;
      localStorage.setItem("driver-token", JSON.stringify(token));
      const isToken = JSON.parse(localStorage.getItem("driver-token"));
      const decodedToken = jwtDecode(isToken);
      localStorage.setItem("driver-info", JSON.stringify(decodedToken.data));
      dispatch(setCurrentDriver(decodedToken.data));
      history.push("/driver/add-offer");
      const notify = () => toast(data.message);
      notify();
    } catch(err) {
       dispatch(driverSignupError({ userError: err.response.data.message }));
    }
  };

  return (
    <DriverSignup
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      data={driverSignup}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    driverAuth: state.driverAuth,
  };
};

export default connect(mapStateToProps)(DriverSignupPage);
