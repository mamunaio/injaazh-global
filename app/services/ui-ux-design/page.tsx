import UiUxDesignClient from "@/components/services/UiUxDesignClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium UI/UX Design Agency | INJAAZH",
  description: "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
  openGraph: {
    title: "Premium UI/UX Design Agency | INJAAZH",
    description: "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
    url: "https://injaazh.com/services/ui-ux-design",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/b2b_saas_dashboard_1780213845016.png",
        width: 1200,
        height: 630,
        alt: "INJAAZH Premium UI/UX Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium UI/UX Design Agency | INJAAZH",
    description: "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
    images: ["https://injaazh.com/assets/b2b_saas_dashboard_1780213845016.png"],
  },
};

export default function UiUxDesignPage() {
  return (
    <>
      {/* JSON-LD Schema for UI/UX Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Premium UI/UX Design",
            "provider": {
              "@type": "Organization",
              "name": "INJAAZH"
            },
            "description": "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
            "url": "https://injaazh.com/services/ui-ux-design"
          }),
        }}
      />
      <UiUxDesignClient />
    </>
  );
}
