/** @format */

import { Link } from "react-router-dom";

import Input from "../../../../Utility/TextInput/Input";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Header/NavigationBar";
import Button from "../../../../Utility/Button/Button";
import "./DriverLogin.css";
// import { driverLoggedIn, driverSignupError } from '../../../../reducers/driverSlice';
//

const DriverLogin = ({ handleChange, handleSubmit, data }) => {
  // function handleChange(e){
  //   setDriverLogin({...driverLogin, [e.target.name]: e.target.value})
  // }
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const{ data } = await axios({
  //       method: 'post',
  //       baseURL: "http://localhost:3000/v1/driver/login",
  //       data: driverLogin
  //     })
  //    
  //     localStorage.setItem("driver-token", JSON.stringify(token));
  //     const isToken = localStorage.getItem("driver-token");
  //     let decoded = jwtDecode(isToken);
  //     localStorage.setItem("driver-info",JSON.stringify(decoded.data));
  //     dispatch(driverLoggedIn(decoded.data));
  //     history.push('/driver/add-offer');
  //     const notify = () => toast(data.message);
  //     notify();
  //   } catch (error) {
  //     dispatch(driverSignupError({driverError: error.response.data.message}));
  //   };

  // };

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="driver-login-wrapper">
        <h1 className="driver-login-header-wrapper">Login as driver</h1>
        <form action="post" onSubmit={handleSubmit}>
          <div className="driver-input-wrapper">
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
          <div className="driver-input-wrapper">
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
            className="driver-login-button-wrapper"
          />

          <div className="back-to-driver-signup-wrapper">
            <span>Don't have an account</span>
            <Link to="/driver/signup">Register here</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>

    // <div>
    //
    //     <div className="container-login">
    //        <div className="header">
    //          <h3>Login as a driver here</h3>
    //        </div>
    //        <form className="main-form" onSubmit={handleSubmit}>
    //         <div className="form">
    //           <label htmlFor="email" className="label-text">Email</label>
    //           <input
    //             type="email"
    //             placeholder="mail@mail.com"
    //             required
    //             name="email"

    //             onChange={handleChange}
    //           />

    //         </div>
    //         <div className="form">
    //           <label htmlFor="password" className="label-text"> Password</label>
    //           <input
    //            type="password"
    //            placeholder="Enter your password"
    //            name="password"
    //            required

    //            onChange={handleChange}
    //           />
    //         </div>

    //        <button className="login-btn" >Login</button>
    //        <div className="forget-password-container">
    //         <a href="/forgetPassword">Forget password ?</a>
    //        </div>
    //        <div className="not_account_yet_container">
    //          <p>
    //          {" "}
    //          Don't have an account?{" "}
    //          <Link to="/driver/signup">
    //            <span>Register here</span>
    //          </Link>
    //         </p>
    //        </div>
    //        </form>
    //       </div>
    //   </div>
  );
};
export default DriverLogin;
