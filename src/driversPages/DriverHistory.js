import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DriversNavbar from '../driversDashboard/DriversNavbar';
import { displayHistory } from '../reducers/offerSlice';
import '../tablecomponent/Table.css'

const DriverHistory = () => {
  const state = useSelector(state => state.offer);
  const dispatch = useDispatch();
  console.log(state);
  const [ driverHistory, setDriverHistory] = useState([]);

  const getHistoryData = async () => {
       try {
      const token = JSON.parse(localStorage.getItem("driver-token"));
      const { data } = await axios({
        baseURL: "http://localhost:3000/v1/user/ride-history",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(displayHistory({historyFromDatabase: data.data}));
      setDriverHistory(data.data);
      console.log(driverHistory)
     } catch (error) {
      console.log(error);
     }
    };

    useEffect(() => {
        getHistoryData();
    }, []);
  return (
    <DriversNavbar>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>User-id</th>
              <th>Date</th>
              <th>Location</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
                     
            {driverHistory.map((data, index) => {
              return (
                <tr>
                  <td data-label = "User-id">{data.userId}</td>
                  <td data-label = "Date">{data.createdAt}</td>
                  <td data-label = "Location">{data.location}</td>
                  <td data-label = "Destination">{data.destination}</td>
                  <td data-label = "Price">{data.price}</td>
                  <td data-label = "Status"><span className="text_open">{data.status}</span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </DriversNavbar>
  )
}



















// const DriverHistory = () => {
//     return (
//             <DriversNavbar>
//                <div className="driver_setiing_page">
//                     <h1 className = 'header_history'>TRIP HISTORY</h1>

//                     <div className="trip-history-details-drivers">
//                         <div className="first___child-details same" style={{color:'green'}}>Pickup Location <span  className = 'column-span'>:</span></div>
//                         <div className="second__child__details same">15 Allen Avenue Ikeja Lagos</div>
//                     </div>

//                     <div className="trip-history-details-drivers">
//                         <div className="first___child-details same" style={{color:'red'}}>Drop Location <span  className = 'column-span'>:</span></div>
//                         <div className="second__child__details same">25 Adeniyi Johnson Ikeja Lagos</div>
//                     </div>

//                     <div className="trip-history-details-drivers">
//                         <div className="first___child-details same">Date <span  className = 'column-span'>:</span></div>
//                         <div className="second__child__details same">15/04/2021</div>
//                     </div>

//                     <div className="trip-history-details-drivers">
//                         <div className="first___child-details same">Status <span  className = 'column-span'>:</span></div>
//                         <div className="second__child__details same">Trip End</div>
//                     </div>

//                     <div className="trip-history-details-drivers color">
//                         <div className="first___child-details same">Customer Name <span  className = 'column-span'>:</span></div>
//                         <div className="second__child__details same">Pauliski  <span><img src="/olashehu.jpg" alt="" className='img-customer'/></span></div>
//                     </div>

//                     <div className="trip-history-details-drivers color">
//                         <div className="first___child-details same">Phone <span className = 'column-span'>:</span></div>
//                         <div className="second__child__details same">090888888888</div>
//                     </div>
//                </div>
//             </DriversNavbar>
           
    
//     )
// }

export default DriverHistory
