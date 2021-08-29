import React from 'react';
import DriversNavbar from '../driversDashboard/DriversNavbar';
import Accept_RejectOffer from './Accept_RejectOffer'

const RideRequest = () => {
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
                {userData.map((user, index) => {
                  return (
                    <Accept_RejectOffer 
                        key={index}
                        image={user.img}
                        name={user.name}
                        location={user.location}
                        destination={user.destination}
                    />
                        
                  )
                    
                })}
            </div>
        </DriversNavbar>
    )
}

export default RideRequest

const userData = [
    {
        id: 1,
        img: '/avartar.png',
        name: 'John Smith',
        location: 'Palm Avenue Mushin Lagos',
        destination: 'Brown bus stop Oshodi Lagos'
    },
    {
        id: 1,
        img: '/avartar.png',
        name: 'John Smith',
        location: 'Palm Avenue Mushin Lagos',
        destination: 'Brown bus stop Oshodi Lagos'
    },
    {
        id: 1,
        img: '/avartar.png',
        name: 'John Smith',
        location: 'Palm Avenue Mushin Lagos',
        destination: 'Brown bus stop Oshodi Lagos'
    },
    {
        id: 1,
        img: '/avartar.png',
        name: 'John Smith',
        location: 'Palm Avenue Mushin Lagos',
        destination: 'Brown bus stop Oshodi Lagos'
    }
]