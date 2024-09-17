import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData, categoriesData } from '../seeders/data';

const Products = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId) {
      // If categoryId is present, filter products based on the selected category
      const selectedCategory = categoriesData.find(cat => cat.CategoryID === categoryId);
      setCategory(selectedCategory || {});
      
      const products = productsData.filter(product => product.CategoryID === categoryId);
      setFilteredProducts(products);
    } else {
      // If no categoryId, list all products
      setCategory({});
      setFilteredProducts(productsData);
    }
  }, [categoryId]);

  const handleProductClick = (product) => {
    // Replace spaces with hyphens in product name
    const ProductId = product.ProductId.replace(/\s+/g, '-');
    navigate(`/product/${encodeURIComponent(ProductId)}`);
  };

  return (
    <div style={{ fontFamily: 'lexand' }}>

      <h2 className="text-center mt-6 text-3xl font-serif text-gray-700 mb-8">
        {category.CategoryName || <h1 className="text-3xl font-semibold text-center my-4">All Products</h1>}
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {filteredProducts.map(product => (
            <div 
              key={product.ProductID} 
              className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-105"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative w-full">
              <img
                className="w-full h-48 p-1 object-contain"
                src={
                  product?.Variants?.[0]?.Colors?.[0]?.Images?.[0] || "fallback-image-url.jpg"
                }
                alt={category.CategoryName}
                // style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 m-4 bg-black bg-opacity-50 text-white py-2 text-center">
                <p className="text-[10px] font-bold text-white" style={{ fontFamily: 'lexand' }}>{product.ProductName}</p>
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
