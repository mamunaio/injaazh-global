"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Plus,
  Zap,
  TrendingUp,
  Target,
  Globe,
  Search,
  CheckCircle2,
  XCircle,
  Activity,
  FileText,
  Link as LinkIcon,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Layers,
  BarChart3,
  Binary,
  Compass,
  MapPin,
  Star,
  ExternalLink,
  Code2,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";
import Counter from "@/components/Counter";

// -------------------------------------------------------------
// Helper: Color to RGBA
// -------------------------------------------------------------
function hexToRgba(hex: string, alpha: number) {
  const c = hex.replace("#", "");
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// -------------------------------------------------------------
// Interactive Metric Spotlight Card (Dynamic Hover & Spotlight)
// -------------------------------------------------------------
function MetricSpotlightCard({
  stat,
  idx,
}: {
  stat: {
    value: string;
    label: string;
    desc: string;
    badge: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
  };
  idx: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = stat.icon;

  const colorRgba = useMemo(() => hexToRgba(stat.color, 0.18), [stat.color]);
  const colorBorder = useMemo(() => hexToRgba(stat.color, 0.6), [stat.color]);
  const colorShadow = useMemo(() => hexToRgba(stat.color, 0.22), [stat.color]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-default shadow-sm"
      style={{
        borderColor: isHovered ? colorBorder : undefined,
        boxShadow: isHovered ? `0 20px 50px ${colorShadow}` : undefined,
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(350px circle at ${x}px ${y}px, ${colorRgba}, transparent 70%)`
          ),
        }}
      />

      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(stat.color, 0.2)} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-20 flex items-center justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
          style={{
            backgroundColor: isHovered ? stat.color : `${stat.color}15`,
            border: `1px solid ${isHovered ? stat.color : `${stat.color}30`}`,
            boxShadow: isHovered ? `0 0 15px ${hexToRgba(stat.color, 0.4)}` : undefined,
          }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-500"
            style={{ color: isHovered ? "#ffffff" : stat.color }}
          />
        </div>
        <span
          className="font-heading text-[10px] tracking-widest px-2.5 py-1 rounded-full border uppercase transition-colors duration-300"
          style={{
            backgroundColor: isHovered ? `${stat.color}20` : "transparent",
            borderColor: isHovered ? stat.color : "rgba(128,128,128,0.2)",
            color: isHovered ? stat.color : "inherit",
          }}
        >
          {stat.badge}
        </span>
      </div>

      <div className="relative z-20 mb-2">
        <div className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-baseline gap-1">
          <Counter value={stat.value} />
        </div>
        <div
          className="font-heading text-xs tracking-wider uppercase mt-1 transition-colors duration-300"
          style={{ color: isHovered ? stat.color : undefined }}
        >
          {stat.label}
        </div>
      </div>

      <p className="relative z-20 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mt-2 border-t border-black/5 dark:border-white/5 pt-3">
        {stat.desc}
      </p>

      {/* Decorative corner borders on hover */}
      <div
        className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: stat.color }}
      />
      <div
        className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: stat.color }}
      />
    </motion.div>
  );
}

// -------------------------------------------------------------
// SEO Simulator Types & Presets
// -------------------------------------------------------------
type SeoStrategyType = "ENTERPRISE_SAAS" | "GLOBAL_ECOMMERCE" | "LOCAL_MULTI_LOCATION" | "UNOPTIMIZED_LEGACY";

interface SeoPreset {
  id: SeoStrategyType;
  name: string;
  tagline: string;
  badge: string;
  accent: string;
  market: string;
  ctrAvg: number; // e.g. 0.12 (12%)
  ppcAvgCpc: number; // e.g. $4.50 CPC
  top3Ratio: number; // % of target terms reaching top 3
  crawlHealth: number; // %
  serpSnippet: {
    url: string;
    breadcrumb: string;
    title: string;
    rating: string;
    reviewCount: string;
    description: string;
    sitelinks: string[];
    faqQuestion: string;
    faqAnswer: string;
  };
}

const SEO_PRESETS: Record<SeoStrategyType, SeoPreset> = {
  ENTERPRISE_SAAS: {
    id: "ENTERPRISE_SAAS",
    name: "Enterprise SaaS & B2B Tech",
    tagline: "High-ACV Commercial Intent Capture & Programmatic Landing Hubs",
    badge: "TIER 1 // HIGH ACV",
    accent: "#6324FC",
    market: "United States, UK & Canada (Global Tech Hubs)",
    ctrAvg: 0.14,
    ppcAvgCpc: 12.5,
    top3Ratio: 0.38,
    crawlHealth: 99.6,
    serpSnippet: {
      url: "https://injaazh.com/solutions/enterprise-saas",
      breadcrumb: "injaazh.com > solutions > enterprise-software",
      title: "Enterprise Cloud Architecture & SaaS Engineering | INJAAZH",
      rating: "4.9",
      reviewCount: "148 verified client reviews",
      description:
        "High-performance cloud platforms, React Server Components, and multi-tenant SaaS engines built for absolute enterprise scale with 99/100 Core Web Vitals.",
      sitelinks: ["Live Architecture Demo", "Pricing & Sprints", "SOC-2 Compliance", "Client Case Studies"],
      faqQuestion: "How quickly can high-intent B2B terms rank on Page 1?",
      faqAnswer: "Targeted bottom-of-funnel comparison keywords typically enter Top 3 positions within 90-120 days.",
    },
  },
  GLOBAL_ECOMMERCE: {
    id: "GLOBAL_ECOMMERCE",
    name: "Global E-Commerce & Retail",
    tagline: "Faceted Indexation, Automated Product Schema & Category Dominance",
    badge: "HIGH CONVERSION RETAIL",
    accent: "#00E5FF",
    market: "US, UK & Australia (Omnichannel Shoppers)",
    ctrAvg: 0.18,
    ppcAvgCpc: 3.8,
    top3Ratio: 0.44,
    crawlHealth: 99.2,
    serpSnippet: {
      url: "https://injaazh.com/services/web-dev/headless-commerce",
      breadcrumb: "injaazh.com > services > headless-commerce",
      title: "Sub-Second Headless Commerce & Shopify Plus Stores | INJAAZH",
      rating: "5.0",
      reviewCount: "210 brand evaluations",
      description:
        "Decoupled Shopify Plus and Hydrogen storefronts. Sub-300ms product filters, instant micro-cart checkouts, and an average 38%+ lift in organic conversion rates.",
      sitelinks: ["Shopify Plus Migration", "PageSpeed 99 Guarantee", "Hydrogen Storefronts", "Request Quote"],
      faqQuestion: "Does headless commerce improve organic search rankings?",
      faqAnswer: "Yes. Google heavily prioritizes Core Web Vitals; sub-second LCP directly increases mobile search impressions.",
    },
  },
  LOCAL_MULTI_LOCATION: {
    id: "LOCAL_MULTI_LOCATION",
    name: "Multi-Location & Local Brands",
    tagline: "Google Maps 3-Pack Supremacy & Geo-Targeted City Pages",
    badge: "LOCAL DOMINANCE",
    accent: "#00FFA3",
    market: "Regional Metro Centers (US, UK & AU Local Hubs)",
    ctrAvg: 0.22,
    ppcAvgCpc: 6.2,
    top3Ratio: 0.58,
    crawlHealth: 98.8,
    serpSnippet: {
      url: "https://injaazh.com/services/seo/local-rankings",
      breadcrumb: "injaazh.com > services > local-seo-rankings",
      title: "Top-Ranked Local SEO & Google Business Optimization | INJAAZH",
      rating: "4.9",
      reviewCount: "320 local client ratings",
      description:
        "Dominate the Google Local 3-Pack and near-me queries. Certified local citation networks, verified review velocity systems, and hyper-targeted city landing hubs.",
      sitelinks: ["Google Map Pack Strategy", "Local Review Funnel", "City Hub Architecture", "Free Local Audit"],
      faqQuestion: "How do you rank in multiple city map packs?",
      faqAnswer: "We deploy geo-targeted location silos with exact schema coordinates and localized citation clusters.",
    },
  },
  UNOPTIMIZED_LEGACY: {
    id: "UNOPTIMIZED_LEGACY",
    name: "Legacy Unoptimized Domain",
    tagline: "Broken Crawl Budget, Missing Schema & Google Algorithm Penalties",
    badge: "LEGACY DEFICIT",
    accent: "#FF2D55",
    market: "Generic Search (Failing Core Web Vitals)",
    ctrAvg: 0.02,
    ppcAvgCpc: 8.0,
    top3Ratio: 0.04,
    crawlHealth: 34.0,
    serpSnippet: {
      url: "https://example.com/page-id=8492",
      breadcrumb: "example.com > uncategorized > page-id=8492",
      title: "Home - My Business Website (Under Construction)",
      rating: "3.1",
      reviewCount: "4 outdated reviews",
      description:
        "Welcome to our website. We offer products and services for various industries. Click here to read more about our background and company details.",
      sitelinks: ["Home", "About Us", "Contact"],
      faqQuestion: "Why is our website invisible on Google?",
      faqAnswer: "Google cannot parse your content due to missing canonical tags, 404 crawl loops, and slow load times.",
    },
  },
};

// -------------------------------------------------------------
// Main Component
// -------------------------------------------------------------
export default function SeoClient() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simulator State
  const [activePreset, setActivePreset] = useState<SeoStrategyType>("ENTERPRISE_SAAS");
  const [targetSearchVolume, setTargetSearchVolume] = useState<number>(65000); // monthly queries
  const [activeProtocolTab, setActiveProtocolTab] = useState<number>(0);

  const selectedPreset = SEO_PRESETS[activePreset];

  // Dynamic Telemetry Calculations
  const dynamicTelemetry = useMemo(() => {
    const isLegacy = activePreset === "UNOPTIMIZED_LEGACY";
    const volumeFactor = targetSearchVolume / 65000;

    let clicks = Math.round(targetSearchVolume * selectedPreset.ctrAvg);
    let top3Count = Math.round(volumeFactor * 75 * selectedPreset.top3Ratio);
    let ppcSavings = Math.round(clicks * selectedPreset.ppcAvgCpc);
    let crawlRate = selectedPreset.crawlHealth;

    if (isLegacy) {
      clicks = Math.max(120, Math.round(targetSearchVolume * 0.015));
      top3Count = Math.max(1, Math.round(volumeFactor * 3));
      ppcSavings = Math.round(clicks * 4.5);
    }

    return {
      clicks,
      top3Count,
      ppcSavings,
      crawlRate,
    };
  }, [activePreset, targetSearchVolume, selectedPreset]);

  // Top 4 Metrics
  const stats = [
    {
      value: "340%",
      label: "AVG ORGANIC TRAFFIC SURGE",
      desc: "Client domains average a 3.4x surge in qualified commercial search impressions within 6 months.",
      badge: "PROVEN LIFT",
      icon: TrendingUp,
      color: "#00FFA3",
    },
    {
      value: "Top 3",
      label: "AVERAGE SEARCH RANKING",
      desc: "Target commercial and high-intent buyer keywords locked into Google's top 3 organic spots.",
      badge: "PAGE 1 DOMINANCE",
      icon: Target,
      color: "#00E5FF",
    },
    {
      value: "99.4%",
      label: "CRAWL & INDEXATION EFFICIENCY",
      desc: "Zero crawl budget waste, pristine XML sitemaps, and instant Googlebot rendering.",
      badge: "CORE ACCELERATION",
      icon: Activity,
      color: "#6324FC",
    },
    {
      value: "98%",
      label: "CLIENT ANNUAL RETENTION",
      desc: "Long-term compounding search equity across the US, UK, Canada, and Australian markets.",
      badge: "WESTERN MARKETS",
      icon: Globe,
      color: "#FACC15",
    },
  ];

  // 3 Core Sub-Services
  const subServices = [
    {
      id: "01",
      title: "Technical SEO & Core Web Vitals",
      slug: "/services/seo/technical-audits",
      tagline: "Crawl Budget Engineering, Schema Graph Architecture & JavaScript Rendering",
      badge: "SUB-SERVICE 01 // FOUNDATION",
      accent: "#6324FC",
      icon: Binary,
      description:
        "No amount of content will rank on a broken technical foundation. We engineer pristine crawl architectures, resolve JavaScript hydration bottlenecks, and deploy advanced Schema.org entity graphs that Google AI search models love.",
      highlights: [
        "Core Web Vitals remediation (LCP < 0.8s, CLS < 0.02, INP < 100ms)",
        "Zero-waste crawl budget mapping and orphan page eradication",
        "Deep JSON-LD Schema graph networks with rich entity attributes",
        "JavaScript rendering & dynamic hydration audits for React / Next.js",
      ],
      techPills: ["CORE WEB VITALS", "SCHEMA.ORG", "SCREAMING FROG", "ROBOTS.TXT", "GSC API"],
    },
    {
      id: "02",
      title: "Semantic Keyword Strategy & Search Intent",
      slug: "/services/seo/keyword-strategy",
      tagline: "Commercial Buyer Intent Mapping & High-Converting Topic Clusters",
      badge: "SUB-SERVICE 02 // REVENUE ENGINE",
      accent: "#00E5FF",
      icon: Search,
      description:
        "We don't chase vanity traffic that bounces. We map high-converting, commercial-intent search queries where potential buyers are actively comparing solutions and ready to swipe their credit cards.",
      highlights: [
        "Buyer intent categorization (Informational vs Commercial vs Transactional)",
        "Semantic topic clustering & competitive content gap intelligence",
        "Programmatic landing page architecture for high-volume searches",
        "Continuous algorithmic keyword tracking with daily position surveillance",
      ],
      techPills: ["SEMRUSH PRO", "AHREFS ENTERPRISE", "SEARCH INTENT", "TOPIC CLUSTERS"],
    },
    {
      id: "03",
      title: "Local Rankings & Google Maps Dominance",
      slug: "/services/seo/local-rankings",
      tagline: "Google Business Profile 3-Pack Supremacy & Hyper-Local Citation Networks",
      badge: "SUB-SERVICE 03 // GEO CONVERSIONS",
      accent: "#00FFA3",
      icon: MapPin,
      description:
        "Own the top 3 spots in the Google Local Map Pack. We execute hyper-localized citation building, geo-targeted landing page networks, and structured review generation systems that drive high-intent local inbound calls.",
      highlights: [
        "Google Business Profile (GBP) category & service menu optimization",
        "High-authority NAP (Name, Address, Phone) citation syndication",
        "Geo-targeted city & neighborhood landing page hubs",
        "Automated review acquisition funnels with sentiment filtering",
      ],
      techPills: ["GOOGLE MAP PACK", "LOCAL CITATIONS", "GEO-SCHEMA", "REVIEW FUNNELS"],
    },
  ];

  // 4-Stage Algorithmic SEO Protocol
  const protocolStages = [
    {
      id: "01",
      title: "Deep Technical Crawl & Entity Graph Audit",
      subtitle: "Full-Spectrum Infrastructure Diagnostics",
      description:
        "We dissect your website the exact same way Googlebot does: server response codes, rendering bottlenecks, crawl trap detection, canonical discrepancies, and Schema.org structured data integrity.",
      deliverables: ["100+ Point Technical Crawl Audit", "Core Web Vitals Speed Analysis", "Crawl Budget Allocation Matrix", "Entity Graph Schema Map"],
      icon: Binary,
      color: "#6324FC",
    },
    {
      id: "02",
      title: "High-Intent Keyword Architecture",
      subtitle: "Semantic Clustering & Competitor Exploitation",
      description:
        "Reverse-engineering the top organic competitors in your space. We identify the exact high-commercial queries driving 80% of their organic revenue and build cohesive topic clusters around them.",
      deliverables: ["Commercial Intent Keyword Map", "Competitor Content Gap Matrix", "Information Architecture Blueprint", "Content Production Calendar"],
      icon: Target,
      color: "#00E5FF",
    },
    {
      id: "03",
      title: "Programmatic On-Page & Schema Deployment",
      subtitle: "Algorithmic On-Page Precision",
      description:
        "Precision optimization of title tags, header hierarchies, contextual internal linking silos, and JSON-LD microdata — tailored specifically for Google's US, UK, and Australian ranking algorithms.",
      deliverables: ["Complete Metadata Rewrite", "Internal Silo Link Structuring", "Rich JSON-LD Schema Injection", "Featured Snippet Formatting"],
      icon: FileText,
      color: "#00FFA3",
    },
    {
      id: "04",
      title: "Digital PR & Search Surveillance",
      subtitle: "High-DA Authority Growth & 24/7 Monitoring",
      description:
        "Google ranks authority. We build it with ethical white-hat digital PR, editorial outreach, and high-DA backlink acquisition — monitored 24/7 to protect against unexpected algorithm updates.",
      deliverables: ["Editorial Backlink Placements", "Digital PR Press Outreach", "Weekly Keyword Rank Tracking", "Executive Organic ROI Memo"],
      icon: ShieldCheck,
      color: "#FACC15",
    },
  ];

  // Battlecard Comparison
  const battlecardComparison = {
    genericAgency: [
      "Generic checklist SEO with generic AI-spun content that gets demoted",
      "Spammy directory links and low-quality PBNs that risk manual penalties",
      "Focuses on low-competition vanity keywords that drive zero paying customers",
      "Ignores Core Web Vitals and JavaScript hydration, leaving site speeds sluggish",
      "Rankings collapse every time Google releases a Core Algorithm Update",
    ],
    injaazhSEO: [
      "Full-stack algorithmic engineering with deep technical & Schema foundations",
      "100% white-hat digital PR and high-DA editorial backlinks that compound",
      "High-commercial buyer intent targeting engineered for qualified pipeline & revenue",
      "Guaranteed 99/100 Core Web Vitals optimization backed by Next.js edge tech",
      "Future-proof entity graph architecture resilient against Google core algorithm updates",
    ],
  };

  // SEO Tooling Stack
  const seoTools = [
    { name: "Ahrefs Enterprise", category: "Backlink Intelligence", desc: "Deep backlink profile auditing & competitor gap surveillance.", color: "#00FFA3" },
    { name: "Semrush Pro", category: "Search Analytics", desc: "Keyword volume tracking, search intent filters & SERP position monitoring.", color: "#FF642D" },
    { name: "Google Search Console", category: "Direct Telemetry", desc: "Real-time indexation status, mobile usability & organic impression trends.", color: "#4285F4" },
    { name: "Screaming Frog", category: "Technical Spider", desc: "Enterprise crawl budget simulation & HTTP status code diagnostics.", color: "#199A00" },
    { name: "SurferSEO", category: "Content Modeling", desc: "NLP entity density analysis & competitive content scoring.", color: "#EC4899" },
    { name: "PostHog Analytics", category: "Conversion Tracking", desc: "Session replays and attribution mapping from organic search to checkout.", color: "#6324FC" },
    { name: "Schema App Engine", category: "Structured Data", desc: "Deep Schema.org JSON-LD graph generation for AI search models.", color: "#00E5FF" },
    { name: "Google PageSpeed API", category: "Vitals Benchmark", desc: "Automated Core Web Vitals latency telemetry & LCP regression testing.", color: "#FACC15" },
  ];

  // FAQs
  const faqs = [
    {
      q: "How long does enterprise SEO take to show measurable revenue impact?",
      a: "Legitimate enterprise SEO is a compounding growth engine. For technically sound websites, initial ranking movement on medium-competition commercial keywords appears within 60 to 90 days. Significant revenue-generating Page 1 rankings and organic revenue surges generally hit their stride between months 4 and 9. We provide transparent live dashboards from day one so you monitor every position shift.",
    },
    {
      q: "Do you specialize in US, UK, and Australian search algorithms?",
      a: "Yes. The vast majority of our enterprise clients operate across the United States, United Kingdom, Canada, and Australia. Search intent patterns, local SERP feature layouts, and commercial buyer language vary significantly between London, New York, and Sydney. We customize your hreflang tags, local entity schemas, and search intent clusters accordingly.",
    },
    {
      q: "How do you protect websites against Google Core Algorithm updates?",
      a: "We adhere 100% to Google's Search Essentials and white-hat guidelines. By focusing heavily on technical perfection (Core Web Vitals 99+), genuine high-DA digital PR editorial links, and deep semantic entity markup (Schema.org), our clients regularly see ranking increases during Google core updates while generic agencies using shortcuts suffer severe traffic drops.",
    },
    {
      q: "Can you optimize Next.js, React, and headless websites for search engines?",
      a: "That is our core architectural specialty. Many generic SEO agencies struggle with modern JavaScript frameworks, leading to client-side hydration delays and incomplete indexation. Because we are an engineering-led agency, we ensure your Next.js App Router, React Server Components (RSC), and headless stores are pre-rendered and served to Googlebot instantaneously.",
    },
    {
      q: "What is the difference between SEO and Paid Ads (PPC) long-term?",
      a: "Paid advertising stops delivering leads the exact second you pause ad spend, and CPC costs climb every year. SEO is a permanent digital real estate asset: once you capture the top 3 spots for high-intent keywords, you receive continuous, 24/7 inbound buyer traffic without paying Google a single cent per click. Over 70% of organic clicks go to non-paid listings.",
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-[#FAF9F6] dark:bg-[#060608] text-neutral-900 dark:text-white pt-28 md:pt-36 font-sans overflow-hidden transition-colors duration-500">
      {/* Ambient Grid & Glow Textures */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Radial Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#6324FC] via-[#00E5FF] to-[#00FFA3] blur-[160px] rounded-full pointer-events-none opacity-20 dark:opacity-25"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] bg-[#00FFA3]/10 blur-[140px] rounded-full pointer-events-none"
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pb-16 md:pb-24 border-b border-black/10 dark:border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumb & Live Status Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href="/services"
              className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-[#6324FC] transition-colors flex items-center gap-1.5"
            >
              SERVICES <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/25 text-[#6324FC] text-xs font-heading tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ALGORITHMIC DOMINANCE // V2.5</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-heading tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>CORE UPDATE IMMUNITY SLA</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            ENTERPRISE SEO SERVICES <br className="hidden md:block" />
            THAT LOCK YOU ON PAGE ONE. <br className="hidden md:block" />
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              AND KEEP YOU THERE.
            </span>
          </h1>

          <p className="font-sans font-normal text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl mb-10 border-l-2 border-[#6324FC] pl-6">
            Most agencies promise rankings based on guesswork. We engineer organic market dominance.
            By fusing deep technical SEO audits, high-intent keyword clustering, and authoritative digital PR,
            we turn Google into your most profitable, compounding acquisition channel.
          </p>

          {/* Quick Assurance Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
            {[
              "Technical Core Web Vitals 99+",
              "Commercial Intent Capture",
              "100% White-Hat Digital PR",
              "Google US, UK & AU Tuned",
              "Schema Graph Architecture",
              "Real-Time SERP Surveillance",
            ].map((pill, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-xs font-heading tracking-wider bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shadow-sm"
              >
                ✓ {pill}
              </span>
            ))}
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={() => openModal()}
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_35px_rgba(99,36,252,0.35)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#00FFA3,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-base sm:text-lg tracking-wider text-neutral-900 dark:text-white uppercase text-center font-bold">
                  CLAIM YOUR FREE SEO AUDIT
                  <ArrowUpRight className="w-5 h-5 text-[#6324FC] group-hover:text-[#00FFA3] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>

            <a
              href="#sub-services"
              className="px-8 py-4 sm:py-5 rounded-full text-base font-heading tracking-wider border border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 font-semibold text-neutral-800 dark:text-neutral-200"
            >
              EXPLORE 3 CORE SEO DIVISIONS
              <ArrowRight className="w-4 h-4 text-[#6324FC]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STATS STRIP (Interactive Metric Spotlight Cards)       */}
      {/* ========================================================= */}
      <section className="w-full py-16 md:py-20 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <MetricSpotlightCard key={i} stat={stat} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CORE SUB-SERVICES SHOWCASE (3 Direct Route Battlecards)*/}
      {/* ========================================================= */}
      <section id="sub-services" className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#6324FC]" />
                <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                  SPECIALIZED SEARCH DIVISIONS
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR 3 CORE SEO CAPABILITIES
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              Explore our three dedicated search disciplines engineered for technical indexation,
              high-commercial keyword capture, and local map pack dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subServices.map((sub, i) => {
              const Icon = sub.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-3xl p-8 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-2"
                    style={{ backgroundColor: sub.accent }}
                  />

                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm"
                        style={{
                          backgroundColor: `${sub.accent}15`,
                          border: `1px solid ${sub.accent}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: sub.accent }} />
                      </div>
                      <span
                        className="font-heading text-[10px] tracking-widest px-3 py-1 rounded-full border uppercase"
                        style={{
                          borderColor: `${sub.accent}40`,
                          color: sub.accent,
                          backgroundColor: `${sub.accent}08`,
                        }}
                      >
                        {sub.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl mb-2 text-neutral-900 dark:text-white group-hover:text-[#6324FC] dark:group-hover:text-white transition-colors duration-300">
                      {sub.title}
                    </h3>
                    <p
                      className="font-heading text-xs tracking-wider uppercase mb-5 font-semibold"
                      style={{ color: sub.accent }}
                    >
                      {sub.tagline}
                    </p>

                    <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {sub.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5 mb-8 border-t border-black/5 dark:border-white/5 pt-5">
                      {sub.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: sub.accent }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {sub.techPills.map((pill, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 text-[10px] font-heading tracking-wider rounded-md bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/5"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deep Route Link */}
                  <Link
                    href={sub.slug}
                    className="w-full py-4 px-6 rounded-2xl flex items-center justify-between transition-all duration-300 font-heading text-xs tracking-wider uppercase font-bold text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 hover:border-transparent group/btn relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to right, ${sub.accent}12, transparent)`,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      EXPLORE {sub.title.split(" ")[0]} DEEP CAPABILITY
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" style={{ color: sub.accent }} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. INTERACTIVE ORGANIC GROWTH & SEARCH VISIBILITY ENGINE   */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100/50 dark:bg-[#08080c]/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FFA3]/10 border border-[#00FFA3]/30 text-emerald-600 dark:text-[#00FFA3] text-xs font-heading tracking-widest uppercase mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>ORGANIC REVENUE TELEMETRY</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
              ORGANIC VISIBILITY & SERP REVENUE SIMULATOR
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
              Model your prospective Page 1 keyword capture, monthly organic traffic flow, and equivalent
              Google Ads spend replacement across different industry models.
            </p>
          </div>

          {/* Simulator Cockpit */}
          <div className="rounded-3xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* 1. Strategy Presets */}
            <div className="mb-8">
              <div className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase mb-3 flex items-center justify-between">
                <span>SELECT SEARCH ENVIRONMENT & STRATEGY</span>
                <span className="text-[#6324FC] font-semibold">{selectedPreset.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(Object.keys(SEO_PRESETS) as SeoStrategyType[]).map((key) => {
                  const preset = SEO_PRESETS[key];
                  const isSelected = activePreset === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActivePreset(key)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? "bg-neutral-100 dark:bg-white/10 shadow-md scale-[1.02]"
                          : "bg-white dark:bg-white/[0.02] border-black/10 dark:border-white/5 hover:border-black/25 dark:hover:border-white/20"
                      }`}
                      style={{
                        borderColor: isSelected ? preset.accent : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: preset.accent }}
                        />
                        <span className="text-[10px] font-heading tracking-wider uppercase opacity-70">
                          {key === "UNOPTIMIZED_LEGACY" ? "WARNING" : "PAGE 1"}
                        </span>
                      </div>
                      <div className="font-heading text-sm font-bold text-neutral-900 dark:text-white">
                        {preset.name}
                      </div>
                      <div className="text-[11px] text-neutral-600 dark:text-neutral-400 line-clamp-1 mt-1 font-sans">
                        {preset.market}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Target Keyword Monthly Search Volume Slider */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#6324FC]" />
                  <span className="font-heading text-xs tracking-wider uppercase text-neutral-800 dark:text-neutral-200">
                    MONTHLY TARGET KEYWORD SEARCH VOLUME:
                  </span>
                </div>
                <div className="font-heading text-lg font-bold text-[#6324FC]">
                  {targetSearchVolume.toLocaleString()} QUERIES / MO
                </div>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={targetSearchVolume}
                onChange={(e) => setTargetSearchVolume(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6324FC]"
              />
              <div className="flex justify-between text-[11px] text-neutral-600 dark:text-neutral-400 font-heading mt-2">
                <span>10K (Focused Niche)</span>
                <span>65K (Growing Vertical)</span>
                <span>300K+ (Enterprise Scale)</span>
              </div>
            </div>

            {/* 3. Live Projected Telemetry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Top 3 Positions */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>PAGE 1 TOP-3 KEYWORDS</span>
                  <Target className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicTelemetry.top3Count > 10 ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {dynamicTelemetry.top3Count} Positions
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicTelemetry.top3Count > 10 ? "🏆 High-Intent Commercial Terms" : "⚠️ Invisible on Google"}
                </div>
              </div>

              {/* Monthly Organic Clicks */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>MONTHLY ORGANIC CLICKS</span>
                  <TrendingUp className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicTelemetry.clicks > 1000 ? "#00E5FF" : "#FF2D55",
                  }}
                >
                  {dynamicTelemetry.clicks.toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicTelemetry.clicks > 1000 ? "✓ 100% Free Organic Visitors" : "❌ Zero Lead Flow"}
                </div>
              </div>

              {/* PPC Value Replaced */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>EQUIVALENT GOOGLE ADS VALUE</span>
                  <Zap className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="font-heading text-3xl font-bold text-[#6324FC]">
                  ${dynamicTelemetry.ppcSavings.toLocaleString()}/mo
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  Saved vs paying Google AdWords CPC
                </div>
              </div>

              {/* Crawl Health Score */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>CRAWL & INDEX HEALTH</span>
                  <Activity className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicTelemetry.crawlRate > 90 ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {dynamicTelemetry.crawlRate}%
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicTelemetry.crawlRate > 90 ? "🟢 Googlebot Fully Accelerated" : "🔴 Crawl Budget Wasted"}
                </div>
              </div>
            </div>

            {/* 4. Live Interactive Google SERP Snippet Preview */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-black/5 dark:border-white/5">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase">
                  <Search className="w-4 h-4 text-[#6324FC]" />
                  <span>LIVE GOOGLE SEARCH RESULT SNIPPET (SERP PREVIEW)</span>
                </div>
                <span className="text-[10px] font-heading px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                  ★ RANK #1 POSITION
                </span>
              </div>

              <div className="max-w-3xl space-y-2 font-sans">
                {/* SERP URL & Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold">
                    G
                  </div>
                  <span className="line-clamp-1">{selectedPreset.serpSnippet.breadcrumb}</span>
                </div>

                {/* SERP Title */}
                <h4 className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  {selectedPreset.serpSnippet.title}
                </h4>

                {/* SERP Star Rating & Reviews */}
                <div className="flex items-center gap-2 text-xs text-amber-500">
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    Rating: {selectedPreset.serpSnippet.rating}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    · {selectedPreset.serpSnippet.reviewCount}
                  </span>
                </div>

                {/* SERP Meta Description */}
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {selectedPreset.serpSnippet.description}
                </p>

                {/* SERP Sitelinks */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {selectedPreset.serpSnippet.sitelinks.map((link, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-2 rounded-lg bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer"
                    >
                      {link}
                    </div>
                  ))}
                </div>

                {/* Rich FAQ Accordion in SERP */}
                <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5 text-xs">
                  <div className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                    Q: {selectedPreset.serpSnippet.faqQuestion}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    A: {selectedPreset.serpSnippet.faqAnswer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. 4-STAGE ALGORITHMIC SEO PROTOCOL TABS                  */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#6324FC]" />
              <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                ALGORITHMIC PROTOCOL
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
              HOW WE DOMINATE GOOGLE ALGORITHMS
            </h2>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {protocolStages.map((stage, idx) => {
              const isSelected = activeProtocolTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveProtocolTab(idx)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-white dark:bg-[#101018] shadow-lg border-[#6324FC] scale-[1.02]"
                      : "bg-white/60 dark:bg-white/[0.02] border-black/10 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20"
                  }`}
                >
                  <span
                    className="font-heading text-xs font-bold mb-2 tracking-widest"
                    style={{ color: isSelected ? stage.color : undefined }}
                  >
                    STAGE {stage.id}
                  </span>
                  <span className="font-heading text-base font-bold text-neutral-900 dark:text-white line-clamp-1">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading tracking-widest uppercase mb-4"
                  style={{
                    backgroundColor: `${protocolStages[activeProtocolTab].color}15`,
                    color: protocolStages[activeProtocolTab].color,
                    border: `1px solid ${protocolStages[activeProtocolTab].color}30`,
                  }}
                >
                  STAGE {protocolStages[activeProtocolTab].id} // EXECUTION PROTOCOL
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl text-neutral-900 dark:text-white mb-2">
                  {protocolStages[activeProtocolTab].title}
                </h3>
                <p className="font-heading text-sm text-[#6324FC] tracking-wider uppercase mb-6 font-semibold">
                  {protocolStages[activeProtocolTab].subtitle}
                </p>
                <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                  {protocolStages[activeProtocolTab].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {protocolStages[activeProtocolTab].deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00FFA3] flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center">
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg"
                  style={{
                    backgroundColor: `${protocolStages[activeProtocolTab].color}20`,
                    border: `1px solid ${protocolStages[activeProtocolTab].color}40`,
                  }}
                >
                  {activeProtocolTab === 0 && <Binary className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 1 && <Target className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 2 && <FileText className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 3 && <ShieldCheck className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                </div>
                <div className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  100% White-Hat Immunity
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Every technical fix and digital PR link is engineered to thrive through Google Core Updates without penalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SIDE-BY-SIDE ARCHITECTURE BATTLECARDS                  */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100/40 dark:bg-[#07070b]/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 dark:text-rose-400 text-xs font-heading tracking-widest uppercase mb-4">
              <span>HEAD-TO-HEAD BATTLECARD</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
              GENERIC AGENCY SEO VS INJAAZH SEARCH ENGINEERING
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
              Why high-growth brands abandon checklist SEO agencies and switch to Injaazh for permanent search dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Generic Agency */}
            <div className="p-8 sm:p-10 rounded-3xl bg-rose-500/[0.03] dark:bg-rose-950/[0.12] border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Generic Checklist Agency SEO
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-500 uppercase font-bold">
                    HIGH VULNERABILITY
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.genericAgency.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-300 font-heading tracking-wider uppercase font-semibold">
                Outcome: Wasted retainer budgets, zero attribution to pipeline, and catastrophic algorithm drops.
              </div>
            </div>

            {/* Right: Injaazh Search Engineering */}
            <div className="p-8 sm:p-10 rounded-3xl bg-emerald-500/[0.04] dark:bg-emerald-950/[0.15] border border-emerald-500/30 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FFA3]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Injaazh Algorithmic Search Engineering
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                    PERMANENT EQUITY
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.injaazhSEO.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-neutral-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300 font-heading tracking-wider uppercase font-semibold flex items-center justify-between">
                <span>Outcome: Locked Page 1 rankings, compounding inbound pipeline, and zero PPC dependency.</span>
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. SEARCH INTELLIGENCE TOOLING ECOSYSTEM                  */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#6324FC]" />
                <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                  SEARCH INTELLIGENCE
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR SEARCH TOOLING STACK
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              We leverage enterprise crawling and telemetry software to audit competitors and track algorithm updates in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoTools.map((tool, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tool.color }}
                  />
                  <span className="text-[10px] font-heading tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                    {tool.category}
                  </span>
                </div>
                <h4 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-[#6324FC] transition-colors">
                  {tool.name}
                </h4>
                <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FAQ ACCORDION                                          */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100/50 dark:bg-[#08080c]/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base">
              Clear, transparent answers about our enterprise search strategies, timelines, and guarantees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#0e0e16] border-[#6324FC]/40 shadow-lg"
                      : "bg-white dark:bg-[#0c0c12] border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    className="w-full py-6 px-8 flex justify-between items-center text-left gap-4"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span
                      className={`font-heading text-lg sm:text-xl transition-colors duration-300 font-bold ${
                        isOpen ? "text-[#6324FC]" : "text-neutral-900 dark:text-white"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#6324FC] text-white rotate-45" : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 px-8 pt-2 border-t border-black/5 dark:border-white/5">
                          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. BOTTOM CONVERSION CTA SECTION                          */}
      {/* ========================================================= */}
      <section className="w-full py-24 md:py-36 relative overflow-hidden text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/30 text-[#6324FC] text-xs font-heading tracking-widest uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR SEARCH AUDIT</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight mb-8">
            READY TO DOMINATE PAGE ONE <br className="hidden md:block" />
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              AND OUTRANK YOUR COMPETITION?
            </span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Send us your website domain and primary target keywords. Within 24 hours, our search engineers will return a complete technical crawl audit and keyword revenue opportunity roadmap.
          </p>

          <button
            onClick={() => openModal()}
            className="group relative p-[2px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_50px_rgba(99,36,252,0.45)] hover:scale-105 mx-auto isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#00FFA3,#6324FC)] animate-[spin_5s_linear_infinite] rounded-full" />
            </div>

            <div className="relative w-full h-full px-12 sm:px-16 py-6 sm:py-7 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
              <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-xl sm:text-2xl tracking-widest text-neutral-900 dark:text-white uppercase text-center font-bold">
                CLAIM YOUR FREE AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-[#00FFA3] group-hover:translate-x-1.5 transition-all duration-300" />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
