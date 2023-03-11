import React from "react";

const InputField = ({ type, name, placeholder, onChange, width, value, className}) => {
  return (
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`p-3 mb-1 rounded-md border w-[${width}] border-black text-black bg-primary-50 focus:ring-primary-600 focus:border-primary-600 accent-primary-600 ${className}`}
    />
  );
};

export default InputField;
