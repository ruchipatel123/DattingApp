import CheckBoxButton from 'components/CheckBoxButton/CheckBoxButton';
import { useState } from 'react';
const AccountSetup1 = () => {
  // State to manage the checked status of individual checkboxes
  const [checkboxes, setCheckboxes] = useState([
    { id: 'checkbox1', label: 'Drinking', checked: false },
    { id: 'checkbox2', label: 'Smoking', checked: false },
    { id: 'checkbox3', label: 'Marijuana', checked: false },
    { id: 'checkbox4', label: 'Other Drugs', checked: false },
    { id: 'checkbox5', label: 'None Of The Above', checked: false },
  ]);

  const [checkboxes1, setCheckboxes1] = useState([
    { id: 'checkbox1', label: 'Liberal', checked: false },
    { id: 'checkbox2', label: 'Moderate', checked: false },
    { id: 'checkbox3', label: 'Conservative', checked: false },
    { id: 'checkbox4', label: 'Other', checked: false },
    { id: 'checkbox5', label: 'Not Political', checked: false },
  ]);

  const [checkboxes2, setCheckboxes2] = useState([
    { id: 'checkbox1', label: 'Atheist', checked: false },
    { id: 'checkbox2', label: 'Agnostic', checked: false },
    { id: 'checkbox3', label: 'Buddhist', checked: false },
    { id: 'checkbox4', label: 'Catholic', checked: false },
    { id: 'checkbox5', label: 'Christian', checked: false },
    { id: 'checkbox6', label: 'Hindu', checked: false },
    { id: 'checkbox7', label: 'Jewish', checked: false },
    { id: 'checkbox8', label: 'Muslim', checked: false },
    { id: 'checkbox9', label: 'Sikh', checked: false },
    { id: 'checkbox10', label: 'Spiritual', checked: false },
    { id: 'checkbox11', label: 'Other', checked: false },
  ]);
  const [rememberMe, setRememberMe] = useState(false);

  // Function to handle individual checkbox change
  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      );
    });
  };
  return (
    <>
      <h2 className="mb-7 font-raleway  text-md  text-gray md:-mx-10  md:text-lg">
        One key to a long-term match is finding people with shared values and lifestyles. Let’s
        figure out who’s best for you!
      </h2>
      <div className="setup-form-wrap bg-white-transperent h-[60vh] items-start justify-start overflow-auto rounded-lg p-5 md:-mx-10 md:px-10 md:py-10">
        <div className="setup-form">
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">
              Which of the following do you enjoy? (Select all that apply)
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
              Do you have a political affiliation?
            </h3>
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
              Do you practice any religions? (Select all that apply)
            </h3>
            <div className="flex flex-wrap ">
              {checkboxes2.map((checkbox) => (
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
        </div>
      </div>
    </>
  );
};

export default AccountSetup1;
