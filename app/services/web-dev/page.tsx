import WebDevClient from "@/components/services/WebDevClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Web Development | INJAAZH",
  description: "High-performance Next.js architectures, React applications, and seamless Headless Commerce migrations built for absolute speed and scale.",
  openGraph: {
    title: "Enterprise Web Development | INJAAZH",
    description: "High-performance Next.js architectures, React applications, and seamless Headless Commerce migrations built for absolute speed and scale.",
    url: "https://injaazh.com/services/web-dev",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png",
        width: 1200,
        height: 630,
        alt: "INJAAZH Enterprise Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Web Development | INJAAZH",
    description: "High-performance Next.js architectures, React applications, and seamless Headless Commerce migrations built for absolute speed and scale.",
    images: ["https://injaazh.com/assets/enterprise_ecommerce_1780213870802.png"],
  },
};

export default function WebDevPage() {
  return (
    <>
      {/* JSON-LD Schema for Web Development Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Enterprise Web Development",
            "provider": {
              "@type": "Organization",
              "name": "INJAAZH"
            },
            "description": "High-performance Next.js architectures, React applications, and seamless Headless Commerce migrations built for absolute speed and scale.",
            "url": "https://injaazh.com/services/web-dev"
          }),
        }}
      />
      <WebDevClient />
    </>
  );
}
