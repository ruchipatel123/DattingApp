import React from 'react';

const MyMatchmakers = () => {
  return (
    <>
      <div className="relative w-full pt-10">
        <h2 className="mb-2 font-raleway text-md font-medium tracking-wide text-blue">
          My Matchmakers
        </h2>
        <button onClick={() => {}} className="absolute right-0 top-10 md:right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.1185 3.89189L11.1892 3.89189V5.83784C8.79521 5.83784 7.09451 5.83978 5.80048 6.00854C4.53267 6.17387 3.79702 6.48434 3.25492 7.00047C3.20495 7.04804 3.15616 7.09684 3.10859 7.1468C2.59246 7.68891 2.28199 8.42455 2.11665 9.69236C1.9479 10.9864 1.94596 12.6871 1.94596 15.0811V20.4324C1.94596 21.0715 1.94802 21.4529 1.98477 21.7263C2.00162 21.8515 2.02146 21.9143 2.03308 21.9425C2.03577 21.9491 2.03787 21.9534 2.03918 21.9559L2.04097 21.959L2.04412 21.9608C2.04663 21.9621 2.05093 21.9642 2.05748 21.9669C2.08573 21.9786 2.14847 21.9984 2.27374 22.0152C2.54711 22.052 2.92852 22.0541 3.56758 22.0541H8.91893C11.3129 22.0541 13.0136 22.0521 14.3076 21.8834C15.5755 21.718 16.3111 21.4075 16.8532 20.8914C16.9032 20.8438 16.952 20.7951 16.9995 20.7451C17.5157 20.203 17.8261 19.4673 17.9915 18.1995C18.1602 16.9055 18.1622 15.2048 18.1622 12.8108H20.1081V12.8815C20.1081 15.1889 20.1082 17.0167 19.9211 18.4512C19.7287 19.9265 19.3237 21.126 18.4089 22.0869C18.3394 22.1599 18.268 22.2312 18.195 22.3008C17.2342 23.2156 16.0346 23.6206 14.5593 23.813C13.1248 24 11.2971 24 8.98965 24L3.50953 24C2.94804 24.0001 2.43323 24.0001 2.01444 23.9438C1.55328 23.8818 1.06585 23.7359 0.664956 23.3351C0.264061 22.9342 0.118183 22.4467 0.0561815 21.9856C-0.000122372 21.5668 -6.16728e-05 21.052 4.51739e-06 20.4905L8.61561e-06 15.0103C-1.07156e-05 12.7029 -2.60198e-05 10.8752 0.187045 9.44072C0.379444 7.96538 0.784437 6.76584 1.69924 5.80499C1.76877 5.73197 1.84008 5.66065 1.91311 5.59113C2.87396 4.67632 4.0735 4.27133 5.54884 4.07893C6.98333 3.89186 8.81105 3.89187 11.1185 3.89189Z"
              fill="#145CA8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.18919 11.3513C5.18919 10.814 5.6248 10.3784 6.16216 10.3784H13.9459C14.4833 10.3784 14.9189 10.814 14.9189 11.3513C14.9189 11.8887 14.4833 12.3243 13.9459 12.3243H6.16216C5.6248 12.3243 5.18919 11.8887 5.18919 11.3513Z"
              fill="#145CA8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.18919 16.5405C5.18919 16.0032 5.6248 15.5676 6.16216 15.5676H10.0541C10.5914 15.5676 11.027 16.0032 11.027 16.5405C11.027 17.0779 10.5914 17.5135 10.0541 17.5135H6.16216C5.6248 17.5135 5.18919 17.0779 5.18919 16.5405Z"
              fill="#145CA8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.1351 0C19.6725 -7.73249e-08 20.1081 0.435615 20.1081 0.972973V3.89189H23.027C23.5644 3.89189 24 4.32751 24 4.86486C24 5.40222 23.5644 5.83784 23.027 5.83784H20.1081V8.75676C20.1081 9.29411 19.6725 9.72973 19.1351 9.72973C18.5978 9.72973 18.1622 9.29411 18.1622 8.75676V5.83784H15.2432C14.7059 5.83784 14.2703 5.40222 14.2703 4.86486C14.2703 4.32751 14.7059 3.89189 15.2432 3.89189H18.1622V0.972973C18.1622 0.435615 18.5978 7.73249e-08 19.1351 0Z"
              fill="#145CA8"
            />
          </svg>
        </button>
      </div>
      <div className="hover:bg-grey-lighter flex cursor-pointer items-center border-b border-blue-400 bg-white px-3">
        <div>
          <img className="h-10 w-10 rounded-full" src="/assets/images/amy.png" alt="" />
        </div>
        <div className="ml-4 flex-1  py-2">
          <div className="items-bottom flex justify-between">
            <p className="font-raleway text-md leading-none tracking-wider  text-black-900">
              Scotty Moore
            </p>
            <p className="text-xs font-light text-black-900"> Yesterday</p>
          </div>
          <p className="mt-1 text-sm font-light leading-none  text-black-900">
            Yeah! You guys would be great! Go for it!
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
              Wendy Patrick
            </p>
            <p className="text-xs font-light text-black-900"> Monday</p>
          </div>
          <p className="mt-1 text-sm font-light leading-none  text-black-900">
            Oh wow! Thanks so much! I’ll definitely steer clear
          </p>
        </div>
      </div>
    </>
  );
};

export default MyMatchmakers;
