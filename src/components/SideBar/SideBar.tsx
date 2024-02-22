const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
     <button 
          onClick={toggle} 
          className="text-blue focus:outline-none block md:hidden absolute top-0 right-0" // Hide on desktop
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
   <div className={`fixed inset-y-0 left-0 w-64 bg-gray overflow-y-auto transform md:transform-none ${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} transition duration-300 z-30`}>
      <div className="flex items-center justify-between p-4">
        <div className="text-white text-xl font-semibold">Sidebar</div>
       
      </div>
    <nav className="mt-2">
        {/* Add your sidebar navigation links here */}
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Link 1</a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Link 2</a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Link 3</a>
      </nav>
    
    </div>
    </>
  );
};

export default Sidebar;
