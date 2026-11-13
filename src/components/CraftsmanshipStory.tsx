import React from 'react';
import { CRAFT_STEPS } from '../data/product-data';
import { Sparkles } from 'lucide-react';

export const CraftsmanshipStory: React.FC = () => {
  return (
    <section id="harvest" className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Grid: Visual and Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Farm Photography Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[24px] overflow-hidden bg-white border border-[#F0E5D8] shadow-xl group">
              <img
                src="/images/makhana_harvest_source_1794312040995.jpg"
                alt="Pristine freshwater lotus lily ponds in Mithila, Bihar during sunrise"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5C4A]/90 via-[#1F5C4A]/25 to-transparent flex flex-col justify-end p-6 text-white">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#FFB872]">
                  Protected Terroir
                </p>
                <p className="text-xl sm:text-2xl font-black mt-0.5">
                  Mithila Wetland Ecosystem, Bihar
                </p>
                <p className="text-xs text-emerald-100 mt-1 font-medium">
                  GI Certificate No. 842 · Protected Geographic Origin
                </p>
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
                <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
                <span>Heritage &amp; Origin</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Why 90% of the World’s Makhana Comes From <span className="text-[#1F5C4A]">One Sacred Soil</span>
              </h2>
            </div>

            <p className="text-[#444444] text-sm sm:text-base leading-relaxed font-normal">
              Lotus seeds flourish exclusively in the alluvial freshwater oxbow lakes of Mithila in Northern Bihar. Perennial Himalayan silt delivers micronutrients that cannot be replicated anywhere else on earth.
            </p>

            <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-normal">
              We partner directly with Mallah artisan cooperatives in Darbhanga. Only the largest 10% of seeds (<span className="text-[#1F5C4A] font-semibold">Grade 6+ Soot Jumbo</span>) qualify for traditional wood-fire roasting.
            </p>

            <div className="pt-3 grid grid-cols-2 gap-4 border-t border-[#F0E5D8]">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#1F5C4A] tabular-nums">100%</p>
                <p className="text-xs text-[#1F5C4A] font-semibold mt-0.5">Direct Farm Traceability</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#E65100] tabular-nums">0%</p>
                <p className="text-xs text-[#666666] font-semibold mt-0.5">Palm Oil or Chemical Bleach</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Step Craft Sequence */}
        <div className="space-y-5">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E65100]">
              The Wood-Fire Method
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              4 Steps From Lotus Pond to Your Pouch
            </h3>
            <div className="hom-title-underline" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-3">
            {CRAFT_STEPS.map((step) => (
              <div
                key={step.step}
                className="hom-card p-5 sm:p-6 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#1F5C4A] tabular-nums">
                    {step.step}.
                  </span>
                  <h4 className="text-base font-bold text-[#1A1A1A] mt-1.5 group-hover:text-[#1F5C4A] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#555555] mt-1.5 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
