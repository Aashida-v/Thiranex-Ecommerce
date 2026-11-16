import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Mail, 
  Send, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'warning');
      return;
    }
    setSubscribed(true);
    addToast('Thank you for subscribing to Thiranex Insider!', 'success');
  };

  return (
    <footer className="bg-[#06070a] border-t border-purple-950/40 text-zinc-400 text-sm mt-20">
      {/* Trust & Guarantee Highlights */}
      <div className="border-b border-zinc-900 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Free Global Shipping</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Complimentary express delivery on orders over $99</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">2-Year Full Warranty</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Comprehensive coverage against craftsmanship flaws</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 flex-shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">30-Day Easy Returns</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Hassle-free refund or exchange guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 flex-shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">24/7 Expert Support</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Dedicated concierge team always at your service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-md shadow-purple-600/30">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl text-white font-display tracking-wider">
                THIRANEX<span className="text-purple-400 font-light ml-1">STORE</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Engineered for the discerning lifestyle. Curating the finest convergence of next-generation consumer electronics, minimalist apparel, and architectural home living.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>256-Bit SSL Encrypted & PCI-DSS Compliant Payments</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h3 className="text-white font-semibold tracking-wide uppercase text-xs mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=Electronics" className="hover:text-purple-300 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fashion" className="hover:text-purple-300 transition-colors">
                  Fashion & Outerwear
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="hover:text-purple-300 transition-colors">
                  Watches & Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=Home%20%26%20Living" className="hover:text-purple-300 transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-purple-300 transition-colors">
                  All Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold tracking-wide uppercase text-xs mb-4">
              Customer Care
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/cart" className="hover:text-purple-300 transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <a href="#shipping" onClick={(e) => { e.preventDefault(); addToast('Standard Shipping: 2-4 business days. Free over $99.', 'info'); }} className="hover:text-purple-300 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#returns" onClick={(e) => { e.preventDefault(); addToast('Returns accepted within 30 days in original packaging.', 'info'); }} className="hover:text-purple-300 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); addToast('Visit our support desk for 24/7 live assistance.', 'info'); }} className="hover:text-purple-300 transition-colors">
                  Help & FAQs
                </a>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); addToast('Your personal data is encrypted and never sold.', 'info'); }} className="hover:text-purple-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold tracking-wide uppercase text-xs">
              Stay in the Loop
            </h3>
            <p className="text-xs text-zinc-400">
              Subscribe to get exclusive early access to product drops and 10% off your next purchase.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-300 flex items-center gap-2.5 text-xs animate-slide-in">
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>You're subscribed! Check your inbox for your 10% welcome gift.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#12131c] border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors pr-10"
                    aria-label="Email address for newsletter"
                  />
                  <Mail className="w-4 h-4 text-zinc-500 absolute right-3.5 top-3" />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-600/30"
                >
                  <span>Subscribe to Newsletter</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Legal & Payment Icons */}
      <div className="border-t border-zinc-900/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} THIRANEX STORE. All rights reserved. Web Development Internship Capstone Project.
          </div>
          
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">VISA</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">MASTERCARD</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">AMEX</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">APPLE PAY</span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
