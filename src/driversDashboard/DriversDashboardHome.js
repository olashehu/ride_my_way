import React, { useState } from 'react'
import Map from '../driversPages/Map'
//import DritopNav from './DritopNav'
import './DriversDashboardHome.css'
import DriversNavbar from './DriversNavbar'
//import Smallsidebar from './Smallsidebar'


const DriversDashboardHome = () => {
    const [togle, setTogle] = useState(150)
    const [reject, setReject] = useState(0)
    
    const togleFunc = ()=>{
        setTogle(togle + 1)
    }

    const decline = () => {
        setReject(prev => prev + 1)
    }
    return (
        <DriversNavbar>    
            <div className='content'>
             {/* {toggle ? <DriversNavbar toggleMe={toggle}/> : <Smallsidebar toggle={toggle}/>} */}
                 <div>
                     <div >
               <h1>Welcome to Drivers dashboard</h1>
               <div className = "dcontainer">
                   <div className="flex-child">
                      <p  style={{color:'white'}}>{togle}</p>
                      <h4 style={{textAlign: 'center'}}>Accepted Reqeust</h4>
                   </div>
                   <div className="flex-child">
                      <p  style={{color:'white'}}>{reject}</p>
                      <h4 style={{textAlign: 'center'}}>Reject Request</h4>
                   </div>
                   <div className="flex-child">
                       <p style={{color:'white'}}>50</p>
                       <h4 style={{textAlign: 'center'}}>Likes</h4>
                   </div>
                   <div className="flex-child">
                        <p  style={{color:'white'}}>50</p>
                       <h4 style={{textAlign: 'center'}}>Rate</h4>
                   </div>
               </div>


               <div>
                   <Map click={togleFunc} change={decline}/>
               </div>
               
            </div> 

                 </div>
            </div>
        </DriversNavbar>
    )
}

export default DriversDashboardHome
