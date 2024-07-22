// import React, { useState } from 'react';
// import { categoriesData } from '../seeders/data'; // Assuming categoriesData is exported as named export
// import Products from './Products';

// const Categories = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category);
//     };

//     return (
//         <div className="container mx-auto px-4">
//             <h1 className="text-3xl font-semibold text-center my-4">Categories</h1>
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
//                 {categoriesData.map(category => (
//                     <div 
//                         key={category.CategoryID} 
//                         onClick={() => handleCategoryClick(category)}
//                         className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg border-2 border-gold-700 mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-10"
//                     >
//                         <div className="relative w-full">
//                             <img className="w-full h-48 object-cover" src={category.CategoryImage} alt={category.CategoryName} />
//                             <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-75 py-2 text-center">
//                                 <p className="text-lg font-semibold">{category.CategoryName}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedCategory && (
//                 <Products 
//                     categoryName={selectedCategory.CategoryName} 
//                     categoryImage={selectedCategory.CategoryImage} 
//                     selectedCategoryID={selectedCategory.CategoryID}
//                 />
//             )}
//         </div>
//     );
// };

// export default Categories;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categoriesData } from '../seeders/data'; // Assuming categoriesData is exported as named export

const Categories = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/category/${category.CategoryID}`);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold text-center my-4">Categories</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {categoriesData.map(category => (
                    <div 
                        key={category.CategoryID} 
                        onClick={() => handleCategoryClick(category)}
                        className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg border-2 border-yellow-700 mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-10"
                    >
                        <div className="relative w-full">
                            <img className="w-full h-48 object-cover" src={category.CategoryImage} alt={category.CategoryName} />
                            <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-75 py-2 text-center">
                                <p className="text-lg font-semibold">{category.CategoryName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
