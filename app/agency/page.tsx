import { Metadata } from "next";
import AgencyClient from "@/components/AgencyClient";

export const metadata: Metadata = {
  title: "Global Digital Agency | Enterprise Web Development & SEO | Injaazh",
  description: "Injaazh is an elite global digital agency specializing in enterprise web development, advanced SEO strategy, and high-converting UI/UX design. We engineer digital dominance.",
  keywords: ["Global Digital Agency", "Enterprise Web Development", "SEO Strategy", "UI/UX Design Agency", "B2B SaaS Development", "Headless Commerce", "Digital Strategy"],
  openGraph: {
    title: "Global Digital Agency | Enterprise Web Development & SEO",
    description: "Injaazh is an elite global digital agency specializing in enterprise web development, advanced SEO strategy, and high-converting UI/UX design.",
    url: "https://injaazh.com/agency",
    type: "website",
  },
};

export default function AgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Injaazh Global Digital Agency",
    "image": "https://injaazh.com/logo.png",
    "description": "An elite global digital agency engineering custom web applications, advanced technical SEO strategies, and high-converting UI/UX architectures for enterprise clients.",
    "url": "https://injaazh.com/agency",
    "telephone": "+971-000-0000",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DIFC",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "areaServed": ["US", "GB", "AU", "CA", "AE"],
    "sameAs": [
      "https://twitter.com/injaazh",
      "https://linkedin.com/company/injaazh"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "Enterprise Web Development"
        },
        {
          "@type": "Service",
          "name": "Global SEO Strategy"
        },
        {
          "@type": "Service",
          "name": "UI/UX Design & Architecture"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgencyClient />
    </>
  );
}
