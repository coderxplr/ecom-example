import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gold-700">
        {/* Placeholder for other items */}
        <div className="flex space-x-4 mb-4 md:mb-0"></div>
        
        {/* Contact details section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <span className="flex-shrink-0">Contact: +91 6302141511</span>
          <a
            href="https://wa.me/+916302141511"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-gold-700 flex-shrink-0"
          >
            <FaWhatsapp size={24} />
            <span>+91 6302141511</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
