import React from 'react'
import './DriversNavbar.css'
import {Link} from 'react-router-dom'

const DriversNavbar = () => {
    return (
        <div>
           <ul class="sidenav">
             <li><Link to ='/driversdashboard' className="active">Home</Link></li>
             <li><Link to = 'offer'>Available Driver</Link></li>
              <li><Link to = 'offer'>Ride Offer</Link></li>
             {/* <li><a href="#contact">Contact</a></li>
             <li><a href="#about">About</a></li> */}
            </ul>
        </div>
    )
}

export default DriversNavbar
