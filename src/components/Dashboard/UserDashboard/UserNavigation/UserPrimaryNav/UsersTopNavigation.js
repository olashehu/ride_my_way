

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HamburgerIcon from "../../../../../icons/HamburgerIcon";

import "./UsersTopNavigation.css";

const UsersTopNavigation = ({ togle }) => {
  const [name, setName] = useState('');
  const fetchUser = async () => {
    const token = JSON.parse(localStorage.getItem("user-token"))
    try {
      const { data } = await axios({
        method: "get",
        baseURL: "http://localhost:3000/v1/user",
        headers: {
          Authorization: `Beare ${token}`
        }
      });
      const {firstName} = data.data;
      setName(firstName);
    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div className="user-navigation-wrapper">
      <div className="logo-wrapper">
        <i class="fa fa-taxi" aria-hidden="true"></i>
        <h2 className="logo-text">RMW</h2>
      </div>
      <div className="profile-image-wrapper">
        <img src="/avatar.png" alt="profile-image" />
        <span>{name}</span>
      </div>
      <button className="burgger-icon-wrapper" onClick={togle}>
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default UsersTopNavigation;
