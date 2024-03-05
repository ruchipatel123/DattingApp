import AuthHeader from 'components/Header/AuthHeader';
import SideBarMatchMaker from 'components/SideBar/SideBarMatchMakers';
import Threads from 'components/Threads/Threads';
import YourFriendList from 'components/YourFriendList/YourFriendList';
import Layout from 'layout/Layout';
import React, { useState } from 'react';

const MatchMaker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Layout meta={{ title: 'Valadate' }}>
        <AuthHeader />
        <SideBarMatchMaker isOpen={isOpen} toggle={toggleSidebar} />
        <div className={`flex w-[100%] flex-wrap  px-5 pt-[85px] md:pl-[20%]`}>
          <YourFriendList />
          <Threads />
        </div>
      </Layout>
    </>
  );
};

export default MatchMaker;
