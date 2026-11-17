"use client";

import React, { useState } from 'react';
import { ShoppingBag, Check, Zap, Star } from 'lucide-react';

interface HomFeaturedCollectionProps {
  onAddToCart: (packId: string, flavorId: string) => void;
  onQuickBuy: (packId: string, flavorId: string) => void;
}

const RAW_PRODUCTS = [
  {
    id: 'raw-pack-2',
    name: 'Raw Makhana - Pack of 2',
    weight: '500g Total (2 x 250g)',
    salePrice: 749,
    regularPrice: 1198,
    unitPrice: 'Rs. 1,498/kg',
    badge: 'Sale · 37% OFF',
    image: '/images/hom/prod_raw_pack2.png',
    packId: 'raw-pack-2',
    flavorId: 'raw-jumbo',
    rating: 4.9,
  },
  {
    id: 'raw-pack-5',
    name: 'Raw Makhana - Pack of 5',
    weight: '1250g Total (5 x 250g)',
    salePrice: 1899,
    regularPrice: 2995,
    unitPrice: 'Rs. 1,519/kg',
    badge: 'Best Value · Save ₹1,096',
    image: '/images/hom/prod_raw_pack5.png',
    packId: 'raw-pack-5',
    flavorId: 'raw-jumbo',
    rating: 5.0,
  },
  {
    id: 'raw-single',
    name: 'Premium Raw Makhana',
    weight: '250g Single Pouch',
    salePrice: 399,
    regularPrice: 599,
    unitPrice: 'Rs. 1,596/kg',
    badge: 'Single Pouch',
    image: '/images/hom/prod_raw_single.png',
    packId: 'raw-single',
    flavorId: 'raw-jumbo',
    rating: 4.8,
  },
  {
    id: 'raw-pack-4',
    name: 'Raw Makhana - Pack of 4',
    weight: '1kg Total (4 x 250g)',
    salePrice: 1499,
    regularPrice: 2396,
    unitPrice: 'Rs. 1,499/kg',
    badge: 'Sale · Save ₹897',
    image: '/images/hom/prod_raw_pack4.png',
    packId: 'raw-pack-4',
    flavorId: 'raw-jumbo',
    rating: 4.9,
  },
];

export const HomFeaturedCollection: React.FC<HomFeaturedCollectionProps> = ({
  onAddToCart,
  onQuickBuy,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (p: typeof RAW_PRODUCTS[0]) => {
    onAddToCart(p.packId, p.flavorId);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="premium-raw" className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header matching House of Makhana */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#111111] tracking-[-1.4px] leading-tight">
            Premium Raw Makhana
          </h2>
          <p className="text-xs sm:text-sm text-[#6B635C] font-normal leading-relaxed">
            Everyday essentials, selected for a satisfying crunch. 100% direct from Mithila.
          </p>
          <div className="w-12 h-1 bg-[#1F5C4A] mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {RAW_PRODUCTS.map((prod) => {
            const isAdded = addedId === prod.id;
            const savings = prod.regularPrice - prod.salePrice;

            return (
              <div
                key={prod.id}
                className="group relative rounded-[20px] bg-white border border-[#F0E5D8] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Box */}
                <div className="relative aspect-square p-6 flex items-center justify-center bg-stone-50/60 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Sale Tag Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[11px] font-semibold text-stone-700 shadow-2xs">
                    <Star className="w-3 h-3 fill-[#C8A24A] text-[#C8A24A]" />
                    <span>{prod.rating}</span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white border-t border-[#F5ECE0]">
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                      {prod.weight}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111111] group-hover:text-[#1F5C4A] transition-colors leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-[#6B635C] font-normal">
                      Unit price {prod.unitPrice}
                    </p>
                  </div>

                  {/* Price & Actions */}
                  <div className="space-y-3 pt-2 border-t border-[#F5ECE0]">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-[#111111] tabular-nums">
                          Rs. {prod.salePrice}.00
                        </span>
                        <span className="text-xs text-stone-400 line-through tabular-nums">
                          Rs. {prod.regularPrice}.00
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#1F5C4A]">
                        Save ₹{savings}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => handleAdd(prod)}
                        className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#1F5C4A] bg-[#FFF8F1] border border-[#1F5C4A] rounded-full hover:bg-[#1F5C4A] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
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

                      <button
                        onClick={() => onQuickBuy(prod.packId, prod.flavorId)}
                        className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F5C4A] hover:bg-[#164638] rounded-full transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                      >
                        <Zap className="w-3.5 h-3.5 fill-[#FFB872] text-[#FFB872]" />
                        <span>Buy Now</span>
                      </button>
                    </div>
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
