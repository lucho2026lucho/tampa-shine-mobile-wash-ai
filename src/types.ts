export type Language = 'es' | 'en';

export type VehicleType = 'sedan' | 'suv' | 'pickup' | 'other';

export interface ServiceItem {
  id: string;
  name: { es: string; en: string };
  shortDesc: { es: string; en: string };
  description: { es: string; en: string };
  startingPrice: number;
  image: string;
  features: { es: string[]; en: string[] };
  badge?: { es: string; en: string };
}

export interface BeforeAfterItem {
  id: string;
  category: 'exterior' | 'interior' | 'paint' | 'wheels' | 'upholstery' | 'full';
  title: { es: string; en: string };
  description: { es: string; en: string };
  beforeImage: string;
  afterImage: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicleType: VehicleType;
  vehicleMake: string;
  vehicleModel: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  serviceAddress: string;
  specialAttention: boolean;
  comments: string;
}

export interface FleetInquiryData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  vehicleCount: string;
  vehicleTypes: string;
  frequency: 'once' | 'weekly' | 'biweekly' | 'monthly' | 'other';
  comments: string;
}

export interface BusinessConfig {
  phone: string;
  whatsappPhone: string;
  email: string;
  addressDisplay: string;
  hoursDisplay: { es: string; en: string };
  instagramHandle: string;
  instagramUrl: string;
  googleBusinessUrl: string;
  yelpUrl: string;
  prices: {
    sedan: number;
    suv: number;
    pickup: number;
  };
}
