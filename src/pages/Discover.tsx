import Header from 'components/Header/Header';
import ProfileListing from 'components/ProfileListing/ProfileListing';
import Sidebar from 'components/SideBar/SideBar';
import { useState } from 'react';

const Discover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-[80vh] overflow-hidden">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <ProfileListing />
      </div>
    </>
  );
};

export default Discover;
