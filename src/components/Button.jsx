import React from "react";

const Button = ({ children, type, width}) => {
  return (
    <button type={type} className={`flex text-center body-md-norm bg-primary-500 w-[150px] h-[40px] text-white py-2 my-4 rounded-xl hover:bg-primary-200 hover:text-black items-center justify-center`}>
      {children}
    </button>
  );
};

export default Button;
