import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader flex justify-between items-center gap-8">
        <div className="box-1 w-px h-[115px] border border-gray-300 bg-transparent box-sizing border-box animate-box1animation"></div>
        <div className="box-2 w-px h-[115px] border border-gray-300 bg-transparent box-sizing border-box animate-box2animation"></div>
        <div className="box-3 w-px h-[115px] border border-gray-300 bg-transparent box-sizing border-box animate-box3animation"></div>
      </div>
    </div>
  );
};

export default Loader;
