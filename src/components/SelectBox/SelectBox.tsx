import React from 'react';

const SelectBox = ({ options, value, onChange, borderColor, variant }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`inline-block h-full w-full min-w-40 appearance-none border bg-transparent bg-[url('/assets/images/arrow.png')]  bg-[90%] bg-no-repeat text-md border-${borderColor} focus:shadow-outline rounded px-4 py-2  pr-8 leading-tight focus:outline-none`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
