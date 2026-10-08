import React from 'react';
import { Key, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function IdeaSection() {
  return (
    <section id="the-idea" className="relative w-full bg-black py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Oversized watermark 'T' behind the section at extremely low opacity */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 text-[450px] sm:text-[600px] md:text-[750px] lg:text-[900px] font-display text-white/[0.025] select-none pointer-events-none leading-none z-0">
        T
      </div>

      <div className="relative z-10 max-w-site mx-auto">
        {/* Small Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <p className="text-xs uppercase tracking-ultra-wide text-gold font-semibold">
            THE IDEA
          </p>
        </div>

        {/* Editorial Headline Grid */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-display text-[70px] sm:text-[110px] md:text-[150px] lg:text-[190px] leading-poster tracking-tighter-hero uppercase text-white">
            ONE TAP.
          </h2>
          <h2 className="font-display text-[70px] sm:text-[110px] md:text-[150px] lg:text-[190px] leading-poster tracking-tighter-hero uppercase text-gold">
            ENDLESS CONNECTIONS.
          </h2>
        </div>

        {/* Asymmetric Editorial Narrative */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Empty spacer for asymmetric editorial composition */}
          <div className="hidden md:block md:col-span-2">
            <span className="text-xs font-mono tracking-widest text-muted uppercase">
              02 / CONCEPT
            </span>
          </div>

          <div className="md:col-span-6 space-y-6">
            <p className="font-editorial text-2xl sm:text-3xl text-white font-medium leading-snug">
              A physical key to the digital side of your business.
            </p>
            <p className="text-base text-muted-light font-sans leading-relaxed font-light">
              Most digital marketing loses steam at the physical counter. Paper flyers end up in bins, QR paper stickers fade, and asking customers to search your name creates friction.
            </p>
            <p className="text-base text-muted-light font-sans leading-relaxed font-light">
              T-KEY crafts luxury acrylic hardware that demands attention. Integrated with dual-band NFC and precision laser QR, your customers tap once and instantly arrive exactly where your business thrives.
            </p>
          </div>

          {/* Editorial Spec Callouts (minimalist 1px borders, no heavy cards) */}
          <div className="md:col-span-4 space-y-4 pt-4 md:pt-0">
            <div className="p-6 border border-dark-border bg-black/60 hover:border-gold/50 transition-colors duration-300">
              <div className="flex items-center justify-between text-gold mb-2">
                <span className="text-xs font-mono uppercase tracking-widest">NFC RESPONSE</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="font-display text-4xl text-white">0.2 SECONDS</p>
              <p className="text-xs text-muted mt-1">Native iOS and Android detection without third-party app installs.</p>
            </div>

            <div className="p-6 border border-dark-border bg-black/60 hover:border-gold/50 transition-colors duration-300">
              <div className="flex items-center justify-between text-gold mb-2">
                <span className="text-xs font-mono uppercase tracking-widest">MATERIAL CRAFT</span>
                <Layers className="w-4 h-4" />
              </div>
              <p className="font-display text-4xl text-white">CAST ACRYLIC</p>
              <p className="text-xs text-muted mt-1">5mm optically clear cast acrylic with hot-stamped 24K gold leaf.</p>
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
