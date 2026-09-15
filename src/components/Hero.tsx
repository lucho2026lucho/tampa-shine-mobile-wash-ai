import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Sparkles, MapPin, Droplets, Briefcase, ChevronDown, Calendar } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  const t = translations[language].hero;

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#servicios');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-48px)] sm:min-h-[88vh] flex items-center justify-center pt-16 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090a0f]"
    >
      {/* Background with Dark Automotive Atmosphere and Subtle Foam Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep background image with high opacity darkening */}
        <img
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1920&q=80"
          alt="Tampa Shine Mobile Wash Detailing"
          className="w-full h-full object-cover object-center opacity-15 sm:opacity-20 scale-100 filter blur-[0.5px]"
        />
        {/* Radial Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/95 via-[#090a0f]/85 to-[#090a0f]" />
        
        {/* Electric Blue Luminous Spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[220px] sm:h-[350px] bg-[#0066FF]/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center w-full">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-[11px] sm:text-xs font-medium tracking-wide mb-3 sm:mb-4 shadow-none">
          <MapPin className="w-3 h-3 text-[#0066FF] flex-shrink-0" />
          <span>{t.badge}</span>
        </div>

        {/* Impactful Title with highlighted SALIR DE CASA */}
        <h1 className="text-[26px] xs:text-[30px] sm:text-5xl md:text-6xl font-black text-white tracking-tight font-['Montserrat'] leading-[1.15] mb-2 sm:mb-3">
          {language === 'es' ? (
            <>
              <span className="block">TU AUTO LIMPIO</span>
              <span className="block">
                SIN{' '}
                <span className="text-[#0066FF] bg-gradient-to-r from-blue-300 via-blue-400 to-[#0066FF] bg-clip-text text-transparent">
                  SALIR DE CASA
                </span>
              </span>
            </>
          ) : (
            <>
              <span className="block">YOUR CAR CLEAN</span>
              <span className="block">
                WITHOUT{' '}
                <span className="text-[#0066FF] bg-gradient-to-r from-blue-300 via-blue-400 to-[#0066FF] bg-clip-text text-transparent">
                  LEAVING HOME
                </span>
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-gray-300 max-w-[310px] sm:max-w-xl font-normal leading-relaxed mb-2.5 sm:mb-3 mx-auto">
          {language === 'es' ? (
            <>
              Lavado y detallado móvil en Tampa.<br className="hidden xs:inline" /> Nosotros vamos hasta ti.
            </>
          ) : (
            <>
              Mobile car wash & detailing in Tampa.<br className="hidden xs:inline" /> We come to you.
            </>
          )}
        </p>
        
        {/* Slogan - Brand Statement with subtle blue lines */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <span className="w-4 sm:w-6 h-[1px] bg-[#0066FF]/40" />
          <span className="text-[10px] sm:text-xs font-bold text-[#0066FF] tracking-[0.18em] uppercase font-['Montserrat']">
            “{t.slogan}”
          </span>
          <span className="w-4 sm:w-6 h-[1px] bg-[#0066FF]/40" />
        </div>

        {/* Primary CTA Button */}
        <div className="flex flex-col items-center gap-2 w-full max-w-[280px] xs:max-w-[300px] sm:max-w-none">
          <button
            id="hero-reserve-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs sm:text-base font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-[0_4px_20px_rgba(0,102,255,0.4)] hover:shadow-[0_6px_25px_rgba(0,102,255,0.55)] active:scale-[0.97] transition-all duration-150 cursor-pointer"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span>{t.ctaPrimary}</span>
          </button>

          <a
            id="hero-services-btn"
            href="#servicios"
            onClick={scrollToServices}
            className="text-[11px] sm:text-xs text-gray-400 hover:text-white transition-colors py-1 inline-flex items-center gap-1"
          >
            <span>{t.ctaSecondary}</span>
            <ChevronDown className="w-3 h-3 text-gray-500" />
          </a>
        </div>

        {/* Core Indicators on desktop / tablet */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-3 w-full max-w-3xl mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-gray-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" />
            <span>{t.tagMobile}</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-gray-300 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" />
            <span>{t.tagLocation}</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-gray-300 text-xs font-medium">
            <Droplets className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" />
            <span>{t.tagWaterless}</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-gray-300 text-xs font-medium">
            <Briefcase className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0" />
            <span>{t.tagFleets}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
