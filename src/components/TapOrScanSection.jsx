import React from 'react';
import { Smartphone, QrCode, Radio, ArrowRight, Sparkles } from 'lucide-react';

export default function TapOrScanSection({ onOpenTapSimulator }) {
  return (
    <section className="relative w-full bg-black py-28 md:py-44 px-6 md:px-12 overflow-hidden border-t border-dark-border">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-site mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <p className="text-xs uppercase tracking-ultra-wide text-gold font-semibold">
            CONTACTLESS INTERACTION
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
        </div>

        {/* Enormous Typography */}
        <h2 className="font-display text-[75px] sm:text-[130px] md:text-[180px] lg:text-[220px] leading-poster tracking-tighter-hero uppercase text-white select-none">
          TAP <span className="text-gold">OR</span> SCAN
        </h2>

        {/* Subtitle */}
        <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mt-4 font-normal leading-relaxed">
          Two simple ways to connect your customers to your business.
        </p>

        {/* Editorial Two-Column Showcase with Thin 1.5px Gold Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full max-w-4xl mt-16 md:mt-24 text-left">
          {/* Method 01: NFC TAP */}
          <div className="p-8 md:p-10 border border-dark-border bg-black/80 hover:border-gold/60 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              {/* Minimal 1.5px Gold Line Icon */}
              <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-8 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all">
                <Radio className="w-8 h-8 stroke-[1.5]" />
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-display text-4xl text-white tracking-wider">TAP (NFC)</h3>
                <span className="text-xs font-mono text-gold tracking-widest">METHOD 01</span>
              </div>

              <p className="text-sm text-muted-light font-sans font-light leading-relaxed mt-4">
                Customers tap their iPhone or Android anywhere near the gold emblem. The custom URL triggers instantaneously via background tag detection — zero apps, zero camera hunting.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-dark-border flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest text-muted uppercase">
                SPEED: ~0.2 SECONDS
              </span>
              <button
                onClick={onOpenTapSimulator}
                className="text-xs font-mono tracking-widest text-gold hover:text-white flex items-center gap-1.5 uppercase group-hover:translate-x-1 transition-transform"
              >
                <span>TEST LIVE TAP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Method 02: LASER QR */}
          <div className="p-8 md:p-10 border border-dark-border bg-black/80 hover:border-gold/60 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              {/* Minimal 1.5px Gold Line Icon */}
              <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-8 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all">
                <QrCode className="w-8 h-8 stroke-[1.5]" />
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-display text-4xl text-white tracking-wider">SCAN (QR)</h3>
                <span className="text-xs font-mono text-gold tracking-widest">METHOD 02</span>
              </div>

              <p className="text-sm text-muted-light font-sans font-light leading-relaxed mt-4">
                For older devices or customers preferring visual engagement. High-contrast microscopic laser etching guarantees 100% optical readability from wide angles and low candlelight.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-dark-border flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest text-muted uppercase">
                COMPATIBILITY: 100% SMARTPHONES
              </span>
              <span className="text-[11px] font-mono tracking-widest text-gold uppercase">
                HIGH DENSITY
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dotted Gold Divider */}
      <div className="relative z-10 max-w-site mx-auto pt-24">
        <div className="gold-dotted-line" />
      </div>
    </section>
  );
}
