'use client';

import { useState } from 'react';

type RadioSelectorProps = {
  options: string[];
  onChange?: (selectedIndex: number) => void;
  containerWidth?: number; // Default: 500px
  buttonWidth?: number; // Optional: width per button
};

export default function RadioSelector({
  options,
  onChange,
  containerWidth = 500,
  buttonWidth,
}: RadioSelectorProps) {
  const [selected, setSelected] = useState(0);
  const optionCount = options.length;

  const handleChange = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  return (
    <div
      className="relative flex border-2 border-white rounded-lg bg-[#212121] text-white overflow-hidden font-semibold text-sm"
      style={{
        width: buttonWidth ? `${buttonWidth * optionCount}px` : `${containerWidth}px`,
      }}
    >
      {options.map((option, index) => (
        <label
          key={index}
          className="flex justify-center items-center cursor-pointer z-10"
          style={{
            width: buttonWidth ? `${buttonWidth}px` : `calc(100% / ${optionCount})`,
            padding: '12px',
          }}
        >
          <input
            type="radio"
            name="value-radio"
            value={`value-${index}`}
            checked={selected === index}
            onChange={() => handleChange(index)}
            className="hidden"
          />
          <span>{option}</span>
        </label>
      ))}

      <span
        className="absolute top-0 left-0 h-full bg-[#f18a10] transition-transform duration-150 ease-in-out z-0"
        style={{
          width: buttonWidth ? `${buttonWidth}px` : `calc(100% / ${optionCount})`,
          transform: `translateX(${selected * (buttonWidth ? buttonWidth : 100)}%)`,
        }}
      />
    </div>
  );
}