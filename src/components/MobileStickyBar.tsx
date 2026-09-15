import React from 'react';
import { Language, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { translations } from '../translations';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  language: Language;
  config?: BusinessConfig;
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  language,
  config,
  onOpenBooking
}) => {
  const t = translations[language].mobileBar;
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const phone = activeConfig?.phone || DEFAULT_BUSINESS_CONFIG.phone;
  const whatsappPhone = activeConfig?.whatsappPhone || DEFAULT_BUSINESS_CONFIG.whatsappPhone;

  return (
    <div
      id="mobile-sticky-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090a0f]/95 backdrop-blur-md border-t border-white/10 px-3 py-1.5 pb-[max(6px,env(safe-area-inset-bottom))] flex items-center justify-between gap-2 shadow-[0_-10px_25px_rgba(0,0,0,0.6)]"
    >
      {/* 1. Call Button */}
      <a
        id="mobile-bar-call-btn"
        href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
        className="flex-1 h-10 flex items-center justify-center gap-1.5 rounded-xl bg-white/[0.07] hover:bg-white/10 text-gray-200 border border-white/10 transition-colors active:scale-95 text-[11px] font-bold uppercase tracking-wider"
      >
        <Phone className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
        <span>{t.call}</span>
      </a>

      {/* 2. WhatsApp Button */}
      <a
        id="mobile-bar-whatsapp-btn"
        href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
          language === 'es'
            ? 'Hola Tampa Shine, deseo consultar disponibilidad para un lavado móvil.'
            : 'Hello Tampa Shine, I would like to check availability for a mobile wash.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-10 flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold shadow-sm transition-colors active:scale-95 text-[11px] uppercase tracking-wider"
      >
        <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{t.whatsapp}</span>
      </a>

      {/* 3. Book Button */}
      <button
        id="mobile-bar-book-btn"
        onClick={onOpenBooking}
        className="flex-1 h-10 flex items-center justify-center gap-1.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-extrabold shadow-[0_0_15px_rgba(0,102,255,0.35)] transition-all active:scale-95 cursor-pointer text-[11px] uppercase tracking-wider"
      >
        <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{t.book}</span>
      </button>
    </div>
  );
};
