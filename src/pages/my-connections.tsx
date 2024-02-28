import AuthHeader from 'components/Header/AuthHeader';
import Sidebar from 'components/SideBar/SideBar';
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
        <div className={`flex w-[100%] flex-wrap  px-5 pt-[85px] md:pl-[20%]`}>
          <div>
            {/* Tab headers */}
            <div className="flex flex-wrap space-x-4">
              <button
                className={`px-4 py-2 ${
                  activeTab === 'tab1' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => setActiveTab('tab1')}
              >
                Tab 1
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'tab2' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => setActiveTab('tab2')}
              >
                Tab 2
              </button>
              {/* Add more tabs as needed */}
            </div>

            {/* Tab content */}
            <div className="p-4">
              {activeTab === 'tab1' && <div>Content for Tab 1</div>}
              {activeTab === 'tab2' && <div>Content for Tab 2</div>}
              {/* Render content for more tabs as needed */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyConnections;
