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
        'If your pouch doesn’t deliver that signature airy, delicate wood-fire crunch on every single bite, we refund 100% of your money. No return shipping required.',
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
        'Certified by the Government of India. Harvested exclusively from ancestral wetland ponds in Mithila, Bihar. Only top 10% 6+ soot jumbo seeds qualify.',
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
        'Unlike supermarket brands fried in hydrogenated palm fat, we slow-roast purely in cold-pressed extra-virgin olive oil with hand-milled pink Himalayan salt.',
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
        'Triple-sifted for zero hard husks. Zero chemical sulfur bleaching, zero synthetic colors, and zero artificial preservatives. Clean, gluten-free superfood.',
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
        'Pay with Cash or UPI only when your package arrives at your door. Dispatched in nitrogen-flushed multilayer barrier pouches to lock in harvest freshness.',
      statLabel: 'Nationwide Reach',
      statValue: '19,000+ PIN Codes',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>Uncompromised Quality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A]">
            100% Trusted Guarantees
          </h2>
          <div className="hom-title-underline" />

          <p className="text-[#555555] text-sm sm:text-base font-medium pt-2">
            Every pouch is backed by our ironclad taste, purity, and doorstep promises.
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
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${card.badgeClass}`}>
                      {card.badge}
                    </span>
                    <div className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A1A] tracking-tight group-hover:text-[#1F5C4A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed mt-2.5 font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Proof Strip */}
                <div className="pt-4 mt-6 border-t border-[#F5ECE0] flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-semibold">{card.statLabel}</span>
                  <span className="font-black text-[#1F5C4A] text-sm tracking-wide">
                    {card.statValue}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Founder Promise */}
          <div className="hom-card p-6 sm:p-7 bg-[#1F5C4A] text-white flex flex-col justify-between border-[#1F5C4A] shadow-xl md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-[#FFE8D6]">
                  The Freshness Seal
                </span>
                <Lock className="w-4 h-4 text-[#FFB872]" />
              </div>

              <h3 className="text-xl font-extrabold text-white tracking-tight">
                Fresh-Harvest Batch Guarantee
              </h3>
              <p className="text-xs sm:text-[13px] text-emerald-100/90 leading-relaxed mt-2.5 font-medium">
                Every pouch shipped this week was popped from the latest seasonal harvest. No old warehouse stock, no soft crunch.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="text-emerald-200 font-semibold">Active Batch</span>
              <span className="font-black text-[#FFB872] tracking-wider font-mono">
                MN-NOV-2026-GI
              </span>
            </div>
          </div>
        </div>

        {/* Quick Horizontal Trust Ribbon */}
        <div className="mt-12 bg-white rounded-2xl border border-[#F0E5D8] p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-[#333333]">
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
            <RotateCcw className="w-4 h-4 text-[#FF7A00] shrink-0" />
            <span>7-Day 100% Refund Policy</span>
          </div>
        </div>

      </div>
    </section>
  );
};
