import { CustomerReview } from '../types';

export interface CatalogProduct {
  id: string;
  name: string;
  category: 'all' | 'flavored' | 'raw' | 'combo';
  weight: string;
  price: number;
  originalPrice: number;
  badge: string;
  badgeType: 'green' | 'orange';
  rating: number;
  image: string;
  notes: string;
  packId: string;
  flavorId: string;
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'prod-himalayan-salt',
    name: 'Himalayan Pink Salt & Olive Oil',
    category: 'flavored',
    weight: '250g Pouch',
    price: 249,
    originalPrice: 299,
    badge: 'Bestseller',
    badgeType: 'green',
    rating: 4.9,
    image: '/images/hero_makhana_packaging_1794312039925.jpg',
    notes: 'Crunchy · Light · Mineral Rich',
    packId: 'pack-1',
    flavorId: 'himalayan-salt',
  },
  {
    id: 'prod-peri-peri',
    name: 'Smoky Peri-Peri Roasted Makhana',
    category: 'flavored',
    weight: '250g Pouch',
    price: 249,
    originalPrice: 299,
    badge: 'Spicy Kick',
    badgeType: 'orange',
    rating: 4.9,
    image: '/images/product_peri_peri_makhana.jpg',
    notes: 'Paprika · Garlic · Bird’s Eye Chili',
    packId: 'pack-1',
    flavorId: 'peri-peri',
  },
  {
    id: 'prod-pudina-herb',
    name: 'Zesty Pudina & Roasted Jeera',
    category: 'flavored',
    weight: '250g Pouch',
    price: 249,
    originalPrice: 299,
    badge: 'Garden Mint',
    badgeType: 'green',
    rating: 4.8,
    image: '/images/product_pudina_herb_makhana.jpg',
    notes: 'Aromatic Mint · Toasted Cumin · Tangy',
    packId: 'pack-1',
    flavorId: 'pudina-spiced',
  },
  {
    id: 'prod-raw-jumbo',
    name: 'Pure Raw Jumbo 6+ Soot Lotus Seeds',
    category: 'raw',
    weight: '500g Pack',
    price: 399,
    originalPrice: 499,
    badge: '100% Unroasted',
    badgeType: 'green',
    rating: 5.0,
    image: '/images/product_raw_jumbo_makhana.jpg',
    notes: 'Oversized Snow-White Seeds · For Ghee Roast',
    packId: 'pack-2',
    flavorId: 'raw-jumbo',
  },
  {
    id: 'prod-trio-bundle',
    name: 'Artisanal 3-Pack Variety Gift Box',
    category: 'combo',
    weight: '3 x 250g (750g)',
    price: 649,
    originalPrice: 897,
    badge: 'Save ₹248',
    badgeType: 'orange',
    rating: 5.0,
    image: '/images/product_variety_combo_bundle.jpg',
    notes: 'Salt + Peri-Peri + Pudina · Luxury Box',
    packId: 'bundle-3',
    flavorId: 'trio-bundle',
  },
  {
    id: 'prod-family-pack',
    name: 'Family Superfood Mega Box (1kg)',
    category: 'combo',
    weight: '4 x 250g (1kg)',
    price: 799,
    originalPrice: 1196,
    badge: 'Best Value · Free Delivery',
    badgeType: 'green',
    rating: 4.9,
    image: '/images/product_makhana_bowl_1794312039887.jpg',
    notes: '4 Pouches · 100% Olive Oil · Zero Palm Oil',
    packId: 'pack-4',
    flavorId: 'himalayan-salt',
  },
];

export const PRODUCT_IMAGES = [
  {
    id: 'hero-packaging',
    src: '/images/hero_makhana_packaging_1794312039925.jpg',
    alt: 'Mithila Naturale Himalayan Salt Packaging and Ceramic Bowl',
    label: 'Himalayan Salt',
  },
  {
    id: 'product-peri-peri',
    src: '/images/product_peri_peri_makhana.jpg',
    alt: 'Smoky Peri-Peri Roasted Makhana Pouch and Bowl',
    label: 'Peri-Peri Crunch',
  },
  {
    id: 'product-pudina',
    src: '/images/product_pudina_herb_makhana.jpg',
    alt: 'Zesty Pudina and Herb Roasted Makhana with Fresh Mint',
    label: 'Pudina & Jeera',
  },
  {
    id: 'product-raw',
    src: '/images/product_raw_jumbo_makhana.jpg',
    alt: 'Pure Raw Jumbo 6+ Soot Lotus Seeds on Linen',
    label: 'Raw Jumbo Seeds',
  },
  {
    id: 'product-variety-box',
    src: '/images/product_variety_combo_bundle.jpg',
    alt: 'Superfood 3-Pack Variety Bundle Gift Box',
    label: 'Trio Variety Box',
  },
  {
    id: 'harvest-source',
    src: '/images/makhana_harvest_source_1794312040995.jpg',
    alt: 'Pristine lotus lily pond in Mithila Bihar at sunrise',
    label: 'Mithila Farm Origin',
  },
];

