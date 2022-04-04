/** @format */

import axios from "axios";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { displayOffer, errorInOffer } from "../../../../reducers/offerSlice";
import Swal from "sweetalert2";

import UsersSidebarNav from "../../../../components/Dashboard/UserDashboard/UserNavigation/UserSecondaryNav/UsersSidebarNav";
import JoinRide from "../../../../components/Dashboard/UserDashboard/JoinRide/JoinRide";
import "../../../../components/Dashboard/UserDashboard/JoinRide/JoinRide.css";
import Pagination from "../../../../components/Pagination2/Pagination";

const JoinRidePage = () => {
  const dispatch = useDispatch();
  const [userOffer, setUserOffer] = useState([]);
  const [pagination, setPagination] = useState({});

  const getOffer = async (page) => {
    try {
      const token = JSON.parse(localStorage.getItem("user-token"));
      const { data } = await axios({
        method: "get",
        baseURL: `http://localhost:3000/v1/driver/ride-offers?page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      dispatch(displayOffer({ offersFromDatabase: data.data }));
      setUserOffer(data.data);
      setPagination(data.paginationData);
    } catch (error) {
      dispatch(errorInOffer({ offerError: error.response.data.message }));
    }
  };

  const handleJoinRide = async (id, driverEmail, driverFirstName) => {
    const token = JSON.parse(localStorage.getItem("user-token"));
    try {
      const { data } = await axios({
        method: "post",
        baseURL: `http://localhost:3000/v1/user/join-ride/${id}`,
        data: { driverEmail, driverFirstName },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getOffer(1);
  }, []);
  
  return (
    <UsersSidebarNav>
      <h2 className="join-ride-header-wrapper">Available ride</h2>
      <div className="join-ride-grid-wrapper">
        {userOffer.map((user_card, index) => {
          return (
            <JoinRide
              key={index}
              onUserCardFirstname={user_card.firstName}
              onUserCardLastName={user_card.lastName}
              onUserCardName={user_card.name}
              onUserCardLocation={user_card.location}
              onUserCardDestination={user_card.destination}
              onUserCardPrice={user_card.price}
              onUserCardPhone={user_card.phone}
              onClick={() =>
                handleJoinRide(user_card.offerId, user_card.email, user_card.firstName)
              }
            />
          );
        })}
      </div>
      <Pagination
        showingUntil={pagination.showingUntil}
        showingFrom={pagination.showingFrom}
        totalResults={pagination.totalResults}
        totalPagesNum={pagination.totalPages}
        currentPage={pagination.currentPage}
        onButtonClick={(page) => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });

          getOffer(page);
        }}
      />
    </UsersSidebarNav>
  );
};

const mapStateToProps = (state) => {
  return {
    offer: state.auth,
  };
};
export default connect(mapStateToProps)(JoinRidePage);
