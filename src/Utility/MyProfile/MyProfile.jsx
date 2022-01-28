/** @format */

import React from "react";
import { Link } from "react-router-dom";
// import ProfileImage from '../../assest/PriofileImage'
import "./myProfile.css";

const MyProfile = ({ firstName, lastName, email }) => {
  return (
    <div className="my-profile-wrapper">
      <div className="my-profile-inner-wrapper">
        <div className="my-profile-info">
          <div className="my-profile-header">
            <h2 className="basic-info-container">Basic information</h2>
            <div className="image-name-wrapper">
              <div>
                profile image
                <img src="/public/avatar.png" alt="" className="my-profile-image" />
              </div>
              <div className="my-profile-name-wrapper">
                <div className="name-container user-information">
                  <p>First name: </p>
                  <p className="info-content-container">{firstName}</p>
                </div>
                <div className="name-container user-information">
                  <p>last name: </p>
                  <p className="info-content-container last-name-container">{lastName}</p>
                </div>
                <div className="name-container user-information">
                  <p>D. O. B: </p>
                  <p className="info-content-container date-container">20-Jan-1950</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-profile-contact-info-wrapper">
            <h2 className="contact-information-container">Contact information</h2>
            <div className="phone-container user-information">
              <p>Pnone:</p>
              <p className="info-content-container phone-content">08099999999</p>
            </div>
            <div className="email-info-container user-information">
              <p>Email:</p>
              <p className="info-content-container email-content">{email}</p>
            </div>
            <div className="adress-container user-information">
              <p>Address:</p>
              <p className="info-content-container address-content">
                20, Olaolu str, isolo Lagos.
              </p>
            </div>
          </div>
          <div className="my-profile-personal-info-wrapper">
            <h2 className="personal-info-content-wrapper">Personal Information</h2>
            <div className="personal-info-height-wrapper user-information">
              <p>Height:</p>
              <p className="info-content-container height">170 CM</p>
            </div>
            <div className="personal-info-weight-wrapper user-information">
              <p>Weight:</p>
              <p className="info-content-container weight">80 KG</p>
            </div>
          </div>
        </div>

        <Link to="/user/profile" className="edit-profile-action">
          Edit information
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
