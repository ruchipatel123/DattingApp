import Slider from 'react-slick';
import ThreadCard from './ThreadCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

const ThreadSliderMatchMaker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <>
      <div className="tread-slider relative">
        <Slider {...settings}>
          {Array.from({ length: 15 }).map((_, index) => (
            <ThreadCard key={index} />
          ))}
        </Slider>
        <button
          onClick={openModal}
          className="absolute bottom-0 left-0 right-0 top-0 z-20"
        ></button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {/* <div className="mx-auto max-h-[60vh] overflow-auto rounded-lg bg-white text-gray  md:w-[670px] md:pt-6">
          <div className="w-full  pb-24  xxl:w-[600px] xxl:pl-10">
            <div className="flex flex-wrap">
              <ProfileGallery />
              <ProfileInformation />
            </div>
          </div>

          <div className="box-shadow sticky bottom-0 flex w-full justify-around bg-white text-center">
            <div className='py-5'>
             <Button  onClick={() => {}} >
                <span className="w-full text-base font-light">Recommend User</span>
             </Button>
             </div> 
          </div>
        </div> */}
        <div className="mx-auto max-h-[60vh] overflow-auto rounded-lg bg-white text-gray  md:w-[476px] md:pt-6">
          <div className="w-full text-center">
            <figure className="inline-block h-64 w-64 overflow-hidden rounded-xl">
              <img src="/assets/images/profile-1.jpg" alt="Profile 1" />
            </figure>
          </div>
          <h2 className="mb-2 px-5 font-raleway text-lg font-semibold text-blue">
            Recommend Abbey to:
          </h2>
          <div className="recomandation-area border-t border-blue-400">
            <div className="flex cursor-pointer items-center border-b border-blue-400 bg-white px-3 py-2 text-black-900 hover:bg-blue hover:text-white">
              <div>
                <img className="h-10 w-10 rounded-full" src="/assets/images/sophie.png" alt="" />
              </div>
              <div className="ml-4 flex-1  py-2">
                <div className="items-bottom flex justify-between">
                  <p className="font-raleway text-md leading-none tracking-wider">Sophie</p>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer items-center border-b border-blue-400 bg-white px-3 py-2 text-black-900 hover:bg-blue hover:text-white">
              <div>
                <img className="h-10 w-10 rounded-full" src="/assets/images/sophie.png" alt="" />
              </div>
              <div className="ml-4 flex-1  py-2">
                <div className="items-bottom flex justify-between">
                  <p className="font-raleway text-md leading-none tracking-wider">Sophie</p>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer items-center border-b border-blue-400 bg-white px-3 py-2 text-black-900 hover:bg-blue hover:text-white">
              <div>
                <img className="h-10 w-10 rounded-full" src="/assets/images/sophie.png" alt="" />
              </div>
              <div className="ml-4 flex-1  py-2">
                <div className="items-bottom flex justify-between">
                  <p className="font-raleway text-md leading-none tracking-wider">Sophie</p>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer items-center border-b border-blue-400 bg-white px-3 py-2 text-black-900 hover:bg-blue hover:text-white">
              <div>
                <img className="h-10 w-10 rounded-full" src="/assets/images/sophie.png" alt="" />
              </div>
              <div className="ml-4 flex-1  py-2">
                <div className="items-bottom flex justify-between">
                  <p className="font-raleway text-md leading-none tracking-wider">Sophie</p>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer items-center border-b border-blue-400 bg-white px-3 py-2 text-black-900 hover:bg-blue hover:text-white">
              <div>
                <img className="h-10 w-10 rounded-full" src="/assets/images/sophie.png" alt="" />
              </div>
              <div className="ml-4 flex-1  py-2">
                <div className="items-bottom flex justify-between">
                  <p className="font-raleway text-md leading-none tracking-wider">Sophie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-shadow sticky bottom-0 flex w-full justify-around bg-white text-center">
            <div className="py-5">
              <Button onClick={() => {}}>
                <span className="w-full text-md font-light">Recommend User</span>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ThreadSliderMatchMaker;
