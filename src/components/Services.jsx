import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col bg-gray-50 font-lexend text-gray-800">
      <div className="w-full mx-auto p-8 sm:p-4 text-left bg-white">
        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed ">
          Welcome to Ace Natural Stones, with over 15 years of experience in
          delivering high-quality Tandur natural stones across India.
        </p>
        {/* Title Section */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Services
        </h1>

        {/* Services List */}
        <div className="space-y-12">
          <ServiceItem
            title="Tandur Natural Stone Supply"
            description="Quality Natural stones delivered across India in various finishes, colors, and sizes, perfect for indoor and outdoor applications. We ensure high-quality, durable stones and reliable delivery to meet your project needs."
            imgSrc="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726983135279_01f8ed4e-cea8-4e87-97f1-62886748e06a%20%281%29.png"
          />

          <ServiceItem
            title="Flooring Installation"
            description="Expert limestone flooring installation, tailored to your specific requirements. From consultation to completion, we ensure a flawless and durable floor for your home or commercial space."
            imgSrc="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726983226430_04174a42-92c2-4545-b005-db113fc46c10.png"
          />

          <ServiceItem
            title="Personalized Stone Guidance"
            description="Professional advice to help you choose the perfect stone for your project, considering style, usage, and durability, ensuring your vision becomes reality."
            imgSrc="https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726983280162_28c9c805-b97c-4da7-bbbf-dee39c7f6f1d.png"
          />
        </div>
      </div>
    </div>
  );
};

// ServiceItem Component for individual services
const ServiceItem = ({ title, description, imgSrc }) => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
    {/* Image Section */}
    <div className="lg:w-1/3 w-full">
      <img
        src={imgSrc}
        alt={title}
        className="rounded-lg shadow-md w-full h-auto max-h-60 object-cover lg:max-h-80"
      />
    </div>

    {/* Text Section */}
    <div className="lg:w-2/3 items-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default Services;
