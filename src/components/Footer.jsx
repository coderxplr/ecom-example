import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gold-700 py-6" style={{ fontFamily: 'lexand' }}>
      <div className="container mx-auto text-center">
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          &copy; 2024 All Rights Reserved by Ace Natural Stones.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/ace_natural_stones?igsh=MWloZ200M3J4c2p0dQ==" target="_blank" rel="noopener noreferrer" className="text-gold-700">
            <FaInstagram size={24} className='text-pink-600'/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562053136503&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gold-700">
            <FaFacebook size={24} className='text-blue-600'/>
          </a>
          <a href="https://www.youtube.com/@acenaturalstones" target="_blank" rel="noopener noreferrer" className="text-gold-700">
            <FaYoutube size={24} className='text-red-600'/>
          </a>
        </div>
        <div className="text-center mb-2 text-sm md:text-base lg:text-lg">
          <p>Made By: Mohammad Awaiz</p>
          <a href="https://wa.me/9989386197" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 text-gold-700 m-2">
            <FaWhatsapp size={24} className='text-green-600'/>
            <span>9989386197</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
