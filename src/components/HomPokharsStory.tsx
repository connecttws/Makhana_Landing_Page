"use client";

import React from 'react';
import { ArrowUpRight, CheckCircle2, Play } from 'lucide-react';

export const HomPokharsStory: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Video / Media Creative Banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[24px] overflow-hidden bg-stone-900 border border-[#F0E5D8] shadow-xl group aspect-[16/10]">
              <img
                src="/images/hom/video_thumbnail.jpg"
                alt="Behind the Crunch — Mithila Pokhars"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />

              {/* Dark subtle overlay */}
              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/95 text-[#1F5C4A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer pl-1">
                  <Play className="w-6 h-6 fill-[#1F5C4A]" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl text-white flex items-center justify-between text-xs">
                <span className="font-semibold tracking-wide">Behind the Crunch · Mithila Harvest</span>
                <span className="text-[11px] text-stone-300">Watch the craft</span>
              </div>
            </div>
          </div>

          {/* Right: Farmer Impact & Origin Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-[#1F5C4A] bg-[#DBE9E0] px-3.5 py-1 rounded-full inline-block">
                DIRECT FARM IMPACT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#111111] tracking-tight leading-tight">
                From the Pokhars of Bihar, to Your Home
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
              House of Makhana sources directly from Mallah farmers in Bihar with no middlemen, ensuring fair prices and sustainable wetland farming practices that benefit the entire community.
            </p>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#F0E5D8] text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#1F5C4A] tabular-nums">50+</p>
                <p className="text-xs font-semibold text-stone-700 mt-1">Pokhars Mapped</p>
                <p className="text-[10px] text-stone-400 mt-0.5">Northern Bihar</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E5D8] text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#1F5C4A] tabular-nums">100%</p>
                <p className="text-xs font-semibold text-stone-700 mt-1">Direct Sourcing</p>
                <p className="text-[10px] text-stone-400 mt-0.5">Zero middlemen</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E5D8] text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#C8A24A] tabular-nums">Fair</p>
                <p className="text-xs font-semibold text-stone-700 mt-1">Price Guarantee</p>
                <p className="text-[10px] text-stone-400 mt-0.5">For Mallah farmers</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#choose-makhana"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1F5C4A] hover:bg-[#164638] rounded-full transition-all cursor-pointer shadow-md uppercase tracking-wider"
              >
                <span>Learn Our Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFB872]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
