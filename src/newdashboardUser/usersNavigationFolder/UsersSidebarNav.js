import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import UsersTopNavigation from './UsersTopNavigation'
import './UsersSidebarNav.css'
import UsersSmallNav from './UsersSmallNav'

const UsersSidebarNav = (props) => {
    const [toggle, setToggle] = useState(false)
    const handleChange = () => {
        setToggle(!toggle)
    }
    return (
        <div className = {`${toggle ? 'user-sidenav-container1' : 'user-sidenav-container2'}`}>
            <div className='top-first-child'>
                <UsersTopNavigation togle = {handleChange} />
            </div>
            
            <div className="side-side-nav">
                <div className="user-nav-link-container" style={{display: `${!toggle ? 'none' : ''}`}}>
                    <Link to="/user-dashboard" className="active"> Ride History </Link>
                    <Link to="/ride_offer"> Ride Offer </Link>
                    {/* <Link to="/payment">Payment</Link> */}
                    <Link to = '/user-notification'> Notification </Link>
                </div>
                <div>
                    <UsersSmallNav switchNav = {toggle}/>
                </div>
            </div>
            <div className="user-child">
                {props.children}
            </div>
        </div>
    )
}

export default UsersSidebarNav
