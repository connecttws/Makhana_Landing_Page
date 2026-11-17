"use client";

import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, Phone, Sparkles } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'all' | 'sourcing' | 'roasting' | 'diet' | 'shipping';
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'sourcing',
    question: 'Where is House of Makhana sourced from, and what makes it special?',
    answer: 'All our makhana is harvested directly from certified indigenous Mallah farmer cooperatives in the wetlands (pokhars) of Madhubani and Darbhanga, Northern Bihar. This region produces 90% of the world’s makhana and holds Govt. GI Tag #842. We strictly grade our harvest to Grade 6+ Soot (the largest, roundest size) and eliminate all bitter black seed coats.',
    highlight: 'Govt. GI Tag #842 Certified Single-Origin',
  },
  {
    id: 'faq-2',
    category: 'roasting',
    question: 'What cooking oils do you use for roasting?',
    answer: 'We roast exclusively in 100% pure Spanish extra virgin olive oil and unadulterated cold-pressed oils. We NEVER use palm oil, hydrogenated fats, artificial flavoring powders, or chemical preservatives. Our raw makhana is completely unroasted and sun-dried, ready for your own ghee or air-fryer recipe.',
    highlight: 'Zero Palm Oil · 100% Olive Oil Roasted',
  },
  {
    id: 'faq-3',
    category: 'diet',
    question: 'Is House of Makhana suitable for fasting (Vrat) and diabetics?',
    answer: 'Yes! Both our raw makhana and Himalayan Salt & Pepper roasted varieties are 100% Satvik and permissible during Navratri, Ekadashi, and Maha Shivratri fasts. With a low glycemic index (GI), zero cholesterol, and rich natural magnesium and calcium, makhana is widely recommended by endocrinologists for blood sugar and weight management.',
    highlight: 'Vrat Permissible & Low Glycemic Index',
  },
  {
    id: 'faq-4',
    category: 'sourcing',
    question: 'What is the shelf life, and how should I store it?',
    answer: 'Our pouches are nitrogen-flushed and sealed in multi-layer barrier foil to lock out moisture and oxygen, providing a 9-month shelf life from the date of manufacture. Once opened, simply zip the pouch tight or transfer to an airtight container in a cool, dry place to maintain maximum crunch.',
    highlight: '9 Months Freshness · Nitrogen Flushed',
  },
  {
    id: 'faq-5',
    category: 'shipping',
    question: 'How does the Buy 2 Get 1 Free offer work?',
    answer: 'Simply add any 3 eligible products (raw packs, flavored pouches, or combos) to your shopping cart. When you reach checkout, the lowest-priced eligible item is automatically discounted to ₹0.00. Free express air shipping applies automatically on all prepaid orders.',
    highlight: 'Auto-Applied at Checkout · Free Express Shipping',
  },
  {
    id: 'faq-6',
    category: 'shipping',
    question: 'How long does delivery take across India?',
    answer: 'We dispatch all orders within 24 hours from our Delhi & Mithila fulfillment centers via premium express couriers (Bluedart, Delhivery, DTDC). Metro deliveries arrive within 2–3 business days, while rest of India takes 4–5 business days with full end-to-end SMS tracking.',
    highlight: '24-Hour Dispatch · End-to-End Tracking',
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header matching House of Makhana */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#965E44]">
            <span className="w-2 h-2 rounded-full bg-[#965E44]" />
            <span>GOT QUESTIONS?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#111111]">
            Frequently Asked <span className="font-serif italic font-normal text-[#965E44]">Questions.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B635C] font-normal leading-relaxed pt-1">
            Everything you need to know about our sourcing, roasting oils, dietary safety, and orders.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'sourcing', label: 'Sourcing & Quality' },
            { id: 'roasting', label: 'Roasting & Oils' },
            { id: 'diet', label: 'Health & Fasting' },
            { id: 'shipping', label: 'Offers & Delivery' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1F5C4A] text-white shadow-xs'
                  : 'bg-white text-[#555555] hover:text-[#1F5C4A] border border-[#EBE4D8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-[22px] transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#FAF7F2] border-[#1F5C4A]/40 shadow-md ring-1 ring-[#1F5C4A]/10'
                    : 'bg-white border-[#EBE4D8] hover:border-stone-300 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? 'text-[#1F5C4A]' : 'text-[#111111] group-hover:text-[#1F5C4A]'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#1F5C4A] text-white rotate-180' : 'bg-[#FAF6F0] text-stone-600 group-hover:bg-[#1F5C4A] group-hover:text-white'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-[13.5px] text-[#555555] leading-relaxed border-t border-[#F0E5D8] space-y-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    {faq.highlight && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EE] text-[11px] font-semibold text-[#1F5C4A]">
                        <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Makhana Concierge Assistance Box */}
        <div className="rounded-[26px] bg-white border border-[#EBE4D8] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#111111]">
              Still have a question about our harvest?
            </h4>
            <p className="text-xs text-stone-500">
              Our direct customer concierge in Delhi &amp; Mithila is available Mon–Sat (10am–7pm).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:care@houseofmakhana.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-stone-300 text-xs font-semibold text-[#2A2A2A] hover:border-[#1F5C4A] hover:text-[#1F5C4A] transition-colors bg-white shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#1F5C4A]" />
              <span>Email Us</span>
            </a>
            <a
              href="https://wa.me/919811240590"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1F5C4A] text-white text-xs font-semibold hover:bg-[#164638] transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
