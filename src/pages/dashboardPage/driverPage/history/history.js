/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import History from "../../../../components/Dashboard/DriverDashboard/History/History";
import { displayHistory } from "../../../../reducers/offerSlice";

const DriverHistoryPage = () => {
  const state = useSelector((state) => state.offer.getHistory);
  const dispatch = useDispatch();
  const [driverHistory, setDriverHistory] = useState([]);
  const [pagination, setPagination] = useState({});

  const getHistoryData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("driver-token"));
      const { data } = await axios({
        baseURL: "http://localhost:3000/v1/driver/ride-history",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(displayHistory({ historyFromDatabase: data.data }));
      setDriverHistory(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHistoryData();
  }, []);

  return (
    <>
      <History currentPosts={driverHistory} />
    </>
  );
};

export default DriverHistoryPage;
