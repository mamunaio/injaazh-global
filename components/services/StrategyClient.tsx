"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Check,
  X,
  Target,
  BarChart3,
  TrendingDown,
  Layers,
  Zap,
  Globe,
  PieChart,
  Activity,
  ShieldAlert,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function StrategyClient() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "+25%", label: "AVERAGE MARKET SHARE GROWTH" },
    { value: "100%", label: "STRATEGY ALIGNMENT" },
    { value: "High", label: "BRAND EQUITY" },
    { value: "95%", label: "MARKET FIT SCORE" },
  ];

  const whatIsIncluded = [
    {
      title: "Digital Transformation",
      desc: "The gap between where you are and where you need to be — bridged. We audit your entire digital presence, identify inefficiencies, and build a transformation roadmap that modernizes your business from the inside out.",
      tags: ["DIGITAL AUDIT", "ROADMAPPING", "PROCESS OPTIMIZATION", "TECH STACK"],
    },
    {
      title: "Business Intelligence & Analytics",
      desc: "You can't improve what you don't measure. We implement analytics frameworks, build custom dashboards, and translate raw data into clear, actionable insights — so every business decision is backed by real numbers, not gut feeling.",
      tags: ["GOOGLE ANALYTICS 4", "DATA STUDIO", "KPI DASHBOARDS", "REPORTING"],
    },
    {
      title: "UX Audit & Optimization",
      desc: "Your website might be losing clients right now — and you don't know it. We conduct comprehensive UX audits using heatmaps, session recordings, and conversion data to identify exactly where visitors drop off and why — then fix it.",
      tags: ["HEATMAPS", "SESSION RECORDING", "A/B TESTING", "CRO"],
    },
  ];

  const whyItWorks = [
    {
      title: "Full-Service Perspective",
      desc: "Most strategy consultants hand you a report and disappear. At Injaazh, strategy and execution live under the same roof — so our recommendations are always grounded in what can actually be built, ranked, and marketed right now. No ivory-tower advice.",
    },
    {
      title: "Western Market Intelligence",
      desc: "We understand the competitive landscape of US, UK, and Australian digital markets — including search behavior, platform preferences, buying psychology, and industry benchmarks specific to each region. Strategy built for the market you're actually targeting.",
    },
    {
      title: "KPIs Agreed Upfront",
      desc: "Every strategy engagement begins with clearly defined success metrics. We agree on KPIs before work starts — so you always know what success looks like, how we're tracking toward it, and exactly what you're paying for.",
    },
  ];

  const processSteps = [
    {
      id: "01",
      title: "Discovery & Audit",
      desc: "A deep dive into your business, your market, your competitors, and your current digital performance. We ask the hard questions — because the right strategy starts with the right diagnosis, not assumptions.",
    },
    {
      id: "02",
      title: "Insight & Opportunity Mapping",
      desc: "We translate audit findings into clear opportunities — ranked by impact, effort, and timeline. You see exactly where the biggest gains are, in what order to pursue them, and why.",
    },
    {
      id: "03",
      title: "Roadmap & Planning",
      desc: "A prioritized, actionable digital roadmap with clear milestones, owners, timelines, and KPIs. Not a 100-page PDF you'll never read — a practical plan you'll actually execute, built for your team's capacity.",
    },
    {
      id: "04",
      title: "Execute & Measure",
      desc: "Strategy without execution is just theory. We implement the roadmap across web, SEO, marketing, and content — measuring progress at every step and adapting as the market evolves.",
    },
  ];

  const faqs = [
    {
      q: "What Is A Digital Strategy Engagement?",
      a: "A digital strategy engagement is a structured process where we analyze your business, market, and competitors — then build a clear, prioritized roadmap for digital growth. It covers everything from your website architecture and SEO position to your content strategy, analytics setup, and conversion funnel. Think of it as a complete diagnosis and prescription for your digital presence.",
    },
    {
      q: "How Long Does A Strategy Project Take?",
      a: "A focused strategy engagement — including audit, insight mapping, and roadmap delivery — typically takes 3–4 weeks. For larger enterprises with multiple business units or international markets, 6–8 weeks is more realistic. Every engagement starts with a scoping call so timelines are set and agreed before work begins.",
    },
    {
      q: "Do You Implement The Strategy Too?",
      a: "Yes. Unlike pure strategy consultants, Injaazh has the full execution capability in-house — web development, SEO, content, and paid media. You can commission the strategy alone, or have us implement it end-to-end. Most clients choose the latter, because strategy and execution under one roof eliminates the gap between plan and result.",
    },
    {
      q: "Who Is Digital Strategy For?",
      a: "Digital strategy is for businesses that are growing but not scaling — you're doing the work, but the results aren't compounding. It's also for businesses entering new markets (US, UK, AU), launching new products, or rebuilding after a period of stagnation. If you're spending on digital but can't clearly see the ROI, that's exactly the problem we solve.",
    },
    {
      q: "How Much Does A Strategy Engagement Cost?",
      a: "Strategy engagements are scoped individually based on business complexity, number of markets, and scope of audit required. We don't publish fixed prices because a single-market SME and a multi-market enterprise have fundamentally different needs. Book a free 30-minute strategy call and we'll outline the right engagement for your goals — with transparent pricing upfront.",
    },
  ];

  const problemCards = [
    {
      title: "You're spending on tactics that don't connect",
      description: "SEO, paid ads, content, and social all running independently — with no shared goal, no unified message, and no way to measure which channel is actually driving revenue.",
      icon: TrendingDown,
      color: "#FF2D55",
    },
    {
      title: "Your competitors are outpositioning you",
      description: "While you're reacting to the market, your competitors are executing against a plan. Strategy is what separates businesses that grow predictably from businesses that grow accidentally.",
      icon: Target,
      color: "#6324FC",
    },
    {
      title: "You can't measure what's working",
      description: "Without the right analytics infrastructure, you're flying blind. Budget gets allocated to the loudest voice in the room — not the highest-performing channel.",
      icon: BarChart3,
      color: "#00E5FF",
    },
    {
      title: "Every pivot costs double",
      description: "Without a roadmap, every strategic shift means wasted spend, rework, and lost momentum. A clear strategy makes pivots faster, cheaper, and less damaging.",
      icon: Layers,
      color: "#00FFA3",
    },
  ];

  const deliverables = [
    {
      title: "Digital Audit Report",
      description: "A comprehensive audit of your current website, SEO position, analytics setup, competitor landscape, and conversion funnel — with every gap documented and prioritized.",
    },
    {
      title: "Market Intelligence Brief",
      description: "A deep analysis of your target market in the US, UK, or AU — including search demand, competitor positioning, audience psychology, and whitespace opportunities.",
    },
    {
      title: "90-Day Growth Roadmap",
      description: "A prioritized, week-by-week action plan across web, SEO, content, and marketing — with clear owners, milestones, and KPIs for every initiative.",
    },
    {
      title: "KPI Dashboard Setup",
      description: "GA4 and Looker Studio configured to track the metrics that actually matter for your business — so you see progress in real time, not in a monthly PDF.",
    },
    {
      title: "Tech Stack Recommendation",
      description: "A clear recommendation on which tools, platforms, and integrations will support your strategy — and which ones to cut.",
    },
    {
      title: "Quarterly Review Protocol",
      description: "A framework for reviewing performance, adapting the roadmap, and identifying the next wave of opportunities — so strategy never becomes static.",
    },
  ];

  const triggers = [
    "You're scaling into the US, UK, or Australian market and don't have a clear digital entry strategy",
    "You're spending on SEO, ads, or content — but can't attribute any of it to revenue",
    "Your team is executing on multiple fronts with no shared roadmap or aligned KPIs",
    "You've tried agencies before but got tactics without strategy — deliverables without direction",
    "You're preparing for investment, acquisition, or a major product launch and need your digital presence to reflect that",
    "You know your digital performance is underperforming — but don't know which lever to pull first",
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
    <main className="w-full min-h-screen bg-[#060608] text-white pt-32 pb-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-sm tracking-[0.5em] text-[#6324FC] capitalize">
              DIGITAL STRATEGY
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-12">
            Digital Strategy Services <br />
            That Turn Vision Into <br />
            <span className="italic text-[#6324FC]">Market Domination.</span>
          </h1>

          <div className="font-sans font-light text-lg text-white/50 leading-relaxed max-w-3xl mb-12 border-l border-white/10 pl-8 space-y-4">
            <p className="font-medium text-white">Tactics without strategy is just expensive experimentation.</p>
            <p>
              At Injaazh, strategy comes before everything else. We analyze your
              market, your competitors, and your customers — then build a clear,
              data-backed roadmap that aligns every digital decision with one
              goal: sustainable, scalable growth across the US, UK, and Australia.
            </p>
          </div>

          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>

            <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-xl tracking-widest text-white uppercase text-center">
                BOOK A FREE STRATEGY CALL{" "}
                <ArrowUpRight className="w-5 h-5 text-[#6324FC] group-hover:text-white transition-all duration-500" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-white/5 bg-white/[0.01] py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="py-8 lg:py-12 px-6 text-center">
              <div className="font-heading text-4xl md:text-6xl text-white mb-2">
                {stat.value}
              </div>
              <div className="font-heading text-[10px] tracking-widest text-white/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* [NEW] SECTION A — THE COST OF OPERATING WITHOUT A STRATEGY */}
      <section className="w-full bg-[#060608] py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="w-5 h-5 text-[#FF2D55]" />
                <span className="font-heading text-xs tracking-widest text-[#FF2D55] uppercase">
                  UNREALIZED LOSSES
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                What Operating Without <br />
                <span className="italic text-[#FF2D55]">A Strategy Costs You.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#FF2D55]/40 pl-8 lg:mt-8">
              Most businesses don't fail because of bad products. They fail because of fragmented execution — teams pulling in different directions, budgets spent on tactics that don't compound, and decisions made on instinct instead of data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {problemCards.map((card, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-500 relative"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: `${card.color}15`,
                    border: `1px solid ${card.color}30`,
                  }}
                >
                  <card.icon className="w-6 h-6" style={{ color: card.color }} />
                </div>
                <h3 className="font-heading text-2xl text-white mb-3 capitalize">
                  {card.title}
                </h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openModal()}
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(255,45,85,0.2)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#FF2D55,#6324FC,#FF2D55)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-lg tracking-widest text-white uppercase text-center">
                  Stop Guessing
                  <ArrowRight className="w-5 h-5 text-[#FF2D55] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                  Book A Strategy Call
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whatIsIncluded.map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-3xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-3xl mb-4 group-hover:text-[#6324FC] transition-colors duration-500">{item.title}</h3>
                  <p className="font-sans font-light text-white/50 text-lg leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-1.5 bg-white/[0.05] border border-white/5 font-heading text-[10px] tracking-widest text-white/40 capitalize rounded-full group-hover:text-white group-hover:border-[#6324FC]/30 transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INJAAZH STRATEGY WORKS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            Why Injaazh Strategy Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {whyItWorks.map((item, i) => (
              <div
                key={i}
                className="relative space-y-4 p-8 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-[#6324FC]/20 transition-all duration-500 group overflow-hidden"
              >
                {/* Huge background number */}
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
      </section>

      {/* [NEW] SECTION B — WHAT A STRATEGY ENGAGEMENT DELIVERS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-[#6324FC]" />
              <span className="font-heading text-xs tracking-widest text-[#6324FC] uppercase">
                SYSTEMIC OUTPUTS
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white mb-6">
              Your Strategy <br />
              <span className="italic text-[#6324FC]">Deliverables.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 leading-relaxed">
              At the end of every Injaazh strategy engagement, you receive a complete digital growth system — not a presentation deck that gathers dust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading text-sm text-[#00E5FF] mb-4">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STRATEGY PROCESS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            Our Strategy Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative p-8 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-2xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 group"
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-[#6324FC]/20 to-[#6324FC]/5 hidden lg:block z-0" />
                )}
                <div className="font-heading text-xs text-[#6324FC] mb-4 group-hover:text-white transition-colors duration-500 relative z-10">
                  {step.id}
                </div>
                <h3 className="font-heading text-xl mb-3 group-hover:text-[#6324FC] transition-colors duration-500 relative z-10">{step.title}</h3>
                <p className="font-sans font-light text-white/40 text-sm leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [NEW] SECTION C — WHO THIS IS FOR (Self-Qualification) */}
      <section className="w-full bg-[#060608] py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-5 h-5 text-[#00E5FF]" />
                <span className="font-heading text-xs tracking-widest text-[#00E5FF] uppercase">
                  PARTNERSHIP FIT
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                Is This <br />
                <span className="italic text-[#00E5FF]">Right For You?</span>
              </h2>
            </div>
            <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#00E5FF]/40 pl-8 lg:mt-8">
              We work best with businesses that are serious about growth — and ready to move from reactive to deliberate. If any of these sound familiar, we should talk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {triggers.map((trigger, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-500 flex items-start gap-4"
              >
                <div className="w-5 h-5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-[#00E5FF]" />
                </div>
                <p className="font-sans font-light text-white/60 text-base leading-relaxed">
                  {trigger}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openModal()}
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#00E5FF,#6324FC,#00E5FF)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-lg tracking-widest text-white uppercase text-center">
                  This Is Us
                  <ArrowRight className="w-5 h-5 text-[#00E5FF] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                  Book A Free Strategy Call
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="font-sans text-xl text-white group-hover:text-[#6324FC] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-500 shrink-0 ml-4 ${
                      openFaq === i ? "rotate-180 text-[#6324FC]" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openFaq === i ? "500px" : "0px",
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <div className="pb-6">
                    <p className="font-sans font-light text-white/50 text-lg leading-relaxed max-w-4xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/5 text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8">
            Ready To Dominate Your Market?
          </h2>
          <p className="font-sans font-light text-xl text-white/50 max-w-2xl mx-auto mb-12">
            Book a free 30-minute strategy call and we'll outline the right engagement for your goals — no sales pitch, no obligation. Just a clear conversation about where you are, where you want to be, and what it will take to get there.
          </p>
          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 mx-auto isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>

            <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-2xl tracking-widest text-white uppercase text-center">
                BOOK A FREE STRATEGY CALL
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
