const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <button
        onClick={toggle}
        className="absolute right-0 top-0 block text-blue focus:outline-none md:hidden" // Hide on desktop
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed inset-y-0 left-0 w-64 transform overflow-y-auto bg-gray md:transform-none ${
          isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        } z-30 transition duration-300`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="text-xl font-semibold text-white">Sidebar</div>
        </div>
        <nav className="mt-2">
          {/* Add your sidebar navigation links here */}
          <a href="#" className="text-gray-300 hover:bg-gray-700 block px-4 py-2">
            Link 1
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 block px-4 py-2">
            Link 2
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 block px-4 py-2">
            Link 3
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
