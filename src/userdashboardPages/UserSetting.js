import React, { useState } from 'react'
import UsersSidebarNav from '../newdashboardUser/usersNavigationFolder/UsersSidebarNav'
import "./UserSetting.css";
import { useDispatch, useSelector} from 'react-redux';
import { setCurrentUser } from '../reducers/authslice'
import axios from 'axios'

const UserSetting = () => {

    const dispatch = useDispatch();
    const profile = useSelector((state) => state.auth);
    const [updateUser, setUpdateUser] = useState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email
    });

    function handleChange(e){
        //setUpdateUser({...updateUser, [e.target.name]: e.target.value})
        setUpdateUser({...prev => prev, [e.target.name]: e.target.value})
    }

    async function updateProfile(e){
      e.preventdefault();
      try {
      const res = await axios({
       method: 'put',
       baseURL: 'http://localhost:3000/v1/user/profile-page',
       data: updateUser,
    });
     console.log(res.data)
     dispatch(setCurrentUser(res.data))
      } catch (error) {
          console.log(error, 'error in usersetting update');
      }
  }
    return (
        <UsersSidebarNav>
            <div className = 'user__profile__container'>
                <div className="user__profile__header">
                    <h1>My Profile</h1>
                    <p>Add information about yourself</p>
                </div>
                <div className="user__profile__body">
                    <div className="profile__form">
                        <input type="text" name="firstName" value={updateUser.firstName} onChange={handleChange}/>
                    </div>
                    <div className="profile__form">
                        <input type="text" name="lastName"  value={updateUser.lastName} onChange={handleChange}/>
                    </div>
                    <div className="profile__form">
                        <input type="email" name="email"  defaultValue={updateUser.email} disabled/>
                    </div>
                </div>
                <div className='center'><button className="user__profile__edit"  onSubmit={updateProfile}>Save</button></div>   
            </div>
        </UsersSidebarNav>
    )
}

// const mapStateToProps =(state) =>{
//     console.log(state);
// return {
//   auth: state.auth
// }
// }
// export default connect(mapStateToProps)(UserSetting);

export default UserSetting;