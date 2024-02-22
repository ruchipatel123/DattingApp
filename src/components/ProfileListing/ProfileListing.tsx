import React, { useState } from 'react';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import SlideFromRight from 'components/SlideFromRIght/SlideFromRight';

const ProfileListing = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="flex w-[80%] flex-nowrap">
      <div className="w-[100%] rounded-md rounded-b-none bg-yellow  transition duration-500">
        {/* Your profile listing page content goes here */}
        <div className="px-5 py-10">
          <div className={`flex flex-wrap`}>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
            <div
              onClick={toggleHidden}
              className={`profile_wrap ${isHidden ? 'w-[50%] ' : 'w-[25%] '}`}
            >
              <ProfileCard />{' '}
            </div>
          </div>
        </div>
      </div>
      <SlideFromRight isOpen={isHidden}>
        <div className="bg-gray-200 p-4">Content to slide Content to slide Content to slide</div>
      </SlideFromRight>
      {/* <div className={`transform transition duration-500 ${isHidden ?  'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
        testing
      </div> */}
    </div>
  );
};

export default ProfileListing;
