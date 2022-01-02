

import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { displayHistory } from "../../../../reducers/offerSlice";
import "./RideRequest.css";

const RideRequest = ({
  historyId,
  userId,
  firstName,
  lastName,
  location,
  destination,
  phone,
  data
}) => {

   const dispatch = useDispatch();
  
  const [accept, setAccept] = useState(false);
  const [startTrip, SetStartTrip] = useState(false);
  const [endTrip, setEndtrip] = useState(false);

  const email = data[0].email;
  const userName = data[0].firstName;

  const handleAccept = async (historyId) => {
    setAccept(!accept);
    SetStartTrip(!startTrip);
    try {
      const status = { status: "Accepted" };
      const result = await axios({
        baseURL: `http://localhost:3000/v1/driver-test/${historyId}`,
        method: "put",
        data: { status, email, userName },
      });
      const notify = () => toast(data.message);
      notify();
    } catch (error) {}
  };

  const handleStartTrip = async (historyId) => {
    SetStartTrip(!startTrip);
    setEndtrip(!endTrip);
    try {
      const status = { "status": "Trip started" };
      const result = await axios({
        baseURL: `http://localhost:3000/v1/driver-test/${historyId}`,
        method: "put",
        data: { status },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEndtrip = async(historyId) => {
   try {
      const status = { status: "Trip completed" };
      const result = await axios({
        baseURL: `http://localhost:3000/v1/driver-test/${historyId}`,
        method: "put",
        data: { status },
      });    
   } catch (error) {
     console.log(error);
   }
  }

   const handleReject = async (id) => {
     const newHistory = data.filter((item) => item.historyId !== id);
     const status = { status: "Rejected" };
     dispatch(displayHistory({ historyFromDatabase: newHistory }));
     try {
       const res = await axios({
         baseURL: `http://localhost:3000/v1/driver/offer-decline/${id}`,
         method: "put",
         data: { status, email, userName },
       });
     } catch (error) {
       console.log(error);
     }
   };

  return (
    <div className="accept-reject-container">
      <div className="accept-reject-flex-container">
        <img src="/avatar.png" alt="" className="accept-reject-image" />
        <h4 className="passenger-name">
          {firstName} {lastName}
        </h4>
      </div>
      <div className="accept-reject-flex-container">
        <h3 className=''>Location</h3>: <h3>{location}</h3>
      </div>
      <div className="accept-reject-flex-container">
        <h3>Destination</h3>:{" "}
        <h3>{destination}</h3>
      </div>
      <div className="accept-reject-flex-container">
        <h3>Phone</h3>: <h3>{phone}</h3>
      </div>
      <div className="accept-reject-flex-container">
        <button
          className={accept ? "accept-offer" : "not-accept-offer"}
          onClick={() => handleAccept(historyId)}>
          Accept
        </button>
        <button
          className={startTrip ? "start-trip" : "not-start-trip"}
          onClick={() => handleStartTrip(historyId)}>
          Start trip
        </button>
        <button
          className={endTrip ? "end-trip" : "not-end-trip"}
          onClick={() => handleEndtrip(historyId)}>
          End trip
        </button>
        <button
          className={accept ? "reject-offer" : "not-reject-offer"}
          onClick={() => handleReject(historyId)}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default RideRequest;
