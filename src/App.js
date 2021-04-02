import React from "react"
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from './components/LoginValidation/Login'
import Signup from "./components/SignupValidation/Signup"
import ForgetPassword from "./components/ForgetPassword"

const App = () =>{
  return (
    <div>
      <Router>
       <Switch>
        <Route exact component={LandingPage} path='/' />
        <Route component={Login} path='/login' />
        <Route component={Signup} path='/signup' />
        <Route component={ForgetPassword} path='/forgetPassword' />
  
       </Switch>
      </Router>
    </div>
  );
}

export default App;
