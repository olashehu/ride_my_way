import React from 'react'
import Sidebar from './Sidebar'
import './From_To.css'
import {Link} from 'react-router-dom'

const FromTo = () => {
    return (
        <div className = 'form-top'>
            <div className= 'contentss'>
                <div id="sidebar-text">
                   <form action="" className="form-inline">
                     <label htmlFor="from">From</label>
                     <input type="text" id="from" placeholder="From" name="text"/>
                     <label for="to">To:</label>
                     <input type="text" id="to" placeholder="To" name="text"/>
                     <Link to= 'rideoffer'><button type="submit">Submit</button></Link>
                     <Link to= 'userdashboard'><button type="submit">Back</button></Link>
                    </form>
                </div>
             </div>
        </div>
    )
}

export default FromTo
