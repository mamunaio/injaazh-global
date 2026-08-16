import MarketingClient from "@/components/services/MarketingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing | INJAAZH",
  description: "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
  openGraph: {
    title: "Performance Marketing | INJAAZH",
    description: "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
    url: "https://injaazh.com/services/marketing",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/themes_jet_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Performance Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing | INJAAZH",
    description: "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
    images: ["https://injaazh.com/assets/themes_jet_final.webp"],
  },
};

export default function MarketingPage() {
  return (
    <>
      {/* JSON-LD Schema for Marketing Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Performance Marketing",
            "provider": {
              "@type": "Organization",
              "name": "INJAAZH"
            },
            "description": "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
            "url": "https://injaazh.com/services/marketing"
          }),
        }}
      />
      <MarketingClient />
    </>
  );
}
