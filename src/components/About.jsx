import React from 'react';
import  Services  from "./Services";

const About = () => {
  return (
    <div className="flex flex-col bg-gray-50 font-lexend text-gray-800">
      <div className="flex flex-wrap lg:flex-nowrap w-full">
        {/* Image Section - Hidden on mobile */}
        <div className="lg:w-[40%] hidden md:block bg-gray-200 overflow-hidden shadow-lg">
          <img
            src="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726980899424_Firefly%20a%20group%20of%20workers%20in%20limestone%20quarry%20with%20machines%3B%20mining%20industry%20concept%20a%20view%20from%20to%20%282%29.jpg" 
            alt="Natural Stone"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-[60%] w-full p-8 sm:p-4 text-left bg-white shadow-lg">

          <Services/>
          {/* Title Section */}
          <div className="mt-10 p-8">
            {/* <h1 className="text-4xl font-extrabold text-center text-gray-700 mb-8">
              About Us
            </h1> */}
            {/* <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed ">
              Welcome to Ace Natural Stones, with over 15 years of experience in delivering high-quality Tandur natural stones across India.
            </p> */}

            <div className="space-y-8">
              <ContentSection
                title="Our Mission"
                description="We aim to offer superior natural stones that combine quality and affordability, with reliable doorstep delivery, enhancing spaces with durable and aesthetically pleasing stones."
              />

              <ContentSection
                title="Our Values"
                description={
                  <ul className="list-disc list-inside space-y-2">
                    <li>Integrity: We maintain transparency and ethics in all our dealings.</li>
                    <li>Reliability: We promise to deliver our products and services as per client needs and deadlines.</li>
                    <li>Customer Satisfaction: We strive to exceed customer expectations with exceptional service and high-quality products.</li>
                  </ul>
                }
              />

              <ContentSection
                title="Our Approach"
                description="We provide personalized stone guidance and manage every order with precision, ensuring seamless and timely delivery."
              />

              <ContentSection
                title="Trust and Team"
                description="Our skilled team is dedicated to meeting customer needs with responsive and reliable service. Trust and transparency are the foundation of our business."
              />

              <ContentSection
                title="Customer Commitment"
                description="From selection to delivery, we ensure a smooth and satisfying experience, helping you create beautiful spaces with our premium natural stones."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ContentSection Component
const ContentSection = ({ title, description }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default About;
