import SeoClient from "@/components/services/SeoClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise SEO & Algorithmic Search Dominance | INJAAZH",
  description:
    "Data-driven technical SEO audits, semantic keyword strategies, and high-authority link acquisition engineered to dominate Page 1 across the US, UK, Australia, and global search markets.",
  alternates: {
    canonical: "https://injaazh.com/services/seo",
  },
  openGraph: {
    title: "Enterprise SEO & Algorithmic Search Dominance | INJAAZH",
    description:
      "Data-driven technical SEO audits, semantic keyword strategies, and high-authority link acquisition engineered to dominate Page 1 across the US, UK, Australia, and global search markets.",
    url: "https://injaazh.com/services/seo",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/nexus_esports_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Enterprise SEO & Algorithmic Search Dominance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise SEO & Algorithmic Search Dominance | INJAAZH",
    description:
      "Data-driven technical SEO audits, semantic keyword strategies, and high-authority link acquisition engineered to dominate Page 1 across the US, UK, Australia, and global search markets.",
    images: ["https://injaazh.com/assets/nexus_esports_final.webp"],
  },
};

export default function SEOPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://injaazh.com/services/seo#service",
        name: "Enterprise Search Engine Optimization",
        provider: {
          "@type": "Organization",
          name: "INJAAZH",
          url: "https://injaazh.com",
        },
        description:
          "Data-driven technical SEO audits, semantic keyword strategies, and high-authority link acquisition engineered to dominate Page 1 across the US, UK, Australia, and global search markets.",
        url: "https://injaazh.com/services/seo",
        areaServed: ["US", "UK", "CA", "AU", "Worldwide"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Search Optimization Capabilities",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Technical SEO Audits & Core Web Vitals",
                url: "https://injaazh.com/services/seo/technical-audits",
                description:
                  "Crawl budget optimization, JavaScript rendering audits, schema graph architecture, and Core Web Vitals performance.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Semantic Keyword Strategy & Search Intent",
                url: "https://injaazh.com/services/seo/keyword-strategy",
                description:
                  "Topic clustering, commercial intent mapping, competitor content gaps, and algorithmic revenue ranking models.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Local Rankings & Google Maps Dominance",
                url: "https://injaazh.com/services/seo/local-rankings",
                description:
                  "Google Business Profile optimization, local citation networks, geo-targeted landing pages, and Map Pack #1 rankings.",
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
            name: "Search Engine Optimization",
            item: "https://injaazh.com/services/seo",
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
      <SeoClient />
    </>
  );
}
