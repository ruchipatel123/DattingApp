import { useState } from 'react';

const CheckboxGroup = ({ options }) => {
  const [checkedItems, setCheckedItems] = useState<any>([]);

  const handleCheckboxChange = (option: any) => {
    setCheckedItems([...checkedItems, option.value]);
    console.log(checkedItems);
  };

  return (
    <div className="space-y-2">
      {options.map((option: any) => (
        <div key={option.value} className="relative flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-blue-600 absolute bottom-0 left-0 right-0 top-0 hidden h-5 w-5"
            id={option.value}
            checked={checkedItems.indexOf(option?.value) >= 0}
            onChange={() => handleCheckboxChange(option)}
          />
          <label
            htmlFor={option.value}
            className={`${
              checkedItems[option.value]
                ? 'w-full bg-white px-5 py-4 font-raleway text-lg text-gray'
                : 'bg-yellow-transperant w-full px-5 py-4 font-raleway text-lg text-gray'
            }`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
