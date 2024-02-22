import ProfileListing from "components/ProfileListing/ProfileListing";
import Sidebar from "components/SideBar/SideBar";
import { useState } from "react";

const Discover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
    <ProfileListing />
  </div>  )
}

export default Discover