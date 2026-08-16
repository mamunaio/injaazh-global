import StrategyClient from "@/components/services/StrategyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Strategy & Consulting | INJAAZH",
  description: "Brand positioning and rigorous market analysis to align your digital presence with aggressive business goals.",
  openGraph: {
    title: "Digital Strategy & Consulting | INJAAZH",
    description: "Brand positioning and rigorous market analysis to align your digital presence with aggressive business goals.",
    url: "https://injaazh.com/services/strategy",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/aka_moving_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Digital Strategy Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Strategy & Consulting | INJAAZH",
    description: "Brand positioning and rigorous market analysis to align your digital presence with aggressive business goals.",
    images: ["https://injaazh.com/assets/aka_moving_final.webp"],
  },
};

export default function StrategyPage() {
  return (
    <>
      {/* JSON-LD Schema for Strategy Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Strategy & Consulting",
            "provider": {
              "@type": "Organization",
              "name": "INJAAZH"
            },
            "description": "Brand positioning and rigorous market analysis to align your digital presence with aggressive business goals.",
            "url": "https://injaazh.com/services/strategy"
          }),
        }}
      />
      <StrategyClient />
    </>
  );
}
