import ServicesClient from "@/components/ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Digital Services | INJAAZH",
  description: "Explore INJAAZH's comprehensive suite of premium digital services including high-performance Web Development, Technical SEO, and UI/UX Design.",
  openGraph: {
    title: "Premium Digital Services | INJAAZH",
    description: "Explore INJAAZH's comprehensive suite of premium digital services including high-performance Web Development, Technical SEO, and UI/UX Design.",
    url: "https://injaazh.com/services",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png",
        width: 1200,
        height: 630,
        alt: "INJAAZH Digital Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Digital Services | INJAAZH",
    description: "Explore INJAAZH's comprehensive suite of premium digital services including high-performance Web Development, Technical SEO, and UI/UX Design.",
    images: ["https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "INJAAZH Digital Services",
            "description": "Our premium digital services including Web Development, UI/UX Design, SEO, Marketing, Content, and Strategy.",
            "url": "https://injaazh.com/services",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Web Development",
                "url": "https://injaazh.com/services/web-dev"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "UI/UX Design",
                "url": "https://injaazh.com/services/ui-ux-design"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Technical SEO",
                "url": "https://injaazh.com/services/seo"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Marketing",
                "url": "https://injaazh.com/services/marketing"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Content",
                "url": "https://injaazh.com/services/content"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Strategy",
                "url": "https://injaazh.com/services/strategy"
              }
            ]
          }),
        }}
      />
      <ServicesClient />
    </>
  );
}
