/** @format */

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavigationBar from "../../Header/NavigationBar";
import Input from "../../../../Utility/TextInput/Input";
import Footer from "../../Footer/Footer";
import "./DriverSignup.css";
import Button from "../../../../Utility/Button/Button";

const DriverSignup = ({ handleChange, handleSubmit, data }) => {
  return (
    <>
      <NavigationBar></NavigationBar>

      <div className="driver-signup-bg-wrapper">
        <div className="signup-bg"></div>
        <header className="signup-bg-text-wrapper">
          <h1>Drive with us</h1>
          <h4 className="driver-signup-sub-header-text">
            Turn your vehicle into money making machine and earn big while driving.
          </h4>
        </header>
      </div>
      <div className="form-wrapper">
        <form action="" onSubmit={handleSubmit}>
          <div className="signin-input-wrapper">
            <Input
              type="text"
              name="firstName"
              htmlFor="firstName"
              id="firstName"
              placeholder="FirstName"
              onChange={handleChange}
              value={data.firstName}
              required
            />
          </div>
          <div className="signin-input-wrapper">
            <Input
              type="text"
              name="lastName"
              htmlFor="lastName"
              id="lastName"
              placeholder="LastName"
              onChange={handleChange}
              value={data.lastName}
              required
            />
          </div>
          <div className="signin-input-wrapper">
            <Input
              type="number"
              name="phone"
              htmlFor="phone"
              id="phone"
              placeholder="PhoneNumber"
              onChange={handleChange}
              value={data.phone}
              required
            />
          </div>
          <div className="signin-input-wrapper">
            <Input
              type="email"
              name="email"
              htmlFor="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </div>
          <div className="signin-input-wrapper">
            <Input
              type="password"
              name="password"
              htmlFor="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              required
            />
          </div>
          <Button type="submit" buttonText="Signup" className="signin-button-wrapper" />

          <div className="back-to-loginpage-wrapper">
            <strong>Already a register user</strong>
            <Link to="/driver/login" className="back-to-loginpage">
              Login here
            </Link>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
};

DriverSignup.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default DriverSignup;
