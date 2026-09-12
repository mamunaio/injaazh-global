import { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Enterprise Digital Services & Next.js Architectures | INJAAZH",
  description:
    "Explore INJAAZH's enterprise capability suite across 6 core pillars and 18 specialized digital architectures: Next.js Web Development, UI/UX Design Systems, Algorithmic Technical SEO, Growth Marketing, Strategic Content, and Digital Transformation.",
  keywords: [
    "Enterprise Next.js Development",
    "Digital Services INJAAZH",
    "Headless Commerce Migration",
    "Technical SEO Agency",
    "UI/UX Design Systems",
    "PPC Growth Automation",
    "Digital Transformation Consultancy",
  ],
  alternates: {
    canonical: "https://injaazh.com/services",
  },
  openGraph: {
    title: "Enterprise Digital Services & Next.js Architectures | INJAAZH",
    description:
      "Explore INJAAZH's enterprise capability suite across 6 core pillars and 18 specialized digital architectures: Next.js Web Development, UI/UX Design Systems, Algorithmic Technical SEO, Growth Marketing, Strategic Content, and Digital Transformation.",
    url: "https://injaazh.com/services",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png",
        width: 1200,
        height: 630,
        alt: "INJAAZH Enterprise Digital Services Suite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Digital Services & Next.js Architectures | INJAAZH",
    description:
      "Explore INJAAZH's enterprise capability suite across 6 core pillars and 18 specialized digital architectures built for absolute velocity, security, and conversion.",
    images: ["https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema: Enterprise Services & OfferCatalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://injaazh.com/services/#webpage",
                "url": "https://injaazh.com/services",
                "name": "Enterprise Digital Services & Next.js Architectures | INJAAZH",
                "description":
                  "Explore INJAAZH's enterprise capability suite across 6 core pillars and 18 specialized digital architectures.",
                "isPartOf": {
                  "@id": "https://injaazh.com/#website",
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://injaazh.com",
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Services",
                      "item": "https://injaazh.com/services",
                    },
                  ],
                },
              },
              {
                "@type": "Service",
                "@id": "https://injaazh.com/services/#service-catalog",
                "name": "INJAAZH Enterprise Digital Services",
                "provider": {
                  "@type": "Organization",
                  "name": "INJAAZH",
                  "url": "https://injaazh.com",
                  "logo": "https://injaazh.com/favicon.ico",
                },
                "serviceType": "Full-Cycle Digital Engineering & Architectural Consulting",
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Capabilities & Digital Architectures",
                  "itemListElement": [
                    {
                      "@type": "OfferCatalog",
                      "name": "Enterprise Web Development",
                      "url": "https://injaazh.com/services/web-dev",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js Architectures", "url": "https://injaazh.com/services/web-dev/nextjs-architectures" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Headless Commerce", "url": "https://injaazh.com/services/web-dev/headless-commerce" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Apps", "url": "https://injaazh.com/services/web-dev/custom-web-apps" } },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "UI/UX Design Systems",
                      "url": "https://injaazh.com/services/ui-ux-design",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity", "url": "https://injaazh.com/services/ui-ux-design/brand-identity" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design Systems", "url": "https://injaazh.com/services/ui-ux-design/design-systems" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motion Graphics", "url": "https://injaazh.com/services/ui-ux-design/motion-graphics" } },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "Technical SEO & AEO",
                      "url": "https://injaazh.com/services/seo",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical Audits", "url": "https://injaazh.com/services/seo/technical-audits" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Strategy", "url": "https://injaazh.com/services/seo/keyword-strategy" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Rankings", "url": "https://injaazh.com/services/seo/local-rankings" } },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "Growth Marketing & PPC",
                      "url": "https://injaazh.com/services/marketing",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Campaigns", "url": "https://injaazh.com/services/marketing/ppc-campaigns" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth Automation", "url": "https://injaazh.com/services/marketing/growth-automation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Optimization", "url": "https://injaazh.com/services/marketing/conversion-optimization" } },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "Content & Narrative",
                      "url": "https://injaazh.com/services/content",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Copywriting", "url": "https://injaazh.com/services/content/copywriting" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Editorial Writing", "url": "https://injaazh.com/services/content/editorial-writing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Narrative", "url": "https://injaazh.com/services/content/brand-narrative" } },
                      ],
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "Strategy & Intelligence",
                      "url": "https://injaazh.com/services/strategy",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation", "url": "https://injaazh.com/services/strategy/digital-transformation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Intelligence", "url": "https://injaazh.com/services/strategy/business-intelligence" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise UX Audits", "url": "https://injaazh.com/services/strategy/ux-audits" } },
                      ],
                    },
                  ],
                },
              },
            ],
          }),
        }}
      />
      <ServicesClient />
    </>
  );
}
