import React from 'react';
import { Language, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { translations } from '../translations';
import { Phone, MessageCircle, Calendar, MapPin, Mail, Instagram, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  config?: BusinessConfig;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  config,
  onOpenBooking
}) => {
  const t = translations[language].contact;
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const phone = activeConfig?.phone || DEFAULT_BUSINESS_CONFIG.phone;
  const whatsappPhone = activeConfig?.whatsappPhone || DEFAULT_BUSINESS_CONFIG.whatsappPhone;
  const email = activeConfig?.email || DEFAULT_BUSINESS_CONFIG.email;
  const hoursDisplay = activeConfig?.hoursDisplay || DEFAULT_BUSINESS_CONFIG.hoursDisplay;
  const instagramUrl = activeConfig?.instagramUrl || DEFAULT_BUSINESS_CONFIG.instagramUrl;
  const instagramHandle = activeConfig?.instagramHandle || DEFAULT_BUSINESS_CONFIG.instagramHandle;
  const googleBusinessUrl = activeConfig?.googleBusinessUrl || DEFAULT_BUSINESS_CONFIG.googleBusinessUrl;
  const yelpUrl = activeConfig?.yelpUrl || DEFAULT_BUSINESS_CONFIG.yelpUrl;

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0066FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-b from-[#141622] to-[#0f1017] border border-white/15 rounded-3xl p-8 sm:p-14 text-center shadow-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            TAMPA SHINE MOBILE WASH
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-8 font-medium">
            {t.subtitle}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              id="contact-book-now-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookNowBtn}</span>
            </button>

            <a
              id="contact-whatsapp-btn"
              href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                language === 'es'
                  ? 'Hola Tampa Shine, estoy interesado en un servicio para mi vehículo.'
                  : 'Hello Tampa Shine, I am interested in a mobile service for my vehicle.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-black shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.whatsappBtn}</span>
            </a>

            <a
              id="contact-call-btn"
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#0066FF]" />
              <span>{t.callBtn}</span>
            </a>
          </div>
        </div>

        {/* Channels Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Location & Operating Hours */}
          <div className="bg-[#111218] border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#0066FF] mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              {t.locationHeading}
            </h3>
            <p className="text-xs text-gray-300 mb-2">
              {t.locationText}
            </p>
            <p className="text-[11px] text-gray-400">
              {hoursDisplay[language]}
            </p>
          </div>

          {/* Direct Phone & WhatsApp */}
          <div className="bg-[#111218] border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#0066FF] mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              {language === 'es' ? 'Atención Telefónica' : 'Direct Contacts'}
            </h3>
            <div className="space-y-1 text-xs">
              <p className="text-gray-300">
                <span className="text-gray-500 font-medium">{language === 'es' ? 'Teléfono:' : 'Phone:'}</span> {phone}
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500 font-medium">WhatsApp:</span> {phone}
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500 font-medium">Email:</span> {email}
              </p>
            </div>
          </div>

          {/* Official Social Media */}
          <div className="bg-[#111218] border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#0066FF] mb-4">
              <Instagram className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {t.channelsHeading}
            </h3>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E1306C] flex items-center justify-between transition-colors"
              >
                <span>Instagram ({instagramHandle})</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>

              <a
                href={googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 flex items-center justify-between transition-colors"
              >
                <span>Google Business Profile</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
              <a
                href={yelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 flex items-center justify-between transition-colors"
              >
                <span>Yelp Business Profile</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
