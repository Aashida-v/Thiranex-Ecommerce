import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => {
      setIsAdding(false);
    }, 900);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  // Calculate discount percentage if original price exists
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <article className="group relative rounded-2xl bg-[#12131c] border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20 flex flex-col overflow-hidden">
      {/* Image & Badges Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-zinc-900 focus:outline-none">
        
        {/* Shimmer Placeholder while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 shimmer-bg" />
        )}

        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradient Overlay on bottom of image for sleek look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

        {/* Badges on Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-purple-600/90 text-white backdrop-blur-md shadow-md shadow-purple-900/40">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wide uppercase bg-emerald-500/90 text-black backdrop-blur-md">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Button on Top Right */}
        <button
          onClick={handleToggleWishlist}
          aria-label={inWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all transform hover:scale-110 active:scale-95 group/btn"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              inWishlist ? 'text-red-500 fill-red-500' : 'group-hover/btn:text-purple-400'
            }`} 
          />
        </button>

        {/* Stock warning pill if low stock */}
        {product.stock <= 10 && (
          <div className="absolute bottom-3 left-3 z-10 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium text-amber-400 border border-amber-500/30">
            Only {product.stock} left in stock
          </div>
        )}
      </Link>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Pill & Rating */}
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-purple-400 font-medium tracking-wide uppercase text-[10px] bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30">
              {product.category}
            </span>

            <div className="flex items-center gap-1 text-zinc-400">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-white text-xs">{product.rating.toFixed(1)}</span>
              <span className="text-[11px] text-zinc-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-semibold text-white text-sm sm:text-base leading-snug line-clamp-2 hover:text-purple-300 transition-colors">
            <Link to={`/product/${product.id}`} title={product.name}>
              {product.name}
            </Link>
          </h3>

          {/* Short Description snippet */}
          <p className="text-zinc-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Button Footer */}
        <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-extrabold text-white font-display">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-[10px] text-zinc-400">
              {product.inStock ? 'Ready to ship' : 'Out of stock'}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            aria-label={`Add ${product.name} to cart`}
            className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-all duration-200 transform active:scale-95 ${
              isAdding
                ? 'bg-emerald-600 text-white'
                : 'bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/30'
            }`}
          >
            {isAdding ? (
              <>
                <Check className="w-3.5 h-3.5 animate-bounce" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
