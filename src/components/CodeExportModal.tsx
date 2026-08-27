import React, { useState } from 'react';
import { X, Copy, Check, Terminal, FileCode2, Cpu, Sparkles } from 'lucide-react';
import type { UsedCarBannerData } from '../types/banner';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  bannerData: UsedCarBannerData;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  bannerData,
}) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'usage' | 'props'>('usage');

  if (!isOpen) return null;

  const primaryColor = bannerData.theme.primaryColor;

  const usageSnippet = `import React from 'react';
import { FinanceBanner } from './components/FinanceBanner';

export const UsedCarInventoryBanner = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <FinanceBanner
        theme={{
          primaryColor: '${primaryColor}',
        }}
        dealerName="${bannerData.dealerName}"
        dealerLocation="${bannerData.dealerLocation}"
        dealerBadgeText="${bannerData.dealerBadgeText}"
        vehicleImage="${bannerData.vehicleImage}"
        vehicle={{
          yearReg: '${bannerData.vehicle.yearReg}',
          makeModel: '${bannerData.vehicle.makeModel}',
          variant: '${bannerData.vehicle.variant}',
          mileage: '${bannerData.vehicle.mileage}',
          cashPrice: '${bannerData.vehicle.cashPrice}',
        }}
        finance={{
          monthlyPayment: '${bannerData.finance.monthlyPayment}',
          deposit: '${bannerData.finance.deposit}',
          apr: '${bannerData.finance.apr}',
          termMonths: '${bannerData.finance.termMonths}',
        }}
        ctaText="${bannerData.ctaText}"
        phone="${bannerData.phone}"
        website="${bannerData.website}"
        hours="${bannerData.hours}"
      />
    </div>
  );
};`;

  const propsTypeScriptDef = `export interface BannerTheme {
  primaryColor: string; // e.g. '#E50914'
}

export interface VehicleDetails {
  yearReg: string;     // e.g. "2021 (71 REG)"
  makeModel: string;   // e.g. "TOYOTA GR SUPRA"
  variant: string;     // e.g. "3.0 PRO AUTO • 335 BHP"
  mileage: string;     // e.g. "18,450 MILES"
  cashPrice: string;   // e.g. "£34,990"
}

export interface FinanceDetails {
  monthlyPayment: string; // e.g. "389"
  deposit: string;        // e.g. "2,500"
  apr: string;            // e.g. "8.9"
  termMonths: string;     // e.g. "48"
}

export interface FinanceBannerProps {
  theme: BannerTheme;
  dealerName: string;
  dealerLocation?: string;
  dealerBadgeText?: string;
  vehicleImage: string;
  vehicle: VehicleDetails;
  finance: FinanceDetails;
  ctaText: string;
  phone?: string;
  website?: string;
  hours?: string;
}`;

  const handleCopy = (text: string, tabKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0d0e12] border border-[#1e2029] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#1a1b22] bg-[#090a0d] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md font-mono text-sm font-bold"
              style={{ backgroundColor: primaryColor }}
            >
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Used-Car Banner Component API
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Data-Driven • Type-Safe TypeScript • Reusable Across Any Dealership Inventory
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-[#191b22] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#1a1b22] bg-[#0b0c10] px-6 gap-2 pt-2">
          {[
            { id: 'usage', label: 'Component Usage JSX', icon: FileCode2 },
            { id: 'props', label: 'TypeScript Props Interface', icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCodeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCodeTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-semibold border-b-2 transition-all ${
                  isActive
                    ? 'bg-[#0d0e12] text-white border-white'
                    : 'text-neutral-400 hover:text-neutral-200 border-transparent'
                }`}
                style={{
                  borderBottomColor: isActive ? primaryColor : 'transparent',
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Code Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 bg-[#07080a] font-mono text-xs text-neutral-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] text-neutral-500 font-sans uppercase font-bold tracking-wider">
              {activeCodeTab === 'usage' ? 'UsedCarInventoryBanner.tsx' : 'banner.d.ts'}
            </span>
            <button
              onClick={() => handleCopy(activeCodeTab === 'usage' ? usageSnippet : propsTypeScriptDef, activeCodeTab)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161820] hover:bg-[#1f222d] text-white text-xs font-sans font-semibold transition-all border border-[#262936]"
            >
              {copiedTab === activeCodeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-[#090a0d] border border-[#1a1c24] overflow-x-auto text-emerald-300/90 leading-relaxed">
            <code>{activeCodeTab === 'usage' ? usageSnippet : propsTypeScriptDef}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#090a0d] border-t border-[#1a1b22] flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-neutral-400">Plugs directly into any dealer DMS or web inventory feed.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#181a22] hover:bg-[#222530] text-white font-semibold text-xs transition-colors border border-[#252834]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default CodeExportModal;
