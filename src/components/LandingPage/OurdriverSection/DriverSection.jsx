/** @format */

import cars from "../../../staticData/landingPage/ourdriverData";
import './DriverSection.css';

const CarListing = () => {
  return (
    <div id="listing">
      <div className="show-driver-container">
        <div className="show-driver-section">
          <h1 className="show-driver-header">We Hire Best Drivers In The World</h1>
          <div className="underline"></div>
          <p className="card-guide show-driver-para">Your Safety Is Our Periority.</p>
        </div>
      </div>
      <div className="flex-car">
        {cars.map((car) => {
          const { id, image } = car;
          return <Cars key={id} image={image} />;
        })}
      </div>
    </div>
  );
};


const Cars = (props) => {
  return (
    <article className="single-tour">
      <img src={props.image} alt="car" />
      <footer>
        <hr></hr>
        <p className="show-driver-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum,
          voluptatem quibusdam.
        </p>
      </footer>
    </article>
  );
};

export default CarListing;


