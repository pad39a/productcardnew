import { useState } from 'react';
import { ComponentSpecTable } from '@/app/components/ComponentSpecTable';
import { DetailedSpecColumn } from '@/app/components/DetailedSpecColumn';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import 'flag-icons/css/flag-icons.min.css';

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
  lnaPerformanceSpecs: SpecRow[];
  lnaPerformanceTitle?: string; // Optional custom title for the second spec block
  mechanicalSpecs: SpecRow[];
  environmentalSpecs: SpecRow[];
  additionalSpecs: SpecRow[];

  // Tabs
  tabs: TabConfig[];
  defaultTab?: string;

  // Manufacturer
  manufacturerInfo: ManufacturerInfo;
}

interface ProductPageTemplateProps {
  data: ProductPageData;
}

const tabColorClasses = {
  orange: 'bg-orange-500 text-white shadow-lg shadow-orange-900/20',
  blue: 'bg-blue-600 text-white shadow-lg shadow-blue-900/20',
  emerald: 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20',
  purple: 'bg-purple-600 text-white shadow-lg shadow-purple-900/20',
  indigo: 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20',
  green: 'bg-green-600 text-white shadow-lg shadow-green-900/20',
};

export function ProductPageTemplate({ data }: ProductPageTemplateProps) {
  const [activeTab, setActiveTab] = useState(data.defaultTab || data.tabs[0]?.name || 'Aviation');

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Inter' }}>
      {/* Hero Header */}
      <div className="relative bg-slate-900 border-b border-white/10 shadow-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src={data.heroBackground}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-0">
          {/* Back Button */}
          <button className="flex items-center gap-2 mb-8 text-blue-300 text-[14px] font-medium hover:text-white transition-colors group" style={{ fontFamily: 'Inter' }}>
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>

          {/* Product Title and Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-200 border border-blue-500/30 rounded text-[12px] font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter' }}>
                  {data.productCategory}
                </span>
                <span className="text-slate-400 text-[14px]">Ref: {data.productReference}</span>
              </div>
              <h1 className="text-[28px] md:text-[40px] font-bold text-white tracking-tight drop-shadow-sm" style={{ fontFamily: 'Inter' }}>
                {data.productTitle}
              </h1>
              <p className="text-slate-300 mt-2 max-w-xl text-[14px] md:text-[15px] leading-relaxed">
                {data.productDescription}
              </p>
            </div>
            
            {/* Tabs - Docked at bottom */}
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg backdrop-blur-md border border-white/10 overflow-x-auto max-w-full">
              {data.tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 md:px-5 py-2 md:py-2.5 rounded-md text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.name
                      ? tabColorClasses[tab.color]
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'Inter' }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-10 space-y-6 md:space-y-8">
        
        {/* Product Highlights Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
            
            {/* Left: Actions */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-4">
                <div className="flex items-center gap-2 mb-0 md:mb-1 text-slate-500 text-[12px] font-medium uppercase tracking-wider">
                  Origin
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[18px] font-semibold text-slate-900" style={{ fontFamily: 'Inter' }}>{data.origin.country}</span>
                  <span className={`fi fi-${data.origin.flagCode} text-[24px] shadow-sm rounded-sm`}></span>
                </div>
              </div>
              
              <div className="pt-2 w-full">
                <button className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-[14px] font-semibold shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0" style={{ fontFamily: 'Inter' }}>
                  Request Info
                </button>
                {data.datasheetUrl && (
                  <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                    <a href={data.datasheetUrl} className="text-[13px] text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
                      <ExternalLink size={12} />
                      View Datasheet
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center py-4 md:py-0 border-y md:border-y-0 md:border-x border-slate-100 order-1 md:order-2">
              <img 
                src={data.manufacturerLogo} 
                alt="Manufacturer Logo" 
                className="max-w-[180px] md:max-w-[225px] h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Right: Product Image */}
            <div className="flex justify-center relative group order-3">
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <ImageWithFallback
                src={data.productImage}
                alt={data.productTitle}
                className="relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }}
              />
            </div>
          </div>
        </div>

        {/* Component Specifications */}
        <div>
          <h2 className="text-[18px] font-bold text-slate-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
            <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
            Component Specifications
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <ComponentSpecTable data={data.componentSpec} />
          </div>
        </div>

        {/* Detailed Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <DetailedSpecColumn title="Electrical" rows={data.electricalSpecs} />
            <DetailedSpecColumn title={data.lnaPerformanceTitle || "LNA Performance"} rows={data.lnaPerformanceSpecs} />
          </div>
          <div className="space-y-6">
            <DetailedSpecColumn title="Mechanical" rows={data.mechanicalSpecs} />
            <DetailedSpecColumn title="Ordering Info" rows={data.additionalSpecs} />
          </div>
          <DetailedSpecColumn title="Environmental" rows={data.environmentalSpecs} />
        </div>

        {/* Manufacturer Info */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-[16px] font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
            <span className="w-1.5 h-5 bg-slate-600 rounded-full"></span>
            Manufacturer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Website</div>
                <a 
                  href={data.manufacturerInfo.website.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] text-blue-600 hover:text-blue-700 font-medium break-all block hover:underline"
                >
                  {data.manufacturerInfo.website.displayText}
                </a>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Quality System</div>
                <div className="text-[13px] text-slate-900 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {data.manufacturerInfo.qualitySystem}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="prose prose-sm max-w-none text-slate-600 text-[14px] leading-relaxed">
                {data.manufacturerInfo.description.map((paragraph, index) => (
                  <p key={index} className={index < data.manufacturerInfo.description.length - 1 ? 'mb-4' : ''}>
                    {index === 0 ? (
                      <>
                        <span className="font-bold text-slate-900">{data.manufacturerInfo.name}</span>
                        {paragraph.replace(data.manufacturerInfo.name, '')}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
