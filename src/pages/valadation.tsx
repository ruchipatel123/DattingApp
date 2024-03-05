import Connection from 'components/Connections/Connection';
import AuthHeader from 'components/Header/AuthHeader';
import MyMatchmakers from 'components/MyMatchmakers/MyMatchmakers';
import NewMatches from 'components/NewMatches/NewMatches';
import ProfileGallery from 'components/ProfileGallery/ProfileGallery';
import ProfileInformation from 'components/ProfileInformation/ProfileInformation';
import Sidebar from 'components/SideBar/SideBar';
import SideBarMatchMaker from 'components/SideBar/SideBarMatchMakers';
import SlideFromRight from 'components/SlideFromRIght/SlideFromRight';
import Valadation from 'components/Valadation/Valadation';
import ValadationInProgress from 'components/ValadationInProgress/ValadationInProgress';
import ValadationRequest from 'components/ValadationRequest/ValadationRequest';
import Layout from 'layout/Layout';
import { useState } from 'react';

const Valadations = () => {
  const [isHidden, setIsHidden] = useState(false);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout meta={{ title: 'Valadate' }}>
      <AuthHeader />
      <div className="flex flex-wrap md:min-h-[100vh]">
        <SideBarMatchMaker isOpen={isOpen} toggle={toggleSidebar} />
        <div className={`flex w-[100%]  pt-[85px] md:pl-[20%]`}>
          <div className="w-full  px-5 ">
            <div>
              <ValadationRequest onClick={toggleHidden} />
              <MyMatchmakers />
            </div>
          </div>
          <SlideFromRight isOpen={isHidden}>
            <div className="profile-shadow absolute left-0 right-0 mt-2 rounded-b-none bg-white-100 md:relative md:h-full md:rounded-xl md:p-4">
              <div className="w-full pb-24 md:w-[300px] lg:w-[400px] xxl:w-[600px]">
                <div className="flex flex-wrap">
                  <ProfileGallery />
                  <Valadation />
                  <div onClick={toggleHidden} className="fixed bottom-28 right-3">
                    <img src="/assets/images/back-btn.svg" alt="goback" />
                  </div>
                  <ProfileInformation />
                  <div className="box-shadow fixed bottom-0 right-0 z-10 flex w-full justify-around bg-white text-center md:w-[332px] lg:w-[432px] xxl:w-[632px]">
                    <button className="flex flex-col items-center px-5 py-2">
                      <img src="/assets/images/like.svg" alt="Like" />
                      <span className="w-full text-base font-light">Interested</span>
                    </button>
                    <button className="flex flex-col  items-center px-5 py-2">
                      <img src="/assets/images/valadate-circle.svg" alt="Like" />
                      <span className="w-full text-base font-light">Request Valadation</span>
                    </button>
                    <button className="flex flex-col  items-center px-5 py-2">
                      <img src="/assets/images/not-interested.svg" alt="Like" />
                      <span className="w-full text-base font-light">Not Interested</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SlideFromRight>
        </div>
      </div>
    </Layout>
  );
};

export default Valadations;
