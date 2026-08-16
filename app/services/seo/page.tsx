import SeoClient from "@/components/services/SeoClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise SEO Services | INJAAZH",
  description: "Aggressive keyword strategies and deep technical SEO audits to dominate search rankings and drive high-intent organic traffic.",
  openGraph: {
    title: "Enterprise SEO Services | INJAAZH",
    description: "Aggressive keyword strategies and deep technical SEO audits to dominate search rankings and drive high-intent organic traffic.",
    url: "https://injaazh.com/services/seo",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/nexus_esports_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Enterprise SEO Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise SEO Services | INJAAZH",
    description: "Aggressive keyword strategies and deep technical SEO audits to dominate search rankings and drive high-intent organic traffic.",
    images: ["https://injaazh.com/assets/nexus_esports_final.webp"],
  },
};

export default function SEOPage() {
  return (
    <>
      {/* JSON-LD Schema for SEO Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Enterprise Technical SEO",
            "provider": {
              "@type": "Organization",
              "name": "INJAAZH"
            },
            "description": "Aggressive keyword strategies and deep technical SEO audits to dominate search rankings and drive high-intent organic traffic.",
            "url": "https://injaazh.com/services/seo"
          }),
        }}
      />
      <SeoClient />
    </>
  );
}
