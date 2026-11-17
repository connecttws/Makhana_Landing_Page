"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag, Check } from 'lucide-react';

interface HomHeroBannerProps {
  onQuickAdd: (packId: string, flavorId: string) => void;
  onExplore: () => void;
}

export const HomHeroBanner: React.FC<HomHeroBannerProps> = ({
  onQuickAdd,
  onExplore,
}) => {
  const [showHotspot, setShowHotspot] = useState(false);
  const [added, setAdded] = useState(false);

  const handleHotspotAdd = () => {
    onQuickAdd('raw-pack-2', 'raw-jumbo');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="relative w-full bg-[#FFF8F1] overflow-hidden border-b border-[#F0E5D8]">
      {/* Editorial Hero Visual Banner */}
      <div className="relative w-full min-h-[500px] sm:min-h-[620px] lg:min-h-[720px] flex items-end sm:items-center">
        {/* Background Image */}
        <img
          src="/images/hom/hero_editorial_banner.jpg"
          alt="House of Makhana — Premium Handcrafted Lotus Seeds"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Ambient subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 sm:bg-gradient-to-r sm:from-black/65 sm:via-black/35 sm:to-transparent" />

        {/* Hotspot Pin on the Hero Product */}
        <div className="absolute top-[48%] right-[15%] sm:right-[24%] z-20">
          <button
            onClick={() => setShowHotspot(!showHotspot)}
            className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/95 text-[#1F5C4A] shadow-xl hover:scale-110 transition-transform cursor-pointer"
            aria-label="View featured product"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
            <span className="relative font-bold text-xs">+</span>
          </button>

          {/* Interactive Popover Tag */}
          {showHotspot && (
            <div className="absolute top-10 right-0 sm:left-1/2 sm:-translate-x-1/2 w-64 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-[#F0E5D8] text-left animate-in fade-in zoom-in-95 duration-200 z-30">
              <div className="flex items-center gap-3">
                <img
                  src="/images/hom/prod_raw_pack2.png"
                  alt="Raw Makhana Pack of 2"
                  className="w-12 h-12 object-contain bg-[#FFF8F1] rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#111111]">HOM Premium Raw Makhana</p>
                  <p className="text-xs text-[#1F5C4A] font-semibold">Rs. 749.00 <span className="line-through text-stone-400 text-[10px]">Rs. 1,198.00</span></p>
                </div>
              </div>
              <button
                onClick={handleHotspotAdd}
                className="mt-2.5 w-full py-1.5 px-3 bg-[#1F5C4A] text-white text-[11px] font-semibold rounded-full hover:bg-[#164638] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs uppercase tracking-wider"
              >
                {added ? (
                  <>
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3 h-3" />
                    <span>Quick Add</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Hero Editorial Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 w-full text-white">
          <div className="max-w-xl space-y-4 sm:space-y-5">
            <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#FFE8D6] bg-black/35 backdrop-blur-xs px-3.5 py-1 rounded-full border border-white/20">
              The Pure Good Crunch
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.08] text-white">
              Rooted in Bihar. <br />
              <span className="italic font-normal">Roasted in Olive Oil.</span>
            </h1>

            <p className="text-xs sm:text-sm text-stone-200/90 font-normal leading-relaxed max-w-md">
              Mithila&apos;s ancestral wetland ponds produce 90% of the world&apos;s makhana. We harvest, size-grade, and slow-roast only the largest 6+ soot jumbo kernels.
            </p>

            {/* Pill CTA Buttons matching House of Makhana */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#choose-makhana"
                className="px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#1F5C4A] bg-[#FFF8F1] hover:bg-white rounded-full transition-all cursor-pointer shadow-lg flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>Shop All Makhana</span>
                <ArrowUpRight className="w-4 h-4 text-[#1F5C4A]" />
              </a>

              <a
                href="#premium-raw"
                className="px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-transparent border-2 border-white/80 hover:bg-white/10 rounded-full transition-all cursor-pointer uppercase tracking-wider"
              >
                Explore Raw Packs
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-[11.5px] text-stone-200/80 font-medium">
              <span>• GI Tag #842 Certified</span>
              <span>• 0% Palm Oil</span>
              <span>• Grade 6+ Jumbo Kernels</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

