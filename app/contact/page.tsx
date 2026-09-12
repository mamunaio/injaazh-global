import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact INJAAZH | Enterprise Next.js & Digital Architecture Studio",
  description:
    "Get in touch with INJAAZH. Partner with our elite engineering and digital design teams to architect high-performance Next.js web applications, headless commerce, and dominant SEO platforms.",
  keywords: [
    "Contact INJAAZH",
    "Hire Next.js Developers",
    "Enterprise Web Architecture",
    "UI/UX Design Studio",
    "Technical SEO Agency",
    "Digital Transformation Consultancy",
  ],
  alternates: {
    canonical: "https://injaazh.com/contact",
  },
  openGraph: {
    title: "Contact INJAAZH | Enterprise Next.js & Digital Architecture Studio",
    description:
      "Partner with our elite engineering and digital design teams to architect high-performance Next.js web applications, headless commerce, and dominant SEO platforms.",
    url: "https://injaazh.com/contact",
    siteName: "INJAAZH",
    images: [
      {
        url: "https://injaazh.com/assets/themes_jet_final.webp",
        width: 1200,
        height: 630,
        alt: "INJAAZH Global Contact Nexus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact INJAAZH | Enterprise Next.js & Digital Architecture Studio",
    description:
      "Partner with our elite engineering and digital design teams to architect high-performance Next.js web applications, headless commerce, and dominant SEO platforms.",
    images: ["https://injaazh.com/assets/themes_jet_final.webp"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Schema: ContactPage & Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "@id": "https://injaazh.com/contact/#webpage",
                "url": "https://injaazh.com/contact",
                "name": "Contact INJAAZH | Enterprise Next.js & Digital Architecture Studio",
                "description":
                  "Get in touch with INJAAZH to architect high-performance Next.js web applications, headless commerce, and dominant SEO platforms.",
                "isPartOf": {
                  "@id": "https://injaazh.com/#website",
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://injaazh.com",
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Contact",
                      "item": "https://injaazh.com/contact",
                    },
                  ],
                },
              },
              {
                "@type": "Organization",
                "@id": "https://injaazh.com/#organization",
                "name": "INJAAZH",
                "url": "https://injaazh.com",
                "logo": "https://injaazh.com/favicon.ico",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+44-20-7946-0920",
                    "contactType": "customer service",
                    "email": "hello@injaazh.com",
                    "areaServed": ["GB", "US", "AE", "SG", "Global"],
                    "availableLanguage": ["English"],
                  },
                ],
                "address": [
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "124 Shoreditch High St.",
                    "addressLocality": "London",
                    "postalCode": "EC1 6JE",
                    "addressCountry": "GB",
                  },
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "85 Broad Street",
                    "addressLocality": "New York",
                    "addressRegion": "NY",
                    "postalCode": "10004",
                    "addressCountry": "US",
                  },
                ],
              },
            ],
          }),
        }}
      />
      <ContactClient />
    </>
  );
}
