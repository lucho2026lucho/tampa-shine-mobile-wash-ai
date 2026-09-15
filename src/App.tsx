import React, { useState, useEffect } from 'react';
import { Language, VehicleType, BusinessConfig } from './types';
import { getStoredBusinessConfig, DEFAULT_BUSINESS_CONFIG } from './config/businessConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { BeforeAfter } from './components/BeforeAfter';
import { WhyUs } from './components/WhyUs';
import { BookingForm } from './components/BookingForm';
import { FleetSection } from './components/FleetSection';
import { ServiceArea } from './components/ServiceArea';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { PaymentMethods } from './components/PaymentMethods';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConfigModal } from './components/ConfigModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [config, setConfig] = useState<BusinessConfig>(() => getStoredBusinessConfig() || DEFAULT_BUSINESS_CONFIG);
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  
  // States for pre-selected booking data
  const [bookingServiceId, setBookingServiceId] = useState<string>('exterior-wash');
  const [bookingVehicleType, setBookingVehicleType] = useState<VehicleType>('sedan');

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleOpenBooking = () => {
    const bookingSection = document.querySelector('#reservas');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setBookingServiceId(serviceId);
    handleOpenBooking();
  };

  const handleOpenBookingWithDetails = (vehicleType: VehicleType, serviceId: string) => {
    setBookingVehicleType(vehicleType);
    setBookingServiceId(serviceId);
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 font-sans selection:bg-[#0066FF] selection:text-white antialiased">
      {/* 1. Navigation Header */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        setLanguage={setLanguage}
        config={config}
        onOpenBooking={handleOpenBooking}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      <main className="pb-14 md:pb-0">
        {/* 2. Hero Section (Title, Slogan, Official Logo, Primary CTAs) */}
        <Hero
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. Nosotros vamos hasta ti (3-Step Process) */}
        <HowItWorks
          language={language}
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. Services Section (Core Catalog & Upcoming Treatments) */}
        <Services
          language={language}
          onSelectService={handleSelectService}
        />

        {/* 5. Pricing Section (Sedan, SUV, Pickup + Interactive Estimator) */}
        <Pricing
          language={language}
          config={config}
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
        />

        {/* 6. Before & After (Interactive Comparison Slider & Categories) */}
        <BeforeAfter
          language={language}
          config={config}
        />

        {/* 7. Por qué Tampa Shine (5 Key Value Pillars) */}
        <WhyUs language={language} />

        {/* 8. Booking Form (Complete Scheduling with WhatsApp integration) */}
        <BookingForm
          language={language}
          config={config}
          selectedServiceId={bookingServiceId}
          selectedVehicleType={bookingVehicleType}
        />

        {/* 9. Fleet Commercial Solutions Section */}
        <FleetSection
          language={language}
          config={config}
        />

        {/* 10. Service Area Coverage & Map Visualization */}
        <ServiceArea
          language={language}
          config={config}
        />

        {/* 11. Testimonials & Google Business Transparency */}
        <Testimonials
          language={language}
          config={config}
        />

        {/* 12. FAQ Section (11 Comprehensive Questions) */}
        <FAQ language={language} />

        {/* 13. Payment Methods (Zelle, Cash App, Efectivo, Square) */}
        <PaymentMethods language={language} />

        {/* 14. Contact Section (Direct Call, WhatsApp, Schedule) */}
        <ContactSection
          language={language}
          config={config}
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* 15. Footer (Legal, Links, Socials, Owner Settings) */}
      <Footer
        language={language}
        config={config}
        onOpenBooking={handleOpenBooking}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* 16. Mobile Sticky Action Bar */}
      <MobileStickyBar
        language={language}
        config={config}
        onOpenBooking={handleOpenBooking}
      />

      {/* 17. Business Configuration Modal */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={config}
        onSave={setConfig}
        language={language}
      />
    </div>
  );
}
