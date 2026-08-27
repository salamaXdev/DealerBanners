import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  History, 
  Lock, 
  PhoneCall, 
  Globe, 
  ArrowRight, 
  Clock, 
  Car 
} from 'lucide-react';
import type { FinanceBannerProps } from '../types/banner';

export const FinanceBanner: React.FC<FinanceBannerProps> = ({
  theme,
  dealerName,
  dealerLocation = 'Approved Used Vehicle Centre',
  dealerBadgeText = 'LMC',
  vehicleImage,
  vehicle,
  finance,
  features,
  ctaText,
  phone = '01925 987 600',
  website = 'LOWTONMOTORCOMPANY.CO.UK',
  hours = 'Open 7 Days • 9am – 6pm',
  className = '',
}) => {
  const primary = theme?.primaryColor || '#E50914';

  const formattedMonthly = finance.monthlyPayment.startsWith('£') 
    ? finance.monthlyPayment 
    : `£${finance.monthlyPayment}`;
  
  const formattedDeposit = finance.deposit.startsWith('£') 
    ? finance.deposit 
    : `£${finance.deposit}`;
  
  const formattedApr = finance.apr.endsWith('%') 
    ? finance.apr 
    : `${finance.apr}%`;

  const renderTrustIcon = (iconName: string) => {
    const iconProps = { className: "w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300", style: { color: primary } };
    switch (iconName) {
      case 'shield': return <ShieldCheck {...iconProps} />;
      case 'check': return <CheckCircle2 {...iconProps} />;
      case 'history': return <History {...iconProps} />;
      case 'badge': return <FileCheck {...iconProps} />;
      case 'lock': return <Lock {...iconProps} />;
      default: return <Car {...iconProps} />;
    }
  };

  const defaultTrustFeatures = [
    { id: '1', icon: 'shield' as const, title: '12 Months MOT', subtitle: 'Included free' },
    { id: '2', icon: 'check' as const, title: 'RAC Approved', subtitle: '82-point check' },
    { id: '3', icon: 'history' as const, title: 'Full Service History', subtitle: 'Verified' },
    { id: '4', icon: 'badge' as const, title: 'HPI Clear', subtitle: 'Guaranteed' },
    { id: '5', icon: 'lock' as const, title: 'Reserve Online', subtitle: '£99 refundable' },
  ];

  const trustList = features && features.length > 0 ? features : defaultTrustFeatures;

  return (
    <div 
      className={`relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-[#07080b] text-white flex flex-col justify-between p-5 sm:p-7 md:p-8 font-['Plus_Jakarta_Sans',sans-serif] transition-all duration-300 ${className}`}
    >
      {/* 1. BACKGROUND USED-CAR PHOTO & DIRECTIONAL GRADIENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={vehicleImage}
          alt={vehicle.makeModel}
          className="w-full h-full object-cover object-center transform scale-[1.005]"
        />

        {/* Directional gradient: darker only at top-left & bottom, leaves vehicle illuminated in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-gradient from-black/70 to-transparent pointer-events-none" />
      </div>

      {/* 2. TOP ROW: DEALERSHIP BRANDING & EDITORIAL FINANCE CARD */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        
        {/* Dealership Identity */}
        <div className="flex items-center gap-3.5 max-w-[58%]">
          {/* Circular Badge Emblem */}
          <div 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center bg-black/60 backdrop-blur-xl flex-shrink-0 shadow-lg"
            style={{ borderColor: `${primary}60` }}
          >
            <span 
              className="text-[9px] sm:text-[10px] font-black tracking-wider uppercase font-['Plus_Jakarta_Sans',sans-serif]"
              style={{ color: primary }}
            >
              {dealerBadgeText}
            </span>
          </div>

          {/* Dealer Title & Subtitle */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-[0.08em] font-['Plus_Jakarta_Sans',sans-serif] leading-tight drop-shadow-sm">
              {dealerName}
            </h2>
            {dealerLocation && (
              <p className="text-[9px] sm:text-[10px] text-neutral-300 font-medium tracking-normal mt-0.5 line-clamp-1 opacity-90 font-['Plus_Jakarta_Sans',sans-serif]">
                {dealerLocation}
              </p>
            )}
          </div>
        </div>

        {/* TOP RIGHT: SOPHISTICATED FINANCE PRICING CARD (HERO ELEMENT) */}
        <div className="relative flex-shrink-0">
          <div 
            className="relative overflow-hidden rounded-2xl bg-black/65 backdrop-blur-2xl border border-white/15 px-5 py-4 sm:px-6 sm:py-5 min-w-[140px] sm:min-w-[170px] md:min-w-[195px] text-center shadow-[0_12px_36px_rgba(0,0,0,0.8)]"
          >
            {/* Subtle Top Metallic Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-[2px] transition-colors duration-300"
              style={{ backgroundColor: primary }}
            />

            {/* Deposit Header */}
            <div className="flex items-center justify-center gap-1.5 text-[9px] sm:text-[10px] font-semibold text-neutral-300 tracking-wide mb-1 font-['Plus_Jakarta_Sans',sans-serif]">
              <ShieldCheck className="w-3 h-3 text-neutral-400" />
              <span>{formattedDeposit} deposit</span>
            </div>

            {/* Hero Monthly Price in Plus Jakarta Sans */}
            <div className="my-1">
              <div className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white leading-none tracking-tight font-['Plus_Jakarta_Sans',sans-serif] drop-shadow-md">
                {formattedMonthly}
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-neutral-300 tracking-wider uppercase mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
                per month
              </div>
            </div>

            {/* Elegant Hairline Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />

            {/* APR & Term */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-neutral-200 font-medium font-['Plus_Jakarta_Sans',sans-serif]">
              <span className="font-bold text-white">{formattedApr} APR</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300">{finance.termMonths} months</span>
            </div>
            <div className="text-[8px] text-neutral-400 font-semibold tracking-wider uppercase mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
              Representative
            </div>
          </div>
        </div>

      </div>

      {/* 3. VEHICLE EDITORIAL HEADLINE & SPEC CHIPS (LOCKED TO PLUS JAKARTA SANS) */}
      <div className="relative z-10 max-w-[58%] mt-auto mb-4 pointer-events-none">
        
        {/* Year/Reg & Mileage Metadata Badges */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-white font-bold text-[9px] sm:text-[10px] tracking-wide border border-white/10 font-['Plus_Jakarta_Sans',sans-serif]">
            {vehicle.yearReg}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-neutral-200 font-medium text-[9px] sm:text-[10px] tracking-wide border border-white/10 font-['Plus_Jakarta_Sans',sans-serif]">
            {vehicle.mileage}
          </span>
        </div>

        {/* High-Impact Editorial Vehicle Title in Plus Jakarta Sans */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-md font-['Plus_Jakarta_Sans',sans-serif]">
          {vehicle.makeModel}
        </h1>

        {/* Variant & Spec Line */}
        <p className="text-xs sm:text-sm text-neutral-200 font-medium tracking-wide mt-1 drop-shadow font-['Plus_Jakarta_Sans',sans-serif]">
          {vehicle.variant}
        </p>

        {/* Cash Price Inline Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 mt-2.5 text-xs text-white font-['Plus_Jakarta_Sans',sans-serif]">
          <span className="text-neutral-400 font-medium text-[10px]">Cash Price:</span>
          <span className="font-bold text-white tracking-wide">{vehicle.cashPrice}</span>
        </div>
      </div>

      {/* 4. REFINED INTEGRATED FEATURE RIBBON (THIN, CLEAN, INTEGRATED) */}
      <div className="relative z-10 rounded-xl bg-black/55 backdrop-blur-xl border border-white/10 p-2 sm:p-2.5 mb-2.5 shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10 font-['Plus_Jakarta_Sans',sans-serif]">
          {trustList.map((item) => (
            <div 
              key={item.id}
              className="flex items-center gap-2 px-2 py-1 sm:py-0.5 justify-start sm:justify-center text-left"
            >
              {renderTrustIcon(item.icon)}
              <div className="min-w-0">
                <div className="text-[8px] sm:text-[9px] font-bold text-white tracking-tight truncate">
                  {item.title}
                </div>
                <div className="text-[7px] sm:text-[8px] text-neutral-400 font-normal truncate">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER BAR: INTENTIONAL CTA BUTTON & DEALERSHIP CONTACT */}
      <div className="relative z-10 flex items-center justify-between gap-3 text-[9px] sm:text-[10px] pt-1 font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Left Action CTA Button */}
        <div 
          className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-white shadow-lg cursor-pointer transition-all hover:brightness-110 active:scale-[0.98]"
          style={{ 
            backgroundColor: primary,
            boxShadow: `0 4px 20px -2px ${primary}40`,
          }}
        >
          <Lock className="w-3.5 h-3.5 text-white" />
          <span className="tracking-wide text-[10px] sm:text-xs font-semibold">{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 text-white ml-0.5" />
        </div>

        {/* Direct Dealer Phone */}
        {phone && (
          <div className="hidden sm:flex items-center gap-1.5 text-neutral-300">
            <PhoneCall className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
            <span className="font-semibold tracking-normal text-[10px] sm:text-xs">{phone}</span>
          </div>
        )}

        {/* Website */}
        {website && (
          <div className="hidden md:flex items-center gap-1.5 text-neutral-400">
            <Globe className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
            <span className="font-medium text-neutral-300 text-[10px] uppercase tracking-wider">{website}</span>
          </div>
        )}

        {/* Opening Hours */}
        {hours && (
          <div className="flex items-center gap-1.5 text-neutral-400 font-medium ml-auto sm:ml-0 text-[9px] sm:text-[10px]">
            <Clock className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
            <span>{hours}</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default FinanceBanner;
