/** @format */

import PropTypes from "prop-types";

import Input from "../TextInput/Input";
import "./settings.css";

const Settings = (props) => {
  const { onSubmit, onChange, firstNameValue, lastNameValue } = props;
  return (
    <>
      <div className="settings-wrapper">
        <header className="header-wrapper">
          <h1>Edit your profile</h1>
          <h5>Only edit firstName and the lastName</h5>
        </header>
        <div className="settings-info-wrapper">
          <form action="" method="post" onSubmit={onSubmit}>
            <div className="input-info">
              <Input
                htmlFor="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                onChange={onChange}
                value={firstNameValue}
              />
            </div>

            <div className="input-info">
              <Input
                htmlFor="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                onChange={onChange}
                value={lastNameValue}
              />
            </div>
            
            <div className="setting-button-wrapper">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Settings.propTypes = {
  firstNameValue: PropTypes.string,
  lastNameValue: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Settings;
