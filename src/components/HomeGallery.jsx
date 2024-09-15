import React, { useState, useEffect } from 'react';

const images = [
    { id: 1, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336801832_20240702_131258.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802032_20240706_130324.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802087_20240715_140824.jpg', alt: 'Image 3' },
    { id: 4, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802137_20240629_131008.jpg', alt: 'Image 4' },
    { id: 5, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802156_20240629_133407.jpg', alt: 'Image 5' },
    { id: 6, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802238_20240629_134759.jpg', alt: 'Image 6' },
    { id: 7, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802288_20240706_130413.jpg', alt: 'Image 7' },
    { id: 8, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802325_20240707_111219.jpg', alt: 'Image 8' },
    { id: 9, src: 'https://acenaturalstns.s3.ap-south-1.amazonaws.com/uploads/1726336802358_20240715_140914.jpg', alt: 'Image 9' },
  ];

const App = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  // Incrementally show images with delay
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleImages((prevVisible) => {
        const nextImage = images[prevVisible.length];
        if (nextImage) {
          return [...prevVisible, nextImage];
        }
        return prevVisible;
      });
    }, 500); // Delay between each image appearance

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      {visibleImages.map((image) => (
        <div
          key={image.id}
          className="p-2 opacity-0 animate-fade-in duration-700"
          style={{ animationDelay: `${image.id * 0.5}s` }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            style={{ width: getImageSize(image.id).width, height: getImageSize(image.id).height }}
          />
        </div>
      ))}
    </div>
  );
};

// Helper function to set different sizes for images
const getImageSize = (id) => {
  switch (id) {
    case 1:
      return { width: '300px', height: '400px' };
    case 2:
      return { width: '250px', height: '300px' };
    case 3:
      return { width: '350px', height: '350px' };
    case 4:
      return { width: '300px', height: '300px' };
    case 5:
      return { width: '400px', height: '300px' };
    default:
      return { width: '300px', height: '300px' };
  }
};

export default App;
