import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from './components/LoginValidation/Login'
import Signup from "./components/SignupValidation/Signup"
import ForgetPassword from "./components/ForgetPassword"
import UserDashboard from './dashboard/UserDashboard'
import CarListing from "./components/LandingPage/CarListing";
import RideHistory from './userdashboardPages/RideHistory'
import DriversDashboardHome from './driversDashboard/DriversDashboardHome';
import RideOffer from './userdashboardPages/RideOffer'
import FromTo from './dashboard/From_To'

const App = () =>{
  return (
    <div>
      <Router>
       <Switch>
        <Route exact component={LandingPage} path='/' />
        <Route component={UserDashboard} path="/userdashboard" />
        {/* <Route component={LandingPage} path='/olashehu.github.io/ride_my_way' /> */}
        <Route component = {Login} path='/login' />
        <Route component = {Signup} path='/signup' />
        <Route component = {ForgetPassword} path='/forgetPassword' />
        <Route component = {CarListing} path='/listing' />
        <Route component = {RideHistory} path = '/ridehistory'/>
        <Route component = {DriversDashboardHome} path ='/driversdashboard' />
        <Route component = {RideOffer} path ='/rideoffer' />
        <Route component = {FromTo} path ='/destination' />
        
       </Switch>
      </Router>
    </div>
  );
}

export default App;
