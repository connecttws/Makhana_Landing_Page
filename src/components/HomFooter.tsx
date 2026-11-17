"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Mail, ShieldCheck, Award, Heart, Check, Phone, MapPin } from 'lucide-react';

interface HomFooterProps {
  onExploreCollection?: () => void;
}

export const HomFooter: React.FC<HomFooterProps> = ({ onExploreCollection }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1F5C4A] text-[#DFDDD1] font-sans border-t border-[#29755F]">
      {/* Top Editorial Callout matching live House of Makhana */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A24A]">
                HOUSE OF MAKHANA / THE GOOD CRUNCH CLUB
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-[-0.03em] leading-tight">
                Good things are <span className="italic font-serif font-normal text-[#F4DEC4]">better shared.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#DFDDD1]/80 font-normal leading-relaxed">
                Raw essentials, roasted favourites and thoughtful snack breaks. There&apos;s something here for everyone.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onExploreCollection || (() => scrollToSection('choose-makhana'))}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/40 text-white font-medium text-sm hover:bg-white hover:text-[#1F5C4A] transition-all duration-300 cursor-pointer shadow-sm group"
              >
                <span>Explore the collection</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-block">
              <img
                src="/images/hom/logo_white.png"
                alt="House of Makhana"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#DFDDD1]/75 leading-relaxed font-normal max-w-sm">
              We transform Makhana (Foxnuts) from its origin ponds in Bihar to global tables, combining ancient harvesting craft with everyday guilt-free crunch.
            </p>
            
            {/* Direct Contact info */}
            <div className="space-y-2 text-xs text-[#DFDDD1]/70 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>care@houseofmakhana.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>+91 98112 40590 (Mon–Sat 10am–7pm)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>Mithila Hub, Madhubani &amp; Darbhanga, Bihar</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/houseofmakhana"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8A24A] hover:text-[#1F5C4A] transition-colors text-white"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8A24A] hover:text-[#1F5C4A] transition-colors text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8A24A] hover:text-[#1F5C4A] transition-colors text-white"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links 1: Products */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-[0.12em] text-[13px]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-[#DFDDD1]/80 font-normal">
              <li>
                <button onClick={() => scrollToSection('choose-makhana')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Shop All Makhanas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('premium-raw')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Premium Raw Makhana
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('signature-flavors')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Flavoured Roasted Jars
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('mix-and-match')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Buy 2, Get 1 Free Offer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('our-story')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Gifting &amp; Value Packs
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: About & Trust */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-[0.12em] text-[13px]">
              The HOM Story
            </h4>
            <ul className="space-y-2.5 text-[#DFDDD1]/80 font-normal">
              <li>
                <button onClick={() => scrollToSection('pokhars-story')} className="hover:text-white transition-colors cursor-pointer text-left">
                  The Pokhars of Bihar
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('our-story')} className="hover:text-white transition-colors cursor-pointer text-left">
                  The 4 HOM Standards
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pokhars-story')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Mallah Farmer Welfare
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Guarantee */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-semibold text-white uppercase tracking-[0.12em] text-[13px]">
              Stay in the Loop
            </h4>
            <p className="text-xs text-[#DFDDD1]/75 leading-relaxed font-normal">
              Subscribe to unlock secret harvest drops, recipe inspirations, and ₹100 off your first delivery.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-[#DFDDD1]/50 text-xs focus:outline-none focus:border-[#C8A24A] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#C8A24A] text-[#1F5C4A] hover:bg-[#d8b155] font-semibold text-xs transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-300 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Welcome to The Good Crunch Club!
                </p>
              )}
            </form>

            {/* Badges */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-4 h-4 text-[#C8A24A] mx-auto mb-1" />
                <p className="text-[10px] text-white font-medium">GI Tagged</p>
                <p className="text-[9px] text-[#DFDDD1]/60">Mithila Origin</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <p className="text-[10px] text-white font-medium">FSSAI Certified</p>
                <p className="text-[9px] text-[#DFDDD1]/60">100% Food Safe</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Heart className="w-4 h-4 text-rose-300 mx-auto mb-1" />
                <p className="text-[10px] text-white font-medium">100% Natural</p>
                <p className="text-[9px] text-[#DFDDD1]/60">Zero Artificial</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DFDDD1]/60">
          <p>© {new Date().getFullYear()} House of Makhana. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-[#DFDDD1]/70">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Shipping &amp; Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
