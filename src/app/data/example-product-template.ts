import { ProductPageData } from '@/app/components/ProductPageTemplate';

/**
 * PRODUCT PAGE TEMPLATE
 * 
 * This is an example template showing how to create a new product page.
 * Copy this file, rename it to your product, and fill in your product data.
 * 
 * USAGE:
 * 1. Copy this file: cp example-product-template.ts your-product-name.ts
 * 2. Import your images (or use placeholder URLs for ImageWithFallback)
 * 3. Fill in all the product data below
 * 4. Import the data in App.tsx: import { yourProductData } from '@/app/data/your-product-name';
 * 5. Use it: <ProductPageTemplate data={yourProductData} />
 * 
 * IMPORTANT: 
 * - For images, you can either:
 *   a) Use existing figma:asset imports from your Figma design
 *   b) Use ImageWithFallback component which accepts any URL
 * - All fields are required unless marked with "?"
 * - Arrays can have any number of items
 * - Tab colors: 'orange' | 'blue' | 'emerald' | 'purple' | 'indigo' | 'green'
 */

// Example: Import your images here
// import yourLogo from 'figma:asset/your-logo-hash.png';
// import yourProduct from 'figma:asset/your-product-hash.png';
// import yourHero from 'figma:asset/your-hero-hash.png';

export const exampleProductData: ProductPageData = {
  // ============================================================
  // HERO SECTION - The top banner with gradient background
  // ============================================================
  heroBackground: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920', // Space/tech background
  productCategory: 'RF Amplifier',           // Small badge next to title (e.g., "GPS Antenna", "RF Module")
  productReference: 'RF-2024-X',            // Reference number shown as "Ref: ..."
  productTitle: 'Example Product Name',     // Main large title
  productDescription: 'Brief description of your product highlighting its key features and applications. Keep it concise but informative.',
  
  // ============================================================
  // PRODUCT HIGHLIGHTS CARD - The three-column card
  // ============================================================
  origin: {
    country: 'United States',               // Country name
    flagCode: 'us',                         // Two-letter country code (ISO 3166-1 alpha-2)
                                            // Common codes: us, ca, gb, de, fr, jp, cn
  },
  manufacturerLogo: 'https://via.placeholder.com/225x100/e2e8f0/64748b?text=Logo',  // Your manufacturer logo
  productImage: 'https://via.placeholder.com/280x280/f1f5f9/64748b?text=Product',   // Your product image
  datasheetUrl: '#',                        // Optional: Remove or set to undefined if no datasheet
  
  // ============================================================
  // COMPONENT SPECIFICATIONS - The main specifications table
  // ============================================================
  componentSpec: {
    mpn: 'EXAMPLE-MPN-001',                 // Manufacturer Part Number
    standards: [                            // Array of standards (can be empty [])
      'MIL-STD-461',
      'MIL-STD-810',
    ],
    technology: 'GaN',                      // Technology type
    radiation: 'Report Available',          // Radiation info (or 'N/A')
    bands: [                                // Frequency bands (array)
      'L-Band (1-2 GHz)',
      'S-Band (2-4 GHz)',
    ],
    vswr: '<1.5',                          // VSWR specification
    polarization: 'Linear',                 // Polarization type
    lnaGain: '30 dB',                      // LNA Gain (can be empty string '')
  },
  
  // ============================================================
  // DETAILED SPECIFICATIONS - Three columns of spec tables
  // ============================================================
  
  // Column 1: Electrical Specifications
  electricalSpecs: [
    { label: 'Supply Voltage', value: '12V ± 5%' },
    { label: 'Current Draw', value: '500 mA max' },
    { label: 'Power Consumption', value: '6W typical' },
    { label: 'Output Power', value: '50W max' },
    { label: 'Connector Type', value: 'SMA Female' },
    { label: 'Impedance', value: '50 Ohm' },
  ],

  // LNA Performance Specifications
  lnaPerformanceSpecs: [
    { label: 'LNA Noise', value: '< 3dB' },
    { label: 'LNA P1dB out', value: '10dBm' },
  ],

  // Column 2: Mechanical Specifications
  mechanicalSpecs: [
    { label: 'Weight', value: '2.5 kg' },
    { label: 'Dimensions', value: '150 x 100 x 50 mm' },
    { label: 'Housing Material', value: 'Aluminum Alloy' },
    { label: 'Form Factor', value: 'Rack Mount' },
    { label: 'Mounting', value: 'Standard 19" Rack' },
  ],
  
  // Column 3: Environmental Specifications
  environmentalSpecs: [
    { label: 'Operating Temp (Max)', value: '+70°C' },
    { label: 'Operating Temp (Min)', value: '-40°C' },
    { label: 'Storage Temperature', value: '-55°C to +85°C' },
    { label: 'Humidity', value: '0-95% RH non-condensing' },
    { label: 'Altitude', value: 'Up to 10,000 ft' },
    { label: 'Vibration', value: 'MIL-STD-810 compliant' },
    { label: 'IP Rating', value: 'IP65' },
  ],

  // Column 4: Additional Specifications
  additionalSpecs: [
    { label: 'Warranty', value: '3 Years' },
    { label: 'Lead Time', value: '6-8 Weeks' },
    { label: 'ECCN', value: 'EAR99' },
    { label: 'ITAR Status', value: 'Non-ITAR' },
    { label: 'RoHS Compliant', value: 'Yes' },
  ],

  // ============================================================
  // NAVIGATION TABS - Industry/application categories
  // ============================================================
  tabs: [
    { name: 'Aviation', color: 'orange' },
    { name: 'Space', color: 'blue' },
    { name: 'Defense', color: 'emerald' },
    { name: 'Commercial', color: 'purple' },
    { name: 'R & D', color: 'indigo' },
  ],
  defaultTab: 'Aviation',                    // Optional: Which tab is selected by default
  
  // ============================================================
  // MANUFACTURER INFORMATION - Company details
  // ============================================================
  manufacturerInfo: {
    name: 'Example Technologies Inc.',
    website: {
      url: 'https://www.example.com',
      displayText: 'example.com',           // Shorter version for display
    },
    qualitySystem: 'ISO 9001:2015 Certified',
    description: [
      // First paragraph - company name will be auto-bolded
      'Example Technologies Inc. is a leading manufacturer of high-performance RF components and systems for aerospace, defense, and commercial applications since 1995.',
      // Additional paragraphs
      'The company specializes in advanced amplifier technologies, offering a comprehensive range of products from low-noise amplifiers to high-power solid-state systems. All products are designed and manufactured to meet the most stringent military and commercial standards.',
    ],
  },
};

