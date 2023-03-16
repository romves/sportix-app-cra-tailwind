import React, { useState } from "react";
import Calendar from "react-calendar"

function Salendar() {


  return (
    <div>
    </div>
  );
}
/*   const daysInMonth = 31;
  const dates = Array.from({ length: daysInMonth + 4 }, (_, i) => i + 1);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const handleSelect = () => {};
  return (
    <div className="grid grid-cols-7 w-[380px] beranda-lg-norm">
      {weekdays.map((day, index) => (
        <div
          key={index}
          className={`flex items-center justify-center mr-2 ${
            day === "Sun" ? "text-red" : "text-black"
          }`}
        >
          {day}
        </div>
      ))}
      {dates.map((date, i) => (
        <div
          key={i}
          className={`flex text-center justify-center items-center hover:bg-neutral-100 shadow-md mb-[10px] mr-[2px] h-12 w-12 rounded-lg ${
            date === 1 ||
            date === 8 ||
            date === 15 ||
            date === 22 ||
            date === 29
              ? "text-red"
              : "text-black"
          }`}
        >
          <button className="w-12 h-12 rounded-lg">
            {date <= daysInMonth ? date : date - daysInMonth}
          </button>
        </div>
      ))}
    </div>
  ); */

export default Salendar;
