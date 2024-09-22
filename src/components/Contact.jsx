import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col bg-gray-50 font-lexend text-gray-800">
      <div className="flex flex-wrap lg:flex-nowrap w-full">
        {/* Image Section - Hidden on mobile */}
        <div className="lg:w-[40%] hidden md:block bg-gray-200 overflow-hidden shadow-lg">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726981391152_833063b9-4287-4af2-96f8-91bd23a4ea3c.png"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-[60%] w-full p-8 sm:p-4 text-left bg-white shadow-lg">
          <div className="lg:p-10">
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              We’re here to help with any questions or requests you may have. Please use the contact information below to get in touch with us.
            </p>

            <div className="space-y-8">
              <ContentSection
                title="Contact Information"
                description={
                  <>
                    <ContactItem
                      icon={<FaMapMarkerAlt className="text-gold-700 w-6 h-6 mr-2" />}
                      text="Ace Natural Stones, Gouthapur, Tandur, Telangana, 501141, India"
                    />
                    <ContactItem
                      icon={<FaPhoneAlt className="text-gold-700 w-6 h-6 mr-2" />}
                      text="+91 6302 141511"
                      link="tel:+916302141511"
                    />
                    <ContactItem
                      icon={<FaPhoneAlt className="text-gold-700 w-6 h-6 mr-2" />}
                      text="+91 9985 171363"
                      link="tel:+919985171363"
                    />
                    <ContactItem
                      icon={<FaEnvelope className="text-gold-700 w-6 h-6 mr-2" />}
                      text="acenaturalstones@gmail.com"
                      link="mailto:acenaturalstones@gmail.com"
                    />
                  </>
                }
              />

              <ContentSection
                title="Office Hours"
                description={
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Monday to Saturday: 9:30 AM - 6:30 PM <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                }
              />

              <ContentSection
                title="Connect with Us"
                description={
                  <div className="flex space-x-6 text-2xl">
                    <SocialIcon
                      href="https://wa.me/message/OCUCMZG4DRCPF1"
                      icon={<FaWhatsapp className="text-green-600" />}
                    />
                    <SocialIcon
                      href="https://www.youtube.com/@acenaturalstones"
                      icon={<FaYoutube className="text-red-600" />}
                    />
                    <SocialIcon
                      href="https://www.facebook.com/profile.php?id=61562053136503&mibextid=ZbWKwL"
                      icon={<FaFacebook className="text-blue-600" />}
                    />
                    <SocialIcon
                      href="https://www.instagram.com/ace_natural_stones?igsh=MWloZ200M3J4c2p0dQ=="
                      icon={<FaInstagram className="text-pink-600" />}
                    />
                  </div>
                }
              />

              <ContentSection
                title="Map and Directions"
                description={
                  <a
                    href="https://maps.app.goo.gl/dEJi5nqwS3kZvKin6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start text-lg sm:text-xl text-black"
                  >
                    <img
                      src="https://i.imghippo.com/files/hfCpG1723916505.png"
                      alt="Google Map Location"
                      className="rounded-lg shadow-md mb-4 w-full sm:w-[50%] lg:w-[70%] h-[20vh] sm:h-[30vh] lg:h-[400px]"
                    />
                    <span className="underline text-blue-600">View on Google Maps</span>
                  </a>
                }
              />

              <ContentSection
                title="Thank You"
                description="Thank you for reaching out to Ace Natural Stones. We look forward to assisting you!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ContentSection Component (Reused for Contact sections)
const ContentSection = ({ title, description }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="text-lg sm:text-xl text-gray-700 leading-relaxed">
      {description}
    </div>
  </div>
);

// ContactItem Component for Contact Details
const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center mb-4">
    {icon}
    {link ? (
      <a href={link} className="underline text-blue-600">
        {text}
      </a>
    ) : (
      <p>{text}</p>
    )}
  </div>
);

// SocialIcon Component for social media icons
const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
    {icon}
  </a>
);

export default Contact;
