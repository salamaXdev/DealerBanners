import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  RotateCcw, 
  ChevronDown, 
  Image as ImageIcon,
  Check,
  Banknote,
  Car,
  Layers
} from 'lucide-react';
import type { UsedCarBannerData } from '../types/banner';
import { BRAND_COLOR_SWATCHES, INVENTORY_PHOTO_OPTIONS } from '../constants/presets';

interface CustomizationPanelProps {
  bannerData: UsedCarBannerData;
  onChange: (updated: UsedCarBannerData) => void;
  onReset: () => void;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  bannerData,
  onChange,
  onReset,
}) => {
  const [activeTab, setActiveTab] = useState<'vehicle' | 'finance' | 'dealer' | 'photo'>('vehicle');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const updateVehicle = (key: keyof UsedCarBannerData['vehicle'], value: string) => {
    onChange({
      ...bannerData,
      vehicle: {
        ...bannerData.vehicle,
        [key]: value,
      },
    });
  };

  const updateFinance = (key: keyof UsedCarBannerData['finance'], value: string) => {
    onChange({
      ...bannerData,
      finance: {
        ...bannerData.finance,
        [key]: value,
      },
    });
  };

  const updateThemeColor = (hex: string) => {
    onChange({
      ...bannerData,
      theme: {
        ...bannerData.theme,
        primaryColor: hex,
      },
    });
  };

  const handleSelectPhoto = (option: typeof INVENTORY_PHOTO_OPTIONS[0]) => {
    onChange({
      ...bannerData,
      vehicleImage: option.image,
      vehicle: {
        ...bannerData.vehicle,
        makeModel: option.defaultData.makeModel,
        variant: option.defaultData.variant,
        yearReg: option.defaultData.yearReg,
        mileage: option.defaultData.mileage,
        cashPrice: option.defaultData.cashPrice,
      },
      finance: {
        ...bannerData.finance,
        monthlyPayment: option.defaultData.monthlyPayment,
        deposit: option.defaultData.deposit,
        apr: option.defaultData.apr,
      },
      theme: {
        ...bannerData.theme,
        primaryColor: option.defaultData.primaryColor,
      },
    });
  };

  return (
    <div className="w-full bg-[#0a0b0e] border border-[#1a1b22] rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. SIDEBAR HEADER */}
      <div className="flex items-start justify-between pb-4 border-b border-[#16171d]">
        <div className="flex items-center gap-3">
          <div className="text-neutral-400">
            <SlidersHorizontal className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-wide text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Banner Controls
            </h2>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Live editing • Real-time theme, copy & photos
            </p>
          </div>
        </div>

        <button
          onClick={onReset}
          title="Reset to default banner"
          className="p-2 rounded-xl bg-[#111216] hover:bg-[#181a20] border border-[#1e2027] text-neutral-400 hover:text-white transition-all text-xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. REFINED TAB SWITCHER */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-[#111216] rounded-xl my-3.5 border border-[#1e2027] text-[11px] font-semibold">
        <button
          onClick={() => setActiveTab('vehicle')}
          className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'vehicle' ? 'bg-[#1e2027] text-white shadow-sm font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Car className="w-3 h-3" />
          <span>Vehicle</span>
        </button>
        <button
          onClick={() => setActiveTab('finance')}
          className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'finance' ? 'bg-[#1e2027] text-white shadow-sm font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Banknote className="w-3 h-3" />
          <span>Pricing</span>
        </button>
        <button
          onClick={() => setActiveTab('dealer')}
          className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'dealer' ? 'bg-[#1e2027] text-white shadow-sm font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Layers className="w-3 h-3" />
          <span>Brand</span>
        </button>
        <button
          onClick={() => setActiveTab('photo')}
          className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'photo' ? 'bg-[#1e2027] text-white shadow-sm font-bold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <ImageIcon className="w-3 h-3" />
          <span>Photos</span>
        </button>
      </div>

      {/* 3. SCROLLABLE TAB CONTENT */}
      <div className="space-y-3.5 py-2 flex-1 max-h-[520px] overflow-y-auto pr-1">

        {/* TAB 1: VEHICLE INFORMATION */}
        {activeTab === 'vehicle' && (
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                Vehicle Make & Model
              </label>
              <input
                type="text"
                value={bannerData.vehicle.makeModel}
                onChange={(e) => updateVehicle('makeModel', e.target.value)}
                placeholder="Toyota GR Supra"
                className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] focus:border-neutral-500 rounded-xl px-3.5 py-2 text-xs text-white font-semibold focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                Variant & Engine Specification
              </label>
              <input
                type="text"
                value={bannerData.vehicle.variant}
                onChange={(e) => updateVehicle('variant', e.target.value)}
                placeholder="3.0 Pro Auto • 335 bhp"
                className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] focus:border-neutral-500 rounded-xl px-3.5 py-2 text-xs text-white font-medium focus:outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                  Year / Registration
                </label>
                <input
                  type="text"
                  value={bannerData.vehicle.yearReg}
                  onChange={(e) => updateVehicle('yearReg', e.target.value)}
                  placeholder="2021 (71 Reg)"
                  className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                  Mileage
                </label>
                <input
                  type="text"
                  value={bannerData.vehicle.mileage}
                  onChange={(e) => updateVehicle('mileage', e.target.value)}
                  placeholder="18,450 miles"
                  className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                Cash Price
              </label>
              <input
                type="text"
                value={bannerData.vehicle.cashPrice}
                onChange={(e) => updateVehicle('cashPrice', e.target.value)}
                placeholder="£34,990"
                className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] rounded-xl px-3.5 py-2 text-xs text-white font-semibold focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* TAB 2: FINANCE DETAILS */}
        {activeTab === 'finance' && (
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                Monthly Payment (Hero)
              </label>
              <div className="flex rounded-xl overflow-hidden border border-[#1e2027] hover:border-[#2d303d] bg-[#111216] focus-within:border-neutral-500 transition-all">
                <span className="px-3.5 py-2 text-xs font-bold text-neutral-400 select-none border-r border-[#1e2027] bg-[#15161c]">
                  £
                </span>
                <input
                  type="text"
                  value={bannerData.finance.monthlyPayment.replace(/^£/, '')}
                  onChange={(e) => updateFinance('monthlyPayment', e.target.value)}
                  placeholder="389"
                  className="w-full bg-transparent px-3 py-2 text-xs font-bold text-white focus:outline-none font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                Deposit Amount
              </label>
              <div className="flex rounded-xl overflow-hidden border border-[#1e2027] hover:border-[#2d303d] bg-[#111216] focus-within:border-neutral-500 transition-all">
                <span className="px-3.5 py-2 text-xs font-bold text-neutral-400 select-none border-r border-[#1e2027] bg-[#15161c]">
                  £
                </span>
                <input
                  type="text"
                  value={bannerData.finance.deposit.replace(/^£/, '')}
                  onChange={(e) => updateFinance('deposit', e.target.value)}
                  placeholder="2500"
                  className="w-full bg-transparent px-3 py-2 text-xs font-bold text-white focus:outline-none font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                  APR Rate
                </label>
                <div className="flex rounded-xl overflow-hidden border border-[#1e2027] bg-[#111216]">
                  <input
                    type="text"
                    value={bannerData.finance.apr.replace(/%$/, '')}
                    onChange={(e) => updateFinance('apr', e.target.value)}
                    placeholder="8.9"
                    className="w-full bg-transparent px-3 py-2 text-xs font-bold text-white focus:outline-none font-mono"
                  />
                  <span className="px-2.5 py-2 text-xs font-bold text-neutral-400 border-l border-[#1e2027]">
                    %
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                  Term Length
                </label>
                <div className="flex rounded-xl overflow-hidden border border-[#1e2027] bg-[#111216]">
                  <input
                    type="text"
                    value={bannerData.finance.termMonths}
                    onChange={(e) => updateFinance('termMonths', e.target.value)}
                    placeholder="48"
                    className="w-full bg-transparent px-3 py-2 text-xs font-bold text-white focus:outline-none font-mono"
                  />
                  <span className="px-2.5 py-2 text-[10px] font-bold text-neutral-400 border-l border-[#1e2027]">
                    mos
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                CTA Button Text
              </label>
              <input
                type="text"
                value={bannerData.ctaText}
                onChange={(e) => onChange({ ...bannerData, ctaText: e.target.value })}
                placeholder="Reserve for £99"
                className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] rounded-xl px-3.5 py-2 text-xs text-white font-semibold focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* TAB 3: BRAND & DEALER */}
        {activeTab === 'dealer' && (
          <div className="space-y-3">
            {/* Brand Accent Color */}
            <div>
              <label className="block text-[11px] font-medium text-neutral-300 mb-1.5">
                Dealership Accent Color
              </label>
              
              <div 
                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                className="flex items-center justify-between bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] rounded-xl px-3.5 py-2 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded shadow-sm"
                    style={{ backgroundColor: bannerData.theme.primaryColor }}
                  />
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    {bannerData.theme.primaryColor}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </div>

              {isColorPickerOpen && (
                <div className="mt-2 p-3 bg-[#0e0f14] border border-[#20222a] rounded-2xl shadow-2xl space-y-2.5">
                  <div className="grid grid-cols-6 gap-2">
                    {BRAND_COLOR_SWATCHES.map((swatch) => (
                      <button
                        key={swatch.hex}
                        onClick={() => {
                          updateThemeColor(swatch.hex);
                          setIsColorPickerOpen(false);
                        }}
                        title={swatch.name}
                        className={`h-7 rounded-lg flex items-center justify-center transition-transform hover:scale-110 border ${
                          bannerData.theme.primaryColor.toLowerCase() === swatch.hex.toLowerCase()
                            ? 'border-white ring-2 ring-white/20'
                            : 'border-white/10'
                        }`}
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {bannerData.theme.primaryColor.toLowerCase() === swatch.hex.toLowerCase() && (
                          <Check className="w-3.5 h-3.5 text-white" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-neutral-800">
                    <input
                      type="text"
                      value={bannerData.theme.primaryColor}
                      onChange={(e) => updateThemeColor(e.target.value)}
                      className="w-full bg-[#0a0b0e] border border-[#20222a] rounded-lg px-2 py-1 text-white font-mono text-xs focus:outline-none"
                    />
                    <input
                      type="color"
                      value={bannerData.theme.primaryColor}
                      onChange={(e) => updateThemeColor(e.target.value)}
                      className="w-7 h-7 rounded cursor-pointer bg-transparent border-0"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Dealership Info */}
            <div className="space-y-2.5 pt-1">
              <div>
                <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                  Dealership Name
                </label>
                <input
                  type="text"
                  value={bannerData.dealerName}
                  onChange={(e) => onChange({ ...bannerData, dealerName: e.target.value })}
                  className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] rounded-xl px-3.5 py-2 text-xs text-white uppercase font-bold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                  Location & Subtitle
                </label>
                <input
                  type="text"
                  value={bannerData.dealerLocation}
                  onChange={(e) => onChange({ ...bannerData, dealerLocation: e.target.value })}
                  className="w-full bg-[#111216] border border-[#1e2027] hover:border-[#2d303d] rounded-xl px-3.5 py-2 text-xs text-white font-medium focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                    Logo Badge Text
                  </label>
                  <input
                    type="text"
                    value={bannerData.dealerBadgeText}
                    onChange={(e) => onChange({ ...bannerData, dealerBadgeText: e.target.value })}
                    className="w-full bg-[#111216] border border-[#1e2027] rounded-xl px-3 py-2 text-xs text-white uppercase font-bold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={bannerData.phone}
                    onChange={(e) => onChange({ ...bannerData, phone: e.target.value })}
                    className="w-full bg-[#111216] border border-[#1e2027] rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none"
                  />
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: INVENTORY PHOTO SWITCHER */}
        {activeTab === 'photo' && (
          <div className="space-y-3">
            <div className="text-[11px] text-neutral-300 font-normal leading-relaxed">
              Test how the dynamic banner elevates real dealership inventory photos into high-end advertising creatives:
            </div>

            <div className="space-y-2">
              {INVENTORY_PHOTO_OPTIONS.map((opt) => {
                const isSelected = bannerData.vehicleImage === opt.image;
                return (
                  <button
                    key={opt.name}
                    onClick={() => handleSelectPhoto(opt)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-white bg-[#181a22] ring-1 ring-white/20'
                        : 'border-[#1e2027] bg-[#111216] hover:border-[#2d303d]'
                    }`}
                  >
                    <div className="w-16 h-12 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-white/10">
                      <img src={opt.image} alt={opt.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white truncate">{opt.name}</div>
                      <div className="text-[10px] text-neutral-400 truncate mt-0.5">
                        {opt.defaultData.cashPrice} • {opt.defaultData.monthlyPayment}/mo
                      </div>
                    </div>
                    {isSelected && (
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-white text-black">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default CustomizationPanel;
