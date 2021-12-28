/** @format */

import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, connect } from "react-redux";
import { toast } from "react-toastify";
toast.configure();

import DriverSignup from "../../components/LandingPage/Account/DriverSignup";

const DriverSignupPage = (props) => {
  const [driverSignup, setDriverSignup] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    carModel: "",
    modelYear: "",
    licencePlate: "",
  });
  const handleChange = (e) => {
    setDriverSignup({ ...driverSignup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
        console.log(setDriverSignup(driverSignup, 'page sign up'));
    try {
      const { data } = await axios({
        method: "POST",
        baseURL: "https://3000/v1/driver/signup",
        daata: driverSignup,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
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


// export default DriverSignupPage;
