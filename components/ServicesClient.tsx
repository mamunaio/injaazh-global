"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Search, 
  TrendingUp, 
  PenTool, 
  Compass,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
  Layers,
  BarChart3,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServicePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  filterCategory: "all" | "engineering" | "design" | "search" | "growth" | "strategy";
  desc: string;
  capabilities: string[];
  metricValue: string;
  metricLabel: string;
  image: string;
  accentColor: string;
  icon: typeof Code2;
}

const servicesData: ServicePillar[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Headless Web & Next.js Core Systems",
    subtitle: "Enterprise Web Engineering & Headless Commerce",
    slug: "web-dev",
    category: "CORE ARCHITECTURE",
    filterCategory: "engineering",
    desc: "We engineer lightning-fast Next.js 15 architectures, headless Shopify Plus platforms, and high-concurrency cloud web apps. Zero bloated templates — only bespoke, edge-rendered code with sub-second load times.",
    capabilities: [
      "Next.js 15 & React 19",
      "Headless Shopify Plus",
      "Edge Computing & Cloud APIs",
      "Sub-Second TTFB Guarantee",
      "Microservices Architecture",
      "Enterprise Headless CMS"
    ],
    metricValue: "99 / 100",
    metricLabel: "Core Web Vitals Pass Rate",
    image: "/assets/enterprise_ecommerce_1780213870802.png",
    accentColor: "#6324FC",
    icon: Code2,
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "Enterprise UI/UX & Design Systems",
    subtitle: "Cognitive Design & High-Conversion Prototyping",
    slug: "ui-ux-design",
    category: "COGNITIVE DESIGN SYSTEMS",
    filterCategory: "design",
    desc: "Bridging architectural luxury with behavioral conversion science. We design custom Figma component libraries, 60fps micro-interactions, and frictionless checkout flows engineered to win C-level trust.",
    capabilities: [
      "Design Systems & Token Architecture",
      "Interactive High-Fidelity Prototypes",
      "Cognitive Conversion UX Audits",
      "60fps Framer Micro-Interactions",
      "Accessibility & WCAG 2.1 AA",
      "Multi-Platform Responsive Systems"
    ],
    metricValue: "+68%",
    metricLabel: "C-Level Engagement Velocity",
    image: "/assets/b2b_saas_dashboard_1780213845016.png",
    accentColor: "#00E5FF",
    icon: Layout,
  },
  {
    id: "seo",
    number: "03",
    title: "Technical SEO, Semantic Search & AI GEO",
    subtitle: "Forensic Technical Audits & Generative Engine Dominance",
    slug: "seo",
    category: "SEARCH DOMINANCE & GEO",
    filterCategory: "search",
    desc: "Traditional keyword stuffing is dead. We architect semantic content silos, forensic technical schema graphs (JSON-LD), and Generative Engine Optimization (GEO) to dominate Google and Perplexity AI search rankings.",
    capabilities: [
      "Forensic Technical SEO Audits",
      "Semantic Topical Entity Graphs",
      "Generative Engine Optimization (GEO)",
      "JSON-LD Schema Hierarchy",
      "International Multi-Region SEO",
      "Algorithmic Penalty Recovery"
    ],
    metricValue: "+240%",
    metricLabel: "Average Organic Revenue Scaling",
    image: "/assets/nexus_esports.png",
    accentColor: "#00FFA3",
    icon: Search,
  },
  {
    id: "marketing",
    number: "04",
    title: "Data-Driven Performance Marketing & CRO",
    subtitle: "High-Intent Customer Acquisition & Funnel Acceleration",
    slug: "marketing",
    category: "REVENUE ENGINE & ACQUISITION",
    filterCategory: "growth",
    desc: "Capital-efficient digital acquisition funnels built for high ROI. We engineer multi-channel Google Search campaigns, Meta performance pipelines, and rigorous multi-variant CRO experiments that scale enterprise pipelines.",
    capabilities: [
      "High-Intent Google Ads Architecture",
      "Multi-Variant CRO Split Testing",
      "Attribution Modeling & Data Pipelines",
      "B2B Account-Based Marketing (ABM)",
      "Automated Retention Workflows",
      "Full-Funnel CAC Optimization"
    ],
    metricValue: "3.8x",
    metricLabel: "Average Client ROAS Across Campaigns",
    image: "/assets/themes_jet_final.webp",
    accentColor: "#F59E0B",
    icon: TrendingUp,
  },
  {
    id: "content",
    number: "05",
    title: "Programmatic Content & Topical Authority",
    subtitle: "Executive Thought Leadership & Organic Moats",
    slug: "content",
    category: "AUTHORITY ASSETS & SILOS",
    filterCategory: "growth",
    desc: "Establishing unshakeable industry authority through high-density technical whitepapers, programmatic content engines, and editorial narratives that rank #1 and drive qualified enterprise sales inquiries.",
    capabilities: [
      "Topical Cluster & Silo Engineering",
      "Executive Technical Whitepapers",
      "Programmatic Content Pipelines",
      "B2B Product Messaging Playbooks",
      "Editorial Brand Narrative",
      "Tier-1 Digital PR & Outreach"
    ],
    metricValue: "Top 3",
    metricLabel: "Google SERP Dominance in 90 Days",
    image: "/assets/novacore.png",
    accentColor: "#FF2D55",
    icon: PenTool,
  },
  {
    id: "strategy",
    number: "06",
    title: "Enterprise Digital Strategy & Tech Audits",
    subtitle: "Architecture Modernization & Strategic Roadmaps",
    slug: "strategy",
    category: "SYSTEM ARCHITECTURE & ROADMAPS",
    filterCategory: "strategy",
    desc: "Aligning cutting-edge technology with aggressive commercial expansion. We audit legacy infrastructure, eliminate technical debt, consolidate modern tech stacks, and blueprint digital moats that outperform competitors.",
    capabilities: [
      "Tech Stack Consolidation Audits",
      "Digital Transformation Roadmaps",
      "Commercial Growth Modeling",
      "Global Expansion Strategy",
      "Vendor & Architecture Vetting",
      "Enterprise SLA & Governance"
    ],
    metricValue: "99.98%",
    metricLabel: "Enterprise Production SLA Standard",
    image: "/assets/aka_moving_final.webp",
    accentColor: "#8B5CF6",
    icon: Compass,
  },
];

