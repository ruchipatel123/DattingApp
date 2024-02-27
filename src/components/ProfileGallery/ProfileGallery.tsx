import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProfileGallery = () => {
  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full px-4">
      {/* Gallery Grid for Desktop */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4">
        <div className="w-full">
          <figure className="h-full w-full overflow-hidden rounded-xl">
            <img src="/assets/images/profile-1.jpg" alt="Profile 1" />
          </figure>
        </div>
        <div className="h-full w-full  md:grid md:grid-cols-2 md:gap-4">
          <figure className="overflow-hidden rounded-xl">
            <img src="/assets/images/profile-1.jpg" alt="Profile 1" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img src="/assets/images/profile-1.jpg" alt="Profile 1" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img src="/assets/images/profile-1.jpg" alt="Profile 1" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img src="/assets/images/profile-1.jpg" alt="Profile 1" />
          </figure>
        </div>
      </div>

      {/* Slider for Mobile */}
      <div className="w-full md:hidden">
        <Slider {...sliderSettings}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="px-2">
              <img
                src={`/assets/images/profile-1.jpg`}
                alt={`Profile ${index}`}
                className="h-auto w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProfileGallery;
