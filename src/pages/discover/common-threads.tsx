import AuthHeader from 'components/Header/AuthHeader';
import Sidebar from 'components/SideBar/SideBar';
import Threads from 'components/Threads/Threads';
import YourFriendList from 'components/YourFriendList/YourFriendList';
import Layout from 'layout/Layout';
import { useState } from 'react';

const CommanTreads = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout meta={{ title: 'Valadate' }}>
      <AuthHeader />
      <div className="flex flex-wrap md:min-h-[100vh]">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <div className={`flex w-[100%] flex-wrap  px-5 pt-[85px] md:pl-[20%]`}>
          <YourFriendList />
          <Threads />
        </div>
      </div>
    </Layout>
  );
};

export default CommanTreads;
