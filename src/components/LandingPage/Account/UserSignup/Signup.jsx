

import { Link } from "react-router-dom";

import Input from "../../../../Utility/TextInput/Input";
import Button from "../../../../Utility/Button/Button";
import "./Signup.css";
import NavigationBar from "../../Header/NavigationBar";
import Footer from "../../Footer/Footer";

const UserSignup = ({ handleChange, handleSubmit, data }) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="form-wrapper">
        <header className="user-signup-header-wrapper">Signup here as a user</header>
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
            <Link to="/user/login" className="back-to-loginpage">
              Login here
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserSignup;
