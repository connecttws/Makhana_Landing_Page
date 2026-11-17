"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const HomCategoryCards: React.FC = () => {
  return (
    <section id="choose-makhana" className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header matching House of Makhana */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] tracking-[-1.5px] leading-tight">
            Choose Your Makhana
          </h2>
          <div className="w-10 h-0.5 bg-[#C8A24A] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#555555] font-normal">
            Wholesome snacking, roasted in olive oil
          </p>
        </div>

        {/* Two Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Flavored Makhanas */}
          <div className="group relative rounded-[22px] overflow-hidden bg-white border border-[#F0E5D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-100">
              <img
                src="/images/hom/cat_flavored.jpg"
                alt="Flavored Makhanas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#1F5C4A]">
                Roasted in Olive Oil
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight group-hover:text-[#1F5C4A] transition-colors">
                  Flavored Makhanas
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                  Discover our range of deliciously seasoned makhanas with bold, exciting flavors. From Peri-Peri to Himalayan Salt &amp; Pepper.
                </p>
              </div>

              <a
                href="#signature-flavors"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 text-xs sm:text-sm font-semibold text-[#1F5C4A] bg-[#FFF8F1] border border-[#1F5C4A] rounded-full hover:bg-[#1F5C4A] hover:text-white transition-all self-start uppercase tracking-wider cursor-pointer"
              >
                <span>Shop Flavored</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Raw Makhanas */}
          <div className="group relative rounded-[22px] overflow-hidden bg-white border border-[#F0E5D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-100">
              <img
                src="/images/hom/cat_raw.jpg"
                alt="Raw Makhanas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#C8A24A]">
                Grade 6+ Jumbo Seeds
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight group-hover:text-[#1F5C4A] transition-colors">
                  Raw Makhanas
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                  Pure, natural makhanas perfect for healthy snacking or cooking your own culinary creations with pure ghee or air-frying.
                </p>
              </div>

              <a
                href="#premium-raw"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 text-xs sm:text-sm font-semibold text-[#1F5C4A] bg-[#FFF8F1] border border-[#1F5C4A] rounded-full hover:bg-[#1F5C4A] hover:text-white transition-all self-start uppercase tracking-wider cursor-pointer"
              >
                <span>Shop Raw</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
