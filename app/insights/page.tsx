import { Metadata } from "next";
import InsightsClient from "@/components/InsightsClient";

export const metadata: Metadata = {
  title: "Insights & Strategy | Engineering Global Market Dominance | Injaazh",
  description: "Explorations into the intersection of full-service digital strategy, engineering excellence, and global market dominance by Injaazh.",
  keywords: ["Digital Strategy", "Enterprise Engineering", "SEO Insights", "UI/UX Case Studies", "Headless Architecture"],
  openGraph: {
    title: "Insights & Strategy | Injaazh",
    description: "Explorations into the intersection of full-service digital strategy, engineering excellence, and global market dominance.",
    url: "https://injaazh.com/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Injaazh Insights",
    "description": "Expert insights on web development, SEO, digital marketing, and content strategy for businesses scaling in the US, UK & Australia.",
    "url": "https://injaazh.com/insights",
    "publisher": {
      "@type": "Organization",
      "name": "Injaazh",
      "logo": {
        "@type": "ImageObject",
        "url": "https://injaazh.com/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsClient />
    </>
  );
}
