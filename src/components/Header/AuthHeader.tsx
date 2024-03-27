import React, { useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import ProfileDropdown from 'components/Profile/ProfileDropdown';
import { useAppDispatch } from 'store';
import { me } from 'slices/auth';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

const AuthHeader = () => {
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (
      getCookie('status') &&
      getCookie('status') == '3' &&
      router.pathname !== '/discover/complete-my-profile'
    ) {
      router.push('/discover/complete-my-profile');
    }
  }, []);
  useEffect(() => {
    dispatch(me({}))
      .unwrap()
      .then((data) => {
        if (router.pathname === '/discover' && data?.user) {
        }
      });
  }, [isLoggedIn]);
  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 flex w-full bg-white py-5">
      <div className="flex w-full flex-wrap items-center px-5 md:justify-between md:px-10">
        <Link href="/">
          <span className="hidden md:inline-block ">
            <Logo className="" alt="Logo" />
          </span>
          <span className="text-gray-800 text-2xl font-bold md:hidden">
            <img src="/assets/images/Valadate_Logo.png" alt={'sitelogodata'} />
          </span>
        </Link>

        <div className=" flex items-center space-x-5">
          <svg
            className="absolute right-20 top-6 md:static"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.91239 9.62525C5.54013 4.14558 10.3155 0 16 0C18.959 0 21.6716 1.12329 23.6812 2.97333C25.5322 4.67736 26.7866 6.99796 27.0876 9.62525L27.5606 13.7533C27.7822 15.6262 28.4107 17.4321 29.4047 19.0521L30.5427 20.8918C31.0017 21.6337 31.3819 22.2483 31.629 22.7573C31.8785 23.271 32.0707 23.8267 31.9749 24.4156C31.8713 25.0523 31.5335 25.6311 31.0238 26.0449C30.5524 26.4276 29.9623 26.5535 29.3798 26.6104C28.8026 26.6667 28.0636 26.6667 27.1715 26.6667H21.5427H19.7073H11.3289H9.49347H4.82854C3.93641 26.6667 3.19738 26.6667 2.62024 26.6104C2.03774 26.5535 1.44756 26.4276 0.976174 26.0449C0.466537 25.6311 0.128666 25.0523 0.0250836 24.4156C-0.0707256 23.8267 0.121536 23.271 0.370979 22.7573C0.618127 22.2483 0.998369 21.6337 1.45739 20.8917L2.59533 19.0521C3.5893 17.4321 4.21781 15.6262 4.43939 13.7533L4.91239 9.62525ZM16 1.77778C11.2495 1.77778 7.25872 5.24223 6.73411 9.82157L6.26038 13.956C6.00925 16.0785 5.29694 18.1253 4.17044 19.9612L3.05464 21.7651C2.56362 22.5589 2.23229 23.0966 2.02921 23.5148C1.82387 23.9377 1.82765 24.0895 1.83562 24.1385C1.87015 24.3508 1.98277 24.5437 2.15265 24.6816C2.19187 24.7135 2.32419 24.7947 2.80372 24.8415C3.27795 24.8878 3.92379 24.8889 4.87817 24.8889H27.1218C28.0762 24.8889 28.7221 24.8878 29.1963 24.8415C29.6758 24.7947 29.8081 24.7135 29.8474 24.6816C30.0172 24.5437 30.1299 24.3508 30.1644 24.1385C30.1724 24.0895 30.1761 23.9377 29.9708 23.5148C29.7677 23.0966 29.4364 22.5589 28.9454 21.7651L27.8296 19.9612C26.7031 18.1253 25.9907 16.0785 25.7396 13.956L25.2659 9.82157C25.0039 7.53459 23.8774 5.52568 22.2235 4.0875C20.5657 2.64593 18.378 1.77778 16 1.77778Z"
              fill="#145CA8"
            />
            <path
              d="M15.5181 32C16.9259 32 18.2748 31.457 19.3577 30.4876C20.4378 29.5207 21.1948 28.1842 21.536 26.6983C21.5384 26.6877 21.5407 26.6772 21.5427 26.6667H19.7073C19.4102 27.6712 18.871 28.5372 18.1719 29.163C17.392 29.8613 16.4584 30.2222 15.5181 30.2222C14.5778 30.2222 13.6442 29.8612 12.8642 29.163C12.1651 28.5372 11.626 27.6712 11.3289 26.6667H9.49347C9.4955 26.6772 9.49772 26.6877 9.50014 26.6983C9.8414 28.1841 10.5984 29.5207 11.6785 30.4876C12.7614 31.457 14.1103 32 15.5181 32Z"
              fill="#145CA8"
            />
            <path
              d="M27.9625 6.22222C27.9625 8.1859 26.3706 9.77778 24.407 9.77778C22.4433 9.77778 20.8514 8.1859 20.8514 6.22222C20.8514 4.25854 22.4433 2.66667 24.407 2.66667C26.3706 2.66667 27.9625 4.25854 27.9625 6.22222Z"
              fill="#FF4365"
            />
          </svg>
          <ProfileDropdown />
        </div>
        <div className="inline-block md:hidden"></div>
      </div>
    </header>
  );
};

export default AuthHeader;
