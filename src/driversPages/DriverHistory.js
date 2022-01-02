

import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DriversNavbar from "../driversDashboard/DriversNavbar";
import { displayHistory } from "../reducers/offerSlice";
import "../tablecomponent/Table.css";
import Pagination from "../userdashboardPages/Pagination";

const DriverHistory = () => {
  const state = useSelector((state) => state.offer.getHistory);
  const dispatch = useDispatch();
  const [driverHistory, setDriverHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

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
      console.log(driverHistory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistoryData();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = driverHistory.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DriversNavbar>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>User-id</th>
              <th>Date</th>
              <th>Location</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((data, index) => {
              return (
                <tr>
                  <td data-label='S/N'>{data.historyId}</td>
                  <td data-label="User-id">{data.userId}</td>
                  <td data-label="Date">{moment(data.createdAt).format("LLL")}</td>
                  <td data-label="Location">{data.location}</td>
                  <td data-label="Destination">{data.destination}</td>
                  <td data-label="Price">{data.price}</td>
                  <td data-label="Status">
                    <span className="text_open">{data.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
         <Pagination
            postsPerPage={postsPerPage}
            totalPosts={driverHistory.length}
            paginate={paginate}
          />
      </div>
    </DriversNavbar>
  );
};
export default DriverHistory;
