import CheckBoxButton from 'components/CheckBoxButton/CheckBoxButton';
import RangeSlider from 'components/RangeSlider/RangeSliderBar';
import SelectBox from 'components/SelectBox/SelectBox';
import { useState } from 'react';

const AccountSetup = () => {
  // State to manage the checked status of individual checkboxes
  const [datingcheckboxes, setdatingCheckboxes] = useState([
    { id: 'checkbox1', label: 'Long-Term Relationship', checked: false },
    { id: 'checkbox2', label: 'Short-Term Fun', checked: false },
    { id: 'checkbox3', label: 'Just Browsing', checked: false },
    { id: 'checkbox4', label: 'Not Sure Ye', checked: false },
  ]);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  // State to manage the checked status of individual checkboxes
  const [choiceboxes] = useState([
    { id: 'checkbox5', label: 'Yes', checked: false },
    { id: 'checkbox6', label: 'No', checked: false },
  ]);

  const [rememberMe, setRememberMe] = useState(false);

  // Function to handle individual checkbox change
  const handleCheckboxChange = (id) => {
    setdatingCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      );
    });
  };

  return (
    <>
      <h2 className="mb-7 font-raleway  text-md  text-gray md:-mx-10  md:text-lg">
        Great! We want to help you find your perfect match - in order to do that, we need to figure
        out exactly what you’re looking for!
      </h2>
      <div className="setup-form-wrap bg-white-transperent h-[60vh] items-start justify-start overflow-auto rounded-lg p-5 md:-mx-10 md:px-10 md:py-10">
        <div className="setup-form">
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">
              What age range are you looking to date within?
            </h3>
            <RangeSlider />
          </div>
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">What are your dating intentions?</h3>
            <div className="flex flex-wrap ">
              {datingcheckboxes.map((checkbox) => (
                <CheckBoxButton
                  key={checkbox.id}
                  id={checkbox.id}
                  label={checkbox.label}
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
              ))}
            </div>
            <div className="mb-4 mt-2 flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="mr-2 h-4 w-4 bg-transparent leading-tight"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="checkbox" className="text-base font-medium text-gray">
                This is a dealbreaker for me
              </label>
            </div>
          </div>

          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">
              Are you ok with dating someone who already has children?
            </h3>
            <div className="flex flex-wrap">
              {choiceboxes.map((checkbox) => (
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
            <h3 className="mb-3 text-md font-medium text-gray">What is your Zodiac sign?</h3>
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
        </div>
      </div>
    </>
  );
};

export default AccountSetup;
