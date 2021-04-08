import React from "react"
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from './components/LoginValidation/Login'
import Signup from "./components/SignupValidation/Signup"
import ForgetPassword from "./components/ForgetPassword"
import Dashboard from './components/dashBoard/Dashboard'
import CarListing from "./components/LandingPage/CarListing";

const App = () =>{
  return (
    <div>
      <Router>
       <Switch>
        <Route exact component={LandingPage} path='/' />
        <Route component={Dashboard} path="/dashboard" />
        {/* <Route component={LandingPage} path='/olashehu.github.io/ride_my_way' /> */}
        <Route component={Login} path='/login' />
        <Route component={Signup} path='/signup' />
        <Route component={ForgetPassword} path='/forgetPassword' />
        <Route component={CarListing} path='/listing' />
      
       </Switch>
      </Router>
    </div>
  );
}

export default App;
