"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Activity,
  Binary,
  FileSearch,
  Globe,
  BarChart3,
  FileText,
  Code,
  TrendingUp,
  Shield,
  Eye,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechnicalAuditsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Core Web Vitals",
      description:
        "Surgical optimization of LCP, FID, and CLS to ensure your site meets Google's highest performance standards — because slow pages don't rank, and they don't convert.",
      icon: Activity,
      color: "#6324FC",
    },
    {
      title: "Semantic Architecture",
      description:
        "Structuring your data and HTML to ensure search engines perfectly understand your content hierarchy — so Google can read, interpret, and rank every page with precision.",
      icon: Binary,
      color: "#00E5FF",
    },
    {
      title: "Crawl Budget Ops",
      description:
        "Optimizing your site structure so bots can index your most valuable pages faster and more efficiently — eliminating crawl waste on pages that will never rank.",
      icon: FileSearch,
      color: "#FF2D55",
    },
    {
      title: "Global Visibility",
      description:
        "Ensuring your international SEO setup — Hreflang, CDN, geo-targeting — is flawless for worldwide market dominance. Every market, every language, every search engine signal aligned.",
      icon: Globe,
      color: "#00FFA3",
    },
  ];

  const bullets = [
    {
      label: "Site Depth",
      desc: "Ensuring no important content is more than 3 clicks away from the homepage. Deep content is invisible content — we restructure your architecture so Google finds everything it needs to rank you.",
    },
    {
      label: "Schema Validation",
      desc: "Implementing rich snippets to dominate search results real estate — star ratings, FAQs, breadcrumbs, and product markup that push your listings above the fold before anyone clicks.",
    },
    {
      label: "Speed Protocol",
      desc: "Eliminating render-blocking resources and optimizing asset delivery pipelines — image compression, lazy loading, CDN configuration, and server response time — until your Core Web Vitals score is beyond reproach.",
    },
  ];

  const auditProtocol = [
    {
      step: "01",
      title: "Full Crawl",
      desc: "Executing a deep-scan of your entire domain to map out architecture and identify all 4xx/5xx errors, redirect chains, duplicate content, orphaned pages, and indexation gaps. We see what Google sees — before we fix it.",
    },
    {
      step: "02",
      title: "Data Analysis",
      desc: "Cross-referencing crawl data with Google Search Console and Analytics to prioritize high-impact fixes. Not every technical issue affects rankings equally — we rank them by impact and fix the highest-value problems first.",
    },
    {
      step: "03",
      title: "Execution Plan",
      desc: "Providing a surgical roadmap for your engineering team to eliminate technical debt and boost rankings — with specific instructions, priority tiers, and expected outcome for every fix. Developer-ready, immediately actionable.",
    },
  ];

  const auditCoverage = [
    {
      category: "Crawlability & Indexation",
      items: [
        "robots.txt and XML sitemap validation",
        "Crawl errors, blocked URLs, and noindex misconfigurations",
        "Redirect chain mapping and canonicalization audit",
        "Orphaned page identification",
      ],
    },
    {
      category: "Performance & Core Web Vitals",
      items: [
        "LCP, CLS, and INP scoring across mobile and desktop",
        "Time To First Byte (TTFB) and server response analysis",
        "Render-blocking resource identification",
        "Image format, compression, and lazy-load audit",
      ],
    },
    {
      category: "On-Page Technical Signals",
      items: [
        "H-tag hierarchy and keyword placement audit",
        "Meta title and description quality scoring",
        "Internal link architecture and anchor text distribution",
        "Duplicate content and thin page identification",
      ],
    },
    {
      category: "Schema & Structured Data",
      items: [
        "Schema markup validation (JSON-LD)",
        "Rich snippet eligibility assessment",
        "Knowledge Graph signal alignment",
      ],
    },
    {
      category: "Security & Trust Signals",
      items: [
        "HTTPS implementation and mixed content check",
        "SSL certificate status and expiry",
        "Core security header audit (HSTS, CSP, X-Frame)",
      ],
    },
    {
      category: "International SEO (if applicable)",
      items: [
        "Hreflang implementation and conflict detection",
        "Geo-targeting configuration in Google Search Console",
        "CDN and regional server performance review",
      ],
    },
  ];

  const checklistItems = [
    "Your rankings dropped after a Google core update",
    "You publish content consistently but organic traffic isn't growing",
    "Your site was recently migrated, redesigned, or moved to a new domain",
    "You have a large site with hundreds or thousands of pages",
    "Your Core Web Vitals are failing or borderline in Google Search Console",
    "You're launching an international SEO campaign and need a clean foundation",
  ];

  const deliverables = [
    {
      title: "Executive Summary",
      desc: "A one-page summary of your site's technical health score, the top 5 issues impacting your rankings, and the estimated traffic uplift from fixing them. Clear enough to share with leadership in 60 seconds.",
      icon: FileText,
      color: "#6324FC",
    },
    {
      title: "Issue Log (Priority Tiered)",
      desc: "Every technical issue found — categorized as Critical, High, Medium, or Low priority — with a plain-English explanation of what the issue is, why it matters, and what fixing it will achieve.",
      icon: Activity,
      color: "#00E5FF",
    },
    {
      title: "Developer Action Sheet",
      desc: "A structured task list written for your engineering team — with specific file references, recommended fixes, and acceptance criteria for each technical issue. No ambiguity, no back-and-forth.",
      icon: Code,
      color: "#FF2D55",
    },
    {
      title: "Benchmark Scores",
      desc: "Your site's scores across Core Web Vitals, indexation rate, crawl efficiency, schema coverage, and security — benchmarked against your top 3 organic competitors.",
      icon: BarChart3,
      color: "#00FFA3",
    },
    {
      title: "30-Day Fix Roadmap",
      desc: "A sequenced implementation plan — prioritizing the fixes that will have the highest ranking impact in the shortest timeframe. You know exactly what to fix first, second, and third.",
      icon: TrendingUp,
      color: "#FACC15",
    },
  ];

  const faqs = [
    {
      q: "What's the difference between an SEO audit and a technical SEO audit?",
      a: "A general SEO audit covers keywords, content, and backlinks. A technical SEO audit goes deeper — into your site's code, server configuration, crawl architecture, and performance metrics. Most ranking problems that persist despite good content are technical in origin. We find them.",
    },
    {
      q: "How long does a technical audit take?",
      a: "For a standard site of up to 500 pages, we deliver the full audit report within 5–7 business days. Large sites with 500–10,000+ pages run 10–14 business days depending on complexity. You receive a scoped timeline before we begin.",
    },
    {
      q: "Do you fix the issues, or just report them?",
      a: "Both options are available. Audit-only engagements deliver a full report and developer action sheet — your team implements the fixes. Full implementation engagements include our team executing every fix directly in your CMS or codebase, with QA verification after each change.",
    },
    {
      q: "My site was just redesigned. Do I still need an audit?",
      a: "Especially then. Site migrations and redesigns are the most common source of catastrophic technical SEO regressions — broken redirects, missing meta data, de-indexed pages, and lost canonical structure. A post-launch technical audit is the fastest way to catch what the redesign broke before Google does.",
    },
    {
      q: "Can you audit a site built on WordPress, Shopify, or custom code?",
      a: "Yes. We audit all major platforms — WordPress, Shopify, Webflow, Next.js, Laravel, and custom-built sites. Our crawling tools operate at the rendered HTML level, so platform doesn't affect audit depth or accuracy.",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 01. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">
                INTELLIGENCE DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Technical <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Audits.
              </span>
            </h1>

            <p className="font-sans font-light text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t just look at keywords. We look at code. Our technical
              audits reveal the hidden barriers preventing your site from absolute
              search dominance — and deliver a surgical plan to eliminate every
              one of them.
            </p>

            <Link
              href="/contact"
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500">
                  Initiate Audit
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group"
          >
            <Image
              src="/assets/scalia_app_final.webp"
              alt="Technical SEO Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#060608]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-8 left-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="font-heading text-[9px] text-[#00E5FF] mb-2 capitalize ">
                Crawler Status
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🟢</span>
                <span className="font-heading text-xl text-white">
                  Optimized
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02. Precision Revealed */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              PRECISION <span className="italic text-[#6324FC]">REVEALED.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Our audit process covers over 200+ technical data points that
              impact your organic visibility and user retention — from crawl
              architecture to Core Web Vitals to international SEO configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-xl relative"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <f.icon className="w-24 h-24 text-white" />
                </div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${f.color}15`,
                    border: `1px solid ${f.color}30`,
                  }}
                >
                  <f.icon className="w-8 h-8" style={{ color: f.color }} />
                </div>
                <h3 className="font-heading text-2xl text-white mb-4 capitalize ">
                  {f.title}
                </h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 03. Data Over Guesswork */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <BarChart3 className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Analysis Node // Ox42
                </div>
              </div>

              <div className="space-y-12 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    {
                      label: "Indexing",
                      val: "98.4%",
                      color: "text-[#00E5FF]",
                    },
                    {
                      label: "Performance",
                      val: "100/100",
                      color: "text-[#6324FC]",
                    },
                    {
                      label: "Semantic",
                      val: "Perfect",
                      color: "text-[#00FFA3]",
                    },
                    {
                      label: "Security",
                      val: "Shielded",
                      color: "text-[#FF2D55]",
                    },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="font-heading text-[8px] text-white/20 capitalize tracking-widest">
                        {stat.label}
                      </div>
                      <div className={`font-heading text-4xl ${stat.color}`}>
                        {stat.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-20 w-full bg-white/[0.02] border border-white/5 rounded-xl flex items-end gap-1 p-4">
                  {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      className="flex-1 bg-[#6324FC]/30 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Neural Scan</span>
                <span>Continuous Audit Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                DATA OVER <br />
                <span className="italic text-[#00E5FF]">GUESSWORK.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We use enterprise-grade crawling technology to simulate how Google
                sees your site, identifying every friction point in the user journey
                — not just the obvious ones.
              </p>

              <div className="space-y-8">
                {bullets.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize ">
                        Bullet 0{i + 1} — {item.label}
                      </div>
                      <p className="font-sans font-light text-sm text-white/30">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 04. The Audit Protocol */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            THE AUDIT <span className="italic text-[#6324FC]">PROTOCOL.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {auditProtocol.map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white capitalize ">
                    {s.title}
                  </h3>
                  <p className="font-sans font-light text-lg text-white/40 leading-relaxed border-l border-white/10 pl-8 group-hover:border-[#6324FC] transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION A — What the Audit Covers */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              200+ DATA POINTS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Nothing <br />
                <span className="italic text-[#6324FC]">Gets Missed.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l border-[#6324FC]/20 pl-8">
              Most SEO audits check the same 20 surface-level issues. Ours goes six
              layers deep — into your code, your server, your architecture, and your
              content signals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditCoverage.map((cov, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group"
              >
                <h3 className="font-heading text-2xl text-white mb-6 uppercase tracking-tight group-hover:text-[#6324FC] transition-colors">
                  {cov.category}
                </h3>
                <ul className="space-y-4">
                  {cov.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <Check className="w-4 h-4 text-[#6324FC] shrink-0 mt-1" />
                      <span className="font-sans font-light text-white/50 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B — Who Needs a Technical Audit */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              AUDIT CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Your Content Is Good. <br />
                <span className="italic text-[#6324FC]">So Why Aren&apos;t You Ranking?</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                Technical issues are the most common reason sites with strong content
                fail to rank. They&apos;re also invisible without the right tools. If any
                of these apply, your site needs a technical audit before anything else.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-500 group flex gap-4"
                >
                  <Sparkles className="w-5 h-5 text-[#6324FC] shrink-0 mt-0.5" />
                  <p className="font-sans font-light text-white/60 group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500">
                  Run My Audit
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION C — Audit Deliverables */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              WHAT YOU RECEIVE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              A Report That <br />
              <span className="italic text-[#6324FC]">Actually Does Something.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Not a 200-page PDF you&apos;ll never read. A structured, prioritized
              audit document — written for both your marketing team and your
              developers — with every issue categorized, explained, and actioned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-xl relative flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-24 h-24 text-white" />
                </div>
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 capitalize">
                    Deliverable 0{i + 1} — {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION D — Technical Audit FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Technical Audit <span className="italic text-[#6324FC]">FAQ.</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => {
              const isOpen = activeIndex === i;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
                  onClick={() => toggleFaq(i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-xl text-white">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-white/50" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 16 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 05. Final CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            VISIBLE <span className="italic text-[#6324FC]">DOMINANCE.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to fix the foundation? Let&apos;s run a surgical audit and
            unlock your site&apos;s true organic potential.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 mx-auto isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            <div className="relative w-full h-full md:px-16 px-8 py-4 md:py-8 text-xl md:text-2xl rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-6 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative z-10 font-heading text-lg md:text-2xl tracking-widest text-white uppercase text-center flex items-center gap-6">
                START TECHNICAL AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
