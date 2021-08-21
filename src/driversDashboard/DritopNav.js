import React from 'react'
import './DritopNav.css'
import './DriversNavbar.css'
import {FaBars} from 'react-icons/fa'
import { useSelector } from 'react-redux';

const DritopNav = (props) => {

    const { firstName } = useSelector(state => state.driverAuth);
    return (
        <div className = "">
            <header className = "dri-top-nav">
               <div className="top-navigation">
                   <div className="driver-top-navigation1">
                       <h2 className= 'dd'>RMW</h2>
                       <FaBars className='driver-toggle' onClick={props.toggle}/>
                   </div>
                   <div className="driver-top-navigatio2">
                       <span>{firstName}</span>
                       <img src="/avatar.png" alt="" className='driver-pic'/>
                   </div>
               </div>
            </header>
        </div>
            
    )
}
export default DritopNav;