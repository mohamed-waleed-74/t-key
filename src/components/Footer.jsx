import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'PRODUCTS', href: '#products' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'THE IDEA', href: '#the-idea' },
    { label: 'ABOUT', href: '#manifesto' },
  ];

  return (
    <footer className="w-full bg-black border-t border-dark-border text-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-site mx-auto flex flex-col justify-between">
        {/* Top Row: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-dark-border">
          {/* Logo & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-4xl sm:text-5xl tracking-wider text-white">
                T-KEY
              </span>
              <span className="w-2 h-2 rounded-full bg-gold"></span>
            </div>
            <p className="font-editorial text-lg text-gold tracking-wider uppercase font-medium">
              TAP INTO YOUR BUSINESS
            </p>
            <p className="text-sm text-muted max-w-sm font-sans font-light leading-relaxed">
              Premium physical NFC + QR products that connect physical venues with their digital customer base. Handcrafted luxury acrylic.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-ultra-wide text-gold font-semibold mb-4">
              DIRECTORY
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-widest font-mono text-muted-light hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenInquiry('T-KEY Bespoke Contact')}
                  className="text-xs uppercase tracking-widest font-mono text-muted-light hover:text-gold transition-colors duration-200"
                >
                  CONTACT CONCIERGE
                </button>
              </li>
            </ul>
          </div>

          {/* Minimal 1.5px Gold Line Social Icons */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-ultra-wide text-gold font-semibold mb-4">
              CONNECT
            </p>
            <div className="flex items-center gap-3">
              {/* Minimal Line Instagram */}
              <a
                href="#instagram"
                title="Instagram"
                className="w-10 h-10 rounded-full border border-dark-border hover:border-gold flex items-center justify-center text-muted hover:text-gold transition-all duration-200"
              >
                <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Minimal Line TikTok */}
              <a
                href="#tiktok"
                title="TikTok"
                className="w-10 h-10 rounded-full border border-dark-border hover:border-gold flex items-center justify-center text-muted hover:text-gold transition-all duration-200"
              >
                <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>

              {/* Minimal Line Facebook */}
              <a
                href="#facebook"
                title="Facebook"
                className="w-10 h-10 rounded-full border border-dark-border hover:border-gold flex items-center justify-center text-muted hover:text-gold transition-all duration-200"
              >
                <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Minimal Line WhatsApp */}
              <a
                href="#whatsapp"
                title="WhatsApp"
                className="w-10 h-10 rounded-full border border-dark-border hover:border-gold flex items-center justify-center text-muted hover:text-gold transition-all duration-200"
              >
                <svg className="w-4 h-4 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-muted font-mono pt-2">
              Bespoke commissions & trade inquiries welcome.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted uppercase">
          <p>© 2026 T-KEY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="text-[10px]">DESIGNED WITH PRECISION</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gold hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
