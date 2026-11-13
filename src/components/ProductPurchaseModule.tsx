"use client";

import React, { useState } from 'react';
import {
  Star,
  Check,
  ShoppingBag,
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/product-data';
import {
  PACK_OPTIONS,
  FLAVOR_OPTIONS,
  getPackById,
  getFlavorById,
} from '../utils/cart-rules';

interface ProductPurchaseModuleProps {
  selectedPackId: string;
  selectedFlavorId: string;
  quantity: number;
  onPackChange: (id: string) => void;
  onFlavorChange: (id: string) => void;
  onQuantityChange: (qty: number) => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export const ProductPurchaseModule: React.FC<ProductPurchaseModuleProps> = ({
  selectedPackId,
  selectedFlavorId,
  quantity,
  onPackChange,
  onFlavorChange,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activePack = getPackById(selectedPackId);
  const activeFlavor = getFlavorById(selectedFlavorId);

  const unitPrice = activePack.discountedPrice;
  const originalUnitPrice = activePack.originalPrice;
  const totalPrice = unitPrice * quantity;
  const originalTotalPrice = originalUnitPrice * quantity;
  const totalSavings = originalTotalPrice - totalPrice;

  return (
    <section id="purchase" className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Lead Kicker & Title */}
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>Select Your Makhana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Choose Your <span className="text-[#1F5C4A]">Favorite Makhana</span>
          </h2>
          <div className="hom-title-underline" />
          <p className="text-[#555555] text-xs sm:text-sm font-normal pt-2">
            Grade 6+ Soot Jumbo Kernels · Wood-fire roasted in <span className="text-[#1F5C4A] font-semibold">Spanish olive oil</span> &amp; <span className="text-[#E65100] font-semibold">rock salt</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main View */}
            <div className="relative aspect-4/3 rounded-[24px] overflow-hidden bg-white border border-[#F0E5D8] shadow-md group">
              <img
                src={PRODUCT_IMAGES[activeImageIndex].src}
                alt={PRODUCT_IMAGES[activeImageIndex].alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 left-4 bg-[#1F5C4A] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
                {PRODUCT_IMAGES[activeImageIndex].label}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-6 gap-2">
              {PRODUCT_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-4/3 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#1F5C4A] shadow-md ring-2 ring-[#1F5C4A]/20 scale-102'
                      : 'border-[#F0E5D8] opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`View ${img.label}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Guarantees bar in soft clean mint */}
            <div className="p-4 bg-white rounded-2xl border border-[#F0E5D8] grid grid-cols-3 gap-3 text-center text-xs text-[#333333] shadow-xs">
              <div>
                <p className="font-semibold text-[#1F5C4A] text-sm">12 Months</p>
                <p className="text-[11px] text-[#666666] font-normal">Nitrogen-Fresh Seal</p>
              </div>
              <div className="border-x border-[#F0E5D8]">
                <p className="font-semibold text-[#1F5C4A] text-sm">0% Palm Oil</p>
                <p className="text-[11px] text-[#666666] font-normal">Spanish Olive Oil</p>
              </div>
              <div>
                <p className="font-semibold text-[#1F5C4A] text-sm">GI Tag #842</p>
                <p className="text-[11px] text-[#666666] font-normal">Mithila Protected Origin</p>
              </div>
            </div>
          </div>

          {/* Product Purchasing Box Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-[24px] border border-[#F0E5D8] shadow-[0_10px_35px_rgba(0,0,0,0.06)] space-y-5">
            
            {/* Header Lockup */}
            <div className="space-y-2 border-b border-[#F5ECE0] pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#FF7A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                  <span className="text-xs font-bold text-[#1A1A1A] ml-1">4.9/5</span>
                  <span className="text-xs text-[#777777] font-normal">(1,482 reviews)</span>
                </div>
                <span className="text-[11px] font-semibold uppercase text-[#1F5C4A] bg-[#DBE9E0] px-3 py-0.5 rounded-full">
                  Fresh Batch in Stock
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                Mithila <span className="text-[#1F5C4A]">Jumbo Fox Nuts</span>
              </h3>

              {/* Dynamic Price Calculation */}
              <div className="flex items-baseline gap-2.5 pt-1">
                <span className="text-3xl font-bold text-[#1F5C4A] tabular-nums tracking-tight">
                  ₹{totalPrice}
                </span>
                <span className="text-base text-[#888888] line-through tabular-nums font-normal">
                  ₹{originalTotalPrice}
                </span>
                <span className="text-xs font-semibold text-[#D9480F] bg-[#FFE8D6] px-2.5 py-0.5 rounded-full uppercase tracking-wide tabular-nums">
                  Save ₹{totalSavings}
                </span>
              </div>
              <p className="text-xs text-[#777777] font-normal">
                Inclusive of all taxes · <span className="text-[#1F5C4A] font-semibold">Free express delivery</span> on orders over ₹499
              </p>
            </div>

            {/* Pack Size Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1A1A1A] uppercase tracking-wider">
                  1. Select Pack Size
                </span>
                <span className="text-[#1F5C4A] font-semibold bg-[#E8F3EE] px-2 py-0.5 rounded-full text-[11px]">
                  {activePack.weightLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {PACK_OPTIONS.map((pack) => {
                  const isSelected = pack.id === selectedPackId;
                  const savings = pack.originalPrice - pack.discountedPrice;
                  return (
                    <button
                      key={pack.id}
                      onClick={() => onPackChange(pack.id)}
                      className={`relative p-3 rounded-xl border-1.5 text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#1F5C4A] bg-[#F0F7F4] shadow-xs'
                          : 'border-[#F0E5D8] bg-[#FFF8F1]/30 hover:border-[#1F5C4A]/50 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-[#1F5C4A] bg-[#1F5C4A]'
                              : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A]">
                            {pack.name}{' '}
                            <span className="text-xs font-normal text-[#666666]">
                              ({pack.weightLabel})
                            </span>
                          </p>
                          {pack.badge && (
                            <p className="text-[11px] text-[#E65100] font-medium">{pack.badge}</p>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-[#1F5C4A] tabular-nums">
                          ₹{pack.discountedPrice}
                        </p>
                        <p className="text-[11px] text-[#D9480F] font-semibold">Save ₹{savings}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flavor / Roast Variant Selection — Direct, Compact Pills with ZERO Paragraphs */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1A1A1A] uppercase tracking-wider">
                  2. Choose Flavor
                </span>
                <span className="text-xs font-medium text-[#1F5C4A] bg-[#DBE9E0] px-2.5 py-0.5 rounded-full">
                  {activeFlavor.shortName || activeFlavor.name}
                </span>
              </div>

              {/* Direct Select Flavor Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {FLAVOR_OPTIONS.map((flavor) => {
                  const isSelected = flavor.id === selectedFlavorId;
                  return (
                    <button
                      key={flavor.id}
                      type="button"
                      onClick={() => {
                        onFlavorChange(flavor.id);
                        if (flavor.id === 'peri-peri') setActiveImageIndex(1);
                        else if (flavor.id === 'pudina-spiced') setActiveImageIndex(2);
                        else if (flavor.id === 'raw-jumbo') setActiveImageIndex(3);
                        else if (flavor.id === 'trio-bundle') setActiveImageIndex(4);
                        else setActiveImageIndex(0);
                      }}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                        isSelected
                          ? 'bg-[#1F5C4A] text-white border-[#1F5C4A] shadow-xs'
                          : 'bg-[#FFF8F1]/60 text-[#333333] border-[#E8DFD5] hover:border-[#1F5C4A] hover:bg-white'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${flavor.colorDot || 'bg-[#1F5C4A]'}`}
                      />
                      <span>{flavor.shortName || flavor.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Buy Buttons */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">
                  3. Quantity
                </span>
                <div className="flex items-center border border-[#1F5C4A]/30 rounded-full bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="px-3.5 py-1 text-[#1F5C4A] hover:bg-[#F0F7F4] disabled:opacity-30 cursor-pointer font-bold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3.5 py-1 text-sm font-semibold text-[#1A1A1A] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => onQuantityChange(quantity + 1)}
                    className="px-3.5 py-1 text-[#1F5C4A] hover:bg-[#F0F7F4] cursor-pointer font-bold transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons with Fine House of Makhana Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={onAddToCart}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-[#1F5C4A] bg-white border-1.5 border-[#1F5C4A] rounded-full hover:bg-[#F0F7F4] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs uppercase tracking-wider"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={onBuyNow}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer rounded-full shadow-md uppercase tracking-wider"
                >
                  <Zap className="w-4 h-4 fill-[#FFB872] text-[#FFB872]" />
                  <span>Buy Now · ₹{totalPrice}</span>
                </button>
              </div>
            </div>

            {/* Trust Assurances with Subtle Colored Word Highlights */}
            <div className="pt-3.5 border-t border-[#F5ECE0] space-y-2 text-xs text-[#555555] font-normal">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#E65100] shrink-0" />
                <span><strong className="font-semibold text-[#1A1A1A]">Fast Dispatch:</strong> Dispatched within 24h via Express Air.</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#1F5C4A] shrink-0" />
                <span><strong className="font-semibold text-[#1F5C4A]">100% Crisp Guarantee:</strong> 100% money back if not crunchy.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5C4A] shrink-0" />
                <span><strong className="font-semibold text-[#1A1A1A]">Safe Checkout:</strong> Cash on Delivery (COD) &amp; UPI accepted.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
