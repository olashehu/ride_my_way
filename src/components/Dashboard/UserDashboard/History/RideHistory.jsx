// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import moment from "moment";
// import { useDispatch } from "react-redux";
import moment from "moment";

import UsersSidebarNav from "../UserNavigation/UserSecondaryNav/UsersSidebarNav";
import Pagination from "../../../../userdashboardPages/Pagination";
import "../../../../tablecomponent/Table.css";


const RideHistory = ({currentPost, totalPosts, postsPerPage, paginate}) => {
  // const dispatch = useDispatch();
  // const [userHistory, setUserHistory] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5);

  // const getHistoryData = async () => {
  //   try {
  //     const token = JSON.parse(localStorage.getItem("user-token"));
  //     const { data } = await axios({
  //       baseURL: "http://localhost:3000/v1/user/ride-history",
  //       method: "get",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     dispatch(displayHistory({ historyFromDatabase: data.data }));
  //     setUserHistory(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getHistoryData();
  // }, []);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = userHistory.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <UsersSidebarNav>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Driver-id</th>
              <th>Date</th>
              <th>Location</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPost.map((offer, index) => {
              return (
                <tr key={index}>
                  <td data-label="S/N">{offer.id}</td>
                  <td data-label="Driver-id">{offer.driverId}</td>
                  <td data-label="Date">{moment(offer.createdAt).format("LLL")}</td>
                  <td data-label="Location">{offer.location}</td>
                  <td data-label="Destination">{offer.destination}</td>
                  <td data-label="Price">{offer.price}</td>
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
          totalPosts={totalPosts}
          paginate={paginate}
        />
      </div>
    </UsersSidebarNav>
  );
};

export default RideHistory;
