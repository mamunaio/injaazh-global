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
  Compass,
  BarChart3,
  Layers,
  PieChart,
  Activity,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  RefreshCw,
  Eye,
  Database,
  Workflow,
  Cpu,
  LineChart,
  DollarSign,
  TrendingDown,
  Clock,
  Briefcase,
  Check,
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
// Simulator Types & Presets
// -------------------------------------------------------------
type ScenarioType = "LEGACY_MODERNIZATION" | "MULTI_MARKET" | "PRODUCT_UX_CRO" | "DISCONNECTED_SILOS";

interface StrategyPreset {
  id: ScenarioType;
  name: string;
  tagline: string;
  badge: string;
  accent: string;
  infraSavingsRate: number; // percentage of budget saved in infra/tech debt
  revenueGrowthMultiplier: number;
  velocityMultiplier: string;
  croLift: string;
  roadmapPhases: {
    phase: string;
    month: string;
    title: string;
    tasks: string[];
  }[];
}

const STRATEGY_PRESETS: Record<ScenarioType, StrategyPreset> = {
  LEGACY_MODERNIZATION: {
    id: "LEGACY_MODERNIZATION",
    name: "Legacy Monolith Modernization",
    tagline: "Deconstruct Bloated Systems, Eliminate Technical Debt & Migrate to Edge",
    badge: "HIGH ROI // INFRA OVERHAUL",
    accent: "#6324FC",
    infraSavingsRate: 0.28,
    revenueGrowthMultiplier: 0.32,
    velocityMultiplier: "3.8x",
    croLift: "+46%",
    roadmapPhases: [
      {
        phase: "PHASE 01",
        month: "MONTH 1",
        title: "Technical Discovery & Legacy Deconstruction",
        tasks: ["System audit & database schema mapping", "Identification of critical bottleneck services", "Zero-downtime migration architecture specification"],
      },
      {
        phase: "PHASE 02",
        month: "MONTH 2",
        title: "Edge Engine Deployment & API Orchestration",
        tasks: ["Next.js 15 App Router frontend decoupling", "Distributed Redis cache & GraphQL middleware", "Automated CI/CD testing & deployment pipelines"],
      },
      {
        phase: "PHASE 03",
        month: "MONTH 3",
        title: "Decommissioning & Real-Time Telemetry",
        tasks: ["Phased DNS cutover to 320+ Edge PoPs", "Legacy server shutdown (saving up to 60% hosting)", "Sentry & Datadog synthetic monitoring activation"],
      },
    ],
  },
  MULTI_MARKET: {
    id: "MULTI_MARKET",
    name: "Multi-Market Expansion (US / UK / AU)",
    tagline: "Omnichannel Geolocation, Localized Currency & Global BI Telemetry",
    badge: "GLOBAL EXPANSION",
    accent: "#00E5FF",
    infraSavingsRate: 0.18,
    revenueGrowthMultiplier: 0.48,
    velocityMultiplier: "3.2x",
    croLift: "+54%",
    roadmapPhases: [
      {
        phase: "PHASE 01",
        month: "MONTH 1",
        title: "Market Intelligence & Competitor Whitespace",
        tasks: ["Regional search intent & buyer persona audit", "Competitor positioning & pricing benchmark", "International regulatory & tax compliance map"],
      },
      {
        phase: "PHASE 02",
        month: "MONTH 2",
        title: "Localized Edge Stores & Currency Routing",
        tasks: ["Multi-currency checkout integration via Stripe", "Hreflang & localized geo-routing edge logic", "Unified central product catalog & inventory sync"],
      },
      {
        phase: "PHASE 03",
        month: "MONTH 3",
        title: "Unified Global Looker Studio Dashboards",
        tasks: ["Territory-specific conversion attribution modeling", "Automated currency translation reporting in GA4", "Continuous multi-market ad creative alignment"],
      },
    ],
  },
  PRODUCT_UX_CRO: {
    id: "PRODUCT_UX_CRO",
    name: "Product UX Overhaul & Deep CRO",
    tagline: "Heuristic Usability Audits, Friction Elimination & Micro-Copy Precision",
    badge: "CONVERSION SUPREMACY",
    accent: "#00FFA3",
    infraSavingsRate: 0.12,
    revenueGrowthMultiplier: 0.38,
    velocityMultiplier: "4.0x",
    croLift: "+62%",
    roadmapPhases: [
      {
        phase: "PHASE 01",
        month: "MONTH 1",
        title: "Heuristic Evaluation & Heatmap Diagnostics",
        tasks: ["Hotjar session replay analysis & drop-off mapping", "WCAG 2.1 AAA accessibility friction audit", "Form field abandonment telemetry tracking"],
      },
      {
        phase: "PHASE 02",
        month: "MONTH 2",
        title: "Tokenized UI Design System & Prototype",
        tasks: ["Conversion-focused UX component wireframing", "Frictionless 1-click checkout flow engineering", "Micro-copy & trust badge psychological alignment"],
      },
      {
        phase: "PHASE 03",
        month: "MONTH 3",
        title: "Continuous A/B Variant Testing & Attribution",
        tasks: ["Multivariate testing on high-intent landing pages", "PostHog funnel attribution verification", "Compounding month-over-month CRO sprint iterations"],
      },
    ],
  },
  DISCONNECTED_SILOS: {
    id: "DISCONNECTED_SILOS",
    name: "Disconnected Operations & Tooling Silos",
    tagline: "Manual Spreadsheets, Disjointed Tools & Zero Revenue Visibility",
    badge: "OPERATIONAL DEFICIT",
    accent: "#FF2D55",
    infraSavingsRate: -0.15,
    revenueGrowthMultiplier: 0.02,
    velocityMultiplier: "0.6x",
    croLift: "-14%",
    roadmapPhases: [
      {
        phase: "PHASE 01",
        month: "MONTH 1",
        title: "Siloed Data & Inaccurate Metrics",
        tasks: ["Analytics metrics disagree across different reports", "Team relies on manual CSV exports and gut feeling", "Engineering spent putting out urgent server fires"],
      },
      {
        phase: "PHASE 02",
        month: "MONTH 2",
        title: "Bloated Software Spend & Duplicate Tools",
        tasks: ["Paying for multiple unused SaaS subscriptions", "Zero automated attribution from ad click to revenue", "Friction-heavy customer onboarding journeys"],
      },
      {
        phase: "PHASE 03",
        month: "MONTH 3",
        title: "Declining Market Share & Competitor Overtake",
        tasks: ["Competitors execute faster with modern edge tech", "Customer acquisition costs escalate uncontrollably", "Technical debt compoundingly drains annual profits"],
      },
    ],
  },
};

