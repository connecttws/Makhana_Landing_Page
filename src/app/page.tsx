"use client";

import React, { useState } from 'react';
import { PromoBanner } from '../components/PromoBanner';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ProductPurchaseModule } from '../components/ProductPurchaseModule';
import { NeuroSnackingPsychology } from '../components/NeuroSnackingPsychology';
import { SuperfoodBenefits } from '../components/SuperfoodBenefits';
import { TrustGuarantees } from '../components/TrustGuarantees';
import { CraftsmanshipStory } from '../components/CraftsmanshipStory';
import { CustomerReviews } from '../components/CustomerReviews';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { CheckoutModal } from '../components/CheckoutModal';
import { CartItem, PlacedOrder } from '../types';
import { Check } from 'lucide-react';

export default function Home() {
  // Cart state: seed with popular pack-2 so the cart is ready for instant checkout
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      packId: 'pack-2',
      flavorId: 'himalayan-salt',
      quantity: 1,
    },
  ]);

  // PDP Configuration state
  const [selectedPackId, setSelectedPackId] = useState<string>('pack-2');
  const [selectedFlavorId, setSelectedFlavorId] = useState<string>('himalayan-salt');
  const [quantity, setQuantity] = useState<number>(1);

  // Modals & UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState<string>('CRUNCH10');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [, setLastPlacedOrder] = useState<PlacedOrder | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.packId === selectedPackId && it.flavorId === selectedFlavorId
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { packId: selectedPackId, flavorId: selectedFlavorId, quantity }];
      }
    });

    showToast('Added to your shopping bag!');
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.packId === selectedPackId && it.flavorId === selectedFlavorId
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity = Math.max(updated[existingIndex].quantity, quantity);
        return updated;
      } else {
        return [...prev, { packId: selectedPackId, flavorId: selectedFlavorId, quantity }];
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
    showToast(`Coupon ${code} applied!`);
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
  };

  const handleScrollToPurchase = () => {
    const el = document.getElementById('purchase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F1] text-[#222222] selection:bg-[#FFE0B2] selection:text-[#E65100]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F5C4A] text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 text-xs font-bold border border-[#2F856C] animate-bounce">
          <Check className="w-4 h-4 text-[#FFB872] stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Promotional Ticker */}
      <PromoBanner onApplyCoupon={handleApplyCoupon} />

      {/* Strict Luxury Navigation Header */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Campaign Hero Section */}
        <HeroSection
          onQuickBuy={handleBuyNow}
          onScrollToPurchase={handleScrollToPurchase}
        />

        {/* Product Purchase Module (PDP) */}
        <ProductPurchaseModule
          selectedPackId={selectedPackId}
          selectedFlavorId={selectedFlavorId}
          quantity={quantity}
          onPackChange={setSelectedPackId}
          onFlavorChange={setSelectedFlavorId}
          onQuantityChange={setQuantity}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        {/* Behavioral Psychology & Neuro-Snacking Science Section */}
        <div id="psychology">
          <NeuroSnackingPsychology />
        </div>

        {/* Superfood Nutrition Facts & Head-to-Head Comparison */}
        <SuperfoodBenefits />

        {/* 100% Trusted Guarantees & Certifications Grid */}
        <div id="guarantees">
          <TrustGuarantees />
        </div>

        {/* Mithila Origin & Wood-Fire Craft Story */}
        <CraftsmanshipStory />

        {/* Real Customer Feedback & Reviews */}
        <CustomerReviews />

        {/* Common FAQs */}
        <FAQSection />

      </main>

      {/* Footer with Certifications */}
      <Footer />

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
