"use client";

import React, { useState } from 'react';
import { ShoppingBag, Check, Zap, Sparkles, Pause, Play } from 'lucide-react';

interface HomSignatureFlavorsProps {
  onAddToCart: (packId: string, flavorId: string) => void;
  onQuickBuy: (packId: string, flavorId: string) => void;
}

const SIGNATURE_FLAVORS = [
  {
    id: 'cream-onion',
    name: 'Cream & Onion',
    tagline: 'Smooth, creamy delight with a savory toasted onion twist',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_cream_onion.png',
    badge: 'Popular Favorite',
    packId: 'flavor-single',
    flavorId: 'cream-onion',
  },
  {
    id: 'achari-mango',
    name: 'Achari Mango',
    tagline: 'Spicy, tangy, and irresistibly reminiscent of Indian pickles',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_achari_mango.png',
    badge: 'Desi Tangy Spice',
    packId: 'flavor-single',
    flavorId: 'achari-mango',
  },
  {
    id: 'pudina-masala',
    name: 'Pudina Masala',
    tagline: 'Minty, crunchy, and refreshing makhana snack',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_pudina_masala.png',
    badge: 'Garden Fresh',
    packId: 'flavor-single',
    flavorId: 'pudina-spiced',
  },
  {
    id: 'peri-peri',
    name: 'Peri Peri',
    tagline: 'Fiery, smoky crunch seasoned with crushed red paprika kick',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_peri_peri.png',
    badge: 'Fiery Kick',
    packId: 'flavor-single',
    flavorId: 'peri-peri',
  },
  {
    id: 'salt-pepper',
    name: 'Himalayan Salt & Pepper',
    tagline: 'A classic balance of bold crushed pepper and subtle pink salt',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_salt_pepper.png',
    badge: 'Classic Balance',
    packId: 'flavor-single',
    flavorId: 'himalayan-salt',
  },
];

// Duplicate list to achieve continuous, infinite smooth marquee looping
const REPEATED_FLAVORS = [...SIGNATURE_FLAVORS, ...SIGNATURE_FLAVORS];

export const HomSignatureFlavors: React.FC<HomSignatureFlavorsProps> = ({
  onAddToCart,
  onQuickBuy,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);
  const [isManualPaused, setIsManualPaused] = useState(false);

  const handleAdd = (flavor: typeof SIGNATURE_FLAVORS[0], uniqueKey: string) => {
    onAddToCart(flavor.packId, flavor.flavorId);
    setAddedId(uniqueKey);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      id="signature-flavors"
      className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10 sm:mb-12">
        {/* Section Header matching House of Makhana */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F5C4A] tracking-[-1px] leading-tight">
            Our Signature Flavors
          </h2>
          <p className="text-sm sm:text-base text-[#6B635C] font-normal">
            Swipe to explore taste + innovation
          </p>
          <div className="w-10 h-0.5 bg-[#C8A24A] mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Auto Slow Moving Carousel Container with Edge Vignette Masks */}
      <div className="relative w-full overflow-hidden py-3">
        
        {/* Left Ambient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FFF8F1] via-[#FFF8F1]/80 to-transparent z-20" />
        
        {/* Right Ambient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FFF8F1] via-[#FFF8F1]/80 to-transparent z-20" />

        {/* Continuous Gliding Track */}
        <div
          className={`flex gap-6 sm:gap-8 w-max animate-slow-marquee ${
            isManualPaused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {REPEATED_FLAVORS.map((flavor, index) => {
            const uniqueKey = `${flavor.id}-${index}`;
            const isAdded = addedId === uniqueKey;

            return (
              <div
                key={uniqueKey}
                className="w-[310px] sm:w-[380px] lg:w-[410px] shrink-0"
              >
                <div className="h-full group rounded-[26px] bg-white border border-[#EFE9DF] hover:border-[#1F5C4A]/50 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  
                  {/* Top Image Frame (16:10 aspect ratio matching HOM) */}
                  <div className="p-4 sm:p-5 pb-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#FAF5EE]">
                      <img
                        src={flavor.image}
                        alt={flavor.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 select-none"
                        draggable={false}
                        loading="lazy"
                      />

                      {/* Pill Tag */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#1F5C4A] shadow-xs">
                          {flavor.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between text-center">
                    <div className="space-y-2 mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#1F5C4A] transition-colors tracking-tight">
                        {flavor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed line-clamp-2 max-w-sm mx-auto">
                        {flavor.tagline}
                      </p>
                    </div>

                    {/* Price & Actions */}
                    <div className="pt-4 border-t border-[#F5ECE0] space-y-3">
                      <div className="flex items-baseline justify-center gap-2.5">
                        <span className="text-xl font-bold text-[#111111] tabular-nums">
                          ₹{flavor.price}.00
                        </span>
                        <span className="text-xs text-stone-400 line-through tabular-nums font-normal">
                          ₹{flavor.regularPrice}.00
                        </span>
                        <span className="text-[11px] font-semibold text-[#1F5C4A] bg-[#DBE9E0] px-2.5 py-0.5 rounded-full">
                          Save ₹50
                        </span>
                      </div>

                      {/* Dual Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => handleAdd(flavor, uniqueKey)}
                          className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#1F5C4A] bg-[#FFF8F1] border border-[#1F5C4A] rounded-full hover:bg-[#1F5C4A] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onQuickBuy(flavor.packId, flavor.flavorId)}
                          className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F5C4A] hover:bg-[#164638] rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Zap className="w-3.5 h-3.5 fill-current text-[#C8A24A]" />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Bottom Indicator & Pause Toggle */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-8 flex items-center justify-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/90 border border-[#F0E5D8] shadow-xs text-xs text-[#6B635C]">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1F5C4A] opacity-75 ${isManualPaused ? 'hidden' : ''}`} />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F5C4A]" />
          </span>
          <span className="font-medium">
            Auto-moving slow carousel · Hover over any card to pause
          </span>
          <button
            onClick={() => setIsManualPaused(!isManualPaused)}
            className="p-1 rounded-full hover:bg-stone-100 text-[#1F5C4A] transition-colors cursor-pointer ml-1"
            title={isManualPaused ? "Resume auto-movement" : "Pause auto-movement"}
            aria-label={isManualPaused ? "Resume auto-movement" : "Pause auto-movement"}
          >
            {isManualPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
          </button>
        </div>
      </div>

    </section>
  );
};
