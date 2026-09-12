"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  Zap,
  ShoppingBag,
  Code,
  Link as LinkIcon,
  Cpu,
  Globe,
  Database,
  Server,
  CheckCircle2,
  XCircle,
  Terminal,
  Layers,
  RefreshCw,
  Gauge,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Sliders,
  ChevronRight,
  Boxes,
  Sparkles,
  HardDrive,
  Wifi,
  Lock,
  Workflow,
  Check,
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

      {/* Decorative corner border accents */}
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
// Architecture Simulator Types & Data
// -------------------------------------------------------------
type ArchitectureType = "NEXTJS_EDGE" | "HEADLESS_COMMERCE" | "CLOUD_SAAS" | "LEGACY_MONOLITH";

interface ArchConfig {
  id: ArchitectureType;
  name: string;
  tagline: string;
  badge: string;
  accent: string;
  framework: string;
  edgeNodes: string;
  ttfbBase: number; // ms
  lcpBase: number; // s
  score: number;
  jsPayload: string;
  cacheHitRatio: string;
  renderStrategy: string;
  pros: string[];
  cons: string[];
  topology: {
    client: string;
    edge: string;
    runtime: string;
    cache: string;
    data: string;
  };
}

const ARCHITECTURES: Record<ArchitectureType, ArchConfig> = {
  NEXTJS_EDGE: {
    id: "NEXTJS_EDGE",
    name: "Next.js 15 Edge Engine",
    tagline: "React Server Components + Global Edge Streaming Architecture",
    badge: "RECOMMENDED // TIER 1",
    accent: "#00FFA3",
    framework: "Next.js 15 + React 19 + Turbopack",
    edgeNodes: "320+ Global Edge PoPs",
    ttfbBase: 22,
    lcpBase: 0.65,
    score: 99,
    jsPayload: "42 KB (Zero Client Bloat)",
    cacheHitRatio: "99.4%",
    renderStrategy: "React Server Components (RSC) + Streaming ISR",
    pros: [
      "Sub-30ms global TTFB served from closest edge node",
      "Up to 80% reduction in client-side JavaScript execution",
      "Instant page transitions with optimistic streaming UI",
      "Automatic Google Core Web Vitals 99-100/100 score",
    ],
    cons: ["Requires modern edge-native architectural design discipline"],
    topology: {
      client: "Zero-Lag Browser Window",
      edge: "Vercel / Cloudflare Edge CDN",
      runtime: "V8 Edge Worker Isolates",
      cache: "Edge KV & Distributed Cache",
      data: "Supabase / PostgreSQL Pool",
    },
  },
  HEADLESS_COMMERCE: {
    id: "HEADLESS_COMMERCE",
    name: "Headless Shopify & Hydrogen",
    tagline: "Decoupled Storefront with Sub-Second Product Filtering",
    badge: "HIGH CONVERSION RETAIL",
    accent: "#00E5FF",
    framework: "Shopify Hydrogen + Oxygen Edge + Storefront API",
    edgeNodes: "285+ Global PoPs",
    ttfbBase: 32,
    lcpBase: 0.78,
    score: 98,
    jsPayload: "54 KB",
    cacheHitRatio: "98.8%",
    renderStrategy: "Dynamic Edge Hydration + Micro-Frontend Cart",
    pros: [
      "Zero storefront downtime during peak Black Friday spikes",
      "Instant faceted search with Algolia integration",
      "Checkout flows decoupled from bulky theme liquid scripts",
      "38%+ average conversion lift over monolithic Shopify themes",
    ],
    cons: ["Requires specialized headless API orchestration"],
    topology: {
      client: "Fast Shopper PWA Client",
      edge: "Shopify Oxygen Edge Runtime",
      runtime: "Storefront GraphQL Engine",
      cache: "Stale-While-Revalidate Edge Cache",
      data: "Shopify Plus Core & OMS",
    },
  },
  CLOUD_SAAS: {
    id: "CLOUD_SAAS",
    name: "Enterprise Cloud SaaS",
    tagline: "Full-Stack Microservices with Distributed Redis & PostgreSQL",
    badge: "MISSION CRITICAL SAAS",
    accent: "#6324FC",
    framework: "Next.js + Node.js / Go + Redis + PostgreSQL",
    edgeNodes: "Multi-Region Cloud + Edge Gateways",
    ttfbBase: 38,
    lcpBase: 0.84,
    score: 97,
    jsPayload: "78 KB",
    cacheHitRatio: "96.2%",
    renderStrategy: "Hybrid SSR + Edge WebSocket Channels",
    pros: [
      "Real-time sub-10ms data sync via WebSockets",
      "Multi-tenant data isolation with row-level security",
      "Horizontal auto-scaling under massive concurrent bursts",
      "Complete CI/CD observability with OpenTelemetry",
    ],
    cons: ["Higher infrastructure orchestration complexity"],
    topology: {
      client: "Enterprise Dashboard Client",
      edge: "Edge API Gateway & WAF",
      runtime: "Distributed Microservices Cluster",
      cache: "Redis Enterprise Cluster",
      data: "PostgreSQL Aurora Cluster",
    },
  },
  LEGACY_MONOLITH: {
    id: "LEGACY_MONOLITH",
    name: "Legacy Monolithic CMS",
    tagline: "Traditional PHP Theme + Heavy Plugins on Shared Hosting",
    badge: "LEGACY ARCHITECTURE",
    accent: "#FF2D55",
    framework: "Monolithic CMS (e.g. Traditional WordPress / Drupal)",
    edgeNodes: "Single Origin Data Center",
    ttfbBase: 520,
    lcpBase: 3.9,
    score: 42,
    jsPayload: "1,520 KB (Heavy Plugin Bloat)",
    cacheHitRatio: "26.4%",
    renderStrategy: "Heavy Server-Side PHP Compilation on Every Hit",
    pros: ["Cheap entry-level shared hosting"],
    cons: [
      "Server crashes during unexpected traffic surges",
      "Sluggish 3-5s mobile load times that ruin ad ROAS",
      "Fragile plugin ecosystem prone to security vulnerabilities",
      "Google penalizes search rankings due to failing Core Web Vitals",
    ],
    topology: {
      client: "Laggy Browser Execution",
      edge: "Single Origin Apache Server",
      runtime: "Slow Single-Thread PHP Process",
      cache: "Fragile Local Disk File Cache",
      data: "Unindexed Shared MySQL DB",
    },
  },
};

