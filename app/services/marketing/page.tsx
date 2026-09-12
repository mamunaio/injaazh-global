import MarketingClient from "@/components/services/MarketingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing | INJAAZH",
  description: "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
  openGraph: {
    title: "Performance Marketing | INJAAZH",
    description: "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
    url: "https://injaazh.com/services/marketing",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/themes_jet_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Performance Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing | INJAAZH",
    description: "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
    images: ["https://injaazh.com/assets/themes_jet_final.webp"],
  },
};

export default function MarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Marketing & Growth Engineering",
    "serviceType": "Digital Marketing, PPC & CRO",
    "provider": {
      "@type": "Organization",
      "name": "INJAAZH",
      "url": "https://injaazh.com"
    },
    "description": "ROI-obsessed PPC campaigns, conversion rate optimization (CRO), and growth automation designed for exponential revenue growth.",
    "url": "https://injaazh.com/services/marketing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Performance Marketing Modules",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PPC Campaigns & Paid Search",
            "url": "https://injaazh.com/services/marketing/ppc-campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Automation & Retention",
            "url": "https://injaazh.com/services/marketing/growth-automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conversion Rate Optimization (CRO)",
            "url": "https://injaazh.com/services/marketing/conversion-optimization"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://injaazh.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://injaazh.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Marketing",
        "item": "https://injaazh.com/services/marketing"
      }
    ]
  };

  return (
    <>
      {/* Schema.org Service & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MarketingClient />
    </>
  );
}
