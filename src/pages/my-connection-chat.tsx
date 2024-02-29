import ChatBot from 'components/ChatBot/ChatBot';
import AuthHeader from 'components/Header/AuthHeader';
import ProfileGallery from 'components/ProfileGallery/ProfileGallery';
import ProfileInformation from 'components/ProfileInformation/ProfileInformation';
import Sidebar from 'components/SideBar/SideBar';
import Layout from 'layout/Layout';
import { useState } from 'react';

const MyConnectionChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout meta={{ title: 'Valadate' }}>
      <AuthHeader />
      <div className="flex flex-wrap md:min-h-[100vh]">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <div className={`flex w-[100%] flex-wrap   px-5 pt-[85px] md:pl-[20%]`}>
          <div className="mb-2 flex w-full flex-wrap justify-between">
            <button className="flex items-center text-sm text-gray hover:text-blue">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.35355 0.646484L5.06066 1.35359L1.91421 4.50004H12.7071C12.9832 4.50004 13.2071 4.7239 13.2071 5.00004C13.2071 5.27618 12.9832 5.50004 12.7071 5.50004H1.91421L5.06066 8.64648L4.35355 9.35359L0 5.00004L4.35355 0.646484Z"
                    fill="#2E353E"
                  />
                </svg>
              </span>
              Back
            </button>
            <button className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="8"
                viewBox="0 0 28 8"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 4C10.5 2.067 12.067 0.5 14 0.5C15.933 0.5 17.5 2.067 17.5 4C17.5 5.933 15.933 7.5 14 7.5C12.067 7.5 10.5 5.933 10.5 4Z"
                  fill="#72859A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 4C0 2.067 1.567 0.5 3.5 0.5C5.433 0.5 7 2.067 7 4C7 5.933 5.433 7.5 3.5 7.5C1.567 7.5 0 5.933 0 4Z"
                  fill="#72859A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 4C21 2.067 22.567 0.5 24.5 0.5C26.433 0.5 28 2.067 28 4C28 5.933 26.433 7.5 24.5 7.5C22.567 7.5 21 5.933 21 4Z"
                  fill="#72859A"
                />
              </svg>
            </button>
          </div>
          <div className="w-1/2">
            <ChatBot />
          </div>
          <div className="relative w-1/2">
            <div className={`flex w-[100%] flex-wrap`}>
              <ProfileGallery />
              <ProfileInformation />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyConnectionChat;
