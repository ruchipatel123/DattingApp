import Datepicker from 'components/DatePicker/Datepicker';
import Input from 'components/Input/Input';
import SelectBox from 'components/SelectBox/SelectBox';
import { useState } from 'react';

const LocationForm = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [birthdate, setBirthdate] = useState(null);

  const handleDateChange = (date) => {
    setBirthdate(date);
  };

  return (
    <>
      <h2 className="mb-7 font-raleway  text-md  text-gray md:text-lg">I live in</h2>
      <form className="flex flex-wrap md:-mx-5">
        <div className="mb-8 w-full md:w-[50%] md:px-5">
          <Input
            label="First Name"
            type="text"
            value={''}
            onChange={''}
            error={''}
            variant={'secondary'}
          />
        </div>
        <div className="mb-8 w-full md:w-[25%] md:px-5">
          <Input
            label="State"
            type="text"
            value={''}
            onChange={''}
            error={''}
            variant={'secondary'}
          />
        </div>
        <div className="mb-8 w-full md:w-[25%] md:px-5">
          <Input
            label="Zip Code"
            type="text"
            value={''}
            onChange={''}
            error={''}
            variant={'secondary'}
          />
        </div>
        <div className="mb-5 w-full md:w-[50%] md:px-5">
          <h2 className="mb-3 font-raleway  text-md  text-gray md:text-lg">
            I’m looking for someone within
          </h2>
          <div className="h-[60px]">
            <SelectBox
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
              borderColor={'gray-300'}
              variant={'small'}
            />
            <span className="ml-2 align-bottom font-raleway   text-md  text-gray md:text-lg">
              miles
            </span>
          </div>
        </div>
        <div className="mb-5 w-full md:w-[50%] md:px-5">
          <h2 className="mb-3 font-raleway  text-md text-gray md:text-lg">My Birthday Is:</h2>
          <Datepicker selectedDate={birthdate} onChange={handleDateChange} />
        </div>
      </form>
    </>
  );
};

export default LocationForm;
