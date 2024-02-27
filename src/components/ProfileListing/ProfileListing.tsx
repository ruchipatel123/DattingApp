import React, { useState } from 'react';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import SlideFromRight from 'components/SlideFromRIght/SlideFromRight';
import ProfileGallery from 'components/ProfileGallery/ProfileGallery';
import ProfileInformation from 'components/ProfileInformation/ProfileInformation';

const ProfileListing = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [btnText, setBtnText] = useState('View Profile');
  const toggleHidden = () => {
    setIsHidden(!isHidden);
    if (isHidden) {
      setBtnText('View Profile');
    } else {
      setBtnText('Close Profile');
    }
  };

  return (
    <div className={`flex w-[100%] flex-nowrap items-stretch space-x-5 pt-[80px] md:pl-[20%]`}>
      <div className="yellow-gradient-bg mt-2 w-[100%] rounded-xl rounded-b-none transition duration-500">
        {/* Your profile listing page content goes here */}
        <div className="px-5 py-10">
          <div className={`flex flex-wrap`}>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%] sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%]  sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%]  sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%]  sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%] sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%] sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%] sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${
                isHidden ? 'md:w-full xl:w-[50%] ' : 'w-[100%] sm:w-[33.33%] xl:w-[25%] '
              }`}
            >
              <ProfileCard btnText={btnText} />
            </div>
          </div>
        </div>
      </div>
      <SlideFromRight isOpen={isHidden}>
        <div className="profile-shadow absolute left-0 right-0 mt-2 h-full rounded-b-none bg-white-100 p-4 md:relative md:rounded-xl">
          <div className="w-full pb-24 md:w-[300px] lg:w-[400px] xxl:w-[600px]">
            <div className="flex flex-wrap">
              <ProfileGallery />
              <div onClick={toggleHidden}>click</div>
              <ProfileInformation />
              <div className="box-shadow fixed bottom-0 right-0 flex w-full justify-around bg-white text-center md:w-[332px] lg:w-[432px] xxl:w-[632px]">
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
      {/* <div className={`transform transition duration-500 ${isHidden ?  'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
        testing
      </div> */}
    </div>
  );
};

export default ProfileListing;
