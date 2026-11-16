import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ value, onChange, onClear, placeholder = 'Search by product name or keyword...' }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
        <Search className="w-4 h-4 text-purple-400" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-[#12131c] border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
        aria-label="Search products"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-white transition-colors"
          aria-label="Clear search query"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
