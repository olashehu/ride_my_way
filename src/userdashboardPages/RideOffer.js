import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from "react-redux";
import { displayOffer } from "../reducers/offerSlice";
import axios from "axios";
import UsersSidebarNav from '../newdashboardUser/usersNavigationFolder/UsersSidebarNav';
import UserRide from './UserRide';
import "./UserRide.css";


const RideOffer = () => {
    const dispatch = useDispatch();
    const [userOffer, setUserOffer] = useState([]);

    const getOffer = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const { data } = await axios({
          baseURL: "http://localhost:3000/v1/driver/ride-offers",
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(displayOffer({ offersFromDatabase: data.data }));
        setUserOffer(data.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    useEffect(() => {
      getOffer();
    }, []);
   
    return (
      <UsersSidebarNav>
        <div className="user__join-ride-contaner">
          {userOffer.map((user_card, index) => {
            return (
              <UserRide
                id={user_card.offerId}
                onUserCardFirstname={user_card.firstName}
                onUserCardLastName={user_card.lastName}
                onUserCardName={user_card.name}
                onUserCardLocation={user_card.location}
                onUserCardDestination={user_card.destination}
                onUserCardPrice={user_card.price}
                onUserCardPhone={user_card.phone}
              />
            );
          })}
        </div>
      </UsersSidebarNav>
    );
}

const mapStateToProps = (state) => {
  return {
    offer: state.auth,
  };
};
export default connect(mapStateToProps)(RideOffer);