import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


import UsersSidebarNav from '../../../../components/Dashboard/UserDashboard/UserNavigation/UserSecondaryNav/UsersSidebarNav';
import MyProfile from '../../../../Utility/MyProfile/MyProfile';
import { setCurrentUser } from '../../../../reducers/authslice';

const myProfile = () => {
    const {firstName, lastName, email} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const getUserInfo = async () => {
        const token = JSON.parse(localStorage.getItem("user-token"));
       try {
         const { data } = await axios({
           method: "get",
           baseURL: "http://localhost:3000/v1/user",
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });
         dispatch(setCurrentUser(data.data));
         history.push("/profile");
       } catch (error) {
         console.log(error);
       }
    }
    useEffect(() => {
        getUserInfo()
    }, [])
  return (
     <UsersSidebarNav>
         <MyProfile firstName={firstName} lastName={lastName} email={email}/>
     </UsersSidebarNav>
  )
};

export default myProfile;