// -------------------------------------------------------------
// Main Component
// -------------------------------------------------------------
export default function WebDevClient() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simulator State
  const [activeArch, setActiveArch] = useState<ArchitectureType>("NEXTJS_EDGE");
  const [trafficVolume, setTrafficVolume] = useState<number>(150000); // monthly sessions
  const [activeTab, setActiveTab] = useState<number>(0);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);

  const selectedArch = ARCHITECTURES[activeArch];

  // Dynamic calculated telemetry metrics based on traffic volume
  const dynamicMetrics = useMemo(() => {
    const trafficFactor = trafficVolume / 150000;
    let ttfb = selectedArch.ttfbBase;
    let lcp = selectedArch.lcpBase;
    let score = selectedArch.score;

    if (activeArch === "LEGACY_MONOLITH") {
      // Legacy degrades drastically under load
      ttfb = Math.round(selectedArch.ttfbBase * (1 + trafficFactor * 0.95));
      lcp = Number((selectedArch.lcpBase * (1 + trafficFactor * 0.8)).toFixed(2));
      score = Math.max(18, Math.round(selectedArch.score - trafficFactor * 14));
    } else {
      // Edge architectures maintain flat, lightning performance
      ttfb = Math.round(selectedArch.ttfbBase + Math.min(12, trafficFactor * 3));
      lcp = Number((selectedArch.lcpBase + Math.min(0.15, trafficFactor * 0.04)).toFixed(2));
    }

    return { ttfb, lcp, score };
  }, [selectedArch, activeArch, trafficVolume]);

  // Simulated live edge streaming logs
  useEffect(() => {
    const edgeRegions = ["iad1 (US-East)", "lhr1 (London)", "fra1 (Frankfurt)", "sin1 (Singapore)", "syd1 (Sydney)"];
    const statusCodes = activeArch === "LEGACY_MONOLITH" ? ["200 OK", "200 OK", "504 Gateway Timeout", "500 Internal Error"] : ["200 OK", "200 OK", "200 OK", "304 Not Modified"];
    
    const interval = setInterval(() => {
      const region = edgeRegions[Math.floor(Math.random() * edgeRegions.length)];
      const code = statusCodes[Math.floor(Math.random() * statusCodes.length)];
      const latency = activeArch === "LEGACY_MONOLITH" ? `${Math.floor(Math.random() * 400 + 350)}ms` : `${Math.floor(Math.random() * 15 + 14)}ms`;
      const cacheStatus = activeArch === "LEGACY_MONOLITH" ? "CACHE_MISS" : "CACHE_HIT (EDGE)";
      const logLine = `[${new Date().toISOString().split("T")[1].slice(0, 8)}] GET /api/v2/catalog - ${region} - ${latency} - [${code}] [${cacheStatus}]`;
      
      setSimulatedLogs((prev) => [logLine, ...prev.slice(0, 4)]);
    }, 1800);

    return () => clearInterval(interval);
  }, [activeArch]);

  // 4 Top Metrics
  const stats = [
    {
      value: "99",
      label: "PAGESPEED SCORE",
      desc: "Guaranteed 99/100 Core Web Vitals on both mobile and desktop views.",
      badge: "GOOGLE SLA",
      icon: Gauge,
      color: "#00FFA3",
    },
    {
      value: "0.8s",
      label: "AVERAGE LOAD TIME",
      desc: "Sub-second Largest Contentful Paint (LCP) distributed over 320+ edge CDN PoPs.",
      badge: "GLOBAL SPEED",
      icon: Zap,
      color: "#00E5FF",
    },
    {
      value: "100%",
      label: "ON-TIME DELIVERY",
      desc: "Strict sprint milestones with automated CI/CD staging verification for zero launch delays.",
      badge: "SPRINT PRECISION",
      icon: ShieldCheck,
      color: "#6324FC",
    },
    {
      value: "500+",
      label: "ENTERPRISE BUILDS",
      desc: "Engineered for clients across the US, UK, Europe, Australia, and GCC markets.",
      badge: "GLOBAL PROVEN",
      icon: Globe,
      color: "#FACC15",
    },
  ];

  // 3 Deep Sub-Services
  const subServices = [
    {
      id: "01",
      title: "Next.js & Edge Architectures",
      slug: "/services/web-dev/nextjs-architectures",
      tagline: "React Server Components, Edge Runtimes & Sub-Second Page Delivery",
      badge: "SUB-SERVICE 01 // REACT 19",
      accent: "#00FFA3",
      icon: Cpu,
      description:
        "The gold standard for modern web engineering. We harness React Server Components, Edge Middleware, and granular Incremental Static Regeneration (ISR) to reduce client-side JavaScript by up to 80% and achieve instant global load times.",
      highlights: [
        "React Server Components (RSC) for zero-bloat client bundles",
        "Sub-30ms global TTFB via Vercel / Cloudflare Edge isolates",
        "On-Demand Incremental Static Regeneration (ISR)",
        "Strict TypeScript typing & Core Web Vitals automated CI/CD budgets",
      ],
      techPills: ["NEXT.JS 15", "REACT 19", "TURBOPACK", "EDGE MIDDLEWARE", "VERCEL"],
    },
    {
      id: "02",
      title: "Headless Commerce & Shopify Plus",
      slug: "/services/web-dev/headless-commerce",
      tagline: "Decoupled E-Commerce Storefronts Engineered for Maximum Conversion",
      badge: "SUB-SERVICE 02 // HIGH CONVERSION",
      accent: "#00E5FF",
      icon: ShoppingBag,
      description:
        "Break free from sluggish monolithic themes. We build decoupled Shopify and custom headless e-commerce stores with sub-second product filtering, zero-lag micro-cart interactions, and seamless omnichannel inventory synchronization.",
      highlights: [
        "Sub-300ms product page renders & instant faceted catalog search",
        "Shopify Storefront API & Hydrogen custom storefronts",
        "Multi-currency, localized tax, and cross-border edge routing",
        "Average +38% conversion rate improvement over standard theme setups",
      ],
      techPills: ["SHOPIFY PLUS", "HYDROGEN", "STOREFRONT API", "STRIPE CONNECT", "ALGOLIA"],
    },
    {
      id: "03",
      title: "Custom Web Applications & SaaS",
      slug: "/services/web-dev/custom-web-apps",
      tagline: "Full-Stack Cloud Platforms, Multi-Tenant SaaS & Custom API Systems",
      badge: "SUB-SERVICE 03 // CLOUD NATIVE",
      accent: "#6324FC",
      icon: Code,
      description:
        "When off-the-shelf software falls short, we engineer bespoke, high-concurrency cloud web applications. From multi-tenant SaaS engines to real-time analytics dashboards and mission-critical API automation fabrics.",
      highlights: [
        "Multi-tenant SaaS architectures with strict Row-Level Security (RLS)",
        "Real-time WebSocket event streams and interactive telemetry dashboards",
        "Custom REST & GraphQL microservices with Redis caching layer",
        "Containerized Docker / AWS deployments with 99.99% uptime guarantees",
      ],
      techPills: ["NODE.JS", "PYTHON", "POSTGRESQL", "REDIS", "GRAPHQL / TRPC"],
    },
  ];

  // 4-Stage Engineering Protocol
  const protocolStages = [
    {
      id: "01",
      title: "Discovery & System Architecture",
      subtitle: "Technical Blueprint & Data Modeling",
      description:
        "Before writing a single line of code, we construct a rigorous technical architecture plan: database entity schemas, edge routing topologies, third-party API contracts, and non-negotiable performance budgets.",
      deliverables: ["Architecture Blueprint Doc", "ERD & Database Schemas", "Security & Auth Audit", "Lighthouse Budget SLA"],
      icon: Boxes,
      color: "#6324FC",
    },
    {
      id: "02",
      title: "Frontend & RSC Orchestration",
      subtitle: "Component Architecture & Micro-Interactions",
      description:
        "We build modular, accessible design systems using React Server Components, zero-runtime CSS tokens, and Framer Motion micro-animations — ensuring 60 FPS fluidity with near-zero client JavaScript footprint.",
      deliverables: ["Tokenized Component Library", "Streaming SSR Wireframes", "Mobile Gestures & UX", "WCAG 2.1 AAA Compliance"],
      icon: Layers,
      color: "#00E5FF",
    },
    {
      id: "03",
      title: "Distributed Backend & API Fabric",
      subtitle: "High-Concurrency Services & Edge Caching",
      description:
        "Engineering high-speed data layers with PostgreSQL, Redis caching, and edge middleware. Every endpoint is protected with rate-limiting, strict schema validation (Zod), and automated regression test suites.",
      deliverables: ["Type-Safe tRPC/GraphQL APIs", "Distributed Redis Cache", "Automated Migration Scripts", "100% Test Coverage Suite"],
      icon: Server,
      color: "#00FFA3",
    },
    {
      id: "04",
      title: "Global Edge Rollout & Observability",
      subtitle: "Zero-Downtime CI/CD & Active Telemetry",
      description:
        "Deploying across 300+ edge locations worldwide with automated rollback pipelines, synthetic uptime monitoring, and Sentry/Datadog real-time error tracking. We stay engaged long after go-live.",
      deliverables: ["Global CDN Edge Config", "Synthetic Real-User Monitoring", "Automated Sentry Tracking", "30-Day Post-Launch SLA"],
      icon: ShieldCheck,
      color: "#FACC15",
    },
  ];

  // Modern Developer Tools Grid
  const techStack = [
    { name: "Next.js 15", category: "Full-Stack Framework", desc: "App Router, React Server Components & Turbopack bundler.", color: "#00FFA3" },
    { name: "React 19", category: "Core UI Library", desc: "Server actions, asset loading, and concurrent rendering engine.", color: "#00E5FF" },
    { name: "TypeScript", category: "Strict Typing", desc: "End-to-end type safety eliminating runtime null reference bugs.", color: "#3178C6" },
    { name: "Tailwind CSS", category: "Design Engine", desc: "Atomic, zero-runtime CSS with tokenized light/dark harmonies.", color: "#38BDF8" },
    { name: "Cloudflare & Vercel", category: "Global Edge CDN", desc: "Sub-20ms edge compute nodes deployed across 300+ cities.", color: "#F38020" },
    { name: "PostgreSQL & Supabase", category: "Relational Database", desc: "ACID-compliant relational database with Row Level Security.", color: "#3ECF8E" },
    { name: "Redis Enterprise", category: "High-Speed Cache", desc: "Sub-millisecond in-memory caching and real-time pub/sub queues.", color: "#FF4438" },
    { name: "GraphQL & tRPC", category: "API Layer", desc: "Unified data fetching protocols with zero over-fetching overhead.", color: "#E10098" },
  ];

  // Battlecard Points
  const battlecardComparison = {
    legacy: [
      "Bloated PHP theme with 40+ third-party WordPress plugins",
      "Sluggish 3.5s – 6.0s mobile load times causing 53%+ bounce rates",
      "Frequent server crashes when traffic spikes from paid ads or PR",
      "Heavy client-side script payloads exceeding 1.5MB on initial visit",
      "Constant vulnerability patches and fragile database backup headaches",
    ],
    injaazh: [
      "Next.js 15 App Router with pure React Server Components & zero bloat",
      "Guaranteed sub-second LCP and 99/100 Google Core Web Vitals",
      "Serverless auto-scaling that handles 500k+ concurrent visits with zero lag",
      "Ultra-lean client bundles (<50KB) served from the nearest edge node",
      "Enterprise security headers, automated CI/CD rollback, and 99.99% uptime",
    ],
  };

  // FAQs
  const faqs = [
    {
      q: "Why do you specialize in Next.js and Headless Architectures?",
      a: "Next.js and headless architectures deliver unmatched speed, security, and scalability. By separating the frontend presentation layer from the backend database and deploying React Server Components to global edge nodes, we guarantee sub-second load times and 99/100 Core Web Vitals. This directly translates to higher Google search rankings and dramatically improved ad conversion rates.",
    },
    {
      q: "Can you migrate our existing WordPress or Shopify store without downtime?",
      a: "Yes. We execute seamless zero-downtime migrations. For Shopify clients, we connect your existing product catalog, customer records, and orders via the Shopify Storefront API while replacing the sluggish theme frontend with a lightning-fast Hydrogen or Next.js edge storefront. Your operations continue running without interruption.",
    },
    {
      q: "How do you guarantee a 99/100 PageSpeed score?",
      a: "We engineer for performance from day one: React Server Components eliminate unnecessary client JavaScript, dynamic image optimization delivers next-gen WebP/AVIF formats at exact viewport dimensions, critical CSS is inlined, and static assets are cached on 320+ edge CDN points worldwide. We back our performance targets with an SLA.",
    },
    {
      q: "What is your typical project timeline for custom web development?",
      a: "Standard Next.js brand architectures and headless commerce builds typically launch within 3 to 6 weeks from technical blueprint sign-off. Highly complex custom web applications and multi-tenant SaaS platforms range between 6 to 12 weeks. We operate in weekly two-week sprints with live staging URLs so you see constant progress.",
    },
    {
      q: "Do you offer post-launch maintenance and continuous optimization?",
      a: "Absolutely. Every engagement includes a dedicated post-launch warranty window. Beyond launch, we offer enterprise retainer tiers covering proactive security audits, continuous Core Web Vitals monitoring, synthetic uptime tracking, and on-demand engineering pods to roll out new features as your business scales.",
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-[#FAF9F6] dark:bg-[#060608] text-neutral-900 dark:text-white pt-28 md:pt-36 font-sans overflow-hidden transition-colors duration-500">
      {/* Background Grids & Ambient Textures */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Radial Glows */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#6324FC] via-[#00E5FF] to-[#00FFA3] blur-[160px] rounded-full pointer-events-none opacity-20 dark:opacity-25"
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
        className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] bg-[#6324FC]/10 blur-[130px] rounded-full pointer-events-none"
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pb-16 md:pb-24 border-b border-black/10 dark:border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumb & Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href="/services"
              className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-[#6324FC] transition-colors flex items-center gap-1.5"
            >
              SERVICES <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/25 text-[#6324FC] text-xs font-heading tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE PILLAR // V2.5</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-heading tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>EDGE CDN POPS ACTIVE</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            ENTERPRISE WEB DEVELOPMENT{" "}
            <br className="hidden md:block" />
            ENGINEERED FOR{" "}
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              ABSOLUTE SPEED & SCALE.
            </span>
          </h1>

          <p className="font-sans font-normal text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl mb-10 border-l-2 border-[#6324FC] pl-6">
            We don't build generic websites that crumble under traffic spikes. We engineer
            high-concurrency Next.js 15 architectures, decoupled headless commerce, and mission-critical
            cloud platforms guaranteed to load in under a second and rank at the top of Google.
          </p>

          {/* Quick Architecture Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
            {[
              "Next.js 15 App Router",
              "React Server Components",
              "Sub-Second Edge CDN",
              "Headless Commerce",
              "TypeScript Strict",
              "Core Web Vitals 99+",
            ].map((pill, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-xs font-heading tracking-wider bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shadow-sm"
              >
                ✓ {pill}
              </span>
            ))}
          </div>

          {/* CTAs */}
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
                  LAUNCH ARCHITECTURE AUDIT
                  <ArrowUpRight className="w-5 h-5 text-[#6324FC] group-hover:text-[#00FFA3] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>

            <a
              href="#sub-services"
              className="px-8 py-4 sm:py-5 rounded-full text-base font-heading tracking-wider border border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 font-semibold text-neutral-800 dark:text-neutral-200"
            >
              EXPLORE 3 SPECIALIZED CAPABILITIES
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
                  SPECIALIZED ARCHITECTURAL DIVISIONS
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR 3 CORE WEB CAPABILITIES
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              Explore our dedicated sub-service architectures built for high-performance scale,
              headless retail conversions, and cloud-native computing.
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
                  {/* Subtle top accent gradient */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-2"
                    style={{ backgroundColor: sub.accent }}
                  />

                  <div>
                    {/* Top Tag & Icon */}
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

                    {/* Bullet Highlights */}
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

                  {/* Deep Navigation Action Link */}
                  <Link
                    href={sub.slug}
                    className="w-full py-4 px-6 rounded-2xl flex items-center justify-between transition-all duration-300 font-heading text-xs tracking-wider uppercase font-bold text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 hover:border-transparent group/btn relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to right, ${sub.accent}12, transparent)`,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      EXPLORE {sub.title.split(" ")[0]} DEEP ARCHITECTURE
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
      {/* 4. INTERACTIVE ARCHITECTURE & SPEED SIMULATOR ENGINE       */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100/50 dark:bg-[#08080c]/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FFA3]/10 border border-[#00FFA3]/30 text-emerald-600 dark:text-[#00FFA3] text-xs font-heading tracking-widest uppercase mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE BENCHMARK TELEMETRY</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
              FULL-STACK ARCHITECTURE & SPEED SIMULATOR
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
              Compare real-world load times, Core Web Vitals, and server response metrics across different
              stack architectures under fluctuating traffic loads.
            </p>
          </div>

          {/* Simulator Cockpit */}
          <div className="rounded-3xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* 1. Architecture Selector Tabs */}
            <div className="mb-8">
              <div className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase mb-3 flex items-center justify-between">
                <span>SELECT ARCHITECTURE ENGINE</span>
                <span className="text-[#6324FC] font-semibold">{selectedArch.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(Object.keys(ARCHITECTURES) as ArchitectureType[]).map((key) => {
                  const arch = ARCHITECTURES[key];
                  const isSelected = activeArch === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveArch(key)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? "bg-neutral-100 dark:bg-white/10 shadow-md scale-[1.02]"
                          : "bg-white dark:bg-white/[0.02] border-black/10 dark:border-white/5 hover:border-black/25 dark:hover:border-white/20"
                      }`}
                      style={{
                        borderColor: isSelected ? arch.accent : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: arch.accent }}
                        />
                        <span className="text-[10px] font-heading tracking-wider uppercase opacity-70">
                          {arch.score >= 90 ? "FAST" : "LEGACY"}
                        </span>
                      </div>
                      <div className="font-heading text-sm font-bold text-neutral-900 dark:text-white">
                        {arch.name}
                      </div>
                      <div className="text-[11px] text-neutral-600 dark:text-neutral-400 line-clamp-1 mt-1 font-sans">
                        {arch.framework}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Interactive Traffic Slider */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#6324FC]" />
                  <span className="font-heading text-xs tracking-wider uppercase text-neutral-800 dark:text-neutral-200">
                    CONCURRENT TRAFFIC SURGE SIMULATOR:
                  </span>
                </div>
                <div className="font-heading text-lg font-bold text-[#6324FC]">
                  {trafficVolume.toLocaleString()} SESSIONS / MO
                </div>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={trafficVolume}
                onChange={(e) => setTrafficVolume(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6324FC]"
              />
              <div className="flex justify-between text-[11px] text-neutral-600 dark:text-neutral-400 font-heading mt-2">
                <span>10K (Startup)</span>
                <span>150K (Growing Brand)</span>
                <span>500K+ (Enterprise Surge)</span>
              </div>
            </div>

            {/* 3. Live Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* TTFB */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>TIME TO FIRST BYTE (TTFB)</span>
                  <Activity className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicMetrics.ttfb < 100 ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {dynamicMetrics.ttfb} ms
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicMetrics.ttfb < 50 ? "⚡ Global Edge Served" : "⚠️ Origin Server Bottleneck"}
                </div>
              </div>

              {/* LCP */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>LARGEST CONTENTFUL PAINT</span>
                  <Zap className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicMetrics.lcp < 1.2 ? "#00E5FF" : "#FF2D55",
                  }}
                >
                  {dynamicMetrics.lcp} s
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicMetrics.lcp < 1.0 ? "✓ Instantaneous View" : "❌ High Abandonment Risk"}
                </div>
              </div>

              {/* Lighthouse Score */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>CORE WEB VITALS SCORE</span>
                  <Gauge className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicMetrics.score >= 90 ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {dynamicMetrics.score}/100
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicMetrics.score >= 90 ? "🟢 Google Green Badge" : "🔴 Failed Web Vitals"}
                </div>
              </div>

              {/* Cache Hit Ratio */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>CACHE HIT RATIO</span>
                  <RefreshCw className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="font-heading text-3xl font-bold text-neutral-900 dark:text-white">
                  {selectedArch.cacheHitRatio}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {selectedArch.edgeNodes}
                </div>
              </div>
            </div>

            {/* 4. Architecture Breakdown & Live Simulated Terminal */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Topology Visual Flow (7 cols) */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-black/5 dark:border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase mb-4 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#6324FC]" />
                    <span>DEPLOYMENT TOPOLOGY PIPELINE</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <Wifi className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <div className="text-xs">
                        <span className="font-heading uppercase font-bold text-neutral-800 dark:text-neutral-200">1. Client Request: </span>
                        <span className="text-neutral-600 dark:text-neutral-400">{selectedArch.topology.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <Globe className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      <div className="text-xs">
                        <span className="font-heading uppercase font-bold text-neutral-800 dark:text-neutral-200">2. Edge Distribution: </span>
                        <span className="text-neutral-600 dark:text-neutral-400">{selectedArch.topology.edge}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <Cpu className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <div className="text-xs">
                        <span className="font-heading uppercase font-bold text-neutral-800 dark:text-neutral-200">3. Compute Runtime: </span>
                        <span className="text-neutral-600 dark:text-neutral-400">{selectedArch.topology.runtime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <Database className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <div className="text-xs">
                        <span className="font-heading uppercase font-bold text-neutral-800 dark:text-neutral-200">4. Data Persistence: </span>
                        <span className="text-neutral-600 dark:text-neutral-400">{selectedArch.topology.data}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
                  <span>Initial JS Payload: <strong className="text-neutral-900 dark:text-white">{selectedArch.jsPayload}</strong></span>
                  <span>Rendering Strategy: <strong className="text-neutral-900 dark:text-white">{selectedArch.renderStrategy.split(" ")[0]}</strong></span>
                </div>
              </div>

              {/* Right: Live Request Stream Terminal (5 cols) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-[#07070b] border border-white/10 text-neutral-300 font-mono text-xs flex flex-col justify-between shadow-inner">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-neutral-400">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] tracking-wider uppercase font-heading">LIVE REQUEST TELEMETRY STREAM</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <div className="text-neutral-500">
                      // Connecting to edge node cluster... TLS 1.3 / HTTP/3
                    </div>
                    {simulatedLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={log.includes("504") || log.includes("500") ? "text-red-400" : "text-emerald-400"}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
                  <span>Protocol: HTTP/3 + QUIC</span>
                  <span className="text-emerald-400">● 100% HEALTHY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. 4-STAGE ENGINEERING PROTOCOL LIFECYCLE TABS           */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#6324FC]" />
              <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                ENGINEERING LIFECYCLE
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
              HOW WE BUILD HIGH-PERFORMANCE WEB SYSTEMS
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {protocolStages.map((stage, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
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

          {/* Active Tab Content Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading tracking-widest uppercase mb-4"
                  style={{
                    backgroundColor: `${protocolStages[activeTab].color}15`,
                    color: protocolStages[activeTab].color,
                    border: `1px solid ${protocolStages[activeTab].color}30`,
                  }}
                >
                  STAGE {protocolStages[activeTab].id} // PROTOCOL
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl text-neutral-900 dark:text-white mb-2">
                  {protocolStages[activeTab].title}
                </h3>
                <p className="font-heading text-sm text-[#6324FC] tracking-wider uppercase mb-6 font-semibold">
                  {protocolStages[activeTab].subtitle}
                </p>
                <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                  {protocolStages[activeTab].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {protocolStages[activeTab].deliverables.map((del, dIdx) => (
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
                    backgroundColor: `${protocolStages[activeTab].color}20`,
                    border: `1px solid ${protocolStages[activeTab].color}40`,
                  }}
                >
                  {activeTab === 0 && <Boxes className="w-10 h-10" style={{ color: protocolStages[activeTab].color }} />}
                  {activeTab === 1 && <Layers className="w-10 h-10" style={{ color: protocolStages[activeTab].color }} />}
                  {activeTab === 2 && <Server className="w-10 h-10" style={{ color: protocolStages[activeTab].color }} />}
                  {activeTab === 3 && <ShieldCheck className="w-10 h-10" style={{ color: protocolStages[activeTab].color }} />}
                </div>
                <div className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Zero Technical Debt
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Every deliverable undergoes automated static analysis, Lighthouse CI, and security scanning before milestone approval.
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
              LEGACY MONOLITHS VS INJAAZH EDGE
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
              Why leading international enterprises abandon bloated WordPress plugins and monolithic tech stacks for our Next.js edge engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Legacy Agencies & Monoliths */}
            <div className="p-8 sm:p-10 rounded-3xl bg-rose-500/[0.03] dark:bg-rose-950/[0.12] border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Legacy Monoliths & Generic Agencies
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-500 uppercase font-bold">
                    HIGH RISK
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.legacy.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-300 font-heading tracking-wider uppercase font-semibold">
                Outcome: Lost search rankings, sluggish conversion rates, and constant emergency maintenance.
              </div>
            </div>

            {/* Right: Injaazh Edge Engineering */}
            <div className="p-8 sm:p-10 rounded-3xl bg-emerald-500/[0.04] dark:bg-emerald-950/[0.15] border border-emerald-500/30 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FFA3]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Injaazh Edge Engineering
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                    99+ LIGHTHOUSE SLA
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.injaazh.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-neutral-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300 font-heading tracking-wider uppercase font-semibold flex items-center justify-between">
                <span>Outcome: Sub-second global performance, higher Google rank, and maximum ad ROAS.</span>
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. MODERN TECH STACK RADAR GRID                           */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#6324FC]" />
                <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                  ENTERPRISE TOOLING
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR PRODUCTION TECH STACK
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              We engineer with cutting-edge, battle-tested technologies trusted by Silicon Valley scale-ups and Fortune 500 enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-[10px] font-heading tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                    {tech.category}
                  </span>
                </div>
                <h4 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-[#6324FC] transition-colors">
                  {tech.name}
                </h4>
                <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {tech.desc}
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
              Got technical questions about our architecture stack, timelines, or migrations? Here are the answers.
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
      {/* 9. BOTTOM CTA CONVERSION SECTION                          */}
      {/* ========================================================= */}
      <section className="w-full py-24 md:py-36 relative overflow-hidden text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/30 text-[#6324FC] text-xs font-heading tracking-widest uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR ARCHITECTURE SPRINT</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight mb-8">
            READY TO BUILD SOMETHING <br className="hidden md:block" />
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              THAT CRUSHES YOUR COMPETITION?
            </span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Send us your current site URL or project brief. Within 24 hours, our senior engineering architects will deliver a comprehensive technical roadmap and performance audit.
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
