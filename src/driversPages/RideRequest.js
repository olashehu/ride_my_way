import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DriversNavbar from '../driversDashboard/DriversNavbar';
import Accept_RejectOffer from './Accept_RejectOffer';
import { displayHistory } from '../reducers/offerSlice';

const RideRequest = () => {
    const dispatch = useDispatch();
    const joinRide = useSelector(state => state.offer.getHistory);
    console.log(joinRide);
    const [userJoinRide, setUseJoinRide] = useState(joinRide);

    const handleReject = async (id)=>{
        console.log(id)
        const newHistory = joinRide.filter(item => item.historyId !== id)
       confirm("Are you sure you want to reject this offer ")
       const status = {"status": "Rejected"}
       dispatch(displayHistory({ historyFromDatabase: newHistory }));
       try {
         await axios({
            baseURL: `http://localhost:3000/v1/driver-test/${id}`,
            method: "put",
            data: status,
         });  
       } catch (error) {
           console.log(error.response)
       }
      
    }

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
                style={{ 
                  width:'97%', 
                  marginLeft:'3%', 
                  display:'flex',
                  flexWrap:'wrap'
                }}
            >
                {joinRide.map((user, index) => {
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
                        handleReject={handleReject}
                    />
                        
                  )
                    
                })}
            </div>
        </DriversNavbar>
    )
}
export default RideRequest;
