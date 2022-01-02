

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import AddOffer from "../../../../components/Dashboard/DriverDashboard/AddOffer/AddOffer";
import { setAddOffer } from "../../../../reducers/offerSlice";

const AddOfferPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const defaultValue = {
    location: "",
    destination: "",
    price: "",
  };
  const [offer, setOffer] = useState(defaultValue);
  const handleChange = (event) => {
    setOffer({ ...offer, [event.target.name]: event.target.value });
  };

  const submitOffer = async (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("driver-token"));
    try {
      const { data } = await axios({
        method: "post",
        baseURL: "http://localhost:3000/v1/driver/ride-offer",
        data: offer,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setAddOffer(offer ));
      history.push("/my-offer");
      Swal.fire({
        position: "middle",
        icon: "success",
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: `${err.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <AddOffer handleChange={handleChange} handleSubmit={submitOffer} data={offer} />
  );
};

export default AddOfferPage;
