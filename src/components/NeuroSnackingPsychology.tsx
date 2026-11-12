"use client";

import React from 'react';
import {
  Brain,
  Volume2,
  Clock,
  Sparkles,
  Zap,
  TrendingDown,
  Smile,
} from 'lucide-react';

export const NeuroSnackingPsychology: React.FC = () => {
  const psychologyFacts = [
    {
      num: '01',
      kicker: 'Acoustic Neuroscience',
      title: 'The "Auditory Dopamine" Trigger',
      icon: Volume2,
      badge: 'Sensory Biology',
      badgeClass: 'hom-badge-orange',
      hook: 'Why your brain is addicted to the crunch sound, not the grease.',
      explanation:
        'Oxford sensory studies prove that human ears are evolutionary hardwired to associate acoustic crunch frequencies (>60dB) with freshness. The crisp crackle triggers dopamine release in the brain’s pleasure center—giving you instant stress relief without needing sugar or palm fat.',
      takeaway: 'Instant oral sensory reward with 80% fewer calories than potato chips.',
    },
    {
      num: '02',
      kicker: 'Circadian Biology',
      title: 'The 4 PM Cortisol Craving Curve',
      icon: Clock,
      badge: 'Hormone Science',
      badgeClass: 'hom-badge-green',
      hook: 'Why you crave salty crunch every afternoon at your desk.',
      explanation:
        'Between 3 PM and 5 PM, daily circadian cortisol shifts spike cravings for salt and crunch to combat mental fatigue. While fried chips cause an insulin spike followed by sluggish brain fog, Makhana has a low glycemic index (GI 35) and rich magnesium to soothe nerves and maintain razor-sharp focus.',
      takeaway: 'Zero mid-afternoon energy crash or post-snack lethargy.',
    },
    {
      num: '03',
      kicker: 'Behavioral Psychology',
      title: 'Eliminating "Snacker’s Remorse"',
      icon: Smile,
      badge: 'Cognitive Ease',
      badgeClass: 'hom-badge-orange',
      hook: 'How post-snack guilt secretly drains your willpower.',
      explanation:
        'Psychological research shows that unconscious snacking guilt increases stress and leads to binge eating cycles. Because Mithila Naturale contains 0% palm oil, 0% trans fat, and 9.7g natural plant protein, your subconscious registers zero regret, keeping your mindset positive and clean.',
      takeaway: 'Pure indulgence with zero cognitive guilt or digestive heaviness.',
    },
    {
      num: '04',
      kicker: 'Volumetric Psychology',
      title: 'The Visual Satiety Principle',
      icon: TrendingDown,
      badge: 'Appetite Control',
      badgeClass: 'hom-badge-green',
      hook: 'Tricking your stomach into feeling full on 105 calories.',
      explanation:
        'The human brain judges satiety by the visual volume of a portion. A 30g serving of popped jumbo makhana fills an entire large ceramic bowl, triggering natural leptin hormones (fullness signaling) while contributing just ~105 clean calories.',
      takeaway: 'Maximum physical bowl volume with minimal caloric density.',
    },
    {
      num: '05',
      kicker: 'Mindful Eating',
      title: 'The 40% Natural Pacing Effect',
      icon: Zap,
      badge: 'Binge Prevention',
      badgeClass: 'hom-badge-orange',
      hook: 'Why individual lotus seeds end unconscious shovel-eating.',
      explanation:
        'Unlike flat potato chips or popcorn grabbed by the handful, jumbo 6+ soot lotus kernels are eaten individually. This slows hand-to-mouth pacing by ~40%, allowing your stomach’s 20-minute fullness signal to reach the brain before you overeat.',
      takeaway: 'Natural portion control without restrictive calorie counting.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Brain className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>The Psychology of Snacking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A]">
            Why Your Brain Craves the Crunch
          </h2>
          <div className="hom-title-underline-orange" />

          <p className="text-[#555555] text-sm sm:text-base font-medium pt-2">
            Backed by neuroscience and sensory food biology. A snack engineered for dopamine, focus, and zero regret.
          </p>
        </div>

        {/* 5 Behavioral Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {psychologyFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={idx}
                className="hom-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number, Kicker & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl font-black text-[#1F5C4A] tabular-nums">
                        {fact.num}
                      </span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#777777]">
                        {fact.kicker}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#F0F7F4] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#1F5C4A]" />
                    </div>
                  </div>

                  {/* Fact Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A1A] tracking-tight group-hover:text-[#1F5C4A] transition-colors">
                    {fact.title}
                  </h3>

                  {/* Hook */}
                  <p className="text-xs font-bold text-[#FF7A00] mt-1 italic">
                    &ldquo;{fact.hook}&rdquo;
                  </p>

                  {/* Scientific Explanation */}
                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed mt-3 font-medium">
                    {fact.explanation}
                  </p>
                </div>

                {/* Bottom Key Benefit Pill */}
                <div className="pt-4 mt-6 border-t border-[#F5ECE0] flex items-start gap-2 bg-[#F9F6F0] p-3 rounded-xl border border-[#EDE2D5]">
                  <Sparkles className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-[#1A1A1A] leading-snug">
                    <strong className="text-[#FF7A00]">Neuro Benefit:</strong> {fact.takeaway}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Callout Card: Brain vs. Junk Snack Comparison */}
          <div className="hom-card p-6 sm:p-7 bg-[#1F5C4A] text-white flex flex-col justify-between border-[#1F5C4A] shadow-xl md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FFB872]">
                  The Snacking Verdict
                </span>
                <Brain className="w-5 h-5 text-[#FFB872]" />
              </div>

              <h3 className="text-xl font-extrabold text-white tracking-tight">
                Clean Dopamine vs. False Sugar Highs
              </h3>

              <div className="space-y-2.5 text-xs font-semibold">
                <div className="flex items-center justify-between pb-2 border-b border-white/20">
                  <span className="text-emerald-100">Potato Chips &amp; Puffs</span>
                  <span className="text-rose-300 font-bold">Insulin Crash · Brain Fog</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/20">
                  <span className="text-emerald-100">Processed Biscuits</span>
                  <span className="text-rose-300 font-bold">Sugar Spike · Rapid Hunger</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-white font-extrabold">Mithila Makhana</span>
                  <span className="text-[#FFB872] font-black">Clean Focus · Low GI (35)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 text-center">
              <a
                href="#purchase"
                className="inline-block px-6 py-2.5 bg-white text-[#1F5C4A] font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md hover:bg-[#FFE8D6] transition-colors"
              >
                Choose Your Batch &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
