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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF4E8] via-[#FFF8F1] to-[#FFF8F1] border-b border-[#F0E5D8] py-8 lg:py-2 lg:h-[calc(100vh-82px)] lg:max-h-[820px] lg:min-h-[540px] flex items-center">
      {/* Background ambient warm shapes */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#FFE0B2]/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DBE9E0]/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Fine, Refined, Viewport-Fitted */}
          <div className="lg:col-span-6 space-y-3.5 xl:space-y-4">
            
            {/* Top Pill Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A] border border-[#B8D7C4]">
              <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
              <span>GI Tag #842 · Grade 6+ <strong className="font-bold text-[#1F5C4A]">Jumbo Size</strong></span>
            </div>

            {/* Fine Headline with Tinted Words */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] xl:text-[2.75rem] font-bold tracking-tight text-[#1A1A1A] leading-[1.12]">
              Ancient Lotus Superfood. <br />
              <span className="text-[#1F5C4A]">Pure Himalayan Salt</span> &amp; <span className="text-[#E65100]">Olive Oil Crunch</span>.
            </h1>

            {/* Clean, Minimal, High-Impact Body Copy */}
            <div className="text-[#4A4A4A] text-xs sm:text-[13px] leading-relaxed max-w-lg font-normal">
              <p>Hand-harvested jumbo lotus seeds. Wood-fire roasted in <span className="text-[#1F5C4A] font-semibold">Spanish olive oil</span> &amp; mineral pink salt.</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[#D9480F] font-semibold bg-[#FFF0E5] px-2 py-0.5 rounded-full text-[11px]">0% palm oil</span>
                <span className="text-[#1F5C4A] font-semibold bg-[#E8F3EE] px-2 py-0.5 rounded-full text-[11px]">Low GI 35</span>
                <span className="text-[#666666] font-medium text-[11px]">100% cloud-like crunch</span>
              </div>
            </div>

            {/* Pricing Highlight & Actions */}
            <div className="pt-0.5 space-y-2.5">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-bold text-[#1F5C4A] tabular-nums tracking-tight">
                  ₹449
                </span>
                <span className="text-sm text-[#888888] line-through tabular-nums font-normal">
                  ₹598
                </span>
                <span className="text-[11px] font-semibold text-[#D9480F] bg-[#FFE8D6] px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  Save ₹149 · Twin Duo (500g)
                </span>
              </div>

              {/* House of Makhana Style Fine Pill Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-0.5">
                <button
                  onClick={onQuickBuy}
                  className="px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-full shadow-md cursor-pointer uppercase tracking-wider"
                >
                  <span>Order Now — ₹449</span>
                  <ArrowRight className="w-4 h-4 text-[#FFB872]" />
                </button>

                <button
                  onClick={onScrollToPurchase}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#1F5C4A] bg-white border-1.5 border-[#1F5C4A] hover:bg-[#F0F7F4] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer rounded-full shadow-xs uppercase tracking-wider"
                >
                  Choose Pack &amp; Flavors
                </button>
              </div>

              {/* 3 Quick Trust Micro-Pills */}
              <div className="flex flex-wrap items-center gap-3.5 pt-0.5 text-[11px] text-[#555555] font-medium">
                <span className="flex items-center gap-1 text-[#1F5C4A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F5C4A]" /> 100% Crisp Guarantee
                </span>
                <span className="flex items-center gap-1 text-[#1F5C4A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F5C4A]" /> Cash On Delivery
                </span>
                <span className="flex items-center gap-1 text-[#E65100]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100]" /> Free Express Shipping
                </span>
              </div>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-2.5 border-t border-[#F0E5D8] grid grid-cols-3 gap-3 text-[11px] text-[#333333] font-medium">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#FF7A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
                <span className="font-bold text-[#1A1A1A] tabular-nums">4.9/5</span>
                <span className="hidden sm:inline text-[#777777] font-normal">(1,480+)</span>
              </div>

              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F5C4A] shrink-0" />
                <span className="font-semibold text-[#1F5C4A]">100% Refundable</span>
              </div>

              <div className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#E65100] shrink-0" />
                <span className="font-semibold text-[#1A1A1A]">24h Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Product Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-[22px] overflow-hidden bg-white border border-[#F0E5D8] shadow-[0_12px_35px_rgba(0,0,0,0.07)] group">
              <img
                src={PRODUCT_IMAGES[0].src}
                alt={PRODUCT_IMAGES[0].alt}
                className="w-full h-[300px] sm:h-[360px] lg:h-[360px] xl:h-[400px] max-h-[calc(100vh-230px)] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Bottom Card Callout */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-[#F0E5D8] shadow-sm flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#1F5C4A] tracking-tight">
                    Mithila Naturale · Artisanal Roast
                  </p>
                  <p className="text-[11px] text-[#666666] font-normal">
                    Himalayan Pink Salt · 6+ Soot Jumbo
                  </p>
                </div>
                <button
                  onClick={onScrollToPurchase}
                  className="text-[11px] font-bold text-[#E65100] hover:text-[#D9480F] underline uppercase tracking-wider whitespace-nowrap cursor-pointer"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-2.5 -right-2.5 hidden sm:flex items-center gap-1.5 bg-[#1F5C4A] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md border border-[#2F856C]">
              <Sparkles className="w-3 h-3 text-[#FFB872]" />
              <span>GI Tag Certified #842</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
