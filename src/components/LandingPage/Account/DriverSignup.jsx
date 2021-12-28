

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavigationBar from "../Header/NavigationBar";
import Input from "../../../Utility/TextInput/Input";
import Footer from "../Footer/Footer";
import "./DriverSignup.css";

// import jwtDecode from "jwt-decode";
// import { useDispatch, connect } from "react-redux";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { setCurrentDriver, driverSignupError } from "../../../reducers/driverSlice";

const DriverSignup = ({handleChange, handleSubmit, data}) => {
  console.log(data, 'datay');
  
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="driver-signup-wrapper">
        <div className="driver-signup-bg-wrapper">
          <div className="signup-bg"></div>
          <header className="signup-bg-text-wrapper">
            <h1>Drive with us</h1>
            <h4>
              <strong className="driver-signup-sub-header-text">
                Turn your vehicle into money making machine and earn big while driving.
              </strong>
            </h4>
          </header>
        </div>
        <div className="driver-form-wrapper">
          <form action="" onSubmit={handleSubmit}>
            <div className="driver-input-wrapper">
              <Input
                type="text"
                name="firstName"
                htmlFor="firstName"
                id="firstName"
                placeholder="FirstName"
                value={data.firstName}
              />
            </div>
            <div className="driver-input-wrapper">
              <Input
                type="text"
                name="lastName"
                htmlFor="lastName"
                id="lastName"
                placeholder="LastName"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
            <div className="driver-input-wrapper">
              <Input
                type="number"
                name="number"
                htmlFor="number"
                id="number"
                placeholder="PhoneNumber"
                onChange={handleChange}
                value={data.phoneNumber}
              />
            </div>
            <div className="driver-input-wrapper">
              <Input
                type="email"
                name="email"
                htmlFor="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            <div className="driver-input-wrapper">
              <Input
                type="password"
                name="password"
                htmlFor="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
            <Link className="link-button-wrapper">
              <span onClick={handleSubmit}>Sign up</span>
            </Link>
            <div className="back-to-driver-login-wrapper">
              <strong>Already a register user</strong>
              <Link to="/driver/login" className="back-to-driver-login">
                Login here
              </Link>
            </div>
          </form>
        </div>
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

// 
// const DriversSignup = (props) => {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [driverSignup, setDriverSignup] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     password: "",
//     carModel: "",
//     modelYear: "",
//     licencePlate: "",
//   });

//   const [showNextComponent, setShowNextComponent] = useState(false);

//   function handleChange(e) {
//     setDriverSignup({ ...driverSignup, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios({
//         method: "post",
//         baseURL: "http://localhost:3000/v1/driver/signup",
//         data: driverSignup,
//       });
//       const token = data.token;
//       localStorage.setItem("driver-token", JSON.stringify(token));
//       const isToken = localStorage.getItem("driver-token");
//       const decoded = jwtDecode(isToken);
//       localStorage.setItem("driver-info", JSON.stringify(decoded.data));
//       dispatch(setCurrentDriver(decoded.data));
//       history.push("/driver/add-offer");
//       const notify = () => toast(data.message);
//       notify();
//     } catch (err) {
//       dispatch(driverSignupError({ userError: err.response.data.message }));
//     }
//   };

//   return (
//     <div>
//       <NavigationBar></NavigationBar>
//       <div className="imgbg-drivers-sign-in">
//         <div className="drivers-sign-in">
//           <div className="drivers-header">
//             <h3>Signup as a driver below</h3>
//           </div>
//           <h3 style={{ color: "red" }}>{props.driverAuth.driverError}</h3>
//           <form action="" className="main-drivers-form">
//             <>
//               {!showNextComponent && (
//                 <>
//                   <div className="pilot-sign">
//                     <label htmlFor="first-name" className="label-text-pilot">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       onChange={handleChange}
//                       value={driverSignup.firstName}
//                     />
//                   </div>
//                   <div className="pilot-sign">
//                     <label htmlFor="lastNname" className="label-text-pilot">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       onChange={handleChange}
//                       value={driverSignup.lastName}
//                       required
//                     />
//                   </div>
//                   <div className="pilot-sign">
//                     <label htmlFor="telphone" className="label-text-pilot">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       required
//                       name="phone"
//                       placeholder="123-45-678"
//                       pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                       onChange={handleChange}
//                       value={driverSignup.phone}
//                     />
//                   </div>
//                   <div className="pilot-sign">
//                     <label htmlFor="email" className="label-text-pilot">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       name="email"
//                       onChange={handleChange}
//                       value={driverSignup.email}
//                     />
//                   </div>
//                   <div className="pilot-sign">
//                     <label htmlFor="password" className="label-text-pilot">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       onChange={handleChange}
//                       value={driverSignup.password}
//                       required
//                     />
//                   </div>

//                   <button
//                     className="Sign-btn-pilot"
//                     onClick={() => setShowNextComponent(true)}>
//                     Next
//                   </button>
//                   <div
//                     className="terms-condition"
//                     style={{ display: "flex", marginTop: "1.5rem" }}></div>
//                 </>
//               )}
//               {showNextComponent && (
//                 <NextSignup
//                   data={driverSignup}
//                   handleChange={handleChange}
//                   handleSubmit={handleSubmit}
//                 />
//               )}
//             </>
//             <div className="have-account">
//               <p>
//                 {" "}
//                 Already a registered user?
//                 <Link to="/driver/login">
//                   <span>Login here</span>
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     driverAuth: state.driverAuth,
//   };
// };
// export default connect(mapStateToProps)(DriversSignup);
