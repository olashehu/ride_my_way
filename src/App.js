

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from "./pages/Homepage/HomePage";
import UserLoginPage from './pages/Login/userLogin';
import UserSignupPage from './pages/signUp/userSignUp';
import ForgetPassword from './components/ForgetPassword';
import CarListing from './components/LandingPage/OurdriverSection/DriverSection';
import RideHistory from './userdashboardPages/RideHistory';
import RideOffer from './userdashboardPages/RideOffer';
import Notification from './userdashboardPages/Notification';
import DriverSignupPage from "./pages/signUp/driverSignup";
import DriverLoginPage from './pages/Login/driverLogin';
import DriverHistory from './driversPages/DriverHistory';
import DriverSetting from './driversPages/DriverSetting';
import UserSetting from './userdashboardPages/UserSetting';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import EditOffer from './driversPages/EditOffer';
import DisplayOffer from './driversPages/DisplayOffer';
import RideRequest from './driversPages/RideRequest';
import AddOffer from './driversPages/AddOffer/AddOffer';



const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route component={CarListing} path="/listing" />
          <Route component={Notification} path="/notification" />
          <Route component={UserLoginPage} path="/user/login" />
          <Route component={UserSignupPage} path='/user/signup'/>
          <Route component={ForgetPassword} path="/forgetPassword" />
          <Route component={DriverSignupPage} path="/driver/signup" />
          <Route component={DriverLoginPage} path="/driver/login" />
          <Route component={RideHistory} exact path="/user/ride-history" />
          <ProtectedRoute component={UserSetting} path="/user/profile" />
          <ProtectedRoute exact component={RideOffer} path="/ride/offer" />
          <Route component={Notification} path="/user-notification" />
          <PrivateRoute component={AddOffer} path="/driver/add-offer" />
          <Route component={EditOffer} path="/edit-offer" />
          <PrivateRoute component={DriverHistory} path="/driver/history" />
          <PrivateRoute component={DisplayOffer} path="/my-offer" />
          <PrivateRoute component={DriverSetting} path="/driver/profile" />
          <PrivateRoute component={RideRequest} path="/ride-request" />
          <Route component={EditOffer} path="/edit-offer" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
