/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { displayHistory } from "../../../../reducers/offerSlice";
import RideHistory from "../../../../components/Dashboard/UserDashboard/History/RideHistory";

const UserRideHistoryPage = () => {
  const dispatch = useDispatch();
  const [historyData, setHistoryData] = useState([]);
  const [paginate, setPaginate] = useState({});

  const getHistoryData = async (page) => {
    
    try {
      const token = JSON.parse(localStorage.getItem("user-token"));
      const { data } = await axios({
        baseURL: `http://localhost:3000/v1/user/ride-history?page=${page}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHistoryData(data.data);
      setPaginate(data.paginationData);
      dispatch(displayHistory({ historyFromDatabase: data.data }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistoryData(1);
  }, []);

  return (
    <RideHistory
      currentPost={historyData}
      showingUntil={paginate.showingUntil}
      showingFrom={paginate.showingFrom}
      totalResults={paginate.totalDataLen}
      totalPagesNum={paginate.totalPages}
      currentPage={paginate.currentPage}
      onButtonClick={(page) => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });

        getHistoryData(page);
      }}
    />
  );
};
export default UserRideHistoryPage;
