"use client";

import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Truck,
  Tag,
} from 'lucide-react';
import { CartItem } from '../types';
import {
  getPackById,
  getFlavorById,
  calculateOrderSummary,
  calculateFreeShippingProgress,
  FREE_SHIPPING_THRESHOLD,
} from '../utils/cart-rules';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  couponCode: string;
  onClose: () => void;
  onUpdateQuantity: (packId: string, flavorId: string, newQty: number) => void;
  onRemoveItem: (packId: string, flavorId: string) => void;
  onApplyCoupon: (code: string) => void;
  onRemoveCoupon: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  couponCode,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onApplyCoupon,
  onRemoveCoupon,
  onProceedToCheckout,
}) => {
  const [inputCoupon, setInputCoupon] = useState('');

  if (!isOpen) return null;

  const summary = calculateOrderSummary(items, couponCode);
  const shippingProgress = calculateFreeShippingProgress(summary.subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    onApplyCoupon(inputCoupon.trim());
    setInputCoupon('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-2xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF8F1] shadow-2xl border-l border-[#F0E5D8] flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#F0E5D8] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#1F5C4A]" />
              <h2 className="text-lg font-bold text-[#1A1A1A]">
                Your Shopping Bag ({summary.itemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-500 hover:text-[#1F5C4A] hover:bg-[#F0F7F4] transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#FFF4E8] px-5 py-3 border-b border-[#F0E5D8] text-xs">
            {shippingProgress.isEligible ? (
              <div className="flex items-center gap-1.5 text-[#1F5C4A] font-bold">
                <Truck className="w-4 h-4 text-[#1F5C4A]" />
                <span>You&apos;ve unlocked <strong>FREE Express Delivery</strong>!</span>
              </div>
            ) : (
              <div className="space-y-1.5 font-medium">
                <div className="flex justify-between text-[#333333]">
                  <span>
                    Add <strong className="text-[#1F5C4A] font-black tabular-nums">₹{shippingProgress.amountRemaining}</strong> more for Free Shipping
                  </span>
                  <span className="font-black text-[#FF7A00] tabular-nums">
                    ₹{summary.subtotal} / ₹{FREE_SHIPPING_THRESHOLD}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#F0E5D8] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF7A00] transition-all duration-300 rounded-full"
                    style={{ width: `${shippingProgress.percent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Itemized List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
                <p className="text-base font-black text-[#1A1A1A]">Your bag is empty</p>
                <p className="text-xs text-[#666666] font-medium">
                  Pick a fresh batch of Mithila Makhana to enjoy pure crunch.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white bg-[#1F5C4A] rounded-full hover:bg-[#164638] cursor-pointer"
                >
                  Explore Makhana Packs
                </button>
              </div>
            ) : (
              items.map((item) => {
                const pack = getPackById(item.packId);
                const flavor = getFlavorById(item.flavorId);
                const lineTotal = pack.discountedPrice * item.quantity;

                return (
                  <div
                    key={`${item.packId}-${item.flavorId}`}
                    className="bg-white p-4 rounded-2xl border border-[#F0E5D8] shadow-2xs flex gap-3.5 items-center"
                  >
                    <div className="w-16 h-16 rounded-xl bg-stone-100 overflow-hidden shrink-0 border border-[#F0E5D8]">
                      <img
                        src="/images/hero_makhana_packaging_1794312039925.jpg"
                        alt={pack.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-black text-[#1A1A1A] truncate">
                          {pack.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.packId, item.flavorId)}
                          className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] font-bold text-[#FF7A00] truncate">
                        {flavor.name}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-[#D5CBC0] rounded-full bg-white overflow-hidden">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.packId, item.flavorId, item.quantity - 1)
                            }
                            className="px-2 py-0.5 text-xs text-stone-700 hover:bg-[#F0F7F4] cursor-pointer font-bold"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-black text-[#1A1A1A] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.packId, item.flavorId, item.quantity + 1)
                            }
                            className="px-2 py-0.5 text-xs text-stone-700 hover:bg-[#F0F7F4] cursor-pointer font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-black text-[#1F5C4A] text-sm tabular-nums">
                          ₹{lineTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#F0E5D8] space-y-4">
              
              {/* Coupon Bar */}
              <div className="space-y-1.5">
                {couponCode ? (
                  <div className="flex items-center justify-between p-2.5 bg-[#DBE9E0] rounded-xl text-xs text-[#1F5C4A] font-bold">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#1F5C4A]" />
                      <span>Code: {couponCode}</span>
                    </div>
                    <button
                      onClick={onRemoveCoupon}
                      className="text-stone-500 hover:text-rose-600 text-xs font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 px-3 py-2 border border-[#D5CBC0] rounded-full text-xs bg-[#FFF8F1] outline-none focus:border-[#1F5C4A] uppercase font-bold"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-extrabold text-white bg-[#1F5C4A] rounded-full hover:bg-[#164638] cursor-pointer uppercase tracking-wider"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {summary.couponError && (
                  <p className="text-[11px] text-rose-600 font-bold">{summary.couponError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#444444] border-t border-[#F5ECE0] pt-3 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-black text-[#1A1A1A] tabular-nums text-sm">₹{summary.subtotal}</span>
                </div>

                {summary.bundleSavings > 0 && (
                  <div className="flex justify-between text-[#1F5C4A] font-bold">
                    <span>Bundle Discount</span>
                    <span className="tabular-nums text-sm">-₹{summary.bundleSavings}</span>
                  </div>
                )}

                {summary.discountAmount > 0 && (
                  <div className="flex justify-between text-[#FF7A00] font-bold">
                    <span>Coupon ({summary.appliedCode})</span>
                    <span className="tabular-nums text-sm">-₹{summary.discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="tabular-nums font-bold">
                    {summary.shippingFee === 0 ? (
                      <span className="text-[#1F5C4A] font-black">FREE</span>
                    ) : (
                      `₹${summary.shippingFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#1A1A1A] border-t border-[#F0E5D8] pt-2">
                  <span>Grand Total</span>
                  <span className="tabular-nums text-xl font-bold text-[#1F5C4A]">₹{summary.grandTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer rounded-full shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#FFB872]" />
              </button>

              <p className="text-[11px] text-center text-[#777777] font-medium">
                100% Secure Checkout · Encrypted · Cash on Delivery available
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
