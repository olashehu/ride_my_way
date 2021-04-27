import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-user">
             {/* <Link to = '/userdashboard' className="active"> Home</Link> */}
              <Link to="/user-dashboard" className="active">Ride History</Link>
              <Link to="/rideoffer">Ride Offer</Link>
              <Link to="/payment">Payment</Link>
             <Link to="/notification">Notification</Link>
             <div className = 'signout'>
                 <a href="signout" className = 'logout'>Logout</a>
             </div>
            </div>
        </div>
    )
}

export default Sidebar
