export interface SpecRow {
  label: string;
  value: string;
}

export interface ComponentSpec {
  mpn: string;
  standards: string[];
  technology: string;
  radiation: string;
  bands: string[];
  vswr: string;
  polarization: string;
  lnaGain: string;
}

export interface TabConfig {
  name: string;
  color: 'orange' | 'blue' | 'emerald' | 'purple' | 'indigo' | 'green';
}

export interface ManufacturerInfo {
  name: string;
  website: {
    url: string;
    displayText: string;
  };
  qualitySystem: string;
  description: string[];
}

export interface ProductPageData {
  // Hero Section
  heroBackground: string;
  productCategory: string;
  productReference: string;
  productTitle: string;
  productDescription: string;

  // Product Highlights
  origin: {
    country: string;
    flagCode: string; // e.g., 'ca' for Canada
  };
  manufacturerLogo: string;
  productImage: string;
  datasheetUrl?: string;

  // Specifications
  componentSpec: ComponentSpec;
  electricalSpecs: SpecRow[];
  mechanicalSpecs: SpecRow[];
  environmentalSpecs: SpecRow[];

  // Tabs
  tabs: TabConfig[];
  defaultTab?: string;

  // Manufacturer
  manufacturerInfo: ManufacturerInfo;
}

export const tabColorClasses: Record<TabConfig['color'], string> = {
  orange: 'bg-orange-500 text-white shadow-lg shadow-orange-900/20',
  blue: 'bg-blue-600 text-white shadow-lg shadow-blue-900/20',
  emerald: 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20',
  purple: 'bg-purple-600 text-white shadow-lg shadow-purple-900/20',
  indigo: 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20',
  green: 'bg-green-600 text-white shadow-lg shadow-green-900/20',
};
