import { CustomerReview } from '../types';

export const PRODUCT_IMAGES = [
  {
    id: 'hero-packaging',
    src: '/images/hero_makhana_packaging_1794312039925.jpg',
    alt: 'Mithila Naturale Organic Roasted Makhana Packaging and Ceramic Bowl',
    label: 'Packaging & Bowl',
  },
  {
    id: 'product-bowl',
    src: '/images/product_makhana_bowl_1794312039887.jpg',
    alt: 'Handcrafted ceramic bowl filled with crispy jumbo roasted makhana with Himalayan pink salt',
    label: 'Crispy Macro Crunch',
  },
  {
    id: 'harvest-source',
    src: '/images/makhana_harvest_source_1794312040995.jpg',
    alt: 'Pristine lotus lily pond in Mithila Bihar at sunrise during traditional harvest',
    label: 'Mithila Origin Farm',
  },
  {
    id: 'lifestyle-snack',
    src: '/images/makhana_lifestyle_snack_1794312041044.jpg',
    alt: 'Healthy desk snack pairing roasted makhana with green tea and almonds',
    label: 'Everyday Superfood',
  },
];

export const NUTRITION_PER_100G = [
  { label: 'Plant Protein', value: '9.7 g', subtext: 'Essential amino acids for muscle repair' },
  { label: 'Dietary Fiber', value: '14.5 g', subtext: 'Supports smooth digestion & fullness' },
  { label: 'Total Fat', value: '0.1 g', subtext: '0% Trans Fat · 0% Cholesterol' },
  { label: 'Calcium & Magnesium', value: '390 mg', subtext: 'Strengthens bone density & heart rhythm' },
  { label: 'Potassium', value: '500 mg', subtext: 'Natural electrolyte balance' },
  { label: 'Glycemic Index', value: 'Low (GI 35)', subtext: 'Zero spike in blood glucose' },
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
    snack: 'Movie Theatre Popcorn',
    calories: '165 kcal',
    fat: '11.0 g',
    protein: '2.0 g',
    fiber: '2.5 g',
    gi: 'High (65)',
    transFat: 'Present',
    isHero: false,
  },
  {
    snack: 'Fried Potato Chips',
    calories: '220 kcal',
    fat: '15.5 g',
    protein: '1.8 g',
    fiber: '1.2 g',
    gi: 'High (70)',
    transFat: 'High',
    isHero: false,
  },
  {
    snack: 'Roasted Salted Peanuts',
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
    title: 'GI-Tagged Wetland Harvesting',
    description:
      'Harvested by skilled indigenous farmers from freshwater ponds in Mithila, Bihar—the fertile agro-climatic epicenter of the world’s finest lotus seeds.',
  },
  {
    step: '02',
    title: 'Hand-Sifted 6+ Soot Jumbo Sizing',
    description:
      'We grade every single seed using precision sieves. Only the largest 10% of raw seeds (grade 6+ soot) qualify for our batches, ensuring hollow airy expansion.',
  },
  {
    step: '03',
    title: 'Traditional Wood-Fire Popping',
    description:
      'Popped at 280°C in heavy iron pans using aged hardwood coals. The natural steam expansion yields a light, cloud-like crunch without chemical bleaching.',
  },
  {
    step: '04',
    title: 'Olive Oil & Himalayan Salt Glaze',
    description:
      'Gently tumbled with cold-pressed Spanish olive oil and hand-milled pink rock salt. Nitrogen-flushed in multilayer ziplock pouches for 12 months crispness.',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Priya Sundaram',
    city: 'Bengaluru',
    rating: 5,
    date: '2 days ago',
    title: 'Zero unpopped hard shells! The crunchiest makhana I have ever had',
    comment:
      'Most market brands have tiny kernels with black crusty bits that hurt your teeth. Mithila Naturale is completely clean, uniformly huge, and seasoned with genuine olive oil rather than heavy palm fat. Ordering the 4-pack again!',
    verifiedBuyer: true,
    packPurchased: 'Twin Snack Duo (500g)',
    flavor: 'Himalayan Pink Salt & Olive Oil',
  },
  {
    id: 'rev-2',
    author: 'Rohit Kulkarni',
    city: 'Pune',
    rating: 5,
    date: '1 week ago',
    title: 'Perfect 4 PM office snack that doesn’t induce a sugar crash',
    comment:
      'I replaced oily potato chips and biscuits with this during my workday. It feels extremely light on the stomach, keeps me full till dinner, and the fresh pudina flavor has a real zesty kick. Highly recommended.',
    verifiedBuyer: true,
    packPurchased: 'Family Superfood Bundle (1kg)',
    flavor: 'Fresh Pudina & Roasted Cumin',
  },
  {
    id: 'rev-3',
    author: 'Ananya Mehra',
    city: 'New Delhi',
    rating: 5,
    date: '2 weeks ago',
    title: 'Authentic Mithila quality. Reminds me of my grandmother’s kitchen',
    comment:
      'Being originally from Darbhanga, I know real makhana. This is top-tier 6+ soot size. Plump, snow-white, crispy without being greasy. Packaging is resealable and kept fresh for over 3 weeks.',
    verifiedBuyer: true,
    packPurchased: 'Twin Snack Duo (500g)',
    flavor: 'Himalayan Pink Salt & Olive Oil',
  },
  {
    id: 'rev-4',
    author: 'Vikramaditya Sen',
    city: 'Kolkata',
    rating: 4,
    date: '3 weeks ago',
    title: 'Great natural crunch and guilt-free snacking',
    comment:
      'Bought the raw jumbo grade for roasting in desi cow ghee at home. Every single seed popped into an airy sphere. Delivery was completed in 48 hours to Kolkata.',
    verifiedBuyer: true,
    packPurchased: 'Starter Trial Pouch (250g)',
    flavor: 'Pure Naturale Jumbo (Unroasted)',
  },
];

export const FAQ_LIST = [
  {
    question: 'What makes Mithila Makhana superior to regular grocery store fox nuts?',
    answer:
      'Mithila produces over 85% of India’s GI-certified fox nuts. We select only the top 10% 6+ soot jumbo seeds, sun-dry them traditionally, and roast them in cold-pressed olive oil rather than cheap vegetable oil. You get larger, fluffier kernels with zero burnt husks or grit.',
  },
  {
    question: 'How long does the crunchiness last after opening?',
    answer:
      'Our pouches feature a heavy-duty moisture barrier and airtight resealable ziplock. Reseal tightly after each serving to preserve peak crispness for up to 90 days after opening. Unopened pouches remain fresh for 12 months from packing.',
  },
  {
    question: 'Is this suitable for diabetics, fasting (Vrat), and keto diets?',
    answer:
      'Yes, 100%. Makhana has a low glycemic index (GI 35), is completely gluten-free, zero cholesterol, and rich in natural magnesium. The Raw Naturale and Himalayan Pink Salt variants are fully permissible during Vrat/Navratri fasting.',
  },
  {
    question: 'What are the delivery timelines and shipping charges?',
    answer:
      'Orders are dispatched within 24 hours from our packaging facility. Metro deliveries arrive in 2–3 business days; other regions take 3–5 days. All orders over ₹499 qualify for 100% Free Express Shipping.',
  },
  {
    question: 'What if I am not satisfied with the crunch?',
    answer:
      'We stand behind our craft with a 100% Crispness Guarantee. If your pouch arrives soggy or damaged, contact us within 7 days for a hassle-free replacement or full refund.',
  },
];

