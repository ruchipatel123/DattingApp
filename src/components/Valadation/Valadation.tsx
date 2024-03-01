import SliderTrack from 'components/SliderTrack/SliderTrack';
import React from 'react';

const Valadation = () => {
  return (
    <div className="mx-3 mt-10 flex w-full flex-wrap rounded-lg border border-yellow p-5 ">
      <div className="flex w-full justify-between">
        <h2 className="mb-5  font-raleway text-sm tracking-wide text-blue">Valadation</h2>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 8.5V5H9.5V8.5H13V9.5H9.5V13H8.5V9.5H5V8.5H8.5ZM10 1H8C6.08611 1 4.75129 1.00212 3.74416 1.13753C2.76579 1.26907 2.2477 1.50966 1.87868 1.87868C1.50966 2.2477 1.26907 2.76579 1.13753 3.74416C1.00212 4.75129 1 6.08611 1 8V10C1 11.9139 1.00212 13.2487 1.13753 14.2558C1.26907 15.2342 1.50966 15.7523 1.87868 16.1213C2.2477 16.4903 2.76579 16.7309 3.74416 16.8625C4.75129 16.9979 6.08611 17 8 17H10C11.9139 17 13.2487 16.9979 14.2558 16.8625C15.2342 16.7309 15.7523 16.4903 16.1213 16.1213C16.4903 15.7523 16.7309 15.2342 16.8625 14.2558C16.9979 13.2487 17 11.9139 17 10V8C17 6.08611 16.9979 4.75129 16.8625 3.74416C16.7309 2.76579 16.4903 2.2477 16.1213 1.87868C15.7523 1.50966 15.2342 1.26907 14.2558 1.13753C13.2487 1.00212 11.9139 1 10 1ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8V10C0 13.7712 0 15.6569 1.17157 16.8284C2.34315 18 4.22876 18 8 18H10C13.7712 18 15.6569 18 16.8284 16.8284C18 15.6569 18 13.7712 18 10V8C18 4.22876 18 2.34315 16.8284 1.17157C15.6569 0 13.7712 0 10 0H8C4.22876 0 2.34315 0 1.17157 1.17157Z"
              fill="#145CA8"
            />
          </svg>
        </span>
      </div>
      <div className="hover:bg-grey-lighter flex w-full flex-wrap items-center border-b border-blue-400 bg-white">
        <div className="flex w-full pt-2">
          <div>
            <img className="h-6 w-6 rounded-full" src="/assets/images/amy.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-sm leading-none tracking-wider  text-black-900">
                Michelle Green
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  flex-wrap py-2">
          <p className="py- font-raleway text-sm leading-none tracking-wider  text-black-900">
            Personality
          </p>
          <div className="slider w-full">
            <SliderTrack leftLabel={'Maybe Not'} rightLabel={'Perfect Match'} />
          </div>
        </div>
        <div className="flex w-full flex-wrap py-2">
          <p className="font-raleway text-sm leading-none tracking-wider  text-black-900">
            Interests
          </p>
          <div className="slider w-full">
            <SliderTrack leftLabel={'Maybe Not'} rightLabel={'Perfect Match'} />
          </div>
        </div>
        <div className="flex w-full flex-wrap py-2">
          <p className="font-raleway text-sm leading-none tracking-wider  text-black-900">
            Lifestyle
          </p>
          <div className="slider w-full">
            <SliderTrack leftLabel={'Maybe Not'} rightLabel={'Perfect Match'} />
          </div>
        </div>
      </div>
      <div className="hover:bg-grey-lighter flex w-full flex-wrap items-center border-b border-blue-400 bg-white">
        <div className="flex w-full pt-2">
          <div>
            <img className="h-6 w-6 rounded-full" src="/assets/images/amy.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-sm leading-none tracking-wider  text-black-900">
                Joao Powell
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full  flex-wrap py-2">
          <p className="py- font-raleway text-sm leading-none tracking-wider  text-black-900">
            Personality
          </p>
          <div className="slider w-full">
            <SliderTrack leftLabel={'Maybe Not'} rightLabel={'Perfect Match'} />
          </div>
        </div>
        <div className="flex w-full flex-wrap py-2">
          <p className="font-raleway text-sm leading-none tracking-wider  text-black-900">
            Interests
          </p>
          <div className="slider w-full">
            <SliderTrack leftLabel={'Maybe Not'} rightLabel={'Perfect Match'} />
          </div>
        </div>
        <div className="flex w-full flex-wrap py-2">
          <p className="font-raleway text-sm leading-none tracking-wider  text-black-900">
            Lifestyle
          </p>
          <div className="slider w-full">
            <SliderTrack leftLabel={'Maybe Not'} rightLabel={'Perfect Match'} />
          </div>
        </div>
      </div>

      <div className="hover:bg-grey-lighter flex w-full flex-wrap items-center border-b  border-blue-400 bg-white">
        <div className="flex w-full pt-2">
          <div>
            <img className="h-6 w-6 rounded-full" src="/assets/images/amy.png" alt="" />
          </div>
          <div className="ml-4 flex-1  py-2">
            <div className="items-bottom flex justify-between">
              <p className="font-raleway text-sm leading-none tracking-wider  text-black-900">
                Zander Felix
              </p>
              <p>(No Response Yet)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valadation;
