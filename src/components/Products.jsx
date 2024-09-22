import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData, categoriesData } from "../seeders/data";

const Products = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId) {
      // If categoryId is present, filter products based on the selected category
      const selectedCategory = categoriesData.find(
        (cat) => cat.CategoryID === categoryId
      );
      setCategory(selectedCategory || {});

      const products = productsData.filter(
        (product) => product.CategoryID === categoryId
      );
      setFilteredProducts(products);
    } else {
      // If no categoryId, list all products
      setCategory({});
      setFilteredProducts(productsData);
    }
  }, [categoryId]);

  const handleProductClick = (product) => {
    // Replace spaces with hyphens in product name
    const ProductId = product.ProductId.replace(/\s+/g, "-");
    navigate(`/product/${encodeURIComponent(ProductId)}`);
  };

  return (
    <div className="font-lexend">
      <h2 className="text-center mt-6 text-3xl font-serif text-gray-700 mb-8 font-lexend">
        {category.CategoryName || null}
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {filteredProducts.map((product) => (
            <div
              key={product.ProductID}
              className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-105"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative w-full">
                <img
                  className="w-full h-48 p-1 object-contain font-lexend"
                  src={
                    product?.Variants?.[0]?.Colors?.[0]?.Images?.[0] ||
                    "fallback-image-url.jpg"
                  }
                  alt={category.CategoryName}
                  // style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 m-4 bg-black bg-opacity-50 text-white py-2 text-center font-lexend">
                <p
                  className="text-[10px] font-bold text-white font-lexend"
                  // style={{ fontFamily: "lexand" }}
                >
                  {product.ProductName}
                </p>
              </div>
              {/* <p className="mt-4 text-center text-xl font-semibold bg-yellow-700 text-white p-2">{product.ProductName}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;


// const orderedCategoryIDs = [
//   "cat_1725355554757286", // Slice (Slice Finish)
//   "cat_17253559734044558", // Outdoor (Parking)
//   null,                    // Natural finish (No match found)
//   "cat_17253556539278027", // Leather (Leather Finish)
//   "cat_17253559205241743", // High Polish
//   "cat_17253561552887938", // Wall Cladding (Wall Stone)
//   "cat_17253562110392769", // Satin Finish
//   null,                    // Mirror polish (No match found)
//   "cat_17253560197007068", // Steps
//   "cat_17255241012007679", // Slab (Slabs)
//   null,                    // Roof slab (No match found)
//   null,                    // Chapati maker (No match found)
//   "cat_1725355725154987",  // Cobbles
//   "cat_17253561552887938", // Wall Cladding (Already used)
//   // Adding unmatched categories at the end
//   "cat_17253557791246696", // Diamond-Cut Finish
//   "cat_17253558480386072", // Round Finish
//   "cat_17254613687023630", // Diamond Pattern
//   "cat_17255138342343018", // Square Pattern
//   "cat_1725523795510555",  // Line Pattern
// ];
