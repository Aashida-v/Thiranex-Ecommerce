import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROMO_CODES } from '../data/products';

const CartContext = createContext();

const CART_STORAGE_KEY = 'thiranex_cart';
const WISHLIST_STORAGE_KEY = 'thiranex_wishlist';

export const CartProvider = ({ children }) => {
  // Cart state with safe LocalStorage initialization
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      return [];
    }
  });

  // Wishlist state with safe LocalStorage initialization
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error('Failed to load wishlist from localStorage:', error);
      return [];
    }
  });

  // Applied Coupon State
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Active Toast Notifications
  const [toasts, setToasts] = useState([]);

  // Save Cart to LocalStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cart]);

  // Save Wishlist to LocalStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (error) {
      console.error('Failed to save wishlist to localStorage:', error);
    }
  }, [wishlist]);

  // Toast helper
  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    const parsedQty = Math.max(1, parseInt(quantity, 10) || 1);
    const maxStock = product.stock || 20;

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingItemIndex > -1) {
        const existingItem = prevCart[existingItemIndex];
        const newQty = Math.min(existingItem.quantity + parsedQty, maxStock);
        
        if (existingItem.quantity >= maxStock) {
          addToast(`Maximum stock limit (${maxStock}) reached for this item`, 'warning');
          return prevCart;
        }

        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...existingItem,
          quantity: newQty,
        };
        addToast(`Updated quantity for "${product.name}" (${newQty} in cart)`, 'success');
        return updatedCart;
      } else {
        const newQty = Math.min(parsedQty, maxStock);
        addToast(`Added "${product.name}" to cart`, 'success');
        return [...prevCart, { ...product, quantity: newQty }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === productId);
      if (itemToRemove) {
        addToast(`Removed "${itemToRemove.name}" from cart`, 'info');
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    const qty = parseInt(newQuantity, 10);

    if (isNaN(qty) || qty <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const maxStock = item.stock || 20;
          if (qty > maxStock) {
            addToast(`Only ${maxStock} units available in stock`, 'warning');
            return { ...item, quantity: maxStock };
          }
          return { ...item, quantity: qty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
    addToast('Your shopping cart has been cleared', 'info');
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        addToast(`Removed "${product.name}" from wishlist`, 'info');
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        addToast(`Saved "${product.name}" to wishlist`, 'success');
        return [...prevWishlist, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Promo code operations
  const applyCoupon = (codeStr) => {
    if (!codeStr || !codeStr.trim()) {
      addToast('Please enter a valid coupon code', 'warning');
      return { success: false, message: 'Please enter a coupon code' };
    }

    const cleanCode = codeStr.trim().toUpperCase();
    const coupon = PROMO_CODES[cleanCode];

    if (coupon) {
      setAppliedCoupon(coupon);
      addToast(`Promo code "${cleanCode}" applied! ${coupon.discountPercent}% discount activated`, 'success');
      return { success: true, message: `Applied ${coupon.discountPercent}% discount!` };
    } else {
      addToast(`Invalid promo code "${cleanCode}". Try THIRANEX10 or WELCOME20`, 'warning');
      return { success: false, message: 'Invalid promo code' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast('Coupon removed', 'info');
  };

  // Calculated totals
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const discountAmount = appliedCoupon
    ? (subtotal * appliedCoupon.discountPercent) / 100
    : 0;

  const FREE_SHIPPING_THRESHOLD = 99.0;
  const shippingCost = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 9.99;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // 8% estimated standard tax on discounted subtotal
  const estimatedTax = subtotal > 0 ? (subtotal - discountAmount) * 0.08 : 0;

  const totalPrice =
    subtotal > 0
      ? Math.max(0, subtotal - discountAmount + shippingCost + estimatedTax)
      : 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        totalItems,
        subtotal,
        discountAmount,
        shippingCost,
        FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        estimatedTax,
        totalPrice,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
