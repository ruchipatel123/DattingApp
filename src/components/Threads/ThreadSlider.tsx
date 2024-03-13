import Slider from 'react-slick';
import ThreadCard from './ThreadCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ProfileGallery from 'components/Profile/ProfileGallery';
import ProfileInformation from 'components/Profile/ProfileInformation';

const ThreadSlider = () => {
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
        <div className="mx-auto max-h-[60vh] overflow-auto rounded-lg bg-white text-gray  md:w-[670px] md:pt-6">
          <div className="w-full  pb-24  xxl:w-[600px] xxl:pl-10">
            <div className="flex flex-wrap">
              <ProfileGallery />
              <ProfileInformation />
            </div>
          </div>

          <div className="box-shadow sticky bottom-0 flex w-full justify-around bg-white text-center">
            <button className="flex flex-col items-center px-5 py-2">
              <img src="/assets/images/like.svg" alt="Like" />
              <span className="w-full text-base font-light">Interested</span>
            </button>
            <button className="flex flex-col  items-center px-5 py-2">
              <img src="/assets/images/valadate-circle.svg" alt="Like" />
              <span className="w-full text-base font-light">Request Valadation</span>
            </button>
            <button className="flex flex-col  items-center px-5 py-2">
              <img src="/assets/images/not-interested.svg" alt="Like" />
              <span className="w-full text-base font-light">Not Interested</span>
            </button>
            {/* <div className='py-5'>
             <Button  onClick={() => {}} >
                <span className="w-full text-base font-light">Recommend User</span>
             </Button>
             </div> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ThreadSlider;
