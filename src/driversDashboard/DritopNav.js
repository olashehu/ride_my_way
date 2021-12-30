/** @format */

import React from "react";
import { useSelector } from "react-redux";

import "./DritopNav.css";
// import "./DriversNavbar.css";
import HamburgerIcon from "../icons/HamburgerIcon";

const DritopNav = (props) => {
  const { firstName } = useSelector((state) => state.driverAuth);
  return (
    <>
      <nav className="d_top-nav">
        <div className="d_top-nav-left">
          <h1>RMW</h1>
          <button className="d_burger-container" onClick={props.toggle}>
            <HamburgerIcon />
          </button>
        </div>
        <div className="d_top-nav-right">
          <div className="d_top-nav-pics">
            <img src="/avatar.png" alt="" />
          </div>
          <div className="d_top-nav-name">
            <span>{firstName}</span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default DritopNav;
