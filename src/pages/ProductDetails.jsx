import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Plus, 
  Minus, 
  ChevronRight,
  PackageCheck,
  AlertCircle,
  Share2
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, addToast } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('features');
  const [isAdding, setIsAdding] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Find product by id from data
  const product = PRODUCTS.find((p) => p.id === id);

  // Reset quantity to 1 whenever route id changes
  useEffect(() => {
    setQuantity(1);
    setImageLoaded(false);
  }, [id]);

  // Product not found state
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-center text-purple-400 mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-white font-display">Product Not Found</h1>
        <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto">
          The product you are looking for does not exist or may have been retired from our catalog.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-purple-600/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Related products from same category, excluding current product
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  // Quantity controllers
  const handleIncreaseQty = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    } else {
      addToast(`Only ${product.stock} units available in stock`, 'warning');
    }
  };

  const handleDecreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast('Product link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <Link to="/products" className="hover:text-white transition-colors">Products</Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-purple-300 transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-zinc-200 font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
        
        {/* Left Column: Product Image Gallery */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#12131c] border border-zinc-800 shadow-2xl group">
            
            {!imageLoaded && (
              <div className="absolute inset-0 shimmer-bg" />
            )}

            <img
              src={product.imageUrl}
              alt={product.name}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Badges on Top Left */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {product.badge && (
                <span className="px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase bg-purple-600/90 text-white backdrop-blur-md shadow-md">
                  {product.badge}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold uppercase bg-emerald-500/90 text-black backdrop-blur-md">
                  Save {discountPercent}%
                </span>
              )}
            </div>

            {/* Wishlist & Share on Top Right */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                aria-label="Share product"
                title="Share product link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all transform hover:scale-110 active:scale-95"
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'text-red-500 fill-red-500' : 'hover:text-purple-400'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing, Specs & Purchase Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Category Pill & Stock Status */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/40 px-3 py-1 rounded-lg border border-purple-800/30">
                {product.category}
              </span>

              <div className="flex items-center gap-1.5 text-xs">
                <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
                <span className={product.inStock ? 'text-emerald-400 font-medium' : 'text-red-400'}>
                  {product.inStock ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              {product.name}
            </h1>

            {/* Rating Stars & Reviews */}
            <div className="flex items-center gap-3 mt-3 pb-5 border-b border-zinc-800">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-zinc-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-white">{product.rating.toFixed(1)}</span>
              <span className="text-xs text-zinc-400">• {product.reviewCount} verified ratings</span>
            </div>

            {/* Price Block */}
            <div className="py-6 flex items-baseline gap-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-zinc-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Features Preview List */}
            {product.features && (
              <div className="mt-6 space-y-2.5">
                <div className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
                  Key Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quantity Selector & Add to Cart Controls */}
          <div className="pt-8 mt-8 border-t border-zinc-800 space-y-5">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
                Quantity:
              </span>
              <div className="flex items-center bg-[#12131c] border border-zinc-800 rounded-xl overflow-hidden p-1">
                <button
                  onClick={handleDecreaseQty}
                  disabled={quantity <= 1}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-bold text-white font-mono">
                  {quantity}
                </span>
                <button
                  onClick={handleIncreaseQty}
                  disabled={quantity >= product.stock}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-xs text-zinc-400">
                Total: <strong className="text-white">${(product.price * quantity).toFixed(2)}</strong>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding}
                className={`py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-all transform active:scale-95 ${
                  isAdding
                    ? 'bg-emerald-600 text-white'
                    : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30'
                }`}
              >
                {isAdding ? (
                  <>
                    <Check className="w-4 h-4 animate-bounce" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-purple-500/30 hover:border-purple-500/60 transition-all transform active:scale-95"
              >
                <span>Instant Checkout</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </button>
            </div>

            {/* Assurance badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-purple-400" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>2-yr warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-purple-400" />
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Specifications & Detailed Tabs */}
      <div className="mt-20 border-t border-zinc-800 pt-12">
        <div className="flex items-center gap-6 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveTab('features')}
            className={`text-sm font-bold uppercase tracking-wider pb-3 border-b-2 transition-all ${
              activeTab === 'features'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`text-sm font-bold uppercase tracking-wider pb-3 border-b-2 transition-all ${
              activeTab === 'shipping'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Shipping & Returns
          </button>
        </div>

        <div className="py-8">
          {activeTab === 'features' && (
            <div className="max-w-2xl bg-[#12131c] rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="divide-y divide-zinc-800">
                {product.specs ? (
                  Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="grid grid-cols-3 p-4 text-xs sm:text-sm">
                      <span className="text-zinc-400 font-medium">{key}</span>
                      <span className="col-span-2 text-white font-semibold">{val}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-xs text-zinc-400">Detailed specs available upon request.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="max-w-2xl space-y-4 text-xs sm:text-sm text-zinc-300">
              <p>
                <strong>Express Delivery:</strong> Orders placed before 3:00 PM EST ship the same business day. All orders exceeding $99 qualify for complimentary express global courier delivery.
              </p>
              <p>
                <strong>Return Policy:</strong> If you are not completely satisfied with your Thiranex purchase, return it within 30 days of delivery in pristine original packaging for a full refund or exchange.
              </p>
              <p>
                <strong>Secure Packaging:</strong> Every item is packaged in recycled, anti-static, shock-absorbent protective boxing to guarantee flawless arrival.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs uppercase font-bold text-purple-400 tracking-wider">
                Complementary Selections
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                Related in {product.category}
              </h2>
            </div>
            <Link
              to={`/products?category=${encodeURIComponent(product.category)}`}
              className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1.5"
            >
              <span>View Category</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetails;
