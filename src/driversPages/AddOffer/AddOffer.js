/** @format */

import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { setAddOffer } from "../../reducers/offerSlice";
import DriversNavbar from "../../driversDashboard/DriversNavbar";
import Button from "../../Utility/Button/Button";
import "./AddOffer.css";
import TextInput from "../../Utility/TextInput/TextInput";

const AddOffer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [offer, setOffer] = useState({
    location: "",
    destination: "",
    price: "",
  });

  const changeInputOffer = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const handleAddOffer = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("driver-token"));
    console.log(token, "token");
    try {
      const { data } = await axios({
        method: "post",
        baseURL: "http://localhost:3000/v1/driver/ride-offer",
        data: offer,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setAddOffer({ offer }));
      history.push("/my-offer");
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Offer added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        position: "middle",
        icon: "error",
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <DriversNavbar>
      <div className="addoffer-wrapper">
        <header className="add-offer-title-wrapper">
          <h2>Add your offer bellow</h2>
        </header>
        <div className="add-offer-input-wrapper">
          <div className="input-field-wrapper">
            <label htmlFor="location"></label>
            <TextInput
              type="text"
              name="location"
              placeholder="Enter your location here..."
              autoComplete="off"
              onChange={changeInputOffer}
              value={offer.location}
            />
          </div>
          <div className="input-field-wrapper">
            <label htmlFor="destination"></label>
            <TextInput
              type="text"
              name="destination"
              id=""
              placeholder="Enter your destination here..."
              autoComplete="off"
              onChange={changeInputOffer}
              value={offer.destination}
            />
          </div>
          <div className="input-field-wrapper">
            <label htmlFor="price"></label>
            <TextInput
              type="text"
              name="price"
              id=""
              placeholder="Enter your amount here..."
              autoComplete="off"
              onChange={changeInputOffer}
              value={offer.price}
            />
          </div>
        </div>
        <div className="add-offer-button-wrapper">
          <Button type="submit" buttonText="Add offer" onClick={handleAddOffer}></Button>
        </div>
      </div>
    </DriversNavbar>
  );
};
export default AddOffer;
