import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language, BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessConfig';
import { translations } from '../translations';
import { Phone, Calendar, Menu, X, Globe, MessageCircle, Settings } from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage?: (lang: Language) => void;
  onLanguageChange?: (lang: Language) => void;
  config?: BusinessConfig;
  onOpenBooking: () => void;
  onOpenConfig?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onLanguageChange,
  config,
  onOpenBooking,
  onOpenConfig
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const activeConfig = config || DEFAULT_BUSINESS_CONFIG;
  const phone = activeConfig?.phone || DEFAULT_BUSINESS_CONFIG.phone;
  const whatsappPhone = activeConfig?.whatsappPhone || DEFAULT_BUSINESS_CONFIG.whatsappPhone;

  const changeLang = (newLang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(newLang);
    } else if (setLanguage) {
      setLanguage(newLang);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', href: '#inicio', label: t.home },
    { id: 'servicios', href: '#servicios', label: t.services },
    { id: 'precios', href: '#precios', label: t.pricing },
    { id: 'antes-despues', href: '#antes-despues', label: t.beforeAfter },
    { id: 'flotas', href: '#flotas', label: t.fleets },
    { id: 'nosotros', href: '#nosotros', label: t.about },
    { id: 'preguntas', href: '#preguntas', label: t.faq },
    { id: 'contacto', href: '#contacto', label: t.contact }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-1.5 sm:py-2'
          : 'bg-[#090a0f]/90 backdrop-blur-sm sm:bg-gradient-to-b sm:from-[#090a0f]/95 sm:to-transparent border-b border-white/5 sm:border-transparent py-2 sm:py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2 group transition-transform active:scale-95"
          id="nav-brand-link"
        >
          <Logo size={36} showText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0066FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-xs font-semibold">
            <button
              id="lang-btn-es"
              onClick={() => changeLang('es')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'es'
                  ? 'bg-[#0066FF] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
            <button
              id="lang-btn-en"
              onClick={() => changeLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'en'
                  ? 'bg-[#0066FF] text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Quick Call Button */}
          <a
            id="nav-quick-call"
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
            <span className="hidden lg:inline">{phone}</span>
            <span className="lg:hidden">{t.call}</span>
          </a>

          {/* Book Now Main Button */}
          <button
            id="nav-book-now-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_25px_rgba(0,102,255,0.6)] cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.bookNow}</span>
          </button>

          {onOpenConfig && (
            <button
              onClick={onOpenConfig}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors hidden xl:flex items-center"
              title="Configuración de negocio"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile menu button and language switch */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={() => changeLang(language === 'es' ? 'en' : 'es')}
            className="h-8 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-gray-200 flex items-center gap-1 active:scale-95 transition-all"
            title="Cambiar idioma / Change language"
          >
            <Globe className="w-3 h-3 text-[#0066FF]" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 flex items-center justify-center active:scale-95 transition-all focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden fixed inset-x-0 top-[50px] sm:top-[56px] bg-[#090a0f]/98 border-b border-white/15 p-5 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-4 duration-200 flex flex-col gap-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-gray-200 hover:text-[#0066FF] hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Direct Mobile CTAs in Menu */}
          <div className="flex flex-col gap-2.5 pt-2">
            <button
              id="mobile-menu-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-lg shadow-blue-500/30"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookNow}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-menu-call-btn"
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-gray-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>{t.call}</span>
              </a>

              <a
                id="mobile-menu-whatsapp-btn"
                href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                  language === 'es'
                    ? 'Hola Tampa Shine, estoy interesado en un servicio para mi vehículo.'
                    : 'Hello Tampa Shine, I am interested in a mobile service for my vehicle.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {onOpenConfig && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfig();
                }}
                className="mt-2 text-xs text-gray-400 hover:text-white flex items-center justify-center gap-2 py-2 border border-dashed border-white/15 rounded-lg"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Configuración del Negocio' : 'Business Settings'}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
