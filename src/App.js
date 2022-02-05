

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from "./pages/Homepage/HomePage";
import UserLoginPage from './pages/Login/userLogin';
import UserSignupPage from './pages/signUp/userSignUp';
import CarListing from './components/LandingPage/OurdriverSection/DriverSection';
import UserRideHistoryPage from './pages/dashboardPage/userPage/history/history';
import JoinRidePage from './pages/dashboardPage/userPage/joinRide/joinRide'
import DriverSignupPage from "./pages/signUp/driverSignup";
import DriverLoginPage from './pages/Login/driverLogin';
import DriverHistoryPage from './pages/dashboardPage/driverPage/history/history';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import EditOffer from './components/Dashboard/DriverDashboard/EditOffer/EditOffer';
import MyOfferPage from './pages/dashboardPage/driverPage/myOffer/myOffer';
import RideRequestPage from './pages/dashboardPage/driverPage/rideRequest/RideRequest';
import AddOfferPage from './pages/dashboardPage/driverPage/addOffer/addOffer';
import USerSettingPage from './pages/dashboardPage/userPage/settings/setting';
import DriverSettingPage from './pages/dashboardPage/driverPage/settings/setting';
import myProfile from './pages/dashboardPage/userPage/myProfile/myProfile';
import Profile from './pages/dashboardPage/driverPage/profile/profile';


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route component={CarListing} path="/listing" />
          <Route component={UserLoginPage} path="/user/login" />
          <Route component={UserSignupPage} path="/user/signup" />
          <Route component={DriverSignupPage} path="/driver/signup" />
          <Route component={DriverLoginPage} path="/driver/login" />
          <Route component={UserRideHistoryPage} exact path="/user/ride-history" />
          <ProtectedRoute component={USerSettingPage} path="/user/profile" />
          <ProtectedRoute exact component={JoinRidePage} path="/ride/offer" />
          <ProtectedRoute component={myProfile} path="/profile" />
          {/* <Route component={Notification} path="/user-notification" /> */}
          <PrivateRoute component={AddOfferPage} path="/driver/add-offer" />
          {/* <Route component={EditOffer} path="/edit-offer" /> */}
          <PrivateRoute component={DriverHistoryPage} path="/driver/history" />
          <PrivateRoute component={MyOfferPage} path="/my-offer" />
          <PrivateRoute component={RideRequestPage} path="/ride-request" />
          <PrivateRoute component={DriverSettingPage} path="/edit-profile" />
          <PrivateRoute component={Profile} path='/user-profile' />
          <PrivateRoute component={EditOffer} path="/edit-offer" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
