import React from 'react';

const ChatBot = () => {
  return (
    <>
      <div className="text-gray-800 flex h-screen-header rounded-2xl border border-blue-300 antialiased md:mr-2">
        <div className="flex h-full w-full flex-row overflow-x-hidden">
          <div className="flex h-full flex-auto flex-col p-5">
            <div className="bg-gray-100 flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl">
              <div className="mb-4 flex h-full flex-col overflow-x-auto">
                <div className="flex h-full flex-col">
                  <span className="text-center font-raleway text-sm">Thu, Jan 11</span>
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-start-1 col-end-8 rounded-lg p-3">
                      <div className="flex flex-row items-center">
                        <div className="relative ml-3 rounded-xl bg-yellow-100 px-5 py-3 text-sm shadow">
                          <div className="font-raleway text-sm tracking-wide">
                            Hey! Nice to meet you!
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-6 col-end-13 rounded-lg p-3">
                      <div className="flex flex-row items-center justify-end">
                        <div className="relative ml-3 rounded-xl bg-blue-400  px-5 py-3 text-sm shadow">
                          <div className="font-raleway text-sm tracking-wide">
                            Hey Amy! How are you?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-24 w-full flex-row items-center rounded-xl bg-white">
                <div className="ml-4 flex-grow">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-full border border-gray-400 pl-4 font-raleway text-sm text-gray placeholder:text-gray focus:border-indigo-300 focus:outline-none"
                      placeholder="Send a message"
                    />
                    <button className="hover:text-gray-600 absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400"></button>
                  </div>
                </div>
                <div className="ml-4">
                  <button className="flex flex-shrink-0 items-center  justify-center rounded-xl px-4 py-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect width="32" height="32" rx="16" fill="#145CA8" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21 13.225L19.4978 14.7948L17.0622 12.2496L17.0622 22.89C17.0622 23.503 16.5866 24 16 24C15.4133 24 14.9378 23.503 14.9378 22.89L14.9378 12.2496L12.5022 14.7948L11 13.225L16 8L21 13.225Z"
                        fill="#FBFDFF"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
