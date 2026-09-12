import WebDevClient from "@/components/services/WebDevClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Web Development & Next.js Architecture | INJAAZH",
  description:
    "High-performance Next.js 15 architectures, React Server Components, Headless Commerce, and custom cloud-native web applications engineered for sub-second speeds and global scale.",
  alternates: {
    canonical: "https://injaazh.com/services/web-dev",
  },
  openGraph: {
    title: "Enterprise Web Development & Next.js Architecture | INJAAZH",
    description:
      "High-performance Next.js 15 architectures, React Server Components, Headless Commerce, and custom cloud-native web applications engineered for sub-second speeds and global scale.",
    url: "https://injaazh.com/services/web-dev",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png",
        width: 1200,
        height: 630,
        alt: "INJAAZH Enterprise Web Development & Next.js Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Web Development & Next.js Architecture | INJAAZH",
    description:
      "High-performance Next.js 15 architectures, React Server Components, Headless Commerce, and custom cloud-native web applications engineered for sub-second speeds and global scale.",
    images: ["https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png"],
  },
};

export default function WebDevPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://injaazh.com/services/web-dev#service",
        name: "Enterprise Web Development",
        provider: {
          "@type": "Organization",
          name: "INJAAZH",
          url: "https://injaazh.com",
        },
        description:
          "High-performance Next.js architectures, React applications, and seamless Headless Commerce migrations built for absolute speed and scale.",
        url: "https://injaazh.com/services/web-dev",
        areaServed: ["US", "UK", "CA", "AU", "Worldwide"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Capabilities",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Next.js & Edge Architectures",
                url: "https://injaazh.com/services/web-dev/nextjs-architectures",
                description: "React Server Components, edge computing, ISR caching, and sub-second global delivery.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Headless Commerce & Shopify Plus",
                url: "https://injaazh.com/services/web-dev/headless-commerce",
                description: "Decoupled storefronts, sub-second checkout pipelines, Shopify Storefront API, and omnichannel sync.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Web Applications & SaaS",
                url: "https://injaazh.com/services/web-dev/custom-web-apps",
                description: "Full-stack cloud-native software, multi-tenant SaaS engines, real-time dashboards, and custom APIs.",
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
            name: "Web Development",
            item: "https://injaazh.com/services/web-dev",
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
      <WebDevClient />
    </>
  );
}
