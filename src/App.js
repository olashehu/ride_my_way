import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from './components/LoginValidation/Login'
import Signup from "./components/SignupValidation/Signup"
import ForgetPassword from "./components/ForgetPassword"
//import UserDashboard from './dashboard/UserDashboard'
import CarListing from "./components/LandingPage/CarListing";
import RideHistory from './userdashboardPages/RideHistory'
import DriversDashboardHome from './driversDashboard/DriversDashboardHome';
import RideOffer from './userdashboardPages/RideOffer'
import FromTo from './dashboard/From_To'
import Notification from './userdashboardPages/Notification'
import DriversSignup from "./components/LandingPage/driversSignup-login/DriversSignup";
import DriversLogin from "./components/LandingPage/driversSignup-login/DriversLogin";
import Smallsidebar from './driversDashboard/Smallsidebar';
import DrideHistory from './driversPages/DrideHistory';
//import DritopNav from "./driversDashboard/DritopNav";
import DriversNavbar from "./driversDashboard/DriversNavbar";
//import Setting from "./driversPages/Setting";
import PaymentGateWay from "./userdashboardPages/PaymentGateWay";


const App = () =>{
  return (
    <div>
      <Router>
       <Switch>
        <Route exact component={LandingPage} path='/' />
        {/* <Route component = {UserDashboard} path="/userdashboard" /> */}
        <Route component = {Notification} path='/notification' />
        <Route component = {Login} path='/login' />
        <Route component = {Signup} path='/signup' />
        <Route component = {ForgetPassword} path='/forgetPassword' />
        <Route component = {DriversSignup} path="/driversignup" />
        <Route component = {DriversLogin} path="/driverslogin" />
        <Route component = {CarListing} path='/listing' />
        <Route component = {RideHistory} exact path = '/user-dashboard'/>
        <Route component = {DriversDashboardHome} path ='/driversdashboard' />
        <Route component = {RideOffer} path ='/rideoffer' />
        <Route component = {FromTo} path ='/destination' />
        <Route component = {Notification} path ='/' />  
        <Route component = {Smallsidebar} path = '/navbar' />
        <Route component = {DrideHistory} path = '/driver-history' />
        <Route component = {DriversNavbar} path='/drive' />
        <Route component = {PaymentGateWay} path='/payment' />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
