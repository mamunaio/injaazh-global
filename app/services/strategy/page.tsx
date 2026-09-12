import StrategyClient from "@/components/services/StrategyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation, Strategy & Business Intelligence | INJAAZH",
  description:
    "Pragmatic digital transformation roadmaps, enterprise business intelligence dashboards, and deep UX audits engineered to modernize architecture and accelerate market share across US, UK, and global markets.",
  alternates: {
    canonical: "https://injaazh.com/services/strategy",
  },
  openGraph: {
    title: "Digital Transformation, Strategy & Business Intelligence | INJAAZH",
    description:
      "Pragmatic digital transformation roadmaps, enterprise business intelligence dashboards, and deep UX audits engineered to modernize architecture and accelerate market share across US, UK, and global markets.",
    url: "https://injaazh.com/services/strategy",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/aka_moving_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Digital Strategy & Business Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation, Strategy & Business Intelligence | INJAAZH",
    description:
      "Pragmatic digital transformation roadmaps, enterprise business intelligence dashboards, and deep UX audits engineered to modernize architecture and accelerate market share across US, UK, and global markets.",
    images: ["https://injaazh.com/assets/aka_moving_final.webp"],
  },
};

export default function StrategyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://injaazh.com/services/strategy#service",
        name: "Digital Strategy & Business Intelligence",
        provider: {
          "@type": "Organization",
          name: "INJAAZH",
          url: "https://injaazh.com",
        },
        description:
          "Pragmatic digital transformation roadmaps, enterprise business intelligence dashboards, and deep UX audits engineered to modernize architecture and accelerate market share across US, UK, and global markets.",
        url: "https://injaazh.com/services/strategy",
        areaServed: ["US", "UK", "CA", "AU", "Worldwide"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Strategic Capabilities",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digital Transformation & Cloud Modernization",
                url: "https://injaazh.com/services/strategy/digital-transformation",
                description:
                  "Legacy monolithic deconstruction, cloud-native architectures, enterprise API orchestration, and technical roadmaps.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Intelligence & Data Analytics",
                url: "https://injaazh.com/services/strategy/business-intelligence",
                description:
                  "Executive KPI dashboards, real-time Looker Studio telemetry, GA4 event pipelines, and customer acquisition attribution.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UX Audits & Conversion Optimization",
                url: "https://injaazh.com/services/strategy/ux-audits",
                description:
                  "Heuristic evaluations, WCAG 2.1 AAA accessibility audits, behavioral heatmap diagnostics, and conversion rate optimization (CRO).",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://injaazh.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://injaazh.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Digital Strategy & Intelligence",
            item: "https://injaazh.com/services/strategy",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <StrategyClient />
    </>
  );
}
