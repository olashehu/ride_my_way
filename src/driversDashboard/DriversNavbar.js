import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import DritopNav from './DritopNav'
//import DriversDashboardHome from './DriversDashboardHome'
import './DriversNavbar.css'
import Smallsidebar from './Smallsidebar'

const DriversNavbar = (props) => {
 const [toggle, setToggle] = useState(false)
 const toggleFunc = ()=>{
   setToggle(!toggle)
 }
    return (
        <div>
             
              <div>
               <div className={`${toggle ? 'dashboard-layout' : 'dashboard-layout2'}`}>
                <DritopNav toggle={toggleFunc} className='topnav'/>
               <div className='sidenav'>
                   <div className="nav-link-container" style={{display: `${!toggle ? 'none' : ''}`}} >
                 <Link to = '/driversdashboard' className="active">Home</Link>
                 {/* <Link to = '/driver-history'>Ride History</Link> */}
                 <Link to = '/settings'>Settings</Link>
                 <Link to = '/'>Logout</Link>
                 
             </div>
             <Smallsidebar switchDisplay={toggle}/>
               </div>
              <div className='child'>
               {props.children}
             </div>
             </div>
            
             

        </div>
        </div>
       
    )
}

export default DriversNavbar
