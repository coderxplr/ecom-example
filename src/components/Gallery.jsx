import { useState, useEffect } from 'react';
import { gallaryImages } from '../seeders/data';
import SkeletonLoader from './SkeletonLoader';

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // 7-second loader delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'lexand' }}>
      <div className="container mx-auto px-4">
        {/* Responsive grid: 1 column for mobile (sm), 2 for medium (md), 3 for large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {gallaryImages.map((image, index) => (
            <ImageCard image={image} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  // This effect adds a delay to each image appearance based on its index
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 500); // Delay each image by 500ms
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`cursor-pointer relative flex flex-col items-center overflow-hidden shadow-lg m-4 transition-all duration-500 
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} `}
    >
      <div className="relative w-full">
        <img
          className="w-full h-auto object-cover aspect-[16/9] transition-opacity duration-500 ease-in-out"
          alt='gallery-image'
          src={image}
        />
      </div>
    </div>
  );
};

export default Gallery;
