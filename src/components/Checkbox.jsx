import React, { useState } from "react";

const Checkbox = ({setSetuju}) => {
  const [isChecked, setIsChecked] = useState('');
  const handleChange = (e) => {
    setIsChecked(e.target.checked)
    setSetuju(!isChecked)
    
  }
   return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
      className="m-1 mr-4 p-[10px] rounded-[4px] ring-2 ring-primary-600 ring-offset-0 border-0 text-primary-300 focus:ring-2 focus:ring-primary-600 focus:ring-offset-0"
    />
  );
};

export default Checkbox;
