import React, { useState } from 'react';
import { Language, BusinessConfig, VehicleType } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { translations } from '../translations';
import { Car, Truck, ArrowRight, ShieldCheck, Calculator, Sparkles } from 'lucide-react';

interface PricingProps {
  language: Language;
  config?: BusinessConfig;
  onOpenBookingWithDetails: (vehicleType: VehicleType, serviceId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  language,
  config,
  onOpenBookingWithDetails
}) => {
  const t = translations[language].pricing;
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const prices = {
    sedan: activeConfig?.prices?.sedan ?? DEFAULT_BUSINESS_CONFIG.prices.sedan,
    suv: activeConfig?.prices?.suv ?? DEFAULT_BUSINESS_CONFIG.prices.suv,
    pickup: activeConfig?.prices?.pickup ?? DEFAULT_BUSINESS_CONFIG.prices.pickup
  };

  // Quick estimator states
  const [estVehicle, setEstVehicle] = useState<VehicleType>('sedan');
  const [estService, setEstService] = useState<string>('exterior-wash');
  const [estSpecial, setEstSpecial] = useState<boolean>(false);

  const vehicleRates: Record<VehicleType, number> = {
    sedan: prices.sedan,
    suv: prices.suv,
    pickup: prices.pickup,
    other: prices.suv + 15
  };

  const serviceMultipliers: Record<string, number> = {
    'exterior-wash': 0, // base
    'interior-cleaning': 10,
    'interior-exterior': 40,
    'wax-protection': 60
  };

  const calculatedTotal =
    vehicleRates[estVehicle] +
    (serviceMultipliers[estService] || 0) +
    (estSpecial ? 20 : 0);

  const pricingCards = [
    {
      type: 'sedan' as VehicleType,
      title: t.sedan,
      price: prices.sedan,
      icon: Car,
      desc: language === 'es' ? 'Autos compactos, sedanes de 2 o 4 puertas y coupés.' : 'Compact cars, 2/4-door sedans, and coupes.',
      popular: false
    },
    {
      type: 'suv' as VehicleType,
      title: t.suv,
      price: prices.suv,
      icon: Car,
      desc: language === 'es' ? 'Crossovers y SUVs compactas o medianas familiares.' : 'Crossovers and small-to-midsize family SUVs.',
      popular: true
    },
    {
      type: 'pickup' as VehicleType,
      title: t.pickup,
      price: prices.pickup,
      icon: Truck,
      desc: language === 'es' ? 'Camionetas pickup, furgonetas y SUVs de 3 filas.' : 'Pickup trucks, full-size vans, and 3-row SUVs.',
      popular: false
    }
  ];

  return (
    <section id="precios" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0e14] border-t border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'TRANSPARENCIA TOTAL' : 'HONEST PRICING'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Big Vehicle Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.type}
                className={`relative bg-[#13151d] rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl ${
                  card.popular
                    ? 'border-[#0066FF] ring-2 ring-[#0066FF]/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0066FF] text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                    {language === 'es' ? 'Más Frecuente' : 'Most Frequent'}
                  </div>
                )}

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0066FF] mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-black text-white font-['Montserrat'] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/5">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {language === 'es' ? 'Desde' : 'From'}
                    </span>
                    <span className="text-5xl font-black text-white font-['Montserrat']">
                      ${card.price}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-300 mb-8">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                      <span>{language === 'es' ? 'Servicio a domicilio en Tampa' : 'Mobile on-site service in Tampa'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                      <span>{language === 'es' ? 'Productos premium que cuidan el acabado' : 'Premium clear-coat safe products'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                      <span>{language === 'es' ? 'Técnicos dedicados y minuciosos' : 'Dedicated detailers with care'}</span>
                    </li>
                  </ul>
                </div>

                <button
                  id={`get-quote-${card.type}`}
                  onClick={() => onOpenBookingWithDetails(card.type, 'exterior-wash')}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    card.popular
                      ? 'bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/15'
                  }`}
                >
                  <span>{t.getQuoteBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Mandatory Official Disclaimer */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
            “{t.disclaimer}”
          </p>
        </div>

        {/* Quick Cost Estimator Interactive Tool */}
        <div className="bg-[#111218] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <Calculator className="w-6 h-6 text-[#0066FF]" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Montserrat']">
                {t.estimatorTitle}
              </h3>
              <p className="text-xs text-gray-400">
                {t.estimatorDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                {t.vehicleType}
              </label>
              <select
                value={estVehicle}
                onChange={(e) => setEstVehicle(e.target.value as VehicleType)}
                className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
              >
                <option value="sedan">Sedan (Desde ${config.prices.sedan})</option>
                <option value="suv">SUV (Desde ${config.prices.suv})</option>
                <option value="pickup">Pickup / Van (Desde ${config.prices.pickup})</option>
                <option value="other">{t.other} (Desde ${config.prices.suv + 15})</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                {t.serviceType}
              </label>
              <select
                value={estService}
                onChange={(e) => setEstService(e.target.value)}
                className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
              >
                <option value="exterior-wash">{language === 'es' ? 'Lavado Exterior' : 'Exterior Wash'}</option>
                <option value="interior-cleaning">{language === 'es' ? 'Limpieza Interior' : 'Interior Cleaning'}</option>
                <option value="interior-exterior">{language === 'es' ? 'Interior + Exterior' : 'Interior + Exterior'}</option>
                <option value="wax-protection">{language === 'es' ? 'Encerado / Protección' : 'Wax & Protection'}</option>
              </select>
            </div>
          </div>

          <label className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 cursor-pointer mb-6 hover:bg-white/[0.04] transition-colors">
            <input
              type="checkbox"
              checked={estSpecial}
              onChange={(e) => setEstSpecial(e.target.checked)}
              className="w-4 h-4 rounded border-gray-600 text-[#0066FF] focus:ring-[#0066FF]"
            />
            <span className="text-xs text-gray-300">
              {t.specialCare} <span className="text-[#0066FF] font-semibold">{t.specialCareNote}</span>
            </span>
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs text-gray-400 block font-medium">
                {t.estimatedTotal}
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white font-['Montserrat']">
                ${calculatedTotal} <span className="text-xs font-normal text-gray-400">USD</span>
              </span>
            </div>

            <button
              onClick={() => onOpenBookingWithDetails(estVehicle, estService)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.bookWithSelection}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
