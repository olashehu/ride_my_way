import React from 'react';
import './Accept_RejectOffer.css';

const Accept_RejectOffer = ({id, image, name, location, destination}) => {
    return (
      <div className="accept-reject-container">
        <div className="accept-reject-flex-container">
          <img src={image} alt="" className="accept-reject-image" />
          <h4 className="passenger-name">{name}</h4>
        </div>
        <div className="accept-reject-flex-container">
          <span>Location</span>: <span className='passenger-to-driver'>{location}</span>
        </div>
        <div className="accept-reject-flex-container">
          <span>Destination</span>: <span className='passenger-to-driver'>{destination}</span>
        </div>
        <div className="accept-reject-flex-container">
          <button className='accept-offer'>Accept</button>
          <button className='reject-offer'>Reject</button>
        </div>
      </div>
    );
}

export default Accept_RejectOffer
