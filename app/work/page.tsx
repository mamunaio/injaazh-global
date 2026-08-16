import WorkClient from "@/components/WorkClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Work & Case Studies | INJAAZH",
  description: "Explore our portfolio of high-performance Next.js websites, technical SEO transformations, and enterprise digital solutions built by INJAAZH.",
  openGraph: {
    title: "Featured Work & Case Studies | INJAAZH",
    description: "Explore our portfolio of high-performance Next.js websites, technical SEO transformations, and enterprise digital solutions built by INJAAZH.",
    url: "https://injaazh.com/work",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/themes_jet_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Featured Work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Work & Case Studies | INJAAZH",
    description: "Explore our portfolio of high-performance Next.js websites, technical SEO transformations, and enterprise digital solutions built by INJAAZH.",
    images: ["https://injaazh.com/assets/themes_jet_final.webp"],
  },
};

export default function WorkPage() {
  return (
    <>
      {/* JSON-LD Schema for Portfolio / CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Featured Work & Case Studies",
            "description": "Explore our portfolio of high-performance Next.js websites, technical SEO transformations, and enterprise digital solutions built by INJAAZH.",
            "url": "https://injaazh.com/work",
            "publisher": {
              "@type": "Organization",
              "name": "INJAAZH"
            }
          }),
        }}
      />
      <WorkClient />
    </>
  );
}
