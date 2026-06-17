"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  PieChart,
  Target,
  TrendingUp,
  Layers,
  Check,
  ShieldAlert,
  Zap,
  Cpu,
  Database,
  BarChart2,
  LineChart,
  Activity,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function BusinessIntelligencePage() {
  const { openModal } = useProjectModal();

  const features = [
    {
      title: "Custom Dashboards",
      description:
        "Visualizing complex data sets into intuitive, real-time dashboards that drive immediate business clarity — built for your specific KPIs, not a generic template that shows everything and means nothing.",
      icon: BarChart3,
      color: "#6324FC",
    },
    {
      title: "Predictive Analytics",
      description:
        "Leveraging historical data and AI models to forecast future market trends, customer behavior, and revenue patterns — so you're making decisions based on where the market is going, not where it's been.",
      icon: TrendingUp,
      color: "#00E5FF",
    },
    {
      title: "Market Insights",
      description:
        "Deep-diving into competitor performance, industry shifts, and whitespace opportunities to find your unique advantage — the intelligence your competitors don't have because they haven't looked for it.",
      icon: Globe,
      color: "#FF2D55",
    },
    {
      title: "ROI Attribution",
      description:
        "Precision tracking of every marketing dollar and operational hour — mapped to real revenue outcomes, so you know exactly which channels, campaigns, and initiatives are actually driving profitability.",
      icon: Target,
      color: "#00FFA3",
    },
  ];

  const tools = [
    {
      name: "Google Analytics 4",
      desc: "Event-based tracking architecture configured for your specific conversion goals, funnel stages, and revenue events.",
      color: "#6324FC",
    },
    {
      name: "Looker Studio",
      desc: "Custom reporting dashboards that pull from GA4, ad platforms, CRM, and spreadsheets into one visual intelligence layer your whole team can read.",
      color: "#00E5FF",
    },
    {
      name: "BigQuery",
      desc: "Enterprise-scale data warehousing for businesses processing millions of events — with SQL-based analysis and direct Looker Studio integration.",
      color: "#FF2D55",
    },
    {
      name: "Google Tag Manager",
      desc: "Precise event tracking across every user interaction — form submissions, scroll depth, video plays, CTA clicks — without touching your codebase.",
      color: "#00FFA3",
    },
    {
      name: "HubSpot / Salesforce Integration",
      desc: "Connecting your CRM data to your analytics stack so marketing, sales, and revenue data live in the same ecosystem.",
      color: "#FF9F0A",
    },
    {
      name: "Custom AI Models",
      desc: "Predictive churn models, LTV forecasting, and anomaly detection built on your own historical data — not generic industry benchmarks.",
      color: "#BF5AF2",
    },
  ];

  const blindCosts = [
    {
      title: "Budget allocated to the wrong channels",
      description: "Without attribution, you're guessing which marketing spend drives revenue. Most businesses discover — too late — that 60–70% of their budget was going to channels with the lowest ROI.",
      color: "#FF2D55",
    },
    {
      title: "Churn you didn't see coming",
      description: "Without predictive modeling, customer churn is always a surprise. With the right intelligence system, churn signals appear weeks before they become cancellations — giving you time to act.",
      color: "#6324FC",
    },
    {
      title: "Decisions made on last month's data",
      description: "Monthly PDF reports are outdated the moment they're sent. Real-time dashboards mean your decisions are based on what's happening now — not what happened 30 days ago.",
      color: "#00E5FF",
    },
    {
      title: "No single source of truth",
      description: "When sales, marketing, and ops each have different numbers, every meeting becomes a debate about whose data is correct. A unified BI system ends that argument permanently.",
      color: "#00FFA3",
    },
  ];

  const deliverables = [
    {
      title: "GA4 Full Configuration",
      description: "Complete GA4 setup with custom event tracking, conversion goals, audience segments, and e-commerce or lead-gen tracking — configured for your specific business model.",
    },
    {
      title: "Executive KPI Dashboard",
      description: "A real-time Looker Studio dashboard showing your most critical business metrics — revenue, traffic, conversion rates, CAC, and LTV — in one view, updated live.",
    },
    {
      title: "Channel Attribution Report",
      description: "A clear breakdown of which marketing channels are driving revenue, at what cost, and at what conversion rate — so every budget decision is evidence-based.",
    },
    {
      title: "Funnel Analysis Report",
      description: "A visual map of where users enter, move through, and drop out of your conversion funnel — with specific recommendations for each drop-off point.",
    },
    {
      title: "Monthly Intelligence Brief",
      description: "A structured monthly report that translates your data into plain-language strategic recommendations — what improved, what declined, and what to do next.",
    },
    {
      title: "90-Day Optimization Roadmap",
      description: "A prioritized list of data-backed improvements across your website, campaigns, and funnel — ranked by projected revenue impact and implementation effort.",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden font-sans text-white pb-20 pt-32">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pb-16 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading text-[#6324FC] text-sm tracking-[0.5em] uppercase">
                INTELLIGENCE DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Business <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Intelligence.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We turn data into dominance. Our intelligence systems provide the surgical clarity needed to make high-stakes decisions with absolute confidence — not gut feeling, not guesswork, not legacy reports that are outdated before they're read.
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
                <span className="relative z-10 font-heading text-xl tracking-widest text-white uppercase transition-colors duration-500">
                  Activate Intelligence
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group"
          >
            <Image
              src="/assets/scalia_app_final.webp"
              alt="Business Intelligence Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#060608]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-8 left-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="font-heading text-[9px] text-[#00E5FF] mb-2 uppercase tracking-widest">
                Data Integrity
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="font-heading text-xl text-white">
                  VALIDATED
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Precision <br />
              <span className="italic text-[#6324FC]">Revealed.</span>
            </h2>
            <p className="font-sans font-light text-lg text-white/40 max-w-sm leading-relaxed">
              Data without context is just noise. We provide the structural intelligence to find the signal in the chaos — and turn it into the one thing that actually matters: a clear next action.
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
                <h3 className="font-heading text-2xl text-white mb-4 capitalize">
                  {f.title}
                </h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* [NEW] SECTION A — THE TOOLS WE BUILD ON */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-[#6324FC]" />
                  <span className="font-heading text-xs tracking-widest text-[#6324FC] uppercase">
                    TECHNOLOGY PLATFORMS
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                  The Intelligence <br />
                  <span className="italic text-[#6324FC]">Stack.</span>
                </h2>
              </div>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8 lg:mt-8">
                We build on the world's most reliable analytics and visualization platforms — configured specifically for your data architecture, not dropped in from a template.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/15 transition-all duration-500 relative"
                >
                  <div
                    className="w-1.5 h-6 rounded-r-md absolute left-0 top-8 transition-transform"
                    style={{ backgroundColor: tool.color }}
                  />
                  <h3 className="font-heading text-2xl text-white mb-4 pl-4">
                    {tool.name}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed pl-4">
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* [NEW] SECTION B — WHAT OPERATING WITHOUT BI COSTS YOU */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-5 h-5 text-[#FF2D55]" />
                  <span className="font-heading text-xs tracking-widest text-[#FF2D55] uppercase">
                    INVISIBILITY COST
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                  What Flying Blind <br />
                  <span className="italic text-[#FF2D55]">Costs You.</span>
                </h2>
              </div>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#FF2D55]/40 pl-8 lg:mt-8">
                Most businesses make million-dollar decisions on thousand-dollar data. Here's what operating without a proper intelligence system actually costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {blindCosts.map((card, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-500 relative"
                >
                  <div className="font-heading text-sm text-[#FF2D55] mb-4">
                    {`0${i + 1}`}
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
                    Fix This
                    <ArrowRight className="w-5 h-5 text-[#FF2D55] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                    Initiate BI Study
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* 3. Analytics Dashboard Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <PieChart className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Insights Node // 0xBI
                </div>
              </div>

              <div className="space-y-12 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    {
                      label: "Predictive",
                      val: "88%",
                      color: "text-[#00E5FF]",
                    },
                    { label: "Growth", val: "+24%", color: "text-[#6324FC]" },
                    { label: "Retention", val: "94%", color: "text-[#00FFA3]" },
                    {
                      label: "Efficiency",
                      val: "High",
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
                      className="flex-1 bg-[#00E5FF]/30 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#00E5FF] capitalize tracking-widest">
                <span>Neural Analysis</span>
                <span>Decision Protocol Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                Data Over <br />
                <span className="italic text-[#00E5FF]">Intuition.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                Stop guessing. We build the data pipelines, intelligence frameworks, and analytics systems that tell you exactly what is working, what isn't, and where your next big opportunity is hidden — in real time.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Real-Time Sync",
                    desc: "Connecting your sales, marketing, and ops data into a single source of truth — so every team is looking at the same numbers and every decision is based on the same reality.",
                  },
                  {
                    label: "Predictive Modeling",
                    desc: "Using AI to identify customer churn risk, lifetime value potential, and revenue opportunities before they become obvious — giving you weeks of lead time on decisions your competitors react to.",
                  },
                  {
                    label: "Operational KPIs",
                    desc: "Tracking the metrics that actually matter for your bottom line profitability — not vanity metrics that look impressive in a slide deck but have no correlation to revenue.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize">
                        {item.label}
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

        {/* 4. Strategic Flow */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            THE BI <span className="italic text-[#6324FC]">ARCHITECTURE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Data Mining",
                desc: "Extracting raw data from every touchpoint in your business ecosystem — CRM, website, ads, sales, ops, and customer service — to build a comprehensive, unified data lake with no gaps and no silos.",
              },
              {
                step: "02",
                title: "Modeling",
                desc: "Cleaning, structuring, and modeling that data into logical frameworks that reveal deep patterns, correlations, and anomalies — transforming raw numbers into intelligence you can actually act on.",
              },
              {
                step: "03",
                title: "Activation",
                desc: "Deploying interactive dashboards, automated alerts, and scheduled intelligence reports that drive strategic business actions — so your data doesn't just sit in a warehouse, it actively runs your business.",
              },
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white capitalize">
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

        {/* [NEW] SECTION C — WHAT YOU RECEIVE: THE BI DELIVERABLES */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-5 h-5 text-[#00FFA3]" />
                <span className="font-heading text-xs tracking-widest text-[#00FFA3] uppercase">
                  DELIVERABLE PACKAGES
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white mb-6">
                Your Intelligence <br />
                <span className="italic text-[#00FFA3]">Deliverables.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed">
                Every Injaazh BI engagement delivers a complete intelligence infrastructure — not a one-time report, but a live system that gets smarter as your business grows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="font-heading text-sm text-[#00FFA3] mb-4">
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

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Own The <span className="italic text-[#6324FC]">Numbers.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to lead with data? Let's build an intelligence system that gives you the competitive edge in an increasingly complex market — and makes every decision you make a data-backed one.
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
                INITIATE BI STUDY
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
