
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

import UsersTopNavigation from "../UserPrimaryNav/UsersTopNavigation";
import menuLinks from "../../../../../staticData/userDashboardData/sideMenuLinksData";
import "./UsersSidebarNav.css";
import LogoutIcon from "../../../../../icons/LogoutIcon";

const UsersSidebarNav = (props) => {

  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const handleChange = () => {
    setToggle(!toggle);
  };
  const handleLogout = () => {
    localStorage.removeItem("user-token");
    localStorage.removeItem("user-info");
    history.push("/user/login");
  };
  return (
    <>
      <div className={`${toggle ? "user-sidenav-wrapper-1" : "user-sidenav-wrapper-2"}`}>
        <div className="navtop-wrapper">
          <UsersTopNavigation togle={handleChange} />
        </div>
        <div className="user-side-menu-wrapper">
          <ul
            className={`${
              toggle ? "menu-links-wrapper menu-links-wrapper-2" : "menu-links-wrapper-2"
            }`}>
            {menuLinks.map((link, index) => {
              return (
                <Link to={link.path} key={link.id} className="link-container">
                  <li key={index}>
                    {link.icon}
                    <a>{link.title}</a>
                  </li>
                </Link>
              );
            })}
            <Link onClick={handleLogout}>
              <li className="logout-wrapper">
                <LogoutIcon />
                <a className="logout">Log out</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="all-content-wrapper">{props.children}</div>
      </div>
    </>
  );
};

export default UsersSidebarNav;
