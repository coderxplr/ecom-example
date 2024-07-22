import React, { useState } from 'react';
import Header from './Header';

const SearchPage = ({ products }) => {
    const [results, setResults] = useState([]);

    const handleSearch = (query) => {
        const filteredProducts = products.filter((product) =>
            product.ProductName.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredProducts);
    };

    return (
        <div>
            <Header onSearch={handleSearch} />
            <div className="container mx-auto py-4">
                {results.length > 0 ? (
                    results.map((product) => (
                        <div key={product.ProductID} className="p-4 border-b border-gray-200">
                            <h2 className="text-2xl font-bold">{product.ProductName}</h2>
                            <p>{product.Description}</p>
                            {/* Add more product details as needed */}
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center">
                        <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6m0 0l6-6m-6 6V3" />
                        </svg>
                        <p className="text-gray-500 text-xl mt-4">No products found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
