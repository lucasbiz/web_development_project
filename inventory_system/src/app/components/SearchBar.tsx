"use client";

import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  // pesquisar caso o usuario aperte enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search here"
        className="border rounded-xl px-4 py-2 w-1/3 h-10 text-black -mr-20 outline-none min-w-72 max-w-96"
      />
      <button
        onClick={handleSearch}
        className="bg-[#40B797] active:bg-[#359A7F] outline-none text-white px-4 py-2 rounded-r h-10"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
