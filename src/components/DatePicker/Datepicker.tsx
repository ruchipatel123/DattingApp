import moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = ({ selectedDate, onChange }) => {
  console.log(moment().subtract('18Y').toDate());
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      maxDate={moment().subtract(18, 'years').toDate()}
      className="focus:shadow-outline block h-[60px] w-full rounded-lg border border-gray-400 bg-transparent  px-4 py-2 text-md leading-tight shadow placeholder:text-gray-400 focus:outline-none"
      placeholderText="Select birthdate"
    />
  );
};

export default Datepicker;
