import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { logout } from 'slices/auth';
import { useAppDispatch } from 'store';

const Sidebar = ({ isOpen, toggle }) => {
  const router = useRouter();
  const { user } = useSelector((store: any) => {
    return store.auth;
  });
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        onClick={toggle}
        className="absolute right-5 top-7 z-50 block text-blue focus:outline-none md:hidden" // Hide on desktop
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2E353E">
          {isOpen ? (
            <path d="M1 1H21M1 9H21M1 17H21" stroke="#2E353E" strokeLinecap="round" />
          ) : (
            <path d="M1 1H21M1 9H21M1 17H21" stroke="#2E353E" strokeLinecap="round" />
          )}
        </svg>
      </button>
      <div
        className={` left-0 top-[80px] min-h-[400px] w-full  transform overflow-y-auto bg-white md:h-[90vh] md:w-[20%] md:transform-none ${
          isOpen ? 'relative translate-y-0 ease-out' : 'fixed -translate-y-full ease-in'
        } z-30 transition duration-300`}
      >
        <nav className="mt-5 space-y-5 text-center md:mt-20 md:pr-0">
          {/* Add your sidebar navigation links here */}
          {user?.user_type == 2 ? (
            <Link
              href="discover"
              className={`hover:bg-gray-700 flex items-center  space-x-5 px-2 py-2 text-md font-normal text-gray hover:bg-[#E1EEFC] lg:px-4 ${
                router.pathname === '/discover' ? 'bg-[#E1EEFC]' : ''
              }`}
            >
              <span className="icon mr-1">
                <img src="/assets/images/discover-icon.svg" alt="discover" />
              </span>{' '}
              Discover
            </Link>
          ) : (
            ''
          )}

          <Link
            href="/discover/common-threads"
            className={`hover:bg-gray-700 flex items-center space-x-5 px-2 py-2 text-md font-normal text-gray hover:bg-[#E1EEFC] lg:px-4 ${
              router.pathname === '/discover/common-threads' ? 'bg-[#E1EEFC]' : ''
            }`}
          >
            <span className="icon mr-1">
              <img src="/assets/images/tread-icon.svg" alt="tread" />
            </span>{' '}
            Common Threads
          </Link>
          <Link
            href="/discover/my-connections"
            className={`hover:bg-gray-700 flex  items-center space-x-5 px-2 py-2 text-md font-normal text-gray hover:bg-[#E1EEFC] lg:px-4 ${
              router.pathname === '/discover/my-connections' ? 'bg-[#E1EEFC]' : ''
            }`}
          >
            <span className="icon mr-1">
              <img src="/assets/images/connection-icon.svg" alt="connection" />
            </span>{' '}
            My Connections
          </Link>
        </nav>

        <button
          title="Sign Out"
          className=" absolute bottom-8 left-0 right-0 h-6 w-full font-raleway text-md"
          onClick={() => {
            dispatch(logout({}))
              .unwrap()
              .then(() => {
                router.push('/login');
              });
          }}
        >
          Sign out
        </button>
      </div>
    </>
  );
};
export default Sidebar;
