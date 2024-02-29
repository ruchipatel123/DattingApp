import CheckboxGroup from 'components/CheckBoxGroup/CheckBoxGroup';
import { useState } from 'react';

const LookingFor = () => {
  const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Non-Binary', label: 'Non-Binary' },
    { value: 'Prefer Not To Say', label: 'Prefer Not To Say' },
  ];

  const [selectedOptions, setSelectedOptions] = useState(options);

  const handleCheckboxChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <h2 className="mb-7 font-raleway text-lg text-gray">Looking for a...</h2>
      <CheckboxGroup options={selectedOptions} onChange={handleCheckboxChange} />
    </div>
  );
};

export default LookingFor;
