//import DriversNavbar from '../driversDashboard/DriversNavbar';
import axios from "axios";


const New = ({id, onUserCardName, onUserCardLocation, onUserCardDestination, onUserCardPrice, onUserCardPhone}) => {

  const joinOffer = async (id) => {
    console.log(`join ride ${id}`);
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const res = await  axios({
        method: 'post',
        baseURL: `http://localhost:3000/v1/user/join-ride/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
    } catch (error) {
      console.log(error.response);
    }
  }
    return (
      <>
        <>
          <div className="user__join-ride-flex-container">
            <div className="first__ join-ride-flex-item">
               <img src="./avatar.png" alt="" className="driver-image" />:<span className="im">John Smith</span>
            </div>
            <div className="second__ join-ride-flex-item">
              <span className="in">Location</span>:<span className="im">{onUserCardLocation}</span>
            </div>
            <div className="third__ join-ride-flex-item">
              <span className="in">Destination</span>:<span className="im">{onUserCardDestination}</span>
            </div>
            <div className="fourth__ join-ride-flex-item">
              <span className="in">Price</span>:<span className="im">{onUserCardPrice}</span>
            </div>
            <div className="fifth__ join-ride-flex-item">
              <span className="in">Contact</span>:<span className="im">08012345678</span>
            </div>
            <div className="sixth__ jon-ride-flex-item">
              <button type="submit" onClick={() => joinOffer(id)}>Join ride</button>
            </div>
          </div>
        </>
      </>
    );
}

export default New; 