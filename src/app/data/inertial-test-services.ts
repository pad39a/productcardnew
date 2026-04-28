import { ProductPageData } from '@/app/components/ProductPageTemplate';
import idealLogo from '../../imports/Ideal.jpg';
import ideal1522PImage from '../../imports/Ideal_1522P.jpg';
import heroBackground from 'figma:asset/8624f9524d3544dc8d7bd9fa3ead71e6a5cf4a01.png';

export const inertialTestServicesData: ProductPageData = {
  // Hero Section
  heroBackground: heroBackground,
  productCategory: 'Test Services',
  productReference: 'ITS-001',
  productTitle: 'Inertial Test Services',
  productDescription: 'Comprehensive inertial sensor testing and calibration services for critical aerospace and defense applications.',

  // Product Highlights
  origin: {
    country: 'USA',
    flagCode: 'us',
  },
  manufacturerLogo: idealLogo,
  productImage: ideal1522PImage,
  datasheetUrl: '#',

  // Specifications
  componentSpec: {
    mpn: 'ITS-001',
    standards: ['MIL-STD-883', 'RTCA DO160G'],
    technology: 'FPRA',
    radiation: 'Active or Passive',
    bands: ['L1, E1, G1', 'L2, G2, G3, E5a'],
    vswr: '<2.0',
    polarization: 'RHCP',
    lnaGain: '33dB or 40dB',
  },

  electricalSpecs: [
    { label: 'Slipring Lines', value: '32' },
    { label: 'Current Draw', value: '5A max' },
    { label: 'Interface', value: 'RS-232, Internet' },
    { label: 'Connector Pins', value: '32 Pin' },
  ],

  lnaPerformanceSpecs: [
    { label: 'Table Model', value: '1291BLX' },
    { label: 'Test Axis', value: 'Single' },
    { label: 'Accuracy Inner', value: '±15 arc-sec' },
    { label: 'Accuracy Outer', value: 'NA' },
    { label: 'Repeatability', value: '±3 arc-seconds' },
  ],
  lnaPerformanceTitle: 'Inertial Table Specs',

  mechanicalSpecs: [
    { label: 'Max UUT Weight', value: '110 kg' },
    { label: 'Table Dimensions', value: '8 inch' },
    { label: 'Horizontal Mounting', value: 'Yes' },
    { label: 'Vertical Mounting', value: 'Yes' },
  ],

  environmentalSpecs: [
    { label: 'Operating Temp (Max)', value: '+95°C' },
    { label: 'Operating Temp (Min)', value: '+50°C' },
    { label: 'Humidity', value: '20-85% RH non-condensing' },
    { label: 'Altitude', value: 'Up to 10,000 ft' },
    { label: 'Vibration', value: 'MIL-STD-810 compliant' },
  ],

  additionalSpecs: [
    { label: 'Warranty', value: 'N/A' },
    { label: 'Lead Time', value: '2 Weeks' },
    { label: 'ECCN', value: 'EAR99' },
    { label: 'ITAR Status', value: 'Non-ITAR' },
    { label: 'RoHS Compliant', value: 'N/A' },
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
    name: 'Ideal Aerosmith',
    website: {
      url: 'https://www.ideal-aerosmith.com/inertial-test-lab/',
      displayText: 'ideal-aerosmith.com/inertial-test-lab',
    },
    qualitySystem: 'AS9100 Certified',
    description: [
      'Ideal Aerosmith set up an Inertial Test Laboratory (ITL) located in Phoenix, Arizona, to provide testing solutions for customers and projects that require short-term, periodic, or custom motion simulation capabilities without the full cost of acquisition and ownership.',
      'This testing-as-a-service offering enables faster development and time to market for our clients. We can help established manufacturers and integrators when production facilities are tied up, and new developers with immediate access to inertial test equipment.',
    ],
  },
};
