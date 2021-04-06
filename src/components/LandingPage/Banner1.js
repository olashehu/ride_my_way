import React from 'react'
import {Link} from "react-router-dom"
 const Banner1 = () => {
    return (
        <div >
            <div className="banner-img">
                <div className = "banner-text">
                    <h1 className="heading-primary-main"> Request For A Ride</h1>
                    <h2 className="heading-primary-main">To Any Destination Of<span style = {{textTransform: "uppercase", letterSpacing: '20px'}}> Choice</span></h2>
                    <Link to="/signup"><a href="signup" class="btn btn-white btn-animated" style={{color:"white", fontWeight:"bold"}}>Join Us Now</a> </Link>              
                </div>
            </div>
            
        </div>
    )
}
export default Banner1;