"use client";

import React, { useState } from 'react';
import { ShoppingBag, Check, Zap, Sparkles } from 'lucide-react';

interface HomSignatureFlavorsProps {
  onAddToCart: (packId: string, flavorId: string) => void;
  onQuickBuy: (packId: string, flavorId: string) => void;
}

const SIGNATURE_FLAVORS = [
  {
    id: 'salt-pepper',
    name: 'Himalayan Salt & Pepper',
    tagline: 'A classic balance of bold pepper and subtle pink salt',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_salt_pepper.png',
    badge: 'Classic Balance',
    packId: 'flavor-single',
    flavorId: 'himalayan-salt',
  },
  {
    id: 'peri-peri',
    name: 'Peri Peri',
    tagline: 'Fiery and flavorful with a bold, peppery paprika kick',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_peri_peri.png',
    badge: 'Fiery Kick',
    packId: 'flavor-single',
    flavorId: 'peri-peri',
  },
  {
    id: 'cream-onion',
    name: 'Cream & Onion',
    tagline: 'Smooth, creamy delight with a savory toasted onion twist',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_cream_onion.png',
    badge: 'Smooth & Savory',
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
    badge: 'Tangy Desi Spice',
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
    badge: 'Garden Mint',
    packId: 'flavor-single',
    flavorId: 'pudina-spiced',
  },
];

export const HomSignatureFlavors: React.FC<HomSignatureFlavorsProps> = ({
  onAddToCart,
  onQuickBuy,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (flavor: typeof SIGNATURE_FLAVORS[0]) => {
    onAddToCart(flavor.packId, flavor.flavorId);
    setAddedId(flavor.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="signature-flavors" className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <p className="text-xs sm:text-[14px] uppercase tracking-[0.12em] font-semibold text-[#1F5C4A]">
            Swipe to explore taste + innovation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#111111] tracking-tight leading-tight">
            Our Signature Flavors
          </h2>
          <p className="text-xs sm:text-sm text-[#6B635C] font-normal leading-relaxed">
            Slow-roasted in pure Spanish olive oil with hand-ground spices. Zero palm oil, 100% crunch.
          </p>
          <div className="w-12 h-1 bg-[#1F5C4A] mx-auto rounded-full mt-3" />
        </div>

        {/* 5-Column Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SIGNATURE_FLAVORS.map((flavor) => {
            const isAdded = addedId === flavor.id;

            return (
              <div
                key={flavor.id}
                className="group relative rounded-[20px] bg-white border border-[#F0E5D8] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Image container */}
                <div className="relative aspect-[4/5] p-4 flex items-center justify-center bg-stone-50/70 overflow-hidden">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500"
                  />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
                      {flavor.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col flex-1 justify-between bg-white border-t border-[#F5ECE0]">
                  <div className="space-y-1 mb-3">
                    <h3 className="text-base font-semibold text-[#111111] group-hover:text-[#1F5C4A] transition-colors leading-snug">
                      {flavor.name}
                    </h3>
                    <p className="text-[11px] text-[#6B635C] font-normal line-clamp-2 leading-relaxed">
                      {flavor.tagline}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-[#F5ECE0]">
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-bold text-[#111111] tabular-nums">
                        Rs. {flavor.price}.00
                      </span>
                      <span className="text-xs text-stone-400 line-through tabular-nums">
                        Rs. {flavor.regularPrice}.00
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(flavor)}
                      className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#1F5C4A] bg-[#FFF8F1] border border-[#1F5C4A] rounded-full hover:bg-[#1F5C4A] hover:text-white transition-all flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
