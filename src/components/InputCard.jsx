import React from "react";

const InputCard = ({ children, className, width }) => {
  return (
    <>
      <div className={`flex mx-4 bg-white rounded-2xl shadow-lg ${className}`}>
        <div className={` py-6 mx-8 ${width}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default InputCard;
