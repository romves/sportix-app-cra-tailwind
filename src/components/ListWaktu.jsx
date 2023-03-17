import React, { useState } from "react";

const ListWaktu = ({ buka, tutup, harga, setSelectedTime }) => {
  const [selectedTimes, setSelectedTimes] = useState([null]);

  const handleTimeSelect = (jam) => {
    const lastSelectedTime = selectedTimes[selectedTimes.length - 1];
    if (lastSelectedTime !== null && lastSelectedTime < jam) {
      // User selected a range of times, select all times within the range
      const newSelectedTimes = [];
      for (let i = lastSelectedTime; i <= jam; i++) {
        newSelectedTimes.push(i);
      }
      setSelectedTimes(newSelectedTimes);
    } else if (selectedTimes.includes(jam)) {
      // User unselected a previously selected time
      setSelectedTimes(selectedTimes.filter((time) => time !== jam));
    } else {
      // User selected a single time
      setSelectedTimes([...selectedTimes, jam]);
    }
  };
  console.log(selectedTimes);
  return (
    <div className="grid grid-cols-6 w-[600px] beranda-lg-norm">
      {Array.from({ length: tutup }, (_, i) => i + buka).map((jam, i) => (
        <button
          className={`border-2 border-neutral-200 hover:bg-neutral-100 rounded-lg mr-2 mb-4 ${
            selectedTimes.includes(jam)
              ? "bg-neutral-100"
              : "hover:bg-neutral-100"
          }`}
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
