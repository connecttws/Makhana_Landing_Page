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
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A]">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
            <span>Select Your Makhana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A]">
            Choose Your Favorite Batch
          </h2>
          <div className="hom-title-underline" />
          <p className="text-[#555555] text-sm sm:text-base font-medium pt-2">
            Grade 6+ Soot Jumbo Kernels · Slow-roasted in extra-virgin Spanish olive oil &amp; rock salt.
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
              <div className="absolute top-4 left-4 bg-[#1F5C4A] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                {PRODUCT_IMAGES[activeImageIndex].label}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-3">
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
            <div className="p-4 bg-white rounded-2xl border border-[#F0E5D8] grid grid-cols-3 gap-3 text-center text-xs text-[#333333] shadow-xs font-semibold">
              <div>
                <p className="font-extrabold text-[#1F5C4A] text-sm">12 Months</p>
                <p className="text-[11px] text-[#666666] font-medium">Nitrogen-Fresh Seal</p>
              </div>
              <div className="border-x border-[#F0E5D8]">
                <p className="font-extrabold text-[#1F5C4A] text-sm">0% Palm Oil</p>
                <p className="text-[11px] text-[#666666] font-medium">Spanish Olive Oil</p>
              </div>
              <div>
                <p className="font-extrabold text-[#1F5C4A] text-sm">GI Tag #842</p>
                <p className="text-[11px] text-[#666666] font-medium">Mithila Protected Origin</p>
              </div>
            </div>
          </div>

          {/* Product Purchasing Box Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[24px] border border-[#F0E5D8] shadow-[0_10px_35px_rgba(0,0,0,0.06)] space-y-6">
            
            {/* Header Lockup */}
            <div className="space-y-2 border-b border-[#F5ECE0] pb-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#FF7A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                  <span className="text-xs font-black text-[#1A1A1A] ml-1">4.9/5</span>
                  <span className="text-xs text-[#777777] font-normal">(1,482 reviews)</span>
                </div>
                <span className="text-[11px] font-black uppercase text-[#1F5C4A] bg-[#DBE9E0] px-3 py-1 rounded-full">
                  Fresh Batch in Stock
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                Mithila Jumbo Fox Nuts
              </h3>

              {/* Dynamic Price Calculation */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-3xl sm:text-4xl font-black text-[#1F5C4A] tabular-nums tracking-tight">
                  ₹{totalPrice}
                </span>
                <span className="text-lg text-[#888888] line-through tabular-nums font-semibold">
                  ₹{originalTotalPrice}
                </span>
                <span className="text-xs font-black text-[#D9480F] bg-[#FFE8D6] px-3 py-1 rounded-full uppercase tracking-wide tabular-nums">
                  You Save ₹{totalSavings}
                </span>
              </div>
              <p className="text-xs text-[#777777] font-medium">Inclusive of all taxes · Free delivery on orders over ₹499</p>
            </div>

            {/* Pack Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#1A1A1A] uppercase tracking-wider">
                  1. Select Pack Size
                </span>
                <span className="text-[#FF7A00] font-bold">{activePack.weightLabel}</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {PACK_OPTIONS.map((pack) => {
                  const isSelected = pack.id === selectedPackId;
                  const savings = pack.originalPrice - pack.discountedPrice;
                  return (
                    <button
                      key={pack.id}
                      onClick={() => onPackChange(pack.id)}
                      className={`relative p-3.5 rounded-2xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#1F5C4A] bg-[#F0F7F4] shadow-xs'
                          : 'border-[#F0E5D8] bg-[#FFF8F1]/40 hover:bg-[#FFF8F1] hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-[#1F5C4A] bg-[#1F5C4A]'
                              : 'border-stone-400 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-[#1A1A1A]">
                            {pack.name}{' '}
                            <span className="text-xs font-medium text-[#666666]">
                              ({pack.weightLabel})
                            </span>
                          </p>
                          <p className="text-xs text-[#FF7A00] font-bold">{pack.badge}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-black text-[#1F5C4A] tabular-nums">
                          ₹{pack.discountedPrice}
                        </p>
                        <p className="text-xs text-[#1F5C4A] font-bold">Save ₹{savings}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flavor / Roast Variant Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-[#1A1A1A] uppercase tracking-wider">
                  2. Choose Roast Flavor
                </span>
                <span className="text-[#FF7A00] font-bold">{activeFlavor.notes}</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {FLAVOR_OPTIONS.map((flavor) => {
                  const isSelected = flavor.id === selectedFlavorId;
                  return (
                    <button
                      key={flavor.id}
                      onClick={() => onFlavorChange(flavor.id)}
                      className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#1F5C4A] bg-[#F0F7F4] shadow-xs'
                          : 'border-[#F0E5D8] bg-[#FFF8F1]/20 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs sm:text-sm font-extrabold text-[#1A1A1A]">
                          {flavor.name}
                        </p>
                        {isSelected && (
                          <span className="text-[10px] font-black uppercase text-[#1F5C4A] bg-[#DBE9E0] px-2.5 py-0.5 rounded-full">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#666666] font-medium mt-0.5 leading-snug">
                        {flavor.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Buy Buttons */}
            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#1A1A1A] uppercase tracking-wider">
                  3. Quantity
                </span>
                <div className="flex items-center border-2 border-[#1F5C4A]/30 rounded-full bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="px-4 py-1.5 text-[#1F5C4A] hover:bg-[#F0F7F4] disabled:opacity-30 cursor-pointer font-black transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-black text-[#1A1A1A] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => onQuantityChange(quantity + 1)}
                    className="px-4 py-1.5 text-[#1F5C4A] hover:bg-[#F0F7F4] cursor-pointer font-black transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons with House of Makhana Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={onAddToCart}
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-extrabold text-[#1F5C4A] bg-white border-2 border-[#1F5C4A] rounded-full hover:bg-[#F0F7F4] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs uppercase tracking-wider"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={onBuyNow}
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer rounded-full shadow-lg uppercase tracking-wider"
                >
                  <Zap className="w-4 h-4 fill-[#FFB872] text-[#FFB872]" />
                  <span>Buy Now · ₹{totalPrice}</span>
                </button>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 border-t border-[#F5ECE0] space-y-2 text-xs text-[#444444] font-medium">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span><strong>Fast Dispatch:</strong> Dispatched in 24 hours via Express Air.</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#1F5C4A] shrink-0" />
                <span><strong>100% Crisp Guarantee:</strong> 100% refund if not completely crunchy.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5C4A] shrink-0" />
                <span><strong>Safe Delivery:</strong> Cash on Delivery (COD) &amp; Instant UPI accepted.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
