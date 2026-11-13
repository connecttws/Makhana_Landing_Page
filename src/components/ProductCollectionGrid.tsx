"use client";

import React, { useState } from 'react';
import { ShoppingBag, Star, Sparkles, Check, Zap } from 'lucide-react';
import { CATALOG_PRODUCTS, CatalogProduct } from '../data/product-data';

interface ProductCollectionGridProps {
  onAddToCart: (packId: string, flavorId: string) => void;
  onQuickBuy: (packId: string, flavorId: string) => void;
}

export const ProductCollectionGrid: React.FC<ProductCollectionGridProps> = ({
  onAddToCart,
  onQuickBuy,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'flavored' | 'raw' | 'combo'>('all');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const filteredProducts = CATALOG_PRODUCTS.filter((prod) => {
    if (activeCategory === 'all') return true;
    return prod.category === activeCategory;
  });

  const handleAdd = (prod: CatalogProduct) => {
    onAddToCart(prod.packId, prod.flavorId);
    setAddedProductId(prod.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <section id="collection" className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>Our Signature Lineup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Choose Your <span className="text-[#1F5C4A]">Makhana</span>
          </h2>
          <div className="hom-title-underline" />
          <p className="text-[#555555] text-xs sm:text-sm font-normal pt-2">
            Wood-fire popped <span className="text-[#1F5C4A] font-semibold">Grade 6+ lotus seeds</span>. <span className="text-[#D9480F] font-semibold bg-[#FFF0E5] px-2 py-0.5 rounded-md">0% palm oil</span>. Pure Himalayan crunch.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'all', label: 'All Products (6)' },
            { id: 'flavored', label: 'Flavored Roasted (3)' },
            { id: 'raw', label: 'Pure Raw Jumbo (1)' },
            { id: 'combo', label: 'Combos & Gift Boxes (2)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1F5C4A] text-white shadow-xs'
                  : 'bg-white text-[#444444] border border-[#F0E5D8] hover:border-[#1F5C4A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Product Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((prod) => {
            const isAdded = addedProductId === prod.id;
            return (
              <div
                key={prod.id}
                className="hom-card overflow-hidden flex flex-col justify-between group bg-white"
              >
                <div>
                  {/* Product Photography Container */}
                  <div className="relative aspect-square overflow-hidden bg-stone-100 rounded-t-[20px]">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5">
                      <span
                        className={`px-3 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-wider shadow-xs ${
                          prod.badgeType === 'orange' ? 'hom-badge-orange' : 'hom-badge-green'
                        }`}
                      >
                        {prod.badge}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-[#1A1A1A] flex items-center gap-1 shadow-xs">
                      <Star className="w-3.5 h-3.5 fill-[#FF7A00] text-[#FF7A00]" />
                      <span>{prod.rating}</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-[#777777] font-medium">
                      <span className="uppercase tracking-wider font-semibold text-[#1A1A1A]">{prod.weight}</span>
                      <span className="text-[#1F5C4A] font-semibold bg-[#E8F3EE] px-2 py-0.5 rounded-full text-[11px]">100% Olive Oil</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#1F5C4A] transition-colors leading-snug">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-[#666666] font-normal leading-relaxed">
                      {prod.notes}
                    </p>
                  </div>
                </div>

                {/* Bottom Price & Action Footer */}
                <div className="p-5 pt-0 border-t border-[#F5ECE0] mt-1">
                  <div className="flex items-baseline justify-between pt-3 pb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-[#1F5C4A] tabular-nums">
                        ₹{prod.price}
                      </span>
                      <span className="text-xs text-[#888888] line-through tabular-nums font-normal">
                        ₹{prod.originalPrice}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#D9480F] bg-[#FFE8D6] px-2 py-0.5 rounded-full">
                      Save ₹{prod.originalPrice - prod.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAdd(prod)}
                      className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#1F5C4A] bg-white border-1.5 border-[#1F5C4A] rounded-full hover:bg-[#F0F7F4] active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3] text-[#1F5C4A]" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onQuickBuy(prod.packId, prod.flavorId)}
                      className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-98 transition-all flex items-center justify-center gap-1 cursor-pointer rounded-full shadow-md"
                    >
                      <Zap className="w-3.5 h-3.5 fill-[#FFB872] text-[#FFB872]" />
                      <span>Buy Now</span>
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

