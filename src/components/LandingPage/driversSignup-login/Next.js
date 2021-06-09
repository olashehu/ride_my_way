import React from 'react'
import {Link} from 'react-router-dom'
import NavigationBar from '../NavigationBar'
import '../driversSignup-login/DriversSignup.css'

const Next = () => {
    return (
        <>
           <NavigationBar/>
           <div className="register-car_container">
               <h1 style = {{textAlign: 'center'}}>Vehicle details</h1>
               <form action="" className = 'vehicle-detals__form'>

                   <div className="vehicle-details_container_div">
                       <label htmlFor="manufacturer" className = 'vehicle-label'>Vehicle manufacturer</label>
                       <select name="" id="manufacturer">
                           <option value=""></option>
                           <option value="red">red</option>
                           <option value="white">white</option>
                           <option value="blue">blue</option>
                           <option value="gold">gold</option>
                       </select>
                   </div>

                   <div className="vehicle-details_container_div">
                       <label htmlFor="vehicle-year" className = 'vehicle-label'>Vehicle year</label>
                       <select name="" id="manufacturer">
                           <option value=""></option>
                           <option value="red">2000</option>
                           <option value="white">2001</option>
                           <option value="blue">2002</option>
                           <option value="gold">2003</option>
                       </select>
                   </div>

                   <div className="vehicle-details_container_div">
                       <label htmlFor="Licence-plate" className = 'vehicle-label'>Licence plate</label>
                       <input type="text" name="Licence-plate" id="" placeholder = '717TTp'/>
                   </div>

                   <div className="vehicle-details_container_div">
                       <label htmlFor="vehicle-color" className = 'vehicle-label'>Vehicle color</label>
                       <select name="vehicle-color" id="">
                           <option value=""></option>
                           <option value="red">red</option>
                           <option value="black">black</option>
                           <option value="blue">blue</option>
                           <option value="gold">gold</option>
                       </select>
                   </div>
                   <Link><button className = 'register-vehicle_btn'>Register</button></Link>
               </form>
           </div>
        </>
    )
}

export default Next
