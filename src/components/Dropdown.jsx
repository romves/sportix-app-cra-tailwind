import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = ({ children, header }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Laki-laki", "Perempuan"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex px-[20px] justify-between items-center py-[12px] w-[350px] h-[50px] bg-primary-100 border border-black rounded-lg"
      >
        {selectedOption}
        {!isOpen ? <BsChevronDown /> : <BsChevronUp />}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col px-5 items-center justify-between w-[350px] min-h-[50px] mt-[3px] bg-primary-100 border border-black rounded-lg">
          {options.map((option) => (
            <button
              className="flex hover:bg-primary-600 hover:text-white items-center w-[348px] h-[48px] px-5 rounded-md"
              onClick={(e) => handleSelectOption(option)}
              key={option}
              value={option}
            >
              <h4>{option}</h4>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
