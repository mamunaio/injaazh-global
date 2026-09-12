import UiUxDesignClient from "@/components/services/UiUxDesignClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium UI/UX Design Agency | INJAAZH",
  description: "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
  openGraph: {
    title: "Premium UI/UX Design Agency | INJAAZH",
    description: "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
    url: "https://injaazh.com/services/ui-ux-design",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/b2b_saas_dashboard_1780213845016.png",
        width: 1200,
        height: 630,
        alt: "INJAAZH Premium UI/UX Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium UI/UX Design Agency | INJAAZH",
    description: "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
    images: ["https://injaazh.com/assets/b2b_saas_dashboard_1780213845016.png"],
  },
};

export default function UiUxDesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cinematic UI/UX Design & Design Systems",
    "serviceType": "UI/UX Design, Figma Token Systems & Motion Graphics",
    "provider": {
      "@type": "Organization",
      "name": "INJAAZH",
      "url": "https://injaazh.com"
    },
    "description": "Awwwards-caliber UI/UX design systems, tokenized component libraries, and interactive prototyping engineered for maximum conversion velocity.",
    "url": "https://injaazh.com/services/ui-ux-design",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UI/UX Design Sub-Architectures",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity & Visual Language",
            "url": "https://injaazh.com/services/ui-ux-design/brand-identity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Design Systems & Figma",
            "url": "https://injaazh.com/services/ui-ux-design/design-systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cinematic Motion & Micro-Interactions",
            "url": "https://injaazh.com/services/ui-ux-design/motion-graphics"
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
        "name": "UI/UX Design",
        "item": "https://injaazh.com/services/ui-ux-design"
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
      <UiUxDesignClient />
    </>
  );
}
