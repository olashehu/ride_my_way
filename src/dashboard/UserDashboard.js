import React from 'react'
import Sidebar from './Sidebar'
import './UserDashboard.css'
//import FromTo from './From_To'

const UserDashboard = () => {
    return (
        <div>
            <Sidebar />
            <div class="contents">
                <div className = 'sidebar-img'></div>
                {/* <FromTo /> */}
                {/* <div id = 'sidebar-text'>
                   <form className="form-inline" action="">
                     <label for="from">From:</label>
                     <input type="text" id="from" placeholder="From" name="text"/>
                     <label for="to">To:</label>
                     <input type="text" id="to" placeholder="To" name="text"/>
                     
                     <button type="submit">Submit</button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default UserDashboard
