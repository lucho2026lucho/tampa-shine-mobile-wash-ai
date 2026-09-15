import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { DollarSign, CreditCard, Smartphone, Banknote } from 'lucide-react';

interface PaymentMethodsProps {
  language: Language;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ language }) => {
  const t = translations[language].payments;

  const methods = [
    {
      name: 'Zelle',
      tag: 'Transferencia Rápida',
      color: '#7414CA',
      icon: Smartphone,
      desc: language === 'es' ? 'Transferencia bancaria directa instantánea sin comisiones.' : 'Instant bank-to-bank transfer with zero fees.'
    },
    {
      name: 'Cash App',
      tag: 'Pago Móvil',
      color: '#00D632',
      icon: DollarSign,
      desc: language === 'es' ? 'Pago simple y seguro desde tu aplicación Cash App.' : 'Simple and secure payment directly through Cash App.'
    },
    {
      name: 'Efectivo',
      nameEn: 'Cash',
      tag: 'En Mano',
      color: '#0066FF',
      icon: Banknote,
      desc: language === 'es' ? 'Pago en efectivo directo al técnico una vez inspeccionado el auto.' : 'Direct cash payment to our technician after vehicle inspection.'
    },
    {
      name: 'Square',
      tag: 'Tarjeta Crédito / Débito',
      color: '#ffffff',
      icon: CreditCard,
      desc: language === 'es' ? 'Aceptamos tarjetas de crédito o débito en el punto móvil con chip/tap.' : 'Credit and debit cards accepted on-site via secure chip/tap reader.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d0e14] border-t border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-1.5 block font-mono">
            {language === 'es' ? 'PAGOS FÁCILES Y SEGUROS' : 'EASY & SECURE PAYMENTS'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat'] tracking-tight mb-2">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {methods.map((m, idx) => {
            const Icon = m.icon;
            const displayName = language === 'en' && m.nameEn ? m.nameEn : m.name;
            return (
              <div
                key={idx}
                className="bg-[#13151d] border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center justify-between shadow-md hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-3">
                  <Icon className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white font-['Montserrat'] mb-1">
                    {displayName}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-snug">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
