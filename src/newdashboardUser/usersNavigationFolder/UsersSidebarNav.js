import { Link, useHistory } from 'react-router-dom'
import React, {useState} from 'react'
import UsersTopNavigation from './UsersTopNavigation'
import './UsersSidebarNav.css'
import UsersSmallNav from './UsersSmallNav'

const UsersSidebarNav = (props) => {
    const [toggle, setToggle] = useState(false)
    const handleChange = () => {
        setToggle(!toggle)
    }
    const history = useHistory()
    const onLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/login');
  };
    return (
        <div className = {`${toggle ? 'user-sidenav-container1' : 'user-sidenav-container2'}`}>
            <div className='top-first-child'>
                <UsersTopNavigation togle = {handleChange} />
            </div>
            
            <div className="side-side-nav">
                <div className="user-nav-link-container" style={{display: `${!toggle ? 'none' : ''}`}}>
                    <Link to="/ride/offer"> <div>Available ride</div> </Link>
                    <Link to="/user-dashboard" className="active"><div> Ride History</div></Link>
                    <Link to = '/user-notification'><div> Notification</div></Link>
                    <Link to = '/user/profile'><div>Setting</div></Link>
                    <Link to = '/new'><div>New</div></Link>
                    <Link onClick={onLogOut}><div>Logout</div></Link>
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
