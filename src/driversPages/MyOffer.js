import React, { useState } from "react";
import Modal from "react-modal";
import EditOffer from "./EditOffer";
import "./MyOffer.css";

const customStyles = {
  content: {
    top: "10%",
    left: "4%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transform: "translate(-0%, -0%)",
  },
};

const MyOffer = ({offerId, location, destination, price, handleDelete, openModal }) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="card-container">
      <div className="card-item">
        <h3 className="card-content-1">Location</h3>
        <h3 className="card-content_2">{location}</h3>
      </div>

      <div className="card-item">
        <h3 className="card-content-1">Destination</h3>
        <h3 className="card-content_2">{destination}</h3>
      </div>

      <div className="card-item">
        <h3 className="card-content-1">Price</h3>
        <h3 className="card-content_2">{price}</h3>
      </div>
      <div className="card-item card-actions">
        <button
          className="delete-card-offer-action"
          onClick={() => handleDelete(offerId)}>
          Delete
        </button>
        <button className="edit-card-offer-action" onClick={openModal}>
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
