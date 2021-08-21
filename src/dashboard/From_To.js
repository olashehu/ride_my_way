// import React, {useEffect, useState} from "react";
// import { Link } from "react-router-dom";
// import { userNotification } from "./array";
// import {navigate} from '@reach/router'




// export const FromTo = () => {
  
//     const [trip, setTrip] = useState([]);
//     const defaultTrip = {from: '', to: ''};
//     const [movement, setMovement] = useState(defaultTrip)
//        const location = e => setMovement({from: e.target.value, to: movement.to})

//       const destination = (e)=>{
//         setMovement({from: movement.from, to: e.target.value})
//       }
      
//       const handleClick = (e)=>{
//         // e.preventDefault()
//         // userNotification.push(from, to)
//         setTrip(prev => [movement, ...prev])
//          console.log(trip)
//          setMovement(defaultTrip)
       
       
//        //navigate('/notification')
//       }

//       // When DOM loaded
//       useEffect(()=>{
//         const tripDetails = JSON.parse(localStorage.getItem('details')) || []
//         setTrip(tripDetails)
//       }, [])
//       // when trip is updated
//       useEffect(()=>{
//         localStorage.setItem('details', JSON.stringify(trip))
//       },[trip])
    

//   return (
//     <div>
//     <div className="container-login">
//       <div className="header">
//         <h3>Destination</h3>
//       </div>
//        <div
//         action=""
//         className="main-formss"

//       > 
//         <div className="form">
//           <label htmlFor="email" className="label-text">
//             From
//           </label>
//           <input
//             type="text"
//             required
//             name="from"
//             value={movement.from}
//             onChange={location}
//           />
     
//         </div>
//         <div className="form">
//           <label htmlFor="password" className="label-text">
//             To
//           </label>
//           <input
//             type="text"
//             required
//             name="to"
//             value={movement.to}
//             onChange={destination}
//           />
          
//         </div>

//         <button className="login-btn" onClick={handleClick}>Submit</button>  
//        </div>
//        <Link to = "/user-dashboard"><button className="login-btn-cancel" >Cancel</button></Link>    
//     </div>
//     </div>
//   );
// };
// export default FromTo;
