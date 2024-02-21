import { RangeSlider } from 'next-range-slider';
import { useState } from 'react';

const RangeSliderBar = () => {
  const [low, setLow] = useState(18);
  const [high, setHigh] = useState(100);

  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="range-slider-wrap w-full md:w-1/2">
          <RangeSlider
            min={18}
            max={100}
            step={0}
            options={{
              leftInputProps: {
                value: low,
                onChange: (e) => setLow(Number(e.target.value)),
              },
              rightInputProps: {
                value: high,
                onChange: (e) => setHigh(Number(e.target.value)),
              },
            }}
          />
        </div>
        <h3 className="ml-3 text-md font-medium text-gray">
          {low} - {high} years old
        </h3>
      </div>
    </>
  );
};

export default RangeSliderBar;
