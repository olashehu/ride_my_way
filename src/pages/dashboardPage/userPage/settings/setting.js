/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";

import Settings from "../../../../Utility/Settings/Settings";
import UsersSidebarNav from "../../../../components/Dashboard/UserDashboard/UserNavigation/UserSecondaryNav/UsersSidebarNav";
import { updateCurrentUser, setCurrentUser } from "../../../../reducers/authslice";

const USerSettingPage = () => {

  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("user-token"));
    try {
      const { data } = await axios({
        method: "put",
        baseURL: "http://localhost:3000/v1/user/profile-page",
        data: userProfile,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(updateCurrentUser(data.data));
      setUserProfile(userProfile);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("user-token"));
    try {
      const { data } = await axios({
        method: "get",
        baseURL: "http://localhost:3000/v1/user",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { firstName, lastName } = data.data;
      const userNames = { firstName, lastName };
      setUserProfile(userNames);
      dispatch(setCurrentUser(userNames));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <UsersSidebarNav>
      <Settings
        firstNameValue={userProfile.firstName}
        lastNameValue={userProfile.lastName}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
    </UsersSidebarNav>
  );
};

export default USerSettingPage;
