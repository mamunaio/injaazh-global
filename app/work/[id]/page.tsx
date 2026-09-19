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

  // SoftwareApplication & LogisticsService Schema for Deliver My Motor (EEAT / GEO / AEO)
  const deliverMyMotorJsonLd = project.slug === "deliver-my-motor" ? {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "Service"],
    name: "Deliver My Motor — UK Vehicle Transport Marketplace",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web / Mobile Responsive",
    image: `https://injaazh.com/assets/deliver-my-motor.png`,
    url: "https://www.delivermymotor.com/",
    description: project.overview,
    serviceType: "Motor Transport Marketplace",
    areaServed: [
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "Ireland",
      },
    ],
    provider: {
      "@type": "Organization",
      name: "Deliver My Motor UK",
      url: "https://www.delivermymotor.com/",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      description: "Instant Free Vehicle Transport Quotes in Under 60 Seconds",
    },
    featureList: [
      "Sub-60s Algorithmic Vehicle Transport Quote Calculator",
      "UK Postcode Distance Matrix Geocoding",
      "Vetted & Insured UK Transporter Network (GIT Insurance)",
      "Live Transporter Job Dispatch & Route Optimization Feed",
      "Auction Collection Workflow (BCA, Copart, Manheim)",
      "Multi-Vehicle Categories: Cars, Vans, Motorbikes, Boats, Recovery",
      "Trade Plate Driver and Flatbed Trailer Options",
      "Twilio SMS & Automated Email Dispatch Alerts",
    ],
  } : null;

  // OnlineStore & PetStore Schema for Pawsome (EEAT / GEO / AEO)
  const pawsomeStoreJsonLd = project.slug === "pawsome" ? {
    "@context": "https://schema.org",
    "@type": ["OnlineStore", "Store"],
    name: "Pawsome — Pet Care & E-Commerce",
    applicationCategory: "ShoppingApplication",
    image: `https://injaazh.com/assets/pawsome.png`,
    url: "https://pawsome-buddy.netlify.app/",
    description: project.overview,
    priceRange: "$$",
    paymentAccepted: "Credit Card, Debit Card, Apple Pay, Google Pay",
    currenciesAccepted: "USD",
    provider: {
      "@type": "Organization",
      name: "Pawsome Buddy",
      url: "https://pawsome-buddy.netlify.app/",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pawsome Pet Supplies & Nutrition",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Dog Supplies & Orthopedic Beds",
        },
        {
          "@type": "OfferCatalog",
          name: "Cat Essentials, Scratchers & Trees",
        },
        {
          "@type": "OfferCatalog",
          name: "Organic Pet Treats & Human-Grade Food",
        },
        {
          "@type": "OfferCatalog",
          name: "Indestructible Toys & Enrichment Gear",
        },
      ],
    },
    featureList: [
      "Playful pastel UI design system with rounded organic micro-interactions",
      "Interactive 'Pawsome Pet Profile' breed psychology & play style matchmaker",
      "Gamified pet nutrition stat blocks (Energy, Immunity, Coat Health)",
      "Trending Now dynamic flash deals & real-time cart drawer",
      "100% organic, vet-approved, and cruelty-free curated pet catalog",
      "Verified customer review matrix with real video unboxings",
    ],
  } : null;

  // SoftwareApplication & WebAPI Schema for Dev API Platform (EEAT / GEO / AEO)
  const devApiJsonLd = project.slug === "dev-api" ? {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    name: "Dev API — Cloud API Documentation & Infrastructure Platform",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cloud / Edge Serverless",
    image: `https://injaazh.com/assets/dev-api.png`,
    url: "https://devapi-saas.netlify.app/",
    description: project.overview,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "49",
      priceCurrency: "USD",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Sandbox",
          price: "0",
          priceCurrency: "USD",
          description: "10,000 API calls/mo with 2 API keys and community support",
        },
        {
          "@type": "Offer",
          name: "Pro Developer",
          price: "49",
          priceCurrency: "USD",
          description: "1,000,000 API calls/mo, unlimited keys, advanced analytics, and webhook retries",
        },
      ],
    },
    provider: {
      "@type": "Organization",
      name: "Dev API Cloud Platform",
      url: "https://devapi-saas.netlify.app/",
    },
    featureList: [
      "In-browser interactive API playground with live mock endpoints",
      "Sub-32ms global edge response time across 200+ PoPs",
      "Built-in OAuth 2.0, API keys, and JWT authentication management",
      "Automated OpenAPI 3.1 specification generation and SDK exports",
      "Adaptive sliding-window rate limiting and webhook dead-letter queues",
      "Real-time analytics dashboards with 99.99% uptime SLA guarantee",
    ],
  } : null;

  // MovingCompany & LocalBusiness Schema for AKA Moving (EEAT / GEO / Local SEO)
  const akaMovingJsonLd = project.slug === "aka-moving" ? {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    name: "AKA Moving Corp",
    image: `https://injaazh.com/assets/aka-moving.png`,
    url: "https://akamoving.com",
    telephone: "+1-514-915-3967",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5017,
      longitude: -73.5673,
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
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Montreal",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "185",
    },
    knowsLanguage: ["en", "fr"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving & Relocation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Home Moving",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Office Relocation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Long Distance & Cross-Canada Moving",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Warehousing & Secure Storage",
          },
        },
      ],
    },
  } : null;

  // AutoRepair & AutomotiveBusiness Schema for Exhaust Clean (EEAT / GEO / Local SEO)
  const exhaustCleanJsonLd = project.slug === "exhaust-clean" ? {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "AutomotiveBusiness"],
    name: "Exhaust Clean Australia",
    image: `https://injaazh.com/assets/exhaust-clean.png`,
    url: "https://exhaust-cleaning.netlify.app/contact",
    telephone: "+61-7-3382-7199",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.4698,
      longitude: 153.0251,
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
        ],
        opens: "07:30",
        closes: "17:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Brisbane",
      },
      {
        "@type": "City",
        name: "Gold Coast",
      },
      {
        "@type": "State",
        name: "Queensland",
      },
      {
        "@type": "Country",
        name: "Australia",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "94",
    },
    memberOf: [
      {
        "@type": "Organization",
        name: "Capricorn Society",
      },
      {
        "@type": "Organization",
        name: "Motor Trades Association of Queensland (MTA)",
      },
      {
        "@type": "Organization",
        name: "Institute of Automotive Mechanical Engineers (IAME)",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diesel Emissions & Exhaust Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DPF Filter Hydrodynamic Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SCR Selective Catalytic Reduction Inspection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DOC Catalyst Cleaning & Flow Testing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "EGR Valve Carbon Decarb Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intercooler Sludge Flushing",
          },
        },
      ],
    },
  } : null;

  // AnimalShelter & NGO Schema for Purrfect Hub (EEAT / GEO / AEO)
  const purrfectHubJsonLd = project.slug === "purrfect-hub" ? {
    "@context": "https://schema.org",
    "@type": ["AnimalShelter", "NGO"],
    name: "Purrfect Hub Pet Adoption & Care Platform",
    image: `https://injaazh.com/assets/purrfect-hub.png`,
    url: "https://purrfect-hub.netlify.app",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "320",
    },
    memberOf: [
      {
        "@type": "Organization",
        name: "SafeHome Animal Rescue",
      },
      {
        "@type": "Organization",
        name: "LoveMutt Rescue Network",
      },
      {
        "@type": "Organization",
        name: "VetCare Clinical Network",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pet Adoption & Feline Care Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Algorithm Pet Adoption Matching",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Veterinarian Clinical Care Guides",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shelter Pro SaaS Management Membership",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Verified Blockchain Pet Health History",
          },
        },
      ],
    },
  } : null;

  // OnlineStore & SoftwareApplication Schema for Themes Jet (EEAT / GEO / AEO)
  const themesJetJsonLd = project.slug === "themesjet" ? {
    "@context": "https://schema.org",
    "@type": ["OnlineStore", "SoftwareApplication"],
    name: "Themes Jet Digital Marketplace",
    image: `https://injaazh.com/assets/themes-jet.png`,
    url: "https://themesjet.com",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "480",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Website Templates, UI Kits & Software Assets",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "HTML5 & Bootstrap Premium Templates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Next.js 15 & React Server Component Dashboards",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "WordPress Themes & Utility Plugins",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Glassmorphic UI Kits & Design Tokens",
          },
        },
      ],
    },
  } : null;

  // SportsOrganization & EntertainmentBusiness Schema for NovaCore Esports (EEAT / GEO / AEO)
  const novaCoreJsonLd = (project.slug === "novacore-esports" || project.slug === "novacore") ? {
    "@context": "https://schema.org",
    "@type": ["SportsOrganization", "EntertainmentBusiness"],
    name: "NovaCore Esports",
    alternateName: "NovaCore Competitive Gaming Platform",
    image: "https://injaazh.com/assets/novacore.png",
    url: "https://novacore-esport.netlify.app",
    sport: "Competitive Esports & Professional Gaming",
    description: project.overview,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "410",
    },
    member: [
      { "@type": "Person", name: "SHADOW", jobTitle: "Team Captain & Duelist" },
      { "@type": "Person", name: "NEXUS", jobTitle: "Initiator & In-Game Leader" },
      { "@type": "Person", name: "VORTEX", jobTitle: "Controller & Smokes Specialist" },
      { "@type": "Person", name: "DEATHGRIP", jobTitle: "Sentinel & Site Anchor" },
      { "@type": "Person", name: "MERCY", jobTitle: "Flex & Support" },
      { "@type": "Person", name: "RUMBLE", jobTitle: "Head Coach & Tactical Analyst" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NovaCore Esports Digital Platform & Match Operations",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dynamic Match Center Live Stream & Tournament Fixture Tracker",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interactive Tactical Team Roster & Pro Player Stat Cards",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "NovaCore Limited V3 Pro Jersey Official Merchandise Drop",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Competitive Gaming Community Hub & Discord Gateway",
          },
        },
      ],
    },
  } : null;

  // FinancialService & SoftwareApplication Schema for Velocity FinTech (EEAT / GEO / AEO)
  const velocityFintechJsonLd = project.slug === "velocity" ? {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "SoftwareApplication"],
    name: "Velocity Financial Technologies",
    alternateName: "Velocity FinTech Infrastructure & Global Payments",
    image: "https://injaazh.com/assets/velocity.png",
    url: "https://velocity-fintech.netlify.app",
    priceRange: "$$$",
    applicationCategory: "FinanceApplication, PaymentGateway",
    operatingSystem: "Cloud, Edge, REST API, Webhooks",
    description: project.overview,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "530",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Velocity Global Financial Infrastructure Rails",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instant Global Cross-Border Payouts across 130+ Countries",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real-Time Telemetry Ledgers & Automated FX Reconciliation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PCI DSS Level 1 Bank-Grade Tokenized Card Checkout",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Wallet Management & Programmatic Ledger Balances",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Developer SDK Ecosystem & Webhook Simulator Hub",
          },
        },
      ],
    },
  } : null;

  // SportsOrganization & EntertainmentBusiness Schema for Nexus Esports (EEAT / GEO / AEO)
  const nexusEsportsJsonLd = project.slug === "nexus-esports" ? {
    "@context": "https://schema.org",
    "@type": ["SportsOrganization", "EntertainmentBusiness"],
    name: "Nexus Esports",
    alternateName: "Nexus Competitive Gaming Collective",
    image: "https://injaazh.com/assets/nexus_esports.png",
    url: "https://nexus-esports.netlify.app",
    sport: "Esports & Competitive Gaming",
    description: project.overview,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "470",
    },
    member: [
      { "@type": "Person", name: "Joao 'Malteser' Rezende", jobTitle: "Team Captain" },
      { "@type": "Person", name: "Rai 'Meu Puro' Vieira", jobTitle: "In-Game Leader" },
      { "@type": "Person", name: "Mikael 'Killer' Sousa", jobTitle: "Entry Fragger" },
      { "@type": "Person", name: "Ricardo 'b$' Silva", jobTitle: "AWP Sniper" },
      { "@type": "Person", name: "Cristiano 'LGC' Pinto", jobTitle: "Entry Fragger" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nexus Esports Broadcast & Fan Engagement Hub",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Live Tournament Broadcast Hub & Status Tickers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pro Player Lineup, Contract Roles & Statistics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "4K Fragmovies & Esports Cinematic Highlights Vault",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Official Nexus Community Discord & Fan Gateway",
          },
        },
      ],
    },
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
      {deliverMyMotorJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(deliverMyMotorJsonLd) }}
        />
      )}
      {pawsomeStoreJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pawsomeStoreJsonLd) }}
        />
      )}
      {devApiJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(devApiJsonLd) }}
        />
      )}
      {akaMovingJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(akaMovingJsonLd) }}
        />
      )}
      {exhaustCleanJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(exhaustCleanJsonLd) }}
        />
      )}
      {purrfectHubJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(purrfectHubJsonLd) }}
        />
      )}
      {themesJetJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(themesJetJsonLd) }}
        />
      )}
      {novaCoreJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(novaCoreJsonLd) }}
        />
      )}
      {velocityFintechJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(velocityFintechJsonLd) }}
        />
      )}
      {nexusEsportsJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nexusEsportsJsonLd) }}
        />
      )}
      <WorkDetailClient project={project} allProjects={projectsData} />
    </>
  );
}
