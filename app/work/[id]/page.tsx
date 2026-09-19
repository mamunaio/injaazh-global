import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getAllProjectSlugs, projectsData } from "@/lib/projectsData";
import WorkDetailClient from "@/components/WorkDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const project = getProject(params.id);

  if (!project) {
    return {
      title: "Case Study Not Found | INJAAZH",
      description: "The requested project case study could not be found.",
    };
  }

  const title = `${project.title} — ${project.category} Case Study | INJAAZH`;
  const description = `${project.subtitle} Read how INJAAZH Global engineered high-performance digital architecture, 99/100 Core Web Vitals, and scalable growth for ${project.client}.`;
  const canonicalUrl = `https://injaazh.com/work/${project.slug}`;
  const ogImageUrl = project.img.startsWith("http")
    ? project.img
    : `https://injaazh.com${project.img}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.category,
      project.client,
      "Next.js 15 Web Development",
      "Enterprise Case Study",
      "Technical SEO",
      "High Performance Web Architecture",
      ...project.tags,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "INJAAZH GLOBAL",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} — INJAAZH Global Case Study`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    id: slug,
  }));
}

export default async function ProjectCaseStudyPage(props: PageProps) {
  const params = await props.params;
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  // Primary TechArticle / CreativeWork Schema
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${project.title}: ${project.subtitle}`,
    description: project.overview,
    image: project.img.startsWith("http") ? project.img : `https://injaazh.com${project.img}`,
    author: {
      "@type": "Organization",
      name: "INJAAZH GLOBAL",
      url: "https://injaazh.com",
    },
    publisher: {
      "@type": "Organization",
      name: "INJAAZH GLOBAL",
      url: "https://injaazh.com",
      logo: {
        "@type": "ImageObject",
        url: "https://injaazh.com/fav.png",
      },
    },
    genre: project.category,
    keywords: project.tags.join(", "),
    url: `https://injaazh.com/work/${project.slug}`,
    datePublished: `${project.year}-01-01`,
    dateModified: "2026-09-09",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://injaazh.com/work/${project.slug}`,
    },
  };

  // Google BreadcrumbList Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://injaazh.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://injaazh.com/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://injaazh.com/work/${project.slug}`,
      },
    ],
  };

  // Google FAQPage Schema for Rich Snippets
  const faqJsonLd = project.faq && project.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: project.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  // MedicalBusiness Schema for MedTech Clients (Enhancing Google EEAT & AEO Knowledge Graph)
  const medicalBusinessJsonLd = project.slug === "the-ultrasound-source" ? {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "The Ultrasound Source LLC",
    image: `https://injaazh.com/assets/tuss.png`,
    "@id": "https://theultrasoundsource.com/",
    url: "https://theultrasoundsource.com/",
    telephone: "+1-888-514-0911",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greer",
      addressRegion: "SC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.9387,
      longitude: -82.2271,
    },
    medicalSpecialty: [
      "Cardiovascular",
      "Obstetric",
      "Gynecologic",
      "Radiologic",
      "Musculoskeletal",
      "Vascular",
    ],
  } : null;

  // SoftwareApplication & FinancialService Schema for FinTech & API Infrastructure (Aegis)
  const financialSoftwareJsonLd = project.slug === "aegis" ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Aegis Institutional Financial Infrastructure",
    applicationCategory: "FinancialApplication",
    operatingSystem: "Cloud / Edge API",
    image: `https://injaazh.com/assets/aegis_hero.png`,
    url: "https://aegis-fintech.netlify.app/",
    description: project.overview,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Developer Sandbox & Instant API Onboarding",
    },
    provider: {
      "@type": "FinancialService",
      name: "Aegis Financial Technologies",
      url: "https://aegis-fintech.netlify.app/",
      currenciesAccepted: "USD, EUR, GBP, CAD, AUD, JPY, and 130+ more",
      paymentAccepted: "Credit Card, Wire, ACH, SEPA, FedNow, Pix",
    },
    featureList: [
      "Global Multi-Currency Routing Engine (135+ Currencies)",
      "Composable REST APIs & Native SDKs (Node, Python, Go, PHP)",
      "Built-in Idempotency Key Processing",
      "Real-Time Treasury Management & Account Ledgers",
      "Machine Learning Fraud Defense & Chargeback Prevention",
    ],
  } : null;

  // SoftwareApplication Schema for Multi-Tenant Cloud Architecture (Odyssey)
  const odysseySoftwareJsonLd = project.slug === "odyssey" ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Odyssey Multi-Tenant SaaS Infrastructure",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud / Edge Serverless",
    image: `https://injaazh.com/assets/odyssey.png`,
    url: "https://odyssey-zeta-rouge.vercel.app/",
    description: project.overview,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Live Enterprise Demonstration Access (mamunahmed24.ma@gmail.com / 123456789)",
    },
    provider: {
      "@type": "Organization",
      name: "Odyssey Enterprise Systems",
      url: "https://odyssey-zeta-rouge.vercel.app/",
    },
    featureList: [
      "Multi-Tenant Workspace Provisioning & Isolation",
      "Next.js 15 App Router & MongoDB Backend Architecture",
      "Role-Based Access Control (RBAC) Security Matrix",
      "Real-Time Analytics & Revenue Telemetry Dashboards",
      "Automated Stripe Subscription Billing & Organization Switcher",
    ],
  } : null;

  // MedicalOrganization & HomeHealthcareService Schema for Salam Medical (EEAT / GEO / YMYL)
  const salamMedicalJsonLd = project.slug === "salam-medical" ? {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "Hospital"],
    name: "Salam Medical (Salam Home Healthcare)",
    image: `https://injaazh.com/assets/salam-medical.png`,
    "@id": "https://salammedical.com/",
    url: "https://salammedical.com/",
    telephone: "+966 92 000 1153",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al-Andalus District",
      addressLocality: "Jeddah",
      postalCode: "23322",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.543333,
      longitude: 39.172778,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    medicalSpecialty: [
      "Home Healthcare",
      "Nursing",
      "Physical Therapy",
      "Geriatric Care",
      "Mobile Diagnostic Radiology",
      "Doctor House Calls",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "24/7 In-Home Clinical Nursing Care",
      },
      {
        "@type": "MedicalProcedure",
        name: "Licensed Doctor House Calls & Consultations",
      },
      {
        "@type": "MedicalProcedure",
        name: "In-Home Physical & Rehabilitation Therapy",
      },
      {
        "@type": "MedicalProcedure",
        name: "Mobile Diagnostic Radiology & Ultrasound",
      },
      {
        "@type": "MedicalProcedure",
        name: "At-Home Blood & Laboratory Sample Collection",
      },
    ],
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {medicalBusinessJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessJsonLd) }}
        />
      )}
      {financialSoftwareJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialSoftwareJsonLd) }}
        />
      )}
      {odysseySoftwareJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(odysseySoftwareJsonLd) }}
        />
      )}
      {salamMedicalJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(salamMedicalJsonLd) }}
        />
      )}
      <WorkDetailClient project={project} allProjects={projectsData} />
    </>
  );
}
