import React from "react";

const InputField = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-3 mb-1 rounded-md border border-black text-black bg-orange-50 focus:ring-orange-600 focus:border-orange-600 accent-orange-600"
    />
  );
};

export default InputField;