const deliveryPhases = [
  {
    phase: "PHASE 01",
    title: "Forensic Discovery & Systems Audit",
    duration: "Week 01 - 02",
    desc: "We perform deep-dive technical profiling, Core Web Vitals forensics, competitor keyword gap analysis, and conversion funnel audits to uncover hidden revenue bottlenecks.",
    deliverables: [
      "Forensic Architecture Audit",
      "Competitor Keyword Gap Telemetry",
      "Strategic Roadmap & SLA Spec"
    ],
    accent: "#6324FC",
  },
  {
    phase: "PHASE 02",
    title: "Headless Architecture & Prototyping",
    duration: "Week 03 - 04",
    desc: "Engineering custom design systems, cognitive UX wireframes, and interactive high-fidelity prototypes. Every touchpoint is calibrated for visual luxury and frictionless usability.",
    deliverables: [
      "Figma Design System Tokens",
      "High-Fidelity Interactive Prototype",
      "Information & Schema Architecture"
    ],
    accent: "#00E5FF",
  },
  {
    phase: "PHASE 03",
    title: "High-Velocity Edge Engineering",
    duration: "Week 05 - 08",
    desc: "Writing clean, modular Next.js 15 code deployed across global edge networks. Rigorous automated CI/CD testing, sub-second TTFB, and zero technical debt guaranteed.",
    deliverables: [
      "Next.js 15 Edge Deployment",
      "Headless CMS & API Integrations",
      "100% Core Web Vitals Optimization"
    ],
    accent: "#00FFA3",
  },
  {
    phase: "PHASE 04",
    title: "Global SEO Domination & Scale",
    duration: "Week 09 - Ongoing",
    desc: "Deployment is just Day One. We deploy programmatic content silos, activate multi-channel performance funnels, and run continuous CRO experiments to turn your platform into an engine.",
    deliverables: [
      "Programmatic Topical Silos",
      "Continuous Multi-Variant CRO",
      "Monthly Executive Growth Briefings"
    ],
    accent: "#F59E0B",
  },
];

