/** @format */

import React from "react";

const TextInput = ({ type, name, required, placeholder, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TextInput;
