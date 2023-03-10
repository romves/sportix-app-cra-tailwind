import React from "react";

const DropdownItem = ({children, setData}) => {
  return (
    <button 
    onClick={(e) => setData({children})}
    className="flex hover:bg-primary-600 hover:text-white items-center w-[348px] h-[48px] px-5 rounded-md">
      <h4>{children}</h4>
    </button>
  );
};

export default DropdownItem;
