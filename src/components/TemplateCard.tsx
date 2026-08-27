import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { BannerTemplateItem } from '../types/templates';

interface TemplateCardProps {
  template: BannerTemplateItem;
  onSelect?: (template: BannerTemplateItem) => void;
  interactive?: boolean;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onSelect,
  interactive = true,
}) => {
  const isFinance = template.category === 'finance';
  const isVehicle = template.category === 'vehicle';
  const isDealership = template.category === 'dealership';

  return (
    <div 
      onClick={() => interactive && onSelect?.(template)}
      className={`relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl bg-black text-white font-['Plus_Jakarta_Sans',sans-serif] group transition-all duration-300 ${
        interactive ? 'cursor-pointer hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]' : ''
      }`}
    >
      {/* 1. BACKGROUND IMAGE & OPTICAL GRADIENTS */}
      <div className="absolute inset-0 z-0">
        <img
          src={template.vehicleImage}
          alt={template.vehicleName}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Style Variant Overlays */}
        {template.styleVariant === 'dark-gold' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-3xl" />
          </>
        )}

        {template.styleVariant === 'clean-blue' && (
          <>
            {/* White / Light angular polygon card on left */}
            <div 
              className="absolute inset-0 bg-white/95 z-0"
              style={{
                clipPath: 'polygon(0% 0%, 55% 0%, 42% 100%, 0% 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60" />
          </>
        )}

        {template.styleVariant === 'cyber-red' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(229,9,20,0.25)_50%,transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#E50914]/20 rounded-full blur-3xl" />
          </>
        )}

        {template.styleVariant === 'concrete-green' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          </>
        )}

        {template.styleVariant === 'studio-white' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
            <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-white/90 via-white/70 to-transparent mix-blend-screen opacity-30" />
          </>
        )}

        {template.styleVariant === 'dark-stealth' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          </>
        )}

        {template.styleVariant === 'showroom-gold' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </>
        )}

        {template.styleVariant === 'showroom-blue' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/80" />
            <div 
              className="absolute inset-0 bg-blue-600/30 mix-blend-overlay"
              style={{
                clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 75% 100%)',
              }}
            />
          </>
        )}

        {template.styleVariant === 'showroom-red' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute -bottom-10 left-10 w-48 h-48 bg-red-600/20 rounded-full blur-3xl" />
          </>
        )}
      </div>

      {/* 2. TOP BRANDING ROW */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div 
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center text-[8px] font-black uppercase tracking-tight shadow-md ${
              template.styleVariant === 'clean-blue' 
                ? 'border-blue-600 bg-white text-blue-600' 
                : 'border-white/30 bg-black/60 text-white'
            }`}
            style={{
              borderColor: template.styleVariant === 'clean-blue' ? '#2563EB' : template.themeColor,
              color: template.styleVariant === 'clean-blue' ? '#2563EB' : template.themeColor,
            }}
          >
            {template.dealerBadgeText}
          </div>
          <span 
            className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.14em] ${
              template.styleVariant === 'clean-blue' ? 'text-neutral-900' : 'text-white'
            }`}
          >
            {template.dealerName}
          </span>
        </div>
      </div>

      {/* 3. CATEGORY SPECIFIC LAYOUTS */}

      {/* 3A. FINANCE BANNERS LAYOUT */}
      {isFinance && (
        <div className="relative z-10 px-4 sm:px-5 pb-4 flex flex-col justify-between flex-1">
          {/* Middle Left Headline / Price Stack */}
          <div className="max-w-[55%] my-auto space-y-1">
            {template.headline && (
              <div 
                className={`text-xs sm:text-sm font-extrabold uppercase tracking-tight ${
                  template.styleVariant === 'clean-blue' ? 'text-neutral-900' : 'text-white'
                }`}
              >
                {template.headline}
              </div>
            )}

            {/* Giant Monthly Price */}
            <div className="flex items-baseline gap-1 my-1">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none font-['Montserrat',sans-serif]"
                style={{
                  color: template.styleVariant === 'clean-blue' 
                    ? '#2563EB' 
                    : template.styleVariant === 'cyber-red'
                    ? '#E50914'
                    : '#FFFFFF',
                }}
              >
                £{template.monthlyPayment}
              </span>
              <span 
                className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider ${
                  template.styleVariant === 'clean-blue' ? 'text-neutral-600' : 'text-neutral-400'
                }`}
              >
                / MONTH
              </span>
            </div>

            {/* Deposit & APR Metadata Strip */}
            <div 
              className={`flex items-center gap-2 sm:gap-3 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider pt-1 ${
                template.styleVariant === 'clean-blue' ? 'text-neutral-700' : 'text-neutral-300'
              }`}
            >
              <div>
                <span className="font-extrabold">£{template.deposit}</span> DEPOSIT
              </div>
              <span className="opacity-40">•</span>
              <div>
                <span className="font-extrabold">{template.apr}%</span> APR
              </div>
              {template.termMonths && (
                <>
                  <span className="opacity-40">•</span>
                  <div>{template.termMonths} MONTHS</div>
                </>
              )}
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="pt-2">
            <button
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-lg transition-transform group-hover:scale-105"
              style={{
                backgroundColor: template.styleVariant === 'clean-blue' 
                  ? '#2563EB' 
                  : template.styleVariant === 'cyber-red'
                  ? '#E50914'
                  : 'rgba(255,255,255,0.15)',
                border: template.styleVariant === 'dark-gold' ? '1px solid rgba(212,175,55,0.4)' : 'none',
                color: template.styleVariant === 'dark-gold' ? '#D4AF37' : '#FFFFFF',
              }}
            >
              <span>{template.ctaText}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* 3B. VEHICLE HIGHLIGHT BANNERS LAYOUT */}
      {isVehicle && (
        <div className="relative z-10 px-4 sm:px-5 pb-3 flex flex-col justify-between flex-1">
          {/* Top-Left Headline / Year Model Title */}
          <div className="max-w-[65%] mt-1">
            <div className="text-[8px] sm:text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
              2024
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-white font-['Montserrat',sans-serif] leading-tight">
              {template.yearModelTitle?.replace(/^2024\s+/, '') || template.vehicleName}
            </h2>
            {template.headline && (
              <p className="text-[7px] sm:text-[8px] text-neutral-300 uppercase tracking-wider font-semibold mt-0.5">
                {template.headline}
              </p>
            )}
          </div>

          {/* Bottom 5-Column Specs Strip */}
          {template.specs && (
            <div className="grid grid-cols-5 gap-1.5 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center mt-auto">
              <div>
                <div className="text-[7px] sm:text-[8px] font-black text-white truncate">{template.specs.engine}</div>
                <div className="text-[5px] sm:text-[6px] text-neutral-400 uppercase">ENGINE</div>
              </div>
              <div>
                <div className="text-[7px] sm:text-[8px] font-black text-white truncate">{template.specs.power}</div>
                <div className="text-[5px] sm:text-[6px] text-neutral-400 uppercase">POWER</div>
              </div>
              <div>
                <div className="text-[7px] sm:text-[8px] font-black text-white truncate">{template.specs.acceleration}</div>
                <div className="text-[5px] sm:text-[6px] text-neutral-400 uppercase">0-62 MPH</div>
              </div>
              <div>
                <div className="text-[7px] sm:text-[8px] font-black text-white truncate">{template.specs.topSpeed}</div>
                <div className="text-[5px] sm:text-[6px] text-neutral-400 uppercase">TOP SPEED</div>
              </div>
              <div className="border-l border-white/10 pl-1">
                <div className="text-[8px] sm:text-[9px] font-black text-white truncate font-['Montserrat',sans-serif]" style={{ color: template.themeColor }}>
                  {template.specs.price.split(' ')[0]}
                </div>
                <div className="text-[5px] sm:text-[6px] text-neutral-400 uppercase font-bold">PRICE</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3C. DEALERSHIP HIGHLIGHT BANNERS LAYOUT */}
      {isDealership && (
        <div className="relative z-10 px-4 sm:px-5 pb-3 flex flex-col justify-between flex-1">
          {/* Middle Left Headline & CTA */}
          <div className="max-w-[60%] my-auto space-y-1.5">
            <h2 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-white leading-tight font-['Montserrat',sans-serif]">
              {template.headline}
            </h2>
            {template.subHeadline && (
              <p className="text-[7px] sm:text-[8px] text-neutral-300 uppercase tracking-widest font-semibold">
                {template.subHeadline}
              </p>
            )}
            
            <div className="pt-1">
              <button
                className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white flex items-center gap-1 shadow-md transition-all group-hover:scale-105"
                style={{
                  backgroundColor: template.styleVariant === 'showroom-blue' 
                    ? '#2563EB' 
                    : template.styleVariant === 'showroom-red'
                    ? 'rgba(229,9,20,0.8)'
                    : 'rgba(255,255,255,0.1)',
                  border: template.styleVariant === 'showroom-gold' ? '1px solid rgba(212,175,55,0.5)' : 'none',
                }}
              >
                <span>{template.ctaText}</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Bottom 4 Badges Strip */}
          {template.dealershipBadges && (
            <div className="grid grid-cols-4 gap-1 p-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center mt-auto">
              {template.dealershipBadges.map((badge) => (
                <div key={badge.id} className="px-1 py-0.5">
                  <div className="text-[7px] sm:text-[8px] font-extrabold text-white truncate" style={{ color: template.themeColor }}>
                    {badge.title}
                  </div>
                  <div className="text-[5px] sm:text-[6px] text-neutral-300 uppercase font-medium truncate mt-0.5">
                    {badge.subtitle}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Subtle Hover Edit Hint Overlay */}
      {interactive && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none z-20">
          <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/30 shadow-lg">
            Click to Customize Template
          </div>
        </div>
      )}

    </div>
  );
};

export default TemplateCard;
