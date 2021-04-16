import React from 'react'
import Sidebar from '../dashboard/Sidebar'
import './RideHistory.css'
import '../dashboard/Sidebar.css'
import { userNotification } from '../dashboard/array'


const user = [
    {
        pic: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'John',
        rideFare: 2000,
        mile: '200miles',
        time: '2hours'
    }
]




const RideHistory = () => {
    return (
        <div>
            <Sidebar/>
            <div className="driver-component">
                {user.map((names, index) => {
                    const {pic, name, rideFare, mile, time} = names
                    return <RidersHistory
                    pic = {pic}
                    name={name}
                    rideFare={rideFare}
                    mile={mile}
                    time={time}
                    key={index}/>
                })}
            </div>
        </div>
    )
}

export default RideHistory



const RidersHistory = (props) => {
    return (
        <div className = 'rider-history container'>
           <ul className="rider">
               <li>#</li>
             <li>name</li>
             <li>Ride Fare</li>
             <li>mile</li>  
             <li>RidingTime</li>
            </ul>
            <div className="main-riders">
                <img src={props.pic} alt=""/><span className= 'left'>{props.name}</span>
                <div>{props.rideFare}</div>
                <div>{props.mile}</div>
                <div>{props.time}</div>
            </div>
            {/* <div>{userNotification.from}</div> */}
        </div>
    )
}


