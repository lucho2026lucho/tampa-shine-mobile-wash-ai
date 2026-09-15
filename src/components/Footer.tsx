import React, { useState } from 'react';
import { Language, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { Logo } from './Logo';
import { translations } from '../translations';
import { Instagram, MapPin, Phone, Mail, Settings, X, ShieldAlert, FileText } from 'lucide-react';

interface FooterProps {
  language: Language;
  config?: BusinessConfig;
  onOpenBooking: () => void;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  config,
  onOpenBooking,
  onOpenConfig
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();
  const t = translations[language].footer;
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const instagramUrl = activeConfig?.instagramUrl || DEFAULT_BUSINESS_CONFIG.instagramUrl;
  const instagramHandle = activeConfig?.instagramHandle || DEFAULT_BUSINESS_CONFIG.instagramHandle;

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#06070a] border-t border-white/10 pt-16 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={52} />
              <div>
                <span className="text-lg font-black text-white font-['Montserrat'] tracking-wide block leading-tight">
                  TAMPA SHINE
                </span>
                <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                  Mobile Wash
                </span>
              </div>
            </div>

            <p className="text-sm font-bold text-white tracking-widest uppercase font-['Montserrat'] text-[#0066FF]">
              “{t.slogan}”
            </p>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              {t.desc}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#0066FF]" />
              <span>Tampa, Florida, EE. UU.</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Montserrat']">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('#inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'es' ? 'Inicio' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#servicios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'es' ? 'Servicios' : 'Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#precios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'es' ? 'Precios' : 'Pricing'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer text-[#0066FF] font-semibold"
                >
                  {language === 'es' ? 'Reservar Ahora' : 'Book Now'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#flotas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'es' ? 'Servicio de Flotas' : 'Fleet Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contacto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'es' ? 'Contacto' : 'Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal and Social Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Montserrat']">
              {t.legalTitle}
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => setLegalModal('privacy')}
                className="block hover:text-white transition-colors underline cursor-pointer"
              >
                {t.privacy}
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="block hover:text-white transition-colors underline cursor-pointer"
              >
                {t.terms}
              </button>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-gray-500 block mb-2 font-medium">
                {language === 'es' ? 'Síguenos en redes:' : 'Follow our work:'}
              </span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors text-xs"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>{instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and Owner Admin trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>
            © {currentYear} TAMPA SHINE MOBILE WASH. {t.rights}
          </p>

          <div className="flex items-center gap-4">
            <span>Tampa, FL • Mobile Car Wash & Detailing</span>
            {/* Quick config button for owner */}
            <button
              onClick={onOpenConfig}
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors p-1"
              title="Panel de Configuración del Negocio"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{t.ownerEdit}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-[#111218] border border-white/20 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-gray-300 text-xs sm:text-sm leading-relaxed shadow-2xl">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'privacy' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white text-lg font-bold font-['Montserrat']">
                  <ShieldAlert className="w-5 h-5 text-[#0066FF]" />
                  <span>{t.privacy} - Tampa Shine Mobile Wash</span>
                </div>
                <p>
                  En Tampa Shine Mobile Wash respetamos plenamente la privacidad de nuestros clientes. La información proporcionada mediante nuestros formularios de reserva y contacto (incluyendo nombre, número de teléfono, correo electrónico, datos del vehículo y dirección del servicio en Tampa, FL) se utiliza exclusivamente para coordinar, prestar y confirmar los servicios de detallado y lavado automotriz contratados.
                </p>
                <p>
                  No vendemos, transferimos ni compartimos información de identificación personal con empresas de publicidad de terceros. Tus datos se manejan con estricta confidencialidad para fines de servicio al cliente y recordatorios de citas.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white text-lg font-bold font-['Montserrat']">
                  <FileText className="w-5 h-5 text-[#0066FF]" />
                  <span>{t.terms} - Tampa Shine Mobile Wash</span>
                </div>
                <p>
                  1. <strong>Servicio Móvil:</strong> Tampa Shine se desplaza hasta la ubicación acordada en Tampa, Florida. El cliente debe asegurarse de contar con permiso para realizar el servicio en el área designada (ej. driveway, estacionamiento autorizado).
                </p>
                <p>
                  2. <strong>Condición del Vehículo:</strong> Los precios cotizados son tarifas base. Vehículos con acumulación excesiva de lodo, pelo de mascotas o manchas profundas pueden requerir tiempo adicional y ajuste de tarifa previamente acordado con el cliente antes de iniciar.
                </p>
                <p>
                  3. <strong>Condiciones Climáticas:</strong> En caso de lluvia intensa o tormenta repentina que impida operar de forma segura, el servicio se reprogramará a conveniencia del cliente sin cargo adicional.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
