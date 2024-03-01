import CheckBoxButton from 'components/CheckBoxButton/CheckBoxButton';
import SelectBox from 'components/SelectBox/SelectBox';
import { useState } from 'react';
const AccountSetup3 = () => {
  // State to manage the checked status of individual checkboxes
  const [checkboxes, setCheckboxes] = useState([
    { id: 'checkbox1', label: 'High School', checked: false },
    { id: 'checkbox2', label: 'Undergrad', checked: false },
    { id: 'checkbox3', label: 'Masters', checked: false },
    { id: 'checkbox4', label: 'PhD', checked: false },
    { id: 'checkbox5', label: 'Prefer Not To Say', checked: false },
  ]);

  const [checkboxes1, setCheckboxes1] = useState([
    { id: 'checkbox1', label: 'Dog', checked: false },
    { id: 'checkbox2', label: 'Cat', checked: false },
    { id: 'checkbox3', label: 'Bird', checked: false },
    { id: 'checkbox4', label: 'Fish', checked: false },
    { id: 'checkbox5', label: 'Reptile', checked: false },
    { id: 'checkbox6', label: 'None', checked: false },
    { id: 'checkbox7', label: 'Prefer Not To Say', checked: false },
  ]);
  const options = [
    { value: 'White / Caucasian', label: 'White / Caucasian' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const optionft = [
    { value: '1 ft', label: '1 ft' },
    { value: '2 ft', label: '2 ft' },
    { value: '3 ft', label: '3 ft' },
    { value: '4 ft', label: '4 ft' },
    { value: '5 ft', label: '5 ft' },
    { value: '6 ft', label: '6 ft' },
  ];

  const optionin = [
    { value: '1 in', label: '1 in' },
    { value: '2 in', label: '2 in' },
    { value: '3 in', label: '3 in' },
    { value: '4 in', label: '4 in' },
    { value: '5 in', label: '5 in' },
    { value: '6 in', label: '6 in' },
  ];

  // Function to handle individual checkbox change
  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      );
    });
    setCheckboxes1((prevCheckboxe) => {
      return prevCheckboxe.map((checkbox1) =>
        checkbox1.id === id ? { ...checkbox1, checked: !checkbox1.checked } : checkbox1
      );
    });
  };

  return (
    <>
      <h2 className="mb-7 font-raleway  text-md  text-gray md:-mx-10  md:text-lg">
        You’re doing great! Please finish filling out your profile!
      </h2>
      <div className="setup-form-wrap bg-white-transperent h-[60vh] items-start justify-start overflow-auto rounded-lg p-5 md:-mx-10 md:px-10 md:py-10">
        <div className="setup-form">
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">How tall are you?</h3>
            <div className="flex space-x-8 text-gray md:w-96">
              <SelectBox
                options={optionft}
                value={''}
                variant={'small'}
                onChange={undefined}
                borderColor={'black'}
              />
              <SelectBox
                options={optionin}
                value={''}
                variant={'small'}
                onChange={undefined}
                borderColor={'black'}
              />
            </div>
          </div>
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">What is your ethnicity?</h3>
            <div className="flex space-x-8 text-gray md:w-96">
              <SelectBox
                options={options}
                value={''}
                variant={'large'}
                onChange={undefined}
                borderColor={'black'}
              />
            </div>
          </div>
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">
              What is your highest level of education?
            </h3>
            <div className="flex flex-wrap ">
              {checkboxes.map((checkbox) => (
                <CheckBoxButton
                  key={checkbox.id}
                  id={checkbox.id}
                  label={checkbox.label}
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
              ))}
            </div>
          </div>
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">Do you have any pets?</h3>
            <div className="flex flex-wrap ">
              {checkboxes1.map((checkbox) => (
                <CheckBoxButton
                  key={checkbox.id}
                  id={checkbox.id}
                  label={checkbox.label}
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSetup3;
