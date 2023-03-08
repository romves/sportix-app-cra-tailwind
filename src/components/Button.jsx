import React from "react";

const Button = ({ children, type }) => {
  return (
    <button type={type} className=" text-center bg-primary-600 w-[300px] text-gray-100 py-3 my-4 rounded-xl hover:bg-orange-200 hover:text-black">
      {children}
    </button>
  );
};

export default Button;
