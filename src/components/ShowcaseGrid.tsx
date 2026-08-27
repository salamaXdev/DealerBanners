import React from 'react';
import { 
  Sparkles, 
  Ratio, 
  Palette, 
  Code2, 
  Cpu
} from 'lucide-react';
import { TEMPLATES_DATA } from '../constants/templatesData';
import { TemplateCard } from './TemplateCard';
import type { BannerTemplateItem } from '../types/templates';

interface ShowcaseGridProps {
  onSelectTemplate: (template: BannerTemplateItem) => void;
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({
  onSelectTemplate,
}) => {
  const financeTemplates = TEMPLATES_DATA.filter((t) => t.category === 'finance');
  const vehicleTemplates = TEMPLATES_DATA.filter((t) => t.category === 'vehicle');
  const dealershipTemplates = TEMPLATES_DATA.filter((t) => t.category === 'dealership');

  return (
    <div className="w-full flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. 3-COLUMN CATEGORY HEADERS & 3x3 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* ======================================================== */}
        {/* COLUMN 1: FINANCE BANNERS */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-neutral-300">
              FINANCE BANNERS <span className="text-neutral-500 font-normal">(3 TEMPLATES)</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {financeTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={onSelectTemplate}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* COLUMN 2: VEHICLE HIGHLIGHT BANNERS */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-neutral-300">
              VEHICLE HIGHLIGHT BANNERS <span className="text-neutral-500 font-normal">(3 TEMPLATES)</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {vehicleTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={onSelectTemplate}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* COLUMN 3: DEALERSHIP HIGHLIGHT BANNERS */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-1 border-b border-white/10">
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-neutral-300">
              DEALERSHIP HIGHLIGHT BANNERS <span className="text-neutral-500 font-normal">(3 TEMPLATES)</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {dealershipTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={onSelectTemplate}
              />
            ))}
          </div>
        </div>

      </div>

      {/* 2. BOTTOM CAPABILITIES / METRICS STRIP */}
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">
        
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e12] border border-white/10">
          <Ratio className="w-3.5 h-3.5 text-neutral-300" />
          <span>ASPECT RATIO 4:3</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e12] border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>FULLY CUSTOMISABLE</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e12] border border-white/10">
          <Palette className="w-3.5 h-3.5 text-[#FF6A00]" />
          <span>BRAND THEME READY</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e12] border border-white/10">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>REACT COMPONENTS</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0e12] border border-white/10">
          <Code2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>CLEAN & REUSABLE CODE</span>
        </div>

      </div>

    </div>
  );
};

export default ShowcaseGrid;
