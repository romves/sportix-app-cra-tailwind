import React, { useState } from "react";

const FilterButton = () => {
  const [active, setActive] = useState(0);

  const list = ["Lapangan", "Coach", "Membership"];

  return (
    <div className="w-[600px] h-[75px] bg-primary-200 rounded-xl">
      {list.map((item,index) => (
        <button key={index} id={item} className={`h-[75px] w-[200px] ${active === index ? 'bg-primary-600 text-white' : "bg-primary-200"} rounded-xl`}
        onClick={() => {setActive(index)}}>
          <h4 className="h4-med">{item}</h4>
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
