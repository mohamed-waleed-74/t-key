import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BusinessConnections({ onSelectProduct }) {
  const [activeWord, setActiveWord] = useState('REVIEWS');

  const connections = [
    {
      id: 'REVIEWS',
      label: 'REVIEWS',
      target: 'T-REVIEW',
      metric: '+340% 5-Star Submissions',
      detail: 'Eliminate Google search drop-off. Customers submit verified reviews right at the counter while positive emotion is highest.',
      tag: 'T-REVIEW PRODUCT',
    },
    {
      id: 'MENU',
      label: 'MENU',
      target: 'T-MENU',
      metric: 'Zero Print Latency',
      detail: 'Update pricing, daily specials, and 86d items in real time. Instant interactive dining experience with zero paper waste.',
      tag: 'T-MENU PRODUCT',
    },
    {
      id: 'SOCIAL',
      label: 'SOCIAL',
      target: 'T-SOCIAL',
      metric: 'Direct Follower Lift',
      detail: 'Instant conversion from real-world patron to lifelong digital advocate across Instagram, TikTok, and direct messaging channels.',
      tag: 'T-SOCIAL PRODUCT',
    },
  ];

  const current = connections.find((c) => c.id === activeWord) || connections[0];

  return (
    <section className="relative w-full bg-black py-28 md:py-40 px-6 md:px-12 overflow-hidden border-t border-dark-border">
      <div className="max-w-site mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-between mb-12 border-b border-dark-border pb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <p className="text-xs uppercase tracking-ultra-wide text-gold font-semibold">
              BUSINESS CONNECTIONS
            </p>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-muted uppercase">
            TYPOGRAPHIC ECOSYSTEM
          </span>
        </div>

        {/* Huge Master Headline */}
        <h2 className="font-display text-[70px] sm:text-[120px] md:text-[170px] lg:text-[210px] leading-poster tracking-tighter-hero uppercase text-white/90 select-none">
          YOUR BUSINESS
        </h2>

        {/* Asymmetric Arrangement of Words as Visual Objects */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Typographic Objects Column */}
          <div className="lg:col-span-8 flex flex-col space-y-4 md:space-y-6">
            {connections.map((item, idx) => {
              const isActive = activeWord === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveWord(item.id)}
                  onClick={() => onSelectProduct(item.target)}
                  className={`group cursor-pointer select-none transition-all duration-300 flex items-center justify-between border-b border-dark-border/80 pb-4 md:pb-6 ${
                    isActive ? 'pl-4 md:pl-6' : 'hover:pl-4'
                  }`}
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs md:text-sm text-muted">
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-display text-[55px] sm:text-[85px] md:text-[110px] lg:text-[125px] leading-poster tracking-poster uppercase transition-all duration-300 ${
                        isActive
                          ? 'text-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                          : 'text-white/40 group-hover:text-gold'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono tracking-widest uppercase transition-colors hidden sm:block ${
                        isActive ? 'text-gold' : 'text-muted group-hover:text-white'
                      }`}
                    >
                      EXPLORE
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                        isActive
                          ? 'border-gold bg-gold text-black'
                          : 'border-dark-border text-muted group-hover:border-gold group-hover:text-gold'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Asymmetric Floating Meta Callout */}
          <div className="lg:col-span-4 lg:pl-8 pt-4">
            <div className="p-8 border border-gold/40 bg-black/90 relative">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-gold mb-4">
                <span>{current.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              </div>

              <p className="font-editorial text-2xl text-white font-medium mb-3">
                {current.metric}
              </p>

              <p className="text-sm text-muted-light font-sans font-light leading-relaxed mb-6">
                {current.detail}
              </p>

              <button
                onClick={() => onSelectProduct(current.target)}
                className="w-full py-3 rounded-full bg-gold text-black font-semibold text-xs tracking-widest-tag uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
              >
                <span>VIEW {current.target} HARDWARE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dotted Gold Divider */}
      <div className="max-w-site mx-auto pt-24">
        <div className="gold-dotted-line" />
      </div>
    </section>
  );
}
