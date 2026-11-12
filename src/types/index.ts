import { CartItem, PackOption, FlavorOption } from '../utils/cart-rules';

export type { CartItem, PackOption, FlavorOption };

export interface CustomerReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
  packPurchased: string;
  flavor: string;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  addressLine: string;
  landmark?: string;
  city: string;
  state: string;
  pinCode: string;
  paymentMethod: 'upi' | 'cod' | 'card' | 'netbanking';
  upiApp?: 'gpay' | 'phonepe' | 'paytm' | 'other';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

export interface PlacedOrder {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  formData: CheckoutFormData;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  grandTotal: number;
  couponCode: string | null;
  estimatedDeliveryDate: string;
}

