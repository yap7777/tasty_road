import React from 'react';

function Search({ searchInput, setSearchInput }) {
  return (
    <div className="flex items-center border-b border-gray-600 py-2">
      <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="맛집 검색하기"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        className="bg-transparent focus:outline-none w-full placeholder:text-gray-500 text-gray-800"
      />
    </div>
  );
}

export default Search;
