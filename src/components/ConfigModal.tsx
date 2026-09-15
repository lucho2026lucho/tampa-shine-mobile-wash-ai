import React, { useState } from 'react';
import { BusinessConfig, Language } from '../types';
import { DEFAULT_BUSINESS_CONFIG, saveBusinessConfig } from '../config/businessConfig';
import { X, Save, RotateCcw, ShieldAlert, Check } from 'lucide-react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: BusinessConfig;
  onSave: (newConfig: BusinessConfig) => void;
  language: Language;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  language
}) => {
  const [formData, setFormData] = useState<BusinessConfig>(() => ({
    ...DEFAULT_BUSINESS_CONFIG,
    ...(config || {}),
    prices: {
      ...DEFAULT_BUSINESS_CONFIG.prices,
      ...(config?.prices || {})
    },
    hoursDisplay: {
      ...DEFAULT_BUSINESS_CONFIG.hoursDisplay,
      ...(config?.hoursDisplay || {})
    }
  }));
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveBusinessConfig(formData);
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ ...DEFAULT_BUSINESS_CONFIG });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full bg-[#111218] border border-white/20 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <h3 className="text-xl font-bold font-['Montserrat']">
              {language === 'es' ? 'Configuración de Tampa Shine' : 'Tampa Shine Business Settings'}
            </h3>
            <p className="text-xs text-gray-400">
              {language === 'es'
                ? 'Actualiza teléfonos, enlaces y precios base del negocio en tiempo real.'
                : 'Update phone numbers, links, and base prices in real time.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-2 text-sm font-bold animate-in fade-in">
            <Check className="w-5 h-5" />
            <span>
              {language === 'es'
                ? '¡Datos actualizados y guardados con éxito!'
                : 'Settings updated and saved successfully!'}
            </span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6 text-xs sm:text-sm">
          {/* Contact Fields */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-3">
              {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1">
                  {language === 'es' ? 'Teléfono Oficial:' : 'Official Phone:'}
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">
                  {language === 'es' ? 'Número WhatsApp (sólo dígitos con código de país):' : 'WhatsApp Number (digits with country code):'}
                </label>
                <input
                  type="text"
                  value={formData.whatsappPhone}
                  onChange={(e) => setFormData({ ...formData, whatsappPhone: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">Instagram (@handle):</label>
                <input
                  type="text"
                  value={formData.instagramHandle}
                  onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white"
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-3">
              {language === 'es' ? 'Perfiles Comerciales' : 'Business Profiles'}
            </h4>
            <div className="space-y-3">
              <div>
                <label className="block text-gray-400 mb-1">URL Google Business Profile:</label>
                <input
                  type="text"
                  value={formData.googleBusinessUrl}
                  onChange={(e) => setFormData({ ...formData, googleBusinessUrl: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">URL Yelp:</label>
                <input
                  type="text"
                  value={formData.yelpUrl}
                  onChange={(e) => setFormData({ ...formData, yelpUrl: e.target.value })}
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white text-xs"
                />
              </div>
            </div>
          </div>

          {/* Base Prices */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-3">
              {language === 'es' ? 'Precios Base por Tipo de Vehículo ($ USD)' : 'Base Prices by Vehicle ($ USD)'}
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-gray-400 mb-1">Sedan:</label>
                <input
                  type="number"
                  value={formData.prices.sedan}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      prices: { ...formData.prices, sedan: Number(e.target.value) }
                    })
                  }
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white font-bold"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">SUV:</label>
                <input
                  type="number"
                  value={formData.prices.suv}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      prices: { ...formData.prices, suv: Number(e.target.value) }
                    })
                  }
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white font-bold"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Pickup:</label>
                <input
                  type="number"
                  value={formData.prices.pickup}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      prices: { ...formData.prices, pickup: Number(e.target.value) }
                    })
                  }
                  className="w-full bg-[#090a0f] border border-white/15 rounded-xl px-3 py-2 text-white font-bold"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Restablecer Valores' : 'Reset Defaults'}</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold"
              >
                {language === 'es' ? 'Cancelar' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>{language === 'es' ? 'Guardar Cambios' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
