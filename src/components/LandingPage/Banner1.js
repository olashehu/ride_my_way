import {Link} from "react-router-dom";
 const Banner1 = () => {
    return (
        <div >
            <div className="banner-img">
                <div className = "banner-text">
                    <h1 className="heading-primary-main"> Request For Your Ride</h1>
                    <h2 className="heading-primary-main">To Any Destination Of<span style = {{textTransform: "uppercase", letterSpacing: '12px'}}> Choice</span></h2>
                    <a href="/driver/signup" className="btn btn-white btn-animated">Join us to drive</a>
                </div>
                
            </div>
            
        </div>
    )
}
export default Banner1;
