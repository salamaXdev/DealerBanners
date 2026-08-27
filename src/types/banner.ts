export interface BannerTheme {
  primaryColor: string; // e.g. '#E50914' or '#0284C7'
  fontFamily?: string;  // e.g. 'Plus Jakarta Sans', 'Outfit', 'Montserrat', etc.
  overlayIntensity?: 'subtle' | 'balanced' | 'strong';
}

export interface VehicleDetails {
  yearReg: string; // e.g. "2021 (71 Reg)"
  makeModel: string; // e.g. "Toyota GR Supra"
  variant: string; // e.g. "3.0 Pro Auto • 335 bhp"
  mileage: string; // e.g. "18,450 miles"
  cashPrice: string; // e.g. "£34,990"
  transmission?: string; // e.g. "Automatic"
  fuelType?: string; // e.g. "Petrol"
}

export interface FinanceDetails {
  monthlyPayment: string; // e.g. "389"
  deposit: string; // e.g. "2,500"
  apr: string; // e.g. "8.9"
  termMonths: string; // e.g. "48"
}

export interface TrustFeature {
  id: string;
  icon: 'shield' | 'check' | 'history' | 'badge' | 'truck' | 'lock';
  title: string;
  subtitle: string;
}

export interface UsedCarBannerData {
  theme: BannerTheme;
  dealerName: string;
  dealerLocation: string;
  dealerBadgeText: string;
  vehicleImage: string;
  vehicle: VehicleDetails;
  finance: FinanceDetails;
  features: TrustFeature[];
  ctaText: string;
  phone: string;
  website: string;
  hours: string;
}

export interface FinanceBannerProps {
  theme: BannerTheme;
  dealerName: string;
  dealerLocation?: string;
  dealerBadgeText?: string;
  vehicleImage: string;
  vehicle: VehicleDetails;
  finance: FinanceDetails;
  features?: TrustFeature[];
  ctaText: string;
  phone?: string;
  website?: string;
  hours?: string;
  className?: string;
}
