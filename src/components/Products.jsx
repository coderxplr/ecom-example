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
    const productName = product.ProductName.replace(/\s+/g, '-');
    navigate(`/product/${encodeURIComponent(productName)}`);
  };

  return (
    <div>
      {category && category.CategoryName && (
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${category.CategoryImage})`,
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              {category.CategoryName}
            </h1>
          </div>
        </div>
      )}

      <h2 className="text-center mt-6 text-3xl font-serif text-gray-700">
        {category.CategoryName || <h1 className="text-3xl font-semibold text-center my-4">All Products</h1>}
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div 
              key={product.ProductID} 
              className="p-4 border-2 border-yellow-700 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.Variants[0].Colors[0].Images[0]}
                alt={product.ProductName}
                className="w-full h-40 object-cover"
              />
              <h2 className="mt-4 text-center text-xl font-semibold">{product.ProductName}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
