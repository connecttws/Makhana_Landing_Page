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
  shortName?: string;
  colorDot?: string;
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
    id: 'raw-pack-2',
    name: 'Raw Makhana - Pack of 2',
    weightGrams: 500,
    weightLabel: '500g (Pack of 2)',
    pouchesCount: 2,
    originalPrice: 1198,
    discountedPrice: 749,
    badge: 'Sale · 37% OFF',
    isPopular: true,
  },
  {
    id: 'raw-pack-5',
    name: 'Raw Makhana - Pack of 5',
    weightGrams: 1250,
    weightLabel: '1250g (Pack of 5)',
    pouchesCount: 5,
    originalPrice: 2995,
    discountedPrice: 1899,
    badge: 'Best Value · Save ₹1,096',
  },
  {
    id: 'raw-single',
    name: 'Premium Raw Makhana (Single Pouch)',
    weightGrams: 250,
    weightLabel: '250g Pouch',
    pouchesCount: 1,
    originalPrice: 599,
    discountedPrice: 399,
    badge: 'Single Pouch',
  },
  {
    id: 'raw-pack-4',
    name: 'Raw Makhana - Pack of 4',
    weightGrams: 1000,
    weightLabel: '1kg (Pack of 4)',
    pouchesCount: 4,
    originalPrice: 2396,
    discountedPrice: 1499,
    badge: 'Save ₹897',
  },
  {
    id: 'flavor-single',
    name: 'Artisanal Flavored Roasted Makhana',
    weightGrams: 200,
    weightLabel: '200g Pouch',
    pouchesCount: 1,
    originalPrice: 299,
    discountedPrice: 249,
    badge: 'Olive Oil Roasted',
  },
  {
    id: 'combo-3',
    name: 'Signature 3-Flavor Assortment Box',
    weightGrams: 600,
    weightLabel: '3 x 200g (600g)',
    pouchesCount: 3,
    originalPrice: 897,
    discountedPrice: 649,
    badge: 'Save ₹248',
  },
  // Backward compatibility aliases
  {
    id: 'pack-1',
    name: 'Starter Single Pouch',
    weightGrams: 250,
    weightLabel: '250g Pouch',
    pouchesCount: 1,
    originalPrice: 299,
    discountedPrice: 249,
    badge: 'Single Pack',
  },
  {
    id: 'pack-2',
    name: 'Twin Snack Duo (500g)',
    weightGrams: 500,
    weightLabel: '500g (2 Pouches)',
    pouchesCount: 2,
    originalPrice: 598,
    discountedPrice: 449,
    badge: 'Most Popular',
  },
  {
    id: 'bundle-3',
    name: 'Artisanal 3-Pack Variety Box',
    weightGrams: 750,
    weightLabel: '750g (3 Pouches)',
    pouchesCount: 3,
    originalPrice: 897,
    discountedPrice: 649,
    badge: 'Save ₹248',
  },
  {
    id: 'pack-4',
    name: 'Family Superfood Bundle (1kg)',
    weightGrams: 1000,
    weightLabel: '1kg (4 Pouches)',
    pouchesCount: 4,
    originalPrice: 1196,
    discountedPrice: 799,
    badge: 'Best Value',
  },
];

export const FLAVOR_OPTIONS: FlavorOption[] = [
  {
    id: 'himalayan-salt',
    name: 'Himalayan Salt & Pepper',
    shortName: 'Salt & Pepper',
    colorDot: 'bg-[#C8A24A]',
    description: 'A classic balance of bold crushed pepper and subtle Himalayan pink salt.',
    notes: 'Classic · Bold Pepper · Pink Salt',
  },
  {
    id: 'peri-peri',
    name: 'Smoky Peri Peri Roasted',
    shortName: 'Peri Peri',
    colorDot: 'bg-[#EF4444]',
    description: 'Fiery and flavorful with a bold, peppery paprika kick.',
    notes: 'Fiery · Peppery Kick · Zesty',
  },
  {
    id: 'cream-onion',
    name: 'Cream & Onion Roasted',
    shortName: 'Cream & Onion',
    colorDot: 'bg-[#10B981]',
    description: 'Smooth, creamy delight with a savory toasted onion twist.',
    notes: 'Smooth · Creamy · Savory Onion',
  },
  {
    id: 'achari-mango',
    name: 'Achari Mango Spiced',
    shortName: 'Achari Mango',
    colorDot: 'bg-[#F59E0B]',
    description: 'Spicy, tangy, and irresistibly reminiscent of traditional Indian pickles.',
    notes: 'Tangy · Spicy · Traditional Pickle',
  },
  {
    id: 'pudina-spiced',
    name: 'Pudina Masala & Roasted Cumin',
    shortName: 'Pudina Masala',
    colorDot: 'bg-[#059669]',
    description: 'Minty, crunchy, and refreshing makhana snack.',
    notes: 'Fresh Mint · Roasted Jeera · Tangy',
  },
  {
    id: 'raw-jumbo',
    name: 'Pure Raw Makhana (Grade 6+ Soot)',
    shortName: 'Pure Raw',
    colorDot: 'bg-[#D4A373]',
    description: 'Sun-dried 6+ soot jumbo seeds ready for your own ghee or air-fry roast.',
    notes: 'Raw · 100% Unprocessed · Jumbo',
  },
  {
    id: 'trio-bundle',
    name: 'Signature 3-Flavor Assortment',
    shortName: '3-Pack Variety',
    colorDot: 'bg-[#C8A24A]',
    description: 'One pouch each of Himalayan Salt, Peri-Peri, and Pudina Masala.',
    notes: 'Variety · Gifting · Multi-Flavor',
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

