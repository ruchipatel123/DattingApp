import React from 'react';
import Logo from './Logo';

const RegistrationHeader = () => {
  return (
    <header className="site-header registration-header relative bg-white py-5 shadow-sm">
      <div className="container flex flex-wrap items-center justify-between">
        <Logo className="" alt="Logo" />
      </div>
    </header>
  );
};

export default RegistrationHeader;
