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
  PenTool,
  BookOpen,
  Feather,
  Heart,
  MessageSquare,
  FileText,
  Sliders,
  Sparkles,
  Layers,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  ShieldCheck,
  Quote,
  Flame,
  MousePointer2,
  Check,
  AlignLeft,
  Copy,
  Clock,
  Award,
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

      {/* Corner border accents on hover */}
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
type ContentFormatType = "DIRECT_RESPONSE" | "EXECUTIVE_EDITORIAL" | "SEO_TOPIC_CLUSTER" | "COMMODITY_MILL";
type ToneType = "ENTERPRISE_AUTHORITY" | "SILICON_VALLEY" | "DIRECT_RESPONSE";

interface ContentPreset {
  id: ContentFormatType;
  name: string;
  tagline: string;
  badge: string;
  accent: string;
  dwellTimeBase: string;
  scrollDepth: string;
  conversionLift: string;
  authorityScore: number;
  tones: Record<
    ToneType,
    {
      label: string;
      headline: string;
      body: string;
      cta: string;
    }
  >;
}

const CONTENT_PRESETS: Record<ContentFormatType, ContentPreset> = {
  DIRECT_RESPONSE: {
    id: "DIRECT_RESPONSE",
    name: "Conversion Copywriting & Sales Funnels",
    tagline: "High-Ticket B2B Landing Pages, Objection Neutralization & Offer Stacking",
    badge: "REVENUE ACCELERATOR",
    accent: "#6324FC",
    dwellTimeBase: "3m 50s",
    scrollDepth: "86% Deep Engagement",
    conversionLift: "+52% Inbound Inquiries",
    authorityScore: 98,
    tones: {
      ENTERPRISE_AUTHORITY: {
        label: "Wall Street / Enterprise Authority",
        headline: "Institutional-Grade Infrastructure Built to Protect Margin & Accelerate Revenue.",
        body: "We eliminate technical fragility and modernize your enterprise stack with strict SLA guarantees. Zero downtime, SOC-2 compliance, and audit-ready data pipelines engineered for Fortune 500 standards.",
        cta: "Request Architecture Dossier →",
      },
      SILICON_VALLEY: {
        label: "Silicon Valley Disruptor",
        headline: "Stop Building Clunky Monoliths. Deploy at the Edge in Sub-100ms.",
        body: "Your users despise slow apps. We ship Next.js 15 architectures that annihilate latency and turn casual visitors into fanatical daily active users. Built fast. Scaled globally.",
        cta: "Ship Your Next Sprint →",
      },
      DIRECT_RESPONSE: {
        label: "High-Conversion Direct Response",
        headline: "Double Your Sales Qualified Pipeline Without Spending Another Dollar on Ads.",
        body: "Every second your website takes to load burns 20% of your paid traffic. We rewrite your copy and re-engineer your pages to guide prospects directly toward one frictionless buying decision.",
        cta: "Claim Your Free Conversion Audit →",
      },
    },
  },
  EXECUTIVE_EDITORIAL: {
    id: "EXECUTIVE_EDITORIAL",
    name: "Executive Thought Leadership & White Papers",
    tagline: "C-Suite Industry Authority, Research-Backed Papers & Institutional Credibility",
    badge: "PRESTIGE & TRUST",
    accent: "#00E5FF",
    dwellTimeBase: "5m 20s",
    scrollDepth: "79% Completion Rate",
    conversionLift: "+38% High-Value RFP Pipeline",
    authorityScore: 99,
    tones: {
      ENTERPRISE_AUTHORITY: {
        label: "Institutional Insight",
        headline: "The Algorithmic Shift: Why Enterprise Leaders Are Migrating to Edge Microservices.",
        body: "A comprehensive analysis of 120+ cloud migrations revealing how monolithic database bottlenecks drain annual EBITDA, and how distributed edge computing restores operational agility.",
        cta: "Download Research White Paper →",
      },
      SILICON_VALLEY: {
        label: "Future of Tech Paradigm",
        headline: "The Death of Server Hydration: Inside the React Server Components Revolution.",
        body: "Why legacy single-page applications are obsolete, and how visionary engineering teams are leveraging streaming SSR to dominate global Core Web Vitals rankings.",
        cta: "Read Executive Briefing →",
      },
      DIRECT_RESPONSE: {
        label: "Actionable Market Intelligence",
        headline: "How 8 Enterprise Brands Slashed Customer Acquisition Costs by 42%.",
        body: "Exposing the hidden conversion leaks in multi-touch B2B funnels with concrete benchmark data, attribution models, and replicable revenue playbooks.",
        cta: "Access the Case Study →",
      },
    },
  },
  SEO_TOPIC_CLUSTER: {
    id: "SEO_TOPIC_CLUSTER",
    name: "High-Velocity SEO Content Engine",
    tagline: "Topic Clusters, Commercial Intent & Compounding Organic Real Estate",
    badge: "COMPOUNDING TRAFFIC",
    accent: "#00FFA3",
    dwellTimeBase: "4m 10s",
    scrollDepth: "82% Read Rate",
    conversionLift: "+44% Organic Lead Flow",
    authorityScore: 97,
    tones: {
      ENTERPRISE_AUTHORITY: {
        label: "Definitive Guide Standard",
        headline: "Enterprise Cloud Security: The Definitive 2026 Architectural Framework.",
        body: "An exhaustive technical breakdown of zero-trust network access, edge firewalls, and cryptographic compliance for multinational distributed engineering organizations.",
        cta: "Explore the Complete Guide →",
      },
      SILICON_VALLEY: {
        label: "Builder's Playbook",
        headline: "Building Zero-Latency Next.js 15 Apps: What the Official Docs Left Out.",
        body: "Tactical performance patterns, cache revalidation secrets, and edge middleware optimization techniques tested on high-concurrency production deployments.",
        cta: "Inspect Architecture Blueprints →",
      },
      DIRECT_RESPONSE: {
        label: "High-Intent Solution Comparison",
        headline: "Next.js vs Headless Shopify: Which Architecture Drives Higher Net Profit?",
        body: "A side-by-side financial and technical comparison examining total cost of ownership, development velocity, checkout conversion rates, and server infrastructure overhead.",
        cta: "Compare Your Stack Options →",
      },
    },
  },
  COMMODITY_MILL: {
    id: "COMMODITY_MILL",
    name: "Generic Content Mill & AI Spun Text",
    tagline: "Word-Count Fluff, Zero Audience Resonance & Catastrophic Bounce Rates",
    badge: "COMMODITY FLUFF",
    accent: "#FF2D55",
    dwellTimeBase: "0m 26s",
    scrollDepth: "12% Immediate Bounce",
    conversionLift: "-18% Trust Degradation",
    authorityScore: 24,
    tones: {
      ENTERPRISE_AUTHORITY: {
        label: "Generic Filler",
        headline: "In today's fast-paced digital world, businesses need solutions.",
        body: "It is important for companies to consider digital tools. Our solutions help clients achieve their goals by offering quality services that improve everyday business processes.",
        cta: "Click here to read more",
      },
      SILICON_VALLEY: {
        label: "Bland Buzzword Salad",
        headline: "Synergize your holistic paradigm with next-gen synergy.",
        body: "We leverage innovative paradigms to optimize cross-functional outputs and streamline scalable bandwidth for disruptive market integration.",
        cta: "Learn more today",
      },
      DIRECT_RESPONSE: {
        label: "Unconvincing Pitch",
        headline: "Buy our service now because it is very good and cheap.",
        body: "We have the best prices in town. Contact us today to see how our team can help your website grow with our professional services.",
        cta: "Submit Form",
      },
    },
  },
};

