import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { INITIAL_SERVICES, UPCOMING_SERVICES } from '../data/servicesData';
import { translations } from '../translations';
import { Check, Calendar, Sparkles, ChevronRight, Clock } from 'lucide-react';

interface ServicesProps {
  language: Language;
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ language, onSelectService }) => {
  const [selectedTab, setSelectedTab] = useState<'current' | 'upcoming'>('current');
  const t = translations[language].services;

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'SERVICIOS PROFESIONALES' : 'PROFESSIONAL SERVICES'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Toggle between Core Services and Upcoming Services */}
          <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-xl mt-6">
            <button
              onClick={() => setSelectedTab('current')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                selectedTab === 'current'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'es' ? 'Servicios Disponibles' : 'Available Services'}
            </button>
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                selectedTab === 'upcoming'
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'es' ? 'En Preparación' : 'Coming Soon'}
            </button>
          </div>
        </div>

        {/* Current Core Services Grid */}
        {selectedTab === 'current' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_SERVICES.map((service: ServiceItem) => {
              const isFleet = service.id === 'fleet-service';
              return (
                <div
                  key={service.id}
                  className={`flex flex-col bg-[#111218] border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                    service.badge
                      ? 'border-[#0066FF]/40 ring-1 ring-[#0066FF]/20'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Service Photo with Badges */}
                  <div className="relative h-56 overflow-hidden bg-[#181920]">
                    <img
                      src={service.image}
                      alt={service.name[language]}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-transparent to-black/30" />

                    {/* Badge if present */}
                    {service.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-[#0066FF] text-white shadow-md uppercase tracking-wider">
                        {service.badge[language]}
                      </span>
                    )}

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 left-4 bg-[#090a0f]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      {isFleet ? (
                        <span className="text-xs font-bold text-gray-200">
                          {t.quoteOnly}
                        </span>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-[11px] text-gray-400 uppercase font-medium">{t.from}</span>
                          <span className="text-xl font-black text-white font-['Montserrat']">
                            ${service.startingPrice}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-2">
                        {service.name[language]}
                      </h3>
                      <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                        {service.shortDesc[language]}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="border-t border-white/5 pt-4 mb-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 block">
                          {language === 'es' ? 'Incluye:' : 'Includes:'}
                        </span>
                        <ul className="space-y-2">
                          {service.features[language].map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                              <Check className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Booking Action Button */}
                    <button
                      id={`book-service-${service.id}`}
                      onClick={() => {
                        if (isFleet) {
                          const fleetElem = document.querySelector('#flotas');
                          if (fleetElem) fleetElem.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          onSelectService(service.id);
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white transition-colors cursor-pointer active:scale-95 shadow-md shadow-blue-500/20"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isFleet ? (language === 'es' ? 'Solicitar Cotización de Flota' : 'Request Fleet Quote') : t.bookThis}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Upcoming Services Preview */}
        {selectedTab === 'upcoming' && (
          <div className="bg-[#111218] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl animate-in fade-in duration-300">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Sparkles className="w-6 h-6 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white font-['Montserrat']">
                  {t.upcomingTitle}
                </h3>
                <p className="text-xs text-gray-400">
                  {t.upcomingSubtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {UPCOMING_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-white">
                        {item.name[language]}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-gray-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {language === 'es' ? 'En preparación' : 'In prep'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {item.desc[language]}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium mt-3 italic">
                    {language === 'es' ? 'Próximo lanzamiento para clientes en Tampa' : 'Future launch for Tampa clients'}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mt-6 pt-4 border-t border-white/5">
              {language === 'es' 
                ? 'Nota: Estos servicios especializados se encuentran en fase de preparación técnica y serán activados oficialmente en futuras actualizaciones.'
                : 'Note: These specialized services are currently in technical preparation and will be officially announced in upcoming expansions.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
