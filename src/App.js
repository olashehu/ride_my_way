

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from "./pages/Homepage/HomePage";
import UserLoginPage from './pages/Login/userLogin';
import UserSignupPage from './pages/signUp/userSignUp';
import CarListing from './components/LandingPage/OurdriverSection/DriverSection';
import RideHistory from './userdashboardPages/RideHistory';
import RideOffer from './userdashboardPages/RideOffer';
import Notification from './userdashboardPages/Notification';
import DriverSignupPage from "./pages/signUp/driverSignup";
import DriverLoginPage from './pages/Login/driverLogin';
import DriverHistoryPage from './pages/dashboardPage/driverPage/history/history';
import UserSetting from './userdashboardPages/UserSetting';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import EditOffer from './components/Dashboard/DriverDashboard/EditOffer/EditOffer';
import MyOfferPage from './pages/dashboardPage/driverPage/myOffer/myOffer';
import RideRequestPage from './pages/dashboardPage/driverPage/rideRequest/RideRequest';
import AddOfferPage from './pages/dashboardPage/driverPage/addOffer/addOffer';
import RideCard from './Utility/RideCardComponent/RideCard';



const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route component={CarListing} path="/listing" />
          <Route component={Notification} path="/notification" />
          <Route component={UserLoginPage} path="/user/login" />
          <Route component={UserSignupPage} path="/user/signup" />
          <Route component={DriverSignupPage} path="/driver/signup" />
          <Route component={DriverLoginPage} path="/driver/login" />
          <Route component={RideHistory} exact path="/user/ride-history" />
          <ProtectedRoute component={UserSetting} path="/user/profile" />
          <ProtectedRoute exact component={RideOffer} path="/ride/offer" />
          <Route component={Notification} path="/user-notification" />
          <PrivateRoute component={AddOfferPage} path="/driver/add-offer" />
          <Route component={EditOffer} path="/edit-offer" />
          <PrivateRoute component={DriverHistoryPage} path="/driver/history" />
          <PrivateRoute component={MyOfferPage} path="/my-offer" />
          <PrivateRoute component={RideRequestPage} path="/ride-request" />
          <Route component={EditOffer} path="/edit-offer" />
          {/* <Route component={RideCard} path="/ride-card" /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
