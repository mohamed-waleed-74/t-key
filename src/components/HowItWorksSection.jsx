import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'TAP',
      tag: 'GESTURE',
      desc: 'Customer brings their smartphone within 4cm of the T-KEY acrylic stand or points camera at the laser QR.',
    },
    {
      num: '02',
      title: 'CONNECT',
      tag: 'DISPATCH',
      desc: 'NFC dual-band microchip instantly opens your verified destination with zero friction or typing.',
    },
    {
      num: '03',
      title: 'ENGAGE',
      tag: 'CONVERSION',
      desc: 'Customer submits a 5-star Google review, browses dining menus, or follows your brand on social media.',
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-black py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-site mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between mb-16 md:mb-24 border-b border-dark-border pb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <p className="text-xs uppercase tracking-ultra-wide text-gold font-semibold">
              HOW IT WORKS
            </p>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-muted uppercase">
            THREE STEPS TO ZERO FRICTION
          </span>
        </div>

        {/* Large Horizontal Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col justify-between group">
              {/* Dotted gold line between steps on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-8 top-16 w-16 z-0">
                  <div className="gold-dotted-line-subtle" />
                </div>
              )}

              <div>
                {/* Large Display Number */}
                <div className="font-display text-[80px] sm:text-[100px] lg:text-[120px] text-white/20 group-hover:text-gold transition-colors duration-300 leading-none select-none">
                  {step.num}
                </div>

                <div className="flex items-center gap-3 my-4">
                  <span className="text-xs font-mono tracking-widest text-gold uppercase">
                    STEP {step.num}
                  </span>
                  <span className="text-dark-border">•</span>
                  <span className="text-xs font-mono tracking-widest text-muted uppercase">
                    {step.tag}
                  </span>
                </div>

                {/* Step Headline */}
                <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase mb-4 group-hover:text-gold transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-base text-muted-light font-sans font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom minimal indicator */}
              <div className="pt-8 mt-8 border-t border-dark-border flex items-center justify-between text-xs font-mono text-muted uppercase">
                <span>STAGE {idx + 1} OF 3</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dotted Gold Divider */}
      <div className="max-w-site mx-auto pt-24">
        <div className="gold-dotted-line" />
      </div>
    </section>
  );
}
