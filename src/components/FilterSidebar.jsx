import React from 'react';
import { Filter, RotateCcw, Star, X, Check } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const FilterSidebar = ({
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  minRating,
  onRatingChange,
  inStockOnly,
  onInStockChange,
  sortBy,
  onSortChange,
  onResetFilters,
  isOpen,
  onClose,
  totalProductsCount,
  filteredProductsCount,
}) => {
  const categories = ['All', ...CATEGORIES.map((c) => c.name)];
  const ratings = [
    { label: 'All Ratings', value: 0 },
    { label: '4.5 & above', value: 4.5 },
    { label: '4.0 & above', value: 4.0 },
    { label: '3.5 & above', value: 3.5 },
  ];

  const content = (
    <div className="flex flex-col gap-6">
      {/* Header with Title and Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
        <div className="flex items-center gap-2 text-white font-semibold text-base">
          <Filter className="w-4 h-4 text-purple-400" />
          <span>Filters</span>
        </div>
        <button
          onClick={onResetFilters}
          className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors p-1 rounded hover:bg-purple-950/40"
          title="Reset all filters to default"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Categories Filter */}
      <div>
        <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-3">
          Category
        </h4>
        <div className="flex flex-col gap-1.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                  isSelected
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40 font-semibold'
                    : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-purple-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort By Selector */}
      <div>
        <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-2">
          Sort By
        </h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full bg-[#12131c] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
        >
          <option value="featured">Featured / Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Highest Customer Rating</option>
          <option value="name-asc">Alphabetical (A - Z)</option>
        </select>
      </div>

      {/* Max Price Range Slider */}
      <div>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="uppercase font-bold tracking-wider text-zinc-400">
            Max Price
          </span>
          <span className="font-mono font-bold text-purple-300">
            ${priceRange}
          </span>
        </div>
        <input
          type="range"
          min="40"
          max="800"
          step="10"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
        <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
          <span>$40</span>
          <span>$400</span>
          <span>$800</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-2.5">
          Minimum Rating
        </h4>
        <div className="flex flex-col gap-1.5">
          {ratings.map((rate) => (
            <label
              key={rate.value}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs cursor-pointer transition-colors ${
                minRating === rate.value
                  ? 'bg-purple-950/40 border border-purple-800/40 text-purple-200'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              <input
                type="radio"
                name="ratingFilter"
                checked={minRating === rate.value}
                onChange={() => onRatingChange(rate.value)}
                className="accent-purple-600 cursor-pointer"
              />
              <div className="flex items-center gap-1">
                {rate.value > 0 ? (
                  <>
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{rate.label}</span>
                  </>
                ) : (
                  <span>All Ratings</span>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* In Stock Only Checkbox */}
      <div className="pt-2 border-t border-zinc-800">
        <label className="flex items-center gap-2.5 cursor-pointer text-xs text-zinc-300 hover:text-white select-none">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
            className="w-4 h-4 rounded bg-zinc-900 border-zinc-700 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer accent-purple-600"
          />
          <span>In-stock items only</span>
        </label>
      </div>

      {/* Product count stats pill */}
      <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center text-xs text-zinc-400">
        Displaying <strong className="text-white font-mono">{filteredProductsCount}</strong> of {totalProductsCount} products
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
        <div className="sticky top-28 p-5 rounded-2xl bg-[#12131c] border border-zinc-800 shadow-xl">
          {content}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />

          {/* Slide-out Menu */}
          <div className="relative ml-auto w-full max-w-xs h-full bg-[#12131c] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 border-l border-zinc-800 animate-slide-in">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                <span className="font-bold text-white text-base">Filter Catalog</span>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {content}
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-purple-600 text-white rounded-xl font-semibold text-xs shadow-lg shadow-purple-600/30"
              >
                Apply Filters ({filteredProductsCount} Results)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
