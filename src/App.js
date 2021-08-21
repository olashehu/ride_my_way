import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from './components/LoginValidation/Login';
import Signup from './components/SignupValidation/Signup';
import ForgetPassword from "./components/ForgetPassword";
import CarListing from "./components/LandingPage/CarListing";
import RideHistory from './userdashboardPages/RideHistory';
import DriversDashboardHome from './driversDashboard/DriversDashboardHome';
import RideOffer from './userdashboardPages/RideOffer';
import Notification from './userdashboardPages/Notification';
import DriversSignup from "./components/LandingPage/driversSignup-login/DriversSignup";
import DriversLogin from "./components/LandingPage/driversSignup-login/DriversLogin";
import DriverHistory from "./driversPages/DriverHistory";
import DriverSetting from "./driversPages/DriverSetting";
//import Form from "./components/SignupValidation/Form";
import UserSetting from "./userdashboardPages/UserSetting";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from './PrivateRoute';
import MyOffer from './driversPages/MyOffer';
import New from './userdashboardPages/New';

const App = () =>{
  return (
    <div>
      <Router>
       <Switch>
        <Route exact component={LandingPage} path='/' />
        <Route component = {Notification} path='/notification' />
        <Route component = {Login} path='/login' />
        <Route component = {Signup} path='/signup' />
        {/* <Route component = {Form} path='/signup' /> */}
        <Route component = {ForgetPassword} path='/forgetPassword' />
        <Route component = {DriversSignup} path="/driver/signup" />
        <Route component = {DriversLogin} path="/driver/login" />
        <Route component = {CarListing} path='/listing' />
        <Route component = {RideHistory} exact path = '/user-dashboard'/>
        <PrivateRoute component = {DriversDashboardHome} path ='/driver/dashboard' />
        <ProtectedRoute component = {RideOffer} path ='/ride/offer' />
        <Route component = {Notification} path ='/user-notification' /> 
        <Route component = {DriverHistory} path = '/driver/history' />
        <Route component = {MyOffer} path='/my-offer' />
        <Route component = {DriverSetting} path = '/driver/setting' />
        <Route component = {New} path='/new' />
        <ProtectedRoute component = {UserSetting} path = '/user/profile' />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
