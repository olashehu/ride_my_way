

import { Link } from "react-router-dom";

import Input from "../../../../Utility/TextInput/Input";
import NavigationBar from "../../Header/NavigationBar";
import Button from "../../../../Utility/Button/Button";
import "./DriverLogin.css";
import NewFooter from "../../NewFooter/NewFooter";

const DriverLogin = ({ handleChange, handleSubmit, data }) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="login-wrapper">
        <h1 className="login-header-wrapper">Login as driver</h1>
        <form action="post" onSubmit={handleSubmit}>
          <div className="login-input-wrapper">
            <Input
              type="email"
              name="email"
              id="email"
              htmlFor="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="login-input-wrapper">
            <Input
              type="password"
              name="password"
              id="password"
              htmlFor="password"
              placeholder="Password"
              required
              onChange={handleChange}
              value={data.password}
            />
          </div>
          <Button
            type="submit"
            buttonText="Login"
            className="login-button-wrapper"
          />

          <div className="back-to-signup-wrapper">
            <span>Don't have an account</span>
            <Link to="/driver/signup">Register here</Link>
          </div>
        </form>
      </div>
      <NewFooter />
    </>
  );
};
export default DriverLogin;
