import type { UsedCarBannerData, TrustFeature } from '../types/banner';

export const DEFAULT_TRUST_FEATURES: TrustFeature[] = [
  { id: '1', icon: 'shield', title: '12 Months MOT', subtitle: 'Included free' },
  { id: '2', icon: 'check', title: 'RAC Approved', subtitle: '82-point check' },
  { id: '3', icon: 'history', title: 'Full Service History', subtitle: 'Verified' },
  { id: '4', icon: 'badge', title: 'HPI Clear', subtitle: 'Guaranteed' },
  { id: '5', icon: 'lock', title: 'Reserve Online', subtitle: '£99 refundable' },
];

export const INVENTORY_PHOTO_OPTIONS = [
  {
    name: 'Toyota GR Supra (Inventory #1)',
    image: '/cars/used-car-1.jpg',
    defaultData: {
      makeModel: 'Toyota GR Supra',
      variant: '3.0 Pro Auto • 335 bhp',
      yearReg: '2021 (71 Reg)',
      mileage: '18,450 miles',
      cashPrice: '£34,990',
      monthlyPayment: '389',
      deposit: '2,500',
      apr: '8.9',
      primaryColor: '#E50914',
    },
  },
  {
    name: 'Mercedes-Benz E-Class (Inventory #2)',
    image: '/cars/used-car-2.webp',
    defaultData: {
      makeModel: 'Mercedes-Benz E-Class',
      variant: 'E220d AMG Line Premium Auto',
      yearReg: '2020 (70 Reg)',
      mileage: '28,300 miles',
      cashPrice: '£23,995',
      monthlyPayment: '279',
      deposit: '1,800',
      apr: '8.4',
      primaryColor: '#0284C7',
    },
  },
  {
    name: 'Land Rover Discovery Sport (Inventory #3)',
    image: '/cars/used-car-3.webp',
    defaultData: {
      makeModel: 'Land Rover Discovery Sport',
      variant: '2.0 D200 R-Dynamic S Plus 4WD',
      yearReg: '2021 (21 Reg)',
      mileage: '22,150 miles',
      cashPrice: '£26,950',
      monthlyPayment: '319',
      deposit: '2,500',
      apr: '8.9',
      primaryColor: '#0F766E',
    },
  },
  {
    name: 'Mercedes-Benz A-Class (Inventory #4)',
    image: '/cars/used-car-4.webp',
    defaultData: {
      makeModel: 'Mercedes-Benz A-Class',
      variant: 'A180 AMG Line Executive Auto',
      yearReg: '2022 (72 Reg)',
      mileage: '14,900 miles',
      cashPrice: '£21,450',
      monthlyPayment: '259',
      deposit: '1,500',
      apr: '8.4',
      primaryColor: '#2563EB',
    },
  },
  {
    name: 'Nissan Qashqai (Inventory #5)',
    image: '/cars/used-car-5.webp',
    defaultData: {
      makeModel: 'Nissan Qashqai',
      variant: '1.3 DiG-T N-Connecta Auto',
      yearReg: '2021 (71 Reg)',
      mileage: '31,400 miles',
      cashPrice: '£15,995',
      monthlyPayment: '199',
      deposit: '1,000',
      apr: '9.4',
      primaryColor: '#D97706',
    },
  },
];

export const BRAND_COLOR_SWATCHES = [
  { name: 'Gazoo Red', hex: '#E50914' },
  { name: 'Prestige Blue', hex: '#0284C7' },
  { name: 'Teal Green', hex: '#0F766E' },
  { name: 'Amber Gold', hex: '#D97706' },
  { name: 'Royal Indigo', hex: '#2563EB' },
  { name: 'Charcoal Slate', hex: '#64748B' },
];

export const DEFAULT_USED_CAR_BANNER: UsedCarBannerData = {
  theme: {
    primaryColor: '#E50914',
    fontFamily: 'Plus Jakarta Sans',
    overlayIntensity: 'balanced',
  },
  dealerName: 'LOWTON MOTOR COMPANY',
  dealerLocation: 'Approved Used Vehicle Centre',
  dealerBadgeText: 'LMC',
  vehicleImage: '/cars/used-car-1.jpg',
  vehicle: {
    yearReg: '2021 (71 Reg)',
    makeModel: 'Toyota GR Supra',
    variant: '3.0 Pro Auto • 335 bhp',
    mileage: '18,450 miles',
    cashPrice: '£34,990',
    transmission: 'Automatic',
    fuelType: 'Petrol',
  },
  finance: {
    monthlyPayment: '389',
    deposit: '2,500',
    apr: '8.9',
    termMonths: '48',
  },
  features: DEFAULT_TRUST_FEATURES,
  ctaText: 'Reserve for £99',
  phone: '01925 987 600',
  website: 'LOWTONMOTORCOMPANY.CO.UK',
  hours: 'Open 7 Days • 9am – 6pm',
};
