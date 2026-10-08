import React from 'react';
import { ArrowUpRight, Radio, QrCode, Star, Utensils, Share2, Sparkles } from 'lucide-react';
import reviewImg from '../assets/treview-stand.jpg';
import menuImg from '../assets/tmenu-stand.jpg';
import socialImg from '../assets/tsocial-stand.jpg';

export default function ProductsEditorial({ onSelectProduct }) {
  return (
    <section id="products" className="relative w-full bg-black py-24 md:py-36 overflow-hidden">
      {/* Section Header Eyebrow */}
      <div className="max-w-site mx-auto px-6 md:px-12 mb-16 md:mb-24 flex items-center justify-between border-b border-dark-border pb-6">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <p className="text-xs uppercase tracking-ultra-wide text-gold font-semibold">
            THE T-KEY HARDWARE COLLECTION
          </p>
        </div>
        <div className="text-[11px] font-mono tracking-widest text-muted uppercase hidden sm:block">
          03 / THREE PHYSICAL KEYS
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PRODUCT 01 — T-REVIEW */}
      {/* Layout: Left Massive Typography, Right Offset Stand */}
      {/* ========================================================================= */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted">
              <span className="text-gold font-bold">01 / LAUNCH PRODUCT</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-white/90">
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                GOOGLE REVIEWS
              </span>
            </div>

            <h3 className="font-display text-[75px] sm:text-[120px] md:text-[150px] lg:text-[170px] leading-poster tracking-tighter-hero uppercase text-white hover:text-gold transition-colors duration-300">
              T-REVIEW
            </h3>

            <p className="font-editorial text-2xl sm:text-3xl text-gold font-medium leading-snug max-w-xl">
              Turn every happy customer into a Google review.
            </p>

            <p className="text-base text-muted-light font-sans max-w-xl font-light leading-relaxed">
              Remove 100% of the friction. Customers tap their smartphone directly on the 24K gold foil emblem to open your exact Google Maps 5-star review page in under a second. No typing, no searching, no lost feedback.
            </p>

            {/* Spec / Feature Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-surface text-xs font-mono tracking-widest text-white/90">
                <Radio className="w-3.5 h-3.5 text-gold" />
                <span>TAP OR SCAN</span>
              </div>
              <div className="px-4 py-2 rounded-full border border-dark-border text-xs font-mono tracking-widest text-muted">
                5-STAR DIRECT INTENT
              </div>
              <div className="px-4 py-2 rounded-full border border-dark-border text-xs font-mono tracking-widest text-muted">
                NTAG424 DNA
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => onSelectProduct('T-REVIEW')}
                className="group px-8 py-3.5 rounded-full border border-gold text-xs font-semibold tracking-widest-tag uppercase text-gold hover:bg-gold hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <span>DISCOVER T-REVIEW</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Product Photography Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group cursor-pointer" onClick={() => onSelectProduct('T-REVIEW')}>
              <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full scale-75 group-hover:bg-gold/20 transition-all pointer-events-none" />
              <img
                src={reviewImg}
                alt="T-KEY T-REVIEW Google Review Acrylic Stand"
                className="w-72 sm:w-80 md:w-96 h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[10px] font-mono tracking-ultra-wide text-muted uppercase">
              T-REVIEW • ACRYLIC COUNTER STAND
            </p>
          </div>
        </div>
      </div>

      {/* Dotted Gold Divider */}
      <div className="max-w-site mx-auto px-6 md:px-12 my-8">
        <div className="gold-dotted-line" />
      </div>

      {/* ========================================================================= */}
      {/* PRODUCT 02 — T-MENU */}
      {/* Layout: Inverted Asymmetric (Product Left, Massive Typography Right) */}
      {/* ========================================================================= */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Product Photography Column (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center justify-center relative">
            <div className="relative group cursor-pointer" onClick={() => onSelectProduct('T-MENU')}>
              <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full scale-75 group-hover:bg-gold/20 transition-all pointer-events-none" />
              <img
                src={menuImg}
                alt="T-KEY T-MENU Luxury Table Acrylic Stand"
                className="w-64 sm:w-72 md:w-80 h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[10px] font-mono tracking-ultra-wide text-muted uppercase">
              T-MENU • CRYSTAL BEVEL TALL STAND
            </p>
          </div>

          {/* Typographic Column (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-8">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted">
              <span className="text-gold font-bold">02 / HOSPITALITY EDITION</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-white/90">
                <Utensils className="w-3.5 h-3.5 text-gold" />
                DIGITAL MENU
              </span>
            </div>

            <h3 className="font-display text-[75px] sm:text-[120px] md:text-[150px] lg:text-[170px] leading-poster tracking-tighter-hero uppercase text-white hover:text-gold transition-colors duration-300">
              T-MENU
            </h3>

            <p className="font-editorial text-2xl sm:text-3xl text-gold font-medium leading-snug max-w-xl">
              Your menu. One tap away.
            </p>

            <p className="text-base text-muted-light font-sans max-w-xl font-light leading-relaxed">
              Designed for luxury dining tables, cocktail lounges, and rooftop terraces. Guests simply rest their phone on the stand to instantly view live seasonal menus, wine pairings, and daily chef specials. Water-resistant and chemical-proof cast acrylic.
            </p>

            {/* Spec Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-surface text-xs font-mono tracking-widest text-white/90">
                <Radio className="w-3.5 h-3.5 text-gold" />
                <span>TAP OR SCAN</span>
              </div>
              <div className="px-4 py-2 rounded-full border border-dark-border text-xs font-mono tracking-widest text-muted">
                INSTANT PDF / WEB DISPATCH
              </div>
              <div className="px-4 py-2 rounded-full border border-dark-border text-xs font-mono tracking-widest text-muted">
                WATER-REPELLENT COATING
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => onSelectProduct('T-MENU')}
                className="group px-8 py-3.5 rounded-full border border-gold text-xs font-semibold tracking-widest-tag uppercase text-gold hover:bg-gold hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <span>DISCOVER T-MENU</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dotted Gold Divider */}
      <div className="max-w-site mx-auto px-6 md:px-12 my-8">
        <div className="gold-dotted-line" />
      </div>

      {/* ========================================================================= */}
      {/* PRODUCT 03 — T-SOCIAL */}
      {/* Layout: Dynamic Editorial Staggered Layout */}
      {/* ========================================================================= */}
      <div className="max-w-site mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted">
              <span className="text-gold font-bold">03 / SOCIAL IDENTITY</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-white/90">
                <Share2 className="w-3.5 h-3.5 text-gold" />
                SOCIAL MEDIA
              </span>
            </div>

            <h3 className="font-display text-[75px] sm:text-[120px] md:text-[150px] lg:text-[170px] leading-poster tracking-tighter-hero uppercase text-white hover:text-gold transition-colors duration-300">
              T-SOCIAL
            </h3>

            <p className="font-editorial text-2xl sm:text-3xl text-gold font-medium leading-snug max-w-xl">
              Put your digital presence directly in front of your customers.
            </p>

            <p className="text-base text-muted-light font-sans max-w-xl font-light leading-relaxed">
              Convert real-world foot traffic into engaged Instagram followers, TikTok views, and direct WhatsApp conversations. Positioned next to point-of-sale registers or salon styling chairs to grow your community at the point of highest customer delight.
            </p>

            {/* Spec Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-surface text-xs font-mono tracking-widest text-white/90">
                <Radio className="w-3.5 h-3.5 text-gold" />
                <span>TAP OR SCAN</span>
              </div>
              <div className="px-4 py-2 rounded-full border border-dark-border text-xs font-mono tracking-widest text-muted">
                INSTAGRAM • TIKTOK • WHATSAPP
              </div>
              <div className="px-4 py-2 rounded-full border border-dark-border text-xs font-mono tracking-widest text-muted">
                MULTI-LINK COMPATIBLE
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => onSelectProduct('T-SOCIAL')}
                className="group px-8 py-3.5 rounded-full border border-gold text-xs font-semibold tracking-widest-tag uppercase text-gold hover:bg-gold hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                <span>DISCOVER T-SOCIAL</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Product Photography Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group cursor-pointer" onClick={() => onSelectProduct('T-SOCIAL')}>
              <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full scale-75 group-hover:bg-gold/20 transition-all pointer-events-none" />
              <img
                src={socialImg}
                alt="T-KEY T-SOCIAL Countertop Acrylic Stand"
                className="w-72 sm:w-80 md:w-96 h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[10px] font-mono tracking-ultra-wide text-muted uppercase">
              T-SOCIAL • SQUARE COUNTER STAND
            </p>
          </div>
        </div>
      </div>

      {/* Dotted Gold Divider */}
      <div className="max-w-site mx-auto px-6 md:px-12 my-8">
        <div className="gold-dotted-line" />
      </div>
    </section>
  );
}
