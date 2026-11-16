import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

// Code splitting with React.lazy
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Premium Loading Skeleton Fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
    <div className="relative w-12 h-12">
      <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-purple-600 animate-ping opacity-75" />
      </div>
    </div>
    <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold animate-pulse">
      Loading Thiranex Store...
    </span>
  </div>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
          <Navbar />
          
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <Toast />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
