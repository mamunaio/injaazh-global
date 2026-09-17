"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  Globe,
  Clock,
  BarChart2,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  Star,
  Award,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useRef, useState } from "react";
import { useProjectModal } from "./ProjectModalContext";

const reasons = [
  {
    id: "01",
    icon: Zap,
    title: "One Digital Agency. Everything.",
    body: "Enterprise web development, Technical SEO, B2B marketing, and content — all under one roof, one data-driven strategy. No fragmented vendors, no misaligned teams.",
    size: "large",
    color: "#6324FC",
  },
  {
    id: "02",
    icon: Globe,
    title: "Global Search Dominance",
    body: "We understand US, UK, Canada, and Australian search intent and consumer psychology. We build international SEO strategies that convert global traffic into enterprise clients — not just rankings.",
    size: "small",
    color: "#00E5FF",
  },
  {
    id: "03",
    icon: Clock,
    title: "24-Hour Response. Always.",
    body: "Every Injaazh client gets a dedicated project manager and a guaranteed 24-hour response — regardless of timezone, day, or deadline pressure. Your urgency is our urgency.",
    size: "small",
    color: "#FF2D55",
  },
  {
    id: "04",
    icon: BarChart2,
    title: "Data-Driven Performance",
    body: "We agree on clear KPIs before every engagement. Every campaign, build, and SEO strategy is tracked, reported, and optimized against the numbers that matter — revenue, not vanity metrics.",
    size: "large",
    color: "#00FFA3",
  },
];

