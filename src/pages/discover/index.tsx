import AuthHeader from 'components/Header/AuthHeader';
import ProfileListing from 'components/Profile/ProfileListing';
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
        <div className="flex min-h-[100vh] flex-wrap">
          <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          <ProfileListing />
        </div>
      </Layout>
    </>
  );
};

export default Discover;
