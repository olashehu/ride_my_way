import React from 'react'
import './DritopNav.css'
import './DriversNavbar.css'
//import DriversNavbar from './DriversNavbar'
//import Smallsidebar from './Smallsidebar'

const DritopNav = (props) => {
//    const [change, setChange] = useState(true)
//    const toggle = ()=>{
//        setChange(!change)
//    }
    return (
        <div>
            {/* Header Nav Start */}
            <header className = "dri-top-nav">
               <div className="top-navigation">
                   <h2 className= 'dd'>RMW</h2>
                   <button className='btn-btn' onClick={props.toggle}><i class="fas fa-bars"></i></button>
               </div>
               
            </header>
            {/* Header Nav End */} 
        </div>
        
    )
}

export default DritopNav
