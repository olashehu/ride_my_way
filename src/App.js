import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from './components/LoginValidation/Login'
//import Signup from './components/SignupValidation/Signup'
import ForgetPassword from "./components/ForgetPassword"
import CarListing from "./components/LandingPage/CarListing";
import RideHistory from './userdashboardPages/RideHistory'
import DriversDashboardHome from './driversDashboard/DriversDashboardHome';
import RideOffer from './userdashboardPages/RideOffer'
import FromTo from './dashboard/From_To'
import Notification from './userdashboardPages/Notification'
import DriversSignup from "./components/LandingPage/driversSignup-login/DriversSignup";
import DriversLogin from "./components/LandingPage/driversSignup-login/DriversLogin";
import DriverHistory from "./driversPages/DriverHistory";
import DriverSetting from "./driversPages/DriverSetting";
import Next from "./components/LandingPage/driversSignup-login/Next";
import Form from "./components/SignupValidation/Form";
import UserSetting from "./userdashboardPages/UserSetting";


const App = () =>{
  return (
    <div>
      <Router>
       <Switch>
        <Route exact component={LandingPage} path='/' />
        <Route component = {Notification} path='/notification' />
        <Route component = {Login} path='/login' />
        <Route component = {Form} path='/signup' />
        <Route component = {ForgetPassword} path='/forgetPassword' />
        <Route component = {DriversSignup} path="/driversignup" />
        <Route component = {DriversLogin} path="/driverslogin" />
        <Route component = {Next} path = '/next'></Route>
        <Route component = {CarListing} path='/listing' />
        <Route component = {RideHistory} exact path = '/user-dashboard'/>
        <Route component = {DriversDashboardHome} path ='/drivers/dashboard' />
        <Route component = {RideOffer} path ='/ride/offer' />
        <Route component = {FromTo} path ='/destination' />
        <Route component = {Notification} path ='/user-notification' /> 
        <Route component = {DriverHistory} path = '/driver-history' />
        <Route component = {DriverSetting} path = '/driver/setting' />
        <Route component = {UserSetting} path = '/user/profile' />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
