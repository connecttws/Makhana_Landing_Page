"use client";

import React from 'react';
import { ArrowUpRight, Leaf, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

const STANDARDS = [
  {
    num: '01',
    category: 'ORIGINS',
    title: 'Rooted in Bihar',
    description: "Inspired by India's traditional makhana-growing communities and their generations of ancestral wetland know-how.",
    bgTint: 'bg-[#FDFBF7]',
    borderTint: 'border-[#F0E8DD]',
    icon: Leaf,
    iconColor: 'text-[#8C5338]',
  },
  {
    num: '02',
    category: 'QUALITY',
    title: 'Selected with care',
    description: 'Attention to sourcing, grading (Grade 6+ Soot), and roasting so every batch meets our crispness promise.',
    bgTint: 'bg-[#FAF6F0]',
    borderTint: 'border-[#EFE5D6]',
    icon: ShieldCheck,
    iconColor: 'text-[#1F5C4A]',
  },
  {
    num: '03',
    category: 'VARIETY',
    title: 'Raw to roasted',
    description: 'Versatile raw makhana and flavour-packed jars for different moods and thoughtful snack breaks.',
    bgTint: 'bg-[#F7F1E8]',
    borderTint: 'border-[#EBDDCB]',
    icon: Sparkles,
    iconColor: 'text-[#C8A24A]',
  },
  {
    num: '04',
    category: 'EXPERIENCE',
    title: 'Packed thoughtfully',
    description: 'Made for sharing, gifting and those everyday snack breaks worth looking forward to.',
    bgTint: 'bg-[#F2F6F3]',
    borderTint: 'border-[#DFEAE2]',
    icon: HeartHandshake,
    iconColor: 'text-[#2D735D]',
  },
];

export const HomStandardCare: React.FC = () => {
  return (
    <section id="our-story" className="py-16 sm:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header matching House of Makhana */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 space-y-3">
          
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#965E44]">
            <span className="w-2 h-2 rounded-full bg-[#965E44]" />
            <span>THE HOM STANDARD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#111111] tracking-[-0.03em] leading-tight">
            A little more care in <span className="font-serif italic font-normal text-[#965E44]">every crunch.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B635C] font-normal leading-relaxed pt-1">
            Four things we believe make good makhana worth sharing.
          </p>
        </div>

        {/* 4-Pillar Grid with individual soft pastel tints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {STANDARDS.map((std) => {
            const IconComponent = std.icon;
            return (
              <div
                key={std.num}
                className={`p-7 sm:p-8 rounded-[28px] ${std.bgTint} border ${std.borderTint} flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
              >
                <div>
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#965E44]">
                      {std.num} / {std.category}
                    </span>
                  </div>

                  {/* Icon Box matching live site */}
                  <div className="w-13 h-13 rounded-2xl bg-white border border-[#EBE4D8] shadow-2xs flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className={`w-6 h-6 ${std.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#1F5C4A] transition-colors leading-snug">
                    {std.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed font-normal mt-3">
                    {std.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link matching live site */}
        <div className="mt-12 text-center">
          <a
            href="#pokhars-story"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#965E44] border-b-2 border-[#965E44] pb-0.5 hover:text-[#1F5C4A] hover:border-[#1F5C4A] transition-colors cursor-pointer group"
          >
            <span>Get to know HOM</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
