import React from 'react'
import UsersSidebarNav from '../newdashboardUser/usersNavigationFolder/UsersSidebarNav'
import {AiFillCaretDown} from "react-icons/ai";

const UserSetting = () => {
    return (
        <UsersSidebarNav>
            <h1 className = 'user_info__header'>Personal info</h1>
            <div className = 'user-info__container'>
                <div>Name  <span className = 'user__infos'>Michael Love</span><AiFillCaretDown className = 'user_profile_icon'/></div>
                <div>Email  <span className = 'user__infos'>michael123.love@gmail.com</span></div>
                <div className = 'bottom'>Phone  <span className = 'user__infos '>09034523567</span></div>
                <button>Save</button>
            </div>
        </UsersSidebarNav>
    )
}

export default UserSetting


