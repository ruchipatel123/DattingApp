import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { logout } from 'slices/auth';
import { useAppDispatch } from 'store';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="relative">
      <button
        className="text-gray-800 hover:text-gray-600 flex items-center space-x-2 focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="block h-10 w-10 rounded-full bg-[url(/assets/images/profile.png)]"></span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded border border-gray bg-white shadow-lg md:right-0">
          <Link href="/my-profile" className="block px-4 py-2 text-sm text-gray hover:bg-[#E1EEFC]">
            Profile
          </Link>
          <a href="#" className="block px-4 py-2 text-sm text-gray hover:bg-[#E1EEFC]">
            Settings
          </a>

          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-gray hover:bg-[#E1EEFC]"
            onClick={() => {
              dispatch(logout({}))
                .unwrap()
                .then((resp) => {
                  if (resp) router.push('/login');
                });
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
