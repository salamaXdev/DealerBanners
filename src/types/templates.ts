export type BannerCategory = 'finance' | 'vehicle' | 'dealership';

export interface BannerTemplateItem {
  id: string;
  category: BannerCategory;
  categoryLabel: string;
  templateName: string;
  themeColor: string;
  accentColor?: string;
  styleVariant: 'dark-gold' | 'clean-blue' | 'cyber-red' | 'concrete-green' | 'studio-white' | 'dark-stealth' | 'showroom-gold' | 'showroom-blue' | 'showroom-red';
  
  // Dealer
  dealerName: string;
  dealerBadgeText: string;
  dealerTagline?: string;
  
  // Images
  vehicleImage: string;
  vehicleName: string;
  
  // Headings & Text
  headline: string;
  subHeadline: string;
  yearModelTitle?: string;
  
  // Finance specific
  monthlyPayment?: string;
  deposit?: string;
  apr?: string;
  termMonths?: string;
  
  // Vehicle Specs specific
  specs?: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    price: string;
  };
  
  // Dealership Badges specific
  dealershipBadges?: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon?: string;
  }>;
  
  // CTA
  ctaText: string;
}
