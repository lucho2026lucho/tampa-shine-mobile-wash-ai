import React, { useState } from 'react';
import { Language } from '../types';
import { FAQ_ITEMS, translations } from '../translations';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  language: Language;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const t = translations[language].faq;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'RESPUESTAS CLARAS' : 'CLEAR ANSWERS'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`bg-[#111218] border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-[#0066FF]/40 shadow-lg shadow-blue-500/5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-['Montserrat']">
                    {item.question[language]}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0066FF] text-white border-[#0066FF]' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    <p>{item.answer[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
