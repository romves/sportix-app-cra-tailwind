import React from "react";

const Button = ({ children, type, width }) => {
  return (
    <button type={type} className={`text-center bg-primary-600 w-[${width}px] text-white py-3 my-4 rounded-xl hover:bg-primary-200 hover:text-black`}>
      {children}
    </button>
  );
};

export default Button;
