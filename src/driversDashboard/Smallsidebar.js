import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import './Smallsidebar.css'

const Smallsidebar = (props) => {
    return ( 
        <div >
            <div className='smsidebar' style={{display: `${props.switchDisplay ? 'none' : ''}`}}>
                <GrFacebookOption className='fbicon'/>
            </div>
            
        </div>
     );
}
 
export default Smallsidebar;