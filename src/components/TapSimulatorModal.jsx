import React, { useState } from 'react';
import { X, Smartphone, Radio, Star, Utensils, Share2, Check, Sparkles } from 'lucide-react';
import reviewImg from '../assets/treview-stand.jpg';
import menuImg from '../assets/tmenu-stand.jpg';
import socialImg from '../assets/tsocial-stand.jpg';

export default function TapSimulatorModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('T-REVIEW');
  const [isTapping, setIsTapping] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  if (!isOpen) return null;

  const simulations = {
    'T-REVIEW': {
      image: reviewImg,
      standName: 'T-REVIEW Google Review Stand',
      app: 'Google Maps Reviews',
      title: 'Leave a 5-Star Review',
      business: 'Atelier Saint-Germain',
      rating: '5.0 ★★★★★ (418 Reviews)',
      actionText: 'Review Now',
      color: '#D4AF37',
      desc: 'NFC read in 0.18s. Directly opens the Google review dialog without searching.',
    },
    'T-MENU': {
      image: menuImg,
      standName: 'T-MENU Luxury Table Stand',
      app: 'Safari / Chrome',
      title: 'Autumn Seasonal Menu & Wine Pairing',
      business: 'Le Bistro Botanique',
      rating: 'Table 14 • Dinner Service',
      actionText: 'Browse Menu',
      color: '#D4AF37',
      desc: 'Instantly opens the responsive digital cocktail & dinner menu.',
    },
    'T-SOCIAL': {
      image: socialImg,
      standName: 'T-SOCIAL Counter Stand',
      app: 'Instagram',
      title: 'Follow @atelier.studio',
      business: 'Atelier Studio Paris',
      rating: '24.8k Followers • Art & Design',
      actionText: 'Open Profile',
      color: '#D4AF37',
      desc: 'Immediate deep-link into Instagram app profile to follow.',
    },
  };

  const current = simulations[activeTab];

  const handleSimulateTap = () => {
    setIsTapping(true);
    setNotificationVisible(false);

    // Haptic feedback if supported by browser/device
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([40, 60, 40]);
    }

    setTimeout(() => {
      setIsTapping(false);
      setNotificationVisible(true);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-black border border-gold/50 shadow-[0_0_60px_rgba(212,175,55,0.15)] p-6 sm:p-10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-dark-border text-muted hover:text-gold hover:border-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 text-gold text-[10px] font-mono tracking-widest uppercase mb-3">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>INTERACTIVE HARDWARE DEMONSTRATION</span>
          </div>
          <h3 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
            EXPERIENCE THE TAP
          </h3>
          <p className="text-sm text-muted-light font-sans font-light mt-2">
            Click the stand or press "Simulate Tap" to watch how an iPhone or Android phone connects in 0.2 seconds.
          </p>
        </div>

        {/* Product Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {['T-REVIEW', 'T-MENU', 'T-SOCIAL'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setNotificationVisible(false);
              }}
              className={`px-6 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gold text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'border border-dark-border text-muted hover:border-gold hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Simulation Stage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-dark-surface/50 border border-dark-border p-6 sm:p-8 rounded-sm">
          {/* Left: The Physical T-KEY Stand */}
          <div className="flex flex-col items-center justify-center relative">
            <div
              onClick={handleSimulateTap}
              className="relative cursor-pointer group flex flex-col items-center"
              title="Click stand to tap phone"
            >
              {/* NFC Ripple Wave on Tap */}
              {isTapping && (
                <div className="absolute inset-0 -m-8 rounded-full border-2 border-gold animate-ping pointer-events-none" />
              )}

              <img
                src={current.image}
                alt={current.standName}
                className={`w-60 h-auto object-contain transition-transform duration-300 ${
                  isTapping ? 'scale-95' : 'group-hover:scale-105'
                }`}
              />

              <div className="mt-4 px-4 py-2 rounded-full bg-gold/10 border border-gold text-gold text-xs font-mono tracking-widest uppercase flex items-center gap-2 group-hover:bg-gold group-hover:text-black transition-colors">
                <Radio className="w-3.5 h-3.5" />
                <span>CLICK TO TAP PHONE</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-muted mt-3 uppercase text-center">
              {current.standName}
            </p>
          </div>

          {/* Right: Simulated Smartphone Response */}
          <div className="flex flex-col items-center justify-center">
            {/* Phone Frame */}
            <div className="w-64 sm:w-72 h-[420px] bg-black border-2 border-dark-border rounded-[36px] p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              {/* Phone Dynamic Island / Speaker notch */}
              <div className="w-24 h-4 bg-dark-surface rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-dark-border mr-2" />
                <div className="w-2 h-2 rounded-full bg-dark-border" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="flex-1 flex flex-col justify-center items-center text-center px-4 relative">
                {notificationVisible ? (
                  <div className="w-full bg-[#1A1A1A] border border-gold/40 rounded-2xl p-4 text-left shadow-xl animate-fadeIn space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gold tracking-widest uppercase">
                      <span>NFC DETECTED</span>
                      <span>JUST NOW</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                        {activeTab === 'T-REVIEW' && <Star className="w-5 h-5 fill-gold text-gold" />}
                        {activeTab === 'T-MENU' && <Utensils className="w-5 h-5 text-gold" />}
                        {activeTab === 'T-SOCIAL' && <Share2 className="w-5 h-5 text-gold" />}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-white truncate">{current.title}</p>
                        <p className="text-[11px] text-gold truncate">{current.business}</p>
                        <p className="text-[10px] text-muted-light mt-0.5">{current.rating}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] text-muted font-mono">{current.app}</span>
                      <span className="text-xs font-semibold text-gold underline">
                        {current.actionText} →
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-muted">
                    <Smartphone className="w-12 h-12 mx-auto stroke-[1.2] text-muted/50" />
                    <p className="text-xs font-mono tracking-widest uppercase">
                      HOLD PHONE NEAR STAND
                    </p>
                    <p className="text-[11px] text-muted/70 font-sans font-light">
                      No app download or camera required.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Phone Bar */}
              <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mb-1" />
            </div>

            {/* Tap Action Button */}
            <button
              onClick={handleSimulateTap}
              className="mt-6 px-8 py-3 rounded-full bg-gold text-black font-semibold text-xs font-mono tracking-widest uppercase hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95"
            >
              SIMULATE CONTACTLESS TAP
            </button>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-8 pt-4 border-t border-dark-border text-center text-xs font-mono text-muted uppercase">
          {current.desc}
        </div>
      </div>
    </div>
  );
}
