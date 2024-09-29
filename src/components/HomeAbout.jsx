import React from 'react';

const HomeAbout = () => {
  return (
    <div className="flex flex-col bg-white p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'lexand' }}>
      <div className="w-[90%] bg-white rounded-lg p-6 sm:p-8 lg:p-12 text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-2xl font-bold text-center pb-4">ABOUT US</h1>
        <p className="text-lg sm:text-xl text-black mb-6 leading-relaxed">
          Welcome to Ace Natural Stones, your trusted source for premium Tandur natural stones. We are committed to quality, reliability, and exceptional customer service.
        </p>
        <h2 className="text-2xl font-semibold text-gold-700 mb-4">Our Story</h2>
        <p className="text-lg sm:text-xl text-black text-left mb-6 leading-relaxed">
          Ace Natural Stones was founded on the principles of quality, reliability, and customer satisfaction. Our team of experts has years of experience in the natural stone industry, and we're dedicated to delivering top-notch products and personalized support to our clients.
        </p>
        <p className="text-lg sm:text-xl text-black leading-relaxed">
          Our mission is to deliver superior products and build lasting relationships with our clients.
          <a href='/contactus' className='ml-2 p-2 text-blue-700'>Click Here to Contact Us</a>
        </p>
        {/* <a href='/about' className='text-lg sm:text-xl text-blue-600 hover:underline font-semibold'>Click here to know more........</a> */}
      </div>
    </div>
  );
};

export default HomeAbout;
