import React from 'react';

interface HeaderProps {
  brandColor?: string;
  onOpenCodeModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  brandColor = '#E50914',
}) => {
  return (
    <header className="w-full pt-6 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left: Product Title & Positioning */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Dealer<span style={{ color: brandColor }} className="transition-colors duration-300">Banners.</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-normal mt-0.5 tracking-normal">
            Turning ordinary used-car inventory photos into high-converting marketing banners.
          </p>
        </div>

      </div>
    </header>
  );
};

export default Header;
