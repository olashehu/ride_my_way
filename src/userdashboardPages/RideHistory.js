import React from 'react'
import './RideHistory.css'
import {AiFillCar} from 'react-icons/ai'
import UsersSidebarNav from '../newdashboardUser/usersNavigationFolder/UsersSidebarNav'

const user = [
    {
        from: 'Lamina Lawal Isolo Lagos',
        to: 'Victorial Island Lagos',
        date: '09/04/2001',
        time: '20:10',
        car_name: 'Toyota Camry'
    },
    {
        from: 'Lamina Lawal Isolo Lagos',
        to: 'Victorial Island Lagos',
        date: '09/04/2001',
        time: '20:10',
        car_name: 'Toyota Camry'
    }
]

const History = ({date, time, pic, car_name, from, to}) => {
    return(
        <div className = 'par'>
            <div>{from}</div>
            <div>{to}</div>
            <div>{date} at {time}</div>
            <div>{car_name}</div>
            <div><AiFillCar/></div>
        </div>
    )
}

const RideHistory = () => {
    return (
        <UsersSidebarNav>
            <h1 style = {{textAlign: 'center'}}>My History</h1>
            <div className="testing">
                {user.map((users, index) => {
                    return <History {...users} key = {index} />
                })}
            </div>
        </UsersSidebarNav>
    )
}

export default RideHistory
