// Automated Verification Test for Thiranex Store
import { PRODUCTS, CATEGORIES, PROMO_CODES } from './src/data/products.js';
import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('      THIRANEX STORE - AUTOMATED QUALITY AUDIT      ');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName}`);
    process.exitCode = 1;
  }
}

// 1. DATASET VALIDATION
console.log('--- 1. Product & Category Data Integrity ---');
assert(PRODUCTS.length >= 12, `Product catalog has at least 12 products (found ${PRODUCTS.length})`);

const expectedCategories = ['Electronics', 'Fashion', 'Accessories', 'Home & Living'];
assert(
  CATEGORIES.length >= 4 && expectedCategories.every(cat => CATEGORIES.some(c => c.name === cat)),
  'All 4 core categories are present'
);

// Check uniqueness of IDs
const productIds = PRODUCTS.map(p => p.id);
const uniqueIds = new Set(productIds);
assert(productIds.length === uniqueIds.size, 'All product IDs are completely unique');

// Validate every product object
let allProductsValid = true;
PRODUCTS.forEach((product, i) => {
  if (!product.id || typeof product.id !== 'string') allProductsValid = false;
  if (!product.name || typeof product.name !== 'string') allProductsValid = false;
  if (typeof product.price !== 'number' || product.price <= 0) allProductsValid = false;
  if (!product.category || !expectedCategories.includes(product.category)) allProductsValid = false;
  if (!product.description || product.description.length < 20) allProductsValid = false;
  if (!product.imageUrl || !product.imageUrl.startsWith('https://')) allProductsValid = false;
  if (typeof product.rating !== 'number' || product.rating < 1 || product.rating > 5) allProductsValid = false;
  if (typeof product.stock !== 'number' || product.stock < 0) allProductsValid = false;
  if (typeof product.inStock !== 'boolean') allProductsValid = false;
});
assert(allProductsValid, 'Every product has valid ID, Name, Price, Category, Description, Image, Rating, Stock');

// 2. PROMO CODES
console.log('\n--- 2. Promotional Discount Logic ---');
assert(PROMO_CODES['THIRANEX10'] && PROMO_CODES['THIRANEX10'].discountPercent === 10, 'THIRANEX10 coupon configured for 10%');
assert(PROMO_CODES['WELCOME20'] && PROMO_CODES['WELCOME20'].discountPercent === 20, 'WELCOME20 coupon configured for 20%');

// 3. PRODUCTION BUILD ARTIFACTS
console.log('\n--- 3. Production Build Artifacts ---');
const distExists = fs.existsSync('./dist');
assert(distExists, 'Production build directory "dist/" exists');

const distIndexHtml = fs.existsSync('./dist/index.html');
assert(distIndexHtml, 'dist/index.html generated');

if (distIndexHtml) {
  const htmlContent = fs.readFileSync('./dist/index.html', 'utf8');
  assert(htmlContent.includes('THIRANEX STORE'), 'dist/index.html contains branding title');
  assert(htmlContent.includes('viewport'), 'dist/index.html includes viewport meta tag');
}

// 4. DEPLOYMENT CONFIGURATION
console.log('\n--- 4. Vercel Deployment Readiness ---');
const vercelConfigExists = fs.existsSync('./vercel.json');
assert(vercelConfigExists, 'vercel.json SPA rewrite config exists');

if (vercelConfigExists) {
  const vercelConfig = JSON.parse(fs.readFileSync('./vercel.json', 'utf8'));
  assert(
    Array.isArray(vercelConfig.rewrites) && vercelConfig.rewrites.some(r => r.source === '/(.*)' && r.destination === '/index.html'),
    'vercel.json rewrites all client-side routes to /index.html'
  );
}

// 5. COMPONENT STRUCTURE
console.log('\n--- 5. Modular Component Architecture ---');
const requiredComponents = [
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx',
  'src/components/ProductCard.jsx',
  'src/components/SearchBar.jsx',
  'src/components/FilterSidebar.jsx',
  'src/components/Toast.jsx',
  'src/components/ScrollToTop.jsx',
  'src/pages/Home.jsx',
  'src/pages/Products.jsx',
  'src/pages/ProductDetails.jsx',
  'src/pages/Cart.jsx',
  'src/pages/NotFound.jsx',
  'src/context/CartContext.jsx',
];

let allComponentsExist = true;
requiredComponents.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`Missing component: ${file}`);
    allComponentsExist = false;
  }
});
assert(allComponentsExist, 'All 13 modular component and page files exist');

console.log('\n====================================================');
console.log(` AUDIT SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED `);
console.log('====================================================\n');
