"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  onApplyCoupon?: (code: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onApplyCoupon }) => {
  return (
    <div className="bg-[#0F0F0F] text-[#C8A24A] text-[12px] sm:text-[13px] py-2 px-4 border-b border-black font-sans tracking-[0.06em]">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center font-medium">
        <a
          href="#choose-makhana"
          onClick={() => onApplyCoupon && onApplyCoupon('HOM10')}
          className="inline-flex items-center justify-center gap-1.5 hover:text-white transition-colors cursor-pointer uppercase"
        >
          <span>BUY 2 GET 1 FREE • FREE SHIPPING • PREPAID ORDERS ONLY</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C8A24A]" />
        </a>
      </div>
    </div>
  );
};
