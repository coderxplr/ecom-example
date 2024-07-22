import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banners = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const goNext = () => {
    sliderRef.current.slickNext();
  };

  const goPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-90 overflow-hidden relative">
      <style>
        {`
          .slick-slide img {
            height: 500px; /* Default height for desktop */
          }

          @media (max-width: 768px) {
            .slick-slide img {
              height: 400px; /* Increased height for mobile */
            }
          }
        `}
      </style>
      <Slider ref={sliderRef} {...settings}>
        <div className="relative">
          <img src="https://www.gharjunction.com/img/blog/351.jpg" alt="Slide 1" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
            Welcome to Our Website
          </div>
        </div>
        <div className="relative">
          <img src="https://images.jdmagicbox.com/quickquotes/images_main/-012e9fhm.gif" alt="Slide 2" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
            Discover Our Services
          </div>
        </div>
        <div className="relative">
          <img src="https://www.tileexperience.co.uk/media/catalog/product/t/u/tumbnail_540f5174-49c0-4616-a4b2-37a0df9a81a1.jpg?store=default&image-type=image" alt="Slide 3" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
            Contact Us Today
          </div>
        </div>
      </Slider>
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Banners;
