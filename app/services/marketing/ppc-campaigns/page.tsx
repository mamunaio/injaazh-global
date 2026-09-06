"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Search,
  Users2,
  Rocket,
  BarChart4,
  DollarSign,
  AlertCircle,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function PPCCampaignsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Google Ads Dominance",
      description:
        "Capturing high-intent search traffic with surgical precision and industry-leading click-through rates — Search, Shopping, Display, and Performance Max campaigns built to dominate every placement Google offers.",
      icon: Search,
      color: "#6324FC",
    },
    {
      title: "Meta Ads Scaling",
      description:
        "Driving massive brand awareness and direct-response sales through advanced social targeting algorithms — Lookalike audiences, interest stacking, and creative testing at scale across Facebook and Instagram.",
      icon: Users2,
      color: "#00E5FF",
    },
    {
      title: "Retargeting Ops",
      description:
        "Recapturing lost visitors and maximizing lifetime value through intelligent cross-channel retargeting funnels — because 97% of first-time visitors don't convert, and most agencies let them disappear forever.",
      icon: Rocket,
      color: "#FF2D55",
    },
    {
      title: "Conversion Tracking",
      description:
        "Implementing end-to-end attribution models to ensure every dollar spent is accounted for in revenue — GA4, server-side tracking, and cross-platform attribution so you always know your true ROAS.",
      icon: BarChart4,
      color: "#00FFA3",
    },
  ];

  const bullets = [
    {
      label: "Predictive Bidding",
      desc: "AI-driven bidding strategies that optimize for conversion value in real-time — Smart Bidding, Target ROAS, and Enhanced CPC configured for your specific margin targets, not Google's default recommendations.",
    },
    {
      label: "Dynamic Creatives",
      desc: "Automated ad testing to ensure the most resonant message always wins — continuous A/B testing of headlines, descriptions, and visuals so your best-performing creative gets the budget, automatically.",
    },
    {
      label: "Funnel Shielding",
      desc: "Protecting your brand from low-quality traffic and bot clicks — negative keyword lists, audience exclusions, IP filtering, and click fraud protection built into every campaign from day one.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Funnel Mapping",
      desc: "Analyzing your customer journey to identify the highest leverage points for paid traffic injection — where in the funnel does a click become a customer? We map it before we spend a dollar.",
    },
    {
      step: "02",
      title: "Campaign Launch",
      desc: "Deploying multi-channel campaigns across Google, Meta, and LinkedIn with surgical audience targeting — every campaign structured with clear conversion goals, tracking verified, and creative reviewed before launch.",
    },
    {
      step: "03",
      title: "Aggressive Scaling",
      desc: "Continuously monitoring performance and increasing spend on winning campaigns to maximize total revenue — budget follows results. What performs gets more. What doesn't gets cut or fixed, fast.",
    },
  ];

  const checklistItems = [
    "You're spending $3,000+ per month on ads with inconsistent returns",
    "You can't clearly attribute which campaign drove which revenue",
    "Your Google Ads account was set up years ago and never restructured",
    "Your Meta ads worked once but performance has steadily declined",
    "You're scaling into the US, UK, or Australian market with paid traffic",
    "You want to reduce CPA while increasing total conversion volume",
  ];

  const mistakes = [
    {
      title: "Bad PPC Agency",
      items: [
        "Reports on CTR and impressions — not revenue",
        "Sets up campaigns once, rarely touches them again",
        "Uses broad match keywords to inflate click volume",
        "No conversion tracking — \"trust us, it's working\"",
        "Same generic creative for every audience",
        "No negative keyword management — budget bleeds daily",
      ],
      isPositive: false,
    },
    {
      title: "Injaazh PPC",
      items: [
        "Every report ties spend directly to revenue and ROAS",
        "Campaigns reviewed and optimized weekly, minimum",
        "Intent-matched keyword strategy with strict match types",
        "End-to-end conversion tracking verified before launch",
        "Audience-specific creative tested and rotated continuously",
        "Negative keyword lists built and expanded every week",
      ],
      isPositive: true,
    },
  ];

  const platformsList = [
    {
      title: "Google Search",
      subtitle: "High-intent search",
      desc: "High-intent keyword targeting for buyers actively searching for your product or service. Highest conversion intent of any paid channel — when structured and managed correctly.",
      icon: Search,
      color: "#6324FC",
    },
    {
      title: "Google Shopping",
      subtitle: "Product feed optimization",
      desc: "Product feed-driven campaigns for e-commerce. We optimize product titles, descriptions, and bidding strategies to maximize visibility and ROAS across Shopping and Performance Max placements.",
      icon: Globe,
      color: "#00E5FF",
    },
    {
      title: "Google Display & YouTube",
      subtitle: "Awareness & storytelling",
      desc: "Awareness and retargeting at scale. Display campaigns to stay top-of-mind between touchpoints. YouTube pre-roll for brand storytelling and product demonstrations that build purchase intent.",
      icon: YoutubeIcon,
      color: "#FF2D55",
    },
    {
      title: "Meta Search & Feed Ads",
      subtitle: "Demand generation",
      desc: "Demand generation for B2C and e-commerce. Scroll-stopping static and video creative deployed to custom, Lookalike, and interest-based audiences across Facebook and Instagram feeds and stories.",
      icon: FacebookIcon,
      color: "#00FFA3",
    },
    {
      title: "LinkedIn Sponsored Content",
      subtitle: "B2B professional targeting",
      desc: "B2B demand generation with unmatched professional targeting. Job title, company size, industry, seniority — we reach decision-makers where they consume content, not where they're forced to see ads.",
      icon: LinkedinIcon,
      color: "#FACC15",
    },
    {
      title: "Retargeting Across All Platforms",
      subtitle: "Cross-channel sequences",
      desc: "Cross-channel retargeting sequences that follow warm visitors from first click to final conversion — Google Display, Meta retargeting, and LinkedIn Matched Audiences deployed in sequence.",
      icon: Rocket,
      color: "#6324FC",
    },
  ];

  const faqs = [
    {
      q: "What's a realistic ROAS to expect?",
      a: "ROAS varies significantly by industry, product price point, and competitive landscape. E-commerce campaigns typically target 3x–6x ROAS. Service businesses with higher ticket sizes often see lower volume but 8x–15x ROAS on closed deals. We set target ROAS based on your margin profile — not industry averages — and build campaigns around achieving it profitably.",
    },
    {
      q: "How long before my campaigns are profitable?",
      a: "Google Search campaigns with clear commercial intent can generate profitable leads within 14–21 days of launch. Meta campaigns typically require 30–45 days to exit the learning phase. The first month is rarely your best month — it's the data collection period that makes every subsequent month more efficient. We set expectations based on your specific product and market before we start.",
    },
    {
      q: "Do you take a percentage of ad spend as your fee?",
      a: "No. We charge a flat monthly management fee based on campaign scope — not a percentage of your ad spend. Percentage-based fees create a conflict of interest where the agency benefits from you spending more, regardless of performance. Our fee is fixed; our incentive is to make your campaigns as profitable as possible.",
    },
    {
      q: "Can you take over an existing ad account?",
      a: "Yes. We conduct a full account audit before taking over — reviewing campaign structure, keyword strategy, audience targeting, tracking setup, and historical performance data. We tell you exactly what's working, what isn't, and what we're changing before we touch anything.",
    },
    {
      q: "How do you handle campaigns that aren't performing?",
      a: "We diagnose before we change. Underperforming campaigns are analyzed for the root cause — creative fatigue, keyword mismatch, landing page drop-off, or audience exhaustion. We identify the specific lever and fix it. If a campaign is structurally broken, we rebuild it. You're informed at every step.",
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
                GROWTH DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              PPC <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Campaigns.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We turn ad spend into exponential revenue. Our PPC strategies are
              engineered for maximum ROAS and rapid global scalability — because
              every dollar you spend should return a multiple, not a report.
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
                  Scale Your Revenue
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group flex items-center justify-center"
          >
            <Image
              src="/assets/scalia_app_final.webp"
              alt="PPC Performance Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl">
              <div className="font-heading text-6xl text-white tracking-tighter shadow-text animate-pulse">
                8.4x
              </div>
              <div className="font-heading text-[10px] tracking-[0.5em] text-[#6324FC] capitalize mt-2">
                Average ROAS
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02. Performance Without Limits */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Performance <br />
              <span className="italic text-[#6324FC]">Without Limits.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              We manage millions in ad spend with a single focus: maximizing
              your bottom-line profitability. Not impressions. Not clicks.
              Revenue.
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

        {/* 03. Scale With Precision */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <DollarSign className="w-8 h-8 text-[#00FFA3]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Revenue Node // V4.2
                </div>
              </div>

              <div className="space-y-8 flex-1 flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="font-heading text-[9px] text-white/20 capitalize tracking-widest">
                    Monthly Ad Spend
                  </div>
                  <div className="font-heading text-5xl text-white tracking-tighter">
                    $50,000
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                      New Customers
                    </div>
                    <div className="font-heading text-4xl text-white">
                      +1,240
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-heading text-[9px] text-[#00FFA3] capitalize tracking-widest">
                      Total Revenue
                    </div>
                    <div className="font-heading text-4xl text-white font-bold">
                      $420,000
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Performance Mode</span>
                <span>Real-Time Sync Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                Scale With <br />
                <span className="italic text-[#00FFA3]">Precision.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We use advanced predictive modeling and behavioral analysis to
                identify the exact moments when your customers are ready to buy
                — then deploy budget at those moments with machine precision.
              </p>

              <div className="space-y-8">
                {bullets.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] mt-2 group-hover:scale-150 transition-transform" />
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

        {/* 04. The Growth Protocol */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            The Growth <span className="italic text-[#6324FC]">Protocol.</span>
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

        {/* SECTION A — WHO THIS IS FOR */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              PPC CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Are Your Ads <br />
                <span className="italic text-[#6324FC]">Burning Budget?</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                If you're running paid campaigns and your ROAS is under 3x, your
                cost-per-lead is rising month over month, or you have no clear
                attribution — you don't have a spend problem. You have a
                strategy problem.
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
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                  Audit My Ad Account
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION B — WHAT A BAD PPC AGENCY LOOKS LIKE */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              THE WARNING SIGNS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                You're Paying For <br />
                <span className="italic text-[#6324FC]">
                  Impressions, Not Revenue.
                </span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              Most PPC agencies optimize for metrics that look good in reports
              — CTR, impressions, traffic. We optimize for the only metric
              that matters: revenue. Here's how we're different.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {mistakes.map((table, i) => (
              <div
                key={i}
                className={`p-10 rounded-[2.5rem] bg-white/[0.01] border transition-all duration-500 relative overflow-hidden ${
                  table.isPositive
                    ? "border-[#6324FC]/30 hover:border-[#6324FC]/50"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {table.isPositive && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#6324FC]/10 blur-3xl rounded-full pointer-events-none" />
                )}
                <h3
                  className={`font-heading text-3xl mb-8 ${
                    table.isPositive ? "text-[#6324FC]" : "text-white/60"
                  }`}
                >
                  {table.title}
                </h3>
                <ul className="space-y-6">
                  {table.items.map((item, j) => (
                    <li key={j} className="flex gap-4 items-start">
                      {table.isPositive ? (
                        <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-1" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      )}
                      <span className="font-sans font-light text-white/70 text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center max-w-4xl mx-auto">
            <p className="font-sans font-light text-lg text-white/70">
              <strong className="font-heading text-white">Bottom Line:</strong>{" "}
              A bad PPC agency will spend your budget and show you a slide deck.
              We show you revenue.
            </p>
          </div>
        </div>

        {/* SECTION C — PLATFORMS & CAMPAIGN TYPES */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              FULL PLATFORM COVERAGE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Every Platform. <br />
                <span className="italic text-[#6324FC]">Every Format.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              We run PPC across every major paid platform — selecting the right
              combination for your product, price point, and target market. Not
              every platform is right for every business. We tell you which
              ones are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformsList.map((chan, i) => (
              <div
                key={i}
                className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${chan.color}15`,
                        border: `1px solid ${chan.color}30`,
                      }}
                    >
                      <chan.icon
                        className="w-6 h-6"
                        style={{ color: chan.color }}
                      />
                    </div>
                    <span className="font-sans font-light text-[10px] tracking-widest text-[#00E5FF] uppercase">
                      {chan.subtitle}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 group-hover:text-[#6324FC] transition-colors">
                    {chan.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-sm leading-relaxed">
                    {chan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION D — PPC FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              PPC <span className="italic text-[#6324FC]">FAQ.</span>
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
            Initiate <span className="italic text-[#6324FC]">Ascension.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop burning money and start generating high-margin
            revenue? Let's build a PPC strategy that actually scales.
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
                START PPC AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
