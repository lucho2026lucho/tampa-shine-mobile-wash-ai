import React, { useState } from 'react';
import { Language, VehicleType, BookingFormData, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { INITIAL_SERVICES } from '../data/servicesData';
import { translations } from '../translations';
import { Calendar, CheckCircle2, MessageSquare, AlertCircle, Sparkles, Send } from 'lucide-react';

interface BookingFormProps {
  language: Language;
  config?: BusinessConfig;
  selectedServiceId?: string;
  selectedVehicleType?: VehicleType;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  language,
  config,
  selectedServiceId = 'exterior-wash',
  selectedVehicleType = 'sedan'
}) => {
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const whatsappPhone = activeConfig?.whatsappPhone || DEFAULT_BUSINESS_CONFIG.whatsappPhone;

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: selectedVehicleType,
    vehicleMake: '',
    vehicleModel: '',
    serviceId: selectedServiceId,
    preferredDate: '',
    preferredTime: 'morning',
    serviceAddress: '',
    specialAttention: false,
    comments: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const t = translations[language].booking;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.serviceAddress.trim()) {
      setErrorMsg(
        language === 'es'
          ? 'Por favor completa los campos obligatorios (Nombre, Teléfono y Dirección).'
          : 'Please fill in required fields (Name, Phone, and Address).'
      );
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const getServiceName = (id: string) => {
    const s = INITIAL_SERVICES.find((srv) => srv.id === id);
    return s ? s.name[language] : id;
  };

  const generateWhatsAppMessage = () => {
    const timeLabels: Record<string, string> = {
      morning: language === 'es' ? 'Mañana (8:00 AM - 12:00 PM)' : 'Morning (8:00 AM - 12:00 PM)',
      afternoon: language === 'es' ? 'Tarde (12:00 PM - 4:00 PM)' : 'Afternoon (12:00 PM - 4:00 PM)',
      late: language === 'es' ? 'Final de tarde (4:00 PM - 6:30 PM)' : 'Late Afternoon (4:00 PM - 6:30 PM)'
    };

    const text =
      language === 'es'
        ? `*Solicitud de Servicio - Tampa Shine Mobile Wash*\n\n` +
          `👤 *Cliente:* ${formData.fullName}\n` +
          `📞 *Teléfono:* ${formData.phone}\n` +
          `🚗 *Vehículo:* ${formData.vehicleType.toUpperCase()} ${formData.vehicleMake} ${formData.vehicleModel}\n` +
          `✨ *Servicio:* ${getServiceName(formData.serviceId)}\n` +
          `📅 *Fecha:* ${formData.preferredDate || 'Por coordinar'}\n` +
          `⏰ *Horario:* ${timeLabels[formData.preferredTime] || formData.preferredTime}\n` +
          `📍 *Dirección:* ${formData.serviceAddress}\n` +
          `⚠️ *Atención Especial:* ${formData.specialAttention ? 'Sí (detalles adicionales)' : 'No'}\n` +
          `${formData.comments ? `📝 *Comentarios:* ${formData.comments}\n` : ''}\n` +
          `_Enviado desde tampashine.com_`
        : `*Service Request - Tampa Shine Mobile Wash*\n\n` +
          `👤 *Client:* ${formData.fullName}\n` +
          `📞 *Phone:* ${formData.phone}\n` +
          `🚗 *Vehicle:* ${formData.vehicleType.toUpperCase()} ${formData.vehicleMake} ${formData.vehicleModel}\n` +
          `✨ *Service:* ${getServiceName(formData.serviceId)}\n` +
          `📅 *Date:* ${formData.preferredDate || 'To coordinate'}\n` +
          `⏰ *Time window:* ${timeLabels[formData.preferredTime] || formData.preferredTime}\n` +
          `📍 *Address:* ${formData.serviceAddress}\n` +
          `⚠️ *Special Attention:* ${formData.specialAttention ? 'Yes' : 'No'}\n` +
          `${formData.comments ? `📝 *Notes:* ${formData.comments}\n` : ''}\n` +
          `_Sent from tampashine.com_`;

    return encodeURIComponent(text);
  };

  return (
    <section id="reservas" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'AGENDA EN LÍNEA' : 'ONLINE SCHEDULING'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Success Confirmation State */}
        {submitted ? (
          <div className="bg-[#111218] border border-[#0066FF]/40 rounded-3xl p-8 sm:p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#0066FF] mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat'] mb-4">
              {language === 'es' ? '¡Solicitud Recibida!' : 'Request Received!'}
            </h3>

            {/* Mandatory requested text: */}
            <div className="p-6 rounded-2xl bg-[#090a0f] border border-white/10 max-w-xl mx-auto mb-8">
              <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
                “{t.confirmationMessage}”
              </p>
            </div>

            {/* Summary details */}
            <div className="text-left bg-white/[0.02] border border-white/5 rounded-xl p-4 sm:p-6 max-w-xl mx-auto mb-8 text-xs sm:text-sm space-y-2 text-gray-300">
              <div><strong className="text-white">{language === 'es' ? 'Cliente:' : 'Client:'}</strong> {formData.fullName}</div>
              <div><strong className="text-white">{language === 'es' ? 'Teléfono:' : 'Phone:'}</strong> {formData.phone}</div>
              <div><strong className="text-white">{language === 'es' ? 'Vehículo:' : 'Vehicle:'}</strong> {formData.vehicleType.toUpperCase()} {formData.vehicleMake} {formData.vehicleModel}</div>
              <div><strong className="text-white">{language === 'es' ? 'Servicio:' : 'Service:'}</strong> {getServiceName(formData.serviceId)}</div>
              <div><strong className="text-white">{language === 'es' ? 'Dirección:' : 'Address:'}</strong> {formData.serviceAddress}</div>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="booking-whatsapp-confirm"
                href={`https://wa.me/${whatsappPhone}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.sendWhatsAppDirect}</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-semibold border border-white/10"
              >
                {language === 'es' ? 'Hacer otra reserva' : 'Make another booking'}
              </button>
            </div>
          </div>
        ) : (
          /* Main Booking Form */
          <form
            onSubmit={handleSubmit}
            id="service-booking-form"
            className="bg-[#111218] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
          >
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Row 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.nameLabel} <span className="text-[#0066FF]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.phoneLabel} <span className="text-[#0066FF]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email (optional) & Vehicle Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.vehicleTypeLabel} <span className="text-[#0066FF]">*</span>
                </label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value as VehicleType })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors"
                >
                  <option value="sedan">Sedan / Coupe</option>
                  <option value="suv">SUV / Crossover</option>
                  <option value="pickup">Pickup / Truck</option>
                  <option value="other">{language === 'es' ? 'Otro (Van, Minivan, Comercial)' : 'Other (Van, Commercial)'}</option>
                </select>
              </div>
            </div>

            {/* Row 3: Vehicle Make & Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.vehicleMakeLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.vehicleMakePlaceholder}
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.vehicleModelLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.vehicleModelPlaceholder}
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>
            </div>

            {/* Row 4: Service Desired */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                {t.serviceLabel} <span className="text-[#0066FF]">*</span>
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors"
              >
                {INITIAL_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.name[language]} {srv.startingPrice > 0 ? `(Desde $${srv.startingPrice})` : `(${language === 'es' ? 'Cotización' : 'Quote'})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 5: Date and Time window */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.dateLabel}
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {t.timeLabel}
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-colors"
                >
                  <option value="morning">{t.timeOptionMorning}</option>
                  <option value="afternoon">{t.timeOptionAfternoon}</option>
                  <option value="late">{t.timeOptionLate}</option>
                </select>
              </div>
            </div>

            {/* Row 6: Address where service will be performed */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                {t.addressLabel} <span className="text-[#0066FF]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder={t.addressPlaceholder}
                value={formData.serviceAddress}
                onChange={(e) => setFormData({ ...formData, serviceAddress: e.target.value })}
                className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
              />
            </div>

            {/* Special Attention Checkbox */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.specialAttention}
                  onChange={(e) => setFormData({ ...formData, specialAttention: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-600 text-[#0066FF] focus:ring-[#0066FF]"
                />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">
                  {t.specialAttentionCheckbox}
                </span>
              </label>
            </div>

            {/* Comments / instructions */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                {t.commentsLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.commentsPlaceholder}
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors resize-none"
              />
            </div>

            {/* Calendar notice required */}
            <p className="text-xs text-gray-400 italic">
              ℹ️ {t.noticeCalendar}
            </p>

            {/* Submit Button */}
            <button
              id="submit-booking-btn"
              type="submit"
              className="w-full py-4 px-6 rounded-xl text-base font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_40px_rgba(0,102,255,0.6)] transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>{t.submitBtn}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
