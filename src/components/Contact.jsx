import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailTo = `mailto:acenaturalstones@gmail.com?subject=${encodeURIComponent('Enquiry from website')}&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailTo;
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'lexand' }}>
      <div className="w-full bg-white rounded-lg p-6 sm:p-8 lg:p-12 text-left">
        {/* Contact Us Title */}
        {/* <h1 className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gold-700 mb-8"> */}
          {/* CONTACT US
        </h1> */}

        {/* Connect with Us */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Connect with Us</h2>
          <p className="text-lg sm:text-xl text-black mb-4">
            We're passionate about helping you find the perfect natural stone for your project. Reach out to us today and let's bring your vision to life!
          </p>
        </div>

        {/* Our Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Contact Information</h2>
          <div className="flex flex-row items-center text-lg sm:text-xl text-black mb-4">
            <FaMapMarkerAlt className="text-gold-700 mr-2 w-10 h-10" />
            <p className='text-wrap'>
            Ace Natural Stones, Gouthapur Road, Tandur, Telangana, 501141

            </p>
          </div>
          <div className="flex flex-col text-lg sm:text-xl text-black mb-4">
            <div className='flex flex-row pb-3'>
            <FaPhoneAlt className="text-gold-700 mr-2" />
            <a href="tel:+919985171754" className="leading-none">
              +91 9985171754
            </a>
            </div>
            <div className='flex flex-row'>
            <FaPhoneAlt className="text-gold-700 mr-2 " />
            <a href="tel:+916302141511" className="leading-none">
              +91 6302141511
            </a>
            </div>
          </div>
          <div className="flex text-lg sm:text-xl text-black mb-4">
            <FaEnvelope className="text-gold-700 mr-2 mt-1.5" />
            <span >acenaturalstones@gmail.com</span>
          </div>
        </div>

        {/* Send Us a Message */}
        <div className="mb-8 w-[80%]">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Send Us a Message</h2>
          <p className="text-lg sm:text-xl text-black mb-4">
            Please leave your full name & contact details, along with a little bit about your project and what you are looking for, so a team member can call you back at earliest.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendEmail();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-lg sm:text-xl font-semibold text-black mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-lg sm:text-xl font-semibold text-black mb-2" htmlFor="phone">
                Phone number:
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-lg sm:text-xl font-semibold text-black mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gold-700 text-white font-semibold rounded-lg hover:bg-gold-800"
            >
              Send Email
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Find Us Here</h2>
          <a
            href="https://maps.app.goo.gl/dEJi5nqwS3kZvKin6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-lg sm:text-xl text-black"
          >
            <img
              src="https://i.imghippo.com/files/hfCpG1723916505.png"
              alt="Google Map Location"
              className="rounded-lg shadow-md mb-4 w-[50%] h-[5%]"
            />
            <span className="underline text-blue-600">View on Google Maps</span>
          </a>
        </div>

        {/* Stay Connected */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Stay Connected</h2>
          <p className="text-lg sm:text-xl text-black mb-4">
            Join our community and stay up-to-date on the latest news, trends, and promotions:
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://www.instagram.com/ace_natural_stones?igsh=MWloZ200M3J4c2p0dQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-2xl" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61562053136503&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-2xl" />
            </a>
            <a href="https://www.youtube.com/@acenaturalstones" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 text-2xl" />
            </a>
            <a href="https://wa.me/message/OCUCMZG4DRCPF1" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-600 text-2xl" />
            </a>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Office Hours</h2>
          <p className="text-lg sm:text-xl text-black mb-4">
            Monday to Saturday: 9:30 AM - 6:30 PM
            <br />
            Sunday: 9:30 AM - 1:00 PM
          </p>
        </div>

        {/* Response Note */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">We Can't Wait to Hear from You!</h2>
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
            Expect a response within 24 hours. Thank you for choosing ACE NATURALSTONES!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
