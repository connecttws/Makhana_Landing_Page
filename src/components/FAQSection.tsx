"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQ_LIST } from '../data/product-data';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <div className="hom-title-underline" />
          <p className="text-[#555555] text-sm font-medium pt-2">
            Everything you need to know about our sourcing, roasting, and delivery.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="hom-card overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-extrabold text-[#1A1A1A] hover:text-[#1F5C4A] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#FF7A00] shrink-0 stroke-[3]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0 stroke-[2.5]" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F5ECE0] font-medium bg-[#FFFDFB]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
