import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { CalendarCheck, Car, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  language: Language;
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ language, onOpenBooking }) => {
  const t = translations[language].howItWorks;

  const steps = [
    {
      number: t.step1Title,
      name: t.step1Name,
      desc: t.step1Desc,
      icon: CalendarCheck,
      color: '#0066FF'
    },
    {
      number: t.step2Title,
      name: t.step2Name,
      desc: t.step2Desc,
      icon: Car,
      color: '#ffffff'
    },
    {
      number: t.step3Title,
      name: t.step3Name,
      desc: t.step3Desc,
      icon: Sparkles,
      color: '#0066FF'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0e14] border-t border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'COMODIDAD TOTAL' : 'TOTAL CONVENIENCE'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight leading-tight mb-4">
            {t.title} <br className="hidden sm:inline" />
            <span className="text-[#0066FF]">{t.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#13151d] border border-white/10 hover:border-[#0066FF]/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  {/* Top Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-white/5 text-[#0066FF] border border-[#0066FF]/20">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#0066FF] transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#0066FF] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-3">
                    {step.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-gray-500 group-hover:text-[#0066FF] transition-colors">
                  <span>{language === 'es' ? 'Fácil y sin esperas' : 'Fast & effortless'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action beneath steps */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 hover:border-white/30 transition-all cursor-pointer"
          >
            <span>{language === 'es' ? 'Comenzar mi reserva ahora' : 'Start my booking now'}</span>
            <ArrowRight className="w-4 h-4 text-[#0066FF]" />
          </button>
        </div>
      </div>
    </section>
  );
};
