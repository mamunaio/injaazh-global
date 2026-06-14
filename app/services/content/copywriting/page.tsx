"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PenTool,
  Zap,
  Shield,
  Globe,
  Target,
  MessageSquare,
  Flame,
  Sparkles,
  MousePointer2,
  Percent,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CopywritingPage() {
  const features = [
    {
      title: "Direct Response",
      description:
        "Sales-focused copy designed to trigger immediate action and drive measurable revenue growth.",
      icon: Target,
      color: "#6324FC",
    },
    {
      title: "Conversion UX",
      description:
        "Precision micro-copy that guides users through complex interfaces with clarity and confidence.",
      icon: MousePointer2,
      color: "#00E5FF",
    },
    {
      title: "Ad Copy Ops",
      description:
        "High-performance copy for Google and Meta ads that maximizes CTR and minimizes CPA.",
      icon: Flame,
      color: "#FF2D55",
    },
    {
      title: "Landing Pages",
      description:
        "Psychology-backed structure and copy that turns traffic into high-value leads and customers.",
      icon: CheckCircle2,
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
                Persuasion Division
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              COPY <br />
              <span className="stroke-text text-transparent italic opacity-40">
                WRITING.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We write for the bottom line. Our copy doesn&apos;t just sound
              good; it sells. We engineer every word to trigger the exact action
              your business needs.
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
                  START CONVERTING
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
              alt="Copywriting Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#060608]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-12">
              <div className="font-heading text-6xl text-white tracking-tighter italic opacity-10 group-hover:opacity-100 transition-all duration-700 leading-none">
                SELL THE <br />
                IMPOSSIBLE.
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              PSYCHOLOGY <span className="italic text-[#6324FC]">ENCODED.</span>
            </h2>
            <p className="font-heading  text-[16px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              Copywriting is the intersection of behavioral science and creative
              linguistics. We find the exact words that move the needle.
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

        {/* 3. Conversion Lab Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <MessageSquare className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading  text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Copy Node // v9.0
                </div>
              </div>

              <div className="space-y-8 flex-1 flex flex-col justify-center">
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                    <span className="font-heading  text-[8px] text-white/20 capitalize ">
                      Headline Analysis
                    </span>
                  </div>
                  <div className="font-heading text-3xl text-white leading-none">
                    THE PRODUCT YOU NEVER KNEW YOU NEEDED.
                  </div>
                  <div className="flex justify-between font-heading  text-[9px] text-[#00FFA3] capitalize tracking-widest">
                    <span>Persuasion Score: 98%</span>
                    <span>CTR Potential: High</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#6324FC]/5 border border-[#6324FC]/20 rounded-xl">
                    <div className="font-heading  text-[8px] text-[#6324FC] capitalize mb-1">
                      Benefit Focus
                    </div>
                    <div className="font-heading text-xl text-white">
                      REVENUE
                    </div>
                  </div>
                  <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl">
                    <div className="font-heading  text-[8px] text-white/20 capitalize mb-1">
                      Emotion
                    </div>
                    <div className="font-heading text-xl text-white">
                      DESIRE
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between font-heading  text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Linguistic Engine</span>
                <span>Conversion Mode Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                THE POWER OF <br />
                <span className="italic text-[#6324FC]">PERSUASION.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                Words are the invisible architecture of every sale. We craft
                every sentence to remove doubt, build desire, and compel the
                user to click.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Objection Handling",
                    desc: "Predicting and neutralizing every reason a user might have not to buy before they even think of it.",
                  },
                  {
                    label: "Linguistic Precision",
                    desc: "Using high-impact verbs and sensory language to create a vivid image of the product value.",
                  },
                  {
                    label: "CTA Engineering",
                    desc: "Testing every button and call-to-action to find the exact phrasing that maximizes conversions.",
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
            THE COPY <span className="italic text-[#6324FC]">PIPELINE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Empathy Audit",
                desc: "Deep-diving into your customer&apos;s pain points, dreams, and hidden desires to find the emotional core.",
              },
              {
                step: "02",
                title: "Draft & Test",
                desc: "Writing high-impact drafts and split-testing headlines to see what resonates most with the actual market.",
              },
              {
                step: "03",
                title: "Optimization",
                desc: "Refining every word based on real-world performance data to ensure long-term conversion stability.",
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
            SELL THE <span className="italic text-[#6324FC]">DREAM.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to turn your website into a high-performance sales machine?
            Let&apos;s write the copy that converts your visitors into revenue.
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
                START COPY AUDIT ⚡
              </span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
