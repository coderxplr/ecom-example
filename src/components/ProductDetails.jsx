import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../seeders/data";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";  // Import swipeable


const ProductDetails = () => {
  const { ProductId } = useParams();
  const product = productsData.find((p) => p.ProductId === ProductId);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // For Length x Width
  const [selectedThickness, setSelectedThickness] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [catId, setCatId] = useState("");
  const [direction, setDirection] = useState(0);  // For tracking swipe direction
  const [currentIndex, setCurrentIndex] = useState(0);  // Track which image is shown

  
  // Handle swipe left or right
  const handleSwipe = (dir) => {
    const newIndex = (currentIndex + dir + selectedColor.Images.length) % selectedColor.Images.length;
    setDirection(dir);
    setCurrentIndex(newIndex);
    setMainImage(selectedColor.Images[newIndex]);
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),   // Swipe left to go to next image
    onSwipedRight: () => handleSwipe(-1), // Swipe right to go to previous image
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,  // Allows swipe with the mouse
  });

  const slideVariant = {
    hidden: (direction) => ({ opacity: 0, x: direction > 0 ? 100 : -100 }),  // Slide direction based on swipe
    visible: { opacity: 1, x: 0 },
    exit: (direction) => ({ opacity: 0, x: direction > 0 ? -100 : 100 }),  // Slide out in the opposite direction
  };


  // Extract unique values for Length x Width and Thickness
  const getUniqueSizes = (sizes) => {
    const sizeSet = new Set(); // Use Set to ensure uniqueness
    sizes.forEach((size) => {
      const combinedSize = `${size?.Length?.trim()} x ${size?.Width?.trim()}`; // Trim whitespace to avoid duplicates
      sizeSet.add(combinedSize); // Add unique size to the Set
    });
    return Array.from(sizeSet); // Convert Set back to an array
  };

  const getUniqueThickness = (sizes) => {
    const thicknessSet = new Set(); // Use Set to ensure uniqueness
    sizes.forEach((size) => {
      const thickness = size?.Thickness?.trim(); // Trim whitespace to avoid duplicates
      thicknessSet.add(thickness); // Add unique thickness to the Set
    });
    return Array.from(thicknessSet); // Convert Set back to an array
  };

  useEffect(() => {
    setCatId(product.CategoryID);
    if (product && product.Variants.length > 0) {
      const initialVariant = product.Variants[0];
      setSelectedVariant(initialVariant);
      if (initialVariant.Colors.length > 0) {
        const initialColor = initialVariant.Colors[0];
        setSelectedColor(initialColor);
        if (initialColor.Images.length > 0) {
          setMainImage(initialColor?.Images[0]);
        }
      }
      if (initialVariant.Sizes.length > 0) {
        // Set initial values for the dropdowns
        setSelectedSize(getUniqueSizes(initialVariant.Sizes)[0]);
        setSelectedThickness(getUniqueThickness(initialVariant.Sizes)[0]);
      }
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (
    !product ||
    !selectedVariant ||
    !selectedColor ||
    !selectedSize ||
    !selectedThickness
  ) {
    return <div>Loading...</div>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleThicknessChange = (thickness) => {
    setSelectedThickness(thickness);
  };

  const createWhatsAppUrl = () => {
    const phoneNumber = "+916302141511";
    const message =
      `Hello, I'm interested in the following product:\n\n` +
      `🛍️ *Product*: ${product?.ProductName}\n` +
      `📝 *Description*: ${product?.Description}\n` +
      `🎨 *Finish*: ${product?.Finish}\n` +
      `✂️ *Edge*: ${product?.Variants[0]?.Colors[0]?.Edge}\n` +
      `🌈 *Color*: ${product?.Variants[0]?.Colors[0]?.ColorName}\n` +
      `📏 *Size*:  ${selectedSize},  Thickness: ${selectedThickness}\n\n` +
      `🖼️ *Image*: ${mainImage}\n\n` +
      `Could you please provide more details and availability? Thank you!`;

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
  };

  

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row font-lexend">
      <div className="flex-1 flex flex-col items-center" {...handlers}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={mainImage} // Unique key to trigger re-render on image change
          src={mainImage}
          alt={product.ProductName}
          className="w-full h-96 p-1 object-contain border"
          variants={slideVariant}
          custom={direction}  // Pass direction for animation
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Thumbnail Image Selector */}
      <div className="flex justify-center mt-4 flex-wrap">
        {selectedColor.Images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.ProductName} - ${selectedColor.ColorName} ${index + 1}`}
            className="w-16 h-16 mx-2 my-1 cursor-pointer object-cover"
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);  // Set direction based on the clicked thumbnail
              setCurrentIndex(index);
              setMainImage(image);
            }}
          />
        ))}
      </div>
    </div>

      <div className="flex-1 lg:ml-4 mt-4 lg:mt-0">
        <h1 className="text-3xl font-semibold">{product.ProductName}</h1>
        <p className="text-lg mt-2">{product.Description}</p>
        <div className="mt-4">
          <span className="text-xl font-semibold">Finish: </span>
          <span>{product?.Variants[0]?.Finish}</span>
          <br />
          {product?.Variants[0]?.Colors[0]?.Edge && (
            <span>
              <span className="text-xl font-semibold">Edge: </span>
              <span>{product?.Variants[0]?.Colors[0]?.Edge}</span>
            </span>
          )}
          <br />
          <span className="text-xl font-semibold">Colors: </span>
          <span>{product?.Variants[0]?.Colors[0]?.ColorName}</span>

          {/* Length x Width Dropdown */}
          <div className="mt-4">
            <label className="block text-lg font-semibold">
              Size (Length x Width)
            </label>
            <select
              className="w-full mt-2 p-2 border rounded"
              value={selectedSize}
              onChange={(e) => handleSizeChange(e.target.value)}
            >
              {getUniqueSizes(selectedVariant.Sizes).map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Thickness Dropdown */}
          <div className="mt-4">
            <label className="block text-lg font-semibold">
              {catId === "cat_17253561552887938" ? "Height" : "Thickness"}
            </label>
            <select
              className="w-full mt-2 p-2 border rounded"
              value={selectedThickness}
              onChange={(e) => handleThicknessChange(e.target.value)}
            >
              {getUniqueThickness(selectedVariant.Sizes).map((thickness) => (
                <option key={thickness} value={thickness}>
                  {thickness}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-10">
          <a
            href={createWhatsAppUrl()}
            className="bg-green-500 text-white py-2 px-4 rounded inline-block hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
