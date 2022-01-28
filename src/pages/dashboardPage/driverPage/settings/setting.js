/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Settings from "../../../../Utility/Settings/Settings";
import DriversNavbar from "../../../../components/Dashboard/DriverDashboard/DriverDashboardNavigation/Secondary/DriversNavbar";
import { updateCurrentDriver, setCurrentDriver } from "../../../../reducers/driverSlice";

const DriverSettingPage = () => {
  
  const dispatch = useDispatch();
  const [profileNames, setProfileNames] = useState({});

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileNames({ ...profileNames, [name]: value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("driver-token"));
    try {
      const { data } = await axios({
        method: "put",
        baseURL: "http://localhost:3000/v1/driver-profile",
        data: profileNames,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch(updateCurrentDriver(data.data));
      setProfileNames(profileNames);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDriverInfo = async () => {
    const token = JSON.parse(localStorage.getItem("driver-token"));
    try {
      const { data } = await axios({
        baseURL: "http://localhost:3000/v1/drivers",
        method: "get",
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
      const { firstName, lastName } = data.data;
      const userNames = { firstName, lastName };
      setProfileNames(userNames);
      dispatch(setCurrentDriver(userNames));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDriverInfo();
  }, [])

  return (
    <DriversNavbar>
      <Settings
        firstNameValue={profileNames.firstName}
        lastNameValue={profileNames.lastName}
        onChange={handleProfileChange}
        onSubmit={handleFormSubmit}
      />
    </DriversNavbar>
  );
};

export default DriverSettingPage;
