import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { productsData } from '../seeders/data'; // Assuming productsData is exported as named export

const RecommendedProducts = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleProductClick = (product) => {
        // Replace spaces with hyphens in product name
        const productName = product.ProductName.replace(/\s+/g, '-');
        navigate(`/product/${encodeURIComponent(productName)}`);
    };

    const recommendedProducts = productsData.filter(product => product.isRecommended);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold text-center my-4">Recommended Products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {recommendedProducts.map(product => (
                    <div 
                        key={product.ProductID} 
                        onClick={() => handleProductClick(product)}
                        className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg border-2 border-gold-700 mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-10"
                    >
                        <div className="relative w-full">
                            <img className="w-full h-48 object-cover" src={product.Variants[0].Colors[0].Images[0]} alt={product.ProductName} />
                            <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-75 py-2 text-center">
                                <p className="text-lg font-semibold">{product.ProductName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedProducts;