function FeatureCard({
  item,
  index,
}: {
  item: (typeof reasons)[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-[#09090D] border border-white/[0.07] p-10 transition-all duration-300 hover:border-[#6324FC]/40 flex flex-col justify-between shadow-2xl ${
        index === 0 || index === 3
          ? "md:col-span-3"
          : "md:col-span-3 lg:col-span-3"
      }`}
    >

      {/* Dynamic Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, ${item.color}15, transparent 40%)`,
          ),
          border: `1px solid ${item.color}30`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-700 shadow-2xl relative overflow-hidden group-hover:scale-110"
            style={{
              backgroundColor: `${item.color}10`,
              border: `1px solid ${item.color}20`,
            }}
          >
            {/* Liquid Background in Icon Box */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            <item.icon
              className="w-10 h-10 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              style={{ color: item.color }}
            />
          </motion.div>

          <div className="flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-heading  text-[9px] tracking-[0.4em] text-white capitalize mb-1">
              ARCHITECTURE
            </span>
            <span className="font-heading  text-[10px] tracking-[0.2em] text-[#6324FC] capitalize ">
              {item.id}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-3xl md:text-4xl tracking-tight text-white mb-4 group-hover:text-white transition-colors duration-500">
            {item.title}
          </h3>

          <p className="font-sans font-light text-lg text-white/60 leading-relaxed max-w-xl group-hover:text-white/90 transition-colors duration-500">
            {item.body}
          </p>
        </div>
      </div>

      {/* Productive Accents */}
      <div className="relative z-10 mt-8 pt-8 border-t border-white/[0.05] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: item.color }}
          />
          <span className="font-heading  text-[10px] tracking-widest text-white/20 capitalize ">
            OPERATIONAL STATUS: OPTIMAL
          </span>
        </div>
        <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  const { openModal, openAuditModal } = useProjectModal();

  return (
    <section className="w-full bg-[#060608] pt-10 md:pt-14 pb-20 relative overflow-hidden">
      {/* Enhanced Background Ambience - GPU Accelerated */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,36,252,0.1)_0%,transparent_70%)] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-[#6324FC] to-[#00E5FF]"
            />
            <span className="font-mono text-xs md:text-sm tracking-[0.45em] text-[#6324FC] uppercase font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              ENGINEERED GROWTH // VALUE PROPOSITION
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12">
            <div>
              <h2 className="sr-only">
                Why Choose Our Elite Web Design & SEO Services: The Injaazh Advantage
              </h2>
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white"
              >
                <span className="text-white mr-3 md:mr-4">THE</span>
                <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
                  INJAAZH
                </span>
                <br />
                <span className="stroke-text opacity-95">ADVANTAGE.</span>
              </div>

              {/* Enterprise Architectural Pillar Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                  NEXT.JS 15 ARCHITECTURE
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  GLOBAL SERP RANKING
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                  CONTRACTED KPIS
                </div>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="font-sans font-light text-white/75 text-sm sm:text-base leading-relaxed mb-6 border-l-2 border-[#6324FC]/60 pl-5 sm:pl-6 py-0.5">
                Backed by proven global expertise, we engineer complete digital ecosystems that dominate search engines, convert high-ticket B2B traffic, and generate scalable enterprise revenue — measured transparently against predefined KPIs.
              </p>

              {/* Luxury Institutional Trust Seal & Guarantee Card */}
              <div className="relative group/seal rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent p-[1px] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,36,252,0.15)]">
                {/* Dynamic Ambient Background Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#6324FC]/20 rounded-full blur-3xl pointer-events-none group-hover/seal:bg-[#00E5FF]/25 transition-all duration-700" />
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#00FFA3]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Shimmer Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/seal:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

                <div className="relative z-10 bg-[#0A0A0E]/95 backdrop-blur-2xl rounded-[23px] p-5 sm:p-6">
                  {/* Top Seal Bar */}
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3.5">
                      {/* Rotating Metallic Crest Icon */}
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6324FC]/25 to-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover/seal:border-[#6324FC]/60 transition-colors">
                        <div className="absolute inset-1 rounded-xl border border-dashed border-[#6324FC]/40 animate-[spin_25s_linear_infinite]" />
                        <ShieldCheck className="w-6 h-6 text-[#00E5FF] group-hover/seal:text-white transition-colors drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0A0A0E]" />
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-sm sm:text-base text-white font-bold tracking-wide">
                            Institutional Trust Seal
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                            VERIFIED
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-white/45 uppercase tracking-widest block mt-0.5">
                          SPEC // SLA-99.9-GLOBAL-AUDIT
                        </span>
                      </div>
                    </div>

                    {/* Micro Security Chip */}
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/50">
                      <Lock className="w-3 h-3 text-[#6324FC]" />
                      SOC2 / ISO COMPLIANT
                    </div>
                  </div>

                  {/* Proof Telemetry Grid */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-left">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex items-center gap-1 text-amber-300 mb-1">
                        <Star className="w-3.5 h-3.5 fill-amber-300" />
                        <span className="font-heading text-xs font-bold text-white">4.9 / 5.0</span>
                      </div>
                      <span className="font-mono text-[10px] text-white/50 block leading-tight">
                        Clutch & Google Verified
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex items-center gap-1 text-emerald-400 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="font-heading text-xs font-bold text-white">99.98%</span>
                      </div>
                      <span className="font-mono text-[10px] text-white/50 block leading-tight">
                        Guaranteed SLA Uptime
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex items-center gap-1 text-[#00E5FF] mb-1">
                        <Award className="w-3.5 h-3.5" />
                        <span className="font-heading text-xs font-bold text-white">24H Res</span>
                      </div>
                      <span className="font-mono text-[10px] text-white/50 block leading-tight">
                        Direct PM Guarantee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {reasons.map((item, idx) => (
            <FeatureCard key={item.id} item={item} index={idx} />
          ))}

          {/* Premium Full-Width AI Audit Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => openAuditModal()}
            className="md:col-span-6 rounded-[3rem] bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#6324FC] p-[1px] group cursor-pointer relative overflow-hidden mt-6"
          >
            <div className="w-full h-full bg-[#060608]/95 backdrop-blur-3xl rounded-[2.9rem] p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 transition-colors group-hover:bg-transparent">
              <div className="flex flex-col lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Cpu className="w-5 h-5 text-white animate-spin-slow" />
                  </div>
                  <span className="font-heading  text-xs text-[#6324FC] tracking-[0.4em] capitalize ">
                    NEURAL ENGINE V2.0
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl text-white leading-none tracking-tighter mb-6 capitalize ">
                  Get Your <br />
                  <span className="italic text-[#00E5FF]">Free Audit</span>
                </h2>
                <p className="font-sans font-light text-white/80 text-xl max-w-xl leading-relaxed">
                  We analyze your technical architecture, SEO gaps, and revenue
                  potential — then deliver a custom growth report within 24
                  hours. No automation. Real experts. Real insights.
                </p>
              </div>

              <div className="relative flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 md:px-12 py-4 md:py-6 bg-white text-black rounded-2xl font-heading text-lg tracking-widest shadow-[0_20px_50px_rgba(255,255,255,0.1)] group-hover:bg-[#6324FC] group-hover:text-white transition-all flex items-center justify-center gap-4 w-full md:w-auto"
                >
                  START YOUR FREE AUDIT ⚡
                </motion.button>
                {/* Decorative background element for the button area */}
                <div className="absolute inset-0 bg-[#6324FC]/20 blur-[80px] -z-10 rounded-full scale-150 animate-pulse" />
              </div>
            </div>

            {/* Moving background lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
