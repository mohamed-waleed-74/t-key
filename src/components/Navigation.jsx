import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation({ onOpenInquiry, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PRODUCTS', href: '#products' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'THE IDEA', href: '#the-idea' },
    { label: 'ABOUT', href: '#manifesto' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-dark-border py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-site mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-display text-3xl md:text-4xl tracking-wider text-white group-hover:text-gold transition-colors duration-200">
              T-KEY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse"></span>
          </a>

          {/* Desktop Center/Right Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-widest-tag text-muted-light hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenInquiry('T-KEY Bespoke Order')}
              className="group relative px-6 py-2.5 rounded-full border border-gold text-xs uppercase tracking-widest-tag text-gold hover:text-black hover:bg-gold transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-gold/40 text-gold hover:border-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 flex flex-col justify-between px-8 py-24 md:hidden animate-fadeIn">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-ultra-wide text-gold mb-8 font-semibold">
              NAVIGATION
            </p>
            {navLinks.map((link, idx) => (
              <div key={link.label} className="border-b border-dark-border py-4">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-baseline justify-between font-display text-4xl text-white hover:text-gold transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans text-muted tracking-widest">0{idx + 1}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gold/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('T-KEY Mobile Order');
              }}
              className="w-full py-4 rounded-full bg-gold text-black font-semibold text-sm uppercase tracking-widest-tag text-center flex items-center justify-center gap-2 hover:bg-gold-light transition-colors"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest text-muted mt-4">
              TAP INTO YOUR BUSINESS — 2026 T-KEY
            </p>
          </div>
        </div>
      )}
    </>
  );
}
