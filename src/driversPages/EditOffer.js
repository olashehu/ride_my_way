import axios from 'axios';
import React, { useState } from 'react'
import { offerUpdate } from "../reducers/offerSlice";
import './EditOffer.css';

const EditOffer = ({ location, destination, price, closeModal, id }) => {

  const [updateOffer, setUpdateOffer] = useState({
     location,
     destination,
     price
  })

  function handleChange(e) {
    setUpdateOffer({ ...updateOffer, [e.target.name]: e.target.value });
  }
  
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('driver-token'))
    try {
      const { data } = await axios({
        method: "put",
        baseURL: `http://localhost:3000/v1/driver/ride-offer/${id}`,
        data: updateOffer,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
       closeModal();
       //window.location.reload()
      dispatch(offerUpdate(data.data));
     
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <>
      <div className="edit-offer-container-modal">
        <h1>Update your Offer below</h1>
        <form action="" onSubmit={handleUpdate}>
          <div className="edit-offer-inputs-container">
            <label htmlFor="">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={updateOffer.location}
              onChange={handleChange}
            />
          </div>
          <div className="edit-offer-inputs-container">
            <label htmlFor="">Destination</label>
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={updateOffer.destination}
              onChange={handleChange}
            />
          </div>
          <div className="edit-offer-inputs-container">
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="price"
              value={updateOffer.price}
              onChange={handleChange}
            />
          </div>
          <div className="edit-offer-inputs-container update-action">
            <button className="update" onClick={(e)=>handleUpdate(e, id)}>
              Update
            </button>
            <button className="cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditOffer
