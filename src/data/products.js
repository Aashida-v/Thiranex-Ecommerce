export const CATEGORIES = [
  {
    id: 'Electronics',
    name: 'Electronics',
    tagline: 'Cutting-edge tech, pristine audio & premium displays',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    itemCount: 4,
    color: 'from-purple-900/80 to-black',
  },
  {
    id: 'Fashion',
    name: 'Fashion',
    tagline: 'Contemporary streetwear & timeless minimalist tailoring',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
    itemCount: 4,
    color: 'from-violet-950/80 to-black',
  },
  {
    id: 'Accessories',
    name: 'Accessories',
    tagline: 'Precision chronographs, titanium eyewear & fine leather',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    itemCount: 4,
    color: 'from-purple-950/80 to-black',
  },
  {
    id: 'Home & Living',
    name: 'Home & Living',
    tagline: 'Architectural lighting, artisanal ceramics & cozy textiles',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
    itemCount: 4,
    color: 'from-indigo-950/80 to-black',
  },
];

export const PRODUCTS = [
  // --- ELECTRONICS ---
  {
    id: 'thx-101',
    name: 'Thiranex Apex ANC Wireless Headphones',
    category: 'Electronics',
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviewCount: 214,
    stock: 18,
    inStock: true,
    badge: 'Best Seller',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    description: 'Immerse yourself in concert-hall acoustic clarity. Features hybrid active noise cancellation, custom 40mm beryllium drivers, 45-hour battery life, and plush memory foam ear cushions.',
    features: [
      'Hybrid Adaptive Active Noise Cancellation with Transparency Mode',
      'Custom 40mm Beryllium Drivers for deep bass and crystalline highs',
      'Up to 45 hours playtime on single charge (10 min charge = 5 hours)',
      'Multipoint Bluetooth 5.3 connection with ultra-low latency mode'
    ],
    specs: {
      'Driver Size': '40mm Beryllium',
      'Frequency Response': '10Hz – 40,000Hz',
      'Battery Life': '45 Hours (ANC ON)',
      'Weight': '265g',
      'Connectivity': 'Bluetooth 5.3, USB-C, 3.5mm Jack'
    }
  },
  {
    id: 'thx-102',
    name: 'AuraStream 4K Ultra OLED Curved Monitor',
    category: 'Electronics',
    price: 649.99,
    originalPrice: 799.99,
    rating: 4.8,
    reviewCount: 92,
    stock: 7,
    inStock: true,
    badge: 'Trending',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
    description: 'A breathtaking 32-inch 4K OLED display engineered for creators and gamers. Boasting a 144Hz refresh rate, 99.5% DCI-P3 color gamut, and infinite contrast blacks.',
    features: [
      '32-inch Quantum Dot OLED panel with true 10-bit color',
      '144Hz Refresh Rate with 0.03ms response time (G-Sync & FreeSync)',
      '99.5% DCI-P3 Color Gamut calibrated from the factory (Delta E < 1)',
      'Single cable 90W USB-C hub with KVM switch functionality'
    ],
    specs: {
      'Screen Size': '32 Inches',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Panel Type': 'QD-OLED 1800R Curved',
      'Refresh Rate': '144Hz',
      'Ports': '2x HDMI 2.1, 1x DP 1.4, 1x USB-C (90W PD)'
    }
  },
  {
    id: 'thx-103',
    name: 'PulseTech Horizon Smartwatch Pro',
    category: 'Electronics',
    price: 229.00,
    originalPrice: 289.00,
    rating: 4.7,
    reviewCount: 185,
    stock: 24,
    inStock: true,
    badge: 'Popular',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    description: 'Elevate your performance and wellness tracking. Encased in aerospace-grade titanium with an always-on sapphire AMOLED display, ECG monitoring, and GPS mapping.',
    features: [
      'Aerospace-Grade Grade 5 Titanium case with Sapphire Crystal Glass',
      'Continuous Bio-Sensor: ECG, SpO2, HRV, Sleep Quality, and Stress Index',
      'Multi-Band Dual-Frequency GNSS (GPS, Galileo, GLONASS) for exact tracking',
      'Up to 14 days standard battery life, 5ATM water resistance up to 50m'
    ],
    specs: {
      'Case Material': 'Titanium Alloy',
      'Display': '1.43" AMOLED (466x466)',
      'Battery Life': '14 Days Typical',
      'Water Resistance': '5 ATM (50 Meters)',
      'Compatibility': 'iOS & Android'
    }
  },
  {
    id: 'thx-104',
    name: 'Vortex Mini Hi-Fi Bluetooth Speaker',
    category: 'Electronics',
    price: 119.50,
    originalPrice: 149.00,
    rating: 4.6,
    reviewCount: 76,
    stock: 12,
    inStock: true,
    badge: 'Sale',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
    description: 'Room-filling 360-degree acoustic performance in a compact, anodized aluminum chassis. IP67 waterproof with 20-hour wireless playtime.',
    features: [
      'True 360-degree omnidirectional acoustic diffusion with dual passive radiators',
      'Full IP67 dustproof and waterproof rated (can be submerged in water)',
      'Stereo pairing capability: combine two Vortex speakers wirelessly',
      'Up to 20 hours battery life with built-in powerbank function'
    ],
    specs: {
      'Power Output': '30W RMS',
      'Battery Capacity': '5200 mAh (20 Hours)',
      'Ingress Protection': 'IP67 Waterproof',
      'Dimensions': '175 x 70 x 70 mm',
      'Weight': '580g'
    }
  },

  // --- FASHION ---
  {
    id: 'thx-201',
    name: 'Veloce Minimalist Merino Wool Hoodie',
    category: 'Fashion',
    price: 135.00,
    originalPrice: 165.00,
    rating: 4.8,
    reviewCount: 64,
    stock: 15,
    inStock: true,
    badge: 'New Arrival',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
    description: 'Crafted from 100% ultrafine 18.5-micron Australian merino wool. Naturally thermo-regulating, anti-odor, and exquisitely soft against the skin.',
    features: [
      '100% ethically sourced 18.5-micron superfine Merino wool',
      'Natural temperature regulation — keeps you warm in winter, cool in spring',
      'Minimalist seamless raglan sleeve cut with hidden zippered security pocket',
      'Pre-shrunk fabric with reinforced double-needle coverstitching'
    ],
    specs: {
      'Material': '100% Superfine Merino Wool',
      'Fabric Weight': '320 GSM',
      'Fit': 'Athletic Tailored',
      'Care': 'Machine washable gentle wool cycle',
      'Origin': 'Sustainably milled in Portugal'
    }
  },
  {
    id: 'thx-202',
    name: 'Monochrome Tailored Trench Coat',
    category: 'Fashion',
    price: 249.00,
    originalPrice: 310.00,
    rating: 4.9,
    reviewCount: 48,
    stock: 9,
    inStock: true,
    badge: 'Premium',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80',
    description: 'The epitome of architectural outerwear. Designed with weather-resistant gabardine cotton, structured lapels, horn buttons, and a belted silhouette.',
    features: [
      'Water-repellent compact cotton gabardine weave',
      'Double-breasted storm flap front with genuine buffalo horn buttons',
      'Detachable waist belt with brushed gunmetal D-rings',
      'Silky viscose interior lining with dual interior breast pockets'
    ],
    specs: {
      'Shell': '100% Water-Resistant Gabardine Cotton',
      'Lining': '100% Bemberg Cupro Viscose',
      'Length': 'Below-the-knee 110cm',
      'Hardware': 'Brushed Gunmetal',
      'Cut': 'Modern Structured Regular'
    }
  },
  {
    id: 'thx-203',
    name: 'Urban Drift Oversized Tech Jacket',
    category: 'Fashion',
    price: 185.00,
    originalPrice: 220.00,
    rating: 4.7,
    reviewCount: 112,
    stock: 19,
    inStock: true,
    badge: 'Best Seller',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80',
    description: 'Engineered for modern urban environments. Built from ripstop Cordura nylon with breathable mesh vents, taped seams, and magnetic utility closures.',
    features: [
      'Weatherproof 3-layer Cordura nylon shell with 10k waterproof rating',
      'Fidlock magnetic snap closures on all modular cargo pockets',
      'Underarm two-way zipper ventilation for temperature modulation',
      'Stowaway adjustable hood with integrated brim'
    ],
    specs: {
      'Fabric': 'Cordura Ripstop 3L Nylon',
      'Waterproof Rating': '10,000mm',
      'Breathability': '10,000 g/m²/24h',
      'Zippers': 'YKK AquaGuard Waterproof',
      'Fit': 'Contemporary Oversized'
    }
  },
  {
    id: 'thx-204',
    name: 'Signature Relaxed Fit Heavy Tee',
    category: 'Fashion',
    price: 48.00,
    originalPrice: 60.00,
    rating: 4.5,
    reviewCount: 310,
    stock: 45,
    inStock: true,
    badge: 'Essential',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
    description: 'The definitive everyday luxury tee. Crafted from 280 GSM heavyweight organic combed cotton with dropped shoulders and a thick ribbed collar that never sags.',
    features: [
      '100% GOTS-Certified Heavyweight Organic Combed Cotton (280 GSM)',
      'Thick 1.25" rib knit crewneck collar that maintains shape over years',
      'Clean boxy silhouette with relaxed dropped shoulders',
      'Garment dyed and enzyme-washed for incredible softness'
    ],
    specs: {
      'Composition': '100% Organic Combed Cotton',
      'Weight': '280 GSM (8.25 oz)',
      'Color Fastness': 'Grade 4+ Reactive Dye',
      'Fit': 'Boxy Relaxed Drop-Shoulder',
      'Certifications': 'GOTS & OEKO-TEX Standard 100'
    }
  },

  // --- ACCESSORIES ---
  {
    id: 'thx-301',
    name: 'Eclipse Chronograph Sapphire Watch',
    category: 'Accessories',
    price: 389.00,
    originalPrice: 450.00,
    rating: 4.9,
    reviewCount: 87,
    stock: 8,
    inStock: true,
    badge: 'Limited Edition',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80',
    description: 'Precision Japanese automatic chronograph movement housed in a hand-polished 316L stainless steel case. Protected by scratchproof anti-reflective sapphire crystal.',
    features: [
      'Japanese VK64 Meca-Quartz movement with sweeping chronograph hand',
      'Scratch-resistant synthetic sapphire crystal with triple anti-reflective coating',
      'Full grain vegetable-tanned Italian bridle leather strap with quick release',
      'Luminescent Super-LumiNova BGW9 markings for vivid nighttime visibility'
    ],
    specs: {
      'Case Diameter': '40mm',
      'Thickness': '11.2mm',
      'Lug-to-Lug': '47mm',
      'Water Resistance': '10 ATM (100 Meters)',
      'Glass': 'Domed Sapphire Crystal'
    }
  },
  {
    id: 'thx-302',
    name: 'AeroShield Polarized Titanium Sunglasses',
    category: 'Accessories',
    price: 149.00,
    originalPrice: 185.00,
    rating: 4.8,
    reviewCount: 142,
    stock: 22,
    inStock: true,
    badge: 'Trending',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
    description: 'Weighing only 18 grams. Ultra-flexible beta-titanium wireframe fitted with 7-layer polarized lenses offering complete UV400 glare protection.',
    features: [
      'Ultralight Japanese Beta-Titanium frame weighing under 18 grams',
      '7-Layer TAC polarized lenses with oleophobic and hydrophobic coatings',
      'Screwless spring hinges tested for 50,000+ flex cycles',
      'Hypoallergenic medical-grade silicone nose pads for zero slip'
    ],
    specs: {
      'Frame Material': 'Pure Beta-Titanium',
      'Lens': 'Triacetate Cellulose Polarized (UV400)',
      'Weight': '18 Grams',
      'Bridge Width': '19mm',
      'Includes': 'Magnetic hardshell case & microfiber cleaning cloth'
    }
  },
  {
    id: 'thx-303',
    name: 'Nox Minimalist Leather Cardholder',
    category: 'Accessories',
    price: 58.00,
    originalPrice: 75.00,
    rating: 4.6,
    reviewCount: 95,
    stock: 30,
    inStock: true,
    badge: 'Popular',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80',
    description: 'Slimline silhouette engineered to hold up to 8 cards plus folded cash without bulk. Built from full-grain Pueblo leather with integrated RFID signal protection.',
    features: [
      'Full-grain Italian vegetable-tanned Pueblo leather that patinas gorgeously',
      'Integrated aerospace RFID-blocking composite layer protects against digital skimming',
      'Hand-burnished edges sealed with natural beeswax',
      'Central cash compartment with 4 exterior rapid-access card slots'
    ],
    specs: {
      'Dimensions': '10.2 x 7.4 x 0.5 cm',
      'Capacity': '6-8 Cards + Cash',
      'Leather': 'Italian Badalassi Carlo Pueblo',
      'Stitching': 'Fil Au Chinois Waxed Linen',
      'Warranty': 'Lifetime Craftsmanship Guarantee'
    }
  },
  {
    id: 'thx-304',
    name: 'Vanguard Waterproof Weekender Duffle',
    category: 'Accessories',
    price: 168.00,
    originalPrice: 210.00,
    rating: 4.8,
    reviewCount: 53,
    stock: 14,
    inStock: true,
    badge: 'New Arrival',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    description: 'The quintessential 40L travel companion. Features a dedicated ventilated shoe compartment, padded 16-inch laptop pocket, and waterproof ballistic fabric.',
    features: [
      'Heavy-duty 1680D Ballistic Nylon with polyurethane water-repellent backing',
      'Isolated ventilated compartment for footwear or laundry up to size 13',
      'Padded quick-access compartment fits up to 16-inch MacBook Pro',
      'Detachable ergonomic air-mesh shoulder strap with aluminum anodized hardware'
    ],
    specs: {
      'Volume': '40 Liters (Carry-On Approved)',
      'Dimensions': '52 x 28 x 26 cm',
      'Weight': '1.1 kg',
      'Hardware': 'Anodized Aluminum Hooks & YKK Zippers',
      'Trolley Sleeve': 'Fits standard suitcase pull handles'
    }
  },

  // --- HOME & LIVING ---
  {
    id: 'thx-401',
    name: 'Lumina Sculptural Smart Ambient Lamp',
    category: 'Home & Living',
    price: 145.00,
    originalPrice: 180.00,
    rating: 4.9,
    reviewCount: 134,
    stock: 16,
    inStock: true,
    badge: 'Staff Pick',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
    description: 'A striking architectural centerpiece for your workspace or living room. Features stepless touch dimming, circadian lighting cycles, and a brushed brass finish.',
    features: [
      'Stepless capacitive touch dimming from 1% to 100% brightness',
      'Circadian rhythm mode: shifts seamlessly from morning daylight (5000K) to evening amber (2200K)',
      'Solid brushed brass base with hand-blown frosted opal glass shade',
      'Integrated wireless fast-charging pad on top of base (15W Qi-compatible)'
    ],
    specs: {
      'Light Output': '850 Lumens (CRI > 95)',
      'Color Temperature': '2200K – 5000K',
      'Power Consumption': '12W Max',
      'Materials': 'Brushed Solid Brass & Opal Glass',
      'Cord Length': '2.0m Braided Fabric Cable'
    }
  },
  {
    id: 'thx-402',
    name: 'Zenith Ceramic Cold Brew & Pour Over Kit',
    category: 'Home & Living',
    price: 89.00,
    originalPrice: 110.00,
    rating: 4.7,
    reviewCount: 78,
    stock: 20,
    inStock: true,
    badge: 'Best Seller',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    description: 'Handcrafted matte black ceramic brewer pairing artisanal pour-over with 24-hour slow cold brew extraction. Includes dual micro-mesh laser stainless filters.',
    features: [
      'Dual functionality: switch between slow-immersion cold brew and precision pour-over',
      'High-fired matte stoneware ceramic keeps thermal stability during extraction',
      'Laser-etched 304 food-grade stainless steel micro-filter requires zero paper filters',
      'Borosilicate glass carafe with silicone insulated grip and measurement markings'
    ],
    specs: {
      'Carafe Capacity': '900ml (30 oz / 4 cups)',
      'Material': 'High-Fired Stoneware & Borosilicate Glass',
      'Dishwasher Safe': 'Yes (all components)',
      'Filter': '0.2 Micron Reusable Stainless Steel',
      'Origin': 'Handcrafted in Kyoto, Japan'
    }
  },
  {
    id: 'thx-403',
    name: 'Komorebi Nordic Wool Throw Blanket',
    category: 'Home & Living',
    price: 112.00,
    originalPrice: 135.00,
    rating: 4.8,
    reviewCount: 62,
    stock: 11,
    inStock: true,
    badge: 'Popular',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    description: 'Woven from 100% pure Scandinavian new virgin wool. Showcases an understated geometric jacquard pattern with fringed edges for timeless comfort.',
    features: [
      '100% Pure Scandinavian New Virgin Wool woven in traditional mills',
      'Hypoallergenic, breathable, and naturally moisture-wicking warmth',
      'Reversible monochrome geometric pattern with hand-twisted fringed ends',
      'OEKO-TEX certified: free of harsh chemical treatments and synthetic dyes'
    ],
    specs: {
      'Dimensions': '130 x 180 cm (51" x 71")',
      'Weight': '980 Grams',
      'Composition': '100% Pure Virgin Wool',
      'Weave': 'Double-Faced Jacquard',
      'Care': 'Dry clean or hand wash cold'
    }
  },
  {
    id: 'thx-404',
    name: 'AromaPure Ultrasonic Ceramic Diffuser',
    category: 'Home & Living',
    price: 74.00,
    originalPrice: 95.00,
    rating: 4.6,
    reviewCount: 89,
    stock: 25,
    inStock: true,
    badge: 'Trending',
    isFeatured: false,
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80',
    description: 'Transform your living space into a serene sanctuary. Ultrasonic 2.4MHz atomization emits a whisper-quiet micro-mist inside a matte stone ceramic cover.',
    features: [
      'Whisper-quiet 2.4 MHz ultrasonic vibration preserves essential oil purity',
      'Textured matte ceramic stone cover sculpted by hand',
      'Dual mist settings: continuous (5 hours) or interval (10 hours)',
      'Soft ambient LED illumination with warm candlelight pulsation and auto shut-off'
    ],
    specs: {
      'Water Tank Capacity': '180 ml',
      'Coverage Area': 'Up to 450 sq. ft.',
      'Noise Level': '< 20 dB (ultra-silent)',
      'Dimensions': '18 x 9 x 9 cm',
      'Safety': 'BPA-Free with Auto Waterless Shutoff'
    }
  }
];

export const PROMO_CODES = {
  'THIRANEX10': {
    code: 'THIRANEX10',
    discountPercent: 10,
    description: '10% off your entire order'
  },
  'WELCOME20': {
    code: 'WELCOME20',
    discountPercent: 20,
    description: '20% off for new Thiranex club members'
  },
  'CAPSTONE': {
    code: 'CAPSTONE',
    discountPercent: 15,
    description: '15% Capstone Project special evaluator discount'
  }
};
