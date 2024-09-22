import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="w-90 overflow-hidden relative font-lexend">
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
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726983135279_01f8ed4e-cea8-4e87-97f1-62886748e06a%20%281%29.png"
            alt="Slide 1"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">Tandur Natural Stone Supply</h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
             Quality Natural stones delivered across India in various finishes, colors, and sizes, perfect for indoor and outdoor applications. We ensure high-quality, durable stones and reliable delivery to meet your project needs.
            </p>
            <button className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300">
              Our Products
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726983226430_04174a42-92c2-4545-b005-db113fc46c10.png"
            alt="Slide 2"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">Flooring Installation</h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
            Expert limestone flooring installation, tailored to your specific requirements. From consultation to completion, we ensure a flawless and durable floor for your home or commercial space..
            </p>
            <button className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300">
            Our Products
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726983280162_28c9c805-b97c-4da7-bbbf-dee39c7f6f1d.png"
            alt="Slide 3"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">Personalized Stone Guidance</h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
            Professional advice to help you choose the perfect stone for your project, considering style, usage, and durability, ensuring your vision becomes reality.
            </p>
            <button className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300">
            Our Products
            </button>
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
