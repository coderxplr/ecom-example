// components/Gallery.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../seeders/data'; // Update this with your actual data import

const Gallery = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const extractedImages = productsData.map(product => {
      const firstVariant = product.Variants[0]; // Get the first variant
      const firstImage = firstVariant.Colors[0]?.Images[1]; // Extract the first image from the first variant

      return {
        id: product.ProductID,
        title: product.ProductName,
        src: firstImage,
        description: product.Description,
        category: product.Category,
        type: product.Type,
        finish: product.Finish,
      };
    });
    setImages(extractedImages);
  }, []);

  const handleImageClick = (image) => {
    // Navigation logic for image click
    navigate(`/product/${encodeURIComponent(image.title.replace(/\s+/g, '-'))}`);
  };

  return (
    <div style={{ fontFamily: 'lexand' }}>
      {/* <h1 className="text-center mt-6 text-3xl font-serif text-gray-700">Gallery</h1> */}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
          {images.map(image => (
            <div 
              key={image.id} 
              className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden  mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-105"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative w-full">
                <img
                  className="w-full h-64 p-1 object-contain"
                  src={image.src}
                  alt={image.title}
                />
              </div>
              <div className="w-full text-center">
                <p className="text-m mt-[-10px] text-black" style={{ fontFamily: 'lexand' }}>{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
