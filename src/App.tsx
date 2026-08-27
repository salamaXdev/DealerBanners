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
          
          {/* LEFT SECTION: HERO 4:3 BANNER PREVIEW (8 / 12 COLS - BORDER CARD REMOVED) */}
          <div className="lg:col-span-8 w-full flex flex-col justify-center">
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
