import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex px-[20px] justify-between items-center py-[12px] w-[350px] h-[50px] bg-primary-100 border border-black rounded-lg"
      >
        Halo
        {!isOpen ? <BsChevronDown /> : <BsChevronUp />}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col px-5 items-center justify-between w-[350px] min-h-[50px] mt-[3px] bg-primary-100 border border-black rounded-lg">
          <div className="flex hover:bg-primary-600 hover:text-white items-center w-[348px] h-[48px] px-5 rounded-md">
            <h4>Malang</h4>
          </div>
          <div className="flex hover:bg-primary-600 hover:text-white items-center w-[348px] h-[48px] px-5 rounded-md">
            <h4>Jakarta</h4>
          </div>
          <div className="flex hover:bg-primary-600 hover:text-white items-center w-[348px] h-[48px] px-5 rounded-md">
            <h4>Surabaya</h4>
          </div>
          <div className="flex hover:bg-primary-600 hover:text-white items-center w-[348px] h-[48px] px-5 rounded-md">
            <h4>Denpasar</h4>
          </div>    
        </div>
      )}
    </div>
  );
};

export default Dropdown;
