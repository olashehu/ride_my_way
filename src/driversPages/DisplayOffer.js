import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {  useHistory } from "react-router-dom";
import MyOffer from "./MyOffer";
import DriversNavbar from "../driversDashboard/DriversNavbar";
import { displayOffer } from "../reducers/offerSlice";

const DisplayOffer = () => {

  const offers1 = useSelector((state) => state.offer);
  console.log(offers1);
  const dispatch = useDispatch();
  //const history = useHistory();
  
  const [myOffer, setMyOffer] = useState([]);

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
      dispatch(displayOffer({offersFromDatabase: data.data}));
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
      setMyOffer(myOffer.filter((offer) => offer.id !== id));
      const notify = () => toast(data.message);
      notify();
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <DriversNavbar>
      <h1 style={{textAlign:'center'}}>My offer</h1>
      <div style={{ display: "flex", flexWrap: "wrap", width: "96%", marginLeft: '4%' }}>
        {myOffer.map((item, index) => {
          return (
            <MyOffer
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
export default DisplayOffer;
