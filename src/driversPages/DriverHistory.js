import React from 'react'
//import DritopNav from '../driversDashboard/DritopNav'
import DriversNavbar from '../driversDashboard/DriversNavbar'
import './DriverHistory.css'

const DriverHistory = () => {
    return (
            <DriversNavbar>
               <div className="driver_setiing_page">
                    <h1 className = 'header_history'>TRIP HISTORY</h1>

                    <div className="trip-history-details-drivers">
                        <div className="first___child-details same" style={{color:'green'}}>Pickup Location <span  className = 'column-span'>:</span></div>
                        <div className="second__child__details same">15 Allen Avenue Ikeja Lagos</div>
                    </div>

                    <div className="trip-history-details-drivers">
                        <div className="first___child-details same" style={{color:'red'}}>Drop Location <span  className = 'column-span'>:</span></div>
                        <div className="second__child__details same">25 Adeniyi Johnson Ikeja Lagos</div>
                    </div>

                    <div className="trip-history-details-drivers">
                        <div className="first___child-details same">Date <span  className = 'column-span'>:</span></div>
                        <div className="second__child__details same">15/04/2021</div>
                    </div>

                    <div className="trip-history-details-drivers">
                        <div className="first___child-details same">Status <span  className = 'column-span'>:</span></div>
                        <div className="second__child__details same">Trip End</div>
                    </div>

                    <div className="trip-history-details-drivers color">
                        <div className="first___child-details same">Customer Name <span  className = 'column-span'>:</span></div>
                        <div className="second__child__details same">Pauliski  <span><img src="/olashehu.jpg" alt="" className='img-customer'/></span></div>
                    </div>

                    <div className="trip-history-details-drivers color">
                        <div className="first___child-details same">Phone <span className = 'column-span'>:</span></div>
                        <div className="second__child__details same">090888888888</div>
                    </div>
               </div>
            </DriversNavbar>
           
    
    )
}

export default DriverHistory
