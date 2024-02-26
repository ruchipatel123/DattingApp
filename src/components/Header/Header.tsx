import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import NavBar from './NavBar';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { logout } from 'slices/auth';
import { useAppDispatch } from 'store';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  const handleClick = () => {
    router.push('/login');
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoggedIn && router.pathname == '/login') {
      router.push('/discover');
    }
  }, [isLoggedIn]);
  return (
    <header className="site-header relative py-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between px-10">
        <Link href="/"><Logo className="" alt="Logo" /></Link>
        <div className="hidden md:inline-block">
          <NavBar />
        </div>
        <div className="hidden md:inline-block">
          {isLoggedIn ? (
            <button
              className="btn primary lg rounded-full border border-blue px-6 py-2 font-raleway text-md leading-none text-blue hover:bg-blue hover:text-white md:px-10"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn primary lg rounded-full border border-blue px-6 py-2 font-raleway text-md leading-none text-blue hover:bg-blue hover:text-white md:px-10"
              onClick={handleClick}
            >
              Log In
            </button>
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
        className={`absolute top-[100%] flex w-full flex-col items-center overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
          } md:hidden`}
      >
        <div className="z-30 flex w-full flex-col items-center bg-white p-10 md:hidden">
          <NavBar />
          <button
            className="btn primary lg rounded-full border border-blue px-6 py-2 font-raleway text-md leading-none text-blue hover:bg-blue hover:text-white md:px-10"
            onClick={() => {
              dispatch(logout());
            }}
            hidden={isLoggedIn ? false : true}
          >
            Logout
          </button>
          <button
            className="btn primary lg rounded-full border border-blue px-6 py-2 font-raleway text-md leading-none text-blue hover:bg-blue hover:text-white md:px-10"
            onClick={handleClick}
            hidden={isLoggedIn ? true : false}
          >
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
