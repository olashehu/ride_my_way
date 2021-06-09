import React from 'react'
// import {Link} from 'react-router-dom'
import './UsersTopNavigation.css'

const ProfilePic = () => {
    return (
        <>
           <img src= '/avatar.png' alt="" className='profile'/>
           <select name="" id="" style = {{width: "10px", height: '4px',border: "none", position: 'absolute', bottom: '2%', right: '0px'}}>
               <option value=""></option>
               <option value="" className = 'opt-center'><a href="/user/profile/settings">profile</a></option>
               <option value="" className = 'opt-center'>log out</option>
           </select>  
        </>
    )
}

export default ProfilePic
