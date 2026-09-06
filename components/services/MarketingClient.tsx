"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  Sparkles,
  TrendingUp,
  Target,
  Layers,
  LineChart,
  Globe,
  Mail,
  Search,
  Zap,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";
import Counter from "@/components/Counter";

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

export default function MarketingClient() {
  const { openModal } = useProjectModal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const stats = [
    { value: "4.5x", label: "Average ROAS" },
    { value: "40%", label: "CPA Reduction" },
    { value: "95%", label: "Audience Match Rate" },
    { value: "20+", label: "Countries Served" },
  ];

  const whatIsIncluded = [
    {
      title: "Google Ads (PPC)",
      desc: "Put your business in front of people actively searching for what you offer. We build, manage, and optimize Google Search, Display, and Shopping campaigns with one goal — maximum return on every dollar you spend.",
      tags: ["Search Ads", "Shopping", "Display", "Remarketing"],
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Reach the right audience before they even know they need you. We design scroll-stopping creative and build precision-targeted Meta campaigns that drive awareness, leads, and sales across US, UK, and AU markets.",
      tags: ["Facebook", "Instagram", "Lookalike", "Retargeting"],
    },
    {
      title: "Social Media Marketing",
      desc: "Consistency builds brands. We manage your social presence across LinkedIn, Instagram, Facebook, and X — creating content that builds authority, drives engagement, and keeps your brand top-of-mind for your target audience.",
      tags: ["LinkedIn", "Instagram", "Facebook", "X (Twitter)"],
    },
    {
      title: "Email Marketing",
      desc: "Your most underutilized growth channel. We build automated email sequences, newsletters, and drip campaigns that nurture leads, retain clients, and generate revenue on autopilot — without touching your ad budget.",
      tags: ["Klaviyo", "Mailchimp", "Automation", "Sequences"],
    },
    {
      title: "Conversion Rate Optimization",
      desc: "More traffic means nothing if it doesn't convert. We analyze your funnel, identify drop-off points, and implement data-backed changes that turn more of your existing visitors into paying clients.",
      tags: ["A/B Testing", "Heatmaps", "Landing Pages", "UX"],
    },
  ];

  const whyItWorks = [
    {
      title: "Western Market Specialists",
      desc: "US, UK, and Australian consumers behave differently online. We understand their search intent, buying psychology, and platform preferences — and we build campaigns that speak their language and match their expectations.",
    },
    {
      title: "Data First, Always",
      desc: "Every decision we make is backed by data — not opinions. We track every click, conversion, and dollar spent, and we use that data to continuously improve your campaign performance month over month.",
    },
    {
      title: "Full-Funnel Approach",
      desc: "We don't just run ads — we build complete marketing funnels. From first impression to final purchase, every touchpoint is optimized to move your prospect closer to becoming a paying client.",
    },
  ];

  const processSteps = [
    {
      id: "01",
      title: "Research & Strategy",
      desc: "Competitor analysis, audience research, and platform selection. We identify exactly where your ideal clients spend time online — and build a strategy to reach them there. No assumptions, no guesswork, no ad spend before the plan is solid.",
    },
    {
      id: "02",
      title: "Campaign Build",
      desc: "Ad creative, copy, targeting, and landing pages — built and reviewed before a single dollar is spent. No shortcuts, no cutting corners. Every campaign element is engineered to convert before we go live.",
    },
    {
      id: "03",
      title: "Launch & Optimize",
      desc: "We launch, monitor, and optimize continuously — adjusting bids, creative, and targeting based on real performance data from day one. The first 30 days are about finding what works. The next 60 are about scaling it.",
    },
    {
      id: "04",
      title: "Scale & Report",
      desc: "Monthly reports with clear metrics — ROAS, CPA, CTR, conversions. When campaigns perform, we scale them. When they don't, we fix them fast. You always know exactly where your budget is going and what it's returning.",
    },
  ];

  const checklistItems = [
    "You're running Google or Meta ads but your ROAS is below 3x",
    "You're generating traffic but your landing pages aren't converting",
    "You've tried marketing before but couldn't track what actually worked",
    "You want to scale into the US, UK, or Australian market",
    "Your email list is growing but you have no automated follow-up system",
    "You're spending more on ads each month but your cost-per-lead keeps rising",
  ];

  const channels = [
    {
      title: "Google Search Ads",
      subtitle: "Bottom-of-funnel",
      desc: "Captures buyers who are actively searching for what you sell right now. Highest commercial intent of any digital channel — when managed correctly.",
      icon: Search,
      color: "#6324FC",
    },
    {
      title: "Google Display & YouTube",
      subtitle: "Top-of-funnel",
      desc: "Builds brand awareness and retargets warm audiences across millions of websites and YouTube content — keeping your brand visible between touchpoints.",
      icon: Globe,
      color: "#00E5FF",
    },
    {
      title: "Meta (Facebook & Instagram)",
      subtitle: "Mid-funnel",
      desc: "Interrupts the scroll with creative that builds desire before the need is conscious. Ideal for B2C, e-commerce, and service businesses targeting specific demographics.",
      icon: FacebookIcon,
      color: "#FF2D55",
    },
    {
      title: "LinkedIn Ads",
      subtitle: "B2B top-of-funnel",
      desc: "The only platform where you can target by job title, company size, industry, and seniority simultaneously. Expensive per click — but the quality of leads justifies it when done correctly.",
      icon: LinkedinIcon,
      color: "#00FFA3",
    },
    {
      title: "Email Automation",
      subtitle: "Owned channel",
      desc: "No algorithm, no ad cost, no platform dependency. A properly built email system converts leads who weren't ready to buy the first time — and retains clients who already have.",
      icon: Mail,
      color: "#FACC15",
    },
  ];

  const reports = [
    {
      title: "Campaign Performance Report",
      desc: "ROAS, CPA, CTR, conversion rate, and total revenue attributed — broken down by campaign, ad set, and individual ad. You see which exact creative drove which exact result.",
    },
    {
      title: "Audience Intelligence Update",
      desc: "Which audience segments are performing, which are being eliminated, and which new segments we're testing. Your targeting gets smarter every month.",
    },
    {
      title: "Funnel Analysis",
      desc: "Where visitors are dropping off between ad click and purchase — and what we're doing to fix it. CRO recommendations included as standard.",
    },
    {
      title: "Budget Allocation Review",
      desc: "How your budget was distributed across platforms and campaigns — and where we're shifting spend in the next 30 days based on what the data showed.",
    },
    {
      title: "Next 30-Day Plan",
      desc: "A written summary of what we're testing, scaling, or changing — so you always know what's happening with your campaigns before it happens.",
    },
  ];

  const faqs = [
    {
      q: "What budget do I need to start?",
      a: "For Google Ads, we recommend a minimum monthly ad spend of $1,500–$2,000 to generate enough data for meaningful optimization. For Meta Ads, $1,000–$1,500 per month is a workable starting point for most industries. Below these thresholds, the algorithm doesn't have enough conversion data to optimize effectively — and results become unpredictable. Our management fee is separate from your ad spend and is quoted based on scope.",
    },
    {
      q: "How quickly will I see results?",
      a: "Google Search campaigns targeting high-intent keywords can generate leads within the first 7–14 days of launch. Meta campaigns typically require 4–6 weeks to exit the learning phase and start delivering consistent results. Month 1 is about data collection and optimization. Months 2–3 are where performance compounds. We set realistic expectations upfront and show you data every step of the way.",
    },
    {
      q: "Do you create the ad creative too?",
      a: "Yes — completely. Ad copy, headlines, and static image creative are included in every campaign build. For video ads and motion creative, we work with our Motion Division to produce scroll-stopping video content. We never run placeholder creative — every ad we launch has been reviewed for message-market fit before it goes live.",
    },
    {
      q: "Which is better — Google Ads or Meta Ads?",
      a: "Neither is universally better. Google Ads captures existing demand — people already searching for what you sell. Meta Ads create demand — reaching people who match your ideal customer profile before they're actively searching. The right answer depends on your product, price point, and sales cycle. Most of our clients run both in combination, with budgets allocated by funnel stage. We'll recommend the right mix during your strategy session.",
    },
    {
      q: "Do you offer month-to-month contracts?",
      a: "We offer both month-to-month and 3-month minimum engagements. Month-to-month gives you flexibility — but paid advertising typically requires 60–90 days to reach peak performance due to platform learning phases. Clients on 3-month minimums consistently see better results because we have the runway to optimize properly. We'll recommend the right engagement model based on goals and budget.",
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
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 01. Hero Section */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-sm tracking-[0.5em] capitalize">
              DIGITAL MARKETING
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16 max-w-4xl">
            Digital Marketing Services <br />
            That Turn{" "}
            <span className="stroke-text text-transparent italic opacity-40">
              Clicks Into Clients.
            </span>
          </h1>

          <p className="font-sans font-light text-lg md:text-xl text-white/50 max-w-3xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
            Anyone can run ads. We run ads that make money.
            <br />
            <br />
            At Injaazh, every campaign is built on data, not guesswork.
            Precision-targeted Google and Meta campaigns engineered for maximum
            ROAS — reaching high-intent audiences across the US, UK, Australia,
            Canada, and the Middle East.
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
              <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                Build Your Strategy
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>

        {/* 02. Proof Strip (Stats Bar) */}
        <div className="border-b border-white/5 bg-white/[0.01] py-12 md:py-16 backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="py-6 px-6 text-center hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-10 bg-[#6324FC]/5 blur-2xl rounded-full" />
                </div>
                <div className="font-heading text-5xl md:text-7xl mb-2 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent group-hover:from-[#6324FC] group-hover:to-[#d946ef] transition-all duration-700">
                  <Counter value={stat.value} />
                </div>
                <div className="font-heading text-[10px] tracking-widest text-white/40 group-hover:text-white/70 transition-colors duration-500 capitalize">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03. What's Included */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whatIsIncluded.map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <h3 className="font-heading text-3xl text-white mb-4 group-hover:text-[#6324FC] transition-colors duration-500">
                    {item.title}
                  </h3>
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

        {/* 04. Why Injaazh Marketing Works */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            Why Injaazh Marketing Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {whyItWorks.map((item, i) => (
              <div key={i} className="space-y-4 border-l border-white/5 pl-8 hover:border-[#6324FC] transition-all duration-500 relative group overflow-hidden">
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

        {/* 05. Our Marketing Process */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            Our Marketing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative p-8 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl group hover:border-[#6324FC]/20 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500"
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-[#6324FC]/20 to-[#6324FC]/5 hidden lg:block z-0" />
                )}
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  0{step.id}
                </div>
                <div className="relative z-10 pt-8">
                  <div className="font-heading text-xs text-[#6324FC] mb-4 group-hover:text-white transition-colors duration-500">
                    Step {step.id}
                  </div>
                  <h3 className="font-heading text-xl text-white mb-3 group-hover:text-[#6324FC] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-[#6324FC] transition-colors">
                    {step.desc}
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
              MARKETING CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Is Your Ad Spend <br />
                <span className="italic text-[#6324FC]">
                  Working Hard Enough?
                </span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                If you're spending on digital marketing and not seeing a clear
                return — the problem isn't the channel. It's the strategy, the
                targeting, or the creative. We fix all three.
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
            <button
              onClick={() => openModal()}
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                  Fix My Marketing
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </button>
          </div>
        </div>

        {/* SECTION B — THE CHANNELS WE DEPLOY */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              PLATFORM INTELLIGENCE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Right Message. <br />
                <span className="italic text-[#6324FC]">Right Platform.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              Every platform reaches a different buyer at a different stage of
              their decision. We don't run campaigns on every channel — we
              select the channels your specific audience uses and deploy there
              with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((chan, i) => (
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

        {/* SECTION C — REPORTING & ATTRIBUTION */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              FULL VISIBILITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Every Dollar. <br />
                <span className="italic text-[#6324FC]">Accounted For.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                We don't send you a screenshot of your ad dashboard and call it
                reporting. Every client gets a structured monthly performance
                review — with attribution data that shows exactly which campaigns,
                ad sets, and creatives drove revenue.
              </p>
            </div>

            <div className="space-y-6">
              {reports.map((rep, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors flex gap-6"
                >
                  <div className="font-heading text-xl text-[#6324FC]">
                    0{i + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl text-white">
                      {rep.title}
                    </h3>
                    <p className="font-sans font-light text-sm text-white/40 leading-relaxed">
                      {rep.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 06. Frequently Asked Questions */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Frequently Asked <span className="italic text-[#6324FC]">Questions.</span>
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

        {/* 07. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Ready To Grow <span className="italic text-[#6324FC]">Your Business?</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Send us your brief and we'll respond with a clear proposal within 24
            hours.
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