// -------------------------------------------------------------
// Main Component
// -------------------------------------------------------------
export default function StrategyClient() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simulator State
  const [activeScenario, setActiveScenario] = useState<ScenarioType>("LEGACY_MODERNIZATION");
  const [annualRevenueBudget, setAnnualRevenueBudget] = useState<number>(1200000); // $1.2M
  const [activeProtocolTab, setActiveProtocolTab] = useState<number>(0);

  const selectedPreset = STRATEGY_PRESETS[activeScenario];

  // Dynamic Telemetry Calculations
  const dynamicTelemetry = useMemo(() => {
    const isSilo = activeScenario === "DISCONNECTED_SILOS";

    let infraSavings = Math.round(annualRevenueBudget * selectedPreset.infraSavingsRate);
    let netRevenueSurge = Math.round(annualRevenueBudget * selectedPreset.revenueGrowthMultiplier);
    let croGain = selectedPreset.croLift;
    let velocity = selectedPreset.velocityMultiplier;

    if (isSilo) {
      infraSavings = -Math.round(annualRevenueBudget * 0.12);
      netRevenueSurge = Math.round(annualRevenueBudget * 0.015);
    }

    return {
      infraSavings,
      netRevenueSurge,
      croGain,
      velocity,
    };
  }, [activeScenario, annualRevenueBudget, selectedPreset]);

  // Top 4 Metrics
  const stats = [
    {
      value: "+28%",
      label: "AVG MARKET SHARE EXPANSION",
      desc: "Measured revenue growth and category dominance within 9 months of strategic roadmap execution.",
      badge: "MARKET IMPACT",
      icon: TrendingUp,
      color: "#00FFA3",
    },
    {
      value: "3.4x",
      label: "DEPLOYMENT VELOCITY",
      desc: "Modern edge architectures eliminate monolithic technical debt, tripling sprint delivery speed.",
      badge: "ENGINEERING VELOCITY",
      icon: Zap,
      color: "#00E5FF",
    },
    {
      value: "-$180K",
      label: "ANNUAL INFRA SAVED",
      desc: "Decommissioning bloated legacy servers and consolidating redundant SaaS tools.",
      badge: "COST REDUCTION",
      icon: DollarSign,
      color: "#6324FC",
    },
    {
      value: "95%",
      label: "MARKET FIT & RETENTION",
      desc: "Data-backed alignment between user experience, product offering, and target Western demand.",
      badge: "STRATEGY PRECISION",
      icon: Target,
      color: "#FACC15",
    },
  ];

  // 3 Core Sub-Services
  const subServices = [
    {
      id: "01",
      title: "Digital Transformation & Cloud Modernization",
      slug: "/services/strategy/digital-transformation",
      tagline: "Legacy Deconstruction, Cloud-Native Architecture & Enterprise Automation",
      badge: "SUB-SERVICE 01 // MODERNIZATION",
      accent: "#6324FC",
      icon: RefreshCw,
      description:
        "The gap between where your digital operations are and where they need to be — bridged. We deconstruct outdated monolithic systems and migrate your infrastructure to modern, auto-scaling edge ecosystems with zero operational downtime.",
      highlights: [
        "Legacy monolithic deconstruction & microservices decoupling",
        "Serverless cloud-native architecture on Vercel, AWS & Cloudflare",
        "Zero-downtime database migration & API fabric integration",
        "Comprehensive 90-day technical modernization roadmapping",
      ],
      techPills: ["CLOUD MIGRATION", "EDGE ARCHITECTURE", "API INTEGRATION", "MICROSERVICES", "AWS / VERCEL"],
    },
    {
      id: "02",
      title: "Business Intelligence & Data Analytics",
      slug: "/services/strategy/business-intelligence",
      tagline: "Custom Executive Dashboards, Real-Time Telemetry & Predictive Analytics",
      badge: "SUB-SERVICE 02 // INTELLIGENCE",
      accent: "#00E5FF",
      icon: BarChart3,
      description:
        "You can't improve what you don't measure. We architect unified analytics infrastructures, build real-time Looker Studio executive dashboards, and translate raw clickstream data into clear, actionable revenue insights.",
      highlights: [
        "Enterprise GA4 & Google BigQuery event tracking pipelines",
        "Custom Looker Studio executive KPI dashboards with real-time sync",
        "Multi-touch customer acquisition attribution modeling",
        "Automated weekly executive reporting memos with zero fluff",
      ],
      techPills: ["LOOKER STUDIO", "BIGQUERY", "GA4 TELEMETRY", "ATTRIBUTION", "POSTHOG"],
    },
    {
      id: "03",
      title: "UX Audits & Conversion Optimization",
      slug: "/services/strategy/ux-audits",
      tagline: "Heuristic Usability Audits, WCAG 2.1 AAA Accessibility & CRO Roadmaps",
      badge: "SUB-SERVICE 03 // OPTIMIZATION",
      accent: "#00FFA3",
      icon: Eye,
      description:
        "Your website is leaking revenue at friction points you can't see. We conduct exhaustive heuristic UX audits, heatmap drop-off diagnostics, and accessibility reviews to pinpoint exact conversion barriers — then engineer the fix.",
      highlights: [
        "10-principle heuristic usability evaluation & friction mapping",
        "WCAG 2.1 AAA accessibility compliance & legal risk mitigation",
        "Behavioral heatmap & session recording drop-off analysis",
        "Systematic multivariate A/B testing sprint schedules",
      ],
      techPills: ["HEURISTIC AUDIT", "WCAG 2.1 AAA", "HEATMAPS", "HOTJAR", "CRO SPRINTS"],
    },
  ];

  // 4-Stage Strategic Protocol Tabs
  const protocolStages = [
    {
      id: "01",
      title: "Diagnostic Audit & Friction Mapping",
      subtitle: "360-Degree Operational & Architectural Analysis",
      description:
        "We dissect your digital infrastructure, analytics data, and user experience the way an engineer audits a high-speed engine: uncovering hidden latency, bloated SaaS costs, and conversion drop-offs.",
      deliverables: ["Full-Stack Architecture Audit", "Data & Analytics Schema Review", "UX Heuristic Friction Report", "Competitor Market Intelligence Dossier"],
      icon: Eye,
      color: "#6324FC",
    },
    {
      id: "02",
      title: "Architectural Blueprint & KPI Definition",
      subtitle: "Milestone-Driven Execution Roadmap",
      description:
        "No academic theory or 100-page shelf-ware PDFs. We define concrete revenue KPIs, agree on timeline milestones, and engineer a practical 90-day execution blueprint with exact resource allocation.",
      deliverables: ["90-Day Digital Growth Roadmap", "Executive KPI Scorecard", "Target Architecture Topology", "ROI & Cost Reduction Model"],
      icon: Compass,
      color: "#00E5FF",
    },
    {
      id: "03",
      title: "Iterative Engineering & Cloud Modernization",
      subtitle: "Agile Production Sprints Under One Roof",
      description:
        "Because strategy and engineering live under the same roof at Injaazh, there is zero gap between plan and execution. Our engineering pods migrate your stack, build dashboards, and deploy modern code weekly.",
      deliverables: ["Cloud-Native Microservices Rollout", "Next.js Edge Storefront Deployment", "Automated Event Tracking Fabric", "Staging & Production CI/CD Setup"],
      icon: Cpu,
      color: "#00FFA3",
    },
    {
      id: "04",
      title: "Business Intelligence & Compounding Scale",
      subtitle: "Continuous Telemetry & Market Domination",
      description:
        "We lock in your new market share with real-time Looker Studio dashboards, automated executive alerts, and continuous conversion rate optimization sprints that ensure momentum never stalls.",
      deliverables: ["Real-Time Looker Studio Dashboard", "Automated Executive Weekly Memo", "Continuous CRO Testing Cadence", "Quarterly Strategy Refinement Reviews"],
      icon: BarChart3,
      color: "#FACC15",
    },
  ];

  // Battlecard Comparison
  const battlecardComparison = {
    ivoryTower: [
      "Deliver 100-page PowerPoint slide decks filled with academic jargon and zero code",
      "Hand off recommendations and immediately vanish, leaving execution to you",
      "No technical understanding of Edge CDN, Core Web Vitals, or modern React frameworks",
      "Propose multi-million dollar monolithic solutions that take 18+ months to ship",
      "Refuse to tie consulting fees to concrete measurable KPIs and revenue benchmarks",
    ],
    injaazhStrategy: [
      "Strategy and production engineering live under one roof with direct execution",
      "Pragmatic, week-by-week 90-day roadmaps designed for rapid sprint shipping",
      "Deep technical mastery of Next.js 15, headless architecture, and cloud data lakes",
      "Iterative modular deployments that deliver measurable ROI within the first 60 days",
      "Clear success metrics and executive KPI scorecards agreed upfront before work starts",
    ],
  };

  // Tooling Ecosystem
  const strategyTools = [
    { name: "Looker Studio Enterprise", category: "BI Visualization", desc: "Automated executive KPI scorecards with live multi-source synchronization.", color: "#4285F4" },
    { name: "Google Cloud BigQuery", category: "Data Warehouse", desc: "Serverless multi-cloud data analytics engine handling petabyte queries.", color: "#34A853" },
    { name: "Segment / RudderStack", category: "Customer Data Platform", desc: "Unified event streaming pipelines syncing product, web, and CRM data.", color: "#52BD95" },
    { name: "PostHog Analytics", category: "Product Intelligence", desc: "Open-source product analytics, session recordings & feature flags.", color: "#6324FC" },
    { name: "Hotjar Behavioral", category: "User Experience Telemetry", desc: "Heatmaps and form drop-off analytics that uncover conversion friction.", color: "#FF3C00" },
    { name: "Datadog APM", category: "System Observability", desc: "End-to-end cloud infrastructure monitoring and latency anomaly detection.", color: "#774DD6" },
    { name: "Snowflake Data Cloud", category: "Data Architecture", desc: "Secure, governed data sharing across enterprise international business units.", color: "#29B5E8" },
    { name: "Notion Enterprise", category: "Roadmap Governance", desc: "Centralized strategic briefs, decision logs, and sprint milestone tracking.", color: "#000000" },
  ];

  // FAQs
  const faqs = [
    {
      q: "What makes Injaazh different from traditional management consultants?",
      a: "Traditional management consultancies hand you a massive slide deck of abstract theories and leave you to figure out how to build it. At Injaazh, strategy and technical execution live under one roof. Our senior strategists work directly alongside our Next.js engineers, SEO directors, and copywriters. When we design a roadmap, our own pods build and launch it with guaranteed SLAs.",
    },
    {
      q: "How long does a digital transformation engagement take?",
      a: "A focused strategy engagement — including full technical audit, opportunity mapping, and 90-day roadmap delivery — typically takes 3 to 4 weeks. Full-scale execution (cloud modernization, headless commerce migration, and custom BI dashboard buildout) usually runs in 8 to 12-week modular sprints. You see working software and live dashboards every two weeks.",
    },
    {
      q: "Can you help our company expand into the US, UK, and Australian markets?",
      a: "Yes. Cross-border digital expansion is one of our primary specialties. We understand the regulatory landscapes, payment preferences, search behavior, and consumer buying psychology of US, UK, and Australian buyers. We configure multi-currency edge routing, localized tax compliance, and geo-targeted marketing funnels.",
    },
    {
      q: "What data sources can you integrate into our Business Intelligence dashboards?",
      a: "We integrate all major enterprise platforms: Google Analytics 4, Shopify Plus, Stripe, Google Ads, Meta Ads, HubSpot, Salesforce, custom PostgreSQL/Supabase databases, and warehouse instances via BigQuery. We unify disparate data sources into a single, clean Looker Studio dashboard that shows true blended CAC, LTV, and net profit.",
    },
    {
      q: "How do you scope and price a strategic engagement?",
      a: "Engagements are scoped based on organizational complexity, data layer maturity, and target execution horizons. We provide transparent, itemized fixed-sprint pricing upfront with zero hidden fees. Book a free 30-minute discovery consultation, and we will deliver a clear proposal outlining the right strategic engagement for your business within 24 hours.",
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-[#FAF9F6] dark:bg-[#060608] text-neutral-900 dark:text-white pt-28 md:pt-36 font-sans overflow-hidden transition-colors duration-500">
      {/* Background Grids & Radial Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
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
        className="absolute top-[45%] right-[-10%] w-[600px] h-[600px] bg-[#6324FC]/10 blur-[140px] rounded-full pointer-events-none"
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pb-16 md:pb-24 border-b border-black/10 dark:border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumb & Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href="/services"
              className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-[#6324FC] transition-colors flex items-center gap-1.5"
            >
              SERVICES <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/25 text-[#6324FC] text-xs font-heading tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIGITAL STRATEGY & BUSINESS INTELLIGENCE // V2.5</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-heading tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>MEASURABLE KPI SLA</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            PRAGMATIC DIGITAL STRATEGY <br className="hidden md:block" />
            ENGINEERED TO{" "}
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              MODERNIZE & DOMINATE.
            </span>
          </h1>

          <p className="font-sans font-normal text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl mb-10 border-l-2 border-[#6324FC] pl-6">
            Strategy without execution is just theory; execution without strategy is expensive chaos.
            We construct actionable digital transformation roadmaps, deploy executive business intelligence dashboards,
            and eliminate legacy technical debt to position your business for scalable international market share.
          </p>

          {/* Quick Assurance Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
            {[
              "90-Day Actionable Roadmaps",
              "Zero-Downtime Cloud Modernization",
              "Real-Time Looker Studio Telemetry",
              "Heuristic Usability & CRO",
              "Western Market Expansion",
              "KPIs Agreed Upfront",
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
                  COMMISSION STRATEGY AUDIT
                  <ArrowUpRight className="w-5 h-5 text-[#6324FC] group-hover:text-[#00FFA3] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>

            <a
              href="#sub-services"
              className="px-8 py-4 sm:py-5 rounded-full text-base font-heading tracking-wider border border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 font-semibold text-neutral-800 dark:text-neutral-200"
            >
              EXPLORE 3 STRATEGIC DISCIPLINES
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
                  STRATEGIC ADVISORY DIVISIONS
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR 3 STRATEGIC PILLARS
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              Explore our three dedicated strategic disciplines: enterprise cloud transformation,
              business intelligence analytics, and heuristic UX conversion audits.
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

                  {/* Deep Navigation Link */}
                  <Link
                    href={sub.slug}
                    className="w-full py-4 px-6 rounded-2xl flex items-center justify-between transition-all duration-300 font-heading text-xs tracking-wider uppercase font-bold text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 hover:border-transparent group/btn relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to right, ${sub.accent}12, transparent)`,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      EXPLORE {sub.title.split(" ")[0]} DEEP PRACTICE
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
      {/* 4. INTERACTIVE TRANSFORMATION & ROI SIMULATOR             */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100/50 dark:bg-[#08080c]/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FFA3]/10 border border-[#00FFA3]/30 text-emerald-600 dark:text-[#00FFA3] text-xs font-heading tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>STRATEGIC ROI ENGINE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
              DIGITAL TRANSFORMATION & ROI SIMULATOR
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
              Model your prospective annual infrastructure savings, net revenue expansion, and deployment velocity
              across different transformation scenarios and 90-day roadmaps.
            </p>
          </div>

          {/* Simulator Cockpit */}
          <div className="rounded-3xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* 1. Strategy Presets */}
            <div className="mb-8">
              <div className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase mb-3 flex items-center justify-between">
                <span>SELECT TRANSFORMATION SCENARIO</span>
                <span className="text-[#6324FC] font-semibold">{selectedPreset.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(Object.keys(STRATEGY_PRESETS) as ScenarioType[]).map((key) => {
                  const preset = STRATEGY_PRESETS[key];
                  const isSelected = activeScenario === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveScenario(key)}
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
                          {key === "DISCONNECTED_SILOS" ? "DEFICIT" : "SCALE"}
                        </span>
                      </div>
                      <div className="font-heading text-sm font-bold text-neutral-900 dark:text-white">
                        {preset.name}
                      </div>
                      <div className="text-[11px] text-neutral-600 dark:text-neutral-400 line-clamp-1 mt-1 font-sans">
                        {preset.tagline}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Annual Revenue / Digital Budget Slider */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#6324FC]" />
                  <span className="font-heading text-xs tracking-wider uppercase text-neutral-800 dark:text-neutral-200">
                    ANNUAL DIGITAL REVENUE / OPERATION BUDGET:
                  </span>
                </div>
                <div className="font-heading text-lg font-bold text-[#6324FC]">
                  ${(annualRevenueBudget / 1000).toFixed(0)}K / YEAR
                </div>
              </div>
              <input
                type="range"
                min="250000"
                max="5000000"
                step="50000"
                value={annualRevenueBudget}
                onChange={(e) => setAnnualRevenueBudget(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6324FC]"
              />
              <div className="flex justify-between text-[11px] text-neutral-600 dark:text-neutral-400 font-heading mt-2">
                <span>$250K (Growing SME)</span>
                <span>$1.2M (Mid-Market Scale)</span>
                <span>$5M+ (Enterprise Organization)</span>
              </div>
            </div>

            {/* 3. Dynamic Telemetry Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Cost Savings */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>INFRA & TECH DEBT SAVED</span>
                  <DollarSign className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicTelemetry.infraSavings > 0 ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {dynamicTelemetry.infraSavings > 0 ? `-$${(dynamicTelemetry.infraSavings / 1000).toFixed(0)}K` : `+$${(Math.abs(dynamicTelemetry.infraSavings) / 1000).toFixed(0)}K Waste`}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicTelemetry.infraSavings > 0 ? "Saved annually in server/tool consolidation" : "Uncontrolled recurring SaaS bloat"}
                </div>
              </div>

              {/* Net Revenue Surge */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>PROJECTED REVENUE EXPANSION</span>
                  <TrendingUp className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicTelemetry.netRevenueSurge > 50000 ? "#00E5FF" : "#FF2D55",
                  }}
                >
                  +${(dynamicTelemetry.netRevenueSurge / 1000).toFixed(0)}K/yr
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {selectedPreset.croLift} Net Conversion Surge
                </div>
              </div>

              {/* Feature Velocity Multiplier */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>ENGINEERING SPRINT VELOCITY</span>
                  <Zap className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="font-heading text-3xl font-bold text-[#6324FC]">
                  {dynamicTelemetry.velocity}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  Faster feature rollout with Edge CI/CD
                </div>
              </div>

              {/* Conversion CRO Gain */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>FUNNEL EFFICIENCY GAIN</span>
                  <Target className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: activeScenario !== "DISCONNECTED_SILOS" ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {dynamicTelemetry.croGain}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  Through UX friction elimination
                </div>
              </div>
            </div>

            {/* 4. Interactive 90-Day Roadmap Visualizer */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-black/5 dark:border-white/5">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase">
                  <Workflow className="w-4 h-4 text-[#6324FC]" />
                  <span>ACTIONABLE 90-DAY DIGITAL TRANSFORMATION ROADMAP</span>
                </div>
                <span className="text-[10px] font-heading px-2.5 py-0.5 rounded-full bg-[#6324FC]/10 text-[#6324FC] uppercase font-bold">
                  MILESTONES DEFINED UPFRONT
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedPreset.roadmapPhases.map((phase, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0e0e18] border border-black/10 dark:border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-heading tracking-widest text-[#6324FC] uppercase font-bold">
                          {phase.phase} // {phase.month}
                        </span>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <h4 className="font-heading text-base font-bold text-neutral-900 dark:text-white mb-3">
                        {phase.title}
                      </h4>
                      <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                        {phase.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC] mt-1.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. 4-STAGE STRATEGIC PROTOCOL TABS                        */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#6324FC]" />
              <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                STRATEGIC EXECUTION PROTOCOL
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
              HOW WE DELIVER DIGITAL TRANSFORMATION
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
                  STAGE {protocolStages[activeProtocolTab].id} // ADVISORY & EXECUTION PROTOCOL
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
                  {activeProtocolTab === 0 && <Eye className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 1 && <Compass className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 2 && <Cpu className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 3 && <BarChart3 className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                </div>
                <div className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Zero Theory Gap
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  We bridge strategy and production engineering under one roof with direct deployment responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SIDE-BY-SIDE BATTLECARD COMPARISON                     */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100/40 dark:bg-[#07070b]/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-600 dark:text-rose-400 text-xs font-heading tracking-widest uppercase mb-4">
              <span>HEAD-TO-HEAD BATTLECARD</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
              IVORY TOWER CONSULTING VS INJAAZH STRATEGY
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
              Why high-concurrency commercial scale-ups reject 100-page slide decks and partner with Injaazh for real engineering execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Traditional Consultancies */}
            <div className="p-8 sm:p-10 rounded-3xl bg-rose-500/[0.03] dark:bg-rose-950/[0.12] border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Ivory Tower Consultancies
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-500 uppercase font-bold">
                    THEORY ONLY
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.ivoryTower.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-300 font-heading tracking-wider uppercase font-semibold">
                Outcome: Expensive PDFs that collect dust, wasted engineering budgets, and zero revenue acceleration.
              </div>
            </div>

            {/* Right: Injaazh Strategy & Engineering */}
            <div className="p-8 sm:p-10 rounded-3xl bg-emerald-500/[0.04] dark:bg-emerald-950/[0.15] border border-emerald-500/30 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FFA3]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Injaazh Pragmatic Engineering Strategy
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                    END-TO-END EXECUTION
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.injaazhStrategy.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-neutral-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300 font-heading tracking-wider uppercase font-semibold flex items-center justify-between">
                <span>Outcome: Modernized cloud infrastructure, clear KPI visibility, and compounding revenue scale.</span>
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. BUSINESS INTELLIGENCE TOOLING ECOSYSTEM                */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#6324FC]" />
                <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                  ENTERPRISE BI INFRASTRUCTURE
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR DATA & TELEMETRY STACK
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              We engineer enterprise data pipelines and visual dashboards using industry-standard cloud warehouses and observability platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyTools.map((tool, i) => (
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
              Clear, transparent answers about our digital strategy engagements, BI dashboards, and execution models.
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
            <span>COMMISSION YOUR DIGITAL TRANSFORMATION SPRINT</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight mb-8">
            READY TO MODERNIZE YOUR OPERATIONS <br className="hidden md:block" />
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              AND ACCELERATE MARKET SHARE?
            </span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Schedule a confidential 30-minute discovery consultation. Our senior digital architects will evaluate your current technology stack and deliver an actionable 90-day modernization roadmap within 24 hours.
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
                START YOUR STRATEGY AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-[#00FFA3] group-hover:translate-x-1.5 transition-all duration-300" />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
