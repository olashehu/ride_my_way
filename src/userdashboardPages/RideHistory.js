import React from 'react'
import Sidebar from '../dashboard/Sidebar'
import './RideHistory.css'
import '../dashboard/Sidebar.css'

const RideHistory = () => {
    return (
        
        <div>
            <Sidebar />
            <div className = 'ride-history'>
                <h2>Hello, Welcome to the RMW</h2>
            </div>
        </div>
    )
}

export default RideHistory
