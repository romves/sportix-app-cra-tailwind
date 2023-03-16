import React from "react";

const ListWaktu = () => {

  return (
    <div className="grid grid-cols-6 w-[600px] beranda-lg-norm">
      {Array.from({ length: 18 }, (_, i) => i + 7).map((num) => (
        <button className="border-2 border-neutral-200 rounded-lg mr-2 mb-4" key={num}>{num < 10 ? "0" + num : num}.00</button>
      ))}
    </div>
  );
};

export default ListWaktu;
