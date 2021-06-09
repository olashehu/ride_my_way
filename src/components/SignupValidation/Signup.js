import React from "react";
import useForm from './Useform'
import validate from './validateInfo'
import { Link } from "react-router-dom";
import NavigationBar from "../LandingPage/NavigationBar";

const Signup = ({formSubmitting}) => {

  const {handleChange, values, handleSubmit, errors} = useForm(validate, formSubmitting);

  return (
    <div>
      <NavigationBar></NavigationBar>
    <div className="container-sign">
      <div className="header">
        <h3>Register</h3>
      </div>
      <form
        action=""
        className="main-form"
        onSubmit = {handleSubmit} >

        <div className="form-sign">
          <label htmlFor="firstname" className="label-text">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            value ={values.firstname}
            onChange = {handleChange}
          />
          {errors.firstname && <p className = 'signup-errors'>{errors.firstname}</p>}
        </div>

        <div className="form-sign">
          <label htmlFor="lastname" className="label-text">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            value ={values.lastname}
            onChange = {handleChange}
          />
          {errors.lastname && <p className = 'signup-errors'>{errors.lastname}</p>}
        </div>

        <div className="form-sign">
          <label htmlFor="address" className="label-text">
            Address
          </label>
          <input
            type="text"
            name="address"
            value ={values.address}
            onChange = {handleChange}
          />
          {errors.address && <p className = 'signup-errors'>{errors.address}</p>}
        </div>

        <div className="form-sign">
          <label htmlFor="phonenumber" className="label-text">
            Phone Number
          </label>
          <input
            type="tel"
            name="phonenumber"
            value ={values.phonenumber}
            onChange = {handleChange}
            placeholder="123-45-678"
          />
          {errors.phonenumber && <p className = 'signup-errors'>{errors.phonenumber}</p>}
        </div>

        <div className="form-sign">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            type="email"
            name="email"
            value ={values.email}
            onChange = {handleChange}
          />
          {errors.email && <p className = 'signup-errors'>{errors.email}</p>}
        </div>

        <div className="form-sign">
          <label htmlFor="password" className="label-text">
            Password
          </label>
          <input
            type="password"
            name="password"
            value ={values.password}
            onChange = {handleChange} 
          />
          {errors.password && <p className = 'signup-errors'>{errors.password}</p>}
        </div>

        <div className="form-sign">
          <label htmlFor="password2" className="label-text">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            value ={values.password2}
            onChange = {handleChange}  
          />
          {errors.password2 && <p className = 'signup-errors'>{errors.password2}</p>}
        </div>
       

        <button className="Sign-btn">Sign up</button>
        
        {/* <div className="forget-password-containe" style={{display:"flex", marginTop:"1.5rem"}}>
          <input type="checkbox" style={{marginRight:'.1rem'}}/>
          <p>I agree to the Terms and Conditions</p>
        </div> */}

        <div className="not_account_yet_container">
          <p>
            {" "}
            Already a registered user?{" "}
            <Link to="/login">
              <span>Login here</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};
export default Signup;





// const Signup = ({ submitForm }) => {
//   const { handleChange, handleSubmit, values, errors } = useForm(
//     submitForm,
//     validate
//   );

//   return (
//     <div>
//       <NavigationBar></NavigationBar>
//       <div className='form-content-right'>
//       <form onSubmit={handleSubmit} className='form' noValidate>
//         <h1>
//           Get started with us today! Create your account by filling out the
//           information below.
//         </h1>
//         <div className='form-inputs'>
//           <label className='form-label'>Username</label>
//           <input
//             className='form-input'
//             type='text'
//             name='username'
//             placeholder='Enter your username'
//             value={values.username}
//             onChange={handleChange}
//           />
//           {errors.username && <p>{errors.username}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>FullName</label>
//           <input
//             className='form-input'
//             type='text'
//             name='fullname'
//             placeholder='Enter your fullname...'
//             value={values.fullname}
//             onChange={handleChange}
//           />
//           {errors.fullname && <p>{errors.fullname}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Email</label>
//           <input
//             className='form-input'
//             type='email'
//             name='email'
//             placeholder='Enter your email'
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password'
//             placeholder='Enter your password'
//             value={values.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Confirm Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password2'
//             placeholder='Confirm your password'
//             value={values.password2}
//             onChange={handleChange}
//           />
//           {errors.password2 && <p>{errors.password2}</p>}
//         </div>
//         <button className='form-input-btn' type='submit'>
//           Sign up
//         </button>
//         <span className='form-input-login'>
//           Already have an account? Login <Link to ='login'>here</Link>
//         </span>
//       </form>
//     </div>
//     </div>
//   );
// };

//export default Signup
