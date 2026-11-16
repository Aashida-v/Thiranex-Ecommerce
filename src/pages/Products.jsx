import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  RotateCcw, 
  PackageX, 
  Sparkles,
  Heart,
  Grid3X3,
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useCart();

  // Search & Filter state initialized from URL query parameters
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(800);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state when URL searchParams change
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
    const urlSearch = searchParams.get('search');
    if (urlSearch !== null) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams]);

  // Wishlist only filter view if requested in URL
  const isWishlistView = searchParams.get('wishlist') === 'true';

  // Handler for category selection that also updates URL
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  // Reset all filters back to default
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('featured');
    setPriceRange(800);
    setMinRating(0);
    setInStockOnly(false);
    setSearchParams({});
  };

  // Filter and sort computation
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // If wishlist view is active
    if (isWishlistView) {
      const wishlistIds = new Set(wishlist.map((w) => w.id));
      result = result.filter((p) => wishlistIds.has(p.id));
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Price range filter
    result = result.filter((p) => p.price <= priceRange);

    // Rating filter
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    // In Stock filter
    if (inStockOnly) {
      result = result.filter((p) => p.inStock && p.stock > 0);
    }

    // Sorting logic
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Featured products first, then highest rating
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, priceRange, minRating, inStockOnly, sortBy, isWishlistView, wishlist]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-purple-400 tracking-wider">
              {isWishlistView ? (
                <>
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  <span>Saved Wishlist Items</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Commercial Catalog</span>
                </>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-1">
              {isWishlistView ? 'My Wishlist' : selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Showing <strong className="text-white">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'item' : 'items'} crafted for high performance and modern luxury.
            </p>
          </div>

          {/* Search bar in header */}
          <div className="w-full md:w-80">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </div>
        </div>

        {/* Quick Filter Controls / Active Filters Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-zinc-800/60">
          
          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden px-4 py-2 bg-zinc-900 border border-zinc-700/80 rounded-xl text-xs font-semibold text-white flex items-center gap-2 hover:bg-zinc-800"
          >
            <SlidersHorizontal className="w-4 h-4 text-purple-400" />
            <span>Filter & Sort ({filteredProducts.length})</span>
          </button>

          {/* Active Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {selectedCategory !== 'All' && (
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-300 flex items-center gap-1.5">
                Category: <strong>{selectedCategory}</strong>
                <button onClick={() => handleSelectCategory('All')} className="hover:text-white">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-300 flex items-center gap-1.5">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-white">×</button>
              </span>
            )}
            {minRating > 0 && (
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-300 flex items-center gap-1.5">
                Rating: {minRating}+ ★
                <button onClick={() => setMinRating(0)} className="hover:text-white">×</button>
              </span>
            )}
            {inStockOnly && (
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-300 flex items-center gap-1.5">
                In Stock Only
                <button onClick={() => setInStockOnly(false)} className="hover:text-white">×</button>
              </span>
            )}
            {(selectedCategory !== 'All' || searchQuery || minRating > 0 || inStockOnly || priceRange < 800) && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-4 ml-1"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Desktop Sort Dropdown */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-400">
            <span>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#12131c] border border-zinc-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              <option value="featured">Featured / Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar + Product Grid */}
      <div className="flex gap-8 items-start">
        
        {/* Filter Sidebar (Desktop & Mobile Drawer) */}
        <FilterSidebar
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          minRating={minRating}
          onRatingChange={setMinRating}
          inStockOnly={inStockOnly}
          onInStockChange={setInStockOnly}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onResetFilters={handleResetFilters}
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          totalProductsCount={PRODUCTS.length}
          filteredProductsCount={filteredProducts.length}
        />

        {/* Product Grid Area */}
        <main className="flex-1 min-w-0">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="p-12 text-center rounded-2xl bg-[#12131c] border border-zinc-800/80 flex flex-col items-center justify-center max-w-lg mx-auto my-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-4">
                <PackageX className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                No matching products found
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-sm leading-relaxed">
                We couldn't find any items matching your selected filters or search terms. Try adjusting your search query or reset your filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-6 px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default Products;
