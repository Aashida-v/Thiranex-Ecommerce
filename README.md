# 🛍️ THIRANEX STORE — Premium E-Commerce Web Application

> **Web Development Internship Capstone Project**  
> Built by **Aashida** | Production-Ready React & Vite E-Commerce Application

![Thiranex Store Banner](https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80)

[![Vite](https://img.shields.io/badge/Vite-5.4%2B-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18%2F19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4%2B-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](LICENSE)

---

## 📌 1. Project Overview

**Thiranex Store** is a full-featured, modern commercial e-commerce web platform engineered from scratch. Developed as a Web Development Internship Capstone Project, it bridges sophisticated aesthetics with high-performance frontend architecture.

Drawing inspiration from high-end tech lifestyle brands, Thiranex Store features an **obsidian black and royal purple aesthetic**, complete with subtle ambient neon glows, glassmorphic navigation, instant client-side routing, responsive catalog filtering, persistent shopping cart management via LocalStorage, dynamic discount coupons, and a simulated checkout fulfillment flow.

---

## ✨ 2. Key Features

### 💎 User Experience & Design
- **Luxury Minimalist Dark Palette**: Obsidian black (`#090a0f`), deep surface card colors (`#12131c`), vibrant royal purple accents (`#9333ea`, `#a855f7`), and ambient purple glows.
- **Glassmorphic Navigation**: Sticky header with responsive drawer navigation, active link indicator, quick search input, and dynamic cart badges.
- **Micro-Interactions**: Smooth card hover elevation, image shimmer loading skeletons, interactive toast notification feedback, and heart wishlist toggles.
- **Fully Responsive**: Designed mobile-first, ensuring an experience across ultra-wide monitors, laptops, tablets, and smartphones.

### 🔍 Catalog & Discovery
- **Multi-Category Filter**: Real-time filtering across *Electronics*, *Fashion*, *Accessories*, and *Home & Living*.
- **Live Search Bar**: Search products by name, category, or description keywords with instant clear action.
- **Dynamic Sorting**: Sort by *Featured / Recommended*, *Price: Low to High*, *Price: High to Low*, *Highest Rating*, and *Alphabetical (A - Z)*.
- **Interactive Range Slider**: Filter by maximum price budget up to $800.
- **Customer Rating Filter**: Narrow products down to 4.5+ ★, 4.0+ ★, and 3.5+ ★ ratings.
- **Stock Availability Filter**: Toggle to show in-stock items only.
- **Empty State Recovery**: Informative empty state with a 1-click "Reset All Filters" button.

### 📦 Product Details
- **Dynamic Parameter Routing**: Individual product pages rendered via `/product/:id`.
- **High-Definition Imagery**: Lazy-loaded photography with discount badges and stock status indicators.
- **Technical Specs & Shipping Tabs**: Full specifications tables and shipping policies.
- **Interactive Quantity Controls**: Min/max-bounded quantity selector.
- **Related Products Showcase**: Intelligent cross-category recommendations.
- **Social Sharing**: Web Share API integration with automatic clipboard fallback.

### 🛒 Shopping Cart & Checkout
- **Persistent State**: Cart items and quantities automatically synchronize with browser `localStorage`.
- **Free Shipping Gamification**: Visual dynamic progress bar calculating remaining order amount to unlock free shipping over $99.
- **Coupon System**: Real promo code evaluation (`THIRANEX10` for 10% off, `WELCOME20` for 20% off).
- **Comprehensive Cost Breakdown**: Line item totals, subtotal, discount savings, shipping rates, and sales tax (8%).
- **Interactive Checkout Modal**: Clean billing address collection, payment method selector (Credit Card, Apple Pay, PayPal), and instant order confirmation with unique Order Reference IDs (`THX-XXXXXX`).

---

## 🛠️ 3. Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React.js (ES6+ JSX), React DOM |
| **Bundler & Tooling** | Vite, PostCSS, Autoprefixer |
| **Routing** | React Router DOM v6 (BrowserRouter, Routes, Route, useParams, useSearchParams) |
| **Styling & Design** | Tailwind CSS 3.4, Vanilla CSS3 (custom animations, glassmorphism, shimmers) |
| **Icons** | Lucide React |
| **State Management** | Context API (`CartContext`) with custom hook `useCart()` |
| **Persistence** | LocalStorage API with defensive error handling |
| **Typography** | Plus Jakarta Sans & Outfit (Google Fonts) |
| **Deployment Target** | Vercel (configured with `vercel.json` SPA rewrites) |

---

## 📂 4. Folder Structure

```
thiranex-store/
├── dist/                          # Production build output
├── public/                        # Static public assets
├── src/
│   ├── assets/                    # Static images, icons, logos
│   ├── components/                # Modular, reusable UI components
│   │   ├── FilterSidebar.jsx      # Multi-criteria filter & sort controls
│   │   ├── Footer.jsx             # Comprehensive footer with newsletter
│   │   ├── Navbar.jsx             # Sticky glassmorphic navbar & mobile drawer
│   │   ├── ProductCard.jsx        # Interactive product item card
│   │   ├── ScrollToTop.jsx        # Route change scroll reset
│   │   ├── SearchBar.jsx          # Debounced search bar with clear button
│   │   └── Toast.jsx              # Global notification toast system
│   ├── context/
│   │   └── CartContext.jsx        # Global Cart, Wishlist, & Coupon State
│   ├── data/
│   │   └── products.js            # 16 detailed realistic sample products & promo codes
│   ├── pages/                     # Routed page views (code-split via React.lazy)
│   │   ├── Cart.jsx               # Shopping cart & checkout flow
│   │   ├── Home.jsx               # Landing page with hero, categories, offers
│   │   ├── NotFound.jsx           # Custom 404 page with recovery shortcuts
│   │   ├── ProductDetails.jsx     # Deep-dive product specification page
│   │   └── Products.jsx           # Full catalog with search, filter, and sort
│   ├── App.css                    # Custom helper classes & transitions
│   ├── App.jsx                    # Root app with React Router & Suspense
│   ├── index.css                  # Tailwind directives & global resets
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML5 template with SEO & font imports
├── package.json                   # Project dependencies and npm scripts
├── postcss.config.js              # PostCSS Tailwind integration
├── tailwind.config.js             # Custom colors, glows, and theme extension
├── test-thiranex.js               # Automated 13-point quality validation suite
├── vercel.json                    # Vercel SPA routing configuration
└── vite.config.js                 # Vite build & development configuration
```

---

## ⚡ 5. Installation Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Step-by-Step Setup
1. Clone or navigate to the project directory:
   ```bash
   cd thiranex-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🚀 6. Running Locally

To start the local development server:
```bash
npm run dev
```

Open your browser and visit:
```
http://localhost:3000
```
*(or the port reported by the terminal)*

---

## 📦 7. Production Build & Optimization

To compile and bundle the application for production:
```bash
npm run build
```

This creates an optimized, minified bundle in the `dist/` directory with code splitting:
- Every page (`Home`, `Products`, `ProductDetails`, `Cart`, `NotFound`) is isolated into its own lazy chunk.
- Unused code and dead dependencies are stripped.
- CSS is minified via PostCSS and purged through Tailwind CSS.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 8. Deployment Instructions (Vercel)

Thiranex Store includes a pre-configured `vercel.json` file to guarantee that client-side routes (e.g. `/products`, `/product/thx-101`, `/cart`) reload seamlessly without 404 errors:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploying via Vercel CLI
```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Deploy
vercel
```

### Deploying via GitHub & Vercel Dashboard
1. Push your repository to GitHub.
2. Sign in to [Vercel Dashboard](https://vercel.com).
3. Click **Add New...** -> **Project**.
4. Import your `thiranex-store` repository.
5. Framework Preset: **Vite**.
6. Click **Deploy**.

---

## 📸 9. Application Showcase & Visual Tour

| View | Highlights |
|---|---|
| **Home Hero** | High-contrast neon typography, floating product badge, value proposition banner |
| **Catalog Grid** | Responsive 3-column grid, live search, max-price slider, category pills |
| **Product Details** | Zoomable gallery, dynamic stock status, quantity controller, specs tab |
| **Shopping Cart** | Free shipping progress tracker, coupon validation, checkout modal |
| **Order Confirmation**| Simulated order completion celebration with unique reference ID |
| **404 Recovery** | Aesthetic error state with immediate category redirects |

---

## 🔮 10. Future Enhancements

- [ ] **Backend Database Integration**: Connect to Supabase or MongoDB for cloud user authentication.
- [ ] **Payment Gateway**: Integrate Stripe Elements or PayPal SDK for real card processing.
- [ ] **Customer Reviews Submission**: Allow users to leave stars and write comments.
- [ ] **Dark / Light Theme Toggle**: Seamless switch between luxury obsidian and crisp daylight modes.
- [ ] **Order History & User Dashboard**: Save past orders and shipping address books.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
