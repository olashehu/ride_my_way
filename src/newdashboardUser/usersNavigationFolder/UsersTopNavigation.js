import React from 'react'
import './UsersTopNavigation.css';
import {FaBars} from 'react-icons/fa';
import ProfilePic from './ProfilePic';
import { useSelector } from 'react-redux';

const UsersTopNavigation = (props) => {
   const firstName = useSelector((state) => state.auth.firstName)
   return (
       <div className = 'nav-user-top'>
           <h1 className='me'>RMW</h1>
           <FaBars className='me toggle-user' onClick = {props.togle}/>
           <div className= 'profile-container'>
              <ProfilePic />
              <span style = {{color: 'black', fontSize: '20px'}}>{firstName}</span>
           </div>
   </div>
   )
}

export default UsersTopNavigation
