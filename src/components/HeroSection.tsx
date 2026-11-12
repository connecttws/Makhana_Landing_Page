"use client";

import React from 'react';
import { Star, ShieldCheck, Truck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/product-data';

interface HeroSectionProps {
  onQuickBuy: () => void;
  onScrollToPurchase: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onQuickBuy,
  onScrollToPurchase,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF4E8] via-[#FFF8F1] to-[#FFF8F1] pt-10 pb-16 lg:py-20 border-b border-[#F0E5D8]">
      {/* Background ambient warm shapes */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#FFE0B2]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DBE9E0]/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Bold, Punchy, Ultra-Readable */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Pill Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A] border border-[#B8D7C4]">
              <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
              <span>GI Tag #842 · Grade 6+ Jumbo Size</span>
            </div>

            {/* Bold Montserrat Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black tracking-tight text-[#1A1A1A] leading-[1.12]">
              Ancient Lotus Superfood. <br />
              <span className="text-[#1F5C4A]">Pure Himalayan Salt</span> &amp; Olive Oil Crunch.
            </h1>

            {/* Clean, Readable Body Copy */}
            <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              Hand-harvested from Mithila’s pristine freshwater wetlands. Slow-popped over aged hardwood coals and glazed with cold-pressed Spanish olive oil &amp; mineral pink salt.
              <span className="block mt-1 font-bold text-[#1F5C4A]">
                Zero palm oil. Low GI (35). 100% cloud-like crunch.
              </span>
            </p>

            {/* Pricing Highlight & Actions */}
            <div className="pt-2 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tabular-nums tracking-tight">
                  ₹449
                </span>
                <span className="text-lg text-[#888888] line-through tabular-nums font-semibold">
                  ₹598
                </span>
                <span className="text-xs font-black text-[#D9480F] bg-[#FFE8D6] px-3 py-1 rounded-full uppercase tracking-wide">
                  Save ₹149 · Twin Duo (500g)
                </span>
              </div>

              {/* House of Makhana Style Pill Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  onClick={onQuickBuy}
                  className="px-8 py-4 text-xs sm:text-sm font-extrabold text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-full shadow-lg cursor-pointer uppercase tracking-wider"
                >
                  <span>Order Now — ₹449</span>
                  <ArrowRight className="w-4 h-4 text-[#FFB872]" />
                </button>

                <button
                  onClick={onScrollToPurchase}
                  className="px-7 py-4 text-xs sm:text-sm font-extrabold text-[#1F5C4A] bg-white border-2 border-[#1F5C4A] hover:bg-[#F0F7F4] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer rounded-full shadow-xs uppercase tracking-wider"
                >
                  Choose Pack &amp; Flavors
                </button>
              </div>

              {/* 3 Quick Trust Micro-Pills */}
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#444444] font-semibold">
                <span className="flex items-center gap-1.5 text-[#1F5C4A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5C4A]" /> 100% Crisp Guarantee
                </span>
                <span className="flex items-center gap-1.5 text-[#1F5C4A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5C4A]" /> Cash On Delivery
                </span>
                <span className="flex items-center gap-1.5 text-[#FF7A00]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> Free Express Shipping
                </span>
              </div>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-6 border-t border-[#F0E5D8] grid grid-cols-3 gap-4 text-xs text-[#333333] font-semibold">
              <div className="flex items-center gap-2">
                <div className="flex text-[#FF7A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
                <span className="font-black text-[#1A1A1A] tabular-nums">4.9/5</span>
                <span className="hidden sm:inline text-[#777777] font-normal">(1,480+ Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5C4A] shrink-0" />
                <span className="font-bold text-[#1F5C4A]">100% Refundable</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span className="font-bold text-[#1A1A1A]">24h Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Product Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-[24px] overflow-hidden bg-white border border-[#F0E5D8] shadow-[0_15px_40px_rgba(0,0,0,0.08)] group">
              <img
                src={PRODUCT_IMAGES[0].src}
                alt={PRODUCT_IMAGES[0].alt}
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Bottom Card Callout */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F0E5D8] shadow-md flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold text-[#1F5C4A] tracking-tight">
                    Mithila Naturale · Artisanal Roast
                  </p>
                  <p className="text-xs text-[#666666] font-medium">
                    Himalayan Pink Salt · 6+ Soot Jumbo Kernels
                  </p>
                </div>
                <button
                  onClick={onScrollToPurchase}
                  className="text-xs font-black text-[#FF7A00] hover:text-[#E65100] underline uppercase tracking-wider whitespace-nowrap cursor-pointer"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#1F5C4A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-[#2F856C]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB872]" />
              <span>GI Tag Certified #842</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
