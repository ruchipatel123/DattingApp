import CheckboxGroup from 'components/CheckBoxGroup/CheckBoxGroup';
import { useState } from 'react';

const GenderSelection = () => {
  const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Non-Binary', label: 'Non-Binary' },
    { value: 'Prefer Not To Say', label: 'Prefer Not To Say' },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <h2 className="mb-7 font-raleway text-lg text-gray">I am a...</h2>
      <CheckboxGroup options={options} onChange={handleCheckboxChange} />
    </div>
  );
};

export default GenderSelection;
