import React from 'react';

const SkeletonStory = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 animate-pulse border border-blue-200">
      <div className="h-6 bg-blue-200 rounded w-3/4 mb-2"></div>
      <div className="flex items-center justify-between mb-2">
        <div className="h-4 bg-blue-200 rounded w-1/4"></div>
        <div className="h-4 bg-blue-200 rounded w-1/4"></div>
      </div>
      <div className="h-4 bg-blue-200 rounded w-1/5"></div>
    </div>
  );
};

export default SkeletonStory;