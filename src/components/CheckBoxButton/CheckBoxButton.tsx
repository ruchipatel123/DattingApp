const CheckBoxButton = ({ id, label, checked, onChange }) => {
  return (
    <div className="relative mb-2 inline-flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden" // Hide the actual checkbox input
      />
      <label
        htmlFor={id}
        className={`mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-6 py-2 text-sm  font-medium md:mr-10 ${
          checked
            ? 'border border-blue bg-blue text-white'
            : 'text-gray-800 border border-blue bg-transparent  text-gray'
        } focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        {' '}
        {label}
      </label>
    </div>
  );
};

export default CheckBoxButton;
