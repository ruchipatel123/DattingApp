import React from 'react';

const FriendCard = () => {
  return (
    <div>
      <div className="profile_card group relative mb-5 w-full bg-no-repeat p-6  md:mb-10">
        <div className="bg-img relative overflow-hidden rounded-xl bg-[url('/assets/images/profile-1.jpg')] bg-cover bg-no-repeat pb-[120%] ">
          <div
            className="bg-img__inner absolute bottom-0 left-0 right-0 px-3 py-4 text-white"
            style={{
              background:
                'linear-gradient(180deg, rgba(20, 92, 168, 0.00) 0%, rgba(20, 92, 168, 0.40) 26.43%, rgba(20, 92, 168, 0.80) 73%, #145CA8 100%)',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div className="flex justify-between">
              <div className="w-full">
                <div className="flex">
                  <h2 className="font-raleway text-sm font-semibold text-shadow">Tracey</h2>
                </div>
                <span className="text-xs text-yellow text-shadow">50+ Common Threads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
