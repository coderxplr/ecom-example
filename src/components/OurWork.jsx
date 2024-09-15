import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { workImages } from '../seeders/data';
import SkeletonLoader from './SkeletonLoader';


const OurWork = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a 7-second loading state
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
          {workImages.map((image, index) => (
            <ImageCard image={image} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Image card with Framer Motion for animation
const ImageCard = ({ image, index }) => {
  return (
    <motion.div
      // Staggered animation for each image based on its index
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.2, // Staggering by 200ms per image
        duration: 0.6,
        ease: 'easeInOut'
      }}
      className="cursor-pointer relative flex flex-col items-center overflow-hidden shadow-lg m-4 transition-all duration-500"
    >
      <div className="relative w-full">
        <img
          className="w-full h-auto object-cover aspect-[16/9] transition-opacity duration-500 ease-in-out"
          alt="gallery-image"
          src={image}
        />
      </div>
    </motion.div>
  );
}

export default OurWork;
