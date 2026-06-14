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
      className={`group relative overflow-hidden rounded-[2.5rem] bg-white/[0.01] backdrop-blur-3xl border border-white/[0.05] p-10 transition-all duration-700 hover:border-[#6324FC]/30 flex flex-col justify-between shadow-[0_40px_80px_rgba(0,0,0,0.4)] ${
        index === 0 || index === 3
          ? "md:col-span-3"
          : "md:col-span-3 lg:col-span-3"
      }`}
    >
      {/* Premium Glass Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] opacity-[0.03] pointer-events-none" />

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
    <section className="w-full bg-[#060608] py-20 relative overflow-hidden">
      {/* Enhanced Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#6324FC]/5 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              className="h-[1px] bg-[#6324FC]"
            />
            <span className="font-heading  text-xs tracking-[0.6em] text-[#6324FC] capitalize ">
              ENGINEERED GROWTH
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white mb-4 capitalize ">
              THE INJAAZH <br />
              <span className="stroke-white italic opacity-80">ADVANTAGE.</span>
            </h2>
            <div className="max-w-md border-l-2 border-[#6324FC]/40">
              <h3 className="sr-only">
                Why Choose Our Elite Web Design & SEO Services
              </h3>
              <p className="font-sans font-light text-white/70  leading-relaxed mb-6  pl-8">
                Backed by proven global expertise, we engineer complete digital
                ecosystems that dominate search engines, convert high-ticket B2B
                traffic, and generate scalable enterprise revenue — measured
                transparently against KPIs you agree on before we start.
              </p>
              <div className="flex gap-4 pl-8 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#6324FC] transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#6324FC]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-white font-heading text-sm">
                    Certified Excellence
                  </span>
                  <span className="text-white/30 font-heading  text-[9px] capitalize tracking-widest">
                    GLOBAL STANDARDS
                  </span>
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
