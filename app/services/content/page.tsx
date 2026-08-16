import ContentClient from "@/components/services/ContentClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content & Copywriting | INJAAZH",
  description: "Persuasive editorial writing and brand narratives designed to establish unshakeable industry authority.",
  openGraph: {
    title: "Content & Copywriting | INJAAZH",
    description: "Persuasive editorial writing and brand narratives designed to establish unshakeable industry authority.",
    url: "https://injaazh.com/services/content",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/novacore_esports_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Content Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content & Copywriting | INJAAZH",
    description: "Persuasive editorial writing and brand narratives designed to establish unshakeable industry authority.",
    images: ["https://injaazh.com/assets/novacore_esports_final.webp"],
  },
};

export default function ContentPage() {
  return (
    <>
      {/* JSON-LD Schema for Content Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Content & Copywriting",
            "provider": {
              "@type": "Organization",
              "name": "INJAAZH"
            },
            "description": "Persuasive editorial writing and brand narratives designed to establish unshakeable industry authority.",
            "url": "https://injaazh.com/services/content"
          }),
        }}
      />
      <ContentClient />
    </>
  );
}
