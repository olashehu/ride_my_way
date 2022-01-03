/** @format */

import PropTypes from "prop-types";
import "./RideCard.css";

const RideCard = (props) => {
    const { alt, firstName, lastName, location, destination, price, phone, children } = props;
  return (
    <div className="ride-card-wrapper">
      <div className="image-name-wrapper">
        <img src="" alt={alt} />
        <div className="profile-name">
          <span className="first-name">{firstName}</span>
          <span className="last-name">{lastName}</span>
        </div>
      </div>
      <div className="ride-card-details">
        <span>Location</span>
        <span>{location}</span>
      </div>
      <div className="ride-card-details">
        <span>Destination</span>
        <span>{destination}</span>
      </div>
      <div className="ride-card-details">
        <span>Price</span>
        <span>{price}</span>
      </div>
      <div className="ride-card-details">
        <span>Phone</span>
        <span>{phone}</span>
      </div>
      <div className="children">{children}</div>
    </div>
  );
};

RideCard.propTypes = {};

export default RideCard;
