import CheckBoxButton from 'components/CheckBoxButton/CheckBoxButton';
import { useState } from 'react';
const AccountSetup2 = () => {
  // State to manage the checked status of individual checkboxes
  const [checkboxes, setCheckboxes] = useState([
    { id: 'checkbox1', label: 'Art History', checked: false },
    { id: 'checkbox2', label: 'Classical Music', checked: false },
    { id: 'checkbox3', label: 'Dance', checked: false },
    { id: 'checkbox4', label: 'Digital Arts', checked: false },
    { id: 'checkbox5', label: 'DIY Crafts', checked: false },
    { id: 'checkbox6', label: 'Drawing / Painting', checked: false },
    { id: 'checkbox7', label: 'Cinema', checked: false },
    { id: 'checkbox8', label: 'Museums', checked: false },
    { id: 'checkbox9', label: 'Performing Arts', checked: false },
    { id: 'checkbox10', label: 'Photography', checked: false },
    { id: 'checkbox11', label: 'Poetry', checked: false },
    { id: 'checkbox12', label: 'Sculpting', checked: false },
    { id: 'checkbox13', label: 'Social Justice', checked: false },
    { id: 'checkbox14', label: 'Street Art Tours', checked: false },
    { id: 'checkbox15', label: 'Writing', checked: false },
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
        Now, let’s get to know you a little better! Please select up to 10 interests!
      </h2>
      <div className="setup-form-wrap bg-white-transperent h-[60vh] items-start justify-start overflow-auto rounded-lg p-5 md:-mx-10 md:px-10 md:py-10">
        <div className="setup-form">
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">Arts & Culture</h3>
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
            <h3 className="mb-3 text-md font-medium text-gray">Outdoors & Adventure</h3>
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

          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">Food & Beverage</h3>
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

          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">Sports & Fitness</h3>
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

          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">Entertainment & Relaxation</h3>
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

          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">Business, Technology & Science</h3>
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

export default AccountSetup2;
