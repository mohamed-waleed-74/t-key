import React from 'react';
import { Key } from 'lucide-react';

export default function BrandStatement() {
  return (
    <section id="manifesto" className="relative w-full bg-black py-32 md:py-48 px-6 md:px-12 overflow-hidden border-t border-dark-border">
      {/* Background ambient gold gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-site mx-auto">
        {/* Small Eyebrow */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <p className="text-xs uppercase tracking-ultra-wide text-gold font-semibold">
            BRAND MANIFESTO
          </p>
        </div>

        {/* Enormous Full-Width Poster Typography */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-display text-[65px] sm:text-[110px] md:text-[150px] lg:text-[185px] xl:text-[210px] leading-poster tracking-tighter-hero uppercase text-white select-none">
            YOUR DIGITAL BUSINESS
          </h2>
          <h2 className="font-display text-[65px] sm:text-[110px] md:text-[150px] lg:text-[185px] xl:text-[210px] leading-poster tracking-tighter-hero uppercase text-white/50 select-none">
            DESERVES
          </h2>
          <h2 className="font-display text-[65px] sm:text-[110px] md:text-[150px] lg:text-[185px] xl:text-[210px] leading-poster tracking-tighter-hero uppercase text-gold select-none drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            A PHYSICAL KEY.
          </h2>
        </div>

        {/* Manifesto Paragraph */}
        <div className="mt-16 md:mt-24 max-w-2xl ml-auto border-l border-gold/40 pl-6 md:pl-8 space-y-4">
          <p className="font-editorial text-xl sm:text-2xl text-white font-normal leading-relaxed">
            In an era where every transaction dissolves into ether and pixels, tactile weight signals permanence, prestige, and trust.
          </p>
          <p className="text-sm sm:text-base text-muted-light font-sans font-light leading-relaxed">
            T-KEY restores the power of touch. Hand-finished black acrylic, beveled optical edges, and 24K hot-stamped gold foil bridge physical presence with instantaneous digital conversion.
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-gold pt-2">
            — T-KEY DESIGN LAB, 2026
          </p>
        </div>
      </div>

      {/* Dotted Gold Divider */}
      <div className="max-w-site mx-auto pt-28">
        <div className="gold-dotted-line" />
      </div>
    </section>
  );
}
