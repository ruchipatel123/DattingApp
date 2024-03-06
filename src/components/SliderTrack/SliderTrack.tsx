import { useState } from 'react';

const SliderTrack = ({ leftLabel, rightLabel }) => {
  const [value, setValue] = useState(50); // Default slider value

  return (
    <>
      <div className="w-full border-b  border-blue-400 py-2 ">
        <div className="flex flex-wrap">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="range bg-custom-gradient slider-thumb slider h-2 w-full  rounded-lg"
            // style={{ backgroundSize: `${value}% 100%` }} // This adjusts the fill color based on the value
          />
          <div className="mt-1 flex w-full justify-between">
            <label className="text-[10px] font-light">{leftLabel}</label> {/* Left label */}
            <label className="text-[10px] font-light">{rightLabel}</label> {/* Right label */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderTrack;
