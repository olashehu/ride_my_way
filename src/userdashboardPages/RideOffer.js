import React from 'react';
import './RideOffer.css';
import {Link} from 'react-router-dom';
import UsersSidebarNav from '../newdashboardUser/usersNavigationFolder/UsersSidebarNav';

const drivers = [
    {
        car: 'https://images.unsplash.com/photo-1572739524530-5e9d4df3112b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'John',
        carPlate: 'AFR103A4',
        mobile: '4465321904',
        contact: 'Order Now',
        location: 'Surulere',
        destination: 'Apapa',
        fare: 500
    },
    {
        car: 'https://images.unsplash.com/photo-1605515290650-163dc018d4d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
        name: 'Chukwudi',
        carName: 'Toyota',
        carPlate: 'AFR103A4',
        mobile: '+44-45678098',
        contact: 'Order Now',
        location: 'Isolo',
        destination: 'Ikeja',
        fare: 600
    },
    {
        car: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Paul',
        carName: 'Toyota',
        carPlate: 'AFR103A4',
        mobile: '09055555555',
        contact: 'Order Now',
        location: 'Oshodi',
        destination: 'Ibadan',
        fare: 2000
    },
    {
        car: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Oluwafemi',
        carName: 'Toyota',
        carPlate: 'AFR103A4',
        mobile: '09055555555',
        contact: 'Order Now',
        location: 'Oshodi',
        destination: 'Ondo',
        fare: 3000
    },
    {
        car: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Michael',
        carName: 'Toyota',
        carPlate: 'AFR103A4',
        mobile: '09055555555',
        contact: 'Order Now',
        location: 'Ikeja',
        destination: 'Ajah',
        fare: 8000
    },
]

const Details = ({name, location, fare, contact, car, destination}) => {
    return (
        <section className="ride_details">
            <img src={car} alt="" />
            <h1> Name:  {name}</h1>
            <h4>Location:  {location}</h4>
            <h4>Destination: {destination} </h4>
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

export default RideOffer;
