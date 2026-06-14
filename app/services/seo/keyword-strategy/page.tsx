"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Zap,
  Shield,
  Globe,
  Target,
  BarChart,
  MessageSquare,
  ListFilter,
  Brain,
  Filter,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function KeywordStrategyPage() {
  const features = [
    {
      title: "Semantic Intelligence",
      description:
        "Mapping out entire topic clusters and LSI keywords to ensure you own the topical authority in your niche.",
      icon: Brain,
      color: "#6324FC",
    },
    {
      title: "Competitor Gaps",
      description:
        "Identifying the exact keywords your competitors are ranking for and where they are failing to capture intent.",
      icon: ListFilter,
      color: "#00E5FF",
    },
    {
      title: "Intent Mapping",
      description:
        "Categorizing keywords by Informational, Navigational, and Transactional intent to align with your sales funnel.",
      icon: Target,
      color: "#FF2D55",
    },
    {
      title: "High-ROI Targets",
      description:
        "Focusing on low-competition, high-intent &quot;hidden gem&quot; keywords that drive immediate revenue.",
      icon: TrendingUp,
      color: "#00FFA3",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">
                Search Intelligence
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              KEYWORD <br />
              <span className="stroke-text text-transparent italic opacity-40">
                STRATEGY.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t just chase volume; we chase conversion. Our keyword
              strategies are engineered to capture the exact intent of your most
              valuable customers.
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
                  BUILD YOUR STRATEGY
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
                USER INTENT
              </div>
              <div className="font-heading  text-[10px] tracking-[0.8em] text-[#6324FC] capitalize mt-4">
                Semantic Mapping
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              TARGETING WITH{" "}
              <span className="italic text-[#6324FC]">SURGICAL INTENT.</span>
            </h2>
            <p className="font-heading  text-[16px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              Finding the right keywords is about understanding the human
              psychology behind the search query.
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

        {/* 3. Intent Funnel Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <Filter className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading  text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Intent Funnel // v2.0
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
                      <span className="font-heading text-xl text-white capitalize ">
                        {step.label}
                      </span>
                      <span className="font-heading  text-[9px] text-white/30 capitalize tracking-widest">
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

              <div className="flex justify-between font-heading  text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Conversion Mapping</span>
                <span>ROI Protocol Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                MAPPING THE <br />
                <span className="italic text-[#6324FC]">JOURNEY.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                Keywords are the breadcrumbs of user intent. We analyze how your
                customers talk, search, and behave to build a comprehensive
                search universe for your brand.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Topic Clusters",
                    desc: "Building silos of content that signal deep expertise to search engines.",
                  },
                  {
                    label: "Long-tail Logic",
                    desc: "Capturing hyper-specific queries that have lower competition but 4x higher conversion.",
                  },
                  {
                    label: "Seasonal Strategy",
                    desc: "Predicting search trends before they happen to give you the first-mover advantage.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize ">
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
            THE KEYWORD{" "}
            <span className="italic text-[#6324FC]">EVOLUTION.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Mining",
                desc: "Using advanced AI tools and manual research to discover high-potential keywords your competitors are missing.",
              },
              {
                step: "02",
                title: "Clustering",
                desc: "Grouping thousands of keywords into logical topic clusters to build massive topical authority.",
              },
              {
                step: "03",
                title: "Funneling",
                desc: "Directing the right keywords to the right pages to ensure maximum user relevance and conversion.",
              },
            ].map((s, i) => (
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

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            OWN THE <span className="italic text-[#6324FC]">SEARCH.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop guessing and start dominating? Let&apos;s build a
            keyword strategy that puts your brand in front of the right audience
            at the right time.
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
                START STRATEGY SESSION ⚡
              </span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
