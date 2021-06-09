import React from 'react'
import './RideOffer.css'
import '../dashboard/Sidebar.css'
import {Link} from 'react-router-dom'
import UsersSidebarNav from '../newdashboardUser/usersNavigationFolder/UsersSidebarNav'

const drivers = [
    {
        car: 'https://images.unsplash.com/photo-1572739524530-5e9d4df3112b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'John',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobile: '4465321904',
        contact: 'Order Now',
        location: 'Surulere - Costain',
        fare: 500
    },
    {
        car: 'https://images.unsplash.com/photo-1605515290650-163dc018d4d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
        name: 'Chukwudi',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobile: '+44-45678098',
        contact: 'Order Now',
        location: 'Isolo - Ikeja',
        fare: 900
    },
    {
        car: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Michael',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobile: '09055555555',
        contact: 'Order Now',
        location: 'Oshodi - Cms',
        fare: 1000
    },
    {
        car: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Michael',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobile: '09055555555',
        contact: 'Order Now',
        location: 'Oshodi - Cms',
        fare: 1000
    },
    {
        car: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Michael',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobile: '09055555555',
        contact: 'Order Now',
        location: 'Oshodi - Cms',
        fare: 1000
    },
]





const Details = ({name, location, fare, contact, car}) => {
    return (
        <section className="ride_details">
            <img src={car} alt="" />
            <h1> Name:  {name}</h1>
            <h4>Destination:  {location}</h4>
            <h4>Price:  {fare}</h4>
            <Link to = '/offer' ><button className = 'order__now'>{contact}</button></Link>
        </section>
    )
}





const RideOffer = () => {
    return (
        <UsersSidebarNav>
            <div><h2 style= {{textAlign: 'center'}}>User Dashboard</h2></div>
            <div className="car_list">
                {drivers.map((cars, index) => {
                    return <Details {...cars} key = {index}/>
                })}
            </div>
        </UsersSidebarNav>
    )
}

// const Details = (props) => {
//     return (
//         <div className = 'details-container'>
//             <div className='details-container-child'>
//                 <img src={props.car} alt="" style={{width:'95%', height:'8%', textAlign: 'center'}}/>
//             </div>
//             <div className='details-container-child2'>
//                 <div><span>Name:</span> {props.name} {props.age} years old.</div>
//                 <div>{props.exp} in driving</div>
//                 <div>Car Name: <span>{props.carName}</span>   Number: <span>{props.carPlate}</span></div>
//                 <div>Location: <span>{props.location}</span> <span>Price:</span><span>{props.fare}</span></div>
//                 <div>Phone Number: <span>{props.mobile}</span></div>
//                 <Link to = '/destination' className='link_destination'><button className="button-contact">{props.contact}</button></Link>
//             </div>

//         </div>
//     )
// }

// const RideOffer = () =>{
//     return (
//         <UsersSidebarNav>
//            <div className="driver-container">
//                {drivers.map((items, index) => {
//                    const {car, carName, name, age, mobile, location, fare, exp, carPlate, contact} = items
//                    return   <Details
//                              key={index}
//                              car={car}
//                              carName={carName}
//                              name={name}
//                              age={age}
//                              mobile={mobile}
//                              location={location}
//                              fare={fare}
//                              exp={exp}
//                              carPlate={carPlate}
//                              contact={contact}
//                            />
//                })}
//            </div>
//         </UsersSidebarNav>
//     )
// }
export default RideOffer