

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";

import UsersSidebarNav from "../../../../components/Dashboard/UserDashboard/UserNavigation/UserSecondaryNav/UsersSidebarNav";
import MyProfile from "../../../../Utility/MyProfile/MyProfile";
// import { setCurrentUser } from "../../../../reducers/authslice";

const myProfile = () => {
  // const { firstName, lastName, email } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});

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
      const {firstName, lastName, email, phone} = data.data;
      const user = {firstName, lastName, email, phone};
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, [userInfo]);

  return (
    <UsersSidebarNav>
      <MyProfile
        firstName={userInfo.firstName}
        lastName={userInfo.lastName}
        email={userInfo.email}
        phone={userInfo.phone}
        linkTo="/user/profile"
      />
    </UsersSidebarNav>
  );
};

export default myProfile;
