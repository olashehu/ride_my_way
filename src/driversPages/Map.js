import React from 'react'
import './Map.css';

const Map = ({click, change}) => {
    return (
        <div className = "driver-map">
            <div className="person_driver">
                <div className="gg sep"> 
                   <img src="./jonas.jpg" alt="" className='img_img'/><div className="d-name">Name: Emeka</div>
                </div>
                <div className="ty sep">
                     <button className="accept" onClick={click}>Accept</button>
                    <button className="reject" onClick={change}>Reject</button>
                </div>
            </div>
        </div>
    )
}

export default Map
