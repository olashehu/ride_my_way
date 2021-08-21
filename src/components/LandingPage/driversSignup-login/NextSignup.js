import React from 'react';
import '../driversSignup-login/DriversSignup.css';
//import { driverSignupError } from '../../../reducers/driverSlice';

const NextSignup = ({data, handleChange, handleSubmit}) => {
    
    return (
        <>
           <div className="register-car_container">
               <h1 style = {{textAlign: 'center'}}>Vehicle details</h1>
               <form action="" className = 'vehicle-detals__form'>
                   <div className="pilot-sign">
                       <label htmlFor="manufacturer" className = 'label-text-pilot'>Car Model</label>
                       <input type="text" name="carModel" onChange={handleChange} value={data.carModel}/>
                   </div>

                   <div className="pilot-sign">
                       <label htmlFor="vehicle-year" className = 'label-text-pilot'>Model year</label>
                       <input type="number" name='modelYear' min="2005" max="2021" onChange={handleChange} value={data.modelYear}/>
                   </div>

                   <div className="pilot-sign">
                       <label htmlFor="Licence-plate" className = 'label-text-pilot'>Licence plate</label>
                       <input type="text" name="licencePlate" id="" placeholder = '717TTp' onChange={handleChange} value={data.licencePlate}/>
                   </div>

                   {/* <div className="vehicle-details_container_div">
                       <label htmlFor="car-image" className = 'vehicle-label'>Car Image</label>
                       <input type="file" name="car-image" id="" accept=".jpg, .jpeg, .png"/>
                   </div> */}
                  <button className = 'register-vehicle_btn' onClick={handleSubmit}>Signup</button>
               </form>
           </div>
        </>
    )
}

export default NextSignup
