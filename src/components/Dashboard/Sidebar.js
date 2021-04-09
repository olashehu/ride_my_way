import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
          <div className="sidebar">
            <Link to = '/homedashboard'><li className = "active">Home</li></Link>
            <Link to = '/driversAvailability'><li>Available Drivers</li></Link>
            <Link to = 'recentTrip'><li>Recent Trip</li></Link>
            <Link to = 'about'><li>About</li></Link>
            <button>signout</button>
          </div>
        </div>
    )
}

export default Sidebar
