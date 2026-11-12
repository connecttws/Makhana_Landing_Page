"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  QrCode,
  Banknote,
  Building,
  Lock,
  Printer,
} from 'lucide-react';
import { CartItem, CheckoutFormData, PlacedOrder } from '../types';
import {
  getPackById,
  getFlavorById,
  calculateOrderSummary,
} from '../utils/cart-rules';

interface CheckoutModalProps {
  isOpen: boolean;
  items: CartItem[];
  couponCode: string;
  onClose: () => void;
  onApplyCoupon: (code: string) => void;
  onRemoveCoupon: () => void;
  onOrderCompleted: (order: PlacedOrder) => void;
}

const INDIAN_STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Delhi NCR', 'Goa', 'Gujarat', 
  'Haryana', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 
  'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'
];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  items,
  couponCode,
  onClose,
  onApplyCoupon,
  onRemoveCoupon,
  onOrderCompleted,
}) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    addressLine: '',
    landmark: '',
    city: '',
    state: 'Delhi NCR',
    pinCode: '',
    paymentMethod: 'upi',
    upiApp: 'gpay',
  });

  const [inputCoupon, setInputCoupon] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<PlacedOrder | null>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (confirmedOrder && modalContainerRef.current) {
      modalContainerRef.current.scrollTop = 0;
    }
  }, [confirmedOrder]);

  if (!isOpen) return null;

  const summary = calculateOrderSummary(items, couponCode);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Valid 10-digit mobile number required for delivery updates';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email is required for invoice delivery';
    }
    if (!formData.addressLine.trim()) {
      newErrors.addressLine = 'Street address / House number is required';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pinCode.trim() || !/^\d{6}$/.test(formData.pinCode.trim())) {
      newErrors.pinCode = 'Valid 6-digit postal PIN code required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `MN-${Math.floor(100000 + Math.random() * 900000)}`;
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);

      const placed: PlacedOrder = {
        orderId,
        createdAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        items: [...items],
        formData: { ...formData },
        subtotal: summary.subtotal,
        discountAmount: summary.discountAmount,
        shippingFee: summary.shippingFee,
        grandTotal: summary.grandTotal,
        couponCode: summary.appliedCode,
        estimatedDeliveryDate: deliveryDate.toLocaleDateString('en-IN', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
        }),
      };

      setConfirmedOrder(placed);
      setIsSubmitting(false);
      onOrderCompleted(placed);
    }, 1200);
  };

  const handleApplyCouponCode = (code: string) => {
    onApplyCoupon(code);
    setInputCoupon('');
  };

  return (
    <div
      ref={modalContainerRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1F5C4A]/70 backdrop-blur-xs flex justify-center p-0 sm:p-4 lg:p-6"
    >
      <div className="bg-[#FFF8F1] w-full max-w-5xl rounded-none sm:rounded-2xl shadow-2xl border-2 border-[#E7DFD4] overflow-hidden flex flex-col min-h-screen sm:min-h-0">
        
        {/* Top Header bar */}
        <div className="bg-white px-6 py-4 border-b border-[#E7DFD4] flex items-center justify-between sticky top-0 z-10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-[#1F5C4A] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF7A00]" />
            <span>Back to Store</span>
          </button>

          <div className="text-xl sm:text-2xl font-bold text-[#1F5C4A] font-sans tracking-wider">
            MITHILA NATURALE CHECKOUT
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#166534] font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">256-Bit SSL Encrypted</span>
          </div>
        </div>

        {/* If Order is Confirmed, render Order Success View */}
        {confirmedOrder ? (
          <div className="p-6 sm:p-10 max-w-2xl mx-auto space-y-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#EDF7F1] text-[#166534] flex items-center justify-center mx-auto shadow-inner border border-[#C6E6D2]">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#166534] bg-[#EDF7F1] border border-[#C6E6D2] px-3 py-1 rounded-full">
                Order Confirmed &amp; Verified
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F5C4A] font-sans">
                Thank You, {confirmedOrder.formData.fullName}!
              </h2>
              <p className="text-sm text-stone-600">
                Your order <strong className="text-[#1F5C4A] font-mono">{confirmedOrder.orderId}</strong> has been received and is being nitrogen-flush packed for dispatch.
              </p>
            </div>

            {/* Tracking Progress */}
            <div className="bg-white p-6 rounded-2xl border-2 border-[#E7DFD4] shadow-xs text-left space-y-4">
              <div className="flex items-center justify-between border-b border-[#F2ECE3] pb-3">
                <span className="text-xs font-bold text-[#184831] uppercase tracking-wider">Estimated Delivery</span>
                <span className="text-sm font-bold text-[#1F5C4A] font-sans text-base">
                  {confirmedOrder.estimatedDeliveryDate} (2–3 Days)
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[11px]">
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto text-xs font-bold">✓</div>
                  <p className="font-bold text-[#1F5C4A]">Placed</p>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto text-xs font-bold">✓</div>
                  <p className="font-bold text-[#1F5C4A]">Nitrogen Packed</p>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#FF7A00] text-white flex items-center justify-center mx-auto text-xs font-bold">3</div>
                  <p className="font-semibold text-[#FF7A00]">Express Courier</p>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center mx-auto text-xs">4</div>
                  <p className="text-stone-400">At Doorstep</p>
                </div>
              </div>
            </div>

            {/* Receipt Summary */}
            <div className="bg-white p-6 rounded-2xl border-2 border-[#E7DFD4] text-left space-y-4 text-xs">
              <h4 className="font-bold text-[#1F5C4A] text-base font-sans border-b border-[#F2ECE3] pb-2">
                Order Receipt Summary
              </h4>

              <div className="space-y-2">
                {confirmedOrder.items.map((it) => {
                  const p = getPackById(it.packId);
                  const f = getFlavorById(it.flavorId);
                  return (
                    <div key={`${it.packId}-${it.flavorId}`} className="flex justify-between text-stone-700">
                      <span>
                        {p.name} ({p.weightLabel}) · {f.name} × {it.quantity}
                      </span>
                      <span className="font-bold text-[#1F5C4A] tabular-nums font-sans text-sm">
                        ₹{p.discountedPrice * it.quantity}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-[#F2ECE3] pt-3 space-y-1.5 text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-sans text-sm font-bold text-[#1F5C4A]">₹{confirmedOrder.subtotal}</span>
                </div>
                {confirmedOrder.discountAmount > 0 && (
                  <div className="flex justify-between text-[#FF7A00] font-semibold">
                    <span>Discount ({confirmedOrder.couponCode})</span>
                    <span className="tabular-nums font-sans text-sm">-₹{confirmedOrder.discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="tabular-nums font-semibold">
                    {confirmedOrder.shippingFee === 0 ? <span className="text-[#166534]">FREE</span> : `₹${confirmedOrder.shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1F5C4A] border-t border-[#E7DFD4] pt-2">
                  <span className="font-sans">Total Amount Paid</span>
                  <span className="tabular-nums text-xl font-sans font-bold">₹{confirmedOrder.grandTotal}</span>
                </div>
              </div>

              <div className="border-t border-[#F2ECE3] pt-3 text-[11px] text-stone-600 space-y-1">
                <p>
                  <strong>Deliver to:</strong> {confirmedOrder.formData.addressLine}, {confirmedOrder.formData.city}, {confirmedOrder.formData.state} - {confirmedOrder.formData.pinCode}
                </p>
                <p>
                  <strong>Contact Updates:</strong> +91 {confirmedOrder.formData.phone} · {confirmedOrder.formData.email}
                </p>
                <p>
                  <strong>Payment Method:</strong> {confirmedOrder.formData.paymentMethod.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-white border border-[#D5CBC0] rounded-xl text-xs font-semibold text-stone-800 hover:bg-[#FAF6F0] flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Printer className="w-4 h-4 text-[#FF7A00]" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1F5C4A] rounded-xl text-xs font-bold text-white hover:bg-[#163E2B] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Return to Store</span>
              </button>
            </div>
          </div>
        ) : (
          /* Normal Checkout Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
            
            {/* Form Column (Left) */}
            <form onSubmit={handleSubmitOrder} className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-white">
              
              {/* Section 1: Customer Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-[#E7DFD4] pb-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F5C4A] text-white text-[11px] font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-sm font-bold text-[#1F5C4A] uppercase tracking-wider font-sans text-base">
                    Contact &amp; Delivery Updates
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-stone-800 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Shalini Roy"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FFF8F1] outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-[#D5CBC0] focus:border-[#1F5C4A]'
                      }`}
                    />
                    {errors.fullName && <p className="text-rose-600 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">Mobile Number (for SMS &amp; OTP) *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#D5CBC0] bg-[#FAF5EE] text-[#1F5C4A] font-bold text-xs">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-r-xl border bg-[#FFF8F1] outline-none transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-[#D5CBC0] focus:border-[#1F5C4A]'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-rose-600 text-[11px] mt-1">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-stone-800 mb-1">Email Address (for tax receipt) *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="shalini@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FFF8F1] outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#D5CBC0] focus:border-[#1F5C4A]'
                      }`}
                    />
                    {errors.email && <p className="text-rose-600 text-[11px] mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Shipping Address */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-[#E7DFD4] pb-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F5C4A] text-white text-[11px] font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-sm font-bold text-[#1F5C4A] uppercase tracking-wider font-sans text-base">
                    Shipping Address
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-stone-800 mb-1">Flat / House No. &amp; Street *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Flat 402, Green Glen Layout, Bellandur"
                      value={formData.addressLine}
                      onChange={(e) => setFormData({ ...formData, addressLine: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FFF8F1] outline-none transition-colors ${
                        errors.addressLine ? 'border-rose-500' : 'border-[#D5CBC0] focus:border-[#1F5C4A]'
                      }`}
                    />
                    {errors.addressLine && <p className="text-rose-600 text-[11px] mt-1">{errors.addressLine}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">Landmark (Optional)</label>
                    <input
                      type="text"
                      name="landmark"
                      placeholder="Near Central Park"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CBC0] bg-[#FFF8F1] outline-none focus:border-[#1F5C4A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Bengaluru"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FFF8F1] outline-none transition-colors ${
                        errors.city ? 'border-rose-500' : 'border-[#D5CBC0] focus:border-[#1F5C4A]'
                      }`}
                    />
                    {errors.city && <p className="text-rose-600 text-[11px] mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CBC0] bg-[#FFF8F1] outline-none focus:border-[#1F5C4A] text-xs font-medium"
                    >
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">PIN Code (6 digits) *</label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      maxLength={6}
                      placeholder="560103"
                      value={formData.pinCode}
                      onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-[#FFF8F1] outline-none transition-colors ${
                        errors.pinCode ? 'border-rose-500' : 'border-[#D5CBC0] focus:border-[#1F5C4A]'
                      }`}
                    />
                    {errors.pinCode && <p className="text-rose-600 text-[11px] mt-1">{errors.pinCode}</p>}
                  </div>
                </div>
              </div>

              {/* Section 3: Payment Method */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-[#E7DFD4] pb-2">
                  <span className="w-5 h-5 rounded-full bg-[#1F5C4A] text-white text-[11px] font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-[#1F5C4A] uppercase tracking-wider font-sans text-base">
                    Payment Selection
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* UPI */}
                  <label
                    className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'upi'
                        ? 'border-[#1F5C4A] bg-[#FAF6F0] shadow-2xs'
                        : 'border-[#E7DFD4] bg-[#FFF8F1]/70 hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className="accent-[#1F5C4A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#1F5C4A]">
                        <QrCode className="w-4 h-4 text-[#166534]" />
                        <span>Instant UPI (GPay, PhonePe, Paytm)</span>
                      </div>
                      <p className="text-[11px] text-stone-600">Fast 1-click mobile payment</p>
                    </div>
                  </label>

                  {/* Cash on Delivery (COD) */}
                  <label
                    className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#1F5C4A] bg-[#FAF6F0] shadow-2xs'
                        : 'border-[#E7DFD4] bg-[#FFF8F1]/70 hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#1F5C4A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#1F5C4A]">
                        <Banknote className="w-4 h-4 text-[#FF7A00]" />
                        <span>Cash on Delivery (COD)</span>
                      </div>
                      <p className="text-[11px] text-stone-600">Pay cash or UPI at delivery doorstep</p>
                    </div>
                  </label>

                  {/* Credit / Debit Card */}
                  <label
                    className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#1F5C4A] bg-[#FAF6F0] shadow-2xs'
                        : 'border-[#E7DFD4] bg-[#FFF8F1]/70 hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="accent-[#1F5C4A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#1F5C4A]">
                        <CreditCard className="w-4 h-4 text-[#184831]" />
                        <span>Credit / Debit Cards</span>
                      </div>
                      <p className="text-[11px] text-stone-600">Visa, Mastercard, RuPay</p>
                    </div>
                  </label>

                  {/* Net Banking */}
                  <label
                    className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'netbanking'
                        ? 'border-[#1F5C4A] bg-[#FAF6F0] shadow-2xs'
                        : 'border-[#E7DFD4] bg-[#FFF8F1]/70 hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                      checked={formData.paymentMethod === 'netbanking'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'netbanking' })}
                      className="accent-[#1F5C4A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#1F5C4A]">
                        <Building className="w-4 h-4 text-[#184831]" />
                        <span>Net Banking</span>
                      </div>
                      <p className="text-[11px] text-stone-600">All major Indian banks</p>
                    </div>
                  </label>
                </div>

                {/* Sub-inputs depending on payment method */}
                {formData.paymentMethod === 'upi' && (
                  <div className="p-4 bg-[#EDF7F1] rounded-xl border border-[#C6E6D2] text-xs space-y-2">
                    <p className="font-bold text-[#166534]">Choose your preferred UPI App:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Google Pay', 'PhonePe', 'Paytm UPI', 'Any UPI ID / QR'].map((app) => (
                        <span
                          key={app}
                          className="px-2.5 py-1 bg-white border border-[#A7D7BC] rounded-md font-semibold text-[#1F5C4A] text-[11px]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 100% Risk-Free Checkout Assurance */}
              <div className="p-3.5 bg-[#FFFDF7] rounded-xl border border-[#E5C378] flex items-start gap-2.5 text-xs text-[#8C6212]">
                <ShieldCheck className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1F5C4A]">100% Ironclad Crispness Guarantee</p>
                  <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">
                    If your pouch is anything less than completely crunchy and delicious, you receive a 100% refund within 7 days. Pay zero risk with Cash on Delivery or Secure UPI.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#1F5C4A] hover:bg-[#164638] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer rounded-full shadow-lg disabled:opacity-50 border border-[#2F856C]"
                >
                  {isSubmitting ? (
                    <span>Securing Order...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-[#FFB872]" />
                      <span>Complete Order · ₹{summary.grandTotal}</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-stone-500 mt-2">
                  By clicking Complete Order, you agree to Mithila Naturale Terms of Service &amp; 100% Refund Policy.
                </p>
              </div>

            </form>

            {/* Order Summary Column (Right) */}
            <div className="lg:col-span-5 bg-[#FAF5EE] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l-2 border-[#E7DFD4] flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#E7DFD4] pb-3">
                  <h4 className="text-base font-bold text-[#1F5C4A] uppercase tracking-wider font-sans">
                    Order Summary ({summary.itemCount} items)
                  </h4>
                  <span className="text-xs font-semibold text-[#FF7A00]">Mithila Naturale</span>
                </div>

                {/* Items in order */}
                <div className="space-y-3">
                  {items.map((item) => {
                    const pack = getPackById(item.packId);
                    const flavor = getFlavorById(item.flavorId);
                    return (
                      <div
                        key={`${item.packId}-${item.flavorId}`}
                        className="flex gap-3 bg-white p-3 rounded-2xl border-2 border-[#E7DFD4] shadow-2xs"
                      >
                        <div className="w-14 h-14 rounded-xl bg-stone-100 overflow-hidden shrink-0 border border-[#E7DFD4]">
                          <img
                            src="/images/hero_makhana_packaging_1794312039925.jpg"
                            alt="Packaging"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#1F5C4A] truncate">
                            {pack.name} ({pack.weightLabel})
                          </p>
                          <p className="text-[11px] text-[#FF7A00] font-semibold truncate">
                            {flavor.name}
                          </p>
                          <div className="flex justify-between items-center mt-1 text-xs">
                            <span className="text-stone-500">Qty: {item.quantity}</span>
                            <span className="font-bold text-[#1F5C4A] tabular-nums font-sans text-sm">
                              ₹{pack.discountedPrice * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Coupon Code Input */}
                <div className="space-y-2 pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 px-3 py-2 border border-[#D5CBC0] rounded-xl text-xs bg-white outline-none uppercase font-semibold"
                    />
                    <button
                      type="button"
                      onClick={() => handleApplyCouponCode(inputCoupon)}
                      className="px-4 py-2 text-xs font-bold text-[#1F5C4A] bg-white border border-[#1F5C4A] rounded-xl hover:bg-[#FAF6F0] cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>

                  {/* Quick promo tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="text-stone-600 font-medium">Available:</span>
                    <button
                      type="button"
                      onClick={() => handleApplyCouponCode('CRUNCH10')}
                      className="text-[#FF7A00] font-bold underline hover:text-[#B45309] cursor-pointer"
                    >
                      CRUNCH10 (10% OFF)
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() => handleApplyCouponCode('FIRSTBITE')}
                      className="text-[#FF7A00] font-bold underline hover:text-[#B45309] cursor-pointer"
                    >
                      FIRSTBITE (15% OFF)
                    </button>
                  </div>

                  {couponCode && (
                    <div className="flex items-center justify-between text-xs bg-[#EDF7F1] border border-[#C6E6D2] px-3 py-1.5 rounded-lg text-[#166534] font-bold">
                      <span>Code <strong>{couponCode}</strong> applied</span>
                      <button
                        type="button"
                        onClick={onRemoveCoupon}
                        className="text-stone-500 hover:text-rose-600 text-[11px] underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Calculation breakdown */}
                <div className="border-t border-[#E7DFD4] pt-4 space-y-2 text-xs text-stone-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#1F5C4A] tabular-nums font-sans text-sm">₹{summary.subtotal}</span>
                  </div>

                  {summary.bundleSavings > 0 && (
                    <div className="flex justify-between text-[#166534] font-semibold">
                      <span>Bundle Savings</span>
                      <span className="tabular-nums font-sans text-sm">-₹{summary.bundleSavings}</span>
                    </div>
                  )}

                  {summary.discountAmount > 0 && (
                    <div className="flex justify-between text-[#FF7A00] font-semibold">
                      <span>Promo Discount ({summary.appliedCode})</span>
                      <span className="tabular-nums font-sans text-sm">-₹{summary.discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span className="tabular-nums font-semibold">
                      {summary.shippingFee === 0 ? (
                        <span className="text-[#166534]">FREE</span>
                      ) : (
                        `₹${summary.shippingFee}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-[#1F5C4A] border-t border-[#E7DFD4] pt-3">
                    <span className="font-sans">Grand Total</span>
                    <span className="tabular-nums text-xl font-sans font-bold">₹{summary.grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 bg-white rounded-2xl border-2 border-[#E7DFD4] text-xs space-y-2 text-stone-700">
                <div className="flex items-center gap-2 text-[#1F5C4A] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#166534]" />
                  <span>Mithila Naturale Crispness Guarantee</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed font-normal">
                  If you are not 100% satisfied with the fresh crunch or quality, we will provide a complete replacement or refund with zero return friction.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

