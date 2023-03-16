import React from "react";

const ListWaktu = ({ buka, tutup, setSelectedTime }) => {
  const handleTimeSelect = (jam) => {
  };
  return (
    <div className="grid grid-cols-6 w-[600px] beranda-lg-norm">
      {Array.from({ length: tutup }, (_, i) => i + buka).map((jam, i) => (
        <button
          className="border-2 border-neutral-200 hover:bg-neutral-100 rounded-lg mr-2 mb-4"
          onClick={() => handleTimeSelect(jam)}
          key={i}
        >
          {jam < 10 ? "0" + jam : jam}.00
        </button>
      ))}
    </div>
  );
};

export default ListWaktu;
