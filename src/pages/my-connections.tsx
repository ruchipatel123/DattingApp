import Connection from 'components/Connections/Connection';
import AuthHeader from 'components/Header/AuthHeader';
import MyMatchmakers from 'components/MyMatchmakers/MyMatchmakers';
import NewMatches from 'components/NewMatches/NewMatches';
import Sidebar from 'components/SideBar/SideBar';
import ValadationInProgress from 'components/ValadationInProgress/ValadationInProgress';
import Layout from 'layout/Layout';
import { useState } from 'react';

const MyConnections = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <Layout meta={{ title: 'Valadate' }}>
      <AuthHeader />
      <div className="flex flex-wrap md:min-h-[100vh]">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <div className={`flex w-[100%] flex-wrap   px-5 pt-[85px] md:pl-[20%]`}>
          <div className="w-full">
            {/* Tab headers */}
            <div className="flex w-full flex-wrap justify-center space-x-40">
              <button
                className={`px-4 py-2 ${
                  activeTab === 'tab1' ? 'text-blue underline' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('tab1')}
              >
                Connections
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'tab2' ? 'text-blue underline' : 'text-gray-300'
                }`}
                onClick={() => setActiveTab('tab2')}
              >
                Valadation
              </button>
              {/* Add more tabs as needed */}
            </div>

            {/* Tab content */}
            <div className="w-full p-4 ">
              {activeTab === 'tab1' && (
                <div>
                  <NewMatches />
                  <Connection />
                </div>
              )}
              {activeTab === 'tab2' && (
                <div>
                  <ValadationInProgress />
                  <MyMatchmakers />
                </div>
              )}
              {/* Render content for more tabs as needed */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyConnections;
