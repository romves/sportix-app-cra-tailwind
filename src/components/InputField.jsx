import React from "react";

const InputField = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="p-3 mb-1 rounded-md border border-black text-black bg-primary-50 focus:ring-primary-600 focus:border-primary-600 accent-primary-600"
    />
  );
};

export default InputField;
