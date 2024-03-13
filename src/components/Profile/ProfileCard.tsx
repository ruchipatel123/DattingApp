const ProfileCard = ({ btnText }) => {
  return (
    <div className="profile_card group relative mb-5 w-full px-5 md:mb-10">
      <div className="bg-img relative overflow-hidden   rounded-xl bg-[url('/assets/images/profile-1.jpg')] bg-contain bg-no-repeat pb-[150%] ">
        <div
          className="bg-img__inner absolute bottom-0 left-0 right-0 px-3 py-4 text-white"
          style={{
            background:
              'linear-gradient(180deg, rgba(20, 92, 168, 0.00) 0%, rgba(20, 92, 168, 0.40) 26.43%, rgba(20, 92, 168, 0.80) 73%, #145CA8 100%)',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="flex justify-between">
            <div className="w-[80%]">
              <div className="flex">
                <h2 className="font-raleway text-sm font-semibold text-shadow">
                  Tracey <span className="ml-1">58</span>
                </h2>
              </div>
              <span className="block text-xs text-shadow">2 Shared Interests</span>
              <span className="text-xs text-yellow text-shadow">50+ Common Threads</span>
            </div>
            <div className="smile w-[20%]">
              <img src="/assets/images/smile.svg" alt="smile" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex cursor-pointer items-center justify-center text-lg text-white opacity-0 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50"></div>
          <span className="relative z-10 underline">{btnText}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
