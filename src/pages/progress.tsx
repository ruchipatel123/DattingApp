import Button from 'components/Button/Button';
import { setCookie } from 'cookies-next';
import React from 'react';

const Progress = ({ setStage, stage }) => {
  return (
    <div>
      <div className="flex h-screen  flex-wrap items-center justify-center bg-[url('/assets/images/progress-img.jpg')] bg-cover bg-center px-10 py-10 md:items-end md:justify-end">
        <div className="progress-container bg-white-transperent flex flex-col items-center justify-center rounded px-4 pt-4 shadow-md md:px-5">
          <h2 className="text-md text-blue">You’re {stage}0% of the way through!</h2>
          <div className="btn-wrap mt-4 flex  flex-wrap justify-center space-x-2  md:space-x-7">
            <div className="mb-5 ">
              <Button
                onClick={() => {
                  setStage(stage - 1);
                  setCookie('stage', stage - 1);
                }}
                type="primary"
                size="lg"
              >
                Go Back
              </Button>
            </div>
            <div className="mb-5">
              <Button
                onClick={() => {
                  setStage(stage + 1);
                  setCookie('stage', stage + 1);
                }}
                type="primary"
                size="lg"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
