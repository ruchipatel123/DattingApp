const ProfileCard = () => {
  return (
    <div className="profile_card mb-10 w-full px-5">
      <div className="bg-img relative rounded-xl bg-[url('/assets/images/profile-1.jpg')] bg-contain bg-no-repeat pb-[150%] ">
        <div
          className="bg-img__inner absolute bottom-0 text-white"
          style={{
            background:
              'linear-gradient(180deg, rgba(20, 92, 168, 0.00) 0%, rgba(20, 92, 168, 0.40) 26.43%, rgba(20, 92, 168, 0.80) 73%, #145CA8 100%)',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div>
            <h2>Tracey</h2> 58
          </div>
          <span>2 Shared Interests</span>
          <span>50+ Common Threads</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
