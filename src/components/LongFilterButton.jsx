import React, { useState } from 'react'

const LongFilterButton = ({classname, array}) => {
    const [active, setActive] = useState(0);

    const list = ["Harga tertinggi", "Harga terendah"];
  
    return (
      <div className="w-[650px] rounded-xl">
        {list.map((item,index) => (
          <button key={index} id={item} className={`h-[35px] w-[280px] mr-2 px-6 text-start ${active === index ? 'bg-primary-600 text-white' : "bg-primary-200"} rounded-xl`}
          onClick={() => {setActive(index)}}>
            <p className="beranda-md-norm">{item}</p>
          </button>
        ))}
      </div>
    );
}

export default LongFilterButton