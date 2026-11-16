import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems, wishlist } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);

  // Scroll detection for enhanced glass styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (1024px and above)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Outside click, Escape key, and body scroll lock handlers for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // Close on click outside of menu and hamburger toggle button
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        hamburgerBtnRef.current &&
        !hamburgerBtnRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Close on Escape key press
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        hamburgerBtnRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Prevent background page scrolling while mobile menu is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  // Toggle mobile navigation menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) setIsSearchOpen(false);
      return !prev;
    });
  };

  // Toggle mobile search bar
  const toggleSearch = () => {
    setIsSearchOpen((prev) => {
      if (!prev) setIsMobileMenuOpen(false);
      return !prev;
    });
  };

  // Handle header quick search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (navSearchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(navSearchQuery.trim())}`);
      setIsSearchOpen(false);
      setNavSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    { name: 'Electronics', path: '/products?category=Electronics' },
    { name: 'Fashion', path: '/products?category=Fashion' },
    { name: 'Accessories', path: '/products?category=Accessories' },
    { name: 'Home & Living', path: '/products?category=Home%20%26%20Living' },
  ];

  // Helper to determine active route status (handles exact match and query parameters)
  const checkIsActive = (linkPath) => {
    if (linkPath === '/') {
      return location.pathname === '/' && !location.search;
    }
    if (linkPath.includes('?')) {
      return (location.pathname + location.search) === linkPath;
    }
    return location.pathname === linkPath && !location.search;
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <aside aria-label="Special offer announcement" className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-purple-200 text-xs py-2 px-4 border-b border-purple-800/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/30">
              LIMITED TIME
            </span>
            <span>Use code <strong className="text-white font-mono bg-purple-900/80 px-1.5 py-0.5 rounded border border-purple-600/40">THIRANEX10</strong> for 10% off • Free shipping over $99</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-purple-300/80">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> 100% Authentic Products
            </span>
          </div>
        </div>
      </aside>

      {/* Main Glass Navigation Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav border-b border-purple-900/30 shadow-lg shadow-black/40 py-3' 
          : 'bg-[#090a0f]/95 border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Thiranex Store Homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-0.5 shadow-lg shadow-purple-600/30 group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center tracking-wider font-extrabold text-xl text-white font-display">
                  THIRANEX<span className="text-purple-400 font-light ml-1.5">STORE</span>
                </div>
                <div className="text-[10px] tracking-widest text-purple-300/60 uppercase font-medium -mt-1 hidden sm:block">
                  Premium Commerce
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Desktop Navigation">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-purple-600/20 border border-purple-500/40 shadow-sm'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Search, Wishlist, Cart & Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Desktop Quick Search Input */}
              <form 
                onSubmit={handleSearchSubmit} 
                className="hidden md:flex items-center relative"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                  className="w-48 xl:w-64 pl-9 pr-3 py-1.5 bg-[#12131c] border border-zinc-800 rounded-full text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  aria-label="Search products"
                />
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 pointer-events-none" />
              </form>

              {/* Mobile Search Toggle Icon */}
              <button
                type="button"
                onClick={toggleSearch}
                className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                aria-label="Toggle mobile search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/products?wishlist=true"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 relative rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors group focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                aria-label={`Wishlist with ${wishlist.length} saved items`}
                title="View Saved Items"
              >
                <Heart className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md shadow-purple-600/50">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Shopping Cart Button */}
              <Link
                to="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-500/40 transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2.5 bg-black text-purple-300 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-purple-400">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline font-semibold">Cart</span>
              </Link>

              {/* Mobile / Tablet Hamburger Toggle Button */}
              <button
                ref={hamburgerBtnRef}
                type="button"
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-purple-400" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Expandable Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden pt-3 pb-1 border-t border-zinc-800 mt-3 animate-slide-in">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search our catalog..."
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-10 py-2 bg-[#12131c] border border-purple-500/40 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <Search className="w-4 h-4 text-purple-400 absolute left-3.5 pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 text-zinc-400 hover:text-white"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer & Backdrop */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay for outside click closing */}
            <div
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Navigation Drawer Panel */}
            <div
              ref={menuRef}
              id="mobile-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              className="absolute top-full left-0 right-0 w-full bg-[#0c0d14]/98 backdrop-blur-2xl border-b border-purple-900/40 p-5 sm:p-6 shadow-2xl z-50 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto animate-slide-in"
            >
              <div className="flex flex-col gap-2 max-w-7xl mx-auto">
                
                {/* Mobile Menu Search */}
                <form onSubmit={handleSearchSubmit} className="relative mb-3 md:hidden">
                  <input
                    type="text"
                    placeholder="Search catalog..."
                    value={navSearchQuery}
                    onChange={(e) => setNavSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#12131c] border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                  <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
                </form>

                <div className="text-xs uppercase font-semibold text-zinc-400 tracking-wider mb-1 px-3">
                  Store Navigation
                </div>

                {navLinks.map((link) => {
                  const isActive = checkIsActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                          : 'text-zinc-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-purple-400 translate-x-0.5' : 'text-zinc-500'}`} />
                    </Link>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-zinc-800/80 flex flex-col gap-3">
                  <Link
                    to="/cart"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-600/30 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5" /> View Shopping Cart
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-mono">
                      {totalItems} items
                    </span>
                  </Link>

                  <div className="text-center text-xs text-zinc-400 mt-1">
                    Free Express Shipping on Orders Over $99
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
