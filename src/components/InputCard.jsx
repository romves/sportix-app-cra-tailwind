import React from "react";

const InputCard = ({ children }) => {
  return (
    <>
      <div className="flex justify-center w-[500px] h-[600px] mr-12 bg-white rounded-2xl shadow-lg">
        <div className="w-[400px] py-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default InputCard;
