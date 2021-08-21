import axios from "axios";
import React, { useState, useEffect } from "react";
//import { connect } from 'react-redux';
import DriversNavbar from "../driversDashboard/DriversNavbar";
import "./MyOffer.css";
import { toast } from "react-toastify";

const MyOffer = () => {
  const [myOffer, setMyOffer] = useState([]);
  const getOffer = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("driver-token"));
      const { data } = await axios({
        baseURL: "http://localhost:3000/v1/driver/ride-offer",
        method: "get",
        data: myOffer,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMyOffer(data.data);
    } catch (error) {
      console.log(error.response.message);
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

  const handleEdit = (id) => {
    console.log(`Edit id ${id}`)
  }
  return (
    <DriversNavbar>
      <h1 style={{ textAlign: "center" }}>My offer</h1>
      <div className="my-offer-container">
        <div className="offer-flex-container">
          {myOffer.length === 0 ? (
            <h1 style={{ margin: "auto" }}>You Have No ride offer</h1>
          ) : (
            myOffer.map((offer) => {
              return (
                <div className="offer-flex-item" key={offer.id}>
                  <div className="offer_content">
                    <span className="offer-info_1">Location</span>:{" "}
                    <span className="offer-info">{offer.location}</span>
                  </div>
                  <div className="offer_content">
                    <span className="offer-info_1">Destination</span>:{" "}
                    <span className="offer-info">{offer.destination}</span>
                  </div>
                  <div className="offer_content">
                    <span className="offer-info_1">Price</span>:{" "}
                    <span className="offer-info">{offer.price}</span>
                  </div>
                  <div className="offer_content offer-actions">
                    <button
                      className="offer-edit-action"
                      onClick={() => handleEdit(offer.id)}>
                      Edit
                    </button>
                    <button
                      className="offer-delete-action"
                      onClick={() => handleDelete(offer.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </DriversNavbar>
  );
};
// onClick={() => handleDelete(offer.id)}
// const mapStateToProps =(state) =>{
//   return {
//     offer: state.offer
//   }
// }
//export default connect(mapStateToProps)(MyOffer);
export default MyOffer;
