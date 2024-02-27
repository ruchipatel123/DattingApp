import Link from 'next/link';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <button
        onClick={toggle}
        className="absolute right-5 top-7 z-50 block text-blue focus:outline-none md:hidden" // Hide on desktop
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2E353E">
          {isOpen ? (
            <path d="M1 1H21M1 9H21M1 17H21" stroke="#2E353E" stroke-linecap="round" />
          ) : (
            <path d="M1 1H21M1 9H21M1 17H21" stroke="#2E353E" stroke-linecap="round" />
          )}
        </svg>
      </button>
      <div
        className={` left-0 top-[80px] min-h-[400px] w-full transform overflow-y-auto bg-white md:h-full md:w-[20%] md:transform-none ${
          isOpen ? 'relative translate-y-0 ease-out' : 'fixed -translate-y-full ease-in'
        } z-30 transition duration-300`}
      >
        <nav className="mt-5 space-y-5 pr-5 md:mt-20">
          {/* Add your sidebar navigation links here */}
          <Link
            href="#"
            className="text-gray-300 hover:bg-gray-700 flex  items-center space-x-5 px-2 py-2 text-md font-normal hover:bg-[#E1EEFC] lg:px-4"
          >
            <span className="icon mr-1">
              <img src="/assets/images/discover-icon.svg" alt="discover" />
            </span>{' '}
            Discover
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:bg-gray-700 flex items-center space-x-5 px-2 py-2 text-md font-normal hover:bg-[#E1EEFC] lg:px-4"
          >
            <span className="icon  mr-1">
              <img src="/assets/images/tread-icon.svg" alt="tread" />
            </span>{' '}
            Common Threads
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:bg-gray-700  flex items-center space-x-5 px-2 py-2 text-md font-normal hover:bg-[#E1EEFC] lg:px-4"
          >
            <span className="icon  mr-1">
              <img src="/assets/images/connection-icon.svg" alt="connection" />
            </span>{' '}
            My Connections
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
