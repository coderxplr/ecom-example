import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
// import { Link } from "react-router-dom"; // Make sure to install react-router-dom

const ContactSummary = () => {
  return (
    <div className="flex flex-col bg-white p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'lexand' }} >
        <div className="w-[90%] bg-white rounded-lg p-6 sm:p-8 lg:p-12 text-left">

      {/* Connect with Us */}
      <h1 className="text-2xl sm:text-xl lg:text-2xl font-bold text-center pb-4">CONTACT US</h1>
      <div className="mb-8">
        <h2 className="text-2xl sm:text-xl font-semibold text-gold-700 mb-4">
          Connect with Us
        </h2>
        <p className="text-lg sm:text-xl text-black mb-4">
          We're passionate about helping you find the perfect natural stone for
          your project. Reach out to us today and let's bring your vision to
          life!
        </p>
      </div>

      {/* Our Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-xl font-semibold text-gold-700 mb-4">
          Contact Information
        </h2>
        <div className="flex flex-row items-center text-lg sm:text-xl text-black mb-4">
          <FaMapMarkerAlt className="text-gold-700 mr-2 w-10 h-10" />
          <p className="text-wrap">
            Ace Natural Stones, Gouthapur Road, Tandur, Telangana, 501141
          </p>
        </div>
        <div className="flex flex-col text-lg sm:text-xl text-black mb-4">
          <div className="flex flex-row pb-3">
            <FaPhoneAlt className="text-gold-700 mr-2" />
            <a href="tel:+919985171754" className="leading-none">
              +91 9985171754
            </a>
          </div>
          <div className="flex flex-row">
            <FaPhoneAlt className="text-gold-700 mr-2 " />
            <a href="tel:+916302141511" className="leading-none">
              +91 6302141511
            </a>
          </div>
        </div>
        <div className="flex text-lg sm:text-xl text-black mb-4">
          <FaEnvelope className="text-gold-700 mr-2 mt-1.5" />
          <span>acenaturalstones@gmail.com</span>
        </div>
      </div>

      {/* Stay Connected */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-xl font-semibold text-gold-700 mb-4">
          Stay Connected
        </h2>
        <p className="text-lg sm:text-xl text-black mb-4">
          Join our community and stay up-to-date on the latest news, trends, and
          promotions:
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.instagram.com/ace_natural_stones?igsh=MWloZ200M3J4c2p0dQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-600 text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61562053136503&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-600 text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/@acenaturalstones"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-600 text-2xl" />
          </a>
          <a
            href="https://wa.me/message/OCUCMZG4DRCPF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-600 text-2xl" />
          </a>
        </div>
      </div>

      {/* Office Hours */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-xl font-semibold text-gold-700 mb-4">
          Office Hours
        </h2>
        <p className="text-lg sm:text-xl text-black mb-4">
          Monday to Saturday: 9:30 AM - 6:30 PM
          <br />
          Sunday: 9:30 AM - 1:00 PM
        </p>
      </div>

      {/* Response Note */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">
          We Can't Wait to Hear from You!
        </h2>
        <p className="text-lg sm:text-xl text-black mb-4">
          Our dedicated team is ready to assist you with:
        </p>
        <ul className="list-disc pl-6 text-lg sm:text-xl text-black mb-4">
          <li>Product inquiries and recommendations</li>
          <li>Custom orders and quotes</li>
          <li>General questions and support</li>
          <li>Collaboration and partnership opportunities</li>
        </ul>
        <p className="text-lg sm:text-xl text-black">
          Thank you for choosing ACE NATURAL STONES!
        </p>
      </div>

      {/* Link to Full Contact Page */}
      {/* <Link
        to="/contactus"
        className="text-lg sm:text-xl text-blue-600 hover:underline font-semibold"
      >
        Click here to know more.....
      </Link> */}
        </div>
    </div>
  );
};

export default ContactSummary;
