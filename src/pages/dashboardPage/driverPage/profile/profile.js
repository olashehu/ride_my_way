

import React, {useState, useEffect} from "react";
import axios from "axios";

import DriversNavbar from "../../../../components/Dashboard/DriverDashboard/DriverDashboardNavigation/Secondary/DriversNavbar";
import MyProfile from "../../../../Utility/MyProfile/MyProfile";
// import { setCurrentDriver } from "../../../../reducers/driverSlice";

const Profile = () => {
    const [driverInfo, setDriverInfo] = useState({});

    const fetchDriverInfo = async () => {
        const token = JSON.parse(localStorage.getItem("driver-token"))
        try {
            const { data } = await axios({
              baseURL: "http://localhost:3000/v1/drivers",
              method: "get",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const {firstName, lastName, email, phone} = data.data;
            const driverNames = {firstName, lastName, email, phone}
            setDriverInfo(driverNames);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        fetchDriverInfo();
    }, [])

  return (
    <DriversNavbar>
      <MyProfile
        firstName={driverInfo.firstName}
        lastName={driverInfo.lastName}
        email={driverInfo.email}
        phone={driverInfo.phone}
        linkTo="/edit-profile"
      />
    </DriversNavbar>
  );
};

export default Profile;
