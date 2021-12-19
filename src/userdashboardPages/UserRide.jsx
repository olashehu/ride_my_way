/** @format */

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const UserRide = ({
  id,
  onUserCardFirstname,
  onUserCardLastName,
  onUserCardLocation,
  onUserCardDestination,
  onUserCardPrice,
  onUserCardPhone,
  email,
}) => {
  const driverEmail = useSelector((state) => state.offer.offers[0].email);
  const driverFirstName = useSelector((state) => state.offer.offers[0].firstName);
  const [disableJoinOfferButton, setDisableJoinOfferButton] = useState(false);
  const joinOffer = async (id) => {
    setDisableJoinOfferButton(true);
    const token = JSON.parse(localStorage.getItem("token"));
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
      console.log(error.response);
      Swal.fire({
        position: "middle",
        icon: "error",
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <>
        <div className="user__join-ride-flex-container">
          <div className="first__ join-ride-flex-item">
            <img src="/avatar.png" alt="" className="driver-image" />:
            <span className="im">
              {onUserCardFirstname} {onUserCardLastName}
            </span>
          </div>
          <div className="second__ join-ride-flex-item">
            <span className="in">Location</span>:
            <span className="im">{onUserCardLocation}</span>
          </div>
          <div className="third__ join-ride-flex-item">
            <span className="in">Destination</span>:
            <span className="im">{onUserCardDestination}</span>
          </div>
          <div className="fourth__ join-ride-flex-item">
            <span className="in">Price</span>:
            <span className="im">{onUserCardPrice}</span>
          </div>
          <div className="fifth__ join-ride-flex-item">
            <span className="in">Contact</span>:
            <span className="im">{onUserCardPhone}</span>
          </div>
          <div className="sixth__ jon-ride-flex-item">
            <button
              disabled={disableJoinOfferButton}
              type="submit"
              onClick={() => joinOffer(id)}>
              Join ride
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default UserRide;
