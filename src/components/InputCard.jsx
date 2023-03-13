import React from "react";

const InputCard = ({ children, className, width, bgColor, text}) => {
  return (
    <>
      <div className={`flex mx-4 bg-${bgColor? bgColor + ' text-white' :'white'} rounded-2xl shadow-md ${className}`}>
        <div className={` py-6 mx-8 ${width}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default InputCard;
