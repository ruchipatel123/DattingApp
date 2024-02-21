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
      <div className="container flex flex-wrap items-center justify-between">
        <Logo className="" alt="Logo" />
        <div className="hidden md:inline-block">
          <NavBar />
        </div>
        <div className="hidden md:inline-block">
          {isNotLoginPage && (
            <Button onClick={handleClick} type="primary" size="lg">
              Log In
            </Button>
          )}
        </div>
        <div className="inline-block md:hidden">
          <button
            className=" mt-1 w-8 rounded-md bg-white text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="my-2 block h-[1px] w-full bg-black"></span>
            <span className="my-2 block h-[1px] w-full bg-black"></span>
            <span className="my-2 block h-[1px] w-full bg-black"></span>
          </button>
        </div>
      </div>

      <div
        className={`absolute top-[100%] flex w-full flex-col items-center overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } md:hidden`}
      >
        <div className="z-30 flex w-full flex-col items-center bg-white p-10 md:hidden">
          <NavBar />
          {isNotLoginPage && (
            <Button onClick={handleClick} type="primary" size="lg">
              Log In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
