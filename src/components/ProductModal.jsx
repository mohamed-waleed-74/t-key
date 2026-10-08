import React, { useState } from 'react';
import { X, Check, ShieldCheck, Radio, Sparkles, ArrowRight, Layers } from 'lucide-react';
import reviewImg from '../assets/treview-stand.jpg';
import menuImg from '../assets/tmenu-stand.jpg';
import socialImg from '../assets/tsocial-stand.jpg';

export default function ProductModal({ productType, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    destinationUrl: '',
    quantity: '5 Units',
  });

  if (!isOpen) return null;

  const productDetails = {
    'T-REVIEW': {
      title: 'T-REVIEW',
      subtitle: 'Google Reviews Contactless Stand',
      image: reviewImg,
      badge: '5-STAR ACCELERATOR',
      dimensions: '140mm × 100mm × 12mm',
      weight: '340 grams',
      specs: [
        'Direct link to your verified Google Maps Review page',
        'NXP NTAG424 DNA tamper-proof cryptographic microchip',
        'Optically clear 5mm cast acrylic with chamfered crystal base',
        'Mirror-finish 24K gold hot-stamped typography & emblem',
        'Ultra-dense micro-etched laser QR backup code',
      ],
      idealFor: 'Boutiques, dental clinics, specialty salons, luxury automotive, hotels',
    },
    'T-MENU': {
      title: 'T-MENU',
      subtitle: 'Digital Dining & Bar Menu Stand',
      image: menuImg,
      badge: 'HOSPITALITY EDITION',
      dimensions: '220mm × 90mm × 14mm',
      weight: '410 grams',
      specs: [
        'Instant launch of PDF menu, web order portal, or beverage list',
        'Food-safe, wipe-clean waterproof acrylic formulation',
        'Scratch-resistant UV cured protective clear coat',
        'High-density vertical form factor saves valuable table space',
        'Works through phone cases and low ambient lighting',
      ],
      idealFor: 'Fine dining restaurants, speakeasies, wine bars, hotel room service',
    },
    'T-SOCIAL': {
      title: 'T-SOCIAL',
      subtitle: 'Omnichannel Digital Presence Stand',
      image: socialImg,
      badge: 'COMMUNITY BUILDER',
      dimensions: '130mm × 130mm × 12mm',
      weight: '320 grams',
      specs: [
        'Custom pre-routed to Instagram, TikTok, Linktree, or WhatsApp',
        'Instant follower acquisition right at counter point of sale',
        'Dual-band contactless antenna for instant iOS/Android detection',
        'Heavy weighted crystal glass base prevents accidental tipping',
        'Pre-programmed and locked with your exact brand credentials',
      ],
      idealFor: 'Retail concepts, streetwear studios, art galleries, fitness clubs',
    },
  };

  const product = productDetails[productType] || productDetails['T-REVIEW'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-gold/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-dark-border text-muted hover:text-gold hover:border-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold text-gold flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-display text-4xl sm:text-5xl text-gold uppercase tracking-wider">
              ORDER INQUIRY RECEIVED
            </h3>
            <p className="text-muted-light max-w-md mx-auto text-sm font-sans font-light">
              Our bespoke concierge will reach out within 2 business hours with your digital hardware preview and shipping timeline.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Product Image & Technical Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative bg-dark-surface/60 border border-dark-border p-4 flex flex-col items-center">
                <span className="self-start text-[10px] font-mono tracking-widest text-gold uppercase mb-2">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-56 h-auto object-contain my-2 drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                />
                <div className="w-full pt-4 mt-2 border-t border-dark-border flex justify-between text-[11px] font-mono text-muted">
                  <span>{product.dimensions}</span>
                  <span>{product.weight}</span>
                </div>
              </div>

              {/* Hardware Highlights */}
              <div className="space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-widest text-gold">
                  HARDWARE ARCHITECTURE
                </p>
                <ul className="space-y-2 text-xs text-muted-light font-sans font-light">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Inquiry & Customization Form */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div>
                <p className="text-xs font-mono tracking-ultra-wide text-gold uppercase font-semibold">
                  BESPOKE SPECIFICATION
                </p>
                <h3 className="font-display text-5xl sm:text-6xl text-white tracking-tight uppercase mt-1">
                  {product.title}
                </h3>
                <p className="font-editorial text-lg text-gold font-normal mt-1">
                  {product.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono tracking-widest text-muted uppercase mb-1.5">
                    BUSINESS OR VENUE NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Atelier Noir / Saint Laurent Cafe"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border focus:border-gold text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest text-muted uppercase mb-1.5">
                    CONTACT EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="concierge@yourbusiness.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border focus:border-gold text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest text-muted uppercase mb-1.5">
                    DESTINATION LINK (MAPS / MENU / SOCIAL)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://g.page/r/... or https://instagram.com/..."
                    value={formData.destinationUrl}
                    onChange={(e) => setFormData({ ...formData, destinationUrl: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border focus:border-gold text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest text-muted uppercase mb-1.5">
                    HARDWARE VOLUME
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border focus:border-gold text-white text-sm outline-none transition-colors cursor-pointer"
                  >
                    <option value="1 Unit (Solo Desk)">1 Unit (Solo Counter / Desk)</option>
                    <option value="5 Units (Multi-Location)">5 Units (Multi-Station / Tables)</option>
                    <option value="10 Units (Full Venue)">10 Units (Full Venue Deployment)</option>
                    <option value="25+ Units (Enterprise Bespoke)">25+ Units (Custom Enterprise Fleet)</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gold text-black font-semibold text-xs tracking-widest-tag uppercase hover:bg-gold-light transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>REQUEST BESPOKE QUOTE & PREVIEW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-muted font-mono mt-3 uppercase">
                    NO SUBSCRIPTION REQUIRED • 2-YEAR PHYSICAL GUARANTEE
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
