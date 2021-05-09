import React from 'react'
import './UsersTopNavigation.css'
import {FaBars} from 'react-icons/fa'

const UsersTopNavigation = (props) => {
   return (
       <div className = 'nav-user-top'>
           <h1 className='me'>RMW</h1>
           <FaBars className='me' onClick = {props.togle}/>
           <div className= 'profile-container'>
               <img src="olashehu.jpg" alt="" className='profile'/>
           </div>
   </div>
   )
}

export default UsersTopNavigation
