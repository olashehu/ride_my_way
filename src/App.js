import React from "react"
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from './components/LoginValidation/Login'
import Signup from "./components/SignupValidation/Signup"
import ForgetPassword from "./components/ForgetPassword"
import Dashboard from "./components/Dashboard/Dashboard";

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
      
       </Switch>
      </Router>
    </div>
  );
}

export default App;
