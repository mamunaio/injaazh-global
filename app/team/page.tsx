import { Metadata } from "next";
import TeamClient from "@/components/TeamClient";

export const metadata: Metadata = {
  title: "Our Team | The Collective Minds Behind Injaazh",
  description: "Meet the visionary architects, engineers, and strategists at Injaazh who build digital ecosystems and drive exponential growth for global enterprises.",
  keywords: ["Injaazh Team", "Digital Architects", "Web Engineers", "Growth Strategists", "Executive Leadership"],
  openGraph: {
    title: "Our Team | Injaazh",
    description: "Meet the visionary architects, engineers, and strategists at Injaazh.",
    url: "https://injaazh.com/team",
    type: "website",
  },
};

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Injaazh Team",
    "description": "The collective minds behind Injaazh, consisting of top-tier architects, engineers, and strategists.",
    "url": "https://injaazh.com/team",
    "mainEntity": {
      "@type": "Organization",
      "name": "Injaazh",
      "url": "https://injaazh.com",
      "logo": "https://injaazh.com/logo.png"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeamClient />
    </>
  );
}
