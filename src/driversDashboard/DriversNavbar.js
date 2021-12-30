
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import DritopNav from "./DritopNav";
import "./DriversNavbar.css";

const DriversNavbar = (props) => {
  const history = useHistory();

  const [toggle, setToggle] = useState(false);
  const toggleFunc = () => {
    setToggle(!toggle);
  };

  const logout = () => {
    localStorage.removeItem("driver-token");
    localStorage.removeItem("driver-info");
    history.push("/driver/login");
  };
  return (
    <>
      <>
        <div className={`${toggle ? "dashboard-layout" : "dashboard-layout2"}`}>
          <DritopNav toggle={toggleFunc} className="topnav" />
          <div className="sidenav">
            <div
              className={`${
                toggle ? "nav-link-container2  nav-link-container" : "nav-link-container"
              }`}>
              <ul className="links-group">
                {/* <Link to="/driver/dashboard" className="link-container">
                  <li className="links-items">
                    <i class="fas fa-home"></i>
                    <a>Offer ride</a>
                  </li>
                </Link> */}
                <Link to="/driver/add-offer" className="link-container">
                  <li className="links-items">
                    <i class="fas fa-home"></i>
                    <a>add offer</a>
                  </li>
                </Link>
                <Link to="/my-offer" className="link-container">
                  <li className="links-items">
                    <i class="fas fa-history"></i>
                    <a>My offer</a>
                  </li>
                </Link>
                <Link to="/ride-request" className="link-container">
                  <li className="links-items">
                    <i class="fas fa-question"></i>
                    <a>Ride request</a>
                  </li>
                </Link>
                <Link to="/driver/history" className="link-container">
                  <li className="links-items">
                    <i class="fas fa-history"></i>
                    <a>history</a>
                  </li>
                </Link>
                <Link to="/driver/profile" className="link-container">
                  <li className="links-items">
                    <i class="fas fa-cog"></i>
                    <a>Settings</a>
                  </li>
                </Link>
                <Link className="link-container" onClick={logout}>
                  <li className="links-items">
                    <i class="fas fa-sign-out-alt"></i>
                    <a>Log out</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="child">{props.children}</div>
        </div>
      </>
    </>
  );
};

export default DriversNavbar;
