"use client";

import React from 'react';

const STANDARDS = [
  {
    num: '01',
    category: 'ORIGINS',
    title: 'Rooted in Bihar',
    description: "Inspired by India's traditional makhana-growing communities and their generations of ancestral wetland know-how.",
  },
  {
    num: '02',
    category: 'QUALITY',
    title: 'Selected with care',
    description: 'Rigorous attention to sizing, grading (Grade 6+ Soot), and wood-fire roasting so every batch meets our crispness promise.',
  },
  {
    num: '03',
    category: 'VARIETY',
    title: 'Raw to roasted',
    description: 'Versatile snow-white raw makhana and olive oil-roasted pouches created for healthy snacking anytime.',
  },
  {
    num: '04',
    category: 'PACKAGING',
    title: 'Packed thoughtfully',
    description: 'Nitrogen-flushed multi-layer barrier pouches that preserve cloud-like crispness from our Mithila ponds to your door.',
  },
];

export const HomStandardCare: React.FC = () => {
  return (
    <section id="our-story" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-2">
          <p className="text-xs sm:text-[14px] uppercase tracking-[0.14em] font-semibold text-[#1F5C4A]">
            THE HOM STANDARD
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-[#111111] tracking-[-0.03em] leading-tight">
            A little more care in every crunch.
          </h2>
          <p className="text-xs sm:text-base text-[#6B635C] font-normal leading-relaxed pt-1">
            Four things we believe make good makhana worth sharing.
          </p>
          <div className="w-12 h-1 bg-[#1F5C4A] mx-auto rounded-full mt-3" />
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STANDARDS.map((std) => (
            <div
              key={std.num}
              className="p-7 rounded-[22px] bg-white border border-[#F0E5D8] flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4 border-b border-[#F5ECE0] pb-3">
                  <span className="text-2xl sm:text-3xl font-bold text-[#1F5C4A] tabular-nums">
                    {std.num}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                    {std.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#111111] group-hover:text-[#1F5C4A] transition-colors leading-snug">
                  {std.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal mt-3">
                  {std.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
