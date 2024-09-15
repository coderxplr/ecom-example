import React from "react";

const SkeletonLoader = () => {
  return (
    <div class="text-center">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black-500 mx-auto"></div>
      <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p class="text-zinc-600 dark:text-zinc-400">
        Images are loading please wait...
      </p>
    </div>
  );
};

export default SkeletonLoader;
