"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingBag, Check, Zap, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

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
    tagline: 'Minty, crunchy, and healthy makhana snack',
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

export const HomSignatureFlavors: React.FC<HomSignatureFlavorsProps> = ({
  onAddToCart,
  onQuickBuy,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const total = SIGNATURE_FLAVORS.length;

  // Responsive items-per-view detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, total - visibleCount);

  // Clamp currentIndex if window resize alters maxIndex
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Gentle auto-sliding timer (advances smoothly every 4 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleAdd = (flavor: typeof SIGNATURE_FLAVORS[0]) => {
    onAddToCart(flavor.packId, flavor.flavorId);
    setAddedId(flavor.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  // Touch swipe support with vertical scroll preservation (touch-action: pan-y)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Safe percentage offset for translation
  const translatePercent = currentIndex * (100 / visibleCount);

  return (
    <section
      id="signature-flavors"
      className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] overflow-hidden w-full max-w-full"
      style={{ contain: 'paint' }}
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
          <div className="w-10 h-0.5 bg-[#C8A24A] mx-auto rounded-full mt-2" />
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative max-w-6xl mx-auto overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Track with Hardware-Accelerated Sliding */}
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translate3d(-${translatePercent}%, 0, 0)`,
            }}
          >
            {SIGNATURE_FLAVORS.map((flavor, index) => {
              const isAdded = addedId === flavor.id;
              // Highlight the center/active card
              const isCenterCard =
                visibleCount === 3
                  ? index === currentIndex + 1
                  : index === currentIndex;

              return (
                <div
                  key={flavor.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 sm:px-3.5"
                >
                  <div
                    className={`h-full rounded-[24px] bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                      isCenterCard
                        ? 'border-[#1F5C4A] shadow-xl border-t-4 border-t-[#1F5C4A]'
                        : 'border-[#E8DFD3] shadow-sm hover:shadow-md hover:border-[#1F5C4A]/40'
                    }`}
                  >
                    {/* Top Image Frame matching live House of Makhana screenshot */}
                    <div className="p-4 sm:p-5 pb-0">
                      <div className="relative aspect-[16/11] overflow-hidden rounded-[18px] bg-[#FAF5EE] flex items-center justify-center p-3">
                        <img
                          src={flavor.image}
                          alt={flavor.name}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 select-none"
                          draggable={false}
                          loading="lazy"
                        />

                        {/* Pill Tag */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-wider bg-white/95 text-[#1F5C4A] shadow-xs">
                            {flavor.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between text-center">
                      <div className="space-y-1.5 mb-5">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                          {flavor.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#555555] font-normal leading-relaxed line-clamp-2 max-w-xs mx-auto">
                          {flavor.tagline}
                        </p>
                      </div>

                      {/* Price & Actions */}
                      <div className="pt-4 border-t border-[#F5ECE0] space-y-3">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-xl font-bold text-[#111111] tabular-nums">
                            ₹{flavor.price}.00
                          </span>
                          <span className="text-xs text-stone-400 line-through tabular-nums font-normal">
                            ₹{flavor.regularPrice}.00
                          </span>
                          <span className="text-[10.5px] font-semibold text-[#1F5C4A] bg-[#DBE9E0] px-2 py-0.5 rounded-full">
                            Save ₹50
                          </span>
                        </div>

                        {/* Dual Action Buttons */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
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

        {/* Bottom Navigation matching live House of Makhana */}
        <div className="mt-8 flex items-center justify-center gap-4">
          
          {/* Previous Arrow Button */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white border border-[#D5CBC0] hover:border-[#1F5C4A] hover:text-[#1F5C4A] text-stone-600 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            aria-label="Previous Flavor"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? 'w-6 h-2 bg-[#1F5C4A]'
                    : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white border border-[#D5CBC0] hover:border-[#1F5C4A] hover:text-[#1F5C4A] text-stone-600 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            aria-label="Next Flavor"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Play / Pause indicator */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="ml-2 p-2 rounded-full text-stone-400 hover:text-[#1F5C4A] hover:bg-white transition-colors cursor-pointer"
            title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
            aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
          </button>

        </div>

      </div>
    </section>
  );
};
