import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
             <Link to = '/userdashboard' className="active"> Home</Link>
              <Link to="/payment">Payment</Link>
             <Link to="/ridehistory">Ride History</Link>
             <Link to="/rideoffer">Ride Offer</Link>
             <Link to="/about">Notification</Link>
             <div className = 'signout'>
                 <a href="signout" className = 'logout'>Logout</a>
             </div>
             {/* <div className = 'signin-to-drive'>
                 <a href="driverSignin" className = 'become-a-driver'>Click to become a driver</a>
             </div> */}
            </div>
        </div>
    )
}

export default Sidebar
