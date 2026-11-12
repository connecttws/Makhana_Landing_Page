# Mithila Naturale - Artisanal Jumbo Makhana Landing Page

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

A high-converting, responsive direct-to-consumer (D2C) e-commerce landing page crafted for **Mithila Naturale (Artisanal Jumbo Makhana)**. Showcases GI-Tagged origin, superfood nutritional credentials, interactive bundle configurator, dynamic cart drawer, discount rules engine, and express checkout flow.

---

## 🌟 Key Highlights & Value Proposition

- **Geographical Indication (GI) Certified**: Authenticated origin from the wetlands of Mithila, Bihar.
- **Artisanal Wood-Fire Roasting**: Hand-popped in small batches using traditional wood-fire clay chulhas with cold-pressed A2 cow ghee.
- **Superior Nutritional Profile**:
  - **9.7g** Plant Protein & **14.5g** Dietary Fiber per 100g.
  - **Low Glycemic Index (GI 35)**: Zero sugar spikes, diabetic-friendly.
  - **0% Trans Fat & 0% Cholesterol**: Clean heart-healthy snacking.
- **Conversion-Centric UX**: Engineered with neuro-snacking behavioral science, clear social proof, instant cart triggers, and friction-free checkout.

---

## 🚀 Features & Modules

### 1. Header & Promotional Bar
- **Sticky Announcement Bar**: Dynamic banner with active discount codes (e.g., `CRUNCH10`) and free shipping thresholds.
- **Minimalist Navigation**: Quick anchors to Story, Nutrition, Bundles, Customer Reviews, and FAQs with live cart counter badge.

### 2. Hero & Value Architecture
- **Impactful Hero Section**: High-resolution product imagery, trust badges (FSSAI, Non-GMO, GI Certified), and dual CTA paths.
- **Social Proof Callouts**: 4.9★ rating indicators and customer testimonials.

### 3. Product & Bundle Configurator
- **Tiered Pack Selector**:
  - *Starter Trial Pouch* (250g)
  - *Twin Snack Duo* (500g — Most Popular)
  - *Family Superfood Bundle* (1kg — Best Value)
- **Gourmet Flavor Variants**: Himalayan Pink Salt, Spiced Peri Peri, Mint Pudina & Herbed Cheesy crunch.
- **Dynamic Price Engine**: Real-time discount calculations, savings breakdown, and free shipping triggers.

### 4. Interactive Cart Drawer & Express Checkout
- **Sliding Slide-Over Cart Drawer**: Quantity increments, instant bundle swaps, and order breakdown.
- **Express Checkout Modal**: Form validation for shipping address, phone, and payment method selection (UPI, Cards, NetBanking, COD).
- **Lead Capture Integration**: Compatible with BooClient CRM lead tracker for real-time order attribution.

### 5. Educational & Storytelling Sections
- **Neuro-Snacking Psychology**: Explains the crunch feedback loop and mindful snacking benefits.
- **Direct Snack Comparison Table**: Macro breakdown vs. fried potato chips, popcorn, and salted peanuts.
- **Craftsmanship Timeline**: From early-morning lily pond harvest to wood-fire roasting.
- **Customer Reviews & Trust Guarantees**: Verified buyer testimonials, 7-day freshness guarantee, and accordion FAQs.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router & Turbopack) |
| **Frontend Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Analytics & CRM** | BooClient CRM Lead Tracker script |
| **Deployment** | Vercel / Node.js |

---

## 📂 Project Directory Structure

```text
Makhana_Landing_Page/
├── public/
│   ├── crm-lead-tracker.js    # Client-side analytics & lead capture script
│   └── images/                # Optimized product & story photography
│       ├── hero_makhana_packaging_1794312039925.jpg
│       ├── product_makhana_bowl_1794312039887.jpg
│       ├── makhana_harvest_source_1794312040995.jpg
│       └── makhana_lifestyle_snack_1794312041044.jpg
├── src/
│   ├── app/
│   │   ├── globals.css        # Global CSS and Tailwind directives
│   │   ├── layout.tsx         # Root layout, Google Fonts, and CRM tracker inject
│   │   └── page.tsx           # Assembled single-page conversion architecture
│   ├── components/
│   │   ├── PromoBanner.tsx    # Top promotional banner with discount codes
│   │   ├── Navbar.tsx         # Responsive navbar with cart drawer badge
│   │   ├── HeroSection.tsx    # Hero section with trust badges and primary CTA
│   │   ├── NeuroSnackingPsychology.tsx # Nutritional & behavioral science module
│   │   ├── ProductPurchaseModule.tsx   # Pack & flavor selector with dynamic pricing
│   │   ├── CartDrawer.tsx     # Slide-over cart drawer with order items
│   │   ├── CheckoutModal.tsx  # Express checkout modal with form validation
│   │   ├── SuperfoodBenefits.tsx # Macro comparison & superfood health benefits
│   │   ├── CraftsmanshipStory.tsx# Step-by-step artisanal harvesting & roasting
│   │   ├── CustomerReviews.tsx   # Verified customer testimonials & ratings
│   │   ├── TrustGuarantees.tsx   # Safe delivery & quality assurances
│   │   ├── FAQSection.tsx        # Expandable accordion FAQs
│   │   └── Footer.tsx            # Compliance, links, and footer navigation
│   ├── data/
│   │   └── product-data.ts    # Nutritional facts, reviews, and product meta
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for Cart, Products, and Reviews
│   └── utils/
│       └── cart-rules.ts      # Bundle calculation, discount tiers, and promo logic
├── visual-data/               # Extracted layout designs and content schemas
├── next.config.ts             # Next.js build configuration
├── package.json               # Project manifest and scripts
├── postcss.config.mjs         # PostCSS configuration for Tailwind CSS
├── tsconfig.json              # TypeScript compiler settings
└── README.md                  # Comprehensive project documentation
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v18.18+` or `v20+` recommended
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone git@github-tws:connecttws/Makhana_Landing_Page.git
   cd Makhana_Landing_Page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

---

## 📦 Production Build & Deployment

To generate a standalone optimized production build:

```bash
# Compile and optimize for production
npm run build

# Start the production server
npm run start
```

### Deploy to Vercel

The easiest way to deploy this Next.js project is using the [Vercel Platform](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project into your Vercel Dashboard.
3. Next.js defaults will automatically detect the build settings (`next build`).
4. Click **Deploy**.

---

## 📊 CRM Lead Tracker Setup

The page includes integration with the **BooClient CRM Lead Tracker**:
- Script located at `public/crm-lead-tracker.js`.
- Loaded asynchronously in `src/app/layout.tsx`.
- Form inputs in `src/components/CheckoutModal.tsx` include explicit `name` and `data-question` attributes for automatic submission capture and order attribution.

---

## 📄 License

This project is licensed under the MIT License — feel free to customize and extend for your product marketing needs.
