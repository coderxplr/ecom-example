import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { productsData } from "../seeders/data"; // Assuming productsData is exported as named export

const RecommendedProducts = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProductClick = (product) => {
    // Navigate to product details page using product id
    navigate(`/product/${encodeURIComponent(product.ProductId)}`);
  };

  // Define the specific order of product names
  const productOrder = [
    "Center Piece – Slice Polish",
    "Yellow leather polish",
    "Wall Stone",
    "30mm",
    "Brown High Polish",
    "Natural Steps",
    "Diamond-Cut Finish",
    "Yellow Cobble Handcut Stone",
  ];

  const recommendedProducts = productsData
  .filter((product) => {
    // Normalize both product name and the productOrder items by trimming and converting to lowercase
    const normalizedProductName = product.ProductName.trim().toLowerCase();
    return productOrder.some(
      (orderedName) => orderedName.trim().toLowerCase() === normalizedProductName
    );
  })
  .sort((a, b) => {
    // Sort the products based on the predefined productOrder array
    return (
      productOrder
        .map((name) => name.trim().toLowerCase()) // Normalize productOrder
        .indexOf(a.ProductName.trim().toLowerCase()) -
      productOrder
        .map((name) => name.trim().toLowerCase())
        .indexOf(b.ProductName.trim().toLowerCase())
    );
  })
  .slice(0, 8); // Return only the first 8 products


  return (
    <div className="container mx-auto px-4" style={{ fontFamily: 'lexand' }}>
      <h1 className="text-3xl font-semibold text-center my-4 font-lexend">
        Featured Selections
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {recommendedProducts.map((product) => (
          <div
            key={product.ProductId}
            onClick={() => handleProductClick(product)}
            className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-10"
          >
            <div className="relative w-full">
              {/* Product Image */}
              <img
                className="w-full h-48 object-cover"
                src={product?.Variants[0]?.Colors[0]?.Images[0]}
                alt={product.ProductName}
              />

              {/* Overlay with Product Name */}
              <div className="absolute bottom-0 left-0 right-0 m-4 bg-black bg-opacity-50 text-white py-2 text-center">
                <p className="lg:text-[12px] text-[10px] font-bold text-white font-lexend">
                  {product.ProductName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
