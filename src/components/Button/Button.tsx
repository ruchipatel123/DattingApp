import React from 'react';
const Button = ({
  children,
  onClick,
  className = '',
  disabled = false,
  hidden = false,
  type = 'primary', // new prop for button type
  size = 'md', // new prop for button size
  ...props
}) => {
  // Add type and size to the className
  const buttonClass = `btn font-raleway text-md border border-blue text-blue hover:bg-blue hover:text-white px-6 md:px-10 py-2 rounded-full leading-none ${type} ${size} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      hidden={hidden}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
