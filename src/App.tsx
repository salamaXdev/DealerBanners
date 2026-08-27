import React, { useState } from 'react';
import type { UsedCarBannerData } from './types/banner';
import { DEFAULT_USED_CAR_BANNER } from './constants/presets';
import { FinanceBanner } from './components/FinanceBanner';
import { CustomizationPanel } from './components/CustomizationPanel';
import { Header } from './components/Header';

export const App: React.FC = () => {
  const [bannerData, setBannerData] = useState<UsedCarBannerData>(DEFAULT_USED_CAR_BANNER);

  const handleReset = () => {
    setBannerData(DEFAULT_USED_CAR_BANNER);
  };

  return (
    <div className="min-h-screen bg-[#040406] text-neutral-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#E50914] selection:text-white pb-12">
      
      {/* 1. TOP HEADER */}
      <Header
        brandColor={bannerData.theme.primaryColor}
      />

      {/* 2. MAIN WORKSPACE: HERO PREVIEW (LEFT) + CONTROL PANEL (RIGHT) */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SECTION: HERO 4:3 BANNER PREVIEW (8 / 12 COLS) */}
          <div className="lg:col-span-8 bg-[#0a0b0e] border border-[#1a1b22] rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col">
            
            {/* Top Preview Status Bar */}
            <div className="pb-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span 
                  className="w-2.5 h-2.5 rounded-full inline-block animate-pulse transition-colors duration-300"
                  style={{ backgroundColor: bannerData.theme.primaryColor }}
                />
                <span 
                  className="text-[11px] font-extrabold uppercase tracking-[0.2em] font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300"
                  style={{ color: bannerData.theme.primaryColor }}
                >
                  LIVE COMPONENT PREVIEW
                </span>
              </div>
            </div>

            {/* 4:3 Banner Canvas */}
            <div className="w-full">
              <FinanceBanner
                theme={bannerData.theme}
                dealerName={bannerData.dealerName}
                dealerLocation={bannerData.dealerLocation}
                dealerBadgeText={bannerData.dealerBadgeText}
                vehicleImage={bannerData.vehicleImage}
                vehicle={bannerData.vehicle}
                finance={bannerData.finance}
                features={bannerData.features}
                ctaText={bannerData.ctaText}
                phone={bannerData.phone}
                website={bannerData.website}
                hours={bannerData.hours}
              />
            </div>

          </div>

          {/* RIGHT SECTION: CUSTOMIZE BANNER SIDEBAR (4 / 12 COLS) */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <CustomizationPanel
              bannerData={bannerData}
              onChange={setBannerData}
              onReset={handleReset}
            />
          </div>

        </div>
      </main>

    </div>
  );
};

export default App;
