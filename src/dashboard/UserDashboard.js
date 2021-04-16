import React from 'react'
import Sidebar from './Sidebar'
import './UserDashboard.css'
import Footer from '../components/LandingPage/Footer'
//import FromTo from './From_To'



const UserDashboard = () => {
  return (
      <div>
        <section className="contents">
        <Sidebar />
    <div className="google-map-code">
      <iframe
        style={{ width: "100%", height: "400px" }}
        title="maip"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15856.245073395567!2d3.34896815!3d6.51392965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1618503635655!5m2!1sen!2sng"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
    <Footer/>
    </section>
    </div>
  );
};
export default UserDashboard;
