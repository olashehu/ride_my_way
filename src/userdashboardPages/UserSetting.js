// import React, { useState } from 'react';
// import { useDispatch, useSelector, connect } from 'react-redux';
// import axios from 'axios';
// import UsersSidebarNav from '../components/Dashboard/UserDashboard/UserNavigation/UserSecondaryNav/UsersSidebarNav';
// import "./UserSetting.css";
// import { setCurrentUser, } from '../reducers/authslice';

// const UserSetting = () => {
//     const data = useSelector(state => state.auth);
//     const dispatch = useDispatch();
//     const [updateUser, setUpdateUser] = useState({
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email
//     });

//     function handleChange(e){
//         setUpdateUser({[e.target.name]: e.target.value})
//     };

//     async function updateProfile(e){
//         e.preventDefault();
//       try {
//       const token = JSON.parse(localStorage.getItem('token'));
//       const{ data } = await axios({
//        method: 'put',
//        baseURL: 'http://localhost:3000/v1/user/profile-page',
//        data: updateUser,
//        headers: {
//            Authorization: `Bearer ${token}`
//        }
//     });
//     setUpdateUser(data.data)
//      dispatch(setCurrentUser(data.data))
//       } catch (error) {
//           console.log(error.response, 'error in usersetting update');
//       }
//   }
//     return (
//         <UsersSidebarNav>
//             <form className = 'user__profile__container' onSubmit={updateProfile}>
//                 <div className="user__profile__header">
//                     <h1>My Profile</h1>
//                     <p>Add information about yourself</p>
//                 </div>
//                 <div className="user__profile__body">
//                     <div className="profile__form">
//                         <input type="text" name="firstName" value={updateUser.firstName} onChange={handleChange}/>
//                     </div>
//                     <div className="profile__form">
//                         <input type="text" name="lastName"  value={updateUser.lastName} onChange={handleChange}/>
//                     </div>
//                     <div className="profile__form">
//                         <input type="email" name="email"  value={updateUser.email} disabled/>
//                     </div>
//                 </div>
//                 <div className='center'><button className="user__profile__edit">Save</button></div>   
//             </form>
//         </UsersSidebarNav>
//     )
// }
// export default UserSetting;
