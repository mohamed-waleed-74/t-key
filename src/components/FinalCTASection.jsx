import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTASection({ onOpenInquiry }) {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-black py-32 md:py-48 px-6 md:px-12 overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-site mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <p className="text-xs uppercase tracking-ultra-wide text-gold font-semibold">
            ACQUIRE YOUR T-KEY
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
        </div>

        {/* Large Headline */}
        <div className="space-y-1">
          <h2 className="font-display text-[75px] sm:text-[130px] md:text-[180px] lg:text-[220px] leading-poster tracking-tighter-hero uppercase text-white select-none">
            READY TO
          </h2>
          <h2 className="font-display text-[75px] sm:text-[130px] md:text-[180px] lg:text-[220px] leading-poster tracking-tighter-hero uppercase text-gold select-none drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]">
            TAP IN?
          </h2>
        </div>

        {/* Supporting Copy */}
        <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-white/90 max-w-xl mt-6 font-light leading-relaxed">
          Bring your business closer to your customers with T-KEY.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 w-full sm:w-auto">
          <button
            onClick={() => onOpenInquiry('T-KEY Bespoke Order')}
            className="px-10 py-4 rounded-full bg-gold text-black font-semibold text-xs tracking-widest-tag uppercase hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-2 active:scale-95"
          >
            <span>GET STARTED</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToProducts}
            className="px-10 py-4 rounded-full border border-gold text-white font-semibold text-xs tracking-widest-tag uppercase hover:bg-gold/10 hover:border-gold-light transition-all duration-300 active:scale-95"
          >
            VIEW PRODUCTS
          </button>
        </div>

        {/* Guarantee notes */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono tracking-widest text-muted uppercase">
          <span>WORLDWIDE EXPEDITED SHIPPING</span>
          <span className="text-gold/40">•</span>
          <span>PRE-PROGRAMMED TO YOUR URL</span>
          <span className="text-gold/40">•</span>
          <span>NO SUBSCRIPTION FEES</span>
        </div>
      </div>
    </section>
  );
}
