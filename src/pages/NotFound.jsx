import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Sparkles } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center space-y-6">
        
        {/* Glowing 404 Visual */}
        <div className="relative">
          <div className="text-8xl sm:text-9xl font-extrabold font-display tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-purple-500/80 via-purple-700/40 to-transparent select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-purple-300 bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-500/30 backdrop-blur-md">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Lost in the Catalog?
          </h1>
          <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            The page you're searching for might have been moved, renamed, or temporarily discontinued from the Thiranex collection.
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-7 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/products"
            className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all"
          >
            <Search className="w-4 h-4 text-purple-400" />
            <span>Explore All Products</span>
          </Link>
        </div>

        {/* Popular Categories Shortcut */}
        <div className="pt-10 border-t border-zinc-800/80">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
            Popular Categories
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <Link
              to="/products?category=Electronics"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-purple-950/60 border border-zinc-800 hover:border-purple-800/40 text-zinc-300 hover:text-white transition-colors"
            >
              Electronics
            </Link>
            <Link
              to="/products?category=Fashion"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-purple-950/60 border border-zinc-800 hover:border-purple-800/40 text-zinc-300 hover:text-white transition-colors"
            >
              Fashion & Outerwear
            </Link>
            <Link
              to="/products?category=Accessories"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-purple-950/60 border border-zinc-800 hover:border-purple-800/40 text-zinc-300 hover:text-white transition-colors"
            >
              Watches & Eyewear
            </Link>
            <Link
              to="/products?category=Home%20%26%20Living"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-purple-950/60 border border-zinc-800 hover:border-purple-800/40 text-zinc-300 hover:text-white transition-colors"
            >
              Home & Living
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
