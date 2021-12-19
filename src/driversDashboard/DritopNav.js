import React from 'react'
import './DritopNav.css'
import './DriversNavbar.css'
import {FaBars} from 'react-icons/fa'
import { useSelector } from 'react-redux';

const DritopNav = (props) => {

    const { firstName } = useSelector(state => state.driverAuth);
    return (
        <div>
            <nav className='d_top-nav'>
                <div className="d_top-nav-left">
                    <h1>RMW</h1>
                    <span className='d_burger-container'><FaBars onClick={props.toggle}/></span>
                </div>
                <div className="d_top-nav-right">
                    <div className='d_top-nav-pics'>
                        <img src="/avatar.png" alt=""/>
                    </div>
                    <div className='d_top-nav-name'>
                        <span>{firstName}</span>
                    </div>
                </div>
            </nav>
        </div>
            
    )
}
export default DritopNav;