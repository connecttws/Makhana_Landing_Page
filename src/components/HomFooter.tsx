"use client";

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  ShieldCheck, 
  Award, 
  Heart, 
  Check, 
  Phone, 
  MapPin, 
  Sparkles, 
  ArrowUp,
  Lock,
  Truck
} from 'lucide-react';

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
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0A1A14] text-[#EDEAE1] font-sans border-t border-[#1E3B30] relative overflow-hidden">
      
      {/* Subtle ambient luxury gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-96 bg-gradient-to-b from-[#183B2F]/30 via-transparent to-transparent pointer-events-none -z-0" />

      {/* TIER 1: Top Editorial Callout matching live House of Makhana */}
      <div className="border-b border-[#1C382D] bg-[#0E231B] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16382B] border border-[#275341] text-[#C8A24A] text-xs font-semibold tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>HOUSE OF MAKHANA / THE GOOD CRUNCH CLUB</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-tight">
                Good things are <span className="italic font-serif font-normal text-[#F3DCBE]">better shared.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#EDEAE1] font-normal leading-relaxed">
                Raw essentials, roasted favourites, and thoughtful snack breaks. From origin wetland ponds in Bihar straight to your table.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={onExploreCollection || (() => scrollToSection('choose-makhana'))}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0A1A14] font-semibold text-xs sm:text-sm hover:bg-[#F3DCBE] hover:text-[#0A1A14] transition-all duration-300 cursor-pointer shadow-lg group hover:scale-[1.02]"
              >
                <span>Explore the collection</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A1A14] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: Dedicated Trust & Heritage Credentials Grid */}
      <div className="border-b border-[#1C382D] bg-[#0C1E17] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-[#122820] border border-[#204436] hover:border-[#C8A24A]/50 transition-all flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#193A2E] border border-[#285743] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5 text-[#C8A24A]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">GI Tag #842 Certified</h4>
                <p className="text-xs text-[#C5D2CB] mt-0.5 leading-normal">
                  Authentic Mithila geographical origin, protected heritage harvest.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#122820] border border-[#204436] hover:border-[#C8A24A]/50 transition-all flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#193A2E] border border-[#285743] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">100% Pure Olive Oil</h4>
                <p className="text-xs text-[#C5D2CB] mt-0.5 leading-normal">
                  Slow-roasted strictly in olive oil. 0% palm oil, zero trans fat.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#122820] border border-[#204436] hover:border-[#C8A24A]/50 transition-all flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#193A2E] border border-[#285743] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Direct Mallah Impact</h4>
                <p className="text-xs text-[#C5D2CB] mt-0.5 leading-normal">
                  50+ Pokhars mapped with fair direct pricing for traditional farmers.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#122820] border border-[#204436] hover:border-[#C8A24A]/50 transition-all flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#193A2E] border border-[#285743] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5 text-[#C8A24A]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Pan-India Express Free</h4>
                <p className="text-xs text-[#C5D2CB] mt-0.5 leading-normal">
                  Free express shipping on all prepaid orders. COD available.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TIER 3: Main Navigation & VIP Newsletter Matrix */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block" aria-label="House of Makhana Home">
              <img
                src="/images/hom/logo_white.png"
                alt="House of Makhana"
                className="h-10 sm:h-11 w-auto object-contain brightness-105"
              />
            </a>
            <p className="text-sm text-[#EDEAE1] leading-relaxed font-normal max-w-sm">
              We transform Makhana (Foxnuts) from its origin wetland ponds in Bihar to global tables, combining ancient harvesting craft with everyday guilt-free crunch.
            </p>
            
            {/* Direct Contact Details */}
            <div className="space-y-3 text-xs text-[#EDEAE1] pt-1">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#142B22] border border-[#244C3C] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#C8A24A]" />
                </div>
                <a href="mailto:care@houseofmakhana.com" className="text-[#EDEAE1] hover:text-[#C8A24A] transition-colors font-medium">
                  care@houseofmakhana.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#142B22] border border-[#244C3C] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#C8A24A]" />
                </div>
                <span className="text-[#EDEAE1] font-medium">+91 98112 40590 (Mon–Sat 10am–7pm IST)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#142B22] border border-[#244C3C] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A24A]" />
                </div>
                <span className="text-[#EDEAE1]">Mithila Wetlands Hub, Madhubani &amp; Darbhanga, Bihar</span>
              </div>
            </div>

            {/* Social Handles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/houseofmakhana"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#132A21] border border-[#234A3B] flex items-center justify-center hover:bg-[#C8A24A] hover:border-[#C8A24A] hover:text-[#0A1A14] transition-all duration-200 text-white shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#132A21] border border-[#234A3B] flex items-center justify-center hover:bg-[#C8A24A] hover:border-[#C8A24A] hover:text-[#0A1A14] transition-all duration-200 text-white shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#132A21] border border-[#234A3B] flex items-center justify-center hover:bg-[#C8A24A] hover:border-[#C8A24A] hover:text-[#0A1A14] transition-all duration-200 text-white shadow-sm"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#132A21] border border-[#234A3B] flex items-center justify-center hover:bg-[#C8A24A] hover:border-[#C8A24A] hover:text-[#0A1A14] transition-all duration-200 text-white shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A24A]" />
              <h4 className="font-bold text-white uppercase tracking-[0.16em] text-xs">
                Explore Collection
              </h4>
            </div>
            <ul className="space-y-3 text-sm text-[#EDEAE1] font-normal">
              <li>
                <button 
                  onClick={() => scrollToSection('choose-makhana')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Shop All Makhanas</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('premium-raw')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Premium Raw Makhana</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('signature-flavors')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Flavoured Roasted Jars</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mix-and-match')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5 text-[#F3DCBE] font-medium"
                >
                  <span>Buy 2, Get 1 Free Edit</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('signature-flavors')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Trial 5-Flavor Combos</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('our-story')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Gifting &amp; Value Packs</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The HOM Heritage (Col 7-8) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A24A]" />
              <h4 className="font-bold text-white uppercase tracking-[0.16em] text-xs">
                Our Heritage
              </h4>
            </div>
            <ul className="space-y-3 text-sm text-[#EDEAE1] font-normal">
              <li>
                <button 
                  onClick={() => scrollToSection('pokhars-story')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>The Pokhars of Bihar</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('our-story')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>The 4 HOM Standards</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pokhars-story')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Behind the Crunch Film</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Customer Reviews</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <a 
                  href="mailto:care@houseofmakhana.com" 
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Concierge Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay in the Loop Newsletter (Col 9-12) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A24A]" />
              <h4 className="font-bold text-white uppercase tracking-[0.16em] text-xs">
                Stay in the Loop
              </h4>
            </div>
            <p className="text-sm text-[#EDEAE1] leading-relaxed font-normal">
              Join <span className="text-white font-semibold">15,000+ conscious snackers</span> in The Good Crunch Club. Get secret harvest drops, wholesome dietitian recipes, and ₹100 OFF your first delivery.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="flex items-center gap-2 bg-[#081510] border border-[#234A3B] rounded-full p-1.5 focus-within:border-[#C8A24A] focus-within:ring-1 focus-within:ring-[#C8A24A] transition-all shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-4 py-2.5 bg-transparent text-white placeholder-[#98A8A0] text-xs sm:text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#C8A24A] text-[#0A1A14] hover:bg-[#D8B45A] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow-md hover:scale-[1.02]"
                >
                  Join
                </button>
              </div>

              {subscribed && (
                <div className="p-3 rounded-xl bg-[#143527] border border-[#236348] text-xs text-emerald-200 flex items-center gap-2 animate-fadeIn">
                  <Check className="w-4 h-4 text-emerald-300 stroke-[3] shrink-0" />
                  <span>Welcome to The Good Crunch Club! Check your inbox for ₹100 OFF.</span>
                </div>
              )}
            </form>

            <div className="flex items-center gap-2 text-xs text-[#C5D2CB] pt-1">
              <Lock className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
              <span>Zero spam. Unsubscribe anytime. 100% privacy protected.</span>
            </div>

          </div>

        </div>

        {/* TIER 4: Bottom Bar (Copyright, Payment Methods & Legal) */}
        <div className="border-t border-[#1C382D] mt-14 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-[#C5D2CB]">
          
          <div className="flex items-center gap-3 text-center lg:text-left">
            <p>© {new Date().getFullYear()} House of Makhana. All rights reserved.</p>
            <span className="hidden sm:inline text-[#2A5241]">|</span>
            <p className="hidden sm:inline text-[#EDEAE1]">Crafted with care from the wetlands of Bihar to the world.</p>
          </div>

          {/* Secure Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#EDEAE1]">
            <span className="px-3 py-1 rounded-md bg-[#122820] border border-[#23493B] font-medium text-white shadow-sm">UPI</span>
            <span className="px-3 py-1 rounded-md bg-[#122820] border border-[#23493B] font-medium text-white shadow-sm">RuPay</span>
            <span className="px-3 py-1 rounded-md bg-[#122820] border border-[#23493B] font-medium text-white shadow-sm">Visa</span>
            <span className="px-3 py-1 rounded-md bg-[#122820] border border-[#23493B] font-medium text-white shadow-sm">Mastercard</span>
            <span className="px-3 py-1 rounded-md bg-[#122820] border border-[#23493B] font-medium text-white shadow-sm">NetBanking</span>
            <span className="px-3 py-1 rounded-md bg-[#122820] border border-[#23493B] font-medium text-[#F3DCBE] shadow-sm">COD Available</span>
          </div>

          {/* Legal Links & Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#EDEAE1] hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[#2A5241]">·</span>
            <span className="text-[#EDEAE1] hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-[#2A5241]">·</span>
            <span className="text-[#EDEAE1] hover:text-white cursor-pointer transition-colors">Shipping &amp; Refund</span>
            <span className="text-[#2A5241]">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#C8A24A] hover:text-white transition-colors cursor-pointer font-medium ml-2"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};
