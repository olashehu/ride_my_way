import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from './components/LoginValidation/Login'
import Signup from "./components/SignupValidation/Signup"
import ForgetPassword from "./components/ForgetPassword"
import CarListing from "./components/LandingPage/CarListing";
import RideHistory from './userdashboardPages/RideHistory'
import DriversDashboardHome from './driversDashboard/DriversDashboardHome';
import RideOffer from './userdashboardPages/RideOffer'
import FromTo from './dashboard/From_To'
import Notification from './userdashboardPages/Notification'
import DriversSignup from "./components/LandingPage/driversSignup-login/DriversSignup";
import DriversLogin from "./components/LandingPage/driversSignup-login/DriversLogin";
//import Smallsidebar from './driversDashboard/Smallsidebar';
//import DriversNavbar from "./driversDashboard/DriversNavbar";
import PaymentGateWay from "./userdashboardPages/PaymentGateWay";
import DriverHistory from "./driversPages/DriverHistory";
import DriverSetting from "./driversPages/DriverSetting";
// import UsersTopNavigation from "./newdashboardUser/usersNavigationFolder/UsersTopNavigation";
// import UsersSidebarNav from "./newdashboardUser/usersNavigationFolder/UsersSidebarNav";
// import Empty from "./newdashboardUser/Empty";


const App = () =>{
  return (
    <div>
      <Router>
       <Switch>
        <Route exact component={LandingPage} path='/' />
        <Route component = {Notification} path='/notification' />
        <Route component = {Login} path='/login' />
        <Route component = {Signup} path='/signup' />
        <Route component = {ForgetPassword} path='/forgetPassword' />
        <Route component = {DriversSignup} path="/driversignup" />
        <Route component = {DriversLogin} path="/driverslogin" />
        <Route component = {CarListing} path='/listing' />
        <Route component = {RideHistory} exact path = '/user-dashboard'/>
        <Route component = {DriversDashboardHome} path ='/drivers-dashboard' />
        <Route component = {RideOffer} path ='/ride_offer' />
        <Route component = {FromTo} path ='/destination' />
        <Route component = {Notification} path ='/user-notification' /> 
        <Route component = {PaymentGateWay} path='/payment' />
        <Route component = {DriverHistory} path = '/driver-history' />
        <Route component = {DriverSetting} path = '/driver_setting' />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