const techStack = [
  { name: "Next.js 15", category: "Core Framework", accent: "#6324FC" },
  { name: "React 19", category: "Frontend Engine", accent: "#00E5FF" },
  { name: "TypeScript", category: "Type Safety", accent: "#3B82F6" },
  { name: "Tailwind CSS", category: "Styling System", accent: "#00FFA3" },
  { name: "Framer Motion", category: "Micro-Interactions", accent: "#FF2D55" },
  { name: "Three.js / WebGL", category: "3D & Canvas", accent: "#F59E0B" },
  { name: "Shopify Plus", category: "Headless Commerce", accent: "#96BF48" },
  { name: "Vercel Edge", category: "Edge Cloud Runtime", accent: "#FFFFFF" },
  { name: "PostgreSQL", category: "Database Pipeline", accent: "#336791" },
  { name: "Sanity & TinaCMS", category: "Headless Content", accent: "#F03E2F" },
  { name: "Google Cloud", category: "Infrastructure", accent: "#4285F4" },
  { name: "Ahrefs & Semrush", category: "Search Intelligence", accent: "#FF5C35" },
];

export default function ServicesClient() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices = activeFilter === "all"
    ? servicesData
    : servicesData.filter((svc) => svc.filterCategory === activeFilter);

  return (
    <main className="w-full min-h-screen bg-[#060608] text-white relative overflow-hidden font-sans selection:bg-[#6324FC] selection:text-white">
      
      {/* Background Ambient Aurora Glows - GPU-Accelerated Zero-Overhead Gradients */}
      <div className="absolute top-0 left-1/4 w-[750px] h-[750px] bg-[radial-gradient(circle,rgba(99,36,252,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,163,0.06)_0%,transparent_70%)] pointer-events-none" />


      {/* ========================================================
          1. HERO SECTION: Signature Triad & Telemetry Strip
          ======================================================== */}
      <section className="relative w-full pt-36 md:pt-48 pb-16 md:pb-24 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Eyebrow Kicker */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-[#6324FC] to-[#00E5FF]"
            />
            <span className="font-mono text-xs md:text-sm tracking-[0.45em] text-[#6324FC] uppercase font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              FULL-SPECTRUM DIGITAL ARCHITECTURE // GLOBAL EXCELLENCE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16 mb-12">
            {/* Signature Triad Heading */}
            <div className="max-w-3xl">
              <h1 className="sr-only">
                Enterprise Digital Services: Web Engineering, UI/UX Systems, Technical SEO, and Growth Marketing
              </h1>
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white"
              >
                <span className="text-white mr-3 md:mr-4">ENGINEERING</span>
                <br className="hidden sm:inline" />
                <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
                  DIGITAL
                </span>
                <br />
                <span className="stroke-text opacity-95">SUPREMACY.</span>
              </div>
            </div>

            {/* Authority Paragraph */}
            <div className="max-w-lg">
              <p className="font-sans font-light text-white/75 text-base sm:text-lg leading-relaxed border-l-2 border-[#6324FC]/60 pl-5 sm:pl-6 py-1 mb-4">
                We don't build generic brochure websites. We architect high-concurrency digital platforms, dominate Google search through technical SEO forensics, and engineer revenue infrastructure across North America, Europe, and Australia.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 pl-5 sm:pl-6">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>100% IN-HOUSE SENIOR SQUADS · ZERO JUNIOR DELEGATION</span>
              </div>
            </div>
          </div>

          {/* Telemetry Counter Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 md:p-6 rounded-3xl bg-[#0B0B10] border border-white/[0.08]">
            <div className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl text-white font-bold tracking-tight">99.98%</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1">PRODUCTION SLA GUARANTEE</span>
            </div>
            <div className="flex flex-col border-l border-white/[0.06] pl-4 sm:pl-6">
              <span className="font-heading text-2xl sm:text-3xl text-[#00E5FF] font-bold tracking-tight">0.8s</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1">AVG EDGE TTFB VELOCITY</span>
            </div>
            <div className="flex flex-col border-l border-white/[0.06] pl-4 sm:pl-6">
              <span className="font-heading text-2xl sm:text-3xl text-[#00FFA3] font-bold tracking-tight">+240%</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1">AVG ORGANIC REVENUE LIFT</span>
            </div>
            <div className="flex flex-col border-l border-white/[0.06] pl-4 sm:pl-6">
              <span className="font-heading text-2xl sm:text-3xl text-[#F59E0B] font-bold tracking-tight">TOP 1%</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1">GLOBAL AGENCY PERFORMANCE</span>
            </div>
          </div>

          {/* Quick Capability Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/[0.05]">
            <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider mr-2 hidden sm:inline">
              CAPABILITY MATRIX:
            </span>
            {[
              { id: "all", label: "ALL ARCHITECTURES" },
              { id: "engineering", label: "WEB ENGINEERING" },
              { id: "design", label: "UI/UX SYSTEMS" },
              { id: "search", label: "TECHNICAL SEO" },
              { id: "growth", label: "GROWTH & CRO" },
              { id: "strategy", label: "STRATEGY & AUDITS" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#6324FC] text-white shadow-[0_0_20px_rgba(99,36,252,0.4)] border border-[#6324FC]"
                    : "bg-white/[0.03] text-white/60 hover:text-white border border-white/[0.08] hover:border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          2. FLAGSHIP ARCHITECTURAL PILLARS (Bento Showcase)
          ======================================================== */}
      <section className="w-full py-20 md:py-28 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group relative rounded-3xl bg-[#09090E] border border-white/[0.08] hover:border-white/20 p-7 sm:p-9 lg:p-12 transition-all duration-300 overflow-hidden shadow-2xl"
                  >
                    {/* Spotlight Radial Hover Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 20% 30%, ${svc.accentColor}15 0%, transparent 60%)`
                      }}
                    />

                    {/* Top Shimmer Light Beam Effect */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                    {/* Card Content Layout: 2 Columns */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-14">
                      
                      {/* Left Column: Details & Capabilities */}
                      <div className="w-full lg:w-[58%] flex flex-col justify-between">
                        <div>
                          {/* Top Meta Line: Number + Category Badge + Active Status */}
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span 
                              className="font-mono text-sm font-bold tracking-widest"
                              style={{ color: svc.accentColor }}
                            >
                              // {svc.number}
                            </span>
                            <span className="text-white/20 text-xs">•</span>
                            <span 
                              className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border"
                              style={{
                                backgroundColor: `${svc.accentColor}12`,
                                borderColor: `${svc.accentColor}30`,
                                color: svc.accentColor,
                              }}
                            >
                              {svc.category}
                            </span>
                            <span className="text-white/20 text-xs">•</span>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-white/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
                              VERIFIED CAPABILITY
                            </span>
                          </div>

                          {/* Service Title */}
                          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-2 group-hover:text-white transition-colors">
                            {svc.title}
                          </h2>

                          {/* Subtitle */}
                          <div 
                            className="font-mono text-xs uppercase tracking-wider mb-4 font-semibold"
                            style={{ color: svc.accentColor }}
                          >
                            {svc.subtitle}
                          </div>

                          {/* Editorial Description */}
                          <p className="font-sans font-light text-sm sm:text-base text-white/75 leading-relaxed mb-6">
                            {svc.desc}
                          </p>

                          {/* Capabilities Grid Chips */}
                          <div className="mb-8">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2.5">
                              ARCHITECTURAL DELIVERABLES:
                            </div>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {svc.capabilities.map((cap, cIdx) => (
                                <span
                                  key={cIdx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-white/80 group-hover:border-white/15 transition-colors"
                                >
                                  <span 
                                    className="w-1 h-1 rounded-full"
                                    style={{ backgroundColor: svc.accentColor }}
                                  />
                                  {cap}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Row: Performance Metric + Action Link */}
                        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                          {/* Metric Pill */}
                          <div className="flex items-center gap-3">
                            <div 
                              className="font-heading text-2xl sm:text-3xl font-bold tracking-tight"
                              style={{ color: svc.accentColor }}
                            >
                              {svc.metricValue}
                            </div>
                            <div className="text-[11px] font-mono text-white/50 leading-tight">
                              {svc.metricLabel}
                            </div>
                          </div>

                          {/* Direct Service Navigation CTA */}
                          <Link
                            href={`/services/${svc.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.05] border border-white/10 hover:bg-[#6324FC] hover:border-[#6324FC] transition-all duration-300 group/btn shadow-lg"
                          >
                            <span>EXPLORE ARCHITECTURE SPEC</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Interactive Device Mockup Chrome Preview */}
                      <div className="w-full lg:w-[42%] flex flex-col justify-center">
                        <Link 
                          href={`/services/${svc.slug}`}
                          className="block relative rounded-2xl bg-[#0A0A0E] border border-white/10 overflow-hidden shadow-2xl group/preview"
                        >
                          {/* Safari Window Chrome Header */}
                          <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between gap-3">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                            </div>
                            <div className="px-3 py-0.5 rounded-full bg-black/40 border border-white/5 font-mono text-[9px] text-white/40 truncate max-w-[200px] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                              <span>https://injaazh.com/services/{svc.slug}</span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover/preview:text-white transition-colors" />
                          </div>

                          {/* Image Container with Hover Zoom */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0E]">
                            <Image
                              src={svc.image}
                              alt={svc.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 42vw"
                              className="object-cover object-top filter grayscale group-hover/preview:grayscale-0 group-hover/preview:scale-105 transition-all duration-700 opacity-80 group-hover/preview:opacity-100"
                            />
                            {/* Accent Gradient Overlay */}
                            <div 
                              className="absolute inset-0 opacity-20 group-hover/preview:opacity-0 transition-opacity duration-500 pointer-events-none"
                              style={{
                                background: `linear-gradient(to top, ${svc.accentColor}40, transparent)`
                              }}
                            />
                            {/* Hover Badge */}
                            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white font-semibold flex items-center gap-1.5 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
                              <span>VIEW CASE ARCHITECTURE</span>
                              <ArrowRight className="w-3 h-3 text-[#00E5FF]" />
                            </div>
                          </div>
                        </Link>
                      </div>

                    </div>

                    {/* Watermark platform icon in background */}
                    <div 
                      aria-hidden="true" 
                      className="absolute -right-8 -bottom-8 w-44 h-44 text-white/[0.015] group-hover:text-white/[0.03] group-hover:scale-110 transition-all duration-700 pointer-events-none"
                    >
                      <Icon className="w-full h-full" />
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. 4-STAGE ENTERPRISE DELIVERY PROTOCOL
          ======================================================== */}
      <section className="w-full py-20 md:py-28 border-t border-white/5 relative overflow-hidden bg-black/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#6324FC] to-[#00E5FF]" />
            <span className="font-mono text-xs md:text-sm tracking-[0.45em] text-[#6324FC] uppercase font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              OPERATIONAL DISCIPLINE // HOW WE DELIVER
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl leading-[0.88] tracking-tighter text-white"
              >
                <span className="text-white mr-3 md:mr-4">THE</span>
                <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
                  ARCHITECTURE
                </span>
                <br />
                <span className="stroke-text opacity-95">OF SUCCESS.</span>
              </div>
            </div>
            <p className="font-sans font-light text-white/70 text-sm sm:text-base max-w-md leading-relaxed border-l-2 border-[#6324FC]/60 pl-5">
              We do not guess. We operate on a rigorous, data-driven framework of forensic systems audit, headless engineering, and aggressive algorithmic scale.
            </p>
          </div>

          {/* 4 Phases Chronological Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryPhases.map((phase, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                className="group relative rounded-3xl bg-[#09090E] border border-white/[0.07] hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Top Phase Accent Glow */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none rounded-full"
                  style={{ background: `radial-gradient(circle, ${phase.accent}40 0%, transparent 70%)` }}
                />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span 
                      className="font-mono text-xs font-bold tracking-widest"
                      style={{ color: phase.accent }}
                    >
                      {phase.phase}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] font-mono text-[9px] text-white/50">
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl text-white font-medium mb-3 group-hover:text-white transition-colors">
                    {phase.title}
                  </h3>

                  <p className="font-sans text-xs text-white/60 leading-relaxed mb-6">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">
                    KEY MILESTONES:
                  </div>
                  {phase.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs font-mono text-white/75">
                      <CheckCircle2 
                        className="w-3.5 h-3.5 mt-0.5 shrink-0" 
                        style={{ color: phase.accent }}
                      />
                      <span className="leading-tight">{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. ENTERPRISE TECHNOLOGY MATRIX
          ======================================================== */}
      <section className="w-full py-20 md:py-28 border-t border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#6324FC] font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#00E5FF]" />
              ENTERPRISE STACK // ZERO COMPROMISE INFRASTRUCTURE
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl text-white font-medium tracking-tight">
              Battle-Tested Technologies <br />
              <span className="italic text-[#6324FC]">For Global Dominance.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, tIdx) => (
              <motion.div
                key={tIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: tIdx * 0.03 }}
                className="group relative rounded-2xl bg-[#09090E] border border-white/[0.06] hover:border-white/20 p-5 flex items-center justify-between transition-all duration-300"
              >
                <div>
                  <div className="font-heading text-base text-white font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    {tech.category}
                  </div>
                </div>
                <div 
                  className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform duration-300"
                  style={{ backgroundColor: tech.accent }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          5. CLOSING EXECUTIVE CONVERSION CTA
          ======================================================== */}
      <section className="w-full py-20 md:py-32 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#060608] via-[#0A0A10] to-[#060608]">
        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(99,36,252,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
            COMMERCIAL IMPACT // DIRECT PRINCIPAL ACCESS
          </div>

          <div
            aria-hidden="true"
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white mb-8"
          >
            <span className="text-white mr-3 md:mr-4">READY TO ENGINEER</span>
            <br className="hidden sm:inline" />
            <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
              DIGITAL
            </span>
            <br />
            <span className="stroke-text opacity-95">SUPREMACY?</span>
          </div>

          <p className="font-sans font-light text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
            Schedule a confidential technical discovery session with our founding architects. We analyze your current digital bottlenecks, review your infrastructure, and deliver an actionable execution blueprint.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider text-white bg-[#6324FC] hover:bg-[#521bd6] shadow-[0_0_40px_rgba(99,36,252,0.4)] hover:shadow-[0_0_60px_rgba(99,36,252,0.6)] transition-all duration-300 group cursor-pointer"
            >
              <span>BOOK ARCHITECTURAL AUDIT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-mono text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span>EXPLORE CASE STUDIES</span>
              <ExternalLink className="w-4 h-4 text-white/40" />
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/40 pt-8 border-t border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00FFA3]" />
              <span>Signed NDA Guaranteed</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#00E5FF]" />
              <span>Direct Principal Architect Access</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#6324FC]" />
              <span>Zero-Obligation Forensic Review</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
