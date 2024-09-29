import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banners = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1727591199621_b1.jpg"
            alt="Slide 1"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white bg-black bg-opacity-50">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4 text-white">
              Ace Natural Stones: Quality You Can Rely On
            </h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] text-white">
              Delivering quality and reliability for over a decade.
            </p>
            <button className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300">
              Our Products
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1727591199598_b2.jpg"
            alt="Slide 2"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white bg-black bg-opacity-50">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">
              15+ Years of Stone Expertise{" "}
            </h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
              Quality and craftsmanship you can trust.
            </p>
            <a
              href="/products"
              className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Products
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1727591199541_b3.jpg"
            alt="Slide 3"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white bg-black bg-opacity-50">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">
              Unearth Excellence at Our Quarry
            </h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
              Experience the art of stone-making right from our quarry.
            </p>
            <a
              href="/products"
              className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Products
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1727591199501_b4.jpg"
            alt="Slide 4"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white bg-black bg-opacity-50">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">
              From Quarry to Factory{" "}
            </h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
              Transforming raw stone into exquisite products.
            </p>
            <a
              href="/products"
              className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Products
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1727591199468_b5.jpg"
            alt="Slide 5"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white bg-black bg-opacity-50">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">
              Quality Stones Delivered
            </h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
              Providing top-quality natural stones for every project.
            </p>
            <a
              href="/products"
              className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Products
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1727591199452_b6.jpg"
            alt="Slide 6"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white bg-black bg-opacity-50">
            <h1 className="lg:text-4xl md:text-2xl font-bold mb-4">
              Flooring That Lasts a Lifetime{" "}
            </h1>
            <p className="lg:text-lg md:text-sm mb-8 lg:w-[60%] ">
              Durable, elegant, and timeless flooring options for every space.
            </p>
            <a
              href="/gallery"
              className="border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Gallery
            </a>
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
