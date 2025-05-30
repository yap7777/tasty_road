import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <div className="relative w-[calc(20%-12px)]">
      <input
        type="text"
        placeholder="맛집 검색하기"
        className="w-full py-2 pl-10 pr-4 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
    </div>
  );
};

export default Search; 