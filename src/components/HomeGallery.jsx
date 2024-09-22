import React, { useState, useEffect, useRef } from 'react';

const images = [
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989785_IMG-20240704-WA0138.jpg",
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989790_IMG-20240704-WA0141.jpg",
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989938_IMG-20240711-WA0044.jpg",
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989951_IMG-20240711-WA0045.jpg",
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989962_IMG-20240711-WA0048.jpg",
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989970_IMG-20240711-WA0049.jpg",
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989983_IMG-20240711-WA0058.jpg",
  "https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726400989997_IMG-20240711-WA0065.jpg"
];

const HomeGallery = () => {
  const [isInView, setIsInView] = useState(false); // Tracks if the gallery is in view
  const galleryRef = useRef(null); // Reference to the gallery container

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when the gallery is in the viewport
          observer.disconnect(); // Stop observing after triggering once
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the gallery is visible

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className='font-lexend'>
      <h2 className="text-3xl text-black mb-4 text-center font-lexand">Gallery</h2>
      <div 
        ref={galleryRef} // Reference to the gallery container
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6'
      >
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden h-48 rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Painting ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-700 transform ${
                isInView
                  ? index < 4
                    ? 'animate-slide-left'  // First 4 images slide from the left
                    : 'animate-slide-right' // Last 4 images slide from the right
                  : 'opacity-0'  // Initially invisible
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;
