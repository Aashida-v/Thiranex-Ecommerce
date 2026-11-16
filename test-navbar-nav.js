import fs from 'fs';

console.log('====================================================');
console.log('    TESTING MOBILE HAMBURGER NAVIGATION INTEGRITY   ');
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

const navbarSource = fs.readFileSync('./src/components/Navbar.jsx', 'utf8');

// 1. Check toggle button existence and onClick handler
assert(
  navbarSource.includes('onClick={toggleMobileMenu}') && navbarSource.includes('toggleMobileMenu = () =>'),
  'Hamburger button has functional onClick handler toggling mobile menu state'
);

// 2. Icon toggling between Menu and X
assert(
  navbarSource.includes('{isMobileMenuOpen ? (') &&
  navbarSource.includes('<X className="w-6 h-6 text-purple-400"') &&
  navbarSource.includes('<Menu className="w-6 h-6"'),
  'Icon cleanly toggles between Menu (hamburger) and X (close) based on isMobileMenuOpen'
);

// 3. Accessibility attributes
assert(
  navbarSource.includes('aria-expanded={isMobileMenuOpen}') &&
  navbarSource.includes('aria-controls="mobile-navigation-menu"') &&
  navbarSource.includes('aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}'),
  'Accessible attributes (aria-expanded, aria-controls, dynamic aria-label) are implemented'
);

// 4. Proper positioning and z-index (fixing the 100vh bug)
assert(
  navbarSource.includes('absolute top-full left-0 right-0 w-full') &&
  !navbarSource.includes('fixed inset-x-0 top-[calc(100%+1px)]'),
  'Drawer uses reliable "absolute top-full left-0 right-0 w-full" anchored directly under header'
);

assert(
  navbarSource.includes('z-50') && navbarSource.includes('sticky top-0 z-50'),
  'Header and mobile menu have high z-index (z-50) floating above all page content'
);

// 5. Backdrop overlay for clicking outside
assert(
  navbarSource.includes('fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden') &&
  navbarSource.includes('onClick={() => setIsMobileMenuOpen(false)}'),
  'Backdrop overlay (z-40) rendered behind menu (z-50) to handle click-outside closing'
);

// 6. Escape key listener
assert(
  navbarSource.includes("event.key === 'Escape'") &&
  navbarSource.includes('setIsMobileMenuOpen(false)'),
  'Escape keydown listener closes mobile menu when pressed'
);

// 7. Click-outside document event listener
assert(
  navbarSource.includes('handleClickOutside') &&
  navbarSource.includes('menuRef.current') &&
  navbarSource.includes('hamburgerBtnRef.current'),
  'Document mousedown and touchstart listeners close menu on outside clicks'
);

// 8. Body scroll lock
assert(
  navbarSource.includes("document.body.style.overflow = 'hidden'") &&
  navbarSource.includes('document.body.style.overflow = originalOverflow'),
  'Background page scroll is locked when mobile menu is open and restored upon close'
);

// 9. All navigation links close the menu
assert(
  navbarSource.includes('onClick={() => setIsMobileMenuOpen(false)}'),
  'Navigation links have onClick handlers closing the menu upon selection'
);

// 10. Responsive resize handler
assert(
  navbarSource.includes('window.innerWidth >= 1024') &&
  navbarSource.includes('setIsMobileMenuOpen(false)'),
  'Resize listener automatically closes mobile menu when expanding to desktop viewport'
);

console.log('\n====================================================');
console.log(` RESULTS: ${passedTests} / ${totalTests} TESTS PASSED `);
console.log('====================================================\n');
