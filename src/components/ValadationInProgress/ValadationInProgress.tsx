import ProfileCard from 'components/ProfileCard/ProfileCard';
import React from 'react';

const ValadationInProgress = ({ onClick }) => {
  return (
    <>
      <h2 className="mb-2 font-raleway text-md font-medium tracking-wide text-blue">
        Valadation In Progress
      </h2>
      <div className="-mx-5">
        <div className="w-[240px]" onClick={onClick}>
          <ProfileCard btnText={undefined} />
        </div>
      </div>
    </>
  );
};

export default ValadationInProgress;
