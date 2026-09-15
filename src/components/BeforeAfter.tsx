import React, { useState, useRef } from 'react';
import { Language, BeforeAfterItem, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { BEFORE_AFTER_ITEMS } from '../data/servicesData';
import { translations } from '../translations';
import { Instagram, Maximize2, X, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  language: Language;
  config?: BusinessConfig;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ language, config }) => {
  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const instagramUrl = activeConfig?.instagramUrl || DEFAULT_BUSINESS_CONFIG.instagramUrl;
  const instagramHandle = activeConfig?.instagramHandle || DEFAULT_BUSINESS_CONFIG.instagramHandle;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [modalItem, setModalItem] = useState<BeforeAfterItem | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const t = translations[language].beforeAfter;

  const filteredItems =
    activeCategory === 'all'
      ? BEFORE_AFTER_ITEMS
      : BEFORE_AFTER_ITEMS.filter((item) => item.category === activeCategory);

  const currentItem = filteredItems[activeItemIndex] || filteredItems[0] || BEFORE_AFTER_ITEMS[0];

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handlePointerMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'exterior', label: t.categories.exterior },
    { id: 'interior', label: t.categories.interior },
    { id: 'paint', label: t.categories.paint },
    { id: 'wheels', label: t.categories.wheels },
    { id: 'upholstery', label: t.categories.upholstery },
    { id: 'full', label: t.categories.full }
  ];

  return (
    <section id="antes-despues" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block font-mono">
            {language === 'es' ? 'RESULTADOS REALES' : 'REAL RESULTS'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveItemIndex(0);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0066FF] text-white shadow-md'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Slider Card */}
        <div className="bg-[#111218] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0066FF] block">
                {t.categories[currentItem.category] || currentItem.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Montserrat']">
                {currentItem.title[language]}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 hidden sm:inline">
                {t.dragHint}
              </span>
              <button
                onClick={() => setModalItem(currentItem)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1 text-xs"
                title="Ver en pantalla completa"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'es' ? 'Ampliar' : 'Enlarge'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Split Screen Box */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[340px] sm:h-[460px] md:h-[520px] rounded-xl overflow-hidden select-none cursor-ew-resize bg-black"
          >
            {/* AFTER Image (Full background) */}
            <img
              src={currentItem.afterImage}
              alt="Tampa Shine Detailing After"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            {/* "DESPUÉS / AFTER" Label */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-widest uppercase shadow-md pointer-events-none">
              {language === 'es' ? 'DESPUÉS' : 'AFTER'}
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.beforeImage}
                alt="Tampa Shine Detailing Before"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none'
                }}
              />
              {/* "ANTES / BEFORE" Label */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-widest uppercase shadow-md">
                {language === 'es' ? 'ANTES' : 'BEFORE'}
              </div>
            </div>

            {/* Divider Line with Thumb */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0066FF] text-white border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto">
                <SlidersHorizontal className="w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
            {currentItem.description[language]}
          </p>

          {/* Quick thumbnails to switch */}
          {filteredItems.length > 1 && (
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 overflow-x-auto pb-2">
              <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">
                {language === 'es' ? 'Más ejemplos:' : 'More examples:'}
              </span>
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItemIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                    idx === activeItemIndex
                      ? 'border-[#0066FF] scale-105 ring-2 ring-[#0066FF]/40'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.afterImage}
                    alt={item.title[language]}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View More Works + Instagram Access */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            id="instagram-works-btn"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E1306C]/20 to-[#405DE6]/20 hover:from-[#E1306C]/30 hover:to-[#405DE6]/30 border border-[#E1306C]/40 text-white font-semibold text-sm transition-all"
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>{t.viewInstagram} ({instagramHandle})</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Large Format Fullscreen Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-[#111218] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6">
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-30"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-2">
              {modalItem.title[language]}
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              {modalItem.description[language]}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3]">
                <img
                  src={modalItem.beforeImage}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 text-white text-xs font-black tracking-wider uppercase border border-white/20">
                  {language === 'es' ? 'ANTES' : 'BEFORE'}
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3]">
                <img
                  src={modalItem.afterImage}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded bg-[#0066FF] text-white text-xs font-black tracking-wider uppercase shadow-md">
                  {language === 'es' ? 'DESPUÉS' : 'AFTER'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
