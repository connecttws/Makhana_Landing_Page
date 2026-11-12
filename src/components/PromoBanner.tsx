"use client";

import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

interface PromoBannerProps {
  onApplyCoupon: (code: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onApplyCoupon }) => {
  return (
    <div className="bg-[#1F5C4A] text-white text-xs py-2 px-4 border-b border-[#164638] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide">
          <span className="bg-[#FF7A00] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
            Special Offer
          </span>
          <span>100% Wood-Fire Roasted Jumbo Fox Nuts · Direct From Mithila</span>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium">
          <span className="text-emerald-100">
            Free Express Shipping on Orders &gt; <strong className="text-white font-bold">₹499</strong>
          </span>
          <span className="text-emerald-400">|</span>
          <button
            onClick={() => onApplyCoupon('CRUNCH10')}
            className="inline-flex items-center gap-1 text-[#FFE8D6] hover:text-white font-bold underline cursor-pointer transition-colors whitespace-nowrap"
            title="Click to apply coupon code"
          >
            <Tag className="w-3 h-3 text-[#FFB872]" />
            <span>Use Code: CRUNCH10 (10% OFF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
