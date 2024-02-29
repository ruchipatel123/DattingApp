import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const RegistrationHeader = () => {
  return (
    <header className="site-header registration-header relative bg-white py-5 shadow-sm">
      <div className="container flex flex-wrap items-center justify-between">
        <Link href="/" className="relative z-20">
          <Logo alt="Logo" />
        </Link>
      </div>
    </header>
  );
};

export default RegistrationHeader;
