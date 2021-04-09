import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardHome from '../pages/DashboardHome'
import AvailableDrivers from '../pages/AvailableDrivers'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div>
         <Router>
             <Sidebar />
             <Switch>
                 <Route path = '/homedashboard' component = {DashboardHome} />
                 <Route path = '/driversAvailability' component = {AvailableDrivers} />
             </Switch>
         </Router>
        </div>
    )
}

export default Dashboard
