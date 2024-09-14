import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../seeders/data"; // Assuming categoriesData is exported as named export

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.CategoryID}`);
  };

  return (
    <div className="container mx-auto px-4" style={{ fontFamily: 'lexand' }}>
      <h1
        className="text-3xl font-semibold text-center my-4"
        style={{ fontFamily: "lexand" }}
      >
        Natural Stones
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {categoriesData.map((category) => (
          <div
            key={category.CategoryID}
            onClick={() => handleCategoryClick(category)}
            className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg border-2 border-yellow-700 mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-10"
          >
            <div className="relative w-full">
              <img
                className="w-full h-48 p-1 object-contain"
                src={category.CategoryImage}
                alt={category.CategoryName}
                style={{ objectFit: "cover" }
            }
              />
            </div>
            <div className="bg-yellow-700 w-full text-center">
                <p className="text-lg pt-2 text-white" style={{ fontFamily: 'lexand' }}>{category.CategoryName}</p>
            </div>
              
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { categoriesData } from "../seeders/data2"; // Assuming categoriesData is exported as a named export

// const Categories = () => {
//   const navigate = useNavigate();

//   const handleCategoryClick = (categoryId) => {
//     navigate(`/category/${categoryId}`);
//   };

//   return (
//     <div className="container mx-auto px-4" style={{ fontFamily: 'lexand' }}>
//       <h1
//         className="text-3xl font-semibold text-center my-4"
//         style={{ fontFamily: "lexand" }}
//       >
//         Natural Stones
//       </h1>
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
//         {categoriesData.map((category) => (
//           <div
//             key={category.CategoryIDs[0]} // Use the first CategoryID as a key
//             onClick={() => handleCategoryClick(category.CategoryIDs[0])} // Navigate using the first CategoryID
//             className="cursor-pointer relative flex flex-col items-center rounded overflow-hidden shadow-lg border-2 border-yellow-700 mb-4 w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 transform transition-transform duration-300 hover:scale-105 hover:z-10"
//           >
//             <div className="relative w-full">
//               <img
//                 className="w-full h-48 p-1 object-contain"
//                 src={category.CategoryImage}
//                 alt={category.CategoryName}
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div className="bg-yellow-700 w-full text-center">
//                 <p className="text-sm pt-2 text-white" style={{ fontFamily: 'lexand' }}>{category.CategoryName}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
