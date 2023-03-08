import React from "react";

const InputField = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-3 mb-1 rounded-md border border-black text-black bg-primary-50 focus:ring-primary-600 focus:border-primary-600 accent-primary-600"
    />
  );
};

export default InputField;
