import React from 'react';
import { FaPhone } from 'react-icons/fa';
import logo from '../Assets/images/logo.png'; // Update the path to your new logo

const TopBar = () => {
  return (
    <div className="bg-gray-100 py-4" style={{ fontFamily: 'lexand' }}>
      <div className="container mx-auto px-4 flex justify-between items-center text-gold-700">
        {/* Logo section */}
        <div >
          <a href='/'>
          <img src={logo} alt="Logo" className="h-10 w-15 cursor-pointer pl-2" />
          </a>
          {/* <span className="text-xl md:text-3xl font-bold" style={{ fontFamily: 'cursive' }}>Ace Natural Stones</span> */}
        </div>

        {/* Contact details section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhone size={24} />
              <a href="tel:+916302141511" className="leading-none">
                +91 6302141511
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone size={24} />
              <a href="tel:+919985171754" className="leading-none">
                +91 9985171754
              </a>
            </div>
          </div>
          <div className="flex flex-col md:hidden items-center space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhone size={30} />
              <div className="flex flex-col">
                <a href="tel:+916302141511" className="leading-none text-sm mb-2 md:text-base sm:text-sm">
                  +91 6302141511
                </a>
                <a href="tel:+919985171754" className="leading-none text-sm md:text-base sm:text-sm">
                  +91 9985171754
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href='/'>
      <span className="text-xl md:text-3xl font-bold text-gold-700 ml-2" style={{ fontFamily: 'lexand' }}>Ace Natural Stones</span>
      {/* <span className="text-xl md:text-3xl pl-10 text-gold-700" style={{ fontFamily: 'lexand' }}>𝓐𝓬𝓮 𝓝𝓪𝓽𝓾𝓻𝓪𝓵 𝓢𝓽𝓸𝓷𝓮𝓼</span> */}
      {/* <span className="text-xl md:text-xl font-bold pl-5 text-gold-700">𝔸𝕔𝕖 ℕ𝕒𝕥𝕦𝕣𝕒𝕝 𝕊𝕥𝕠𝕟𝕖𝕤</span> */}
      </a>
    </div>
  );
};

export default TopBar;
