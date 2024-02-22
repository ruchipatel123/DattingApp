import React, { useState } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isNotLoginPage = router.pathname !== '/login';

  const handleClick = () => {
    router.push('/login');
  };

  return (
    <header className="site-header relative py-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between px-10">
        <Logo className="" alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
