"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Check, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

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
    accentColor: '#E6A123',
  },
  {
    id: 'achari-mango',
    name: 'Achari Mango',
    tagline: 'Spicy, tangy, and irresistibly reminiscent of Indian pickles',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_achari_mango.png',
    badge: 'Desi Spice',
    packId: 'flavor-single',
    flavorId: 'achari-mango',
    accentColor: '#9333EA',
  },
  {
    id: 'pudina-masala',
    name: 'Pudina Masala',
    tagline: 'Minty, crunchy, and healthy makhana snack.',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_pudina_masala.png',
    badge: 'Garden Fresh',
    packId: 'flavor-single',
    flavorId: 'pudina-spiced',
    accentColor: '#10B981',
  },
  {
    id: 'peri-peri',
    name: 'Peri Peri',
    tagline: 'Fiery, smoky crunch seasoned with crushed red paprika kick.',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_peri_peri.png',
    badge: 'Fiery Kick',
    packId: 'flavor-single',
    flavorId: 'peri-peri',
    accentColor: '#EF4444',
  },
  {
    id: 'salt-pepper',
    name: 'Himalayan Salt & Pepper',
    tagline: 'A classic balance of bold crushed pepper and subtle pink salt.',
    price: 249,
    regularPrice: 299,
    weight: '200g Pouch',
    image: '/images/hom/flavor_salt_pepper.png',
    badge: 'Classic Balance',
    packId: 'flavor-single',
    flavorId: 'himalayan-salt',
    accentColor: '#C8A24A',
  },
];

export const HomSignatureFlavors: React.FC<HomSignatureFlavorsProps> = ({
  onAddToCart,
  onQuickBuy,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef<number | null>(null);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, SIGNATURE_FLAVORS.length - visibleCount);

  // Slow smooth auto-play: slides every 3.8 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleAdd = (flavor: typeof SIGNATURE_FLAVORS[0]) => {
    onAddToCart(flavor.packId, flavor.flavorId);
    setAddedId(flavor.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  return (
    <section
      id="signature-flavors"
      className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header matching House of Makhana */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F5C4A] tracking-[-1px] leading-tight">
            Our Signature Flavors
          </h2>
          <p className="text-sm sm:text-base text-[#6B635C] font-normal">
            Swipe to explore taste + innovation
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Track Wrapper */}
          <div className="overflow-hidden py-4 -my-4 px-1 -mx-1">
            <div
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {SIGNATURE_FLAVORS.map((flavor, index) => {
                const isAdded = addedId === flavor.id;
                const isFocused = index === currentIndex + 1 || (visibleCount === 1 && index === currentIndex);

                return (
                  <div
                    key={flavor.id}
                    className="shrink-0 px-3 sm:px-3.5"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div
                      className={`h-full group rounded-[26px] bg-white border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                        isFocused
                          ? 'border-[#1F5C4A]/40 shadow-xl ring-2 ring-[#1F5C4A]/10 scale-[1.01]'
                          : 'border-[#EFE9DF] shadow-md hover:shadow-xl hover:border-stone-300'
                      }`}
                    >
                      {/* Top Visual Image Container matching HOM */}
                      <div className="p-4 sm:p-5 pb-0">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#FAF5EE]">
                          <img
                            src={flavor.image}
                            alt={flavor.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                            draggable={false}
                          />

                          {/* Subtle Tag */}
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#1F5C4A] shadow-xs">
                              {flavor.badge}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
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
                            <span className="text-[11px] font-semibold text-[#1F5C4A] bg-[#DBE9E0] px-2 py-0.5 rounded-full">
                              Save ₹50
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => handleAdd(flavor)}
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

          {/* Carousel Controls: Circular Arrows & Dot Indicators */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-[#2A2A2A] hover:text-[#1F5C4A] transition-all shadow-xs cursor-pointer disabled:opacity-40"
              aria-label="Previous Flavor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {SIGNATURE_FLAVORS.map((_, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-6 h-2 bg-[#1F5C4A]'
                        : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-[#2A2A2A] hover:text-[#1F5C4A] transition-all shadow-xs cursor-pointer disabled:opacity-40"
              aria-label="Next Flavor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
