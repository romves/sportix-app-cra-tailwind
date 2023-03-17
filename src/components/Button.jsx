import React from "react";

const Button = ({ children, type, width, onClick, className}) => {
  return (
    <button 
    type={type} 
    onClick={onClick}
    className={`flex text-center body-md-norm bg-primary-500 w-[${width}] h-[40px] text-white py-2 rounded-xl hover:bg-primary-200 hover:text-black items-center justify-center ${className}`}>
      {children}
    </button>
  );
};

export default Button;
