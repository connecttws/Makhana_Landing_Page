"use client";

import React from 'react';

interface HomHeroBannerProps {
  onQuickAdd?: (packId: string, flavorId: string) => void;
  onExplore?: () => void;
}

export const HomHeroBanner: React.FC<HomHeroBannerProps> = ({ onExplore }) => {
  return (
    <section className="relative w-full bg-[#F5ECE0] overflow-hidden border-b border-[#F0E5D8]">
      <a
        href="#choose-makhana"
        onClick={onExplore}
        className="block w-full focus:outline-none"
        aria-label="House of Makhana - Biggest Sale of Festive Season: Buy 2 Get 3 On All Products"
      >
        <img
          src="/images/hom/hero_editorial_banner.jpg"
          alt="House of Makhana - Biggest Sale of Festive Season: Buy 2 Get 3 On All Products"
          className="w-full h-auto max-h-[calc(100vh-115px)] object-cover object-center block mx-auto select-none"
          loading="eager"
        />
      </a>
    </section>
  );
};
