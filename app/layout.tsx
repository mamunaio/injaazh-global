import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ProjectModalContext";
import ClientWidgets from "@/components/ClientWidgets";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Injaazh | Full-Service Digital Agency — Web, SEO & Content",
  description: "Injaazh is a full-service digital agency trusted by 1,200+ clients across 20+ countries. We build fast websites, rank you on Google, and create content that converts.",
  alternates: {
    canonical: "https://injaazh.com",
  },
  openGraph: {
    title: "Injaazh | Full-Service Digital Agency — Web, SEO & Content",
    description: "Injaazh is a full-service digital agency trusted by 1,200+ clients across 20+ countries. We build fast websites, rank you on Google, and create content that converts.",
    type: "website",
    url: "https://injaazh.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Injaazh | Full-Service Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Injaazh | Full-Service Digital Agency — Web, SEO & Content",
    description: "Injaazh is a full-service digital agency trusted by 1,200+ clients across 20+ countries. We build fast websites, rank you on Google, and create content that converts.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Injaazh",
  "url": "https://injaazh.com",
  "logo": "https://injaazh.com/logo.png",
  "description": "Full-service digital agency offering web development, SEO, digital marketing, and content writing to clients across the US, UK, Australia, Canada, and UAE.",
  "foundingDate": "2023",
  "numberOfEmployees": "10-50",
  "areaServed": ["US", "GB", "AU", "CA", "AE"],
  "serviceType": [
    "Web Development",
    "Search Engine Optimization",
    "Digital Marketing",
    "Content Writing"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English",
    "email": "info@injaazh.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/injaazh",
    "https://twitter.com/injaazh",
    "https://www.facebook.com/injaazh"
  ]
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Injaazh",
  "url": "https://injaazh.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit Card, Bank Transfer, Payoneer",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Country",
      "name": "Australia"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom websites and web applications built with Next.js, React, and WordPress. PageSpeed 99/100 guaranteed."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Search Engine Optimization",
          "description": "Technical SEO, on-page optimization, and link building for US, UK, and Australian markets."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Google Ads, Meta Ads, and full-funnel marketing campaigns for Western markets."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Writing",
          "description": "SEO-optimized blog content, website copywriting, and sales copy for global audiences."
        }
      }
    ]
  }
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Injaazh",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "127"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${dmSans.variable} ${bebasNeue.variable} ${spaceMono.variable} font-sans antialiased relative min-h-screen`}>
        {/* Hero Ambient Glow (Top Only) */}
        <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[80vw] h-[50vw] max-w-[1000px] bg-[#6324FC] opacity-[0.05] dark:opacity-[0.08] pointer-events-none blur-[150px] rounded-full z-[50]" />

        <ModalProvider>
          <ClientWidgets />
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
