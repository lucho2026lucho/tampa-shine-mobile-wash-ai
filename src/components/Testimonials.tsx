import React from 'react';
import { Language, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { translations } from '../translations';
import { Star, ShieldCheck, ExternalLink, Award } from 'lucide-react';

interface TestimonialsProps {
  language: Language;
  config?: BusinessConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language, config }) => {
  const t = translations[language].testimonials;
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const googleBusinessUrl = activeConfig?.googleBusinessUrl || DEFAULT_BUSINESS_CONFIG.googleBusinessUrl;

  return (
    <section id="testimonios" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0e14] border-t border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'CONFIANZA Y TRANSPARENCIA' : 'AUTHENTIC TRUST'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Clean, Honest Placeholder Card (NO false ratings or made-up reviews) */}
        <div className="bg-[#13151d] border border-white/10 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle Google G and Verified Shield Visual */}
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0066FF] mx-auto mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat'] mb-4">
            {language === 'es' ? 'Compromiso de Calidad Verificada' : 'Verified Quality Commitment'}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-6">
            {t.note}
          </p>

          <p className="text-xs text-gray-400 max-w-md mx-auto italic mb-8">
            {t.inviteText}
          </p>

          {/* Google Business Action Link */}
          <a
            id="google-business-reviews-btn"
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
          >
            {/* Google "G" representation */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.73-2.1-6.67-4.94H1.3v3.13C3.33 21.36 7.4 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.33 14.26c-.24-.72-.38-1.49-.38-2.26s.14-1.54.38-2.26V6.61H1.3C.47 8.24 0 10.06 0 12s.47 3.76 1.3 5.39l4.03-3.13z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.4 0 3.33 2.64 1.3 6.61l4.03 3.13c.94-2.84 3.57-4.99 6.67-4.99z"
              />
            </svg>
            <span>{t.googleCta}</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
