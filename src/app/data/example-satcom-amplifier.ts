import { ProductPageData } from '@/app/components/ProductPageTemplate';

/**
 * EXAMPLE: SatCom RF Amplifier Product Page
 * 
 * This is a second example showing how to create a different product
 * using the same template. Notice how the same template creates a 
 * completely different-looking page just by changing the data.
 */

export const satcomAmplifierData: ProductPageData = {
  // Hero Section
  heroBackground: 'https://images.unsplash.com/photo-1650043996692-a51e3d749766?w=1920',
  productCategory: 'RF Power Amplifier',
  productReference: 'SCA-5000',
  productTitle: 'SatCom Alpha-5000 SSPA',
  productDescription: 'Solid-state power amplifier delivering 100W output for satellite communication ground stations. Features GaN technology for maximum efficiency and reliability.',
  
  // Product Highlights
  origin: {
    country: 'United States',
    flagCode: 'us',
  },
  manufacturerLogo: 'https://via.placeholder.com/225x100/1e40af/ffffff?text=SatCom+Tech',
  productImage: 'https://via.placeholder.com/280x280/eff6ff/3b82f6?text=RF+Amplifier',
  datasheetUrl: '#',
  
  // Specifications
  componentSpec: {
    mpn: 'SCA-5000-GaN',
    standards: ['MIL-STD-461F', 'ETSI EN 302 217'],
    technology: 'GaN HEMT',
    radiation: 'Commercial Grade',
    bands: ['C-Band (5.85-6.425 GHz)', 'X-Band (7.9-8.4 GHz)'],
    vswr: '<1.5:1',
    polarization: 'Dual Linear',
    lnaGain: '50 dB',
  },
  
  electricalSpecs: [
    { label: 'Frequency Range', value: '5.85 - 8.4 GHz' },
    { label: 'Output Power', value: '100W (50 dBm)' },
    { label: 'Gain', value: '50 dB ± 2 dB' },
    { label: 'Efficiency', value: '>45% @ P-sat' },
    { label: 'Input Voltage', value: '48 VDC ± 10%' },
    { label: 'Current Draw', value: '12A max @ full power' },
    { label: 'Input/Output', value: 'WR-137 Waveguide' },
    { label: 'Noise Figure', value: '<3.5 dB' },
  ],

  lnaPerformanceSpecs: [
    { label: 'LNA Noise', value: '< 2.5dB' },
    { label: 'LNA P1dB out', value: '12dBm' },
  ],

  mechanicalSpecs: [
    { label: 'Dimensions', value: '483 x 133 x 450 mm' },
    { label: 'Weight', value: '12.5 kg' },
    { label: 'Rack Units', value: '3U 19" Standard' },
    { label: 'Cooling', value: 'Forced Air, Redundant Fans' },
    { label: 'Housing', value: 'Anodized Aluminum' },
    { label: 'Finish', value: 'MIL-A-8625 Type II' },
  ],
  
  environmentalSpecs: [
    { label: 'Operating Temp Range', value: '-20°C to +60°C' },
    { label: 'Storage Temperature', value: '-40°C to +80°C' },
    { label: 'Humidity', value: '5-95% RH non-condensing' },
    { label: 'Altitude', value: 'Sea level to 15,000 ft' },
    { label: 'Vibration', value: 'MIL-STD-810G compliant' },
    { label: 'Shock', value: '40G, 11ms half-sine' },
    { label: 'EMI/EMC', value: 'CE, FCC Part 15 Class A' },
    { label: 'MTBF', value: '>100,000 hours @ 25°C' },
  ],

  additionalSpecs: [
    { label: 'Warranty', value: '5 Years' },
    { label: 'Lead Time', value: '10-14 Weeks' },
    { label: 'Certifications', value: 'FCC, CE, IC' },
    { label: 'ITAR Status', value: 'ITAR Controlled' },
    { label: 'Country of Origin', value: 'USA' },
    { label: 'Export Control', value: 'EAR License Required' },
  ],

  // Tabs - Different set for this product
  tabs: [
    { name: 'Teleport', color: 'blue' },
    { name: 'Broadcasting', color: 'purple' },
    { name: 'Defense', color: 'emerald' },
    { name: 'Maritime', color: 'indigo' },
  ],
  defaultTab: 'Teleport',
  
  // Manufacturer
  manufacturerInfo: {
    name: 'SatCom Technologies',
    website: {
      url: 'https://www.satcomtech.example.com',
      displayText: 'satcomtech.example.com',
    },
    qualitySystem: 'ISO 9001:2015 & AS9100D Certified',
    description: [
      'SatCom Technologies is a premier manufacturer of high-power RF and microwave amplifiers for satellite communications, radar, and electronic warfare applications. Founded in 2005, the company has become a trusted supplier to major teleport operators, broadcasters, and defense contractors worldwide.',
      'Our product line includes solid-state power amplifiers (SSPAs), block upconverters (BUCs), and low-noise amplifiers (LNAs) covering frequency ranges from L-Band through Ka-Band. All products are designed and manufactured in our state-of-the-art facility in California, USA.',
      'With a focus on GaN technology and advanced thermal management, SatCom Technologies delivers industry-leading efficiency, reliability, and power density for mission-critical applications.',
    ],
  },
};
