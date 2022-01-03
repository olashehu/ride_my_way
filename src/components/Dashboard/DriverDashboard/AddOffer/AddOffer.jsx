

import DriversNavbar from "../DriverDashboardNavigation/Secondary/DriversNavbar";
import Button from "../../../../Utility/Button/Button";
import Input from "../../../../Utility/TextInput/Input";

const AddOffer = ({handleChange, handleSubmit, data}) => {
  return (
    <DriversNavbar>
      <div className="login-wrapper">
        <h1 className="login-header-wrapper">Add your offer</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="login-input-wrapper">
            <Input
              type="text"
              name="location"
              id="location"
              htmlFor="location"
              placeholder="Location"
              required
              onChange={handleChange}
              value={data.location}
            />
          </div>
          <div className="login-input-wrapper">
            <Input
              type="text"
              name="destination"
              id="destination"
              htmlFor="destination"
              placeholder="Destination"
              required
              onChange={handleChange}
              value={data.destination}
            />
          </div>
          <div className="login-input-wrapper">
            <Input
              type="number"
              name="price"
              id="price"
              htmlFor="price"
              placeholder="Price"
              required
              onChange={handleChange}
              value={data.price}
            />
          </div>
          <Button type="submit" buttonText="Add offer" className="login-button-wrapper" />
        </form>
      </div>
    </DriversNavbar>
  );
};
export default AddOffer;
