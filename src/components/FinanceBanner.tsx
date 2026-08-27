import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Globe, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import type { FinanceBannerProps } from '../types/banner';

export const FinanceBanner: React.FC<FinanceBannerProps> = ({
  theme,
  dealerName = 'LOWTON MOTOR COMPANY',
  dealerLocation = 'Approved Used Vehicle Centre',
  dealerBadgeText = 'LMC',
  vehicleImage,
  vehicle,
  finance,
  ctaText = 'Reserve for £99',
  phone = '01925 987 600',
  website = 'LOWTONMOTORCOMPANY.CO.UK',
  hours = 'Open 7 Days • 9am – 6pm',
  className = '',
}) => {
  const primary = theme?.primaryColor || '#C92A2A';

  const formattedMonthly = finance.monthlyPayment.startsWith('£') 
    ? finance.monthlyPayment 
    : `£${finance.monthlyPayment}`;
  
  const formattedDeposit = finance.deposit.startsWith('£') 
    ? finance.deposit 
    : `£${finance.deposit}`;
  
  const formattedApr = finance.apr.endsWith('%') 
    ? finance.apr 
    : `${finance.apr}%`;

  return (
    <div 
      className={`relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl md:rounded-3xl bg-[#0a0b0d] text-white flex flex-col justify-between p-5 sm:p-6 md:p-7 font-['Plus_Jakarta_Sans',sans-serif] shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* 1. BACKGROUND PHOTO & SOFTENED DIRECTIONAL VIGNETTES */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={vehicleImage}
          alt={vehicle.makeModel}
          className="w-full h-full object-cover object-center transform scale-[1.01]"
        />

        {/* Softened edge gradients: reduced black on edges for natural background lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75" />
      </div>

      {/* 2. TOP HEADER ROW: DEALERSHIP BRANDING & FLOATING FINANCE CARD */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        
        {/* Dealership Branding (Top Left) */}
        <div className="flex items-center gap-2.5 pt-0.5">
          {/* Thin Circular Outline Badge */}
          <div 
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center bg-black/40 backdrop-blur-sm flex-shrink-0"
            style={{ borderColor: primary }}
          >
            <span 
              className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase"
              style={{ color: primary }}
            >
              {dealerBadgeText}
            </span>
          </div>

          {/* Dealership Name & Subtitle */}
          <div>
            <h2 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-[0.14em] leading-tight">
              {dealerName}
            </h2>
            {dealerLocation && (
              <p className="text-[9px] sm:text-[10px] text-neutral-300 font-normal tracking-wide mt-0.5 opacity-80">
                {dealerLocation}
              </p>
            )}
          </div>
        </div>

        {/* Floating Dark Finance Card (Top Right) */}
        <div className="relative flex-shrink-0">
          <div className="rounded-xl sm:rounded-2xl bg-[#1c1c1f]/85 backdrop-blur-md border border-white/[0.06] px-3.5 py-2.5 sm:px-4 sm:py-3 min-w-[130px] sm:min-w-[155px] md:min-w-[170px] text-center shadow-xl">
            
            {/* Deposit Line */}
            <div className="text-[9px] sm:text-[10px] text-neutral-300 font-normal">
              <span className="font-semibold text-white">{formattedDeposit}</span> deposit
            </div>

            {/* Red Accent Divider */}
            <div 
              className="h-[1.5px] my-1.5 sm:my-2 mx-auto w-full transition-colors duration-300 opacity-90"
              style={{ backgroundColor: primary }}
            />

            {/* Hero Monthly Price */}
            <div>
              <div className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-white leading-none tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                {formattedMonthly}
              </div>
              <div className="text-[7px] sm:text-[8px] font-bold text-neutral-400 tracking-[0.2em] uppercase mt-1">
                PER MONTH
              </div>
            </div>

            {/* APR & Term */}
            <div className="mt-1.5 text-[8px] sm:text-[9px] text-neutral-200 font-medium">
              <span className="font-bold text-white">{formattedApr} APR</span>
              <span className="text-neutral-400 mx-1">•</span>
              <span>{finance.termMonths} months</span>
            </div>

            {/* Representative */}
            <div className="text-[6px] sm:text-[7px] text-neutral-400 font-medium tracking-[0.16em] uppercase mt-0.5">
              REPRESENTATIVE
            </div>

          </div>
        </div>

      </div>

      {/* 3. MIDDLE-LEFT SECTION: VEHICLE TITLE & SPECS */}
      <div className="relative z-10 max-w-lg mt-auto mb-2 pointer-events-none">
        
        {/* Year/Reg & Mileage Header */}
        <div className="flex items-center gap-2.5 text-[10px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
          <span>{vehicle.yearReg}</span>
          <span className="text-neutral-500 font-light">|</span>
          <span>{vehicle.mileage}</span>
        </div>

        {/* Crisp Title-Case Vehicle Name */}
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-md">
          {vehicle.makeModel}
        </h1>

        {/* Variant & BHP */}
        <p className="text-xs sm:text-[13px] text-neutral-300 font-normal tracking-wide mt-1 drop-shadow">
          {vehicle.variant}
        </p>

      </div>

      {/* 4. LOWER-LEFT SECTION: 3 TRUST BADGES WITH CLEAN TRANSPARENT GRADIENT */}
      <div className="relative z-10 flex items-center gap-5 sm:gap-7 py-2 px-3 -ml-3 rounded-xl bg-gradient-to-r from-black/75 via-black/25 to-transparent mb-3 flex-wrap">
        
        {/* Badge 1: MOT */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" style={{ color: primary }} />
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">
              12 Months MOT
            </div>
            <div className="text-[8px] sm:text-[9px] text-neutral-300 font-normal mt-0.5">
              Included free
            </div>
          </div>
        </div>

        {/* Badge 2: RAC */}
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" style={{ color: primary }} />
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">
              RAC Approved
            </div>
            <div className="text-[8px] sm:text-[9px] text-neutral-300 font-normal mt-0.5">
              82-point check
            </div>
          </div>
        </div>

        {/* Badge 3: Service History */}
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" style={{ color: primary }} />
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">
              Full Service History
            </div>
            <div className="text-[8px] sm:text-[9px] text-neutral-300 font-normal mt-0.5">
              Verified
            </div>
          </div>
        </div>

      </div>

      {/* 5. BOTTOM BAR: CTA BUTTON (SLIGHTLY ENLARGED) & DEALERSHIP CONTACT IN SINGLE ROW */}
      <div className="relative z-10 flex items-center justify-between gap-3 text-[9px] sm:text-[10px] flex-nowrap overflow-hidden">
        
        {/* Red CTA Button (Slightly Enlarged) */}
        <div 
          className="flex items-center gap-2 px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-white shadow-lg cursor-pointer transition-all hover:brightness-110 active:scale-[0.98] flex-shrink-0"
          style={{ backgroundColor: primary }}
        >
          <span className="tracking-wide font-semibold text-[10px] sm:text-xs">{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </div>

        {/* Phone */}
        {phone && (
          <div className="flex items-center gap-1 text-neutral-200 font-medium flex-shrink-0">
            <Phone className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px]">{phone}</span>
          </div>
        )}

        {/* Website */}
        {website && (
          <div className="flex items-center gap-1 text-neutral-300 font-medium uppercase truncate">
            <Globe className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] truncate">{website}</span>
          </div>
        )}

        {/* Opening Hours */}
        {hours && (
          <div className="flex items-center gap-1 text-neutral-400 font-normal flex-shrink-0">
            <Clock className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
            <span className="text-[9px] sm:text-[10px]">{hours}</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default FinanceBanner;
