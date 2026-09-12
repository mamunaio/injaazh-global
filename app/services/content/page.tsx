import ContentClient from "@/components/services/ContentClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Narrative, Editorial & High-Converting Copywriting | INJAAZH",
  description:
    "Psychology-driven direct response copywriting, executive thought leadership, and strategic brand narratives engineered for enterprise authority across US, UK, and global markets.",
  alternates: {
    canonical: "https://injaazh.com/services/content",
  },
  openGraph: {
    title: "Brand Narrative, Editorial & High-Converting Copywriting | INJAAZH",
    description:
      "Psychology-driven direct response copywriting, executive thought leadership, and strategic brand narratives engineered for enterprise authority across US, UK, and global markets.",
    url: "https://injaazh.com/services/content",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/novacore_esports_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Brand Narrative & Content Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Narrative, Editorial & High-Converting Copywriting | INJAAZH",
    description:
      "Psychology-driven direct response copywriting, executive thought leadership, and strategic brand narratives engineered for enterprise authority across US, UK, and global markets.",
    images: ["https://injaazh.com/assets/novacore_esports_final.webp"],
  },
};

export default function ContentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://injaazh.com/services/content#service",
        name: "Brand Narrative & Content Architecture",
        provider: {
          "@type": "Organization",
          name: "INJAAZH",
          url: "https://injaazh.com",
        },
        description:
          "Psychology-driven direct response copywriting, executive thought leadership, and strategic brand narratives engineered for enterprise authority across US, UK, and global markets.",
        url: "https://injaazh.com/services/content",
        areaServed: ["US", "UK", "CA", "AU", "Worldwide"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Content & Narrative Capabilities",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Conversion Copywriting & Direct Response",
                url: "https://injaazh.com/services/content/copywriting",
                description:
                  "High-converting sales pages, landing page wireframe copy, email funnels, and micro-copy engineered around buyer psychology.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Editorial Writing & Executive Thought Leadership",
                url: "https://injaazh.com/services/content/editorial-writing",
                description:
                  "Research-backed white papers, executive thought leadership op-eds, deep industry analysis, and compounding topical assets.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brand Narrative & Core Positioning",
                url: "https://injaazh.com/services/content/brand-narrative",
                description:
                  "Brand origin stories, tone of voice documentation, strategic positioning architectures, and mission messaging frameworks.",
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
            name: "Content & Copywriting",
            item: "https://injaazh.com/services/content",
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
      <ContentClient />
    </>
  );
}
