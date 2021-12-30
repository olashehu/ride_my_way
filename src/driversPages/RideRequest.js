import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DriversNavbar from '../driversDashboard/DriversNavbar';
import Accept_RejectOffer from './Accept_RejectOffer';
import { displayHistory } from '../reducers/offerSlice';
import './Accept_RejectOffer.css'

const RideRequest = ({data}) => {
  const dispatch = useDispatch();
  const joinRide = useSelector(state => state.offer.getHistory);
  const [userJoinRide, setUseJoinRide] = useState(joinRide);


  const getJoinOffer = async () => {
    const token =JSON.parse(localStorage.getItem("driver-token"));
    try {
      const {data} = await axios({
        baseURL: "http://localhost:3000/v1/driver/ride-history",
        method: "get",
        headers: {
          Authorization: `Bearer, ${token}`
        }
      });
      setUseJoinRide(data.data)
      dispatch(displayHistory({ historyFromDatabase: data.data }));
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getJoinOffer()
  }, [])
  return (
    <DriversNavbar>
      <h1 style={{width: '80%', margin: '1% auto', textAlign:'center'}}>Ride request</h1>
      <div
        className='request-ride-container'
      >
        {userJoinRide.map((user, index) => {
          return (
            <Accept_RejectOffer
              key={user.historyId} 
              historyId={user.historyId}
              userId={user.userId}
              firstName={user.firstName}
              lastName={user.lastName}
              location={user.location}
              destination={user.destination}
              phone={user.phone}
              data={userJoinRide}
            />
                  
          )
              
        })}
      </div>
    </DriversNavbar>
  )
}
export default RideRequest;
