import { ProductPageData } from '@/app/types/product';
import hexagonAntcomLogo from '@/assets/9854e5f16552ed056e5d55af39a0eb0abc6892f4.png';
import antennaProductImage from '@/assets/452b69bb395cc19053e4cb69abfc21bca62c5faa.png';
import heroBackground from '@/assets/8624f9524d3544dc8d7bd9fa3ead71e6a5cf4a01.png';

export const antcomG3ANT3XXXData: ProductPageData = {
  // Hero Section
  heroBackground: heroBackground,
  productCategory: 'GPS Antenna',
  productReference: 'G3-3XXX',
  productTitle: 'Antcom G3ANT-3XXX',
  productDescription: 'High-reliability antenna designed for critical aviation and space applications, offering precision positioning in demanding environments.',
  
  // Product Highlights
  origin: {
    country: 'Canada',
    flagCode: 'ca',
  },
  manufacturerLogo: hexagonAntcomLogo,
  productImage: antennaProductImage,
  datasheetUrl: '#',
  
  // Specifications
  componentSpec: {
    mpn: 'G3Ant-3XXX',
    standards: ['MIL-STD-883', 'RTCA DO160G'],
    technology: 'FPRA',
    radiation: 'Report Available',
    bands: ['L1, E1, G1', 'L2, G2, G3, E5a'],
    vswr: '<2.0',
    polarization: 'RHCP',
    lnaGain: '',
  },
  
  electricalSpecs: [
    { label: 'VDC', value: '5 +/- 0.25' },
    { label: 'Current', value: '100 mA' },
    { label: 'Power Handling', value: '1 Watt CW' },
    { label: 'Output Signal', value: 'Analog' },
    { label: 'Connector', value: 'SMA, SMB' },
  ],
  
  mechanicalSpecs: [
    { label: 'Weight', value: '0.18' },
    { label: 'Volume', value: '5.6' },
    { label: 'Materials', value: 'AL, CU, Plastic' },
    { label: 'Form Factor', value: 'Module, Round' },
  ],
  
  environmentalSpecs: [
    { label: 'Maximum operating temperature', value: '+85°C' },
    { label: 'Minimum operating temperature', value: '-55°C' },
    { label: 'Max Shock, G', value: '5,000 G' },
    { label: 'Altitude, ft', value: '-1,000 to 70,000' },
    { label: 'Humidity', value: '1,000 hours, 95% RH' },
    { label: 'Radiation Levels', value: 'LEO, MEO, GEO' },
    { label: 'Moisture Rating', value: 'Hermetic, IP 67, IP68' },
  ],
  
  // Tabs
  tabs: [
    { name: 'Aviation', color: 'orange' },
    { name: 'Space', color: 'blue' },
    { name: 'Defense', color: 'emerald' },
    { name: 'R & D', color: 'orange' },
  ],
  defaultTab: 'Aviation',
  
  // Manufacturer
  manufacturerInfo: {
    name: 'Antcom Corporation',
    website: {
      url: 'https://www.navtechgps.com/brands/antcom/',
      displayText: 'navtechgps.com/brands/antcom',
    },
    qualitySystem: 'AS9100 Certified',
    description: [
      'Antcom Corporation designs, develops and manufactures a wide range of GPS / GNSS antennas, as well as a large selection of ground and satellite based antennas with frequencies ranging from 100 MHz to 50 GHz.',
      'The Antcom line includes Global Positioning System (GPS) antennas, Global Navigation Satellite System (GNSS) antennas, as well as Galileo, GLONASS, BeiDou, and QZSS in the L1, L2, L5 bands. Products serve critical ground, marine, and aerospace communication applications.',
    ],
  },
};
