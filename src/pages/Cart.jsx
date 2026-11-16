import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft, 
  Tag, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Sparkles,
  Lock,
  X,
  CreditCard
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discountAmount,
    shippingCost,
    FREE_SHIPPING_THRESHOLD,
    amountNeededForFreeShipping,
    estimatedTax,
    totalPrice,
    addToast
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Checkout form fields
  const [shippingForm, setShippingForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
    paymentMethod: 'card'
  });

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    applyCoupon(couponInput);
    setCouponInput('');
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!shippingForm.fullName || !shippingForm.email || !shippingForm.address) {
      addToast('Please fill out all required shipping fields', 'warning');
      return;
    }

    // Generate random commercial Order Reference ID
    const generatedId = 'THX-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderCompleted(true);
    clearCart();
  };

  // If order was just placed, display celebration confirmation
  if (orderCompleted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-slide-in">
        <div className="w-20 h-20 rounded-3xl bg-purple-950/60 border border-purple-500/40 text-purple-400 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-600/30">
          <Sparkles className="w-10 h-10 text-purple-400" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-4">
          <CheckCircle2 className="w-4 h-4" />
          <span>ORDER CONFIRMED & IN PROCESS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
          Thank You For Your Order!
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-lg mx-auto">
          We've received your order and our fulfillment team is preparing your package. A confirmation email has been dispatched to <strong className="text-white">{shippingForm.email}</strong>.
        </p>

        <div className="my-8 p-6 rounded-2xl bg-[#12131c] border border-zinc-800 text-left max-w-md mx-auto space-y-3">
          <div className="flex justify-between text-xs pb-3 border-b border-zinc-800">
            <span className="text-zinc-400">Order Reference:</span>
            <span className="text-white font-mono font-bold">{orderId}</span>
          </div>
          <div className="flex justify-between text-xs pb-3 border-b border-zinc-800">
            <span className="text-zinc-400">Recipient:</span>
            <span className="text-white font-medium">{shippingForm.fullName}</span>
          </div>
          <div className="flex justify-between text-xs pb-3 border-b border-zinc-800">
            <span className="text-zinc-400">Shipping To:</span>
            <span className="text-white font-medium truncate max-w-[200px]">{shippingForm.address}, {shippingForm.city}</span>
          </div>
          <div className="flex justify-between text-xs pt-1">
            <span className="text-zinc-400">Estimated Delivery:</span>
            <span className="text-emerald-400 font-bold">2 - 3 Business Days (Express)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            onClick={() => setOrderCompleted(false)}
            className="w-full sm:w-auto px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-600/30 transition-all"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            onClick={() => setOrderCompleted(false)}
            className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-xl text-sm font-semibold transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Empty cart view
  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-slide-in">
        <div className="w-20 h-20 rounded-3xl bg-[#12131c] border border-zinc-800 flex items-center justify-center text-zinc-500 mx-auto mb-6 shadow-xl">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-white font-display">
          Your Shopping Cart is Empty
        </h1>
        <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Looks like you haven't added anything to your cart yet. Explore our curated collections to discover visionary electronics, apparel, and home living.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/products"
            className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Start Shopping Now</span>
          </Link>
          <Link
            to="/"
            className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-xl text-sm font-semibold transition-all"
          >
            Explore Featured
          </Link>
        </div>
      </div>
    );
  }

  // Progress for free shipping bar
  const shippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-zinc-800 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Shopping Cart
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Review your selected items ({cart.reduce((acc, i) => acc + i.quantity, 0)} items) before proceeding to secure checkout.
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 self-start sm:self-auto p-1.5 rounded-lg hover:bg-white/5"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear Shopping Cart</span>
        </button>
      </div>

      {/* Free Shipping Progress Indicator */}
      <div className="mb-8 p-4 rounded-2xl bg-[#12131c] border border-purple-500/20">
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-purple-400" />
            <span className="font-semibold text-white">
              {amountNeededForFreeShipping === 0 ? (
                <span className="text-emerald-400 font-bold">You unlocked Complimentary Express Shipping!</span>
              ) : (
                <span>
                  Add <strong className="text-purple-300 font-mono">${amountNeededForFreeShipping.toFixed(2)}</strong> more to get Free Express Shipping!
                </span>
              )}
            </span>
          </div>
          <span className="text-zinc-400 font-mono text-[11px]">{shippingProgress}%</span>
        </div>
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${shippingProgress}%` }}
          />
        </div>
      </div>

      {/* Main Grid: Cart Items List + Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#12131c] border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              {/* Product Thumbnail */}
              <Link
                to={`/product/${item.id}`}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 relative group"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </Link>

              {/* Item Details */}
              <div className="flex-1 min-w-0 w-full sm:w-auto text-left">
                <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-bold text-white text-base leading-snug hover:text-purple-300 transition-colors mt-0.5 truncate">
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                </h3>
                <div className="text-xs text-zinc-400 mt-1">
                  Unit Price: <span className="text-white font-mono">${item.price.toFixed(2)}</span>
                </div>

                {/* Mobile controls row */}
                <div className="flex sm:hidden items-center justify-between mt-3 pt-3 border-t border-zinc-800">
                  <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-white font-mono">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-white font-display text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Quantity Selector */}
              <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-xl p-1">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-xs font-bold text-white font-mono">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Desktop Line Total */}
              <div className="hidden sm:block text-right min-w-[90px]">
                <div className="text-lg font-extrabold text-white font-display">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="text-[10px] text-zinc-400">
                  ${item.price.toFixed(2)} each
                </div>
              </div>

              {/* Delete Item Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-950/20 rounded-xl transition-all self-end sm:self-center"
                aria-label={`Remove ${item.name} from cart`}
                title="Remove item"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* Continue Shopping Action */}
          <div className="pt-4 flex justify-between items-center">
            <Link
              to="/products"
              className="text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Order Summary & Coupon */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="p-6 rounded-2xl bg-[#12131c] border border-zinc-800 shadow-xl space-y-5">
            <h2 className="text-lg font-extrabold text-white font-display pb-3 border-b border-zinc-800">
              Order Summary
            </h2>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
                <span className="text-white font-mono">${subtotal.toFixed(2)}</span>
              </div>

              {appliedCoupon && (
                <div className="flex justify-between text-emerald-400">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Coupon ({appliedCoupon.code})</span>
                  </span>
                  <span className="font-mono font-bold">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-zinc-400">
                <span>Estimated Shipping</span>
                <span className="text-white font-mono">
                  {shippingCost === 0 ? (
                    <span className="text-emerald-400 font-bold uppercase text-[11px]">Free</span>
                  ) : (
                    `$${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-zinc-400">
                <span>Estimated Sales Tax (8%)</span>
                <span className="text-white font-mono">${estimatedTax.toFixed(2)}</span>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-between items-baseline">
                <span className="text-base font-bold text-white">Estimated Total</span>
                <span className="text-2xl font-extrabold text-white font-display">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Promo Code Form */}
            <div className="pt-2">
              {appliedCoupon ? (
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-between text-xs text-purple-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span><strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.discountPercent}% off)</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-zinc-400 hover:text-white p-1"
                    aria-label="Remove coupon"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Coupon code (e.g. THIRANEX10)"
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 uppercase"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-semibold transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Lock className="w-4 h-4" />
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Trust highlights */}
            <div className="pt-2 text-[11px] text-zinc-400 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Secure Encryption
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-purple-400" /> Fast Courier
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* CHECKOUT MODAL DIALOG */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsCheckoutOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-[#12131c] border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-slide-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
              <div>
                <h3 className="text-xl font-extrabold text-white font-display">
                  Complete Your Order
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Total: <strong className="text-white">${totalPrice.toFixed(2)}</strong> (Tax & Shipping included)
                </p>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={shippingForm.fullName}
                  onChange={(e) => setShippingForm({ ...shippingForm, fullName: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={shippingForm.email}
                  onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                  placeholder="eleanor.vance@example.com"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Shipping Address *
                </label>
                <input
                  type="text"
                  required
                  value={shippingForm.address}
                  onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                  placeholder="100 Thiranex Boulevard, Suite 400"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingForm.city}
                    onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                    placeholder="San Francisco"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingForm.zip}
                    onChange={(e) => setShippingForm({ ...shippingForm, zip: e.target.value })}
                    placeholder="94107"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-zinc-300 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setShippingForm({ ...shippingForm, paymentMethod: 'card' })}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 ${
                      shippingForm.paymentMethod === 'card'
                        ? 'border-purple-500 bg-purple-950/40 text-purple-200'
                        : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-purple-400" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShippingForm({ ...shippingForm, paymentMethod: 'apple' })}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 ${
                      shippingForm.paymentMethod === 'apple'
                        ? 'border-purple-500 bg-purple-950/40 text-purple-200'
                        : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    <span className="text-sm font-bold">Pay</span>
                    <span>Apple Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShippingForm({ ...shippingForm, paymentMethod: 'paypal' })}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 ${
                      shippingForm.paymentMethod === 'paypal'
                        ? 'border-purple-500 bg-purple-950/40 text-purple-200'
                        : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    <span className="text-sm font-bold text-blue-400">P</span>
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-zinc-800">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all"
                >
                  Confirm & Place Order (${totalPrice.toFixed(2)})
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
