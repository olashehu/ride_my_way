import React from 'react';
//import './App.css';
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashHome from './pages/DashHome';
import DashReport from './pages/DashReport'
import AvailableDriver from './pages/AvailableDriver';

function Dashboard() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={DashHome} />
          <Route path='/report' component={DashReport} />
          <Route path='/drivers' component={AvailableDriver} />
          <Route path='/drivers' component={AvailableDriver} />
        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;