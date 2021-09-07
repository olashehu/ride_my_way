import axios from 'axios';
import React, {useState} from 'react';
import './Accept_RejectOffer.css';

const Accept_RejectOffer = ({historyId, handleReject, userId, image, firstName, lastName, location, destination, phone}) => {

    const handleAccept = async (historyId, e) => {
      try {
       
        if(e.target.className === 'accept-offer'){
          const status = {"status": "Accepted"};
          const { data } = await axios({
            baseURL: `http://localhost:3000/v1/driver-test/${historyId}`,
            method: "put",
            data: status,
          });
        }
        
      } catch (error) {
        console.log(error.response);
      }
    }
    return (
      <div className="accept-reject-container">
        <div className="accept-reject-flex-container">
          <img src='/avatar.png' alt="" className="accept-reject-image" />
          <h4 className="passenger-name">
            {firstName} {lastName}
          </h4>
        </div>
        <div className="accept-reject-flex-container">
          <span>Location</span>: <span className="passenger-to-driver">{location}</span>
        </div>
        <div className="accept-reject-flex-container">
          <span>Destination</span>:{" "}
          <span className="passenger-to-driver">{destination}</span>
        </div>
        <div className="accept-reject-flex-container">
          <span>Phone</span>:{" "}
          <span className="passenger-to-driver">{phone}</span>
        </div>
        <div className="accept-reject-flex-container">
          <button className="accept-offer" onClick={(e) => handleAccept(historyId, e)}>
            Accept
          </button>
          <button className="reject-offer" onClick={()=> handleReject(historyId)}>Reject</button>
        </div>
      </div>
    );
}

export default Accept_RejectOffer
