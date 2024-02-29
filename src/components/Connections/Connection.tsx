import React from 'react';

const Connection = () => {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2 font-raleway text-md font-medium tracking-wide text-blue">
          Connections
        </h2>
        <div className="hover:bg-grey-lighter flex cursor-pointer items-center border-b border-blue-400 bg-white px-3">
          <div>
            <img className="h-10 w-10 rounded-full" src="/assets/images/amy.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-md leading-none tracking-wider  text-black-900">
                Amy{' '}
              </p>
              <p className="text-xs font-light text-black-900"> Yesterday</p>
            </div>
            <p className="mt-1 text-sm font-light leading-none  text-black-900">
              Hey Amy! How are you?
            </p>
          </div>
        </div>
        <div className="hover:bg-grey-lighter flex cursor-pointer items-center border-b border-blue-400 bg-white px-3">
          <div>
            <img className="h-10 w-10 rounded-full" src="/assets/images/sophie.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-md leading-none tracking-wider  text-black-900">
                Sophie{' '}
              </p>
              <p className="text-xs font-light text-black-900"> Monday</p>
            </div>
            <p className="mt-1 text-sm font-light leading-none  text-black-900">
              Bonjour! Je m’appelle Sonny
            </p>
          </div>
        </div>
        <div className="hover:bg-grey-lighter flex cursor-pointer items-center border-b border-blue-400 bg-white px-3">
          <div>
            <img className="h-10 w-10 rounded-full" src="/assets/images/joan.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-md leading-none tracking-wider  text-black-900">
                Joan{' '}
              </p>
              <p className="text-xs font-light text-black-900"> 1 Week Ago</p>
            </div>
            <p className="mt-1 text-sm font-light leading-none  text-black-900">
              Some people call me the space cowboy
            </p>
          </div>
        </div>
        <div className="hover:bg-grey-lighter flex cursor-pointer items-center border-b border-blue-400 bg-white px-3">
          <div>
            <img className="h-10 w-10 rounded-full" src="/assets/images/jessica.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-md leading-none tracking-wider  text-black-900">
                Jessica{' '}
              </p>
              <p className="text-xs font-light text-black-900"> Yesterday</p>
            </div>
            <p className="mt-1 text-sm font-light leading-none  text-black-900">
              Some call me the gangster of love
            </p>
          </div>
        </div>
        <div className="hover:bg-grey-lighter flex cursor-pointer items-center border-b border-blue-400 bg-white px-3">
          <div>
            <img className="h-10 w-10 rounded-full" src="/assets/images/hanna.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-md leading-none tracking-wider text-black-900">
                Hanna{' '}
              </p>
              <p className="text-xs font-light text-black-900"> Nov 2023</p>
            </div>
            <p className="mt-1 text-sm font-light leading-none  text-black-900">
              Some people call me Maurice
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connection;
