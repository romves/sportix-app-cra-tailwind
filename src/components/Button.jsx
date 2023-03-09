import React from "react";

const Button = ({ children, type, width }) => {
  return (
    <button type={type} className={`text-center bg-primary-500 w-[200px] text-white py-2 my-4 rounded-xl hover:bg-primary-200 hover:text-black`}>
      {children}
    </button>
  );
};

export default Button;
