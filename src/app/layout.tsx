import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mithila Naturale — Artisanal Roasted Jumbo Fox Nuts (Makhana)',
  description:
    'Premium, extra-crunchy wood-fire roasted Fox Nuts from Mithila. 0% palm oil, high protein, low GI, glazed in Spanish olive oil & Himalayan pink salt.',
  openGraph: {
    title: 'Mithila Naturale — Artisanal Roasted Jumbo Fox Nuts',
    description:
      'Direct-from-source organic jumbo Fox Nuts. 0% palm oil, low GI (35), wood-fire roasted for pure crunch.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mithila Naturale — Artisanal Roasted Jumbo Fox Nuts',
    description:
      'Direct-from-source organic jumbo Fox Nuts. 0% palm oil, low GI (35), wood-fire roasted for pure crunch.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Direct Google Fonts Links: Plus Jakarta Sans (Fine & Luxury) + Montserrat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FFF8F1] text-[#222222] font-sans antialiased selection:bg-[#FFE0B2] selection:text-[#E65100]">
        {children}

        {/* BooClient CRM Lead Tracker Integration */}
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
