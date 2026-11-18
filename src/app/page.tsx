"use client";

import React, { useState } from 'react';
import { PromoBanner } from '../components/PromoBanner';
import { Navbar } from '../components/Navbar';
import { HomHeroBanner } from '../components/HomHeroBanner';
import { HomCategoryCards } from '../components/HomCategoryCards';
import { HomFeaturedCollection } from '../components/HomFeaturedCollection';
import { HomSignatureFlavors } from '../components/HomSignatureFlavors';
import { HomMixAndMatchPromo } from '../components/HomMixAndMatchPromo';
import { HomStandardCare } from '../components/HomStandardCare';
import { HomPokharsStory } from '../components/HomPokharsStory';
import { CustomerReviews } from '../components/CustomerReviews';
import { FAQSection } from '../components/FAQSection';
import { HomFooter } from '../components/HomFooter';
import { CartDrawer } from '../components/CartDrawer';
import { CheckoutModal } from '../components/CheckoutModal';
import { CartItem, PlacedOrder } from '../types';
import { Check } from 'lucide-react';

export default function Home() {
  // Cart state: seed with the signature HOM Raw Makhana Pack of 2
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      packId: 'raw-pack-2',
      flavorId: 'raw-jumbo',
      quantity: 1,
    },
  ]);

  // Selected item states for instant purchase flows
  const [selectedPackId, setSelectedPackId] = useState<string>('raw-pack-2');
  const [selectedFlavorId, setSelectedFlavorId] = useState<string>('raw-jumbo');
  const [quantity, setQuantity] = useState<number>(1);

  // Modals & UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState<string>('HOM10');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [, setLastPlacedOrder] = useState<PlacedOrder | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (packId?: string, flavorId?: string, customQty?: number) => {
    const targetPack = packId || selectedPackId;
    const targetFlavor = flavorId || selectedFlavorId;
    const qtyToAdd = customQty !== undefined ? customQty : (packId ? 1 : quantity);

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.packId === targetPack && it.flavorId === targetFlavor
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += qtyToAdd;
        return updated;
      } else {
        return [...prev, { packId: targetPack, flavorId: targetFlavor, quantity: qtyToAdd }];
      }
    });

    showToast('Added to your shopping bag!');
    setIsCartOpen(true);
  };

  const handleBuyNow = (packId?: string, flavorId?: string, customQty?: number) => {
    const targetPack = packId || selectedPackId;
    const targetFlavor = flavorId || selectedFlavorId;
    const qtyToAdd = customQty !== undefined ? customQty : (packId ? 1 : quantity);

    if (packId) setSelectedPackId(targetPack);
    if (flavorId) setSelectedFlavorId(targetFlavor);

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.packId === targetPack && it.flavorId === targetFlavor
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity = Math.max(updated[existingIndex].quantity, qtyToAdd);
        return updated;
      } else {
        return [...prev, { packId: targetPack, flavorId: targetFlavor, quantity: qtyToAdd }];
      }
    });

    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (packId: string, flavorId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(packId, flavorId);
      return;
    }

    setCartItems((prev) =>
      prev.map((it) =>
        it.packId === packId && it.flavorId === flavorId ? { ...it, quantity: newQty } : it
      )
    );
  };

  const handleRemoveItem = (packId: string, flavorId: string) => {
    setCartItems((prev) =>
      prev.filter((it) => !(it.packId === packId && it.flavorId === flavorId))
    );
  };

  const handleApplyCoupon = (code: string) => {
    setCouponCode(code.trim().toUpperCase());
    showToast(`Coupon ${code} applied successfully!`);
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
  };

  const handleMixAndMatchOffer = () => {
    showToast('Buy 2, Get 1 Free: Add any 3 packs to your cart!');
    const el = document.getElementById('choose-makhana');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCollection = () => {
    const el = document.getElementById('choose-makhana');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-[#FFF8F1] text-[#2A2A2A] selection:bg-[#FFE8D6] selection:text-[#1F5C4A]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F5C4A] text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 text-xs font-semibold border border-[#2F856C] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-4 h-4 text-[#C8A24A] stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Promotional Announcement Bar */}
      <PromoBanner onApplyCoupon={handleApplyCoupon} />

      {/* House of Makhana Navigation Header */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        
        {/* 1. Hero Editorial Visual Banner with Product Hotspot Pin */}
        <HomHeroBanner
          onQuickAdd={handleAddToCart}
          onExplore={handleExploreCollection}
        />

        {/* 2. "Choose Your Makhana" Category Cards (Flavored & Raw) */}
        <HomCategoryCards />

        {/* 3. "Premium Raw Makhana" Featured Collection (4 Pack Grid) */}
        <HomFeaturedCollection
          onAddToCart={handleAddToCart}
          onQuickBuy={handleBuyNow}
        />

        {/* 4. "Our Signature Flavors" (Himalayan Salt, Peri Peri, Cream & Onion, Achari Mango, Pudina) */}
        <HomSignatureFlavors
          onAddToCart={handleAddToCart}
          onQuickBuy={handleBuyNow}
        />

        {/* 5. "THE HOM MIX & MATCH EDIT: Buy 2, get 1 free." Offer */}
        <HomMixAndMatchPromo
          onApplyOffer={handleMixAndMatchOffer}
        />

        {/* 6. "THE HOM STANDARD: A little more care in every crunch." (4-Pillar Craft) */}
        <HomStandardCare />

        {/* 7. "From the Pokhars of Bihar, to Your Home" Direct Mallah Farmers Story + Behind the Crunch */}
        <div id="pokhars-story">
          <HomPokharsStory />
        </div>

        {/* 8. "Let customers speak for us" Authentic Reviews */}
        <div id="reviews">
          <CustomerReviews />
        </div>

        {/* 9. Frequently Asked Questions */}
        <div id="faq">
          <FAQSection />
        </div>

      </main>

      {/* 10. Deep Forest Green House of Makhana Footer */}
      <HomFooter onExploreCollection={handleExploreCollection} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        couponCode={couponCode}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Dedicated Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        items={cartItems.length > 0 ? cartItems : [{ packId: selectedPackId, flavorId: selectedFlavorId, quantity: 1 }]}
        couponCode={couponCode}
        onClose={() => setIsCheckoutOpen(false)}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
        onOrderCompleted={(order) => {
          setLastPlacedOrder(order);
        }}
      />

    </div>
  );
}
