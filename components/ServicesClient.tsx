"use client";

import { useState, useMemo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  LayoutGrid,
  List,
  Sparkles,
  Zap,
  CheckCircle2,
  Code2,
  Database,
  Cloud,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Search,
  Layers,
  Cpu,
  Rocket,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";

// Primary Services Definition with 18 Granular Sub-Services
export interface ServicePillar {
  id: string;
  categoryKey: string;
  title: string;
  tagline: string;
  slug: string;
  desc: string;
  image: string;
  benchmarks: { label: string; value: string }[];
  deliverables: string[];
  technologies: string[];
  subServices: { name: string; path: string; desc: string }[];
}

const servicePillars: ServicePillar[] = [
  {
    id: "web-dev",
    categoryKey: "WEB DEV",
    title: "Web Development",
    tagline: "Enterprise Next.js Architectures & Headless Commerce",
    slug: "web-dev",
    desc: "We engineer ultra-performant, scalable digital platforms using Next.js, React, and Headless architectures engineered for absolute velocity, security, and conversion.",
    image: "/assets/enterprise_ecommerce_1780213870802.png",
    benchmarks: [
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Largest Contentful Paint", value: "< 0.8s" },
      { label: "Infrastructure Uptime", value: "99.99%" },
    ],
    deliverables: [
      "Bespoke Web Applications",
      "Headless E-Commerce Integration",
      "Microservices & Serverless APIs",
      "Automated CI/CD Pipelines",
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "Vercel Edge", "Supabase", "Shopify Plus"],
    subServices: [
      {
        name: "Next.js Architectures",
        path: "/services/web-dev/nextjs-architectures",
        desc: "Edge-rendered, server-driven enterprise web architectures designed for global scalability.",
      },
      {
        name: "Headless Commerce",
        path: "/services/web-dev/headless-commerce",
        desc: "Decoupled Shopify Plus and custom transaction engines for high-volume retailers.",
      },
      {
        name: "Custom Web Apps",
        path: "/services/web-dev/custom-web-apps",
        desc: "Complex SaaS applications, client portals, and bespoke management dashboards.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    categoryKey: "UI/UX DESIGN",
    title: "UI/UX Design Systems",
    tagline: "Bespoke Digital Design & Interaction Engineering",
    slug: "ui-ux-design",
    desc: "Data-driven wireframing, enterprise design systems, and cinematic interaction design that transform casual visitors into high-LTV brand advocates.",
    image: "/assets/b2b_saas_dashboard_1780213845016.png",
    benchmarks: [
      { label: "Average Conversion Lift", value: "+140%" },
      { label: "Cumulative Layout Shift", value: "< 0.01" },
      { label: "Accessibility Score", value: "WCAG AAA" },
    ],
    deliverables: [
      "Enterprise Figma Design Systems",
      "Interactive High-Fidelity Prototypes",
      "Motion Graphics & Micro-Animations",
      "Multi-Brand Token Frameworks",
    ],
    technologies: ["Figma", "Framer Motion", "Three.js", "Tokens Studio", "Adobe CC", "Tailwind Design Tokens"],
    subServices: [
      {
        name: "Brand Identity",
        path: "/services/ui-ux-design/brand-identity",
        desc: "Distinctive corporate visual identities, typography guidelines, and brand books.",
      },
      {
        name: "Design Systems",
        path: "/services/ui-ux-design/design-systems",
        desc: "Scalable component libraries, tokens, and multi-platform design standards.",
      },
      {
        name: "Motion Graphics",
        path: "/services/ui-ux-design/motion-graphics",
        desc: "Cinematic 3D WebGL visuals, scroll-driven narratives, and dynamic micro-interactions.",
      },
    ],
  },
  {
    id: "seo",
    categoryKey: "SEO",
    title: "Technical SEO & AEO",
    tagline: "Algorithmic Search Domination & Generative Engine Optimization",
    slug: "seo",
    desc: "Deep technical audits, semantic schema engineering, and aggressive keyword strategies engineered to dominate traditional search engines and AI Overviews.",
    image: "/assets/nexus_esports_final.webp",
    benchmarks: [
      { label: "Organic Traffic Surge", value: "4.2x" },
      { label: "High-Intent #1 Rankings", value: "85%+" },
      { label: "Technical Crawl Errors", value: "0" },
    ],
    deliverables: [
      "Full-Stack Technical Audit",
      "Semantic Schema.org Architectures",
      "Programmatic Keyword Matrix",
      "Core Web Vitals Remediation",
    ],
    technologies: ["Semrush", "Ahrefs", "Google Search Console", "Screaming Frog", "Schema.org", "Log Analytics"],
    subServices: [
      {
        name: "Technical Audits",
        path: "/services/seo/technical-audits",
        desc: "Exhaustive audits of crawlability, indexing, rendering bottlenecks, and Core Web Vitals.",
      },
      {
        name: "Keyword Strategy",
        path: "/services/seo/keyword-strategy",
        desc: "High-intent transactional and programmatic keyword mapping for commercial dominance.",
      },
      {
        name: "Local Rankings",
        path: "/services/seo/local-rankings",
        desc: "Hyper-targeted regional search dominance, Google Business optimization, and local schemas.",
      },
    ],
  },
  {
    id: "marketing",
    categoryKey: "MARKETING",
    title: "Growth Marketing & PPC",
    tagline: "ROI-Obsessed Paid Acquisition & Conversion Automation",
    slug: "marketing",
    desc: "Predictable, high-leverage paid acquisition campaigns, automated customer lifecycles, and conversion rate optimization engineered for aggressive revenue scale.",
    image: "/assets/themes_jet_final.webp",
    benchmarks: [
      { label: "Average Campaign ROAS", value: "3.8x" },
      { label: "Customer Acquisition Cost", value: "-35%" },
      { label: "Funnel Velocity", value: "+65%" },
    ],
    deliverables: [
      "Cross-Channel Paid Media Strategy",
      "Automated Retention Pipelines",
      "Conversion Rate Optimization (CRO)",
      "Multi-Touch Attribution Modeling",
    ],
    technologies: ["Google Ads", "Meta Ads", "PostHog", "Klaviyo", "Google Analytics 4", "Hotjar"],
    subServices: [
      {
        name: "PPC Campaigns",
        path: "/services/marketing/ppc-campaigns",
        desc: "High-ROAS search, display, and social advertising architectures focused on revenue.",
      },
      {
        name: "Growth Automation",
        path: "/services/marketing/growth-automation",
        desc: "Automated onboarding, retention, and reactivation email and messaging workflows.",
      },
      {
        name: "Conversion Optimization",
        path: "/services/marketing/conversion-optimization",
        desc: "Algorithmic A/B testing, user journey heatmaps, and frictionless checkout optimization.",
      },
    ],
  },
  {
    id: "content",
    categoryKey: "CONTENT",
    title: "Content & Narrative",
    tagline: "Persuasive Storytelling & Authoritative Editorial Strategy",
    slug: "content",
    desc: "Authoritative editorial content, corporate storytelling, and strategic copywriting designed to build unshakeable brand equity and commercial trust.",
    image: "/assets/novacore_esports_final.webp",
    benchmarks: [
      { label: "Engagement Time Lift", value: "+220%" },
      { label: "Editorial Quality Score", value: "98/100" },
      { label: "Organic Referral Backlinks", value: "High-DA" },
    ],
    deliverables: [
      "Executive Thought Leadership",
      "Conversion Landing Page Copy",
      "Technical Documentation & Guides",
      "Brand Narrative Manuals",
    ],
    technologies: ["SurferSEO", "Clearscope", "Grammarly Business", "Editorial Frameworks", "Content Intelligence"],
    subServices: [
      {
        name: "Copywriting",
        path: "/services/content/copywriting",
        desc: "Compelling sales pages, landing copy, and value proposition messaging frameworks.",
      },
      {
        name: "Editorial Writing",
        path: "/services/content/editorial-writing",
        desc: "In-depth industry whitepapers, research reports, and technical thought leadership articles.",
      },
      {
        name: "Brand Narrative",
        path: "/services/content/brand-narrative",
        desc: "Authentic corporate story, brand mission frameworks, and distinctive voice guidelines.",
      },
    ],
  },
  {
    id: "strategy",
    categoryKey: "STRATEGY",
    title: "Strategy & Intelligence",
    tagline: "Data-Driven Digital Transformation & Market Positioning",
    slug: "strategy",
    desc: "Executive-level digital strategy, competitive intelligence, and user experience audits to align digital products with aggressive commercial objectives.",
    image: "/assets/aka_moving_final.webp",
    benchmarks: [
      { label: "Board-Ready Roadmap", value: "100%" },
      { label: "Architectural De-risking", value: "Guaranteed" },
      { label: "Data Architecture Unified", value: "Complete" },
    ],
    deliverables: [
      "Digital Transformation Roadmap",
      "Enterprise UX & Usability Audits",
      "Competitor Intelligence Reports",
      "Data Architecture Blueprints",
    ],
    technologies: ["Tableau", "PowerBI", "Mixpanel", "Notion Enterprise", "Miro", "Jira Enterprise"],
    subServices: [
      {
        name: "Digital Transformation",
        path: "/services/strategy/digital-transformation",
        desc: "Comprehensive modernization of legacy software, workflows, and customer touchpoints.",
      },
      {
        name: "Business Intelligence",
        path: "/services/strategy/business-intelligence",
        desc: "Unified executive analytics dashboards, data warehousing, and predictive reporting.",
      },
      {
        name: "Enterprise UX Audits",
        path: "/services/strategy/ux-audits",
        desc: "Heuristic usability reviews, drop-off analysis, and UX optimization roadmaps.",
      },
    ],
  },
];

// Tech Ecosystem Categories
const techEcosystem = [
  {
    category: "Frontend & Web Architecture",
    icon: Code2,
    tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / WebGL"],
  },
  {
    category: "Cloud, Edge & Backend",
    icon: Cloud,
    tools: ["Vercel Edge", "Node.js", "Supabase", "Cloudflare Workers", "Docker", "REST & GraphQL"],
  },
  {
    category: "E-Commerce & Headless CMS",
    icon: Database,
    tools: ["Shopify Plus", "Sanity.io", "Strapi", "Stripe Connect", "Algolia Search", "Medusa.js"],
  },
  {
    category: "SEO & Growth Intelligence",
    icon: TrendingUp,
    tools: ["Semrush", "Ahrefs", "Google Analytics 4", "PostHog", "Google Search Console", "Screaming Frog"],
  },
];

// Delivery Lifecycle Roadmap
const deliverySteps = [
  {
    number: "01",
    phase: "PHASE 01",
    title: "Market Discovery & Technical Audit",
    desc: "We analyze your competitive landscape, user behavior, and code performance to blueprint an unshakeable strategy.",
    icon: Search,
    tags: ["Competitive Intel", "Tech Audit", "Architecture Spec"],
  },
  {
    number: "02",
    phase: "PHASE 02",
    title: "Design System & Prototyping",
    desc: "We build pixel-perfect interactive prototypes and tokenized design systems designed for conversion and brand authority.",
    icon: Layers,
    tags: ["Design Tokens", "Conversion UX", "Micro-Interactions"],
  },
  {
    number: "03",
    phase: "PHASE 03",
    title: "High-Performance Engineering",
    desc: "We construct your software with Next.js, headless APIs, and rigorous automated testing for sub-second page loads.",
    icon: Cpu,
    tags: ["Next.js App Router", "Sub-second LCP", "Automated QA"],
  },
  {
    number: "04",
    phase: "PHASE 04",
    title: "Algorithmic SEO Scaling & Launch",
    desc: "We deploy with structured data, Google Indexing APIs, and proactive monitoring to ensure immediate search engine domination.",
    icon: Rocket,
    tags: ["JSON-LD Schemas", "Indexing APIs", "24/7 Telemetry"],
  },
];

const categoryFilterKeys = [
  "ALL",
  "WEB DEV",
  "UI/UX DESIGN",
  "SEO",
  "MARKETING",
  "CONTENT",
  "STRATEGY",
];

// -------------------------------------------------------------
// Interactive Service Card Component with Mouse Spotlight & Tilt
// -------------------------------------------------------------
function InteractiveServiceCard({
  svc,
  idx,
  onArchitect,
}: {
  svc: ServicePillar;
  idx: number;
  onArchitect: (service: string) => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/60 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(99,36,252,0.16)] dark:hover:shadow-[0_25px_60px_rgba(99,36,252,0.25)] transition-all duration-500 flex flex-col justify-between"
    >
      {/* Dynamic Mouse Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 36, 252, 0.16), transparent 70%)`
          ),
        }}
      />

      {/* Card Top: Image & Header Preview */}
      <div>
        <div className="relative w-full h-44 overflow-hidden bg-black/5">
          <Image
            src={svc.image}
            alt={svc.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* Index & Category Badge */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-heading uppercase tracking-widest text-white font-medium">
              0{idx + 1} // {svc.categoryKey}
            </span>

            <span className="w-7 h-7 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#6324FC] group-hover:border-[#6324FC] group-hover:scale-110 transition-all duration-300 shadow-sm">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </div>

          {/* Tagline overlay on bottom of image */}
          <div className="absolute bottom-3 left-3.5 right-3.5 z-20">
            <p className="font-heading text-[11px] text-white/95 font-medium tracking-wide drop-shadow line-clamp-1">
              {svc.tagline}
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3.5 relative z-20">
          <div>
            <Link href={`/services/${svc.slug}`} className="group-hover:text-[#6324FC] transition-colors block">
              <h2 className="font-heading text-xl sm:text-2xl capitalize tracking-tight font-bold mb-1.5 flex items-center justify-between">
                <span>{svc.title}</span>
                <ChevronRight className="w-4 h-4 text-primary/30 group-hover:text-[#6324FC] group-hover:translate-x-1 transition-all" />
              </h2>
            </Link>
            <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed line-clamp-2">
              {svc.desc}
            </p>
          </div>

          {/* Verified Benchmarks */}
          <div className="grid grid-cols-3 gap-1.5 py-2.5 border-y border-black/5 dark:border-white/5 text-center bg-black/[0.015] dark:bg-white/[0.02] rounded-xl px-2">
            {svc.benchmarks.map((bm, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading text-xs sm:text-sm font-bold text-[#6324FC]">
                  {bm.value}
                </span>
                <span className="text-[9px] text-primary/50 uppercase tracking-tight font-medium truncate">
                  {bm.label}
                </span>
              </div>
            ))}
          </div>

          {/* Specialized Sub-Architectures Pills */}
          <div className="space-y-1.5">
            <span className="text-[9px] font-heading uppercase tracking-widest text-primary/45 font-semibold block">
              Specialized Specs:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {svc.subServices.map((sub, sIdx) => (
                <Link
                  key={sIdx}
                  href={sub.path}
                  className="px-2.5 py-1 rounded-lg bg-black/[0.025] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-[#6324FC]/40 hover:bg-[#6324FC]/10 hover:text-[#6324FC] text-[11px] font-heading text-primary/80 transition-all duration-200"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Action Links */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 flex items-center justify-between gap-3 border-t border-black/5 dark:border-white/5 relative z-20">
        <Link
          href={`/services/${svc.slug}`}
          className="font-heading text-xs uppercase tracking-wider text-primary hover:text-[#6324FC] font-semibold flex items-center gap-1.5 transition-colors"
        >
          Deep Overview
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={() => onArchitect(svc.title)}
          className="px-3.5 py-1.5 rounded-full bg-[#6324FC]/10 hover:bg-[#6324FC] text-[#6324FC] hover:text-white border border-[#6324FC]/30 text-xs font-heading uppercase tracking-wider transition-all duration-300 font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(99,36,252,0.4)]"
        >
          Architect Project
        </button>
      </div>
    </motion.div>
  );
}

// -------------------------------------------------------------
// Interactive Execution Protocol Card with Mouse Spotlight & Hover Lift
// -------------------------------------------------------------
function ExecutionStepCard({
  step,
  idx,
}: {
  step: (typeof deliverySteps)[0];
  idx: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = step.icon;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative rounded-3xl p-6 sm:p-7 bg-black/[0.02] dark:bg-white/[0.03] hover:bg-white dark:hover:bg-[#0c0c12] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(99,36,252,0.16)] dark:hover:shadow-[0_25px_60px_rgba(99,36,252,0.28)] flex flex-col justify-between overflow-hidden cursor-default"
    >
      {/* Dynamic Mouse Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(350px circle at ${x}px ${y}px, rgba(99, 36, 252, 0.18), transparent 70%)`
          ),
        }}
      />

      {/* Decorative ambient corner glow on hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-[#6324FC]/15 to-[#00E5FF]/10 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card Content */}
      <div className="relative z-20 space-y-4">
        {/* Step Header: Number, Phase badge & Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-[#6324FC] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6324FC] group-hover:to-[#00E5FF] transition-all duration-300">
              {step.number}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading uppercase tracking-wider font-semibold bg-[#6324FC]/10 text-[#6324FC] border border-[#6324FC]/20">
              {step.phase}
            </span>
          </div>

          <div className="w-11 h-11 rounded-2xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 group-hover:border-[#6324FC] group-hover:bg-[#6324FC] text-[#6324FC] group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
            <Icon className="w-5 h-5 transition-transform duration-500" />
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-primary group-hover:text-[#6324FC] transition-colors duration-300">
            {step.title}
          </h3>
          <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed mt-2">
            {step.desc}
          </p>
        </div>
      </div>

      {/* Deliverable Tags */}
      <div className="relative z-20 pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-2">
        {step.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 font-mono text-[11px] text-primary/70 group-hover:border-[#6324FC]/30 group-hover:text-[#6324FC] group-hover:bg-[#6324FC]/5 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Expanding Gradient Progress Line on Hover */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#6324FC] transition-all duration-500 ease-out z-20" />
    </motion.div>
  );
}

// -------------------------------------------------------------
// Main Services Client
// -------------------------------------------------------------
export default function ServicesClient() {
  const { openModal } = useProjectModal();

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [hoveredListService, setHoveredListService] = useState<ServicePillar | null>(null);

  // Global cursor physics for list preview thumbnail
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Filtered Services
  const filteredServices = useMemo(() => {
    if (activeCategory === "ALL") return servicePillars;
    return servicePillars.filter((p) => p.categoryKey === activeCategory);
  }, [activeCategory]);

  return (
    <main className="w-full min-h-screen bg-background text-primary selection:bg-[#6324FC] selection:text-white pt-28 sm:pt-32 pb-24 font-sans relative overflow-x-hidden">
      
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#6324FC]/10 dark:bg-[#6324FC]/15 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] -left-40 w-[600px] h-[600px] bg-[#00E5FF]/5 dark:bg-[#00E5FF]/10 blur-[150px] pointer-events-none -z-10" />

      {/* Floating Cursor-Follow Preview Thumbnail for List View */}
      <AnimatePresence>
        {viewMode === "list" && hoveredListService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.75, rotate: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 left-0 w-[320px] h-[400px] rounded-3xl overflow-hidden pointer-events-none z-[100] hidden lg:block shadow-2xl border border-white/20 bg-black/90"
            style={{ x: cursorX, y: cursorY }}
          >
            <Image
              src={hoveredListService.image}
              alt={hoveredListService.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-heading uppercase text-white/70 tracking-widest block mb-1">
                {hoveredListService.categoryKey}
              </span>
              <h4 className="text-xl font-heading text-white font-bold tracking-tight">
                {hoveredListService.title}
              </h4>
              <p className="text-xs font-sans text-white/70 line-clamp-2 mt-1">
                {hoveredListService.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ========================================================
            1. HERO HEADER
            ======================================================== */}
        <section className="mb-16 lg:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md text-[10px] font-heading uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#6324FC] animate-pulse" />
              ENTERPRISE CAPABILITY SUITE // V2.5 ARCHITECTURE
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-heading uppercase tracking-[0.2em] text-green-600 dark:text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              100/100 Core Web Vitals Guarantee
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] capitalize">
                ENGINEERING <br />
                <span className="text-[#6324FC] italic">DIGITAL SUPREMACY</span> <br />
                AT ENTERPRISE SCALE.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="font-sans font-light text-base sm:text-lg text-primary/70 leading-relaxed max-w-md">
                We combine Next.js engineering, bespoke interaction design, and algorithmic search optimization to build resilient digital ecosystems that outrank competitors and maximize customer lifetime value.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. VERIFIED BENCHMARKS RIBBON
            ======================================================== */}
        <section className="mb-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-black/5 dark:divide-white/5">
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6324FC] mb-1">
                100/100
              </span>
              <span className="font-heading text-xs uppercase tracking-wider text-primary/60 font-medium">
                Core Web Vitals SLA
              </span>
            </div>

            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1">
                4.2x
              </span>
              <span className="font-heading text-xs uppercase tracking-wider text-primary/60 font-medium">
                Average Traffic Surge
              </span>
            </div>

            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00E5FF] mb-1">
                &lt; 0.8s
              </span>
              <span className="font-heading text-xs uppercase tracking-wider text-primary/60 font-medium">
                Global Edge LCP
              </span>
            </div>

            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-1">
                99.99%
              </span>
              <span className="font-heading text-xs uppercase tracking-wider text-primary/60 font-medium">
                Infrastructure Uptime
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. CONTROL BAR: FILTERS & VIEW MODE SWITCHER
            ======================================================== */}
        <section className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
          
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar">
            {categoryFilterKeys.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-heading text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-[#6324FC] text-white shadow-[0_0_20px_rgba(99,36,252,0.3)] font-semibold"
                      : "bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-primary/70 hover:border-[#6324FC]/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Grid vs List */}
          <div className="flex items-center gap-1 p-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full font-heading text-xs uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white dark:bg-[#0a0a0d] text-primary shadow-sm font-semibold"
                  : "text-primary/50 hover:text-primary"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full font-heading text-xs uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === "list"
                  ? "bg-white dark:bg-[#0a0a0d] text-primary shadow-sm font-semibold"
                  : "text-primary/50 hover:text-primary"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List</span>
            </button>
          </div>
        </section>

        {/* ========================================================
            4. SERVICES CATALOG (GRID OR LIST)
            ======================================================== */}
        <section className="mb-24">
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              /* ================== GRID VIEW ================== */
              <motion.div
                key="grid-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((svc, idx) => (
                  <InteractiveServiceCard
                    key={svc.id}
                    svc={svc}
                    idx={idx}
                    onArchitect={(title) => openModal(title)}
                  />
                ))}
              </motion.div>
            ) : (
              /* ================== LIST VIEW ================== */
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {filteredServices.map((svc, idx) => (
                  <motion.div
                    key={svc.id}
                    onMouseEnter={() => setHoveredListService(svc)}
                    onMouseLeave={() => setHoveredListService(null)}
                    className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/60 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(99,36,252,0.15)] hover:translate-x-2 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group cursor-pointer"
                  >
                    {/* Left: Index, Title & Description */}
                    <div className="lg:w-5/12 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-[#6324FC] font-bold group-hover:scale-110 transition-transform">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-heading uppercase tracking-widest text-primary/40 group-hover:text-primary/70 transition-colors">
                          {svc.categoryKey}
                        </span>
                      </div>

                      <Link href={`/services/${svc.slug}`} className="group-hover:text-[#6324FC] transition-colors block">
                        <h2 className="font-heading text-3xl sm:text-4xl capitalize tracking-tight font-semibold">
                          {svc.title}
                        </h2>
                      </Link>

                      <p className="font-sans font-light text-sm text-primary/70 leading-relaxed">
                        {svc.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {svc.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 font-mono text-primary/60 group-hover:bg-[#6324FC]/10 group-hover:text-[#6324FC] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Middle: Sub-services */}
                    <div className="lg:w-4/12 space-y-2 border-t lg:border-t-0 lg:border-l border-black/5 dark:border-white/5 pt-4 lg:pt-0 lg:pl-8">
                      <span className="text-[10px] font-heading uppercase tracking-widest text-primary/40 font-semibold block">
                        Included Architectures:
                      </span>
                      <div className="space-y-2">
                        {svc.subServices.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.path}
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:translate-x-1 group/listlink text-xs transition-all"
                          >
                            <span className="font-heading font-medium text-primary group-hover/listlink:text-[#6324FC]">
                              {sub.name}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-primary/30 group-hover/listlink:text-[#6324FC] group-hover/listlink:translate-x-0.5" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="lg:w-3/12 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3 border-t lg:border-t-0 lg:border-l border-black/5 dark:border-white/5 pt-4 lg:pt-0 lg:pl-8">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(svc.title);
                        }}
                        className="px-6 py-3 rounded-full bg-[#6324FC] hover:bg-[#521bd6] text-white text-xs font-heading uppercase tracking-wider font-medium transition-all shadow-[0_0_20px_rgba(99,36,252,0.3)] hover:shadow-[0_0_30px_rgba(99,36,252,0.5)] cursor-pointer text-center"
                      >
                        Architect Service
                      </button>

                      <Link
                        href={`/services/${svc.slug}`}
                        className="px-6 py-3 rounded-full border border-black/15 dark:border-white/15 hover:border-[#6324FC] hover:text-[#6324FC] text-primary text-xs font-heading uppercase tracking-wider font-medium transition-all text-center hover:bg-[#6324FC]/5"
                      >
                        Full Dossier
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ========================================================
            5. TECHNOLOGY & CLOUD ECOSYSTEM
            ======================================================== */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              TECHNOLOGY MATRIX
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Enterprise Tooling <br />
              <span className="text-[#6324FC] italic">&amp; Cloud Infrastructure</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70">
              We build with battle-tested modern web stacks to guarantee zero technical debt, lightning-fast rendering, and unlimited vertical scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techEcosystem.map((eco, idx) => {
              const Icon = eco.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/50 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(99,36,252,0.15)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#6324FC]/10 flex items-center justify-center text-[#6324FC] group-hover:scale-110 group-hover:bg-[#6324FC] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-heading text-lg font-semibold tracking-tight group-hover:text-[#6324FC] transition-colors">
                      {eco.category}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {eco.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 font-mono text-xs text-primary/80 group-hover:border-[#6324FC]/20 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            6. THE 4-STAGE ARCHITECTURAL DELIVERY LIFECYCLE
            ======================================================== */}
        <section className="mb-24 p-8 sm:p-12 lg:p-16 rounded-[36px] bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.05)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/20 text-[#6324FC] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5" />
                EXECUTION PROTOCOL
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight leading-tight">
                The Architecture <br />
                <span className="text-[#6324FC] italic">Of Certainty.</span>
              </h2>
              <p className="font-sans font-light text-sm sm:text-base text-primary/70 leading-relaxed">
                We eliminate ambiguity through a milestone-driven engineering methodology tested across over 100+ high-traffic digital deployments.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 border-t border-black/10 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6324FC]/10 flex items-center justify-center text-[#6324FC]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading text-sm font-bold text-primary">100% Milestone SLA</div>
                    <div className="text-xs text-primary/50 font-sans">Transparent staged sign-offs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {deliverySteps.map((step, idx) => (
                <ExecutionStepCard key={step.number} step={step} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. HERO CTA: LAUNCH PROJECT
            ======================================================== */}
        <section className="text-center py-16 px-6 rounded-3xl bg-gradient-to-br from-[#6324FC]/10 via-transparent to-[#00E5FF]/10 border border-[#6324FC]/20 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Ready To Architect <br />
              <span className="text-[#6324FC] italic">Your Next Platform?</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-lg mx-auto">
              Schedule a direct consultation with our principal software architects or trigger our guided pipeline wizard for an expedited technical estimate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => openModal()}
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.4)] isolate w-full sm:w-auto"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                
                <div className="relative w-full h-full px-8 py-4 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-sm tracking-[0.15em] text-primary uppercase text-center font-medium">
                    LAUNCH PROJECT WIZARD
                    <ArrowUpRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </button>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-black/15 dark:border-white/15 hover:border-[#6324FC] hover:text-[#6324FC] font-heading text-sm uppercase tracking-wider text-primary font-medium transition-all w-full sm:w-auto text-center hover:shadow-lg"
              >
                Direct Contact Nexus
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
