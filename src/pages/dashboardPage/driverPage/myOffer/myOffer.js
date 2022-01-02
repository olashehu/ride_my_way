

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import MyOffer from "../../../../components/Dashboard/DriverDashboard/MyOffer/MyOffer.jsx";
import "../../../../components/Dashboard/DriverDashboard/MyOffer/MyOffer.css";
import DriversNavbar from "../../../../driversDashboard/DriversNavbar";
import { displayOffer } from "../../../../reducers/offerSlice";

const MyOfferPage = () => {
  const getOfferFromStore = useSelector((state) => state.offer.offers);
  const dispatch = useDispatch();
  const [myOffer, setMyOffer] = useState(getOfferFromStore);

  const getOffer = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("driver-token"));
      const { data } = await axios({
        baseURL: "http://localhost:3000/v1/driver/ride-offer",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(displayOffer({ offersFromDatabase: data.data }));
      setMyOffer(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOffer();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("driver-token"));
      const { data } = await axios({
        baseURL: `http://localhost:3000/v1/driver/ride-offer/${id}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setMyOffer(remainingOffer);
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        }
      });
      const remainingOffer = myOffer.filter((offer) => offer.id !== id);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <DriversNavbar>
      <h1 style={{ textAlign: "center" }}>My offer</h1>
      <div className="display-offer-container">
        {myOffer.map((item, index) => {
          return (
            <MyOffer
              key={index}
              location={item.location}
              destination={item.destination}
              price={item.price}
              handleDelete={handleDelete}
              offerId={item.id}
            />
          );
        })}
      </div>
    </DriversNavbar>
  );
};
export default MyOfferPage;
