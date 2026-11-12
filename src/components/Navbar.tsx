"use client";

import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenCheckout,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F1]/95 backdrop-blur-md border-b border-[#F0E5D8] transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-3.5 sm:py-4">
        {/* Brand Wordmark in Montserrat */}
        <a
          href="#"
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-[#1F5C4A] flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1F5C4A] leading-none">
              MITHILA NATURALE
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#FF7A00] font-bold mt-0.5">
              Premium Jumbo Makhana
            </span>
          </div>
        </a>

        {/* Navigation Links in Clean Montserrat */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#333333]">
          <a
            href="#purchase"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Shop Flavors
          </a>
          <a
            href="#psychology"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap flex items-center gap-1 text-[#FF7A00]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Snack Psychology</span>
          </a>
          <a
            href="#superfood"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Nutrition
          </a>
          <a
            href="#guarantees"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            100% Trust
          </a>
          <a
            href="#harvest"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Origin &amp; Craft
          </a>
          <a
            href="#reviews"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Reviews
          </a>
        </nav>

        {/* Bag & Checkout Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full text-[#1F5C4A] hover:bg-[#EBE3D7] transition-colors cursor-pointer border border-[#F0E5D8]"
            aria-label={`View Shopping Bag (${cartItemCount} items)`}
          >
            <ShoppingBag className="w-5 h-5 text-[#1F5C4A]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-black text-white bg-[#FF7A00] rounded-full tabular-nums shadow-xs">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCheckout}
            className="px-5 py-2.5 sm:px-6 sm:py-2.5 text-xs font-extrabold text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer rounded-full shadow-md uppercase tracking-wide"
          >
            <span className="hidden xs:inline">Quick </span>Checkout
          </button>
        </div>
      </div>
    </header>
  );
};
