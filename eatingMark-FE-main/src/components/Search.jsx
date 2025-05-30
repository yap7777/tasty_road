import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="relative">
        <input
          type="text"
          placeholder="맛집 검색하기"
          className="w-full px-4 py-3 pl-10 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search; 