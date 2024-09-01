import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banners = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState([true, true, true]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedLoading = [...loading];
      updatedLoading[0] = false;
      setLoading(updatedLoading);
    }, 1000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    afterChange: (current) => {
      if (loading[current]) {
        const updatedLoading = [...loading];
        setTimeout(() => {
          updatedLoading[current] = false;
          setLoading(updatedLoading);
        }, 5000); // 5 seconds delay
      }
    },
  };

  const goNext = () => {
    sliderRef.current.slickNext();
  };

  const goPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-90 h-[400px] overflow-hidden relative" style={{ fontFamily: 'lexand' }}>
      <style>
        {`
          .slick-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 400px; /* Set height for all screens */
          }

          iframe {
            width: 100%;
            height: 100%; /* Ensures the iframe takes the full space */
          }

          @media (max-width: 768px) {
            .slick-slide {
              height: 400px; /* Adjusted height for mobile */
            }
          }

          .dot-loader {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .dot-loader div {
            width: 10px;
            height: 10px;
            margin: 5px;
            background-color: white;
            border-radius: 50%;
            animation: dot-bounce 1.4s infinite ease-in-out both;
          }

          @keyframes dot-bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }

          .dot-loader div:nth-child(1) {
            animation-delay: -0.32s;
          }
          .dot-loader div:nth-child(2) {
            animation-delay: -0.16s;
          }
        `}
      </style>
      <Slider ref={sliderRef} {...settings}>
        {[0, 1, 2].map((index) => (
          <div className="relative bg-gray-800 h-[400px]" key={index}>
            {loading[index] ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 h-[400px]">
                <div className="dot-loader">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              <iframe
                src={
                  activeSlide === index
                    ? index === 0
                      ? "https://www.youtube.com/embed/2dFQrN7z6dk?autoplay=1&mute=1&loop=1&playlist=2dFQrN7z6dk"
                      : index === 1
                      ? "https://www.youtube.com/embed/dnO3XFOt3rU?autoplay=1&mute=1&loop=1&playlist=dnO3XFOt3rU"
                      : "https://www.youtube.com/embed/BilVQOHvF_4?autoplay=1&mute=1&loop=1&playlist=BilVQOHvF_4"
                    : ""
                }
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Video ${index + 1}`}
              ></iframe>
            )}
          </div>
        ))}
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
