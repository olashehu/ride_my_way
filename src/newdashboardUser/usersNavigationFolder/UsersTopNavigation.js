

import React from "react";
import { useSelector } from "react-redux";
import HamburgerIcon from "../../icons/HamburgerIcon";

import "./UsersTopNavigation.css";

const UsersTopNavigation = ({ togle }) => {
  const firstName = useSelector((state) => state.auth.firstName);
  return (
    <div className="user-navigation-wrapper">
      <div className="logo-wrapper">
        <i class="fa fa-taxi" aria-hidden="true"></i>
        <h2 className="logo-text">RMW</h2>
      </div>
      <div className="profile-image-wrapper">
        <img src="/avatar.png" alt="" />
        <span>{firstName}</span>
      </div>
      <button className="burgger-icon-wrapper" onClick={togle}>
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default UsersTopNavigation;
