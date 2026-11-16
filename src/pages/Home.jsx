import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Zap, 
  Star, 
  Layers, 
  Clock,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Select top featured products for the showcase
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 lg:pt-28 pb-16 lg:pb-24">
        {/* Glow Effects behind Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Season Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/50 text-purple-300 text-xs font-semibold backdrop-blur-md shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>NEW ARRIVALS • SPRING/SUMMER 2026 EDITION</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                Elegance Meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">
                  Unrivaled Precision.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
                Step into the future of commerce. Explore meticulously curated audio systems, minimal architectural tailoring, and visionary tech built for discerning tastes.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <Link
                  to="/products"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/products?badge=Trending"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/60 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span>Trending Drops</span>
                </Link>
              </div>

              {/* Social Proof Numbers */}
              <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">16k+</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">4.9/5</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Verified Reviews</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">100%</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Authentic Gear</div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Hero Product Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative border backdrop */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-30 blur-lg transition duration-1000 group-hover:opacity-100" />

                <div className="relative rounded-2xl bg-[#12131c] border border-purple-500/30 overflow-hidden shadow-2xl p-4 sm:p-5">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-900">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
                      alt="Thiranex Apex Headphones Hero"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-purple-600 text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md">
                      Featured Flagship
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Audio Engineering</div>
                      <h3 className="text-base font-bold text-white mt-0.5">Thiranex Apex ANC Pro</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-extrabold text-white font-display">$279.99</div>
                      <div className="text-[11px] text-zinc-400 line-through">$349.99</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-white font-medium">4.9</span> (214 reviews)
                    </div>
                    <Link
                      to="/product/thx-101"
                      className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 group/link"
                    >
                      <span>Explore specs</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-xl bg-[#161824]/95 border border-purple-500/40 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">45hr Wireless Runtime</div>
                    <div className="text-[10px] text-zinc-400">Active Noise Cancellation</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-[#12131c]/60 border border-zinc-800/80 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-3 p-2">
            <Truck className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Free Fast Shipping</div>
              <div className="text-[11px] text-zinc-400">On all orders over $99</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <ShieldCheck className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">2-Year Warranty</div>
              <div className="text-[11px] text-zinc-400">Guaranteed quality</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <RotateCcw className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">30-Day Returns</div>
              <div className="text-[11px] text-zinc-400">Risk-free exchanges</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <Zap className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Instant Support</div>
              <div className="text-[11px] text-zinc-400">24/7 dedicated help</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase font-bold text-purple-400 tracking-wider">
              Explore Collections
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
              Curated Categories
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>View all products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="group relative h-80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/60 transition-all duration-300 shadow-lg hover:shadow-purple-950/30 flex flex-col justify-end p-6"
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="relative z-10 space-y-1.5">
                <div className="text-[11px] font-bold tracking-wider uppercase text-purple-400">
                  {category.itemCount} items
                </div>
                <h3 className="text-xl font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {category.tagline}
                </p>
                <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-white group-hover:text-purple-400 transition-colors">
                  <span>Browse catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-purple-400 tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
              Featured Flagships
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>Explore all {PRODUCTS.length} items</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. SPECIAL PROMOTIONAL OFFER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-gradient-to-r from-purple-950 via-[#18112b] to-black p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/30 border border-purple-400/40 text-purple-300 text-xs font-bold">
              <Tag className="w-3.5 h-3.5" />
              <span>LIMITED PROMO OFFER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              Enjoy 10% Off Your Entire Order
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Use code <strong className="text-white bg-purple-900/90 px-2 py-1 rounded font-mono border border-purple-500/50">THIRANEX10</strong> at checkout to apply an exclusive discount on all premium audio gear, timepieces, apparel, and home living collections.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Claim Offer Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Valid through Spring 2026 season</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED CUSTOMER REVIEWS / SOCIAL PROOF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase font-bold text-purple-400 tracking-wider">
            Client Voices
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
            Loved by Connoisseurs Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            See what customers say about the Thiranex experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#12131c] border border-zinc-800/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed italic">
                "The Apex ANC headphones are sensational. The build quality, soundstage, and battery life blew away my expectations. Thiranex is the real deal."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-900/60 text-purple-300 font-bold flex items-center justify-center text-xs">
                MK
              </div>
              <div>
                <div className="text-xs font-bold text-white">Marcus Vance</div>
                <div className="text-[11px] text-zinc-400">Verified Buyer • Audio Engineer</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#12131c] border border-zinc-800/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed italic">
                "The tailored trench coat fits like bespoke tailoring from Savile Row. Incredible gabardine fabric and rapid 2-day delivery."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-900/60 text-purple-300 font-bold flex items-center justify-center text-xs">
                SL
              </div>
              <div>
                <div className="text-xs font-bold text-white">Sophia Laurent</div>
                <div className="text-[11px] text-zinc-400">Verified Buyer • Creative Director</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#12131c] border border-zinc-800/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed italic">
                "Customer support was courteous when I wanted to add another cardholder to my order. Smooth checkout and seamless packaging."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-900/60 text-purple-300 font-bold flex items-center justify-center text-xs">
                DR
              </div>
              <div>
                <div className="text-xs font-bold text-white">David Reynolds</div>
                <div className="text-[11px] text-zinc-400">Verified Buyer • Architect</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
