"use client";

import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HomMixAndMatchPromoProps {
  onApplyOffer: () => void;
}

export const HomMixAndMatchPromo: React.FC<HomMixAndMatchPromoProps> = ({
  onApplyOffer,
}) => {
  return (
    <section id="mix-and-match" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold text-[#1F5C4A] bg-[#DBE9E0] px-3.5 py-1 rounded-full inline-block">
                THE HOM MIX &amp; MATCH EDIT
              </span>

              <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold text-[#111111] tracking-[-0.04em] leading-[1.05]">
                Buy 2, get 1 free.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-xl">
              Mix premium raw makhana, flavoured jars and combos. Choose three eligible products and pay for two. Good crunch looks better together.
            </p>

            {/* 3 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#F0E5D8]">
                <p className="text-xl font-bold text-[#1F5C4A] tabular-nums">01</p>
                <p className="text-xs font-semibold text-[#111111] mt-1">Pick any two</p>
                <p className="text-[11px] text-stone-500 font-normal mt-0.5">Choose your favorite packs</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E5D8]">
                <p className="text-xl font-bold text-[#1F5C4A] tabular-nums">02</p>
                <p className="text-xs font-semibold text-[#111111] mt-1">Add a third</p>
                <p className="text-[11px] text-stone-500 font-normal mt-0.5">Explore a new flavor</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E5D8]">
                <p className="text-xl font-bold text-[#C8A24A] tabular-nums">03</p>
                <p className="text-xs font-semibold text-[#111111] mt-1">Lowest-priced free</p>
                <p className="text-[11px] text-stone-500 font-normal mt-0.5">Discount applied automatically</p>
              </div>
            </div>

            {/* CTA & Trust note */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onApplyOffer}
                className="px-8 py-4 text-xs sm:text-sm font-semibold text-white bg-[#1F5C4A] hover:bg-[#164638] rounded-full transition-all cursor-pointer shadow-lg flex items-center gap-2 uppercase tracking-wider"
              >
                <span>Shop the offer</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFB872]" />
              </button>

              <span className="text-xs text-[#6B635C] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1F5C4A]" />
                Free shipping · Prepaid only
              </span>
            </div>
          </div>

          {/* Right Column: Creative Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[24px] overflow-hidden bg-white border border-[#F0E5D8] shadow-xl group">
              <img
                src="/images/hom/promo_buy2get1.jpg"
                alt="House of Makhana Buy 2 Get 1 Free Offer"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#F0E5D8] text-center">
                <p className="text-xs font-semibold text-[#1F5C4A] uppercase tracking-wider">
                  Limited Batch Offer
                </p>
                <p className="text-[11px] text-[#666666] font-normal">
                  Automatic discount at checkout on 3 eligible packs
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
