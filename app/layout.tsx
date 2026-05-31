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
  title: "Injaazh | Top-Tier Global Digital Agency — Web Design, Technical SEO & Content",
  description: "Injaazh is a premium full-service digital agency trusted by 1,200+ global brands. We engineer ultra-fast Next.js websites, dominate Google search rankings with Technical SEO, and scale revenue with data-driven content marketing.",
  alternates: {
    canonical: "https://injaazh.com",
  },
  openGraph: {
    title: "Injaazh | Top-Tier Global Digital Agency — Web Design & Technical SEO",
    description: "Injaazh is a premium full-service digital agency trusted by 1,200+ global brands. We engineer ultra-fast websites, dominate Google search, and scale revenue.",
    type: "website",
    url: "https://injaazh.com",
    siteName: "Injaazh Global Digital Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Injaazh | Premium Global Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Injaazh | Premium Global Digital Agency — Web Design & SEO",
    description: "Injaazh is a premium full-service digital agency trusted by 1,200+ global brands. We engineer ultra-fast websites, dominate Google search, and scale revenue.",
    images: ["/og-image.png"],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://injaazh.com/#website",
  "url": "https://injaazh.com",
  "name": "Injaazh",
  "publisher": {
    "@id": "https://injaazh.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://injaazh.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://injaazh.com/#organization",
  "name": "Injaazh",
  "url": "https://injaazh.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://injaazh.com/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "Premium full-service digital agency specializing in high-performance web development, technical SEO, and conversion-focused content marketing for global enterprise clients.",
  "foundingDate": "2023",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "areaServed": ["US", "GB", "AU", "CA", "AE"],
  "knowsAbout": [
    "Web Development",
    "Next.js Development",
    "Technical SEO",
    "Search Engine Optimization",
    "Content Marketing",
    "Digital Marketing Strategy"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English"],
    "email": "info@injaazh.com",
    "contactOption": "TollFree"
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
  "@id": "https://injaazh.com/#professionalService",
  "name": "Injaazh Digital Services",
  "url": "https://injaazh.com",
  "parentOrganization": {
    "@id": "https://injaazh.com/#organization"
  },
  "priceRange": "$$$",
  "currenciesAccepted": "USD, GBP, AUD",
  "paymentAccepted": "Credit Card, Bank Transfer, Payoneer",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Digital Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Web Development",
          "description": "Custom high-performance web applications built with Next.js and React. Specialized in Core Web Vitals optimization and headless commerce architectures."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Search Engine Optimization (SEO)",
          "description": "Advanced technical SEO audits, site architecture optimization, and programmatic SEO solutions for aggressive international market penetration."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "B2B Content Marketing",
          "description": "Topical authority focused content silos, SEO-optimized editorial content, and high-conversion copywriting engineered for elite global audiences."
        }
      }
    ]
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${dmSans.variable} ${bebasNeue.variable} ${spaceMono.variable} font-sans antialiased relative min-h-screen overflow-x-hidden w-full max-w-[100vw]`}>
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
