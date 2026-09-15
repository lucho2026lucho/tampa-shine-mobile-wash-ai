import { BusinessConfig } from '../types';

const STORAGE_KEY = 'tampa_shine_business_config_v1';

export const DEFAULT_CONFIG: BusinessConfig = {
  phone: '+1 (813) 555-0199', // Editable placeholder
  whatsappPhone: '+18135550199', // Numeric for wa.me link
  email: 'info@tampashinemobilewash.com',
  addressDisplay: 'Tampa, Florida, EE. UU. (Servicio a Domicilio)',
  hoursDisplay: {
    es: 'Lunes a Sábado: 8:00 AM - 6:30 PM | Domingo: Previa Cita',
    en: 'Monday to Saturday: 8:00 AM - 6:30 PM | Sunday: By Appointment'
  },
  instagramHandle: '@tampashinemobilewash',
  instagramUrl: 'https://instagram.com/tampashinemobilewash',
  googleBusinessUrl: 'https://maps.google.com/?q=Tampa+Shine+Mobile+Wash+Tampa+FL',
  yelpUrl: 'https://yelp.com/biz/tampa-shine-mobile-wash-tampa',
  prices: {
    sedan: 50,
    suv: 60,
    pickup: 70
  }
};

export function getStoredConfig(): BusinessConfig {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (item && item !== 'undefined' && item !== 'null') {
      const parsed = JSON.parse(item);
      if (parsed && typeof parsed === 'object') {
        return {
          phone: parsed.phone || DEFAULT_CONFIG.phone,
          whatsappPhone: parsed.whatsappPhone || DEFAULT_CONFIG.whatsappPhone,
          email: parsed.email || DEFAULT_CONFIG.email,
          addressDisplay: parsed.addressDisplay || DEFAULT_CONFIG.addressDisplay,
          hoursDisplay: {
            es: parsed.hoursDisplay?.es || DEFAULT_CONFIG.hoursDisplay.es,
            en: parsed.hoursDisplay?.en || DEFAULT_CONFIG.hoursDisplay.en
          },
          instagramHandle: parsed.instagramHandle || DEFAULT_CONFIG.instagramHandle,
          instagramUrl: parsed.instagramUrl || DEFAULT_CONFIG.instagramUrl,
          googleBusinessUrl: parsed.googleBusinessUrl || DEFAULT_CONFIG.googleBusinessUrl,
          yelpUrl: parsed.yelpUrl || DEFAULT_CONFIG.yelpUrl,
          prices: {
            sedan: typeof parsed.prices?.sedan === 'number' ? parsed.prices.sedan : DEFAULT_CONFIG.prices.sedan,
            suv: typeof parsed.prices?.suv === 'number' ? parsed.prices.suv : DEFAULT_CONFIG.prices.suv,
            pickup: typeof parsed.prices?.pickup === 'number' ? parsed.prices.pickup : DEFAULT_CONFIG.prices.pickup
          }
        };
      }
    }
  } catch {
    // fallback
  }
  return DEFAULT_CONFIG;
}

export function saveStoredConfig(newConfig: BusinessConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
  } catch (err) {
    console.error('Error saving config', err);
  }
}

export const DEFAULT_BUSINESS_CONFIG = DEFAULT_CONFIG;
export const getStoredBusinessConfig = getStoredConfig;
export const saveBusinessConfig = saveStoredConfig;
