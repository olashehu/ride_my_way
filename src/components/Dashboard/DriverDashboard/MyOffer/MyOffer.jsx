

import React, { useState } from "react";
import Modal from "react-modal";

import EditOffer from "../EditOffer/EditOffer";

const customStyles = {
  content: {
    top: "0%",
    left: "0%",
    width: '100%',
    height: '100%',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transform: "translate(-0%, -0%)",
    zIndex: '1000',
  },
};

const MyOffer = ({offerId, location, destination, price, handleDelete, }) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="offer-wrapper">
      <div className="offer-card-wrapper">
        <h3 className="card-content-left">Location</h3>
        <h3 className="card-content-right">{location}</h3>
      </div>

      <div className="offer-card-wrapper">
        <h3 className="card-content-left">Destination</h3>
        <h3 className="card-content-right">{destination}</h3>
      </div>

      <div className="offer-card-wrapper" style={{border:'none'}}>
        <h3 className="card-content-left">Price</h3>
        <h3 className="card-content-right">{price}</h3>
      </div>
      <div className="offer-card-wrapper card-actions">
        <button
          className="card-delete"
          onClick={() => handleDelete(offerId)}>
          Delete
        </button>
        <button className="card-edit" onClick={openModal}>
          Edit
        </button>
      </div>
      <Modal isOpen = {modalIsOpen } style={customStyles}>
        <EditOffer
         location={location}
         destination={destination}
         price={price}
         closeModal= {closeModal}
         id={offerId}
        />
      </Modal>
    </div>
  );
};
export default MyOffer;
