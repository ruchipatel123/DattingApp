import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewMatches = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-10">
      <h2 className="mb-5 font-raleway text-md font-medium tracking-wide text-blue">New Matches</h2>
      <Slider {...settings} className="new-matches-slider">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="px-2" key={index}>
            <div className="profile_card group relative w-full">
              <div className="bg-img relative overflow-hidden rounded-xl bg-[url('/assets/images/profile-1.jpg')] bg-contain bg-no-repeat pb-[150%] ">
                <div
                  className="bg-img__inner absolute bottom-0 left-0 right-0 px-3 py-4 text-white"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(20, 92, 168, 0.00) 0%, rgba(20, 92, 168, 0.40) 26.43%, rgba(20, 92, 168, 0.80) 73%, #145CA8 100%)',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div className="flex justify-between">
                    <div className="w-[80%]">
                      <div className="flex">
                        <h2 className="font-raleway text-xs font-semibold text-shadow">Name</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewMatches;
