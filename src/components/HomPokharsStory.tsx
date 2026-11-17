"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Play, X, ShieldCheck, Heart, Award, Waves, Sparkles, CheckCircle2 } from 'lucide-react';

export const HomPokharsStory: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="pokhars-story" className="py-16 sm:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16 sm:space-y-24">
        
        {/* Part A: Behind the Crunch (Cinema Media Presentation) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#965E44]">
              <span className="w-2 h-2 rounded-full bg-[#965E44]" />
              <span>THE MITHILA HARVEST FILM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111111] tracking-tight">
              Behind the Crunch
            </h2>
            <p className="text-sm sm:text-base text-[#666666] font-normal max-w-lg mx-auto">
              From lotus water lily seed in Bihar&apos;s ancient pokhars to wood-fire roasted superfood.
            </p>
          </div>

          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-stone-900 border border-[#EBE4D8] shadow-2xl group aspect-[16/9] sm:aspect-[21/9] max-h-[520px]">
            <img
              src="/images/hom/video_thumbnail.jpg"
              alt="Behind the Crunch — Mithila Makhana Craft"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-95"
            />

            {/* Subtle Gradient & Play Button */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-white/95 text-[#1F5C4A] hover:bg-white hover:scale-110 transition-all flex items-center justify-center shadow-2xl cursor-pointer pl-1.5 group/btn"
                aria-label="Play Behind the Crunch Video"
              >
                <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-[#1F5C4A] text-[#1F5C4A] group-hover/btn:scale-105 transition-transform" />
              </button>
            </div>

            {/* Floating Overlay Badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/60 shadow-lg text-xs font-semibold text-[#1F5C4A] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E65100] animate-pulse" />
              <span>Behind the Crunch · 3-Min Origin Documentary</span>
            </div>
          </div>
        </div>

        {/* Part B: From the Pokhars of Bihar, to Your Home (Direct Farm Impact) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#965E44]">
            <span className="w-2 h-2 rounded-full bg-[#965E44]" />
            <span>DIRECT FARM IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#111111] tracking-[-0.03em] leading-tight">
            From the Pokhars of Bihar, <span className="font-serif italic font-normal text-[#965E44]">to Your Home.</span>
          </h2>

          <p className="text-sm sm:text-lg text-[#555555] font-normal leading-relaxed pt-1 max-w-2xl mx-auto">
            House of Makhana sources directly from Mallah farming cooperatives in Bihar with no middlemen — ensuring fair living prices, sustainable wetland ecology, and pure ancestral single-origin crunch.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Metric 1 */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#EBE4D8] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F3EE] mx-auto flex items-center justify-center mb-6 shadow-2xs">
              <Waves className="w-7 h-7 text-[#1F5C4A]" />
            </div>
            <div className="space-y-3">
              <p className="text-4xl sm:text-5xl font-bold text-[#1F5C4A] tracking-tight tabular-nums">
                50+
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                Pokhars Mapped
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Ancestral wetland ponds mapped across Madhubani &amp; Darbhanga, producing 90% of the world&apos;s finest lotus seeds.
              </p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#EBE4D8] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#F7F2EA] mx-auto flex items-center justify-center mb-6 shadow-2xs">
              <ShieldCheck className="w-7 h-7 text-[#965E44]" />
            </div>
            <div className="space-y-3">
              <p className="text-4xl sm:text-5xl font-bold text-[#1F5C4A] tracking-tight tabular-nums">
                100%
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                Direct Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Zero brokers, zero wholesale middlemen. Harvested by indigenous families and graded directly for single-origin freshness.
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#EBE4D8] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between group hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-[#FEF3C7] mx-auto flex items-center justify-center mb-6 shadow-2xs">
              <Heart className="w-7 h-7 text-[#C8A24A]" />
            </div>
            <div className="space-y-3">
              <p className="text-4xl sm:text-5xl font-bold text-[#965E44] tracking-tight tabular-nums">
                Fair Prices
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                For Mallah Farmers
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Guaranteed premium earnings paid directly to farming households, funding clean water and community schools.
              </p>
            </div>
          </div>

        </div>

        {/* 3 Step Farm Craft Highlights Bar */}
        <div className="rounded-[28px] bg-[#FAF6F0] border border-[#EBE4D8] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#EBE4D8]">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#1F5C4A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#111111]">Pond Dive &amp; Seed Collection</h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Skilled Mallah divers harvest thorny gorgon nuts from pond beds before daybreak.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-8 h-8 rounded-full bg-[#1F5C4A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#111111]">Sun Drying &amp; Fire Roasting</h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Natural sun-drying followed by hand-roasting over clay ovens to puff the seeds into jumbo pearls.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-8 h-8 rounded-full bg-[#1F5C4A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#111111]">Grade 6+ Sizing &amp; Nitrogen Seal</h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Only round 6+ soot kernels pass visual inspection, packed in barrier foil to lock in crispness.
              </p>
            </div>
          </div>
        </div>

        {/* Learn Our Story CTA Button */}
        <div className="text-center pt-2">
          <a
            href="#choose-makhana"
            className="inline-flex items-center gap-2 px-9 py-4 text-xs sm:text-sm font-semibold text-white bg-[#1F5C4A] hover:bg-[#164638] rounded-full transition-all cursor-pointer shadow-md hover:shadow-xl uppercase tracking-wider group"
          >
            <span>Learn Our Story</span>
            <ArrowUpRight className="w-4 h-4 text-[#C8A24A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/9] w-full flex items-center justify-center bg-black relative">
              <img
                src="/images/hom/video_thumbnail.jpg"
                alt="Behind the Crunch"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white space-y-3 bg-gradient-to-t from-black/80 via-black/40 to-black/20">
                <span className="w-16 h-16 rounded-full bg-[#1F5C4A] text-white flex items-center justify-center shadow-xl">
                  <Play className="w-7 h-7 fill-white pl-1" />
                </span>
                <p className="text-xl sm:text-3xl font-bold tracking-tight">Behind the Crunch · Harvesting Mithila Makhana</p>
                <p className="text-xs sm:text-sm text-stone-300 max-w-md">
                  Preserving centuries of wetland traditions in Northern Bihar. Direct from source to your table.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-white mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Single Origin · GI Tag #842</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
