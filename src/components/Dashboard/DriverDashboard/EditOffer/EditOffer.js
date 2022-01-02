

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { offerUpdate } from "../../../../reducers/offerSlice";
import Button from "../../../../Utility/Button/Button";
import Input from "../../../../Utility/TextInput/Input";
import "./EditOffer.css";

const EditOffer = ({ location, destination, price, closeModal, id }) => {
  const dispatch = useDispatch();
  const [updateOffer, setUpdateOffer] = useState({
    location,
    destination,
    price,
  });

  function handleChange(e) {
    setUpdateOffer({ ...updateOffer, [e.target.name]: e.target.value });
  }

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("driver-token"));
    try {
      const { data } = await axios({
        method: "put",
        baseURL: `http://localhost:3000/v1/driver/ride-offer/${id}`,
        data: updateOffer,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      closeModal();
      dispatch(offerUpdate(data.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="login-wrapper edit-offer-wrapper">
        <h1 className="login-header-wrapper">Update your offer here</h1>
        <form>
          <div className="login-input-wrapper edit-modal-input">
            <Input
              type="text"
              name="location"
              id="location"
              htmlFor="location"
              placeholder="Location"
              required
              onChange={handleChange}
              value={updateOffer.location}
            />
          </div>
          <div className="login-input-wrapper  edit-modal-input">
            <Input
              type="text"
              name="destination"
              id="destination"
              htmlFor="destination"
              placeholder="Destination"
              required
              onChange={handleChange}
              value={updateOffer.destination}
            />
          </div>
          <div className="login-input-wrapper  edit-modal-input">
            <Input
              type="number"
              name="price"
              id="price"
              htmlFor="price"
              placeholder="Price"
              required
              onChange={handleChange}
              value={updateOffer.price}
            />
          </div>
          <Button
            type="submit"
            buttonText="Update offer"
            className="login-button-wrapper update"
            onClick={(e) => handleUpdate(e, id)}
          />
          <Button
            type="submit"
            buttonText="cancel"
            className="login-button-wrapper"
            onClick={closeModal}
          />
        </form>
      </div>
    </>
  );
};

export default EditOffer;
