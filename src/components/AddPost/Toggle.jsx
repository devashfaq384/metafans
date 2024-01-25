import React, { useState } from 'react';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <label htmlFor="toggle" className="relative cursor-pointer">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <div className={`w-16 h-8 bg-gray-400 rounded-full p-1 ${isChecked ? 'bg-violet-700' : ''}`}>
          <div className={`w-6 h-6 bg-white rounded-full transform ${isChecked ? 'translate-x-full' : ''}`} />
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
