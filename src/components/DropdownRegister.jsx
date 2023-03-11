import React, { useEffect, useState } from "react";


const Dropdown = ({ list, width, setJenisKelamin, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lebar, setLebar] = useState("195px");
  const options = ["Perempuan", "Laki-laki"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectOption = (option) => {
    setJenisKelamin(() => {
      if (option === "Laki-laki") {
        return 1;
      } else if (option === "Perempuan") {
        return 2;
      }
    });
    setSelectedOption(option);
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setLebar(width)
  },[])

  return (
    <div className="mr-[10px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex px-[20px] justify-between items-center py-[12px] w-[210px] h-[50px] bg-primary-50 border border-black rounded-lg ${className}`}
        type="button"
      >
        {selectedOption}
        {/* {!isOpen ? <BsChevronDown /> : <BsChevronUp />} */}
      </button>
      {isOpen && (
        <div
          className={`absolute flex flex-col px-5 items-center justify-between w-[210px] min-h-[50px] mt-[3px] bg-primary-50 border border-black rounded-lg ${className}`}
        >
          {options.map((option) => (
            <button
              type="button"
              className={`flex hover:bg-primary-200 items-center w-[208px] h-[48px] px-5 rounded-md ${className}`}
              onClick={(e) => handleSelectOption(option)}
              key={option}
              value={selectedOption}
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
