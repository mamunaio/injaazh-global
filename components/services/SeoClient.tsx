"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Activity,
  Link as LinkIcon,
  FileText,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useProjectModal } from "@/components/ProjectModalContext";
import Counter from "@/components/Counter";

export default function SeoClient() {
  const { openModal } = useProjectModal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const stats = [
    { value: "340%", label: "Avg Traffic Growth" },
    { value: "Top 3", label: "Average Ranking" },
    { value: "6 Months", label: "To Page One" },
    { value: "98%", label: "Client Retention" },
  ];

  const whatIsIncluded = [
    {
      title: "Technical SEO Audit",
      desc: "Before we optimize, we diagnose. A full technical audit covering crawlability, indexation, Core Web Vitals, schema markup, site speed, and mobile performance — so we know exactly what's holding your site back.",
      tags: ["Core Web Vitals", "Schema", "Crawl Audit", "Site Speed"],
    },
    {
      title: "On-Page Optimization",
      desc: "Every page optimized to rank. Title tags, meta descriptions, H-tag structure, internal linking, image optimization, and keyword placement — done precisely for Google US, UK, and AU algorithms.",
      tags: ["Title Tags", "Meta", "H-Tags", "Internal Linking"],
    },
    {
      title: "Link Building & Authority",
      desc: "Google ranks authority. We build it. Through strategic outreach, digital PR, and white-hat link acquisition — we grow your domain authority with high-quality backlinks that move the needle and stick.",
      tags: ["Backlinks", "Digital PR", "Outreach", "DA Growth"],
    },
    {
      title: "Local & International SEO",
      desc: "Whether you're targeting a single city or multiple countries, we build geo-targeted SEO strategies that put you in front of the right audience — in the right location — at exactly the right moment.",
      tags: ["Local SEO", "Hreflang", "Geo-Targeting", "GMB"],
    },
    {
      title: "Keyword & Content Strategy",
      desc: "Rankings start with the right keywords. We research, map, and prioritize keywords with real commercial intent — then build a content strategy around them that compounds organic traffic month over month.",
      tags: ["Keyword Research", "Search Intent", "Content Map"],
    },
  ];

  const whyItWorks = [
    {
      title: "Built For Google US, UK & AU",
      desc: "Google algorithms behave differently across markets. We understand the ranking signals, search intent patterns, and competitive landscape specific to US, UK, and Australian search — not just generic global SEO.",
    },
    {
      title: "Technical First Approach",
      desc: "Most agencies start with content. We start with your technical foundation — because no amount of content will rank a technically broken website. We fix the foundation first, then build on top of it.",
    },
    {
      title: "SEO + Content Combined",
      desc: "SEO without content is a car without fuel. Every Injaazh SEO engagement includes content strategy — because ranking requires both technical excellence and authoritative, search-optimized content.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & Research",
      desc: "Full technical audit + competitor analysis + keyword research. We map the battlefield before we plan the attack — so every decision is grounded in data, not assumption.",
    },
    {
      step: "02",
      title: "Strategy & Roadmap",
      desc: "A clear, prioritized SEO roadmap with timelines, targets, and KPIs agreed upfront — so you always know what we're doing, why we're doing it, and what result to expect.",
    },
    {
      step: "03",
      title: "Implementation",
      desc: 'On-page optimization, technical fixes, content creation, and link building — executed systematically, week by week, with full transparency. No black boxes, no vague "SEO work."',
    },
    {
      step: "04",
      title: "Monitor & Scale",
      desc: "Monthly reporting with real data — rankings, traffic, conversions. We continuously refine the strategy based on what's working and double down on what drives results.",
    },
  ];

  const checklistItems = [
    "You're on page 2 or beyond for your most important keywords",
    "Your organic traffic has flatlined or dropped after a Google update",
    "You've invested in SEO before but saw no measurable improvement",
    "You're launching a new website and need to build authority fast",
    "You're targeting the US, UK, or Australian market and need geo-specific SEO",
    "You want to reduce your dependency on paid ads with compounding organic traffic",
  ];

  const paidAdsDrawbacks = [
    "Traffic stops when budget runs out",
    "Cost per click increases as competition grows",
    "No lasting asset built — you own nothing",
    "ROI disappears the moment campaigns pause",
    "Audiences increasingly use ad blockers",
  ];

  const seoBenefits = [
    "Traffic compounds month over month",
    "Cost per acquisition decreases over time",
    "Every ranking is a permanent digital asset",
    "ROI continues to grow after the campaign ends",
    "Organic results receive 73% of all search clicks",
  ];

  const monthlyDeliverables = [
    {
      title: "Live Rankings Dashboard",
      desc: "Track your keyword positions in real time — filtered by market (US, UK, AU), device type, and search intent category. No surprises on your monthly call.",
      icon: Activity,
      color: "#6324FC",
    },
    {
      title: "Traffic & Conversion Report",
      desc: "GA4-powered organic traffic breakdown — sessions, new users, bounce rate, goal completions, and revenue attribution. Traffic that doesn't convert gets flagged and fixed.",
      icon: TrendingUp,
      color: "#00E5FF",
    },
    {
      title: "Backlink Activity Log",
      desc: "Every link acquired, the domain authority of the source, and the anchor text used — so you always know exactly what authority is being built on your behalf.",
      icon: LinkIcon,
      color: "#FF2D55",
    },
    {
      title: "Monthly Strategy Memo",
      desc: "A written summary of what was executed, what the data showed, and what the next 30 days focus on — in plain English, not SEO jargon.",
      icon: FileText,
      color: "#00FFA3",
    },
  ];

  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a: "SEO is not instant — and anyone who tells you otherwise is selling something dangerous. For most competitive keywords, expect meaningful movement within 3–6 months and significant ranking gains by month 6–12. The timeline depends on your current domain authority, the competitiveness of your keywords, and the technical state of your site. We set realistic targets upfront and show you data every step of the way.",
    },
    {
      q: "Do you do SEO for US and UK businesses?",
      a: "Yes — it's our primary focus. We build geo-targeted SEO strategies specifically tuned for Google's US, UK, and Australian algorithms. That means market-specific keyword research, hreflang implementation for international sites, and content calibrated to the search intent patterns of each market.",
    },
    {
      q: "Is your SEO white-hat?",
      a: "100%. We use only white-hat, Google-compliant SEO techniques — no PBNs, no spammy link schemes, no keyword stuffing. Our link building is built on genuine digital PR, editorial outreach, and content-led acquisition. Everything we do is designed to survive algorithm updates, not exploit them temporarily.",
    },
    {
      q: "Do you guarantee rankings?",
      a: "No — and you should be skeptical of any agency that does. Google controls rankings, not agencies. What we guarantee is a systematic, transparent process — with clear KPIs agreed upfront, monthly reporting on every metric that matters, and a strategy that adjusts when the data tells us to. Our 98% client retention rate reflects that the results speak for themselves.",
    },
    {
      q: "What is your pricing?",
      a: "SEO pricing depends on market competitiveness, keyword targets, and scope of work. We don't publish fixed packages because a local service business targeting one city has different needs than a SaaS company targeting enterprise keywords across three countries. Send us your website and target keywords — we'll respond with a clear, itemized proposal within 24 hours.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 01. Hero Section */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5 relative">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              SEARCH ENGINE OPTIMIZATION
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16 max-w-5xl">
            SEO Services That Rank You <br />
            On Page One. <br />
            <span className="italic text-[#6324FC]">And Keep You There.</span>
          </h1>

          <p className="font-sans font-light text-lg  text-white/40 max-w-3xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
            Most agencies promise rankings. We engineer them.
            <br />
            <br />
            At Injaazh, SEO isn&apos;t a checklist — it&apos;s a full-stack
            growth system. Technical SEO, content strategy, and authority
            building — combined into one relentless campaign designed to
            dominate Google search results across the US, UK, Australia and all
            over the globe.
          </p>

          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase flex items-center gap-4">
                GET A FREE SEO AUDIT
              </span>
              <ArrowUpRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
            </div>
          </button>
        </div>

        {/* 02. Stats Bar */}
        <div className="border-b border-white/5 py-12 md:py-16 bg-white/[0.01] backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 lg:divide-x divide-white/5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center pt-8 md:pt-0 ${
                  i % 2 === 0 ? "border-t-0" : ""
                } hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-10 bg-[#6324FC]/5 blur-2xl rounded-full" />
                </div>
                <div className="font-heading text-5xl md:text-7xl mb-2 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent group-hover:from-[#6324FC] group-hover:to-[#d946ef] transition-all duration-700">
                  <Counter value={stat.value} />
                </div>
                <div className="font-heading text-[10px] tracking-widest text-[#6324FC] uppercase group-hover:text-white/70 transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03. What's Included */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIsIncluded.map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-3xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <h3 className="font-heading text-3xl text-white mb-6 group-hover:text-[#6324FC] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/50 text-lg leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-1.5 bg-white/[0.05] border border-white/5 font-heading text-[10px] tracking-widest text-white/40 uppercase rounded-full group-hover:text-white group-hover:border-[#6324FC]/30 transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 04. Why Injaazh SEO Works */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            Why Injaazh SEO Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {whyItWorks.map((item, i) => (
              <div
                key={i}
                className="space-y-6 border-l border-white/5 pl-8 hover:border-[#6324FC] transition-all duration-500 relative group overflow-hidden"
              >
                <div className="absolute -top-10 -right-5 font-heading text-[10rem] text-white/[0.02] group-hover:text-[#6324FC]/5 transition-colors duration-700 pointer-events-none">
                  0{i + 1}
                </div>
                <h3 className="font-heading text-2xl text-[#6324FC] group-hover:text-white transition-colors duration-500 relative z-10">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-white/50 text-lg leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 05. Our SEO Process */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            Our SEO Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((s, i) => (
              <div key={i} className="relative p-8 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-2xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 group">
                {i < processSteps.length - 1 && (
                  <div className="absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-[#6324FC]/20 to-[#6324FC]/5 hidden lg:block z-0" />
                )}
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white capitalize group-hover:text-[#6324FC] transition-colors duration-500">
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

        {/* SECTION A — Who This Is For */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              SEO CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Is Your Website <br />
                <span className="italic text-[#6324FC]">
                  Invisible On Google?
                </span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                If your competitors are ranking above you and you don&apos;t
                know why — or if you&apos;ve tried SEO before and seen no
                results — the problem is almost certainly the approach, not the
                industry.
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
                  This Is My Situation
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION B — SEO vs Paid Ads */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              THE LONG GAME
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Rent Traffic. <br />
                <span className="italic text-[#6324FC]">Or Own It.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                Paid ads stop the moment you stop paying. SEO compounds — every
                piece of content, every backlink, every technical fix builds on
                the last. Here&apos;s what that looks like in practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 - Paid Ads */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-red-500/10 hover:border-red-500/20 transition-all duration-500">
                <h3 className="font-heading text-3xl text-red-500 mb-8 tracking-tight capitalize">
                  Paid Ads
                </h3>
                <div className="space-y-6">
                  {paidAdsDrawbacks.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <p className="font-sans font-light text-white/50 leading-relaxed text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 - Injaazh SEO */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-[#6324FC]/10 hover:border-[#6324FC]/30 transition-all duration-500">
                <h3 className="font-heading text-3xl text-[#00E5FF] mb-8 tracking-tight capitalize">
                  Injaazh SEO
                </h3>
                <div className="space-y-6">
                  {seoBenefits.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-1" />
                      <p className="font-sans font-light text-white/70 leading-relaxed text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line Alert Banner */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 border border-[#6324FC]/20 text-center max-w-4xl mx-auto">
            <p className="font-sans font-light text-lg  text-white/80 leading-relaxed italic">
              &quot;Ads are a tap. SEO is a well. We build wells.&quot;
            </p>
          </div>
        </div>

        {/* SECTION C — Reporting & Transparency */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              FULL VISIBILITY
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              You See <br />
              <span className="italic text-[#6324FC]">Everything.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              We don&apos;t send you a PDF once a month and call it reporting.
              Every client gets a live dashboard, a monthly strategy call, and a
              written breakdown of exactly what was done, what moved, and
              what&apos;s next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyDeliverables.map((item, i) => (
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
                    <item.icon
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 capitalize">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION D — Frequently Asked Questions */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Frequently Asked{" "}
              <span className="italic text-[#6324FC]">Questions.</span>
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

        {/* 07. Final CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Ready To{" "}
            <span className="italic text-[#6324FC]">Dominate Search?</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Send us your website and target keywords — we&apos;ll respond with a
            clear proposal within 24 hours.
          </p>
          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 mx-auto isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            <div className="relative w-full h-full md:px-16 px-8 py-4 md:py-8 text-xl md:text-2xl rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-6 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative z-10 font-heading text-lg md:text-2xl tracking-widest text-white uppercase text-center flex items-center gap-6">
                START YOUR FREE AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
