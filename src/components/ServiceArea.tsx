import React from 'react';
import { Language, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { translations } from '../translations';
import { TAMPA_AREAS } from '../data/servicesData';
import { MapPin, Navigation, MessageCircle } from 'lucide-react';

interface ServiceAreaProps {
  language: Language;
  config?: BusinessConfig;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ language, config }) => {
  const t = translations[language].serviceArea;
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const whatsappPhone = activeConfig?.whatsappPhone || DEFAULT_BUSINESS_CONFIG.whatsappPhone;

  return (
    <section id="area-servicio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'COBERTURA LOCAL' : 'LOCAL COVERAGE'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Map Graphic of Tampa Bay Area */}
          <div className="lg:col-span-7 bg-[#111218] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#0066FF]" />
                <span className="text-sm font-bold text-white font-['Montserrat']">
                  Tampa Bay Metropolitan Area
                </span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0066FF]/20 text-[#0066FF] border border-[#0066FF]/30">
                Florida, USA
              </span>
            </div>

            {/* Stylized Tampa Vector Map Visualization */}
            <div className="relative h-72 sm:h-80 w-full rounded-2xl bg-[#090a0f] border border-white/10 p-4 flex items-center justify-center overflow-hidden">
              {/* Radar pulse circles */}
              <div className="absolute w-56 h-56 rounded-full border border-[#0066FF]/20 animate-ping opacity-20 pointer-events-none" />
              <div className="absolute w-80 h-80 rounded-full border border-[#0066FF]/15 pointer-events-none" />
              <div className="absolute w-40 h-40 rounded-full bg-[#0066FF]/5 pointer-events-none" />

              {/* Stylized Bay Water Curve */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 500 300">
                <path
                  d="M 120,300 C 150,220 180,180 220,160 C 260,140 230,80 200,40 C 180,20 150,0 120,0 L 0,0 L 0,300 Z"
                  fill="#0066FF"
                  opacity="0.15"
                />
                <path
                  d="M 140,300 C 170,230 200,190 235,170 C 275,150 250,90 215,50 L 225,40"
                  fill="none"
                  stroke="#0066FF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
              </svg>

              {/* Center Marker: Tampa Downtown */}
              <div className="absolute z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center shadow-[0_0_15px_#0066FF]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-[#0066FF] animate-ping opacity-40" />
                </div>
                <span className="mt-1 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider border border-white/10">
                  Tampa Base
                </span>
              </div>

              {/* Orbiting Tampa Nodes */}
              <div className="absolute top-10 left-16 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                Carrollwood
              </div>
              <div className="absolute top-8 right-20 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                Temple Terrace
              </div>
              <div className="absolute bottom-16 right-16 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                Brandon / Riverview
              </div>
              <div className="absolute bottom-12 left-16 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                South Tampa
              </div>
              <div className="absolute top-28 left-8 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                Westshore
              </div>
              <div className="absolute top-24 right-10 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                Ybor City
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              {language === 'es'
                ? 'Nos desplazamos con unidad móvil totalmente equipada en todo el condado de Hillsborough y zonas metropolitanas de Tampa.'
                : 'We dispatch fully equipped mobile units across Hillsborough County and Greater Tampa metropolitan hubs.'}
            </p>
          </div>

          {/* Right: Covered Zones list & WhatsApp verification */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#111218] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-base sm:text-lg font-bold text-white font-['Montserrat'] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0066FF]" />
                <span>{t.coverageHeading}</span>
              </h3>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {TAMPA_AREAS.slice(0, 12).map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-gray-300 py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  {t.notSureText} <br />
                  <span className="text-[#0066FF]">{t.askUsText}</span>
                </p>

                <a
                  id="service-area-whatsapp-btn"
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                    language === 'es'
                      ? 'Hola Tampa Shine, me gustaría consultar si llegan a mi ubicación en Tampa para un servicio.'
                      : 'Hello Tampa Shine, I would like to check if you service my specific location in Tampa.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-black shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.askWhatsAppBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