// -------------------------------------------------------------
// Main Component
// -------------------------------------------------------------
export default function ContentClient() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simulator State
  const [activePreset, setActivePreset] = useState<ContentFormatType>("DIRECT_RESPONSE");
  const [activeTone, setActiveTone] = useState<ToneType>("ENTERPRISE_AUTHORITY");
  const [publishingVelocity, setPublishingVelocity] = useState<number>(8); // articles / month
  const [activeProtocolTab, setActiveProtocolTab] = useState<number>(0);

  const selectedPreset = CONTENT_PRESETS[activePreset];
  const activeToneData = selectedPreset.tones[activeTone];

  // Dynamic Telemetry Calculations
  const dynamicTelemetry = useMemo(() => {
    const isCommodity = activePreset === "COMMODITY_MILL";
    const velocityFactor = publishingVelocity / 8;

    let organicViews = Math.round(publishingVelocity * 3850);
    let inboundLeads = Math.round(organicViews * (isCommodity ? 0.002 : 0.042));
    let retentionScore = isCommodity ? 22 : Math.min(99, Math.round(92 + velocityFactor * 2));

    return {
      organicViews,
      inboundLeads,
      retentionScore,
    };
  }, [activePreset, publishingVelocity]);

  // Top 4 Metrics
  const stats = [
    {
      value: "+120%",
      label: "AVG ENGAGEMENT SURGE",
      desc: "Native Western phrasing and psychological structuring keep qualified prospects reading longer.",
      badge: "RETENTION BENCHMARK",
      icon: TrendingUp,
      color: "#00FFA3",
    },
    {
      value: "3m 40s",
      label: "AVERAGE TIME ON PAGE",
      desc: "Deep dwell times that signal unshakeable topical authority to Google's ranking algorithms.",
      badge: "DWELL TIME SLA",
      icon: Clock,
      color: "#00E5FF",
    },
    {
      value: "100%",
      label: "SEO & CONVERSION OPTIMIZED",
      desc: "Every sentence mapped to target search intent and engineered to trigger direct commercial action.",
      badge: "ZERO WASTE",
      icon: Target,
      color: "#6324FC",
    },
    {
      value: "72hrs",
      label: "AVERAGE SPRINT DELIVERY",
      desc: "Rapid delivery of publication-ready copy with two comprehensive rounds of revisions included.",
      badge: "SPRINT SPEED",
      icon: Zap,
      color: "#FACC15",
    },
  ];

  // 3 Core Sub-Services
  const subServices = [
    {
      id: "01",
      title: "Conversion Copywriting & Direct Response",
      slug: "/services/content/copywriting",
      tagline: "High-Converting Sales Pages, BOFU Landing Pages & Conversion Wireframes",
      badge: "SUB-SERVICE 01 // SALES ENGINE",
      accent: "#6324FC",
      icon: Target,
      description:
        "Your website has 8 seconds to convince a visitor to stay. We write high-converting landing pages, sales letters, and micro-copy engineered around buyer psychology — neutralizing objections, building immediate trust, and driving one clear action.",
      highlights: [
        "Buyer psychology frameworks (PAS, AIDA, Problem-Agitation-Solution)",
        "Landing page wireframe copy mapped to visual UI component flows",
        "High-ticket B2B sales pages & product feature matrices",
        "Micro-copy, form labels, and friction-free CTA button text",
      ],
      techPills: ["DIRECT RESPONSE", "LANDING PAGES", "SALES FUNNELS", "OBJECTION STACK", "A/B TESTING"],
    },
    {
      id: "02",
      title: "Editorial Writing & Thought Leadership",
      slug: "/services/content/editorial-writing",
      tagline: "Executive Thought Leadership, Research White Papers & Deep Industry Op-Eds",
      badge: "SUB-SERVICE 02 // PRESTIGE",
      accent: "#00E5FF",
      icon: Feather,
      description:
        "Establish unshakeable executive authority in your market. We write research-backed white papers, C-level thought leadership op-eds, and deep technical documentation that make your brand the definitive benchmark in your industry.",
      highlights: [
        "C-Suite ghostwriting for LinkedIn, Medium, and tier-1 publications",
        "Comprehensive industry benchmark reports & research white papers",
        "Technical documentation & developer-friendly case studies",
        "Editorial op-eds crafted for US, UK, and Australian business leaders",
      ],
      techPills: ["THOUGHT LEADERSHIP", "WHITE PAPERS", "EXECUTIVE GHOSTWRITING", "CASE STUDIES"],
    },
    {
      id: "03",
      title: "Brand Narrative & Core Positioning",
      slug: "/services/content/brand-narrative",
      tagline: "Origin Stories, Tone of Voice Guidelines & Strategic Mission Frameworks",
      badge: "SUB-SERVICE 03 // IDENTITY",
      accent: "#00FFA3",
      icon: Heart,
      description:
        "A compelling brand narrative turns indifferent browsers into loyal brand advocates. We codify your company's core mission, origin story, and comprehensive Tone of Voice documentation so every touchpoint speaks with consistent authority.",
      highlights: [
        "Core brand origin stories & strategic positioning manifestos",
        "Comprehensive Tone of Voice documentation & editorial styleguides",
        "Customer journey storytelling across omnichannel touchpoints",
        "Internal brand messaging playbooks for marketing & sales pods",
      ],
      techPills: ["BRAND NARRATIVE", "TONE OF VOICE", "POSITIONING PLAYBOOK", "MESSAGING MATRIX"],
    },
  ];

  // 4-Stage Protocol Tabs
  const protocolStages = [
    {
      id: "01",
      title: "Audience Psychology & Voice Calibration",
      subtitle: "Buyer Profiling & Tone Mapping",
      description:
        "We dissect your target market's deepest pain points, skepticism triggers, and vocabulary preferences across the US, UK, and Australia. We calibrate exact tone guidelines before drafting a single word.",
      deliverables: ["Target Buyer Persona Matrix", "Objection & Skepticism Inventory", "Tone of Voice Guide", "Core Value Proposition Doc"],
      icon: MessageSquare,
      color: "#6324FC",
    },
    {
      id: "02",
      title: "Information Architecture & Wireframing",
      subtitle: "Eye-Tracking Layout & Hierarchy",
      description:
        "Great copy fails if layout structure is chaotic. We map content to modern UI/UX wireframes — engineering reading rhythms, visual pauses, and scannable subheadings that pull readers smoothly toward conversion.",
      deliverables: ["Figma Copy Wireframe Map", "Visual Hierarchy Blueprint", "Skimmable Subheading Flow", "Primary & Secondary CTA Mapping"],
      icon: Layers,
      color: "#00E5FF",
    },
    {
      id: "03",
      title: "Persuasive Copywriting & Editorial Craft",
      subtitle: "Human-Penned Native Western Craftsmanship",
      description:
        "Zero generic AI generation. Our senior native copywriters craft every paragraph with persuasive cadence, active voice, and concrete data proof-points tailored specifically to high-ACV decision-makers.",
      deliverables: ["Full-Length Production Draft", "Two Complete Revision Cycles", "SEO Meta & Schema Injections", "Micro-Copy & Form Validation Texts"],
      icon: PenTool,
      color: "#00FFA3",
    },
    {
      id: "04",
      title: "Conversion Attribution & Iterative Scaling",
      subtitle: "A/B Testing & Revenue Tracking",
      description:
        "We don't just deliver text and vanish. We track scroll depth, CTA click-through rates, and bounce metrics — systematically split-testing headlines and value props to maximize customer acquisition ROI.",
      deliverables: ["PostHog Heatmap Diagnostics", "A/B Variant Copy Assets", "Quarterly Content Audit", "Executive Attribution Report"],
      icon: Award,
      color: "#FACC15",
    },
  ];

  // Battlecard Comparison
  const battlecardComparison = {
    genericMills: [
      "Soulless AI-spun commodity content packed with buzzword fluff and zero point of view",
      "Written to hit meaningless word counts rather than to answer real buyer objections",
      "Blatant grammatical inconsistencies and awkward phrasing that destroys Western client trust",
      "No conversion architecture, weak calls to action, and massive 70%+ bounce rates",
      "Treated as an afterthought rather than a primary revenue-generating asset",
    ],
    injaazhNarrative: [
      "100% human-crafted editorial writing by expert copywriters with deep industry specialization",
      "Engineered around buyer psychology, clear value props, and frictionless action triggers",
      "Flawless native American, British, or Australian English tuned to local market expectations",
      "Integrated directly into high-converting UI wireframes with Core Web Vitals SEO tags",
      "Tested and refined using analytics data to continuously maximize sales qualified leads",
    ],
  };

  // Tooling Grid
  const contentTools = [
    { name: "Grammarly Business", category: "Style & Clarity", desc: "Real-time tone calibration and native grammar precision.", color: "#15C39A" },
    { name: "SurferSEO NLP", category: "Search Semantic Engine", desc: "Natural Language Processing entity density and topical clustering.", color: "#EC4899" },
    { name: "Clearscope Enterprise", category: "Content Optimization", desc: "Algorithmic keyword grade scoring against top ranking competitors.", color: "#6324FC" },
    { name: "Hemingway Editor", category: "Readability Benchmark", desc: "Eliminating passive voice and cognitive friction for effortless reading.", color: "#00E5FF" },
    { name: "Notion Workspace", category: "Collaborative Briefs", desc: "Centralized editorial calendars and real-time client feedback loops.", color: "#000000" },
    { name: "Google Analytics 4", category: "Dwell Telemetry", desc: "Tracking scroll depth, session duration, and assisted conversions.", color: "#FACC15" },
    { name: "Hotjar Heatmaps", category: "Reader Eye Tracking", desc: "Visualizing where prospects hesitate, read, or drop off on landing pages.", color: "#FF3C00" },
    { name: "Figma Copy Wireframes", category: "UI Synchronization", desc: "Aligning copy character counts with responsive web components.", color: "#A259FF" },
  ];

  // FAQs
  const faqs = [
    {
      q: "Do you write in American, British, or Australian English?",
      a: "All three. We adapt spelling, cultural nuances, idiom selection, and formality levels strictly to your target market: American English for US audiences, British English for the UK, and localized Australian English. For international brands, we craft unified global English or market-specific localized variants.",
    },
    {
      q: "Is your content generated by AI or written by humans?",
      a: "Every piece of deliverable copy and editorial content is 100% human-written and edited by senior native copywriters. While we use advanced AI tools for initial data mining, competitor scraping, and keyword clustering, human insight, storytelling, and buyer psychology cannot be synthesized. Google algorithms actively demote generic AI content.",
    },
    {
      q: "What is your revision policy and turnaround time?",
      a: "Standard website copy and editorial articles are delivered within 72 hours of brief approval. Every engagement includes two complete rounds of revisions with zero hidden fees. We collaborate directly with your team inside shared Notion or Figma workspaces until every phrase meets your exact vision.",
    },
    {
      q: "Can you handle complex technical and B2B SaaS topics?",
      a: "Yes. Our writers have deep backgrounds across cloud architecture, cybersecurity, enterprise SaaS, logistics, fintech, and e-commerce. We translate dense technical architectures and API documentation into crisp, compelling value propositions that C-level decision-makers and developers both respect.",
    },
    {
      q: "How does copywriting work with web development and SEO?",
      a: "Copywriting, web development, and SEO are inseparable pillars at Injaazh. Our copywriters map text to responsive UI components before code is written, while our SEO team provides semantic keyword clusters and schema requirements. The result is a unified digital asset that loads fast, ranks high, and converts immediately.",
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
              <span>BRAND NARRATIVE & COPYWRITING // V2.5</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-heading tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>100% HUMAN EXPERT CRAFT</span>
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            WORDS THAT COMMAND ATTENTION. <br className="hidden md:block" />
            NARRATIVES THAT{" "}
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              CLOSE ENTERPRISE DEALS.
            </span>
          </h1>

          <p className="font-sans font-normal text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl mb-10 border-l-2 border-[#6324FC] pl-6">
            A beautiful website that fails to articulate value is just an expensive digital brochure.
            We engineer high-converting direct response copywriting, executive thought leadership,
            and authoritative brand stories designed to captivate Western markets and command premium pricing.
          </p>

          {/* Quick Assurance Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
            {[
              "Native US, UK & AU English",
              "Conversion Psychology Frameworks",
              "SEO Search Intent Optimization",
              "Executive Ghostwriting",
              "72-Hour Rapid Delivery",
              "Zero AI Fluff Guarantee",
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
                  COMMISSION YOUR NARRATIVE BRIEF
                  <ArrowUpRight className="w-5 h-5 text-[#6324FC] group-hover:text-[#00FFA3] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>

            <a
              href="#sub-services"
              className="px-8 py-4 sm:py-5 rounded-full text-base font-heading tracking-wider border border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 font-semibold text-neutral-800 dark:text-neutral-200"
            >
              EXPLORE 3 CONTENT DISCIPLINES
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
                  EDITORIAL & COPYWRITING DIVISIONS
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR 3 CONTENT DISCIPLINES
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              Explore our three specialized disciplines: direct response sales copywriting,
              executive thought leadership, and foundational brand storytelling.
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
                      EXPLORE {sub.title.split(" ")[0]} ARCHITECTURE
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
      {/* 4. INTERACTIVE CONTENT VELOCITY & CONVERSION SIMULATOR    */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10 bg-neutral-100/50 dark:bg-[#08080c]/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/30 text-[#6324FC] text-xs font-heading tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>NARRATIVE REVENUE ENGINE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
              EDITORIAL VELOCITY & CONVERSION SIMULATOR
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
              Model your prospective dwell time, qualified inbound lead growth, and reader engagement
              across different editorial architectures and brand voice calibrations.
            </p>
          </div>

          {/* Simulator Cockpit */}
          <div className="rounded-3xl bg-white dark:bg-[#0c0c14] border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* 1. Format Presets */}
            <div className="mb-8">
              <div className="text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase mb-3 flex items-center justify-between">
                <span>SELECT EDITORIAL ARCHITECTURE</span>
                <span className="text-[#6324FC] font-semibold">{selectedPreset.badge}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {(Object.keys(CONTENT_PRESETS) as ContentFormatType[]).map((key) => {
                  const preset = CONTENT_PRESETS[key];
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
                          {key === "COMMODITY_MILL" ? "AVOID" : "HIGH-CONV"}
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

            {/* 2. Interactive Publishing Velocity Slider */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#6324FC]" />
                  <span className="font-heading text-xs tracking-wider uppercase text-neutral-800 dark:text-neutral-200">
                    MONTHLY PUBLISHING VELOCITY:
                  </span>
                </div>
                <div className="font-heading text-lg font-bold text-[#6324FC]">
                  {publishingVelocity} STRATEGIC ASSETS / MO
                </div>
              </div>
              <input
                type="range"
                min="4"
                max="30"
                step="2"
                value={publishingVelocity}
                onChange={(e) => setPublishingVelocity(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6324FC]"
              />
              <div className="flex justify-between text-[11px] text-neutral-600 dark:text-neutral-400 font-heading mt-2">
                <span>4 Assets (Focused Core)</span>
                <span>8 Assets (Growth Engine)</span>
                <span>30 Assets (Category Dominance)</span>
              </div>
            </div>

            {/* 3. Live Telemetry Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Dwell Time */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>AVERAGE DWELL TIME</span>
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: activePreset !== "COMMODITY_MILL" ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {selectedPreset.dwellTimeBase}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {selectedPreset.scrollDepth}
                </div>
              </div>

              {/* Monthly Qualified Leads */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>PROJECTED QUALIFIED LEADS</span>
                  <Target className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicTelemetry.inboundLeads > 50 ? "#00E5FF" : "#FF2D55",
                  }}
                >
                  {dynamicTelemetry.inboundLeads} Inquiries/mo
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {selectedPreset.conversionLift}
                </div>
              </div>

              {/* Monthly Impressions */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>ESTIMATED ENGAGED SESSIONS</span>
                  <TrendingUp className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="font-heading text-3xl font-bold text-[#6324FC]">
                  {dynamicTelemetry.organicViews.toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  Targeted high-intent readers
                </div>
              </div>

              {/* Authority Score */}
              <div className="p-5 rounded-2xl bg-white dark:bg-black/30 border border-black/5 dark:border-white/5">
                <div className="text-[11px] font-heading tracking-wider uppercase text-neutral-600 dark:text-neutral-400 mb-1 flex items-center justify-between">
                  <span>AUTHORITY DENSITY SCORE</span>
                  <Award className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div
                  className="font-heading text-3xl font-bold"
                  style={{
                    color: dynamicTelemetry.retentionScore > 80 ? "#00FFA3" : "#FF2D55",
                  }}
                >
                  {dynamicTelemetry.retentionScore}/100
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                  {dynamicTelemetry.retentionScore > 80 ? "🟢 Unshakeable Market Trust" : "🔴 Low Credibility"}
                </div>
              </div>
            </div>

            {/* 4. Live Interactive Copy & Tone Sandbox */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-black/5 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-neutral-600 dark:text-neutral-400 uppercase">
                  <Quote className="w-4 h-4 text-[#6324FC]" />
                  <span>INTERACTIVE TONE OF VOICE SANDBOX</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(["ENTERPRISE_AUTHORITY", "SILICON_VALLEY", "DIRECT_RESPONSE"] as ToneType[]).map((tKey) => (
                    <button
                      key={tKey}
                      onClick={() => setActiveTone(tKey)}
                      className={`px-3 py-1 text-xs font-heading tracking-wider uppercase rounded-full border transition-all duration-300 ${
                        activeTone === tKey
                          ? "bg-[#6324FC] text-white border-[#6324FC]"
                          : "bg-white dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border-black/10 dark:border-white/10 hover:border-[#6324FC]"
                      }`}
                    >
                      {tKey === "ENTERPRISE_AUTHORITY" && "Enterprise"}
                      {tKey === "SILICON_VALLEY" && "Tech Disruptor"}
                      {tKey === "DIRECT_RESPONSE" && "Direct Response"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sandbox Card Display */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c0c16] border border-black/10 dark:border-white/10 shadow-lg relative">
                <div className="inline-block text-[10px] font-heading tracking-widest uppercase px-2.5 py-1 rounded-md bg-[#6324FC]/10 text-[#6324FC] mb-4 font-bold">
                  ACTIVE TONE: {activeToneData.label}
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4 leading-snug">
                  &ldquo;{activeToneData.headline}&rdquo;
                </h3>

                <p className="font-sans text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 max-w-3xl">
                  {activeToneData.body}
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6324FC] text-white text-xs font-heading tracking-widest uppercase font-bold shadow-md cursor-pointer hover:bg-[#521cd6] transition-colors">
                  <span>{activeToneData.cta}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. 4-STAGE CONTENT ARCHITECTURE PROTOCOL TABS             */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#6324FC]" />
              <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                CONTENT CRAFT PROTOCOL
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
              HOW WE ENGINEER HIGH-IMPACT NARRATIVES
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

          {/* Active Tab Content Card */}
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
                  STAGE {protocolStages[activeProtocolTab].id} // CRAFT PROTOCOL
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
                  {activeProtocolTab === 0 && <MessageSquare className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 1 && <Layers className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 2 && <PenTool className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                  {activeProtocolTab === 3 && <Award className="w-10 h-10" style={{ color: protocolStages[activeProtocolTab].color }} />}
                </div>
                <div className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Zero AI Artifacts
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Every paragraph is tailored for human comprehension and psychological resonance in competitive Western markets.
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
              GENERIC CONTENT MILLS VS INJAAZH NARRATIVE
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
              Why leading international tech and commercial brands avoid cheap freelance mills and choose Injaazh for persuasive authority.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Generic Content Mills */}
            <div className="p-8 sm:p-10 rounded-3xl bg-rose-500/[0.03] dark:bg-rose-950/[0.12] border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Generic Content Mills & AI Fluff
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-500 uppercase font-bold">
                    LOW CREDIBILITY
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.genericMills.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-300 font-heading tracking-wider uppercase font-semibold">
                Outcome: Lost visitor trust, zero conversion attribution, and brand perception erosion.
              </div>
            </div>

            {/* Right: Injaazh Narrative */}
            <div className="p-8 sm:p-10 rounded-3xl bg-emerald-500/[0.04] dark:bg-emerald-950/[0.15] border border-emerald-500/30 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FFA3]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                      Injaazh Narrative Engineering
                    </h3>
                  </div>
                  <span className="text-[10px] font-heading tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                    PREMIUM AUTHORITY
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {battlecardComparison.injaazhNarrative.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-neutral-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300 font-heading tracking-wider uppercase font-semibold flex items-center justify-between">
                <span>Outcome: Deep dwell times, high customer conversion rates, and premium brand prestige.</span>
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CONTENT INTELLIGENCE TOOLING ECOSYSTEM                 */}
      {/* ========================================================= */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#6324FC]" />
                <span className="font-heading text-xs tracking-[0.3em] text-[#6324FC] uppercase">
                  EDITORIAL TOOLING
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
                OUR EDITORIAL SUITE
              </h2>
            </div>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-md text-base leading-relaxed">
              We leverage advanced NLP modeling, readability analytics, and behavioral heatmaps to fine-tune every sentence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTools.map((tool, i) => (
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
              Clear, transparent answers regarding our copywriting frameworks, native English variants, and delivery timelines.
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
            <span>COMMISSION YOUR CONTENT SPRINT</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight mb-8">
            READY TO TURN YOUR WORDS <br className="hidden md:block" />
            <span className="italic bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#00FFA3] bg-clip-text text-transparent">
              INTO A REVENUE ENGINE?
            </span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Send us your website URL or project brief. Within 24 hours, our senior narrative architects will provide a comprehensive copywriting audit and messaging opportunity blueprint.
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
                COMMISSION YOUR BRIEF
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-[#00FFA3] group-hover:translate-x-1.5 transition-all duration-300" />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
