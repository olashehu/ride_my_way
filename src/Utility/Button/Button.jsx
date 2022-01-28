

import PropTypes from "prop-types";

const Button = ({ type, buttonText, ...props }) => {
  return (
    <button type={type} {...props}>
      {buttonText}
    </button>
  );
};

Button.PropTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
