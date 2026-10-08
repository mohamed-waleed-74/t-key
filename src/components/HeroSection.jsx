import React from 'react';
import { ArrowDown, Radio, Sparkles } from 'lucide-react';
import heroStandImg from '../assets/treview-stand.jpg';

export default function HeroSection({ onOpenTapSimulator, onOpenInquiry }) {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background radial ambient hint (pure black dominant) */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Subtle top metadata / editorial header indicators */}
      <div className="relative z-10 max-w-site mx-auto w-full flex items-center justify-between text-xs tracking-ultra-wide text-muted uppercase font-mono border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span className="text-white/80 font-sans tracking-widest-tag text-[11px]">
            SMART NFC + QR PRODUCTS
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[10px] text-muted">
          <span>SERIES 2026</span>
          <span className="text-gold/60">•</span>
          <span>NTAG424 DNA SECURE</span>
          <span className="text-gold/60">•</span>
          <span>PURE CAST ACRYLIC</span>
        </div>
        <div className="text-[11px] text-gold tracking-widest font-sans">
          EDITION 01
        </div>
      </div>

      {/* Main Poster Body */}
      <div className="relative z-10 max-w-site mx-auto w-full my-auto py-8 md:py-12">
        {/* Enormous Poster Typography - Line 1 */}
        <div className="overflow-hidden">
          <h1 className="font-display text-[80px] sm:text-[130px] md:text-[170px] lg:text-[210px] xl:text-[230px] leading-poster tracking-tighter-hero uppercase text-white select-none">
            TAP INTO
          </h1>
        </div>

        {/* Poster Middle Row: Compositional Asymmetry with Floating Product & Huge Line 2 */}
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 my-2">
          {/* Enormous Poster Typography - Line 2 */}
          <div className="overflow-hidden z-20">
            <h1 className="font-display text-[80px] sm:text-[130px] md:text-[170px] lg:text-[210px] xl:text-[230px] leading-poster tracking-tighter-hero uppercase select-none">
              <span className="text-gold drop-shadow-[0_0_35px_rgba(212,175,55,0.25)]">
                YOUR BUSINESS
              </span>
            </h1>
          </div>

          {/* Physical Product sitting directly on the canvas — Relatively small compared with typography */}
          <div className="relative lg:absolute lg:right-4 lg:-top-16 xl:right-12 z-30 flex flex-col items-center group">
            {/* Ambient gold glow behind product */}
            <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full scale-75 group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />

            {/* Stand image with subtle float & acrylic reflection */}
            <div
              onClick={onOpenTapSimulator}
              className="relative cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95"
              title="Click to simulate NFC Tap"
            >
              <img
                src={heroStandImg}
                alt="T-KEY T-REVIEW Acrylic Google Review Stand"
                className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-88 h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] rounded-sm"
              />

              {/* Interactive badge over product */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 border border-gold/60 text-gold px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 shadow-lg group-hover:border-gold group-hover:bg-gold group-hover:text-black transition-all">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>TAP TO TEST NFC</span>
              </div>
            </div>

            {/* Micro Caption */}
            <p className="mt-6 text-[10px] tracking-widest-tag uppercase text-muted font-mono text-center">
              T-REVIEW • 5MM CAST ACRYLIC • 24K GOLD
            </p>
          </div>
        </div>

        {/* Supporting Copy & Poster Action Row */}
        <div className="mt-8 md:mt-12 pt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 z-10 relative">
          <div className="max-w-md space-y-2">
            <p className="font-editorial text-xl sm:text-2xl text-white font-medium tracking-tight">
              The physical key to your digital business.
            </p>
            <p className="text-sm text-muted-light font-sans font-light leading-relaxed">
              Transform counter visits into instant 5-star Google reviews, interactive menus, and high-converting social followers with a single contactless gesture.
            </p>
          </div>

          {/* Call to Actions — Pill Shaped with strict brand styling */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToProducts}
              className="px-8 py-3.5 rounded-full bg-gold text-black font-semibold text-xs tracking-widest-tag uppercase hover:bg-gold-light hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 active:scale-95"
            >
              EXPLORE PRODUCTS
            </button>
            <button
              onClick={scrollToHowItWorks}
              className="px-8 py-3.5 rounded-full border border-gold text-white font-semibold text-xs tracking-widest-tag uppercase hover:bg-gold/10 hover:border-gold-light transition-all duration-300 active:scale-95"
            >
              HOW IT WORKS
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Gold Dotted Divider near the bottom of the hero */}
      <div className="relative z-10 max-w-site mx-auto w-full pt-8">
        <div className="gold-dotted-line-subtle" />
        <div className="flex justify-between items-center pt-3 text-[10px] uppercase font-mono tracking-ultra-wide text-muted">
          <span>01 / 08 • SYSTEM PHILOSOPHY</span>
          <button
            onClick={scrollToProducts}
            className="flex items-center gap-1.5 hover:text-gold transition-colors text-muted hover:text-white"
          >
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3 h-3 text-gold animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
