"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HomMixAndMatchPromoProps {
  onApplyOffer: () => void;
}

export const HomMixAndMatchPromo: React.FC<HomMixAndMatchPromoProps> = ({
  onApplyOffer,
}) => {
  return (
    <section id="mix-and-match" className="py-16 sm:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Spacious Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow matching House of Makhana */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#965E44]">
              <span className="w-2 h-2 rounded-full bg-[#965E44]" />
              <span>THE HOM MIX &amp; MATCH EDIT</span>
            </div>

            {/* Headline with Serif Italic Accent */}
            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#111111] tracking-[-0.03em] leading-[1.05]">
              Buy 2, <span className="font-serif italic font-normal text-[#965E44]">get 1 free.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-lg">
              Mix premium raw makhana, flavoured jars and combos. Choose three eligible products and pay for two. Good crunch looks better together.
            </p>

            {/* CTA & Trust note */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <button
                onClick={onApplyOffer}
                className="px-8 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1F5C4A] hover:bg-[#164638] rounded-full transition-all cursor-pointer shadow-md hover:shadow-xl flex items-center gap-2 uppercase tracking-wider group"
              >
                <span>Shop the offer</span>
                <ArrowUpRight className="w-4 h-4 text-[#C8A24A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <span className="text-xs sm:text-sm text-[#666666] font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F5C4A]" />
                Free shipping · Prepaid only
              </span>
            </div>

            {/* Sub-disclaimer */}
            <p className="text-xs text-stone-400 font-normal pt-1">
              One free eligible item per order. The lowest-priced eligible product is discounted automatically.
            </p>

          </div>

          {/* Right Column: High-End Promotional Visual Card with Docked Steps */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] overflow-hidden bg-white border border-[#EBE4D8] shadow-xl hover:shadow-2xl transition-all duration-500 group">
              
              {/* Product Visual */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] p-6 sm:p-8 flex items-center justify-center">
                <img
                  src="/images/hom/promo_buy2get1.jpg"
                  alt="House of Makhana Special Offer - Buy 2 Get 1 Free"
                  className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-700 select-none"
                  draggable={false}
                />
              </div>

              {/* Docked 3-Step Bottom Bar matching live site */}
              <div className="grid grid-cols-3 border-t border-[#EBE4D8] bg-[#FAF8F5] divide-x divide-[#EBE4D8]">
                <div className="p-3.5 sm:p-5 flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-bold text-[#965E44] tabular-nums">01</span>
                  <span className="text-[11px] sm:text-xs font-medium text-[#2A2A2A] leading-tight">Pick any two</span>
                </div>
                <div className="p-3.5 sm:p-5 flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-bold text-[#965E44] tabular-nums">02</span>
                  <span className="text-[11px] sm:text-xs font-medium text-[#2A2A2A] leading-tight">Add a third</span>
                </div>
                <div className="p-3.5 sm:p-5 flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-bold text-[#965E44] tabular-nums">03</span>
                  <span className="text-[11px] sm:text-xs font-medium text-[#2A2A2A] leading-tight">Lowest-priced free</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