/**
 * QUICK REFERENCE GUIDE
 * 
 * Common Flag Codes:
 * - us: United States
 * - ca: Canada
 * - gb: United Kingdom
 * - de: Germany
 * - fr: France
 * - jp: Japan
 * - cn: China
 * - in: India
 * - au: Australia
 * - Full list: https://flagicons.lipis.dev/
 * 
 * Tab Colors:
 * - orange: Warm, energetic (good for Aviation, Commercial)
 * - blue: Professional, trustworthy (good for Space, Marine)
 * - emerald: Strong, reliable (good for Defense, Industrial)
 * - purple: Innovative, creative (good for R&D, Tech)
 * - indigo: Deep, sophisticated (good for Medical, Scientific)
 * - green: Natural, sustainable (good for Environmental, Green Tech)
 * 
 * Image Guidelines:
 * - Hero Background: 1920x400px minimum, dark overlay will be applied
 * - Manufacturer Logo: 225x100px recommended, transparent background works best
 * - Product Image: 280x280px recommended, centered on transparent/white background
 * 
 * Tips:
 * - Keep product description under 200 characters for best display
 * - Use consistent units across specifications
 * - Empty strings ('') are valid for optional spec fields
 * - Arrays can have 1-10+ items, table will adjust automatically
 * - Manufacturer description supports 2-4 paragraphs
 */
