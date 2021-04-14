import React from 'react'
import './RideOffer.css'
import Sidebar from '../dashboard/Sidebar'
import '../dashboard/Sidebar.css'
import {Link} from 'react-router-dom'

const drivers = [
    {
        pic: 'https://images.unsplash.com/photo-1612345642327-e79b84fd94f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'John',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobileNo: 4465321904,
        contact: 'contact'
    },
    {
        pic: 'https://images.unsplash.com/photo-1612345642327-e79b84fd94f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'John',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobileNo: 4465321904,
        contact: 'contact'
    },
    {
        pic: 'https://images.unsplash.com/photo-1612345642327-e79b84fd94f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'John',
        age: 32,
        carName: 'Toyota',
        exp: '5 years of exprience',
        carPlate: 'AFR103A4',
        mobileNo: 4465321904,
        contact: 'contact'
    },
]




const RideOffer = () => {
    return (
        <div>
            <Sidebar/>
            <div className="driver-component">
                {drivers.map((names, index) => {
                    const {pic, name, age, carName, exp, carPlate, mobileNo, contact} = names
                    return <Details
                    pic = {pic}
                    name={name}
                    age={age}
                    carName={carName}
                    exp={exp}
                    carPlate={carPlate}
                    mobileNo = {mobileNo}
                    contact={contact}
                    key={index}/>
                })}
            </div>
        </div>
    )
}

export default RideOffer



const Details = (props) => {
    return (
        <div className = 'details'>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={props.pic} alt="" style ={{width: '100%'}}/>
                        <div className="container">
                            <h2>Name: {props.name} {props.age} years old.</h2>
                            <p className = "title">{props.carName}, NO: {props.carPlate}</p>
                            <p>Years of exprience: {props.exp} in driving</p>
                            <p>Mobile: {props.mobileNo}</p>
                            <Link to = '/destination'><p><button className="button">{props.contact}</button></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




















