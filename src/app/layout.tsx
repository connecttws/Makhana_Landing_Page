import type { Metadata } from 'next';
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

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
    <html lang="en" className={`${montserrat.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Direct Google Fonts Links for Ultra-Crisp Montserrat Typography (As seen on House of Makhana) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
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
