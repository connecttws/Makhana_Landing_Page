export interface PackOption {
  id: string;
  name: string;
  weightGrams: number;
  weightLabel: string;
  pouchesCount: number;
  originalPrice: number;
  discountedPrice: number;
  badge?: string;
  isPopular?: boolean;
}

export interface FlavorOption {
  id: string;
  name: string;
  description: string;
  notes: string;
}

export interface CartItem {
  packId: string;
  flavorId: string;
  quantity: number;
}

export const PACK_OPTIONS: PackOption[] = [
  {
    id: 'pack-1',
    name: 'Starter Trial Pouch',
    weightGrams: 250,
    weightLabel: '250g (1 Pouch)',
    pouchesCount: 1,
    originalPrice: 299,
    discountedPrice: 249,
    badge: 'Single Pack',
  },
  {
    id: 'pack-2',
    name: 'Twin Snack Duo',
    weightGrams: 500,
    weightLabel: '500g (2 Pouches)',
    pouchesCount: 2,
    originalPrice: 598,
    discountedPrice: 449,
    badge: 'Most Popular',
    isPopular: true,
  },
  {
    id: 'pack-4',
    name: 'Family Superfood Bundle',
    weightGrams: 1000,
    weightLabel: '1kg (4 Pouches)',
    pouchesCount: 4,
    originalPrice: 1196,
    discountedPrice: 799,
    badge: 'Best Value · Free Delivery',
  },
];

export const FLAVOR_OPTIONS: FlavorOption[] = [
  {
    id: 'himalayan-salt',
    name: 'Himalayan Pink Salt & Olive Oil',
    description: 'Slow-roasted in Spanish extra-virgin olive oil with hand-crushed mineral pink salt.',
    notes: 'Crunchy · Light · Mineral Rich',
  },
  {
    id: 'pudina-spiced',
    name: 'Fresh Pudina & Roasted Cumin',
    description: 'Aromatic garden mint, roasted whole jeera, and tangy amchur zest.',
    notes: 'Tangy · Refreshing · Savory',
  },
  {
    id: 'raw-jumbo',
    name: 'Pure Naturale Jumbo (Unroasted)',
    description: 'Raw, sun-dried 6+ soot jumbo seeds ready for your own ghee or air-fry roast.',
    notes: 'Raw · 100% Unprocessed · Versatile',
  },
];

export const FREE_SHIPPING_THRESHOLD = 499;
export const STANDARD_SHIPPING_FEE = 49;

export const VALID_COUPONS: Record<string, { type: 'percent' | 'flat'; value: number; minOrder: number; description: string }> = {
  CRUNCH10: {
    type: 'percent',
    value: 10,
    minOrder: 0,
    description: '10% off entire order',
  },
  SUPERFOOD50: {
    type: 'flat',
    value: 50,
    minOrder: 400,
    description: '₹50 flat off on orders above ₹400',
  },
  FIRSTBITE: {
    type: 'percent',
    value: 15,
    minOrder: 0,
    description: '15% new member welcome discount',
  },
};

export function getPackById(packId: string): PackOption {
  const pack = PACK_OPTIONS.find((p) => p.id === packId);
  return pack || PACK_OPTIONS[1]; // default to pack-2
}

export function getFlavorById(flavorId: string): FlavorOption {
  const flavor = FLAVOR_OPTIONS.find((f) => f.id === flavorId);
  return flavor || FLAVOR_OPTIONS[0];
}

export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const pack = getPackById(item.packId);
    return sum + pack.discountedPrice * item.quantity;
  }, 0);
}

export function calculateOriginalTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const pack = getPackById(item.packId);
    return sum + pack.originalPrice * item.quantity;
  }, 0);
}

export function calculateDiscount(
  subtotal: number,
  couponCode?: string
): { discountAmount: number; appliedCode: string | null; error?: string } {
  if (!couponCode) {
    return { discountAmount: 0, appliedCode: null };
  }

  const normalized = couponCode.trim().toUpperCase();
  const coupon = VALID_COUPONS[normalized];

  if (!coupon) {
    return { discountAmount: 0, appliedCode: null, error: 'Invalid coupon code. Try CRUNCH10 or FIRSTBITE' };
  }

  if (subtotal < coupon.minOrder) {
    return {
      discountAmount: 0,
      appliedCode: null,
      error: `Coupon requires minimum order of ₹${coupon.minOrder}`,
    };
  }

  let discountAmount = 0;
  if (coupon.type === 'percent') {
    discountAmount = Math.round((subtotal * coupon.value) / 100);
  } else {
    discountAmount = coupon.value;
  }

  discountAmount = Math.min(discountAmount, subtotal);
  return { discountAmount, appliedCode: normalized };
}

export function calculateShipping(subtotalAfterDiscount: number): number {
  if (subtotalAfterDiscount <= 0) return 0;
  return subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
}

export function calculateFreeShippingProgress(subtotal: number): {
  freeThreshold: number;
  amountRemaining: number;
  percent: number;
  isEligible: boolean;
} {
  const freeThreshold = FREE_SHIPPING_THRESHOLD;
  if (subtotal >= freeThreshold) {
    return {
      freeThreshold,
      amountRemaining: 0,
      percent: 100,
      isEligible: true,
    };
  }
  const remaining = Math.max(0, freeThreshold - subtotal);
  const percent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  return {
    freeThreshold,
    amountRemaining: remaining,
    percent,
    isEligible: false,
  };
}

export function calculateOrderSummary(items: CartItem[], couponCode?: string) {
  const subtotal = calculateSubtotal(items);
  const originalTotal = calculateOriginalTotal(items);
  const { discountAmount, appliedCode, error: couponError } = calculateDiscount(subtotal, couponCode);
  const subtotalAfterDiscount = Math.max(0, subtotal - discountAmount);
  const shippingFee = calculateShipping(subtotalAfterDiscount);
  const grandTotal = subtotalAfterDiscount + shippingFee;
  const bundleSavings = Math.max(0, originalTotal - subtotal);
  const totalSavings = bundleSavings + discountAmount;

  return {
    subtotal,
    originalTotal,
    discountAmount,
    shippingFee,
    grandTotal,
    bundleSavings,
    totalSavings,
    appliedCode,
    couponError,
    itemCount: items.reduce((acc, curr) => acc + curr.quantity, 0),
  };
}

