
import { Link } from "react-router-dom";

import './HeroSection.css';

const HeroSection = () => {
  return (
    <div>
      <div className="banner-img">
        <div className="banner-text">
          <h1 className="heading-primary-main"> Request For Your Ride</h1>
          <h2 className="heading-primary-main">
            To Any Destination Of
            <span style={{ textTransform: "uppercase", letterSpacing: "12px" }}>
              {" "}
              Choice
            </span>
          </h2>
          <Link to="/driver/signup" className="btn btn-white btn-animated">
            Join us to drive
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
