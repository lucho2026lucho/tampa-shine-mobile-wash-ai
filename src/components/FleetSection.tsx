import React, { useState } from 'react';
import { Language, FleetInquiryData, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { translations } from '../translations';
import { Briefcase, Building2, CheckCircle, Truck, Send, MessageSquare, ShieldCheck } from 'lucide-react';

interface FleetSectionProps {
  language: Language;
  config?: BusinessConfig;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ language, config }) => {
  const t = translations[language].fleets;
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const whatsappPhone = activeConfig?.whatsappPhone || DEFAULT_BUSINESS_CONFIG.whatsappPhone;

  const [fleetData, setFleetData] = useState<FleetInquiryData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    vehicleCount: '5-10',
    vehicleTypes: '',
    frequency: 'biweekly',
    comments: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fleetData.companyName || !fleetData.contactName || !fleetData.phone) return;
    setSubmitted(true);
  };

  const getWhatsAppFleetText = () => {
    const freqLabels: Record<string, string> = {
      once: t.frequencyOnce,
      weekly: t.frequencyWeekly,
      biweekly: t.frequencyBiweekly,
      monthly: t.frequencyMonthly,
      other: t.frequencyOther
    };

    const text =
      language === 'es'
        ? `*Cotización para Flota Comercial - Tampa Shine*\n\n` +
          `🏢 *Empresa:* ${fleetData.companyName}\n` +
          `👤 *Contacto:* ${fleetData.contactName}\n` +
          `📞 *Teléfono:* ${fleetData.phone}\n` +
          `📧 *Email:* ${fleetData.email || 'N/A'}\n` +
          `🚐 *Cantidad de Vehículos:* ${fleetData.vehicleCount}\n` +
          `🚗 *Tipos:* ${fleetData.vehicleTypes || 'Varios'}\n` +
          `🔄 *Frecuencia:* ${freqLabels[fleetData.frequency] || fleetData.frequency}\n` +
          `${fleetData.comments ? `📝 *Detalles:* ${fleetData.comments}\n` : ''}\n` +
          `_Solicitud empresarial desde tampashine.com_`
        : `*Commercial Fleet Quote - Tampa Shine*\n\n` +
          `🏢 *Company:* ${fleetData.companyName}\n` +
          `👤 *Contact:* ${fleetData.contactName}\n` +
          `📞 *Phone:* ${fleetData.phone}\n` +
          `📧 *Email:* ${fleetData.email || 'N/A'}\n` +
          `🚐 *Vehicle Count:* ${fleetData.vehicleCount}\n` +
          `🚗 *Types:* ${fleetData.vehicleTypes || 'Various'}\n` +
          `🔄 *Frequency:* ${freqLabels[fleetData.frequency] || fleetData.frequency}\n` +
          `${fleetData.comments ? `📝 *Notes:* ${fleetData.comments}\n` : ''}\n` +
          `_Fleet inquiry from tampashine.com_`;

    return encodeURIComponent(text);
  };

  const clients = [
    t.client1,
    t.client2,
    t.client3,
    t.client4,
    t.client5,
    t.client6,
    t.client7,
    t.client8
  ];

  return (
    <section
      id="flotas"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0e14] via-[#10121a] to-[#090a0f] border-t border-b border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#0066FF] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'SOLUCIONES CORPORATIVAS' : 'CORPORATE SOLUTIONS'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-400">
              {t.titleAccent}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Who it's for & Fleet perks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141620] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#0066FF]" />
                <span>{t.clientsTitle}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {clients.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 py-1.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fleet value callout */}
            <div className="p-6 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-gray-300 text-xs sm:text-sm space-y-2">
              <div className="font-bold text-white text-base">
                {language === 'es' ? 'Flexibilidad para tu operación' : 'Operational Flexibility'}
              </div>
              <p className="leading-relaxed">
                {language === 'es'
                  ? 'Nos adaptamos a los horarios de tu personal: primeras horas de la mañana, rotaciones de turno o fines de semana para que tu flota nunca se detenga.'
                  : 'We tailor scheduling around your staff: early mornings, shift turnovers, or weekends so your fleet keeps moving.'}
              </p>
            </div>
          </div>

          {/* Right Column: Fleet Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141620] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="mb-6 border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white font-['Montserrat']">
                  {t.ctaTitle}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {language === 'es'
                    ? 'Cuéntanos sobre tus vehículos y diseñaremos un plan específico.'
                    : 'Tell us about your vehicles and we will formulate a tailored plan.'}
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Montserrat']">
                    {language === 'es' ? 'Solicitud de Flota Enviada' : 'Fleet Inquiry Submitted'}
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    “{t.confirmationMessage}”
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${whatsappPhone}?text=${getWhatsAppFleetText()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{language === 'es' ? 'Enviar datos de flota a WhatsApp' : 'Send fleet details to WhatsApp'}</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold border border-white/10"
                    >
                      {language === 'es' ? 'Nueva consulta' : 'New inquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="fleet-quote-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        {t.companyNameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={fleetData.companyName}
                        onChange={(e) => setFleetData({ ...fleetData, companyName: e.target.value })}
                        className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        {t.contactNameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={fleetData.contactName}
                        onChange={(e) => setFleetData({ ...fleetData, contactName: e.target.value })}
                        className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        {t.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={fleetData.phone}
                        onChange={(e) => setFleetData({ ...fleetData, phone: e.target.value })}
                        className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={fleetData.email}
                        onChange={(e) => setFleetData({ ...fleetData, email: e.target.value })}
                        className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        {t.vehicleCountLabel}
                      </label>
                      <select
                        value={fleetData.vehicleCount}
                        onChange={(e) => setFleetData({ ...fleetData, vehicleCount: e.target.value })}
                        className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
                      >
                        <option value="2-4">2 a 4 vehículos</option>
                        <option value="5-10">5 a 10 vehículos</option>
                        <option value="11-25">11 a 25 vehículos</option>
                        <option value="25+">Más de 25 vehículos</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        {t.frequencyLabel}
                      </label>
                      <select
                        value={fleetData.frequency}
                        onChange={(e) => setFleetData({ ...fleetData, frequency: e.target.value as any })}
                        className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#0066FF]"
                      >
                        <option value="once">{t.frequencyOnce}</option>
                        <option value="weekly">{t.frequencyWeekly}</option>
                        <option value="biweekly">{t.frequencyBiweekly}</option>
                        <option value="monthly">{t.frequencyMonthly}</option>
                        <option value="other">{t.frequencyOther}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                      {t.vehicleTypesLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 4 Ford Transit + 2 Ford F-150"
                      value={fleetData.vehicleTypes}
                      onChange={(e) => setFleetData({ ...fleetData, vehicleTypes: e.target.value })}
                      className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                      {t.commentsLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={fleetData.comments}
                      onChange={(e) => setFleetData({ ...fleetData, comments: e.target.value })}
                      className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-fleet-btn"
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
