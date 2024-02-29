import Link from 'next/link';
import { useSelector } from 'react-redux';

const Banner = () => {
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  return (
    <div className="py-10 md:py-16">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="mb-2 w-full md:w-1/2">
            <figure className="relative">
              <img src="/assets/images/heart-of-images.png" alt="banner" />
            </figure>
          </div>
          <div className="w-full md:w-1/2 md:px-5 xl:pl-10">
            <h1 className=" mb-4 font-raleway text-lg font-bold leading-tight text-blue">
              Common Threads Leading To Uncommon Connections
            </h1>
            <blockquote className="mb-10 ml-10 border-l border-blue pl-5 text-md leading-none text-blue sm:pr-14 md:mb-20 md:ml-24 md:pl-10 xl:mb-[125px] ">
              Dating never felt this comfortable, I love it, my friends are excited to have helped
              me, and I found someone I really connect with.
            </blockquote>
            <h3 className="text-center font-josefin text-lg font-medium text-blue">Get Started!</h3>
            <div className="m-auto flex flex-wrap items-center justify-between bg-[#E1EEFC] xl:w-[86%] ">
              <Link
                href={isLoggedIn ? '/discover' : '/register'}
                className="group w-full bg-[#E1EEFC] px-10 py-3 text-center font-medium text-white hover:bg-blue sm:w-1/2"
              >
                <figure className="inline-block">
                  <img
                    src="/assets/images/discovery-hearts.svg"
                    className="img-fluid"
                    alt="Match"
                  />
                </figure>
                <span className="block text-sm font-normal text-black group-hover:text-white">
                  Find A Match
                </span>
              </Link>
              <Link
                href={isLoggedIn ? '/discover' : '/register'}
                className="group w-full bg-[#E1EEFC] px-10 py-3 text-center font-medium text-white hover:bg-blue sm:w-1/2"
              >
                <figure className="inline-block">
                  <img
                    src="/assets/images/match-heart.svg"
                    className="img-fluid"
                    alt="Matchmaker"
                  />
                </figure>
                <span className="block text-sm font-normal text-black group-hover:text-white">
                  Be A Matchmaker
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
