"use client";

import React from 'react';
import {
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Truck,
  RotateCcw,
  Leaf,
  Lock,
} from 'lucide-react';

export const TrustGuarantees: React.FC = () => {
  const trustCards = [
    {
      badge: 'Zero-Risk Guarantee',
      badgeClass: 'hom-badge-orange',
      title: '100% Crispness or Full Refund',
      icon: ShieldCheck,
      iconColor: 'text-[#FF7A00]',
      iconBg: 'bg-[#FFE8D6]',
      description:
        'Zero soggy kernels. If you aren’t completely in love with the crunch, 100% refund in 7 days. No returns required.',
      statLabel: 'Refund Policy',
      statValue: '7-Day Zero Hassle',
    },
    {
      badge: 'Protected Terroir',
      badgeClass: 'hom-badge-green',
      title: '100% Mithila GI Tagged (#842)',
      icon: Award,
      iconColor: 'text-[#1F5C4A]',
      iconBg: 'bg-[#DBE9E0]',
      description:
        'Certified Govt. GI #842. Top 10% 6+ soot jumbo seeds from ancestral Mithila wetland ponds.',
      statLabel: 'Geographic Tag',
      statValue: 'GI Cert. No. 842',
    },
    {
      badge: 'Zero Palm Oil',
      badgeClass: 'hom-badge-orange',
      title: '100% Spanish Olive Oil Roast',
      icon: Leaf,
      iconColor: 'text-[#D9480F]',
      iconBg: 'bg-[#FFE8D6]',
      description:
        'Slow-roasted purely in extra-virgin olive oil & pink salt. 0.0% palm oil, 0.0% trans fat.',
      statLabel: 'Trans Fat & Palm Oil',
      statValue: '0.0% Guaranteed',
    },
    {
      badge: 'Food Safety Tested',
      badgeClass: 'hom-badge-green',
      title: '100% Lab Tested & FSSAI Approved',
      icon: CheckCircle2,
      iconColor: 'text-[#1F5C4A]',
      iconBg: 'bg-[#DBE9E0]',
      description:
        'FSSAI Lic. #10423000000841. Triple-sifted, zero chemical bleaching, zero artificial preservatives.',
      statLabel: 'Govt. FSSAI License',
      statValue: '#10423000000841',
    },
    {
      badge: 'Doorstep Trust',
      badgeClass: 'hom-badge-orange',
      title: '100% Safe COD & 24h Air Dispatch',
      icon: Truck,
      iconColor: 'text-[#FF7A00]',
      iconBg: 'bg-[#FFE8D6]',
      description:
        'Pay with Cash or UPI at your doorstep. Dispatched in nitrogen barrier pouches within 24 hours.',
      statLabel: 'Nationwide Reach',
      statValue: '19,000+ PIN Codes',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>Uncompromised Quality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            100% <span className="text-[#1F5C4A]">Trusted Guarantees</span>
          </h2>
          <div className="hom-title-underline" />

          <p className="text-[#555555] text-xs sm:text-sm font-normal pt-2">
            Every pouch is backed by our ironclad <span className="text-[#1F5C4A] font-semibold">taste purity</span> and <span className="text-[#E65100] font-semibold">doorstep promises</span>.
          </p>
        </div>

        {/* 5 High-Impact Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="hom-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Badge and Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${card.badgeClass}`}>
                      {card.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-4 h-4 ${card.iconColor}`} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#1F5C4A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed mt-2 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Proof Strip */}
                <div className="pt-3.5 mt-5 border-t border-[#F5ECE0] flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-medium">{card.statLabel}</span>
                  <span className="font-bold text-[#1F5C4A] text-xs tracking-wide">
                    {card.statValue}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Founder Promise */}
          <div className="hom-card p-6 sm:p-7 bg-[#1F5C4A] text-white flex flex-col justify-between border-[#1F5C4A] shadow-md md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-[#FFE8D6]">
                  The Freshness Seal
                </span>
                <Lock className="w-4 h-4 text-[#FFB872]" />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                Fresh-Harvest Batch Guarantee
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed mt-2 font-normal">
                Every pouch shipped this week was wood-fire popped from the latest seasonal harvest. No old warehouse stock, no soft crunch.
              </p>
            </div>

            <div className="pt-3.5 mt-5 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="text-emerald-200 font-medium">Active Batch</span>
              <span className="font-semibold text-[#FFB872] tracking-wider font-mono text-xs">
                MN-NOV-2026-GI
              </span>
            </div>
          </div>
        </div>

        {/* Quick Horizontal Trust Ribbon */}
        <div className="mt-10 bg-white rounded-2xl border border-[#F0E5D8] p-4 shadow-xs flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-[#333333]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1F5C4A] shrink-0" />
            <span>100% Vegetarian &amp; Vrat Permissible</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1F5C4A] shrink-0" />
            <span>0% Artificial Flavors or MSG</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1F5C4A] shrink-0" />
            <span>Non-GMO &amp; Naturally Gluten-Free</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-[#E65100] shrink-0" />
            <span>7-Day 100% Refund Policy</span>
          </div>
        </div>

      </div>
    </section>
  );
};
