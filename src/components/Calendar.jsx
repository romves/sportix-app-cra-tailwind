import React from "react";

function Calendar() {
  const daysInMonth = 31;
  const dates = Array.from({ length: daysInMonth + 4 }, (_, i) => i + 1);
  const weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];
  return (
    <div className="grid grid-cols-7 w-[380px] beranda-lg-norm">
      {weekdays.map((day, index) => (
        <div key={index} className='flex items-center justify-center mr-2'>{day}</div>
      ))}
      {dates.map((date) => (
        <div
          key={date}
          className=" flex text-center justify-center items-center shadow-md mb-[10px] mr-[2px] h-12 w-12 rounded-lg"
        >
          <button className="w-12 h-12 ">
            {date <= daysInMonth ? date : date - daysInMonth}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Calendar;
