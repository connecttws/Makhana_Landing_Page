# Mithila Naturale - Artisanal Jumbo Makhana Landing Page

A high-converting, responsive Next.js direct-to-consumer (D2C) e-commerce landing page crafted for **Mithila Naturale (Artisanal Jumbo Makhana)**, highlighting GI-Tagged origin, superfood nutritional benefits, interactive bundle selector, cart drawer, and seamless checkout flow.

## 🚀 Features

- **Responsive & Modern Architecture**: Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.
- **Conversion-Optimized Modules**:
  - Sticky Promo Announcement Bar with discount code support
  - Hero Section with GI Tag certification badges and instant bundle CTAs
  - Neuro-Snacking Psychology & Superfood Nutritional Benefits
  - Interactive Product Purchase Module with size/flavor bundle selections
  - Sliding Cart Drawer & Express Checkout Modal with validation
  - Artisanal Wood-Fire Roasting Craftsmanship Story
  - Verified Customer Reviews & Social Proof
  - Trust Guarantees & Accordion FAQs
- **Lead & Order Capture**: Pre-configured dual client/server CRM tracker script.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
├── public/                # Static assets, logos, and tracking scripts
│   └── crm-lead-tracker.js# Lead & conversion analytics tracking
├── src/
│   ├── app/               # Next.js App Router (Layout & Home)
│   │   ├── globals.css    # Custom styles & design tokens
│   │   ├── layout.tsx     # Root layout with fonts & metadata
│   │   └── page.tsx       # Landing page sections composition
│   ├── components/        # Modular UI and interactive components
│   │   ├── CartDrawer.tsx
│   │   ├── CheckoutModal.tsx
│   │   ├── CraftsmanshipStory.tsx
│   │   ├── CustomerReviews.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── NeuroSnackingPsychology.tsx
│   │   ├── ProductPurchaseModule.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── SuperfoodBenefits.tsx
│   │   └── TrustGuarantees.tsx
│   ├── data/              # Product catalog and bundle pricing
│   ├── types/             # TypeScript definitions
│   └── utils/             # Cart discount rules and calculations
```

## 🏁 Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Production Build

```bash
npm run build
npm run start
```
