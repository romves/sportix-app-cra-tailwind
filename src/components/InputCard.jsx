import React from "react";

const InputCard = ({ children }) => {
  return (
    <>
      <div className="flex justify-center w-[500px] h-[600px] mx-4 bg-white rounded-2xl shadow-lg">
        <div className="w-[400px] py-6 mx-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default InputCard;
