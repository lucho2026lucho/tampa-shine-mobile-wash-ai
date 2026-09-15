import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { MapPin, Clock, Wrench, Droplets, Briefcase } from 'lucide-react';

interface WhyUsProps {
  language: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ language }) => {
  const t = translations[language].whyUs;

  const points = [
    {
      icon: MapPin,
      title: t.point1Title,
      desc: t.point1Desc
    },
    {
      icon: Clock,
      title: t.point2Title,
      desc: t.point2Desc
    },
    {
      icon: Wrench,
      title: t.point3Title,
      desc: t.point3Desc
    },
    {
      icon: Droplets,
      title: t.point4Title,
      desc: t.point4Desc
    },
    {
      icon: Briefcase,
      title: t.point5Title,
      desc: t.point5Desc
    }
  ];

  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0e14] border-t border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'NUESTRA PROMESA' : 'OUR COMMITMENT'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            const isWide = index === 4; // 5th item spans nicely or centers
            return (
              <div
                key={index}
                className={`bg-[#13151d] border border-white/10 rounded-2xl p-8 hover:border-[#0066FF]/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] mb-6 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Montserrat'] mb-3 tracking-wide">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
