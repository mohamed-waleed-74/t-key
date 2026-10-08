import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import IdeaSection from './components/IdeaSection';
import ProductsEditorial from './components/ProductsEditorial';
import TapOrScanSection from './components/TapOrScanSection';
import HowItWorksSection from './components/HowItWorksSection';
import BusinessConnections from './components/BusinessConnections';
import BrandStatement from './components/BrandStatement';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import TapSimulatorModal from './components/TapSimulatorModal';

export default function App() {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('T-REVIEW');
  const [tapSimulatorOpen, setTapSimulatorOpen] = useState(false);

  const handleOpenProduct = (productName) => {
    setSelectedProduct(productName);
    setProductModalOpen(true);
  };

  const handleOpenInquiry = (context = 'T-KEY Order') => {
    setSelectedProduct(context.includes('MENU') ? 'T-MENU' : context.includes('SOCIAL') ? 'T-SOCIAL' : 'T-REVIEW');
    setProductModalOpen(true);
  };

  const handleOpenTapSimulator = () => {
    setTapSimulatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-gold selection:text-black">
      {/* Global Minimal Navigation */}
      <Navigation
        onOpenInquiry={handleOpenInquiry}
      />

      <main className="relative z-10">
        {/* Hero Section: Enormous Poster Typography + Acrylic Stand */}
        <HeroSection
          onOpenTapSimulator={handleOpenTapSimulator}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Section 02: THE IDEA ("ONE TAP. ENDLESS CONNECTIONS.") */}
        <IdeaSection />

        {/* Section 03: PRODUCTS (3 Asymmetric Editorial Sections: T-REVIEW, T-MENU, T-SOCIAL) */}
        <ProductsEditorial
          onSelectProduct={handleOpenProduct}
        />

        {/* Section 04: TAP OR SCAN (Enormous Typography + Minimal Gold Line Icons) */}
        <TapOrScanSection
          onOpenTapSimulator={handleOpenTapSimulator}
        />

        {/* Section 05: HOW IT WORKS (01 TAP, 02 CONNECT, 03 ENGAGE) */}
        <HowItWorksSection />

        {/* Section 06: BUSINESS CONNECTIONS (Asymmetric Visual Words: REVIEWS, MENU, SOCIAL) */}
        <BusinessConnections
          onSelectProduct={handleOpenProduct}
        />

        {/* Section 07: BRAND STATEMENT ("YOUR DIGITAL BUSINESS DESERVES A PHYSICAL KEY.") */}
        <BrandStatement />

        {/* Section 08: FINAL CTA ("READY TO TAP IN?") */}
        <FinalCTASection
          onOpenInquiry={handleOpenInquiry}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive Modals */}
      <ProductModal
        productType={selectedProduct}
        isOpen={productModalOpen}
        onClose={() => setProductModalOpen(false)}
      />

      <TapSimulatorModal
        isOpen={tapSimulatorOpen}
        onClose={() => setTapSimulatorOpen(false)}
      />
    </div>
  );
}
