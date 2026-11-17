"use client";

import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

interface PromoBannerProps {
  onApplyCoupon: (code: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onApplyCoupon }) => {
  return (
    <div className="bg-[#1F5C4A] text-[#C8A24A] text-xs py-2 px-4 border-b border-[#164638] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2 font-medium tracking-[0.08em] uppercase text-[11px] sm:text-[12px] text-[#C8A24A]">
          <span>BUY 2 GET 1 FREE • FREE SHIPPING • PREPAID ORDERS ONLY</span>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium">
          <span className="text-[#E7DFD4]">
            Prepaid Express Air Delivery
          </span>
          <span className="text-[#C8A24A]/40">|</span>
          <button
            onClick={() => onApplyCoupon('CRUNCH10')}
            className="inline-flex items-center gap-1 text-[#FFE8D6] hover:text-white font-semibold underline cursor-pointer transition-colors whitespace-nowrap"
            title="Click to apply coupon code"
          >
            <Tag className="w-3 h-3 text-[#C8A24A]" />
            <span>Code: CRUNCH10 (10% OFF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
