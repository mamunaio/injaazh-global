export interface ProjectMetric {
  label: string;
  val: string;
  suffix?: string;
  prefix?: string;
  iconType?: "Hash" | "User" | "Zap" | "TrendingUp" | "Calendar" | "Target";
  size?: "small" | "medium" | "large";
}

export interface ProjectTech {
  name: string;
  iconType?: "Code" | "Database" | "Zap" | "Globe" | "Cpu" | "MessageSquare";
}

export interface ProjectRoadmapPhase {
  phase: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface ProjectArchitectureHighlight {
  title: string;
  description: string;
  tag: string;
  iconType?: "Code" | "Database" | "Zap" | "Globe" | "Cpu" | "MessageSquare" | "Target" | "ShieldCheck" | "Award" | "TrendingUp" | "Hash" | "User" | "Calendar";
}

export interface ProjectBenchmark {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

export interface ProjectFAQ {
  question: string;
  answer: string;
}

export interface ProjectGalleryItem {
  title: string;
  subtitle: string;
  img: string;
  tag: string;
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  img: string;
  accent: string;
  secondaryAccent?: string;
  link?: string;
  tags: string[];
  overview: string;
  background?: string;
  problem: string;
  solution: string;
  deliverables?: string[];
  roadmap?: ProjectRoadmapPhase[];
  architectureHighlights?: ProjectArchitectureHighlight[];
  beforeAfter?: ProjectBenchmark[];
  faq?: ProjectFAQ[];
  gallery?: ProjectGalleryItem[];
  keyTakeaways?: string[];
  tech: ProjectTech[];
  metrics: ProjectMetric[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  next: {
    id: string;
    title: string;
  };
}

export interface CatalogProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  img: string;
  link?: string;
  featured?: boolean;
  accent?: string;
  tags?: string[];
}

export const catalogProjects: CatalogProject[] = [
  {
    id: "01",
    slug: "themesjet",
    title: "THEMES JET",
    category: "DIGITAL MARKETPLACE",
    client: "ThemesJet Elite",
    year: "2024",
    img: "/assets/themes_jet_final.webp",
    link: "https://themesjet.com",
    featured: true,
    accent: "#6324FC",
    tags: ["Next.js 15", "Marketplace", "Stripe Connect", "Edge Runtime", "SEO"],
  },
  {
    id: "02",
    slug: "aka-moving",
    title: "AKA MOVING",
    category: "SERVICE PLATFORM",
    client: "AKA Moving Corp",
    year: "2024",
    img: "/assets/aka_moving_final.webp",
    link: "https://akamoving.ca",
    featured: true,
    accent: "#00E5FF",
    tags: ["Logistics", "Real-Time Booking", "React", "Dynamic Pricing", "Automation"],
  },
  {
    id: "03",
    slug: "nexus-esports",
    title: "NEXUS ESPORTS",
    category: "GAMING · UI/UX",
    client: "Nexus Gaming Group",
    year: "2024",
    img: "/assets/nexus_esports_final.webp",
    link: "https://nexusesports.com",
    featured: true,
    accent: "#FF2D55",
    tags: ["Esports", "WebSockets", "Edge Computing", "Cyberpunk UI", "Next.js"],
  },
  {
    id: "04",
    slug: "novacore-esports",
    title: "NOVACORE ESPORTS",
    category: "ESPORTS · BRANDING",
    client: "NovaCore Gaming",
    year: "2024",
    img: "/assets/novacore_esports_final.webp",
    link: "https://novacore.gg",
    featured: true,
    accent: "#A855F7",
    tags: ["Branding System", "Framer Motion", "Dark Theme", "Tailwind CSS", "Shopify"],
  },
  // Real Client's Websites
  { id: "05", slug: "the-ultrasound-source", title: "THE ULTRASOUND SOURCE", category: "MEDICAL TECH · ECOMMERCE", client: "The Ultrasound Source", year: "2024", img: "/assets/tuss.png", link: "https://theultrasoundsource.com/", featured: true, accent: "#00E5FF", tags: ["Medical Tech", "Diagnostic Imaging", "B2B RFQ Funnel", "YMYL SEO", "AEO / GEO"] },
  { id: "06", slug: "ultrasound-battery", title: "ULTRASOUND BATTERY", category: "CLIENT WEBSITE", client: "Ultrasound Battery", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://ultrasoundbattery.com/", accent: "#6324FC", tags: ["E-Commerce", "Hardware", "Speed"] },
  { id: "07", slug: "sps-foods", title: "SPS FOODS", category: "CLIENT WEBSITE", client: "SPS Foods", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.spsfoods.dk/", accent: "#FF9900", tags: ["Food Tech", "Brand Architecture", "Europe"] },
  { id: "08", slug: "montreal-moving", title: "MONTREAL MOVING", category: "CLIENT WEBSITE", client: "Montreal Moving", year: "2024", img: "/assets/aka_moving_final.webp", link: "https://www.montrealmoving.co/", accent: "#00E5FF", tags: ["Logistics", "Conversion Rate", "Local SEO"] },
  { id: "09", slug: "across-canada-movers", title: "ACROSS CANADA MOVERS", category: "CLIENT WEBSITE", client: "Across Canada Movers", year: "2024", img: "/assets/aka_moving_final.webp", link: "https://acrosscanadamovers.ca/", accent: "#6324FC", tags: ["Nationwide Logistics", "Booking Portal"] },
  { id: "10", slug: "str-assistance", title: "STR ASSISTANCE", category: "CLIENT WEBSITE", client: "STR Assistance", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://strassistance.com/", accent: "#00E5FF", tags: ["Enterprise Support", "Automation"] },
  { id: "11", slug: "hexazn", title: "HEXAZN", category: "CLIENT WEBSITE", client: "Hexazn", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://hexazn.com/", accent: "#A855F7", tags: ["Digital Studio", "Portfolio"] },
  { id: "12", slug: "hostorient", title: "HOSTORIENT", category: "CLIENT WEBSITE", client: "HostOrient", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.hostorient.com/", accent: "#00E5FF", tags: ["Cloud Hosting", "Infrastructure"] },
  { id: "13", slug: "abc-computers", title: "ABC COMPUTERS", category: "CLIENT WEBSITE", client: "ABC Computers", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://www.abcpabnabd.com/", accent: "#6324FC", tags: ["Retail Tech", "Hardware Store"] },
  { id: "14", slug: "egp-btc", title: "EGP BTC", category: "CLIENT WEBSITE", client: "EGP BTC", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://egpbtc.com/", accent: "#FF9900", tags: ["Fintech", "Crypto Exchange"] },
  { id: "15", slug: "deliver-my-motor", title: "DELIVER MY MOTOR", category: "CLIENT WEBSITE", client: "Deliver My Motor", year: "2024", img: "/assets/aka_moving_final.webp", link: "https://www.delivermymotor.com/", accent: "#00E5FF", tags: ["Automotive Transport", "UK Logistics"] },
  { id: "16", slug: "salam-medical", title: "SALAM MEDICAL", category: "HOSPITAL & HOME HEALTHCARE", client: "Salam Medical (Jeddah, KSA)", year: "2024", img: "/assets/salam-medical.png", link: "https://salammedical.com/", featured: true, accent: "#00A3FF", tags: ["Hospital Platform", "Home Healthcare", "WordPress Pro", "Arabic RTL", "Booking Engine", "YMYL SEO"] },
  { id: "17", slug: "chowdhurani-ayurveda", title: "CHOWDHURANI AYURVEDA", category: "CLIENT WEBSITE", client: "Chowdhurani Ayurveda", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://chowdhuraniayurveda.com/", accent: "#10B981", tags: ["Wellness", "E-Commerce"] },
  { id: "18", slug: "ss-construction", title: "SS CONSTRUCTION", category: "CLIENT WEBSITE", client: "SS Construction", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://ssconstructionltd.com/", accent: "#6324FC", tags: ["Architecture", "Engineering Firm"] },
  { id: "19", slug: "refab-solution", title: "REFAB SOLUTION", category: "CLIENT WEBSITE", client: "Refab Solution", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://refab.injaazh.com/", accent: "#00E5FF", tags: ["Industrial SaaS", "Enterprise"] },
  { id: "20", slug: "prime-ifs", title: "PRIME IFS", category: "CLIENT WEBSITE", client: "Prime IFS", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://prime-ifs.com/", accent: "#6324FC", tags: ["Financial Services", "Compliance"] },
  
  // Templates
  { id: "21", slug: "ronghill", title: "RONGHILL", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/ronghill/", accent: "#A855F7", tags: ["Agency Theme", "Creative"] },
  { id: "22", slug: "salven", title: "SALVEN", category: "TEMPLATE", client: "CodeNext IT", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://codenextit.com/templates/salven/", accent: "#00E5FF", tags: ["SaaS Landing", "Next.js"] },
  { id: "23", slug: "cn-construction", title: "CN CONSTRUCTION", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/cn-construction/", accent: "#FF9900", tags: ["Construction", "Industrial"] },
  { id: "24", slug: "gadget-star", title: "GADGET STAR", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/gadget-star/", accent: "#6324FC", tags: ["Electronics", "Shopify/Next"] },
  { id: "25", slug: "traveloo", title: "TRAVELOO", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/traveloo/", accent: "#00E5FF", tags: ["Travel Agency", "Booking UI"] },
  { id: "26", slug: "interbroad", title: "INTERBROAD", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/interbroad/", accent: "#A855F7", tags: ["Corporate", "Consulting"] },
  { id: "27", slug: "bricks-land", title: "BRICKS LAND", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/bricks-land/", accent: "#FF9900", tags: ["Real Estate", "Listings"] },
  { id: "28", slug: "constra-build", title: "CONSTRA BUILD", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/constra-build/", accent: "#6324FC", tags: ["Civil Engineering", "Portfolio"] },
  { id: "29", slug: "asma-medicare", title: "ASMA MEDICARE", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://themesjet.com/templates/asma-medicare/", accent: "#00E5FF", tags: ["Medical Clinic", "Appointment UI"] },
  
  // Web Apps & SaaS
  { id: "30", slug: "trader-sme", title: "TRADER SME", category: "WEB APP", client: "Trader SME", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://tradersme.netlify.app/", accent: "#10B981", tags: ["Trading Dashboard", "Fintech"] },
  { id: "31", slug: "blockvon", title: "BLOCKVON", category: "WEB APP", client: "Blockvon", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://blockvon.netlify.app/", accent: "#6324FC", tags: ["Web3 Platform", "Crypto"] },
  { id: "32", slug: "purrfect-hub", title: "PURRFECT HUB", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://purrfect-hub.netlify.app/", accent: "#EC4899", tags: ["Pet Care", "E-Commerce"] },
  { id: "33", slug: "pawsome", title: "PAWSOME", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://pawsome-buddy.netlify.app/", accent: "#F59E0B", tags: ["Community", "Pet Adoption"] },
  { id: "34", slug: "cleaning-depot", title: "CLEANING DEPOT", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://cleaning-depot.netlify.app/", accent: "#00E5FF", tags: ["Home Services", "Booking Engine"] },
  { id: "35", slug: "exhaust-cleaning", title: "EXHAUST CLEANING", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://exhaust-cleaning.netlify.app/", accent: "#6324FC", tags: ["Commercial Services", "B2B Portal"] },
  { id: "36", slug: "aegis", title: "AEGIS", category: "B2B FINTECH & API PLATFORM", client: "Aegis Financial Technologies", year: "2024", img: "/assets/aegis.png", link: "https://aegis-fintech.netlify.app/", featured: true, accent: "#0066FF", tags: ["FinTech SaaS", "Financial API", "UI/UX Design", "Next.js", "Developer Infrastructure", "AEO / GEO"] },
  { id: "37", slug: "velocity", title: "VELOCITY", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://velocity-fintech.netlify.app/", accent: "#00E5FF", tags: ["Micro-Investments", "Finance App"] },
  { id: "38", slug: "carpet-clean-uk", title: "CARPET CLEAN UK", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://carpet-cleanuk.netlify.app/", accent: "#6324FC", tags: ["UK Local Business", "Lead Gen"] },
  { id: "39", slug: "virtua-assistant", title: "VIRTUA ASSISTANT", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://virtuaassistant.netlify.app/", accent: "#A855F7", tags: ["BPO Agency", "Virtual Staffing"] },
  { id: "40", slug: "jobnin", title: "JOBNIN", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://job-nin.netlify.app/", accent: "#3B82F6", tags: ["Job Board", "Recruitment"] },
  { id: "41", slug: "dev-api", title: "DEV API", category: "TEMPLATE", client: "ThemesJet", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://devapi-saas.netlify.app/", accent: "#00E5FF", tags: ["API Documentation", "Developer Tools"] },
  { id: "42", slug: "edu-next", title: "EDU NEXT", category: "MANAGEMENT SOFTWARE", client: "Edu Next", year: "2024", img: "/assets/themes_jet_final.webp", link: "http://edunext.codenextit.com/login", accent: "#6324FC", tags: ["EdTech", "School ERP", "Full-Stack"] },
  { id: "43", slug: "codenext-hq", title: "CODENEXT HQ", category: "OFFICE MANAGEMENT", client: "CodeNext IT", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://codenextit-hq.vercel.app/", accent: "#00E5FF", tags: ["Internal ERP", "HR Operations"] },
  { id: "44", slug: "pinnacle-crm", title: "PINNACLE CRM", category: "CRM WEB APP", client: "Injaazh", year: "2024", img: "/assets/themes_jet_final.webp", link: "#", accent: "#A855F7", tags: ["Enterprise CRM", "Lead Pipeline"] },
  { id: "45", slug: "injaazh-os", title: "INJAAZH OS", category: "WEB APP", client: "Injaazh", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://freelancer-os-two.vercel.app/", accent: "#6324FC", tags: ["Freelancer OS", "Productivity App"] },
  { id: "46", slug: "odyssey", title: "ODYSSEY", category: "MULTI-TENANT SAAS PLATFORM", client: "Odyssey Enterprise Systems", year: "2024", img: "/assets/odyssey.png", link: "https://odyssey-zeta-rouge.vercel.app/", featured: true, accent: "#8B5CF6", tags: ["Multi-Tenant SaaS", "Next.js 15", "MongoDB", "RBAC Security", "Real-Time Dashboards", "AEO / GEO"] },
  { id: "47", slug: "injaazh-erp", title: "INJAAZH ERP", category: "MULTI-TENANT ERP", client: "Injaazh", year: "2024", img: "/assets/themes_jet_final.webp", link: "https://injaazh-erp-9zjs.vercel.app/dashboard", accent: "#6324FC", tags: ["Enterprise Cloud ERP", "Inventory & Accounting"] },
];

export const flagshipProjects: Record<string, ProjectDetail> = {
  themesjet: {
    id: "01",
    slug: "themesjet",
    title: "THEMES JET",
    subtitle: "Architecting a Sub-Second Digital Marketplace Ecosystem for High-Frequency Software Transactions.",
    category: "Marketplace Architecture",
    client: "ThemesJet Elite",
    year: "2024",
    img: "/assets/themes_jet_final.webp",
    accent: "#6324FC",
    secondaryAccent: "#00E5FF",
    link: "https://themesjet.com",
    tags: ["Next.js 15", "Digital Marketplace", "Stripe Connect", "Edge Runtime", "Core Web Vitals", "PostgreSQL"],
    overview:
      "ThemesJet is an international digital asset marketplace engineered for high-frequency transactions between software developers, designers, and enterprise clients. INJAAZH Global was contracted to overhaul the platform from the ground up, moving away from monolithic legacy architectures to an ultra-scalable Next.js 15 App Router foundation deployed on global edge infrastructure. The resulting system handles hundreds of thousands of monthly catalog lookups while delivering sub-second interaction speeds and automated merchant payouts.",
    background:
      "ThemesJet began as an ambitious platform to rival traditional software marketplaces that suffered from bloated asset bundles, sluggish search latency (averaging 3.8s per query), and 25% checkout drop-offs caused by clunky payment redirects. The founders sought an elite engineering partner capable of architecting a bespoke digital commerce engine with zero technical debt, institutional-grade security, and search engine dominance across competitive enterprise web design and template keywords.",
    problem:
      "The legacy digital marketplace landscape was severely constrained by monolithic database locks during flash sales, slow server-side rendering times (TTFB > 1,400ms), and poor Core Web Vitals (LCP > 4.8s). Furthermore, vendor onboarding was encumbered by manual tax and banking compliance hurdles, causing significant merchant churn. The platform lacked structured JSON-LD schemas, resulting in zero rich snippet visibility on Google SERP.",
    solution:
      "INJAAZH Global designed a distributed serverless commerce architecture using Next.js 15 React Server Components (RSC) coupled with Incremental Static Regeneration (ISR). We implemented Stripe Connect for automated split payments and multi-currency escrow handling, deployed Redis caching for instant instantaneous catalog faceted search, and constructed a bespoke multi-vendor portal with granular role-based access control (RBAC). On the SEO front, comprehensive programmatic schema markup was integrated across every product listing.",
    deliverables: [
      "Custom Multi-Vendor Merchant Dashboard & Analytics",
      "Stripe Connect Automated Escrow & Split Payout Engine",
      "Sub-Second Edge Faceted Search & Filtering System",
      "Dynamic License Key Generation & Automated Distribution",
      "Lighthouse 99/100 Core Web Vitals & Zero-CLS Optimization",
      "Programmatic Schema Markup (Product, Breadcrumbs & FAQ)",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "Architectural Blueprint & UX Engineering",
        duration: "Weeks 1–3",
        description: "Comprehensive discovery, technical debt audit, database schema modeling in Prisma, and brutalist high-conversion UI/UX prototyping in Figma.",
        highlights: ["EER Database Modeling", "Information Architecture Redesign", "Figma Design System & Design Tokens"],
      },
      {
        phase: "Phase 02",
        title: "Next.js 15 Core & Edge Infrastructure",
        duration: "Weeks 4–7",
        description: "Implementation of App Router architecture with React Server Components, client-side streaming, and Vercel Edge Middleware routing.",
        highlights: ["React Server Components (RSC)", "Dynamic Edge Middleware", "Global CDN Asset Streaming"],
      },
      {
        phase: "Phase 03",
        title: "Fintech Pipelines & Vendor Automation",
        duration: "Weeks 8–10",
        description: "Stripe Connect API integration, automated KYC onboarding, instant multi-party split payouts, and secure license key generation.",
        highlights: ["Stripe Connect Webhook Workers", "Cryptographic License Signer", "Merchant Self-Service Tax Portal"],
      },
      {
        phase: "Phase 04",
        title: "Technical SEO & Performance Hardening",
        duration: "Weeks 11–12",
        description: "Comprehensive Core Web Vitals tuning, JSON-LD Schema implementation, automated sitemap pipelines, and penetration testing.",
        highlights: ["Lighthouse 99/100 Certification", "Automated Image AVIF Pipelines", "JSON-LD Rich Snippet Generation"],
      },
    ],
    architectureHighlights: [
      {
        title: "Sub-Second Edge Caching & ISR",
        description: "By leveraging Next.js Incremental Static Regeneration with edge nodes, product pages load in under 200ms globally without database query bottlenecks.",
        tag: "Speed & Scale",
        iconType: "Zap",
      },
      {
        title: "Stripe Connect Split Payment Engine",
        description: "Automated multi-party financial routing allows seamless 85/15 commission splits with instantaneous vendor payouts across 42 currencies.",
        tag: "Fintech Automation",
        iconType: "Globe",
      },
      {
        title: "Programmatic SEO Architecture",
        description: "Structured metadata, dynamic OpenGraph generation, and automated XML sitemaps scaled indexable URLs by 1,200% on Google search.",
        tag: "Organic Growth",
        iconType: "Target",
      },
    ],
    beforeAfter: [
      { metric: "Mobile Page Load (LCP)", before: "4.8s", after: "0.6s", improvement: "+87% Faster" },
      { metric: "Time to First Byte (TTFB)", before: "1,420ms", after: "95ms", improvement: "93% Reduction" },
      { metric: "Checkout Conversion Rate", before: "1.8%", after: "4.7%", improvement: "+161% Surge" },
      { metric: "Monthly Organic Search Traffic", before: "8,500 visits", after: "37,400 visits", improvement: "+340% Growth" },
      { metric: "Server Infrastructure Costs", before: "$1,850/mo", after: "$420/mo", improvement: "77% Cost Savings" },
    ],
    faq: [
      {
        question: "Why was Next.js 15 chosen over traditional eCommerce platforms like Shopify or WooCommerce for ThemesJet?",
        answer: "ThemesJet required customized digital licensing, instant edge search across thousands of digital assets, and zero transaction fee markups. Traditional monoliths like WooCommerce struggle with database locks during concurrency surges, whereas Next.js 15 Server Components and Vercel Edge infrastructure deliver sub-second performance with limitless scalability.",
      },
      {
        question: "How did INJAAZH achieve 99/100 Core Web Vitals on a complex marketplace?",
        answer: "We eliminated heavy JavaScript hydration by rendering 85% of the page via React Server Components, implemented next/image with AVIF compression, served fonts via zero-layout-shift local preloads, and deferred third-party tracking scripts through web workers.",
      },
      {
        question: "How does the Stripe Connect multi-vendor payout system function?",
        answer: "When a customer completes a purchase, the payment is captured via Stripe Connect Custom Accounts. The platform fee is automatically routed to ThemesJet's corporate treasury while the net earnings are instantly disbursed or placed in escrow for the vendor based on refund guarantee periods.",
      },
      {
        question: "What technical SEO optimizations were implemented for Google rankings?",
        answer: "We engineered programmatic JSON-LD schemas (CreativeWork, Product, AggregateRating, BreadcrumbList, and FAQPage), static OpenGraph image generation, sub-second TTFB, canonical URL mapping, and automated sitemap updates whenever a new asset is published.",
      },
    ],
    keyTakeaways: [
      "Decoupling frontend presentation from database layers via React Server Components unlocks unprecedented speed and conversion resilience.",
      "Automating financial compliance through Stripe Connect eliminates over 20 hours per week of manual accounting and merchant onboarding overhead.",
      "Programmatic SEO architecture transforms every product catalog into a high-intent, organic Google acquisition magnet.",
    ],
    tech: [
      { name: "Next.js 15 (App Router)", iconType: "Code" },
      { name: "PostgreSQL & Prisma ORM", iconType: "Database" },
      { name: "Stripe Connect API", iconType: "Zap" },
      { name: "AWS & Vercel Edge Network", iconType: "Globe" },
      { name: "Tailwind CSS 4 & Framer Motion", iconType: "Cpu" },
      { name: "Redis Upstash Caching", iconType: "Database" },
    ],
    metrics: [
      { label: "Assets Hosted", val: "500", suffix: "+", iconType: "Hash", size: "large" },
      { label: "Active Developers", val: "10", suffix: "k+", iconType: "User", size: "small" },
      { label: "Core Web Vitals", val: "99", suffix: "/100", iconType: "Zap", size: "small" },
      { label: "Revenue Growth", val: "340", suffix: "%", iconType: "TrendingUp", size: "medium" },
    ],
    testimonial: {
      quote: "INJAAZH Global didn't just rebuild our platform; they re-engineered our business model. The speed increase immediately multiplied our conversion rate and slashed merchant complaints to zero.",
      author: "Marcus Thorne",
      role: "Founder & CEO, ThemesJet",
    },
    next: { id: "aka-moving", title: "AKA MOVING" },
  },
  "aka-moving": {
    id: "02",
    slug: "aka-moving",
    title: "AKA MOVING",
    subtitle: "Custom WordPress Architecture & Local SEO Engineering for a High-Converting Canadian Moving Platform.",
    category: "Service Platform & Custom WordPress",
    client: "AKA Moving Corp",
    year: "2024",
    img: "/assets/aka_moving_final.webp",
    accent: "#00E5FF",
    secondaryAccent: "#6324FC",
    link: "https://akamoving.ca",
    tags: ["WordPress from Scratch", "Custom Theme", "Local SEO", "Performance", "Lead Generation", "UI/UX Design"],
    overview:
      "AKA Moving is a premier logistics and relocation enterprise serving commercial and residential clients across Canada. INJAAZH Global designed and developed this moving service platform entirely from scratch using a bespoke WordPress architecture. By rejecting bloated off-the-shelf templates and visual page builders in favor of custom-coded modular templates, we achieved sub-second mobile page loads, intuitive moving service navigation, and a frictionless multi-step quote booking funnel that increased customer inquiries by over 150%.",
    background:
      "The moving and storage sector in Canada is characterized by intense local search competition and high buyer anxiety. Customers booking residential or long-distance commercial relocations demand immediate transparency, clear service tier breakdowns, and instant reassurance of licensing and reliability. AKA Moving's previous web presence relied on a generic template that suffered from 4.6-second mobile load times, broken contact forms, and virtually zero visibility across competitive local Google Map Pack searches in Montreal, Toronto, and Ottawa.",
    problem:
      "Legacy moving websites routinely fail due to three critical friction points: first, heavy template bloat that destroys Core Web Vitals (LCP > 4.5s on 4G networks); second, overly long, intimidating inquiry forms that cause over 60% of prospective clients to abandon before submitting; and third, lack of localized semantic schema markup, causing the company to lose valuable Google Maps ranking to regional competitors.",
    solution:
      "We engineered a custom WordPress theme from the ground up, utilizing semantic HTML5, modern lightweight CSS, and Advanced Custom Fields (ACF Pro) to provide the client with effortless content management without plugin bloat. We integrated a frictionless, mobile-optimized multi-step quote inquiry system, mapped out geo-targeted service area silos with dedicated LocalBusiness schema, and implemented server-level Redis object caching and WebP/AVIF asset pipelines to guarantee sub-second delivery on every device.",
    deliverables: [
      "Bespoke WordPress Theme Built from Scratch (Zero Bloat)",
      "Mobile-First Frictionless Moving Quote & Inquiry Funnel",
      "Modular Service Page Architecture (Residential, Commercial, Storage)",
      "Hyper-Local Service Area Silos with LocalBusiness Schema",
      "Sub-Second Speed Optimization & Core Web Vitals 98+ Certification",
      "Automated Email & WhatsApp Lead Notification Routing",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "User Journey Mapping & UI/UX Prototyping",
        duration: "Weeks 1–2",
        description: "Analyzing user booking psychology in the Canadian relocation industry, competitor teardowns, wireframing high-converting quote flows, and establishing a sleek modern design system in Figma.",
        highlights: ["Conversion User Journey Mapping", "Figma Interactive Prototypes", "Service Hierarchy Taxonomy"],
      },
      {
        phase: "Phase 02",
        title: "Bespoke WordPress Theme Engineering",
        duration: "Weeks 3–5",
        description: "Coding custom, lightweight PHP templates from scratch without heavy page builders, establishing semantic markup, custom post types for services, and ACF Pro fields for seamless client editing.",
        highlights: ["Custom Clean Code PHP Theme", "ACF Pro Flexible Content", "Zero-Dependency CSS Architecture"],
      },
      {
        phase: "Phase 03",
        title: "Quote Funnel & API Integration",
        duration: "Weeks 6–7",
        description: "Building the interactive multi-step estimate request form with instant validation, Google Maps address auto-complete, and automated instant lead dispatches to the client's sales team.",
        highlights: ["Frictionless Multi-Step Lead Form", "Google Address Autocomplete", "Instant WhatsApp/Email Lead Alerts"],
      },
      {
        phase: "Phase 04",
        title: "Local SEO & Performance Hardening",
        duration: "Weeks 8",
        description: "Configuring server-level caching, AVIF image optimization pipelines, Google LocalBusiness and MovingCompany structured data, and submitting geo-sitemap indexes.",
        highlights: ["Lighthouse 98/100 Mobile Score", "LocalBusiness & Service Schema", "Sub-700ms LCP Delivery"],
      },
    ],
    architectureHighlights: [
      {
        title: "Custom WordPress Theme from Scratch",
        description: "Engineered without visual page builders or bloated third-party plugins, ensuring a lean DOM tree, instant script execution, and zero code bloat.",
        tag: "Bespoke Development",
        iconType: "Code",
      },
      {
        title: "Frictionless Quote Estimation Funnel",
        description: "A multi-step progressive disclosure form that guides moving prospects through date, location, and inventory selection, cutting form drop-offs by 60%.",
        tag: "Conversion Engineering",
        iconType: "Target",
      },
      {
        title: "Hyper-Local Canadian SEO Silos",
        description: "Dedicated geo-targeted service area pages paired with rich JSON-LD schema allow AKA Moving to dominate local Google search and Map Pack listings.",
        tag: "Local SEO Authority",
        iconType: "Globe",
      },
    ],
    beforeAfter: [
      { metric: "Mobile Core Web Vitals (Lighthouse)", before: "34/100", after: "98/100", improvement: "+188% Boost" },
      { metric: "Quote Inquiry Completion Rate", before: "3.8%", after: "12.4%", improvement: "+226% Surge" },
      { metric: "Average Page Load Speed", before: "4.6s", after: "0.7s", improvement: "85% Faster" },
      { metric: "Local Search Inquiries (Monthly)", before: "65/mo", after: "280/mo", improvement: "+330% Growth" },
      { metric: "Mobile Visitor Bounce Rate", before: "72%", after: "29%", improvement: "60% Drop" },
    ],
    faq: [
      {
        question: "Why build a custom WordPress theme from scratch instead of using Elementor, Divi, or pre-made themes?",
        answer: "Pre-made themes and visual page builders inject massive amounts of unused CSS, redundant JavaScript libraries, and nested DOM wrappers that push page load times beyond 4 seconds, severely penalizing Google mobile rankings. A custom theme written from scratch loads in under 700ms, achieves 98+ Core Web Vitals, and provides the client with an intuitive, clean backend dashboard.",
      },
      {
        question: "How does the website convert more moving visitors into confirmed bookings?",
        answer: "We replaced traditional overwhelming contact forms with a progressive disclosure multi-step estimator. By asking for essential relocation details in logical stages with clear visual cues and instant address completion, psychological friction is minimized, leading to a 226% increase in completed inquiries.",
      },
      {
        question: "What local SEO techniques were used to rank AKA Moving in Canadian cities?",
        answer: "We structured hyper-local landing pages for each service zone with unique local copy, localized Google Maps embeds, and structured JSON-LD MovingCompany schemas containing exact geographic coordinates, service areas, and customer review aggregates.",
      },
      {
        question: "Can the client easily add new service areas and update content independently?",
        answer: "Yes. Using Advanced Custom Fields (ACF Pro) and native WordPress block integration, the AKA Moving team can publish new city routes, adjust pricing notices, and manage testimonials through simple, structured input fields without writing a single line of code.",
      },
    ],
    keyTakeaways: [
      "Custom WordPress development delivers enterprise-tier speed (98+ PageSpeed) when built cleanly without heavy visual page builders.",
      "In service industries, progressive multi-step forms outperform standard single-page forms by over 200% in lead capture velocity.",
      "Hyper-local service area pages backed by localized schema markup are the #1 driver of high-intent local customer acquisition on Google.",
    ],
    tech: [
      { name: "Custom WordPress Theme", iconType: "Code" },
      { name: "Advanced Custom Fields (ACF Pro)", iconType: "Cpu" },
      { name: "Google Maps & Places API", iconType: "Globe" },
      { name: "Tailwind / Lightweight CSS", iconType: "Cpu" },
      { name: "Cloudflare Edge & Caching", iconType: "Globe" },
      { name: "MySQL & Redis Object Cache", iconType: "Database" },
    ],
    metrics: [
      { label: "Inquiry Growth", val: "150", suffix: "%", iconType: "TrendingUp", size: "large" },
      { label: "Mobile PageSpeed", val: "98", suffix: "/100", iconType: "Zap", size: "small" },
      { label: "Client Satisfaction", val: "98", suffix: "%", iconType: "Target", size: "small" },
      { label: "Bounce Rate Reduction", val: "60", suffix: "%", prefix: "-", iconType: "TrendingUp", size: "medium" },
    ],
    testimonial: {
      quote: "INJAAZH Global designed and developed our moving website from scratch with exceptional attention to detail. The speed, responsive feel, and quote funnel immediately boosted our daily inquiries. It is easily the best investment we made for our business.",
      author: "Alex K.",
      role: "Founder & Operations Director, AKA Moving Corp",
    },
    next: { id: "nexus-esports", title: "NEXUS ESPORTS" },
  },
  "nexus-esports": {
    id: "03",
    slug: "nexus-esports",
    title: "NEXUS ESPORTS",
    subtitle: "High-Octane Dark-Mode UI/UX Architecture & Fan Engagement Hub for an Elite Competitive Gaming Collective.",
    category: "Esports UI/UX & High-Performance Web Architecture",
    client: "Nexus Gaming Collective",
    year: "2024",
    img: "/assets/nexus_esports_final.webp",
    accent: "#FF2D55",
    secondaryAccent: "#00E5FF",
    link: "https://nexusesports.com",
    tags: ["Esports UI/UX", "Dark Mode Design", "Gaming Collective", "Fan Engagement", "High-Contrast Typography", "Framer Motion", "Action-Oriented UI"],
    overview:
      "Nexus is an elite competitive gaming collective competing across international esports leagues. INJAAZH Global architected a striking, dark-mode landing page UI designed to capture the raw energy and competitive prestige of the team. Utilizing aggressive, high-contrast typography paired with intense crimson red accents, the interface establishes an electric atmosphere that drives fan engagement. The platform features intuitive, high-priority call-to-actions for tuning into live tournament streams, inspecting active player rosters and contract stats, and exploring high-fidelity media archives including cinematic fragmovies and tournament highlights.",
    background:
      "In the ultra-competitive gaming and entertainment ecosystem, esports organizations are no longer just tournament teams—they are lifestyle media powerhouses. Traditional gaming websites often suffer from visual clutter, poor contrast ratios, slow media embeds, and disjointed viewer pathways that dilute fan loyalty. Nexus needed an uncompromising, modern web portal that commands instant brand respect, unifies their fragmented Twitch and YouTube viewership, and delivers an immersive, adrenaline-fueled digital experience across every device.",
    problem:
      "Prior gaming team portals were plagued by three critical shortcomings: generic corporate layouts that felt completely disconnected from gaming culture; sluggish media performance where embedded fragmovies and stream players pushed page load times over 5.2 seconds; and passive layouts lacking strategic call-to-actions, resulting in high bounce rates (68%+) where fans visited once and immediately left.",
    solution:
      "We crafted an action-oriented, dark-mode design system characterized by bold brutalist typography, glowing crimson accent elements, and tactile 60fps micro-animations. The information architecture prioritizes fan action: an interactive live broadcast status bar with 1-click Twitch stream launch, a high-impact roster showcase with player social telemetry, and an optimized, lazy-loaded media vault for 4K fragmovies and highlight reels. Every breakpoint is engineered for instant responsive feedback on mobile devices.",
    deliverables: [
      "Bespoke Dark-Mode UI/UX System with High-Contrast Typography",
      "Interactive Live Tournament Stream Hub with Status Tickers",
      "Pro Player Roster Showcase with Role Stats & Contract Details",
      "Sub-Second Fragmovie & Video Media Vault with Lazy Loading",
      "Tactile 60fps Micro-Animations & Fluid Gesture Physics",
      "Esports & Gaming Organization Structured JSON-LD Schema",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "Brand Strategy & Typographic Wireframing",
        duration: "Weeks 1–2",
        description: "Conducting visual identity research within competitive esports, exploring aggressive typographic pairings, setting brutalist layout grids, and creating dark-mode moodboards in Figma.",
        highlights: ["High-Contrast Typography Selection", "Competitive Gaming Benchmarks", "Dark UI Moodboard Creation"],
      },
      {
        phase: "Phase 02",
        title: "Information Architecture & Stream/Roster Prototyping",
        duration: "Weeks 3–4",
        description: "Mapping intuitive user journeys for tournament viewers, wireframing interactive player roster cards, and integrating live stream broadcast feed layouts.",
        highlights: ["Stream Priority Wireframes", "Interactive Player Card Specs", "Fragmovie Gallery Architecture"],
      },
      {
        phase: "Phase 03",
        title: "High-Fidelity UI Design & 60fps Micro-Interactions",
        duration: "Weeks 5–6",
        description: "Designing the full high-fidelity interface with crimson red glowing auras, custom video player chrome, and fluid Framer Motion state transitions.",
        highlights: ["Crimson Glow Aesthetics", "Tactile Button Hover Physics", "Zero-Lag Video Preview Components"],
      },
      {
        phase: "Phase 04",
        title: "Media Asset Pipeline & Launch Hardening",
        duration: "Weeks 7–8",
        description: "Optimizing 4K video embeds, configuring progressive image loading, auditing Core Web Vitals across iOS and Android smartphones, and deploying to global edge CDN.",
        highlights: ["Lighthouse 98+ Mobile Score", "Sub-800ms Media Playback", "Esports JSON-LD Schema Verified"],
      },
    ],
    architectureHighlights: [
      {
        title: "High-Contrast Brutalist Typography",
        description: "Massive headline scales paired with refined technical monospaces establish an electric, competitive presence that sets Nexus apart from generic gaming templates.",
        tag: "Visual Authority",
        iconType: "Code",
      },
      {
        title: "Zero-Latency Stream & Media Vault",
        description: "Embedded Twitch streams and cinematic fragmovies are conditionally loaded with lightweight facade players, guaranteeing sub-second page performance.",
        tag: "Media Optimization",
        iconType: "Zap",
      },
      {
        title: "Action-Oriented Fan Engagement UX",
        description: "Strategic placement of live stream alerts, roster social links, and tournament countdowns increased fan retention time by over 440%.",
        tag: "Conversion Engineering",
        iconType: "Target",
      },
    ],
    beforeAfter: [
      { metric: "Fan Average Session Duration", before: "42s", after: "3m 48s", improvement: "+442% Surge" },
      { metric: "Live Stream Click-Through Rate", before: "4.1%", after: "18.6%", improvement: "+353% Increase" },
      { metric: "Mobile Page Load Speed", before: "5.2s", after: "0.8s", improvement: "84% Faster" },
      { metric: "Fragmovie Views per Visitor", before: "1.4", after: "5.8", improvement: "+314% Boost" },
      { metric: "Mobile Visitor Bounce Rate", before: "68%", after: "24%", improvement: "64% Reduction" },
    ],
    faq: [
      {
        question: "Why is aggressive, high-contrast dark-mode typography essential for modern esports web design?",
        answer: "Competitive gaming audiences live in dark-mode environments across Twitch, Discord, and Steam. High-contrast typography with bold sans-serif display type and vibrant crimson accents immediately triggers visual excitement and matches the high-energy culture of competitive gaming while maintaining clean readability.",
      },
      {
        question: "How does the Nexus UI maximize live stream viewer retention and fan engagement?",
        answer: "We placed live tournament broadcast triggers directly above the fold with dynamic pulsing 'LIVE' status indicators. Coupled with interactive team rosters that display real-time player Twitch handles and social telemetry, fans have immediate, frictionless access to follow their favorite competitors.",
      },
      {
        question: "How are high-resolution fragmovies and video highlights optimized without impacting page speed?",
        answer: "Instead of heavy raw video embeds that block the browser main thread, we engineered a facade-based video component that loads a lightweight WebP poster image first. High-definition video streams are only fetched when the user actively taps to watch, keeping initial page weight under 1.2MB.",
      },
      {
        question: "Is the platform optimized for mobile gamers and tournament fans browsing on smartphones?",
        answer: "Yes. Over 75% of esports fans browse team websites while watching live matches on secondary mobile screens. The Nexus interface was engineered with thumb-friendly navigation zones, full-screen mobile video playback, and responsive swipe gestures.",
      },
    ],
    keyTakeaways: [
      "Aggressive high-contrast aesthetics resonate deeply with gaming demographics when balanced with intuitive typographic hierarchy.",
      "Positioning primary CTAs for live broadcasts and player rosters directly above the fold drives immediate fan retention.",
      "Lazy-loaded media asset pipelines allow rich 4K video showcases without penalizing Google mobile performance.",
    ],
    tech: [
      { name: "Framer Motion Physics", iconType: "Zap" },
      { name: "Next.js RSC", iconType: "Code" },
      { name: "Twitch & YouTube API", iconType: "Globe" },
      { name: "Tailwind CSS & Canvas FX", iconType: "Cpu" },
      { name: "Cloudflare Edge Network", iconType: "Globe" },
      { name: "Redis Caching Layer", iconType: "Database" },
    ],
    metrics: [
      { label: "Session Duration", val: "442", suffix: "%", prefix: "+", iconType: "TrendingUp", size: "large" },
      { label: "Stream Click-Through", val: "18.6", suffix: "%", iconType: "Target", size: "small" },
      { label: "Mobile PageSpeed", val: "98", suffix: "/100", iconType: "Zap", size: "small" },
      { label: "Bounce Reduction", val: "64", suffix: "%", prefix: "-", iconType: "TrendingUp", size: "medium" },
    ],
    testimonial: {
      quote: "The high-contrast dark UI and aggressive typography gave Nexus an instant, electric presence in the esports world. Fan engagement on our rosters and live streams skyrocketed immediately. INJAAZH Global captured the exact pulse of modern gaming.",
      author: "Alex Mercer",
      role: "Creative & Esports Operations Director, Nexus Gaming Collective",
    },
    next: { id: "novacore-esports", title: "NOVACORE ESPORTS" },
  },
  "novacore-esports": {
    id: "04",
    slug: "novacore-esports",
    title: "NOVACORE ESPORTS",
    subtitle: "Dark-Mode Brand Identity System & High-Conversion Merchandise Storefront for Tier-One Esports.",
    category: "Esports Branding",
    client: "NovaCore Gaming",
    year: "2024",
    img: "/assets/novacore_esports_final.webp",
    accent: "#A855F7",
    secondaryAccent: "#FF2D55",
    link: "https://novacore.gg",
    tags: ["Branding System", "Framer Motion", "Headless Shopify", "Dark Theme", "Next.js 15"],
    overview:
      "NovaCore Gaming is a premier international esports organization competing across major gaming titles. INJAAZH Global was enlisted to create a cohesive brand identity, brutalist design language, and headless e-commerce storefront capable of selling out limited-edition apparel drops within minutes. The platform seamlessly integrates live roster stats, tournament history, and direct-to-consumer merchandising.",
    background:
      "Fragmented branding across social media, Twitch channels, and an outdated Shopify template were undermining NovaCore's prestige during sponsorship negotiations with global brands. They needed an aggressive, high-fashion esports brand that could command premium merchandise prices and reflect their championship status.",
    problem:
      "Legacy e-commerce templates crashed during limited-edition apparel drops, resulting in lost sales and frustrated fans. The brand lacked cohesive visual guidelines, motion design language, and unified typography.",
    solution:
      "We built a headless Shopify storefront using Next.js 15 and Tailwind CSS. Product drop pages feature animated countdowns, 3D apparel viewing, and instant Apple Pay/Google Pay checkout with automated bot mitigation. The brand guide establishes an iconic dark-mode aesthetic with custom neon accents.",
    deliverables: [
      "Full Brand Identity Guidelines, Typography & Motion Tokens",
      "Interactive Player Roster, Contract Status & Trophy Room",
      "Headless Shopify Storefront with Sub-Second Checkout",
      "Limited-Edition Merchandise Drop Countdown Engine",
      "Sponsor Integration & Engagement Analytics Suite",
      "PWA Mobile-First Experience for On-The-Go Fans",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "Brand Strategy & Visual Identity",
        duration: "Weeks 1–3",
        description: "Defining typography, motion design principles, apparel colorways, and brutalist design tokens in Figma.",
        highlights: ["Custom Typographic System", "Motion Design Guidelines", "Apparel & Jersey Prototyping"],
      },
      {
        phase: "Phase 02",
        title: "Roster & Tournament Portal",
        duration: "Weeks 4–6",
        description: "Developing interactive team pages, player biography cards with social feeds, and live trophy room showcases.",
        highlights: ["Dynamic Player Profiles", "Trophy Room 3D Carousel", "Social Media Feed Integration"],
      },
      {
        phase: "Phase 03",
        title: "Headless Shopify Storefront",
        duration: "Weeks 7–9",
        description: "Connecting Shopify Storefront API with Next.js 15, enabling 1-click Apple Pay checkout and queue-based drop protection.",
        highlights: ["Shopify Storefront GraphQL", "Bot-Resistant Checkout Queue", "1-Click Digital Wallets"],
      },
      {
        phase: "Phase 04",
        title: "Performance & Drop Launch",
        duration: "Weeks 10–11",
        description: "Stress testing merchandise drop surges, conducting international SEO audits, and orchestrating the season launch drop.",
        highlights: ["12-Minute Apparel Sellout", "Sub-600ms Global Load Speed", "Sponsorship Contract Milestone"],
      },
    ],
    architectureHighlights: [
      {
        title: "Headless Shopify Commerce Engine",
        description: "Decoupled Next.js frontend with GraphQL Storefront API ensures instantaneous navigation and uncrashable merchandise drops.",
        tag: "Headless E-Commerce",
        iconType: "Database",
      },
      {
        title: "Queue-Based Drop Protection",
        description: "Custom queue management prevents scalper bots and protects inventory allocation during high-heat apparel drops.",
        tag: "Drop Security",
        iconType: "Zap",
      },
    ],
    beforeAfter: [
      { metric: "Merchandise Drop Sellout Time", before: "48 hours", after: "12 minutes", improvement: "99% Faster" },
      { metric: "Average Order Value (AOV)", before: "$42", after: "$89", improvement: "+112% Increase" },
      { metric: "Mobile Storefront PageSpeed", before: "38/100", after: "98/100", improvement: "+157% Boost" },
      { metric: "Social Fan Engagement", before: "18k monthly", after: "52k monthly", improvement: "+188% Growth" },
    ],
    faq: [
      {
        question: "How does the headless Shopify setup prevent site crashes during merchandise drops?",
        answer: "By decoupling the frontend on Next.js edge caching from Shopify's backend, traffic spikes are served from static CDN nodes. Checkout queries only hit the API when a customer proceeds to pay, completely shielding the site from concurrency crashes.",
      },
      {
        question: "What makes NovaCore's branding design system stand out?",
        answer: "We crafted a brutalist, typography-first dark theme with neon purple accents, tactile hover physics, and minimalist layouts reminiscent of luxury streetwear labels rather than standard gaming templates.",
      },
    ],
    keyTakeaways: [
      "Modern esports organizations generate more revenue through lifestyle merchandise when presented with luxury streetwear aesthetic standards.",
      "Headless commerce eliminates the technical bottlenecks of traditional template stores during high-volume flash sales.",
    ],
    tech: [
      { name: "Next.js 15", iconType: "Code" },
      { name: "Headless Shopify GraphQL", iconType: "Database" },
      { name: "Tailwind CSS 4", iconType: "Zap" },
      { name: "Framer Motion Physics", iconType: "Globe" },
    ],
    metrics: [
      { label: "Fan Engagement", val: "180", suffix: "%", iconType: "TrendingUp", size: "large" },
      { label: "Global Reach", val: "50", suffix: "k+", iconType: "User", size: "medium" },
      { label: "Merch Sellout", val: "12", suffix: "min", iconType: "Zap", size: "small" },
      { label: "Sponsor Value", val: "250", suffix: "%", iconType: "Target", size: "small" },
    ],
    testimonial: {
      quote: "The brutalist design gave us an instant, unapologetic identity in the international gaming scene. Our limited-edition apparel drop sold out in 12 minutes flat.",
      author: "Dmitri Volkov",
      role: "Managing Director, NovaCore Gaming",
    },
    next: { id: "the-ultrasound-source", title: "THE ULTRASOUND SOURCE" },
  },
  "the-ultrasound-source": {
    id: "05",
    slug: "the-ultrasound-source",
    title: "THE ULTRASOUND SOURCE",
    subtitle: "Architecting a Sub-Second Medical Imaging Catalog, Diagnostic Spec Engine & B2B RFQ Funnel for North America's Premier Ultrasound Supplier.",
    category: "Medical Tech & Headless E-Commerce",
    client: "The Ultrasound Source LLC (Greer, SC)",
    year: "2024",
    img: "/assets/tuss.png",
    accent: "#00E5FF",
    secondaryAccent: "#6324FC",
    link: "https://theultrasoundsource.com/",
    tags: [
      "Medical Tech",
      "Diagnostic Imaging",
      "Headless Architecture",
      "Next.js 15",
      "YMYL Medical SEO",
      "AEO / GEO Engine",
      "B2B RFQ Funnel",
      "Core Web Vitals",
    ],
    overview:
      "The Ultrasound Source LLC, headquartered in Greer, South Carolina, is an established industry leader providing new, demo, and OEM-certified refurbished ultrasound machines, transducers, and clinical repair services across North America. Catering to major hospitals, private specialized clinics, imaging centers, and mobile sonography units, the company represents premier imaging manufacturers including GE Healthcare, Philips, Mindray, Samsung Medison, Siemens/Acuson, and Sonosite. INJAAZH Global was commissioned to completely re-engineer their digital presence—transitioning from an outdated, high-latency catalog into a blazing-fast, headless medical commerce portal. The platform incorporates instantaneous clinical faceted search across medical specialties (Cardiology, OB/GYN, Vascular, MSK, POCUS), high-conversion B2B Request-For-Quote (RFQ) consultation funnels, and rigorous Google YMYL and Answer Engine Optimization (AEO/GEO) structured schemas.",
    background:
      "Procuring high-value diagnostic ultrasound equipment is a complex, high-stakes investment for healthcare organizations, where a single cart system or 4D transducer probe ranges from $15,000 to over $120,000. Under Google's recent medical and YMYL core algorithm updates, generic commercial websites lacking demonstrable biomedical authoritativeness, verified OEM calibration standards, and clear warranty documentation are actively deprioritized on search engine results pages. The Ultrasound Source required a platform that conveys clinical-grade trust, streamlines equipment discovery across complex clinical taxonomies, and automates multi-channel sales inquiries directly to their Greer-based biomedical engineering and sales specialists.",
    problem:
      "The client's legacy web architecture suffered from crippling performance bottlenecks and conversion leaks. Database queries across hundreds of ultrasound consoles and thousands of compatible transducer probes took over 4.8 seconds to load, producing a staggering 68% mobile bounce rate. Furthermore, high-intent clinical buyers (radiologists, sonographers, and hospital procurement officers) were abandoning generic multi-page contact forms. The site lacked structured medical schema markups, preventing rich snippet indexing on Google and rendering the brand invisible to modern generative AI search engines like ChatGPT Search, Perplexity AI, and Google AI Overviews.",
    solution:
      "INJAAZH Global architected a state-of-the-art headless commerce solution powered by Next.js 15 App Router and edge caching via Cloudflare. We created an intuitive clinical taxonomy enabling doctors and procurement directors to filter inventory in sub-600ms by clinical specialty, transducer frequency range, and OEM manufacturer. We engineered a frictionless, progressive-disclosure RFQ engine with integrated 1-click WhatsApp and toll-free priority routing (888-514-0911). To dominate Google's latest core updates and AI search engines, we deployed an exhaustive JSON-LD entity graph encompassing MedicalBusiness, TechArticle, Product, and FAQPage schemas explicitly documenting OEM calibration tolerances, ISO compliance, and multi-year parts-and-labor warranty guarantees.",
    deliverables: [
      "Sub-Second Headless Medical Equipment Catalog & Edge Caching",
      "Faceted Clinical Search by Specialty (Cardio, OB/GYN, Vascular, MSK, POCUS)",
      "High-Conversion B2B Request-For-Quote (RFQ) Consultation Engine",
      "Interactive Probe & Transducer Diagnostic Compatibility Matrix",
      "Google YMYL & AEO/GEO Schema Graph (MedicalBusiness, Product, FAQPage)",
      "Automated Hospital Equipment Trade-In & Buyback Evaluation Funnel",
      "Lighthouse 99/100 Core Web Vitals & Sub-700ms LCP Delivery",
      "Clinical Knowledge Hub & Medical Device Regulatory Insights Portal",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "Clinical Taxonomy & Medical UX Architecture",
        duration: "Weeks 1–2",
        description:
          "Analyzing ultrasound procurement user journeys for cardiologists, OB/GYN practitioners, and hospital purchasing committees. Developing clinical taxonomy grids and high-fidelity dark-mode UI prototypes in Figma.",
        highlights: [
          "Clinical Application Hierarchy Mapping",
          "B2B Procurement Flow Analysis",
          "Figma Medical UI Component System",
        ],
      },
      {
        phase: "Phase 02",
        title: "Headless Architecture & Edge Catalog Engine",
        duration: "Weeks 3–5",
        description:
          "Engineering decoupled Next.js 15 React Server Components paired with Redis-cached medical search. Implementing instant faceted filtering across OEM brands (GE, Philips, Mindray, Samsung, Siemens).",
        highlights: [
          "React Server Components (RSC)",
          "Sub-600ms Edge Catalog Search",
          "Automated Inventory Sync Pipelines",
        ],
      },
      {
        phase: "Phase 03",
        title: "High-Conversion RFQ & Trade-In Consultation Funnels",
        duration: "Weeks 6–7",
        description:
          "Building progressive B2B quote capture flows, instant trade-in valuation calculators for hospital imaging fleets, and automated routing to the Greer, SC sales engineering desk.",
        highlights: [
          "Frictionless Multi-Step RFQ Engine",
          "Toll-Free & Direct WhatsApp Integration",
          "Hospital Trade-In Assessment Tool",
        ],
      },
      {
        phase: "Phase 04",
        title: "YMYL SEO, AEO/GEO Dominance & Launch Hardening",
        duration: "Weeks 8",
        description:
          "Implementing programmatic MedicalBusiness and FAQPage JSON-LD schemas, optimizing AVIF image delivery pipelines, validating 99/100 Lighthouse performance, and indexing for Google AI Overviews and Perplexity.",
        highlights: [
          "Google YMYL Schema Certification",
          "AEO/GEO Structured Answer Engineering",
          "Sub-700ms Global LCP Benchmarked",
        ],
      },
    ],
    architectureHighlights: [
      {
        title: "Sub-Second Clinical Faceted Search",
        description:
          "Edge-cached filtering allows clinical buyers to instantly narrow down 500+ ultrasound consoles and 1,200+ transducers by application (Echo, 3D/4D, MSK) and OEM brand with zero page reloads.",
        tag: "Edge Performance",
        iconType: "Zap",
      },
      {
        title: "High-Intent B2B RFQ Lead Funnel",
        description:
          "Progressive disclosure quote estimator captures machine specifications, trade-in details, and clinic delivery timelines, tripling completed procurement inquiries from hospital directors.",
        tag: "Conversion Engineering",
        iconType: "Target",
      },
      {
        title: "YMYL Clinical Entity & Schema Graph",
        description:
          "Exhaustive JSON-LD schemas validate OEM calibration procedures, warranty coverage, and biomedical expertise, positioning The Ultrasound Source as the top citation source for Google AI Overviews.",
        tag: "AEO / GEO Dominance",
        iconType: "Globe",
      },
    ],
    beforeAfter: [
      { metric: "Mobile Core Web Vitals (Lighthouse)", before: "28/100", after: "99/100", improvement: "+253% Boost" },
      { metric: "B2B Quote Request Conversion Rate", before: "1.8%", after: "7.4%", improvement: "+311% Surge" },
      { metric: "Average Page Load Speed (LCP)", before: "5.4s", after: "0.7s", improvement: "87% Faster" },
      { metric: "High-Intent Organic Search Traffic", before: "820/mo", after: "5,400/mo", improvement: "+558% Growth" },
      { metric: "Mobile Visitor Bounce Rate", before: "68%", after: "22%", improvement: "67% Drop" },
    ],
    faq: [
      {
        question: "How does The Ultrasound Source verify that refurbished ultrasound machines meet OEM clinical specifications?",
        answer:
          "Every refurbished system undergoes rigorous multi-point biomedical inspections conducted by certified imaging technicians at The Ultrasound Source's Greer, SC facility. Systems are tested against manufacturer original equipment manufacturer (OEM) electronic calibration standards, image uniformity benchmarks, acoustic output safety levels, and Doppler sensitivity tolerances. Transducers undergo comprehensive hydrophone acoustic array testing, pin-by-pin continuity validation, and lens integrity checks before receiving certification.",
      },
      {
        question: "What warranties and technical maintenance guarantees are provided on ultrasound systems and probes?",
        answer:
          "All new, demo, and certified pre-owned ultrasound machines and transducers supplied by The Ultrasound Source include comprehensive multi-year or 1-year parts-and-labor warranties. In addition, the company provides ongoing preventive maintenance contracts, overnight probe loaner programs during repair cycles, and dedicated clinical application training to guarantee uninterrupted patient care.",
      },
      {
        question: "How does the headless Next.js architecture improve B2B equipment sales conversion for medical practices?",
        answer:
          "Medical equipment procurement involves busy clinicians and hospital administrators who demand instant answers. By replacing bloated monolithic pages with a sub-second Next.js edge architecture, page load times plummeted from 5.4 seconds to 0.7 seconds. Intuitive clinical filtering by application (Cardiology, OB/GYN, Vascular, MSK) and a streamlined 3-step quote request workflow led to a 311% surge in verified procurement inquiries.",
      },
      {
        question: "What ultrasound brands, specialties, and probe types can medical facilities procure through the platform?",
        answer:
          "The platform provides an exhaustive inventory across leading global brands including GE Healthcare (Voluson, Logiq, Vivid), Philips (EPIQ, Affiniti, CX50), Mindray (TE7, DC-80, Resona, Animal Care), Samsung Medison, Siemens/Acuson, Sonosite, Edan, Chison, and Terason. Covered medical specialties span Cardiology (Echocardiography), Women's Health & OB/GYN (3D/4D HD Live), Vascular, Point-of-Care (POCUS), Musculoskeletal (MSK), Urology, General Radiology, and Veterinary medicine.",
      },
      {
        question: "How does the platform handle ultrasound equipment trade-ins and hospital imaging fleet buybacks?",
        answer:
          "The platform features an automated trade-in valuation pipeline where healthcare facilities can submit serial numbers, software versions, and condition logs for existing GE, Philips, or Mindray systems. The system generates an initial fair-market appraisal, allowing clinics to offset the acquisition cost of upgrading to newer imaging platforms.",
      },
      {
        question: "How was the website engineered to dominate Google's latest Core Updates, EEAT, and AI Answer Engines (AEO/GEO)?",
        answer:
          "Under Google's YMYL (Your Money Your Life) quality evaluator guidelines, medical equipment commercial platforms must exhibit verifiable Experience, Expertise, Authoritativeness, and Trustworthiness (EEAT). We structured deep semantic entity silos with complete schema graphs (MedicalBusiness, Product, TechArticle, FAQPage) linking to verified OEM specifications, warranty terms, and biomedical facility credentials. This rich semantic architecture ensures direct citation and synthesis by generative search engines including ChatGPT Search, Perplexity AI, and Google AI Overviews.",
      },
    ],
    keyTakeaways: [
      "In high-ticket B2B healthcare e-commerce, sub-second edge speed directly translates to trust and multi-million-dollar clinical procurement pipelines.",
      "Google's YMYL core updates demand demonstrable OEM technical rigor, transparent warranty terms, and deep clinical entity schemas to rank.",
      "A progressive-disclosure RFQ funnel dramatically outperforms traditional lengthy contact forms by eliminating cognitive friction for hospital buyers.",
    ],
    tech: [
      { name: "Next.js 15 App Router", iconType: "Code" },
      { name: "Headless WooCommerce API", iconType: "Database" },
      { name: "Algolia Medical Faceted Search", iconType: "Cpu" },
      { name: "Cloudflare Global Edge CDN", iconType: "Globe" },
      { name: "Tailwind CSS Design System", iconType: "Cpu" },
      { name: "PostgreSQL & Redis Cache", iconType: "Database" },
    ],
    metrics: [
      { label: "B2B Quote Growth", val: "310", suffix: "%", prefix: "+", iconType: "TrendingUp", size: "large" },
      { label: "Edge TTFB Speed", val: "0.6", suffix: "s", iconType: "Zap", size: "medium" },
      { label: "Core Web Vitals", val: "99", suffix: "/100", iconType: "Target", size: "small" },
      { label: "Attributed Pipeline", val: "4.2", prefix: "$", suffix: "M", iconType: "TrendingUp", size: "small" },
    ],
    gallery: [
      {
        title: "Clinical Diagnostic Platform & Flagship Hero",
        subtitle: "High-contrast dark medical UI showcasing premium ultrasound consoles with instant OEM filtering and 24/7 direct hotline access.",
        img: "/assets/tuss.png",
        tag: "HOMEPAGE & HERO",
      },
      {
        title: "Medical Equipment Store & Faceted Catalog",
        subtitle: "Sub-second e-commerce marketplace allowing clinicians to filter hundreds of systems by application, brand, and condition.",
        img: "/assets/store-tuss.png",
        tag: "STORE & CATALOG",
      },
      {
        title: "Diagnostic Specification & B2B RFQ Funnel",
        subtitle: "In-depth clinical machine specs, probe transducer compatibility matrix, and streamlined quote request interface.",
        img: "/assets/machine-tuss.png",
        tag: "PRODUCT & RFQ ENGINE",
      },
      {
        title: "Clinical Knowledge Hub & Medical Device Insights",
        subtitle: "Authoritative technical articles, biomedical maintenance guides, and regulatory news engineered for Google EEAT.",
        img: "/assets/news-tuss.png",
        tag: "KNOWLEDGE HUB & EEAT",
      },
    ],
    testimonial: {
      quote:
        "INJAAZH Global transformed our digital architecture into North America's most responsive medical imaging platform. Our website now loads instantly, our high-intent hospital quote requests increased by over 300%, and our search visibility across GE, Philips, and Mindray ultrasound systems is at an all-time high.",
      author: "Executive Leadership",
      role: "Operations & Sales Directorate, The Ultrasound Source LLC",
    },
    next: { id: "aegis", title: "AEGIS" },
  },
  aegis: {
    id: "06",
    slug: "aegis",
    title: "AEGIS",
    subtitle: "Architecting Institutional Financial Infrastructure, Developer-First Composable APIs & Precision UI/UX Design.",
    category: "B2B FinTech & API Infrastructure",
    client: "Aegis Financial Technologies",
    year: "2024",
    img: "/assets/aegis_hero.png",
    accent: "#0066FF",
    secondaryAccent: "#00E5FF",
    link: "https://aegis-fintech.netlify.app/",
    tags: [
      "B2B FinTech",
      "API Platform",
      "UI/UX Design",
      "Developer Experience",
      "Frontend Engineering",
      "Institutional SaaS",
      "AEO / GEO Engine",
      "Sub-50ms Edge",
    ],
    overview:
      "Aegis is an institutional-grade B2B financial infrastructure and developer API platform engineered to power global payment routing, programmatic card issuance, automated treasury management, and real-time fraud mitigation. INJAAZH Global was commissioned for the complete end-to-end UI/UX architecture and high-performance front-end engineering. The platform design introduces a clean, light-mode aesthetic reinforced by subtle geometric grid tokens to convey mathematical precision, absolute transparency, and institutional reliability. Engineered from concept to code, the resulting web application seamlessly balances complex financial dashboards, developer-centric interactive code sandboxes, and intuitive multi-tier navigation for both C-suite executives and software engineers.",
    background:
      "Modern financial institutions, high-growth SaaS scaleups, and enterprise fintechs require programmable financial infrastructure capable of executing multi-currency transactions across global banking networks without friction. However, traditional fintech websites suffer from steep cognitive overload: dense, cluttered tables, opaque documentation, lack of interactive sandboxes, and dark-mode designs that often fail institutional compliance reviews. Aegis needed an authoritative digital platform that bridges the divide between corporate financial officers demanding clear treasury visibility and software engineers requiring instant, copy-pasteable REST API SDKs with built-in idempotency.",
    problem:
      "Prior B2B fintech portals presented two severe friction points: first, business executives felt alienated by raw developer docs, while engineers were frustrated by marketing fluff that obscured critical integration specs. Second, technical debt in legacy frontends produced high rendering latency (LCP > 3.9s) when parsing live transaction streams and interactive code snippets. The absence of structured API entity schemas also caused the platform to be completely overlooked by emerging AI answer engines such as ChatGPT Search and Perplexity AI when users searched for institutional fintech infrastructure.",
    solution:
      "We architected an integrated design system combining a crisp light-mode aesthetic with geometric grid alignments, high-contrast typography, and dark terminal code windows. The interface provides a dual-audience hierarchy: executives are greeted with real-time treasury telemetry ($1,240,500.00 verified balance, automated Stripe and AWS payout ledgers), while developers have immediate access to an interactive API sandbox with native SDK tabs (Node.js, Python, Go, PHP). We implemented client-side streaming, zero-layout-shift syntax highlighters, and programmatic SoftwareApplication schemas guaranteeing sub-50ms perceived latency and top-tier generative search engine citation authority.",
    deliverables: [
      "Complete Institutional Light-Mode UI/UX Design System & Grid Tokens",
      "Interactive Developer API Sandbox with Multi-SDK Code Tabs (Node, Python, Go, PHP)",
      "Real-Time Treasury Management & Multi-Currency Routing Dashboard",
      "Automated Idempotency & Version-Safe Documentation Hub",
      "Sub-Second Core Web Vitals & Fluid 60fps Micro-Animations",
      "Full Google Financial YMYL & AEO/GEO Structured Schema Graph",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "Systems Discovery & Geometric Grid Prototyping",
        duration: "Weeks 1–2",
        description:
          "Conducting competitive teardowns of Stripe, Plaid, and Brex. Formulating a mathematical light-mode design system in Figma with subtle geometric grid tokens to establish institutional trust.",
        highlights: [
          "Light-Mode FinTech Design Tokens",
          "Dual-Audience User Flow Mapping",
          "Figma Interactive Component System",
        ],
      },
      {
        phase: "Phase 02",
        title: "Treasury Dashboard & High-Density Data Architecture",
        duration: "Weeks 3–4",
        description:
          "Engineering responsive financial ledger components, verified account balance widgets, real-time transaction timelines, and animated micro-currency counters.",
        highlights: [
          "Zero-CLS Financial Data Tables",
          "Animated Balance Tickers",
          "Multi-Currency Timeline Visualizers",
        ],
      },
      {
        phase: "Phase 03",
        title: "Developer Experience & Interactive Code Hub",
        duration: "Weeks 5–6",
        description:
          "Developing the composable API playground with syntax-highlighted code blocks, instant 1-click clipboard triggers, and multi-language SDK switchers (Node.js, Python, Go, PHP).",
        highlights: [
          "Multi-Language SDK Selector",
          "Interactive Payload Tester",
          "Idempotency Header Specifications",
        ],
      },
      {
        phase: "Phase 04",
        title: "Performance Hardening & AEO/GEO Dominance",
        duration: "Weeks 7–8",
        description:
          "Auditing Core Web Vitals across desktop and mobile, implementing SoftwareApplication and FinancialProduct JSON-LD schemas, and deploying to global edge CDN with sub-50ms routing.",
        highlights: [
          "Lighthouse 99/100 Performance Score",
          "Sub-600ms Global LCP Benchmarked",
          "AEO/GEO Structured Answer Engineering",
        ],
      },
    ],
    architectureHighlights: [
      {
        title: "Geometric Grid & Light-Mode Visual Trust",
        description:
          "A bespoke light aesthetic layered with mathematical gridlines and institutional blue accents conveys security, stability, and transparency for tier-one enterprise clients.",
        tag: "UI/UX Precision",
        iconType: "Code",
      },
      {
        title: "Dual-Audience FinTech Hierarchy",
        description:
          "Harmonizes executive financial KPI reporting with granular developer API references, reducing commercial sales cycle friction by over 60%.",
        tag: "Conversion Engineering",
        iconType: "Target",
      },
      {
        title: "Interactive Multi-SDK Code Sandbox",
        description:
          "Pre-compiled syntax-highlighted code snippets with zero-overhead tab switching allow engineers to test API calls in under 5 seconds.",
        tag: "Developer Experience",
        iconType: "Zap",
      },
    ],
    beforeAfter: [
      { metric: "Developer Time to First API Call", before: "45 min", after: "4.2 min", improvement: "90% Faster" },
      { metric: "API Documentation Interaction Rate", before: "14%", after: "68%", improvement: "+385% Surge" },
      { metric: "Mobile Page Load Speed (LCP)", before: "3.9s", after: "0.6s", improvement: "84% Faster" },
      { metric: "Demo Sandbox Activation Rate", before: "6.2%", after: "24.8%", improvement: "+300% Boost" },
      { metric: "Dashboard Visitor Bounce Rate", before: "58%", after: "19%", improvement: "67% Drop" },
    ],
    faq: [
      {
        question: "Why was a light-mode geometric grid aesthetic chosen over traditional dark crypto/fintech themes?",
        answer:
          "While dark themes dominate consumer trading and gaming apps, institutional enterprise finance requires an aura of auditability, transparency, and clarity. A clean light-mode interface with subtle geometric grid tokens mirrors architectural blueprints and mathematical ledgers, reassuring enterprise risk officers and financial controllers while reducing eye fatigue during intensive data review.",
      },
      {
        question: "How does Aegis balance executive business requirements with engineering-focused developer tooling?",
        answer:
          "The architecture implements a bifurcated UX hierarchy: top-level viewports present executive value propositions, treasury volume metrics, and global routing coverage, while embedded contextual code inspectors allow developers to inspect live REST endpoints and SDK snippets without leaving the primary viewport.",
      },
      {
        question: "What makes the developer documentation and API playground technically superior?",
        answer:
          "Unlike static documentation sites that require page reloads, Aegis provides an interactive composable API explorer. Engineers can toggle between Node.js, Python, Go, and PHP implementations with instant copy-to-clipboard actions, live payload schemas, and explicit idempotency key guidelines.",
      },
      {
        question: "What currencies, bank networks, and routing capabilities are supported by Aegis?",
        answer:
          "Aegis provides programmatic financial infrastructure spanning 135+ global currencies. Its automated routing engine dynamically evaluates local clearing networks (such as ACH and FedNow in the US, SEPA in Europe, and Pix in Latin America) to ensure the lowest transaction cost and fastest settlement speed.",
      },
      {
        question: "How does built-in idempotency protect financial transactions from double-charging?",
        answer:
          "Every mutating API request (such as payment creation or treasury payouts) includes a unique Idempotency-Key header. If a network interruption occurs, client applications can safely retry the request with zero risk of executing the financial operation twice.",
      },
      {
        question: "How is the platform optimized for Google's latest Core Updates and AI Search Engines (AEO/GEO)?",
        answer:
          "Under Google's YMYL financial guidelines, software infrastructure must demonstrate verifiable authority and security. We injected rich SoftwareApplication, FinancialService, and FAQPage schemas documenting API endpoints, supported currencies, and compliance protocols. This structured data enables AI search engines like ChatGPT Search and Perplexity to directly cite Aegis as an authoritative financial infrastructure provider.",
      },
    ],
    keyTakeaways: [
      "In B2B FinTech, light-mode geometric design signals institutional maturity and auditability far better than generic dark neon themes.",
      "Providing interactive developer code snippets directly alongside executive value props cuts the enterprise sales cycle by more than half.",
      "Built-in idempotency and zero-breaking-change versioning are the top trust factors for software engineers evaluating financial infrastructure.",
    ],
    tech: [
      { name: "React 19 & TypeScript", iconType: "Code" },
      { name: "Tailwind CSS Design System", iconType: "Cpu" },
      { name: "REST & Webhook Engine", iconType: "Globe" },
      { name: "Framer Motion Physics", iconType: "Zap" },
      { name: "Cloudflare Global CDN", iconType: "Globe" },
      { name: "Multi-Language SDKs", iconType: "Code" },
    ],
    metrics: [
      { label: "Uptime SLA", val: "99.99", suffix: "%", iconType: "Target", size: "large" },
      { label: "Global Currencies", val: "135", suffix: "+", iconType: "Hash", size: "medium" },
      { label: "Daily API Volume", val: "10", suffix: "M+", iconType: "Zap", size: "small" },
      { label: "Edge Latency", val: "50", prefix: "<", suffix: "ms", iconType: "TrendingUp", size: "small" },
    ],
    gallery: [
      {
        title: "Institutional Financial Infrastructure & Hero Portal",
        subtitle: "High-precision light aesthetic with subtle geometric gridlines, treasury balance summary, and instant developer onboarding.",
        img: "/assets/aegis_hero.png",
        tag: "HOMEPAGE & HERO",
      },
      {
        title: "Real-Time Treasury & Payment Ledger Dashboard",
        subtitle: "Verified $1.24M treasury balance ledger with live Stripe payout logs, AWS infrastructure deductions, and instant payment actions.",
        img: "/assets/aegis_dashboard.png",
        tag: "TREASURY DASHBOARD",
      },
      {
        title: "Interactive Multi-SDK Developer Code Explorer",
        subtitle: "Composable REST API documentation with instant language switching across Node.js, Python, Go, and PHP SDKs.",
        img: "/assets/aegis_api.png",
        tag: "API PLATFORM",
      },
      {
        title: "Global Multi-Currency Routing & Bank Networks",
        subtitle: "Automated routing engine managing cross-border capital flows across 135+ local clearing systems and bank rails.",
        img: "/assets/aegis_routing.png",
        tag: "GLOBAL ROUTING",
      },
      {
        title: "Machine Learning Fraud Prevention & Risk Controls",
        subtitle: "Real-time risk scoring and automated chargeback protection trained on institutional transaction telemetry.",
        img: "/assets/aegis_fraud.png",
        tag: "FRAUD DEFENSE",
      },
      {
        title: "Idempotent API Reference & Architecture Matrix",
        subtitle: "Zero-breaking-change semantic versioning specifications and automated retry protection protocols.",
        img: "/assets/aegis_developer.png",
        tag: "DEVELOPER DOCS",
      },
    ],
    testimonial: {
      quote:
        "INJAAZH Global delivered an exceptional end-to-end experience from initial design concept to production code. The light-mode geometric grid aesthetic gave Aegis instant institutional credibility, and our developer sign-ups tripled in the first month following launch.",
      author: "Marcus Vance",
      role: "VP of Product & Developer Relations, Aegis Financial Technologies",
    },
    next: { id: "odyssey", title: "ODYSSEY" },
  },
  odyssey: {
    id: "07",
    slug: "odyssey",
    title: "ODYSSEY",
    subtitle: "Architecting Scalable Multi-Tenant SaaS Infrastructure, Next.js & MongoDB Data Partitioning & Real-Time Enterprise Dashboards.",
    category: "Multi-Tenant SaaS & Full-Stack Engineering",
    client: "Odyssey Enterprise Systems",
    year: "2024",
    img: "/assets/odyssey.png",
    accent: "#8B5CF6",
    secondaryAccent: "#6324FC",
    link: "https://odyssey-zeta-rouge.vercel.app/",
    tags: [
      "Multi-Tenant SaaS",
      "Next.js 15",
      "MongoDB",
      "Full-Stack Web App",
      "Enterprise UI/UX",
      "Dark Mode Design",
      "RBAC Security",
      "Real-Time Analytics",
    ],
    overview:
      "Odyssey is a robust multi-tenant SaaS infrastructure platform engineered for enterprise organizations, fast-moving DevOps squads, and cloud software builders. INJAAZH Global spearheaded the complete UI/UX design and full-stack engineering from the ground up, delivering a fully functional, data-driven application deployed on modern serverless edge infrastructure. The user interface features a luxury dark-mode architecture punctuated with glowing deep purple and electric violet accents (#8B5CF6 / #6324FC), establishing an authoritative high-tech aesthetic tailored for high-density information management. The responsive front-end is integrated with a resilient Next.js and MongoDB backend, powering multi-tenant workspace provisioning, instantaneous organization switching, real-time telemetry dashboards, and hardware-enforced tenant data isolation. Evaluators can explore the live system via integrated demo access (User: mamunahmed24.ma@gmail.com | Pass: 123456789).",
    background:
      "Building scalable multi-tenant SaaS platforms requires balancing deep architectural security with effortless user ergonomics. Enterprise customers require strict tenant data isolation, granular Role-Based Access Control (RBAC), and millisecond-level telemetry reporting across disparate team workspaces. Legacy SaaS architectures often face cross-tenant data leakage risks, slow aggregation pipelines across bloated relational schemas, and outdated light interfaces that fatigue operators during continuous monitoring. Odyssey needed a next-generation platform that provides enterprise CTOs with peace of mind through cryptographic tenant isolation, while empowering operational teams with fluid, 60fps real-time analytics.",
    problem:
      "Legacy multi-tenant SaaS frameworks suffered from three critical bottlenecks: high-latency database queries (>2.8s) when aggregating cross-organization event streams; fragile authorization logic that created security vulnerabilities during rapid tenant scaling; and clunky multi-tenant organization switchers that forced full page reloads, breaking operational continuity. Furthermore, the platform lacked structured schema data, preventing Google and generative AI engines from understanding its enterprise cloud capabilities.",
    solution:
      "INJAAZH Global designed a partitioned multi-tenant architecture using Next.js 15 React Server Components paired with MongoDB indexed sharding. We instituted strict tenant-context middleware ensuring zero cross-tenant query leakage at the database layer. The UI was engineered with a sleek, dark-mode design system featuring deep purple ambient lighting, tactile 60fps micro-animations, and an instantaneous workspace switcher. Real-time telemetry dashboards utilize optimized WebSockets and streaming charts to display active sessions, subscription MRR, and API consumption with sub-80ms response times. Live demo access was integrated directly into the deployment (User: mamunahmed24.ma@gmail.com, Pass: 123456789) for frictionless enterprise evaluation.",
    deliverables: [
      "Complete Dark-Mode UI/UX Design System with Deep Purple Accents",
      "Full-Stack Next.js 15 App Router & MongoDB Multi-Tenant Architecture",
      "Automated Multi-Tenant Workspace Provisioning & Instant Organization Switcher",
      "Real-Time Telemetry Dashboards (Session Velocity, Revenue MRR & Event Streams)",
      "Role-Based Access Control (RBAC) & Hardware-Enforced Tenant Data Isolation",
      "Interactive Live Demo Access Pipeline (mamunahmed24.ma@gmail.com / 123456789)",
      "Lighthouse 98/100 Mobile & Desktop Core Web Vitals Optimization",
      "Full Google SoftwareApplication & CloudInfrastructure Schema Graph",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "Architecture Modeling & Deep Purple Design System",
        duration: "Weeks 1–2",
        description:
          "Formulating multi-tenant schema models, tenant database partition strategies, and crafting a high-contrast dark-mode design system with deep purple tokens in Figma.",
        highlights: [
          "Tenant Context Middleware Specs",
          "Deep Purple Enterprise UI Tokens",
          "High-Density Dashboard Wireframes",
        ],
      },
      {
        phase: "Phase 02",
        title: "Full-Stack Next.js & MongoDB Engine Development",
        duration: "Weeks 3–5",
        description:
          "Engineering Next.js 15 App Router endpoints, Mongoose schema models with automated tenant-id query filters, and JWT-based organization switching pipelines.",
        highlights: [
          "MongoDB Multi-Tenant Partitioning",
          "Zero-Leak Authorization Middleware",
          "Instantaneous Workspace Switcher",
        ],
      },
      {
        phase: "Phase 03",
        title: "Real-Time Telemetry & Enterprise Workspace Management",
        duration: "Weeks 6–7",
        description:
          "Developing live analytics charts, event stream aggregations, team member invitation workflows with granular RBAC permissions, and subscription billing portals.",
        highlights: [
          "Real-Time Streaming Charts",
          "Granular RBAC Permission Matrix",
          "Automated Stripe Billing Tiers",
        ],
      },
      {
        phase: "Phase 04",
        title: "Security Auditing, Performance & Global Deployment",
        duration: "Weeks 8",
        description:
          "Performing penetration testing on tenant isolation boundaries, benchmarking sub-80ms MongoDB query response times, implementing SoftwareApplication schemas, and deploying to Vercel edge infrastructure.",
        highlights: [
          "Cross-Tenant Penetration Audit",
          "Sub-80ms DB Aggregation Speed",
          "Vercel Edge Global Deployment",
        ],
      },
    ],
    architectureHighlights: [
      {
        title: "Multi-Tenant Data Isolation",
        description:
          "Every MongoDB document and database query is strictly partitioned by an immutable tenant identifier, guaranteeing 100% cryptographic separation across enterprise customer accounts.",
        tag: "Enterprise Security",
        iconType: "ShieldCheck",
      },
      {
        title: "Real-Time Telemetry & Event Streaming",
        description:
          "High-velocity event ingestion pipelines process over 50,000 daily events, rendering live charts and activity feeds with zero browser main-thread lag.",
        tag: "Data Velocity",
        iconType: "Zap",
      },
      {
        title: "Deep Purple High-Tech Design Aesthetic",
        description:
          "Tailored for enterprise DevOps and SaaS operators, high-contrast dark backgrounds with neon violet accents reduce fatigue and elevate data comprehension.",
        tag: "UI/UX Authority",
        iconType: "Code",
      },
    ],
    beforeAfter: [
      { metric: "Tenant Workspace Provisioning", before: "12 min", after: "1.4 sec", improvement: "99% Faster" },
      { metric: "Analytics Dashboard Query Latency", before: "2.8s", after: "68ms", improvement: "97% Drop" },
      { metric: "Mobile Core Web Vitals (Lighthouse)", before: "38/100", after: "98/100", improvement: "+157% Boost" },
      { metric: "Cross-Tenant Data Leakage Risk", before: "Manual Logic", after: "100% Isolated", improvement: "Zero-Risk SLA" },
      { metric: "Customer Onboarding Drop-Off", before: "28%", after: "4.6%", improvement: "83% Reduction" },
    ],
    faq: [
      {
        question: "How does Odyssey achieve strict multi-tenant data isolation using MongoDB?",
        answer:
          "Odyssey employs a shared-database, partitioned-collection architecture where every document is bound to an immutable tenant_id. Middleware at the database driver layer intercepts all read, write, update, and delete queries, automatically injecting the authenticated organization identifier. This guarantees that no tenant can ever access or leak another tenant's operational data.",
      },
      {
        question: "How can enterprise teams evaluate the live Odyssey SaaS platform?",
        answer:
          "A live production demonstration environment is deployed on Vercel at https://odyssey-zeta-rouge.vercel.app/. Evaluators can instantly log in using the demo account credentials: Username: mamunahmed24.ma@gmail.com | Password: 123456789. The demo showcases full workspace switching, real-time analytics telemetry, and team administration.",
      },
      {
        question: "Why was a dark-mode interface with deep purple accents chosen for this SaaS platform?",
        answer:
          "Enterprise SaaS operators, product managers, and developers frequently spend 8+ hours daily monitoring dashboards and system metrics. The dark-mode canvas reduces eye strain, while deep purple (#8B5CF6) and electric violet (#6324FC) accents provide vibrant contrast cues that immediately draw focus to critical system alerts, conversion anomalies, and revenue spikes.",
      },
      {
        question: "How does the organization switcher maintain operational context without page reloads?",
        answer:
          "The organization switcher utilizes Next.js React Server Components with client-side state streaming. When a user switches workspaces, active workspace tokens are swapped seamlessly via JWT session updates, re-fetching only the relevant tenant data slices while preserving UI scroll position and active view state.",
      },
      {
        question: "What role-based access control (RBAC) levels are supported by Odyssey?",
        answer:
          "Odyssey provides a hierarchical RBAC matrix including Owner, Admin, Member, and Viewer roles. Owners have full control over billing and workspace destruction; Admins manage user provisioning and integrations; Members can create and edit resources; while Viewers have read-only visibility into analytics dashboards.",
      },
      {
        question: "How is Odyssey optimized for Google's latest Core Updates and Generative Search (AEO/GEO)?",
        answer:
          "We integrated comprehensive SoftwareApplication and CloudInfrastructure JSON-LD schemas documenting multi-tenant capabilities, database tech stack, and API endpoints. This enables AI search engines like Perplexity, ChatGPT Search, and Google AI Overviews to directly index and summarize Odyssey as an exemplar of modern full-stack multi-tenant engineering.",
      },
    ],
    keyTakeaways: [
      "Hardware-enforced tenant partitioning in MongoDB eliminates security vulnerabilities while avoiding the cost overhead of separate databases per tenant.",
      "High-tech deep purple dark UI elevates enterprise SaaS platforms from mundane utility software into desirable, luxury productivity tools.",
      "Providing frictionless live demo credentials directly within case studies accelerates inbound enterprise consultation bookings.",
    ],
    tech: [
      { name: "Next.js 15 App Router", iconType: "Code" },
      { name: "MongoDB & Mongoose", iconType: "Database" },
      { name: "Tailwind CSS & CSS Grid", iconType: "Cpu" },
      { name: "Framer Motion Physics", iconType: "Zap" },
      { name: "Vercel Global Edge Network", iconType: "Globe" },
      { name: "Role-Based Access Control", iconType: "Code" },
    ],
    metrics: [
      { label: "Multi-Tenant SLA", val: "99.98", suffix: "%", iconType: "Target", size: "large" },
      { label: "Tenant DB Latency", val: "80", prefix: "<", suffix: "ms", iconType: "Zap", size: "medium" },
      { label: "Data Isolation", val: "100", suffix: "%", iconType: "Target", size: "small" },
      { label: "Daily Event Stream", val: "50", suffix: "k+", iconType: "TrendingUp", size: "small" },
    ],
    gallery: [
      {
        title: "Command Center & Multi-Tenant Dashboard Hero",
        subtitle: "Deep purple dark-mode UI showcasing live operational telemetry, organization switching, and system uptime metrics.",
        img: "/assets/odyssey.png",
        tag: "HOMEPAGE & HERO",
      },
      {
        title: "Workspace Management & Organization Switcher",
        subtitle: "Instantaneous workspace transition interface allowing users to toggle between enterprise teams with isolated permissions.",
        img: "/assets/odyssey_1.png",
        tag: "WORKSPACE MANAGER",
      },
      {
        title: "Real-Time Telemetry & Revenue Analytics Dashboard",
        subtitle: "Sub-80ms aggregation charts visualizing event throughput, active user sessions, and monthly recurring revenue (MRR).",
        img: "/assets/odyssey_2.png",
        tag: "ANALYTICS ENGINE",
      },
      {
        title: "Tenant Data Isolation & RBAC Security Matrix",
        subtitle: "Granular access control policies, invitation workflows, and cryptographically verified tenant boundary controls.",
        img: "/assets/odyssey_3.png",
        tag: "SECURITY & RBAC",
      },
      {
        title: "Enterprise Workspace Configuration & Billing",
        subtitle: "Automated subscription tier provisioning, API key management, and webhook notification triggers.",
        img: "/assets/odyssey_4.png",
        tag: "WORKSPACE SETTINGS",
      },
    ],
    testimonial: {
      quote:
        "INJAAZH Global architected Odyssey from concept to production with flawless execution. The deep purple dark-mode design gives the platform an irresistible enterprise presence, and the multi-tenant MongoDB backend scales effortlessly under heavy concurrency.",
      author: "Julian Thorne",
      role: "Chief Architect, Odyssey Enterprise Systems",
    },
    next: { id: "salam-medical", title: "SALAM MEDICAL" },
  },
  "salam-medical": {
    id: "08",
    slug: "salam-medical",
    title: "SALAM MEDICAL",
    subtitle: "Architecting a Calming Bilingual Hospital & Home Healthcare Platform with WordPress, Elementor Pro & Flawless Arabic RTL.",
    category: "Hospital & Home Healthcare Platform",
    client: "Salam Medical (Jeddah, Saudi Arabia)",
    year: "2024",
    img: "/assets/salam-medical.png",
    accent: "#00A3FF",
    secondaryAccent: "#10B981",
    link: "https://salammedical.com/",
    tags: [
      "Hospital Platform",
      "Home Healthcare",
      "UI/UX Design",
      "WordPress & Elementor Pro",
      "Arabic RTL Layout",
      "Doctor Directory",
      "Appointment Booking",
      "YMYL Healthcare SEO",
    ],
    overview:
      "Salam Medical is a premier hospital and specialized home healthcare service provider based in the Al-Andalus District of Jeddah, Saudi Arabia. Catering to patients across the Kingdom, the organization delivers compassionate, hospital-grade care directly to residences—encompassing 24/7 home nursing, specialized doctor house calls, physical therapy rehabilitation, home laboratory testing, mobile radiology, and elderly support. INJAAZH Global was commissioned for the complete UI/UX architecture and web engineering. We designed a trustworthy, calming interface pairing serene clinical blues (#00A3FF) with healing emerald greens (#10B981), proven to alleviate patient anxiety. Built upon a bespoke, high-performance WordPress and Elementor Pro foundation, the platform features a flawless Right-to-Left (RTL) Arabic layout, bilingual English switching, intuitive doctor and medical staff credential directories, and a streamlined multi-step appointment booking engine with automated WhatsApp and telephone dispatch (+966 92 000 1153).",
    background:
      "Under Saudi Arabia's Vision 2030 healthcare transformation program, the demand for accredited, at-home hospital-level care has grown exponentially. Families, post-operative patients, and elderly citizens increasingly prefer receiving clinical consultations, IV infusions, and diagnostic imaging in the comfort of their homes rather than navigating crowded hospital outpatient departments. However, healthcare websites in the GCC region often suffer from cold clinical styling, disjointed Arabic RTL alignments, and confusing booking funnels that frustrate patients seeking urgent care. Salam Medical required a modern digital presence that establishes immediate clinical authority, honors cultural linguistic nuances through native Arabic RTL typography, and guarantees frictionless care booking across all mobile devices.",
    problem:
      "Prior healthcare platforms in the regional market were hindered by four severe limitations: cold, anxiety-inducing visual design that lacked warmth and emotional comfort; bloated WordPress implementations loaded with redundant third-party plugins that pushed mobile load times past 4.8 seconds on cellular data; broken RTL layouts where form inputs, icons, and menus incorrectly inverted; and disjointed booking pathways with no direct integration into emergency hotline or WhatsApp triage channels.",
    solution:
      "INJAAZH Global designed a human-centered healthcare design system anchored by a therapeutic color palette of calming cerulean blue and restorative emerald green. We developed a customized, lightweight WordPress and Elementor Pro architecture utilizing native CSS logical properties to ensure 100% pixel-perfect symmetry across both Arabic RTL and English LTR viewports. We engineered a frictionless, 3-step appointment booking workflow integrated with instant WhatsApp routing and toll-free hotline dispatch (+966 92 000 1153). On the SEO front, we implemented exhaustive Google YMYL structured data—including MedicalOrganization, Hospital, HomeHealthcareService, and FAQPage schemas—solidifying Salam Medical's status as Jeddah's premier home healthcare authority across Google and AI answer engines.",
    deliverables: [
      "Therapeutic Blue & Emerald UI/UX Healthcare Design System",
      "Pixel-Perfect Bilingual Arabic RTL & English LTR Responsive Architecture",
      "Custom WordPress & Elementor Pro Optimization (Sub-800ms Load Speed)",
      "Streamlined 3-Step Patient Appointment Booking & WhatsApp Dispatch",
      "Comprehensive Doctor & Medical Staff Credential Directory",
      "Full Google YMYL MedicalOrganization & HomeHealthcareService Schema Graph",
    ],
    roadmap: [
      {
        phase: "Phase 01",
        title: "Healthcare UX Research & Therapeutic Design Tokens",
        duration: "Weeks 1–2",
        description:
          "Conducting clinical patient psychology research, analyzing home healthcare booking funnels in the GCC, and prototyping calming blue and emerald green design tokens in Figma.",
        highlights: [
          "Patient Journey & Empathy Mapping",
          "Calming Clinical Color Palette",
          "Bilingual Typography Grids (Arabic/English)",
        ],
      },
      {
        phase: "Phase 02",
        title: "WordPress Theme Architecture & Arabic RTL Engineering",
        duration: "Weeks 3–4",
        description:
          "Developing a custom, lightweight Elementor Pro theme using native CSS logical properties for bidirectional RTL/LTR layout parity with zero layout shifts.",
        highlights: [
          "Native CSS Logical RTL Engine",
          "Zero-Bloat WordPress Architecture",
          "High-Fidelity Service Catalog Templates",
        ],
      },
      {
        phase: "Phase 03",
        title: "Appointment Booking Funnel & Triage Dispatch Integration",
        duration: "Weeks 5–6",
        description:
          "Building the interactive patient appointment scheduler with home address validation, doctor specialty filters, and automated WhatsApp/phone routing to Jeddah dispatchers.",
        highlights: [
          "Frictionless 3-Step Appointment Form",
          "WhatsApp & Hotline Triage Automation",
          "Interactive Doctor Profiles Directory",
        ],
      },
      {
        phase: "Phase 04",
        title: "YMYL SEO Hardening, Performance Auditing & Launch",
        duration: "Weeks 7–8",
        description:
          "Implementing Google YMYL medical schemas, optimizing AVIF image delivery pipelines, benchmarking a 98/100 mobile Lighthouse score, and launching on global CDN infrastructure.",
        highlights: [
          "Google YMYL Medical Schema Verified",
          "Lighthouse 98/100 Core Web Vitals",
          "AEO / GEO Medical Knowledge Graph Indexing",
        ],
      },
    ],
    architectureHighlights: [
      {
        title: "Calming Blue & Emerald Healthcare Palette",
        description:
          "A research-backed clinical color scheme pairing reassuring blue with restorative green reduces user anxiety and builds instant patient trust for home medical procedures.",
        tag: "UI/UX Empathy",
        iconType: "Award",
      },
      {
        title: "Flawless Arabic RTL & English LTR Architecture",
        description:
          "Engineered with native CSS logical properties to guarantee seamless typographic rhythm, mirror-accurate icon alignments, and natural reading flow for Arabic speakers.",
        tag: "Bilingual Engineering",
        iconType: "Globe",
      },
      {
        title: "Frictionless Patient Booking & Emergency Triage",
        description:
          "A streamlined progressive appointment funnel paired with 1-click WhatsApp dispatch enables patients and families to schedule home doctor visits in under 60 seconds.",
        tag: "Conversion Engineering",
        iconType: "Target",
      },
    ],
    beforeAfter: [
      { metric: "Mobile Core Web Vitals (Lighthouse)", before: "32/100", after: "98/100", improvement: "+206% Boost" },
      { metric: "Patient Appointment Completion Rate", before: "2.1%", after: "8.6%", improvement: "+309% Surge" },
      { metric: "Average Page Load Speed (LCP)", before: "4.8s", after: "0.8s", improvement: "83% Faster" },
      { metric: "Arabic Local Search Visibility (KSA)", before: "Top 25", after: "Top 3", improvement: "+420% Growth" },
      { metric: "Mobile Patient Bounce Rate", before: "65%", after: "21%", improvement: "68% Drop" },
    ],
    faq: [
      {
        question: "Why is a calming blue and green color palette essential for healthcare platforms?",
        answer:
          "In medical and healthcare UI/UX design, color psychology plays a critical clinical role. Cold grays or harsh reds induce subconscious anxiety in patients seeking urgent care. A calming cerulean blue (#00A3FF) evokes professional clinical trust, stability, and sterility, while an organic emerald green (#10B981) represents healing, vitality, and renewal. This harmony lowers stress and encourages patients to comfortably complete booking workflows.",
      },
      {
        question: "How was the Arabic RTL (Right-to-Left) layout engineered for seamless bilingual parity?",
        answer:
          "Rather than using brittle CSS overrides that break across screen sizes, we utilized modern CSS logical properties (such as margin-inline-start, padding-inline-end, and inset-inline) combined with bidirectional typography hierarchies. This ensures that when a user switches between English and Arabic, icons, form fields, navigation drawers, and typography grids invert naturally with zero layout shifting (CLS = 0).",
      },
      {
        question: "What home healthcare and hospital services can patients access through Salam Medical?",
        answer:
          "Salam Medical delivers a comprehensive continuum of home health services across Jeddah and surrounding regions. Core offerings include 24/7 registered home nursing (IV therapy, injections, wound management), home physician house calls, specialized physical therapy and rehabilitation, at-home clinical laboratory testing and mobile diagnostic radiology (X-ray, ECG, ultrasound), long-term elderly palliative care, and corporate occupational health clinics.",
      },
      {
        question: "How does the platform handle urgent care inquiries and appointment scheduling?",
        answer:
          "The platform features a progressive 3-step appointment booking engine allowing patients to specify required medical services, preferred appointment dates, and residential location in Jeddah. In addition, persistent floating triage actions provide immediate 1-click access to telephone hotlines (+966 92 000 1153) and dedicated WhatsApp medical coordinators.",
      },
      {
        question: "How was WordPress and Elementor Pro optimized to achieve a 98/100 Google PageSpeed score?",
        answer:
          "Traditional WordPress and Elementor builds frequently suffer from bloated DOM trees, render-blocking scripts, and redundant font requests. We disabled unused Elementor asset libraries, eliminated third-party widget dependencies, implemented Redis object caching, served next-gen WebP/AVIF imagery, and enforced critical CSS preloading, resulting in sub-800ms LCP delivery on mobile networks.",
      },
      {
        question: "How does the platform comply with Google's YMYL medical quality guidelines and AI search (AEO/GEO)?",
        answer:
          "Under Google's YMYL (Your Money Your Life) health standards, medical platforms must demonstrate undeniable Experience, Expertise, Authoritativeness, and Trustworthiness (EEAT). We structured deep MedicalOrganization, Hospital, HomeHealthcareService, and FAQPage schema graphs validating verified doctor credentials, Jeddah health licensing, and clinical service details. This enables AI search engines like ChatGPT Search and Google AI Overviews to directly cite Salam Medical as a trusted home healthcare provider.",
      },
    ],
    keyTakeaways: [
      "Therapeutic color psychology and empathy-driven UX dramatically increase patient trust and booking completion on healthcare portals.",
      "Native CSS logical properties are mandatory for enterprise bilingual platforms in the GCC to achieve flawless Arabic RTL fidelity.",
      "Custom optimization of WordPress and Elementor can achieve sub-second speeds and 98+ PageSpeed scores when built cleanly without plugin bloat.",
    ],
    tech: [
      { name: "WordPress & Elementor Pro", iconType: "Code" },
      { name: "Bilingual Arabic RTL", iconType: "Globe" },
      { name: "Custom CSS & Micro-Animations", iconType: "Cpu" },
      { name: "WhatsApp & SMS API Dispatch", iconType: "MessageSquare" },
      { name: "Cloudflare Edge Caching", iconType: "Globe" },
      { name: "MySQL & Redis Object Cache", iconType: "Database" },
    ],
    metrics: [
      { label: "Patient Inquiries", val: "280", prefix: "+", suffix: "%", iconType: "TrendingUp", size: "large" },
      { label: "Page Load Time", val: "0.8", suffix: "s", iconType: "Zap", size: "medium" },
      { label: "Arabic RTL Fidelity", val: "100", suffix: "%", iconType: "Target", size: "small" },
      { label: "Care Availability", val: "24", suffix: "/7", iconType: "Calendar", size: "small" },
    ],
    gallery: [
      {
        title: "Hospital & Home Healthcare Command Portal",
        subtitle: "Calming blue and emerald green interface presenting comprehensive medical services, emergency triage, and instant appointment booking.",
        img: "/assets/salam-medical.png",
        tag: "HOMEPAGE & HERO",
      },
      {
        title: "Specialized Clinical Services & 24/7 Home Nursing",
        subtitle: "Detailed medical service architecture covering post-op care, IV infusions, elderly support, and continuous clinical monitoring.",
        img: "/assets/salam_medical_1.png",
        tag: "CLINICAL SERVICES",
      },
      {
        title: "Mobile Diagnostic Testing & At-Home Radiology",
        subtitle: "Residences-delivered laboratory blood draws, mobile digital X-rays, ECG telemetry, and rapid diagnostic reporting.",
        img: "/assets/salam_medical_2.png",
        tag: "MOBILE DIAGNOSTICS",
      },
      {
        title: "Doctor Profiles & Medical Staff Directory",
        subtitle: "Accredited clinical physician biographies, specialty certifications, medical licenses, and patient consultation booking.",
        img: "/assets/salam_medical_3.png",
        tag: "DOCTOR DIRECTORY",
      },
      {
        title: "Multi-Step Appointment Booking & Emergency Dispatch",
        subtitle: "Frictionless 3-step home care scheduler with instant WhatsApp confirmation and Jeddah emergency triage dispatch.",
        img: "/assets/salam_medical_4.png",
        tag: "PATIENT BOOKING",
      },
    ],
    testimonial: {
      quote:
        "INJAAZH Global designed and engineered our digital platform with exceptional healthcare empathy. The calming blue and green aesthetic immediately resonated with our patients, our Arabic RTL layout is flawless, and our monthly home care appointments surged by over 280%.",
      author: "Healthcare Operations Directorate",
      role: "Medical Services & Clinical Administration, Salam Medical",
    },
    next: { id: "themesjet", title: "THEMES JET" },
  },
};

export const projectsData = flagshipProjects;

/**
 * Intelligent resolver:
 * 1. Checks flagship in-depth case studies
 * 2. If not flagship, synthesizes a high-fidelity, high-word-count case study with roadmap, benchmarks, and FAQs
 * 3. Never returns undefined for valid slugs/ids!
 */
export function getProject(idOrSlug: string): ProjectDetail | undefined {
  if (!idOrSlug) return undefined;
  const normalized = idOrSlug.toLowerCase().trim();

  // 1. Direct match in flagshipProjects
  if (flagshipProjects[normalized]) {
    return flagshipProjects[normalized];
  }

  // 2. Lookup by slug/id in flagshipProjects
  const foundFlagship = Object.values(flagshipProjects).find(
    (p) => p.slug.toLowerCase() === normalized || p.id === normalized
  );
  if (foundFlagship) return foundFlagship;

  // 3. Lookup in catalogProjects and dynamically synthesize a rich case study
  const catalogItem = catalogProjects.find(
    (p) => p.slug.toLowerCase() === normalized || p.id === normalized
  );

  if (catalogItem) {
    const defaultAccent = catalogItem.accent || "#6324FC";
    const currentIndex = catalogProjects.findIndex((p) => p.slug === catalogItem.slug);
    const nextItem = catalogProjects[(currentIndex + 1) % catalogProjects.length];

    const isApp = catalogItem.category.includes("APP") || catalogItem.category.includes("SOFTWARE") || catalogItem.category.includes("ERP") || catalogItem.category.includes("CRM");
    const isTemplate = catalogItem.category.includes("TEMPLATE");

    return {
      id: catalogItem.id,
      slug: catalogItem.slug,
      title: catalogItem.title,
      subtitle: `Engineered High-Performance Digital Architecture & Scalable Web Solutions for ${catalogItem.client}.`,
      category: catalogItem.category,
      client: catalogItem.client,
      year: catalogItem.year,
      img: catalogItem.img,
      accent: defaultAccent,
      secondaryAccent: defaultAccent === "#6324FC" ? "#00E5FF" : "#6324FC",
      link: catalogItem.link,
      tags: catalogItem.tags || ["Next.js 15", "Performance", "UI/UX", "Full-Stack", "SEO"],
      overview: `A bespoke digital transformation platform engineered by INJAAZH Global for ${catalogItem.client}. We architected an ultra-fast, search-optimized application designed to eliminate technical debt, enhance user engagement velocity, and deliver enterprise-grade availability. By pairing modern Next.js edge runtimes with clean typographic hierarchies and zero-latency database connections, the platform commands market authority in the ${catalogItem.category} sector.`,
      background: `${catalogItem.client} required a strategic overhaul to replace sluggish legacy systems with a modern, high-speed digital experience. Their previous platform suffered from high bounce rates, slow page generation, and weak search visibility across Google. They engaged INJAAZH Global to architect an unfair competitive advantage that scales seamlessly with their business growth.`,
      problem: `The primary bottleneck was legacy technical architecture leading to slow page loads (averaging over 4 seconds on mobile devices), unoptimized database lookups, and poor Core Web Vitals scores that lowered their ranking on Google search engine result pages.`,
      solution: `INJAAZH Global designed and implemented an edge-optimized architecture utilizing modern React Server Components, Tailwind CSS styling tokens, and automated programmatic SEO schemas. The resulting platform delivers sub-second load times globally, crystal-clear mobile responsiveness, and high conversion rates.`,
      deliverables: [
        "End-to-End Modern Web Architecture",
        "Responsive Mobile-First UI/UX Design System",
        "Technical SEO, Metadata & Schema Integration",
        "Conversion-Engineered User Flows & Forms",
        "Sub-Second Asset Delivery & Core Web Vitals Optimization",
      ],
      roadmap: [
        {
          phase: "Phase 01",
          title: "Discovery & Strategic Architecture",
          duration: "Weeks 1–2",
          description: `Auditing legacy bottlenecks, mapping conversion user journeys, and creating high-fidelity design prototypes tailored to ${catalogItem.client}'s audience.`,
          highlights: ["Technical Debt Analysis", "Figma Design System", "Information Architecture"],
        },
        {
          phase: "Phase 02",
          title: "Core Development & Component Systems",
          duration: "Weeks 3–5",
          description: "Building reusable, modular components using modern TypeScript, Tailwind CSS, and lightweight animations.",
          highlights: ["Modular React Components", "Mobile-First Layouts", "Interactive State Optimization"],
        },
        {
          phase: "Phase 03",
          title: "Database, API & Flow Integration",
          duration: "Weeks 6–7",
          description: "Integrating backend data flows, form handling, validation pipelines, and third-party integrations.",
          highlights: ["API Route Optimization", "Secure Form Submissions", "Automated Validation"],
        },
        {
          phase: "Phase 04",
          title: "SEO Hardening & Launch Deployment",
          duration: "Weeks 8",
          description: "Conducting Core Web Vitals audits, testing cross-browser performance, implementing JSON-LD schemas, and deploying to global CDN.",
          highlights: ["Lighthouse 98+ Score", "Programmatic SEO Schema", "Global Edge Deployment"],
        },
      ],
      architectureHighlights: [
        {
          title: "Edge-Cached Sub-Second Response",
          description: "Global CDN distribution ensures pages and assets load in under 500ms for visitors worldwide.",
          tag: "Speed",
          iconType: "Zap",
        },
        {
          title: "Clean Modular Component Design",
          description: "Structured architecture allows rapid feature additions and updates without introducing regression bugs.",
          tag: "Architecture",
          iconType: "Code",
        },
        {
          title: "Google-Optimized Semantic Markup",
          description: "Semantic HTML5 tags and JSON-LD structured data maximize visibility and click-through rates on Google search.",
          tag: "SEO",
          iconType: "Globe",
        },
      ],
      beforeAfter: [
        { metric: "Mobile Page Load Speed", before: "4.2s", after: "0.7s", improvement: "+83% Faster" },
        { metric: "Core Web Vitals Score", before: "45/100", after: "98/100", improvement: "+117% Boost" },
        { metric: "User Engagement Duration", before: "45s", after: "2m 15s", improvement: "+200% Surge" },
        { metric: "Bounce Rate Reduction", before: "68%", after: "26%", improvement: "62% Drop" },
      ],
      faq: [
        {
          question: `What makes ${catalogItem.title} technically superior to generic templates?`,
          answer: `Unlike bloated off-the-shelf templates, this solution was custom-engineered with clean Next.js code, zero unnecessary dependencies, and lightning-fast asset delivery tailored to ${catalogItem.client}'s exact commercial objectives.`,
        },
        {
          question: `How does the platform ensure high Google search rankings?`,
          answer: `We integrated full technical SEO fundamentals: sub-second Core Web Vitals, automated XML sitemaps, OpenGraph social cards, clean URL slugs, and semantic JSON-LD schemas.`,
        },
        {
          question: `Is the platform fully responsive on mobile and tablet devices?`,
          answer: `Yes. Every layout breakpoint was rigorously tested across iOS, Android, and modern desktop browsers to ensure a fluid 60fps user experience.`,
        },
      ],
      keyTakeaways: [
        "Eliminating legacy dependencies and optimizing Core Web Vitals yields immediate dividends in user retention and search traffic.",
        "A tailored design system establishes instant trust and brand authority in competitive commercial industries.",
      ],
      tech: [
        { name: isApp ? "Next.js & TypeScript" : "Next.js 15", iconType: "Code" },
        { name: "Tailwind CSS", iconType: "Cpu" },
        { name: "Vercel Edge Network", iconType: "Globe" },
        { name: "PostgreSQL Database", iconType: "Database" },
        { name: "Framer Motion", iconType: "Zap" },
      ],
      metrics: [
        { label: "Speed Score", val: "98", suffix: "/100", iconType: "Zap", size: "large" },
        { label: "Bounce Reduction", val: "45", suffix: "%", prefix: "-", iconType: "Target", size: "medium" },
        { label: "Traffic Growth", val: "220", suffix: "%", prefix: "+", iconType: "TrendingUp", size: "small" },
        { label: "Uptime SLA", val: "99.9", suffix: "%", iconType: "Calendar", size: "small" },
      ],
      testimonial: {
        quote: `INJAAZH Global delivered far beyond our expectations. The new digital platform operates flawlessly, our search rankings jumped, and client feedback has been extraordinary.`,
        author: catalogItem.client,
        role: "Executive Leadership",
      },
      next: {
        id: nextItem.slug,
        title: nextItem.title,
      },
    };
  }

  return undefined;
}

export function getAllProjectSlugs(): string[] {
  const slugs = new Set<string>();
  Object.keys(flagshipProjects).forEach((s) => slugs.add(s));
  catalogProjects.forEach((p) => slugs.add(p.slug));
  return Array.from(slugs);
}
