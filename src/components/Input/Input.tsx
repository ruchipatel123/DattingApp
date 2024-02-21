const Input = ({ label, type = 'text', value, onChange, variant, error, ...props }) => {
  let inputClasses =
    'border max-w-full m-auto w-full px-4 py-2 rounded-lg focus:outline-none focus:border-black';

  switch (variant) {
    case 'primary':
      inputClasses += ' border-gray-400 min-h-10 ';
      break;
    case 'secondary':
      inputClasses += ' border-gray-400 bg-transparent h-[60px] text-md';
      break;
    default:
      break;
  }

  return (
    <div className="input-container">
      {label && <label className="block  w-full text-md font-normal">{label}</label>}
      <input type={type} value={value} onChange={onChange} {...props} className={inputClasses} />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
