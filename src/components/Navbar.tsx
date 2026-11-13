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
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-2 sm:py-2.5 lg:py-2.5">
        {/* Brand Wordmark in Fine Luxury Typography */}
        <a
          href="#"
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-[#1F5C4A] flex items-center justify-center text-white font-bold text-sm shadow-xs">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1F5C4A] leading-none">
              MITHILA NATURALE
            </span>
            <span className="text-[9.5px] uppercase tracking-widest text-[#E65100] font-semibold mt-0.5">
              Premium Jumbo Makhana
            </span>
          </div>
        </a>

        {/* Navigation Links in Clean Refined Font */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#444444]">
          <a
            href="#collection"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            All Products
          </a>
          <a
            href="#purchase"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Custom Packs
          </a>
          <a
            href="#psychology"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap flex items-center gap-1 text-[#E65100]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E65100]" />
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
            className="relative p-2 rounded-full text-[#1F5C4A] hover:bg-[#EBE3D7] transition-colors cursor-pointer border border-[#F0E5D8]"
            aria-label={`View Shopping Bag (${cartItemCount} items)`}
          >
            <ShoppingBag className="w-4.5 h-4.5 text-[#1F5C4A]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-[10px] font-bold text-white bg-[#E65100] rounded-full tabular-nums shadow-xs">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCheckout}
            className="px-5 py-2 sm:px-5.5 sm:py-2 text-xs font-semibold text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer rounded-full shadow-sm uppercase tracking-wider"
          >
            <span className="hidden xs:inline">Quick </span>Checkout
          </button>
        </div>
      </div>
    </header>
  );
};
