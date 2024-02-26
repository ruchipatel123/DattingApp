import AuthHeader from 'components/Header/AuthHeader';
import ProfileListing from 'components/ProfileListing/ProfileListing';
import Sidebar from 'components/SideBar/SideBar';
import Layout from 'layout/Layout';
import { useState } from 'react';

const Discover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Layout meta={{ title: 'Valadate' }}>
        <AuthHeader />
        <div className="flex min-h-[80vh]">
          <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          <ProfileListing />
        </div>
      </Layout>
    </>
  );
};

export default Discover;
