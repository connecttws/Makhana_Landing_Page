"use client";

import React, { useState } from 'react';
import { ShoppingBag, Search, User, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenCheckout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F1] border-b border-[#F0E5D8]/80 transition-all font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 lg:px-8 py-3.5">
        
        {/* Brand Logo - clean and uncluttered matching House of Makhana */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src="/images/hom/logo_black.png"
            alt="HOM House of Makhana"
            className="h-7 sm:h-8.5 w-auto object-contain"
          />
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#2A2A2A]">
          <a
            href="#"
            className="px-4 py-1.5 rounded-full bg-[#F5ECE0] text-[#7A4B3A] font-semibold transition-colors"
          >
            Home
          </a>
          <a
            href="#choose-makhana"
            className="hover:text-[#1F5C4A] transition-colors"
          >
            Shop All
          </a>
          <a
            href="#premium-raw"
            className="inline-flex items-center gap-1 hover:text-[#1F5C4A] transition-colors"
          >
            <span>Raw Makhana</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#signature-flavors"
            className="inline-flex items-center gap-1 hover:text-[#1F5C4A] transition-colors"
          >
            <span>Flavoured Makhana</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#mix-and-match"
            className="inline-flex items-center gap-1 hover:text-[#1F5C4A] transition-colors"
          >
            <span>Combos</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#pokhars-story"
            className="hover:text-[#1F5C4A] transition-colors"
          >
            Our Story
          </a>
          <a
            href="#footer"
            className="hover:text-[#1F5C4A] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Utility Icons (Search, User, Shopping Bag) */}
        <div className="flex items-center gap-4 sm:gap-5 shrink-0 text-[#2A2A2A]">
          <button
            type="button"
            className="hover:text-[#1F5C4A] transition-colors cursor-pointer hidden sm:block"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[1.8]" />
          </button>

          <button
            type="button"
            className="hover:text-[#1F5C4A] transition-colors cursor-pointer hidden sm:block"
            aria-label="Account"
          >
            <User className="w-5 h-5 stroke-[1.8]" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative hover:text-[#1F5C4A] transition-colors cursor-pointer p-1"
            aria-label={`Shopping Cart (${cartItemCount} items)`}
          >
            <ShoppingBag className="w-5.5 h-5.5 stroke-[1.8]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4 h-4 px-1 text-[9.5px] font-bold text-white bg-[#1F5C4A] rounded-full tabular-nums shadow-xs">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[#2A2A2A] hover:text-[#1F5C4A] cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#F0E5D8] bg-[#FFF8F1] px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#7A4B3A]"
          >
            Home
          </a>
          <a
            href="#choose-makhana"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#2A2A2A] hover:text-[#1F5C4A]"
          >
            Shop All
          </a>
          <a
            href="#premium-raw"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#2A2A2A] hover:text-[#1F5C4A]"
          >
            Raw Makhana
          </a>
          <a
            href="#signature-flavors"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#2A2A2A] hover:text-[#1F5C4A]"
          >
            Flavoured Makhana
          </a>
          <a
            href="#mix-and-match"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#2A2A2A] hover:text-[#1F5C4A]"
          >
            Combos (Buy 2 Get 1)
          </a>
          <a
            href="#pokhars-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-[#2A2A2A] hover:text-[#1F5C4A]"
          >
            Our Story
          </a>
        </div>
      )}
    </header>
  );
};
