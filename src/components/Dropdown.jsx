import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = ({ array, setData, setNama}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = async (option) => {
    setSelectedOption(option.namaKategori||option.namaKota||option);
    setIsOpen((prev) => !prev);
    setData(option.id||option);
    setNama && setNama(option.namaKategori||option.namaKota)
  };

  return (
    <div className="py-1 text-black">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex px-[20px] justify-between items-center py-[12px] w-[430px] h-[50px] bg-primary-50 border border-black rounded-lg"
        type="button"
      >
        {selectedOption}
        {!isOpen ? <BsChevronDown /> : <BsChevronUp />}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col px-5 items-center justify-between w-[430px] min-h-[50px] mt-[3px] bg-primary-50 border border-black rounded-lg">
          {array?.map((option,i) => {
            return (
              <button
                className="flex hover:bg-primary-200 items-center w-[428px] h-[48px] px-5 rounded-md"
                onClick={() => handleSelectOption(option)}
                key={option.id||i}
                type="button"
              >
                <h4>{option.namaKategori||option.namaKota||option}</h4>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
