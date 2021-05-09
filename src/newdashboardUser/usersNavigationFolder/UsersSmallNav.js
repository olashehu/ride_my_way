import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import './UsersSmallNav.css'

const UsersSmallNav = (props) => {
    return (
        <div className = 'user-small-sidebar' style={{display: `${props.switchNav ? 'none' : ''}`}}>
            <GrFacebookOption className='fbiconss'/> 
        </div>
    )
}

export default UsersSmallNav
