import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import DritopNav from './DritopNav';
import './DriversNavbar.css';
import Smallsidebar from './Smallsidebar';



const DriversNavbar = (props) => {

 const history = useHistory();
 const [toggle, setToggle] = useState(false)
 const toggleFunc = ()=>{
   setToggle(!toggle)
 }
 const logout = () => {
    localStorage.removeItem('driver-token');
    localStorage.removeItem('driver-info');
    history.push('/driver/login');
 }
    return (
      <div>
        <div>
          <div className={`${toggle ? 'dashboard-layout' : 'dashboard-layout2'}`}>
            <DritopNav toggle={toggleFunc} className='topnav'/>
            <div className='sidenav'>
              <div className="nav-link-container" style={{display: `${!toggle ? 'none' : ''}`}} >
                 <Link to = '/driver/dashboard' className="active"><div>Offer ride</div></Link>
                 <Link to = '/my-offer' ><div>My offer</div></Link>
                 <Link to = '/ride-request'><div>Ride request</div></Link>
                 <Link to = '/driver/history'><div>History</div></Link>
                 <Link to = '/driver/setting'><div>Setting</div></Link>
                 <Link onClick={logout}><div>Logout</div></Link>
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
