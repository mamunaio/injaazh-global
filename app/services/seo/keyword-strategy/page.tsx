"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  Sparkles,
  Brain,
  SlidersHorizontal,
  Target,
  TrendingUp,
  AlertCircle,
  Inbox,
  Briefcase,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function KeywordStrategyPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Semantic Intelligence",
      description:
        "Mapping out entire topic clusters and LSI keywords to ensure you own the topical authority in your niche — so Google sees you as the definitive source, not just another result.",
      icon: Brain,
      color: "#6324FC",
    },
    {
      title: "Competitor Gaps",
      description:
        "Identifying the exact keywords your competitors are ranking for — and where they're failing to capture intent. Every gap is an opportunity we move on before they do.",
      icon: SlidersHorizontal,
      color: "#00E5FF",
    },
    {
      title: "Intent Mapping",
      description:
        "Categorizing keywords by Informational, Navigational, and Transactional intent to align every piece of content with your sales funnel — so the right page captures the right customer at the right stage.",
      icon: Target,
      color: "#FF2D55",
    },
    {
      title: "High-ROI Targets",
      description:
        "Focusing on low-competition, high-intent \"hidden gem\" keywords that drive immediate revenue — because ranking #1 for a keyword nobody buys from is a vanity metric, not a business result.",
      icon: TrendingUp,
      color: "#00FFA3",
    },
  ];

  const bullets = [
    {
      label: "Topic Clusters",
      desc: "Building silos of content that signal deep expertise to search engines — each cluster anchored by a pillar page and supported by satellite content that internally links to reinforce topical authority across the entire subject area.",
    },
    {
      label: "Long-Tail Logic",
      desc: "Capturing hyper-specific queries that have lower competition but 4x higher conversion — because a user who searches \"best project management software for remote teams under $50\" is infinitely more valuable than one who searches \"project management software.\"",
    },
    {
      label: "Seasonal Strategy",
      desc: "Predicting search trends before they happen to give you the first-mover advantage — using 24-month trend data, industry seasonality patterns, and Google Search Console forecasting to publish content before search volume peaks.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Mining",
      desc: "Using advanced AI tools and manual research to discover high-potential keywords your competitors are missing — seed keyword expansion, question-based queries, forums, Reddit, and \"People Also Ask\" data mined for untapped intent.",
    },
    {
      step: "02",
      title: "Clustering",
      desc: "Grouping thousands of keywords into logical topic clusters to build massive topical authority — each cluster mapped to a content type, funnel stage, and target page so nothing overlaps and nothing is wasted.",
    },
    {
      step: "03",
      title: "Funneling",
      desc: "Directing the right keywords to the right pages to ensure maximum user relevance and conversion — so your homepage captures brand intent, your service pages capture transactional intent, and your blog captures awareness intent. Every page has a purpose.",
    },
  ];

  const mistakes = [
    {
      title: "Mistake 01 — Chasing Volume Over Intent",
      desc: "Ranking for \"what is project management\" when you sell project management software brings readers, not buyers. Every keyword in our strategy is evaluated for commercial intent before it makes the cut.",
    },
    {
      title: "Mistake 02 — Ignoring the Full Funnel",
      desc: "Most strategies only target bottom-of-funnel transactional keywords — and ignore the 80% of searches that happen before a purchase decision is made. We map the entire journey so your brand appears at every stage.",
    },
    {
      title: "Mistake 03 — No Competitor Gap Analysis",
      desc: "Your competitors have already done years of SEO work. We identify exactly which keywords they rank for, which pages drive their traffic, and — more importantly — which high-value keywords they're missing. That's where we start.",
    },
    {
      title: "Mistake 04 — Static Strategy",
      desc: "Keyword landscapes shift with algorithm updates, seasonality, and competitor moves. Our strategy is reviewed and updated monthly — so you're always targeting what's working now, not what worked six months ago.",
    },
  ];

  const deliverables = [
    {
      title: "Master Keyword Universe",
      desc: "Every keyword researched, scored, and categorized — by intent type, funnel stage, monthly search volume, keyword difficulty, and estimated traffic value. Filtered down to only the keywords worth targeting.",
      icon: Inbox,
      color: "#6324FC",
    },
    {
      title: "Topic Cluster Map",
      desc: "A visual and documented content architecture — showing which pillar pages and supporting articles to create, how they interlink, and what topical authority each cluster will build over time.",
      icon: Layers,
      color: "#00E5FF",
    },
    {
      title: "Competitor Keyword Gap Report",
      desc: "A side-by-side analysis of your top 3–5 competitors — showing which keywords they rank for that you don't, which pages drive their organic traffic, and where the highest-value gaps exist for immediate capture.",
      icon: SlidersHorizontal,
      color: "#FF2D55",
    },
    {
      title: "Priority Target List (90-Day)",
      desc: "The 20–30 highest-impact keywords to target first — selected for the best combination of search volume, keyword difficulty, commercial intent, and current ranking proximity. Sequenced for maximum momentum.",
      icon: Target,
      color: "#00FFA3",
    },
    {
      title: "Content Brief Templates",
      desc: "For each priority keyword, a structured content brief — including target word count, required headings, semantic keywords to include, internal link suggestions, and the search intent the content must satisfy.",
      icon: Briefcase,
      color: "#FACC15",
    },
  ];

  const faqs = [
    {
      q: "How many keywords will the strategy cover?",
      a: "It depends on your industry and site size, but a typical strategy covers 500–2,000 researched and scored keywords, filtered down to a priority list of 20–50 immediate targets. We don't hand you volume — we hand you a ranked, actionable plan.",
    },
    {
      q: "How do you decide which keywords to prioritize?",
      a: "We score every keyword across four dimensions: search volume, keyword difficulty, commercial intent, and your current ranking position. Keywords where you already rank on page 2 or 3 get priority — they deliver the fastest ranking gains for the least effort. New keywords are selected based on intent value and competitive gap.",
    },
    {
      q: "Do you do keyword research for e-commerce, SaaS, and service businesses?",
      a: "Yes — and the approach is different for each. E-commerce keyword strategy centers on product, category, and comparison intent. SaaS strategy focuses on problem-aware, solution-aware, and alternative-search intent. Service businesses need a mix of local, service-specific, and trust-building content keywords. We build the right strategy for your specific model.",
    },
    {
      q: "How often should keyword strategy be updated?",
      a: "At minimum, quarterly. Algorithm updates, competitor moves, and seasonal trends shift keyword landscapes continuously. Clients on our ongoing SEO retainer receive a monthly keyword review as part of the engagement — so the strategy always reflects current conditions.",
    },
    {
      q: "Can I use this keyword strategy with my existing content team?",
      a: "Yes. The content brief templates we deliver are written to be handed directly to your writers or content team. No SEO knowledge required — each brief tells them exactly what to write, what to include, and what intent to satisfy.",
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
              <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
                SEARCH INTELLIGENCE
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Keyword <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Strategy.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don't just chase volume — we chase conversion. Our keyword
              strategies are engineered to capture the exact intent of your most
              valuable customers, at the exact moment they're ready to act.
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
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                  Build Your Strategy
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
              alt="Keyword Strategy Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center p-12">
              <div className="font-heading text-6xl text-white tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-700">
                User Intent
              </div>
              <div className="font-heading text-[10px] tracking-[0.8em] text-[#6324FC] capitalize mt-4">
                Semantic Mapping
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02. Targeting With Surgical Intent */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Targeting With <br />
              <span className="italic text-[#6324FC]">Surgical Intent.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Finding the right keywords is about understanding the human
              psychology behind the search query — not just pulling a list from
              a tool and calling it a strategy.
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
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-xl relative flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <f.icon className="w-24 h-24 text-white" />
                </div>
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${f.color}15`,
                      border: `1px solid ${f.color}30`,
                    }}
                  >
                    <f.icon className="w-8 h-8" style={{ color: f.color }} />
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 capitalize">
                    {f.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 03. Mapping The Journey */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <SlidersHorizontal className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Intent Funnel // V2.0
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-4">
                {[
                  {
                    label: "Informational",
                    val: "Awareness",
                    width: "100%",
                    opacity: 0.1,
                  },
                  {
                    label: "Navigational",
                    val: "Consideration",
                    width: "80%",
                    opacity: 0.3,
                  },
                  {
                    label: "Transactional",
                    val: "Action",
                    width: "60%",
                    opacity: 0.6,
                  },
                  {
                    label: "High-Intent",
                    val: "Revenue",
                    width: "40%",
                    opacity: 1,
                  },
                ].map((step, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="font-heading text-xl text-white capitalize">
                        {step.label}
                      </span>
                      <span className="font-heading text-[9px] text-white/30 capitalize tracking-widest">
                        {step.val}
                      </span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: step.width }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="h-full bg-[#6324FC]"
                        style={{ opacity: step.opacity }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Conversion Mapping</span>
                <span>ROI Protocol Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                Mapping The <br />
                <span className="italic text-[#6324FC]">Journey.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                Keywords are the breadcrumbs of user intent. We analyze how your
                customers talk, search, and behave to build a comprehensive
                search universe for your brand — from first awareness to final
                purchase.
              </p>

              <div className="space-y-8">
                {bullets.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize">
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

        {/* 04. The Keyword Evolution */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            The Keyword <span className="italic text-[#6324FC]">Evolution.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white capitalize">
                    Step {s.step} — {s.title}
                  </h3>
                  <p className="font-sans font-light text-lg text-white/40 leading-relaxed border-l border-white/10 pl-8 group-hover:border-[#6324FC] transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION A — THE PROBLEM WITH MOST KEYWORD RESEARCH */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              WHY MOST STRATEGIES FAIL
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                High Volume. <br />
                <span className="italic text-[#6324FC]">Zero Revenue.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                Most keyword strategies are built around search volume — the
                wrong metric. A keyword with 50,000 monthly searches and no
                commercial intent will drive traffic that bounces. We build
                strategies around intent, competition, and conversion
                probability — not vanity numbers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mistakes.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-500 group flex gap-4"
                >
                  <AlertCircle className="w-5 h-5 text-[#6324FC] shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h4 className="font-heading text-lg text-white group-hover:text-[#6324FC] transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-sans font-light text-sm text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION B — WHAT YOU RECEIVE */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              KEYWORD STRATEGY DELIVERABLES
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              A Strategy. <br />
              <span className="italic text-[#6324FC]">
                Not Just A Spreadsheet.
              </span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Our keyword strategy deliverable is a structured, prioritized, and
              immediately actionable document — not a raw export from Ahrefs
              with 10,000 unfiltered keywords and no direction.
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
                    <item.icon
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
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

        {/* SECTION C — KEYWORD STRATEGY FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Keyword Strategy <span className="italic text-[#6324FC]">FAQ.</span>
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

        {/* 05. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Own The <span className="italic text-[#6324FC]">Search.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop guessing and start dominating? Let's build a keyword
            strategy that puts your brand in front of the right audience at the
            right time.
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
                START STRATEGY SESSION
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
