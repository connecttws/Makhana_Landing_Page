import React from 'react';
import { NUTRITION_PER_100G, SNACK_COMPARISON } from '../data/product-data';
import { Heart, Activity, Flame, Shield, Check, X, Sparkles } from 'lucide-react';

export const SuperfoodBenefits: React.FC = () => {
  return (
    <section id="superfood" className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>Nutritional Superpower</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A]">
            Snack Without Compromise
          </h2>
          <div className="hom-title-underline" />

          <p className="text-[#555555] text-sm sm:text-base font-medium pt-2">
            9.7g clean plant protein, low glycemic index (GI 35), and zero trans fat per serving.
          </p>
        </div>

        {/* 6 Macro Nutrition Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {NUTRITION_PER_100G.map((item, idx) => (
            <div
              key={idx}
              className="hom-card p-4 sm:p-5 text-center flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] font-extrabold text-[#1F5C4A] uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-2xl sm:text-3xl font-black text-[#1A1A1A] mt-1.5 tabular-nums">
                  {item.value}
                </p>
              </div>
              <p className="text-[11px] text-[#666666] font-medium mt-2.5 pt-2.5 border-t border-[#F5ECE0] leading-tight">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Health Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="hom-card p-6 space-y-3">
            <div className="w-11 h-11 rounded-full bg-[#FFE8D6] flex items-center justify-center text-[#FF7A00]">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-[#1A1A1A]">
              Low Glycemic Index (GI 35)
            </h3>
            <p className="text-xs text-[#555555] font-medium leading-relaxed">
              Digests smoothly without insulin spikes. Safe for diabetics and optimal for steady workday energy.
            </p>
          </div>

          <div className="hom-card p-6 space-y-3">
            <div className="w-11 h-11 rounded-full bg-[#DBE9E0] flex items-center justify-center text-[#1F5C4A]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-[#1A1A1A]">
              Cardio-Friendly Minerals
            </h3>
            <p className="text-xs text-[#555555] font-medium leading-relaxed">
              Abundant in magnesium and potassium with ultra-low natural sodium, supporting blood pressure balance.
            </p>
          </div>

          <div className="hom-card p-6 space-y-3">
            <div className="w-11 h-11 rounded-full bg-[#FFE8D6] flex items-center justify-center text-[#D9480F]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-[#1A1A1A]">
              Kaempferol Antioxidants
            </h3>
            <p className="text-xs text-[#555555] font-medium leading-relaxed">
              Lotus seed kernels contain natural flavonoid kaempferol, renowned for cellular rejuvenation.
            </p>
          </div>

          <div className="hom-card p-6 space-y-3">
            <div className="w-11 h-11 rounded-full bg-[#DBE9E0] flex items-center justify-center text-[#1F5C4A]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-[#1A1A1A]">
              100% Gluten-Free &amp; Vrat
            </h3>
            <p className="text-xs text-[#555555] font-medium leading-relaxed">
              Zero wheat, zero corn starch, zero maltodextrin. Gentle on digestion and 100% fasting compliant.
            </p>
          </div>
        </div>

        {/* Snack Comparison Table */}
        <div id="nutrition" className="bg-white rounded-[24px] border border-[#F0E5D8] shadow-md overflow-hidden">
          <div className="p-6 border-b border-[#F0E5D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FFF4E8]/60">
            <div>
              <h3 className="text-xl font-black text-[#1A1A1A]">
                Head-to-Head Snack Comparison
              </h3>
              <p className="text-xs text-[#666666] font-medium mt-0.5">
                Standardized per 30g typical serving size.
              </p>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-[#1F5C4A] bg-[#DBE9E0] px-3.5 py-1 rounded-full self-start sm:self-auto">
              🏆 Mithila Naturale Ranked #1 Pure Snack
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FFF8F1] border-b border-[#F0E5D8] text-[#1F5C4A] font-black uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6">Snack (30g)</th>
                  <th className="py-4 px-4 tabular-nums">Calories</th>
                  <th className="py-4 px-4 tabular-nums">Total Fat</th>
                  <th className="py-4 px-4 tabular-nums">Protein</th>
                  <th className="py-4 px-4 tabular-nums">Fiber</th>
                  <th className="py-4 px-4">Glycemic Index</th>
                  <th className="py-4 px-4">Trans Fat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5ECE0] text-[#333333] font-medium">
                {SNACK_COMPARISON.map((row, idx) => (
                  <tr
                    key={idx}
                    className={
                      row.isHero
                        ? 'bg-[#F0F7F4] font-bold text-[#1A1A1A]'
                        : 'hover:bg-[#FFF8F1]'
                    }
                  >
                    <td className="py-4 px-6 flex items-center gap-2">
                      {row.isHero && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1F5C4A] shrink-0" />
                      )}
                      <span className="font-bold">{row.snack}</span>
                      {row.isHero && (
                        <span className="text-[10px] uppercase font-black text-[#1F5C4A] bg-[#DBE9E0] px-2 py-0.5 rounded-full ml-1">
                          Our Choice
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 tabular-nums font-bold text-sm">{row.calories}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{row.fat}</td>
                    <td className="py-4 px-4 tabular-nums text-[#1F5C4A] text-sm font-extrabold">{row.protein}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{row.fiber}</td>
                    <td className="py-4 px-4">{row.gi}</td>
                    <td className="py-4 px-4">
                      {row.transFat === '0%' ? (
                        <span className="text-[#1F5C4A] font-black flex items-center gap-1">
                          <Check className="w-4 h-4 stroke-[3]" /> 0%
                        </span>
                      ) : (
                        <span className="text-rose-600 font-bold flex items-center gap-1">
                          <X className="w-4 h-4 stroke-[2.5]" /> {row.transFat}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
