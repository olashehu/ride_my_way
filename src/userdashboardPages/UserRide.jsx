
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

import Button from "../Utility/Button/Button";

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

  const handleJoinRide = async (id) => {
    
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
    <div className="join-ride-wrapper">
      <div className="join-ride-profile-wrapper">
        <img src="/avatar.png" alt="" />
        <span>
          {onUserCardFirstname} {onUserCardLastName}
        </span>
      </div>
      <div className="join-ride-flex-wrapper">
        <span className="join-ride-left-wrapper">Location</span>
        <span className="join-ride-right-wrapper location-wrapper">
          {onUserCardLocation}
        </span>
      </div>
      <div className="join-ride-flex-wrapper">
        <span className="join-ride-left-wrapper">Destination</span>
        <span className="join-ride-right-wrapper">{onUserCardDestination}</span>
      </div>
      <div className="join-ride-flex-wrapper">
        <span className="join-ride-left-wrapper">Price</span>
        <span className="join-ride-right-wrapper price-wrapper">{onUserCardPrice}</span>
      </div>
      <div className="join-ride-flex-wrapper">
        <span className="join-ride-left-wrapper">Phone</span>
        <span className="join-ride-right-wrapper contact-wrapper">{onUserCardPhone}</span>
      </div>
      <div className="join-ride-button-wrapper">
        <Button
          type="button"
          buttonText="Join ride"
          onClick={() => handleJoinRide(id)}
          disabled={disableJoinOfferButton}
        />
      </div>
    </div>
  );
};

export default UserRide;
