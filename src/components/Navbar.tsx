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
        {/* Brand Logo matching House of Makhana */}
        <a
          href="#"
          className="group flex items-center gap-2 whitespace-nowrap shrink-0"
        >
          <img
            src="/images/hom/logo_black.png"
            alt="House of Makhana"
            className="h-8 sm:h-9 w-auto object-contain"
            onError={(e) => {
              // fallback if image fails
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#1F5C4A] leading-none">
              HOUSE OF MAKHANA
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#C8A24A] font-semibold mt-0.5">
              Rooted in Bihar · Pure Crunch
            </span>
          </div>
        </a>

        {/* Navigation Links matching House of Makhana */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium tracking-wide text-[#2A2A2A]">
          <a
            href="#"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap text-[#1F5C4A] font-semibold"
          >
            Home
          </a>
          <a
            href="#choose-makhana"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Shop All
          </a>
          <a
            href="#premium-raw"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Raw Makhana
          </a>
          <a
            href="#signature-flavors"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Flavoured Makhana
          </a>
          <a
            href="#mix-and-match"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap text-[#C8A24A] font-semibold"
          >
            Combos (Buy 2 Get 1)
          </a>
          <a
            href="#our-story"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Our Story
          </a>
          <a
            href="#contact"
            className="hover:text-[#1F5C4A] transition-colors whitespace-nowrap"
          >
            Contact
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