export const NUTRITION_PER_100G = [
  { label: 'Plant Protein', value: '9.7 g', subtext: 'Essential amino acids' },
  { label: 'Dietary Fiber', value: '14.5 g', subtext: 'Smooth digestion' },
  { label: 'Total Fat', value: '0.1 g', subtext: '0% Trans Fat' },
  { label: 'Magnesium', value: '390 mg', subtext: 'Cardio rhythm & calm' },
  { label: 'Potassium', value: '500 mg', subtext: 'Natural electrolyte' },
  { label: 'Glycemic Index', value: 'GI 35', subtext: 'Zero insulin spike' },
];

export const SNACK_COMPARISON = [
  {
    snack: 'Mithila Roasted Makhana',
    calories: '105 kcal',
    fat: '0.2 g',
    protein: '3.2 g',
    fiber: '4.8 g',
    gi: 'Low (35)',
    transFat: '0%',
    isHero: true,
  },
  {
    snack: 'Popcorn (Theatre)',
    calories: '165 kcal',
    fat: '11.0 g',
    protein: '2.0 g',
    fiber: '2.5 g',
    gi: 'High (65)',
    transFat: 'Present',
    isHero: false,
  },
  {
    snack: 'Potato Chips',
    calories: '220 kcal',
    fat: '15.5 g',
    protein: '1.8 g',
    fiber: '1.2 g',
    gi: 'High (70)',
    transFat: 'High',
    isHero: false,
  },
  {
    snack: 'Salted Peanuts',
    calories: '190 kcal',
    fat: '14.2 g',
    protein: '7.5 g',
    fiber: '2.2 g',
    gi: 'Low (15)',
    transFat: '0%',
    isHero: false,
  },
];

export const CRAFT_STEPS = [
  {
    step: '01',
    title: 'Mithila Pond Harvest',
    description: 'Hand-gathered from freshwater lotus ponds in Northern Bihar (GI #842).',
  },
  {
    step: '02',
    title: 'Grade 6+ Soot Sizing',
    description: 'Precision sieving selects only the largest 10% jumbo seeds for maximum pop.',
  },
  {
    step: '03',
    title: 'Wood-Fire Popping',
    description: 'Popped at 280°C in heavy iron pans using aged hardwood coals. 0% chemicals.',
  },
  {
    step: '04',
    title: 'Olive Oil & Salt Glaze',
    description: 'Slow-tumbled in cold-pressed Spanish olive oil & pink rock salt. 0% palm fat.',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Priya S.',
    city: 'Bengaluru',
    rating: 5,
    date: '2 days ago',
    title: 'Zero unpopped shells! Crunchiest makhana ever',
    comment:
      'Completely clean, uniformly huge kernels seasoned with olive oil rather than heavy palm fat. Ordering the 4-pack again!',
    verifiedBuyer: true,
    packPurchased: 'Twin Snack Duo (500g)',
    flavor: 'Himalayan Pink Salt',
  },
  {
    id: 'rev-2',
    author: 'Rohit K.',
    city: 'Pune',
    rating: 5,
    date: '1 week ago',
    title: 'Perfect 4 PM office snack with zero crash',
    comment:
      'Replaced chips with this. Feels light, keeps me full till dinner, and the Peri-Peri flavor has a great spicy kick.',
    verifiedBuyer: true,
    packPurchased: 'Trio Variety Box',
    flavor: 'Smoky Peri-Peri',
  },
  {
    id: 'rev-3',
    author: 'Ananya M.',
    city: 'Delhi NCR',
    rating: 5,
    date: '2 weeks ago',
    title: 'Authentic 6+ soot jumbo size',
    comment:
      'Top-tier size. Plump, snow-white, crispy without being greasy. Packaging stayed completely fresh for 3 weeks.',
    verifiedBuyer: true,
    packPurchased: 'Twin Snack Duo (500g)',
    flavor: 'Himalayan Pink Salt',
  },
];

export const FAQ_LIST = [
  {
    question: 'What makes Mithila Makhana superior to grocery store fox nuts?',
    answer:
      'We select only top 10% 6+ soot jumbo seeds from Mithila (GI #842) and roast in cold-pressed olive oil rather than palm fat. Zero burnt husks or grit.',
  },
  {
    question: 'How long does crunchiness last after opening?',
    answer:
      'Airtight resealable ziplock preserves peak crispness for up to 90 days after opening. Unopened pouches stay fresh for 12 months.',
  },
  {
    question: 'Is this suitable for fasting (Vrat) and diabetics?',
    answer:
      'Yes, 100%. Low glycemic index (GI 35), gluten-free, zero cholesterol, and fully fasting compliant.',
  },
  {
    question: 'What are the delivery timelines?',
    answer:
      'Dispatched in 24 hours. Metro deliveries arrive in 2–3 business days. Free shipping on orders over ₹499.',
  },
];
