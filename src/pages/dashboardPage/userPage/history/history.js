

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { displayHistory } from "../../../../reducers/offerSlice";
import RideHistory from "../../../../components/Dashboard/UserDashboard/History/RideHistory";

const UserRideHistoryPage = () => {
  const dispatch = useDispatch();
  const [userHistory, setUserHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const getHistoryData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user-token"));
      const { data } = await axios({
        baseURL: "http://localhost:3000/v1/user/ride-history",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(displayHistory({ historyFromDatabase: data.data }));
      setUserHistory(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistoryData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userHistory.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return <RideHistory currentPost={currentPosts} postsPerPage={userHistory.length} paginate={paginate}/>;
};
export default UserRideHistoryPage;
