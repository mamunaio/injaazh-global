"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Trophy,
  Globe2,
  Target,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  Compass,
  CheckCircle2,
} from "lucide-react";

// Counter Component for smooth, localized number animation
function AnimatedCounter({
  from,
  to,
  duration = 2.2,
  prefix = "",
  suffix = "",
}: {
  from: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const markets = [
  {
    country: "United States",
    code: "US",
    flag: "🇺🇸",
    cities: "New York · San Francisco",
    focus: "Enterprise & High-Growth SaaS",
    status: "Active Market",
    color: "#6324FC",
  },
  {
    country: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    cities: "London · Manchester",
    focus: "Fintech & B2B Platforms",
    status: "Active Market",
    color: "#00E5FF",
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    cities: "Toronto · Vancouver",
    focus: "Next.js Tech & Cloud",
    status: "Active Market",
    color: "#FF2D55",
  },
  {
    country: "Australia",
    code: "AU",
    flag: "🇦🇺",
    cities: "Sydney · Melbourne",
    focus: "Global Headless Commerce",
    status: "Active Market",
    color: "#00FFA3",
  },
  {
    country: "UAE & Gulf",
    code: "AE",
    flag: "🇦🇪",
    cities: "Dubai · Abu Dhabi",
    focus: "Luxury Portals & Enterprise",
    status: "Active Market",
    color: "#F59E0B",
  },
];

const telemetryStats = [
  {
    id: "01",
    num: 500,
    prefix: "",
    suffix: "+",
    label: "PROJECTS DELIVERED",
    subtext: "Enterprise web platforms & technical SEO deployments",
    metric: "99.4% On-Time SLA",
    icon: Trophy,
    color: "#6324FC",
  },
  {
    id: "02",
    num: 25,
    prefix: "",
    suffix: "+",
    label: "SOVEREIGN COUNTRIES",
    subtext: "Search dominance across North America, EMEA & APAC",
    metric: "Cross-Border SEO",
    icon: Globe2,
    color: "#00E5FF",
  },
  {
    id: "03",
    num: 180,
    prefix: "$",
    suffix: "M+",
    label: "CLIENT VALUE GENERATED",
    subtext: "Verifiable revenue created through organic search pipelines",
    metric: "100% KPI Accountable",
    icon: TrendingUp,
    color: "#00FFA3",
  },
  {
    id: "04",
    num: 1000,
    prefix: "",
    suffix: "+",
    label: "GLOBAL CLIENTS SCALED",
    subtext: "High-ticket brands and category leaders supported",
    metric: "★ 4.9/5 Clutch Rating",
    icon: Target,
    color: "#FF2D55",
  },
];

const industries = [
  "E-COMMERCE",
  "SAAS",
  "REAL ESTATE",
  "HEALTHCARE",
  "FINTECH",
  "FASHION",
  "HOSPITALITY",
  "EDUCATION",
  "LAW FIRMS",
  "STARTUPS",
  "RETAIL",
  "TECH",
  "MARKETING",
  "AUTOMOTIVE",
  "TRAVEL",
  "WELLNESS",
  "LOGISTICS",
  "DTC BRANDS",
  "LUXURY",
];

export default function GlobalImpact() {
  return (
    <section className="relative w-full bg-[#060608] text-white pt-20 md:pt-28 pb-0 overflow-hidden">
      {/* Background Ambient Glows - GPU Accelerated */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,36,252,0.12)_0%,transparent_70%)] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 mb-20 md:mb-28">
        {/* Header Section */}
        <div className="mb-14 md:mb-20">
          {/* Eyebrow Kicker */}
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
              GLOBAL IMPACT // INTERNATIONAL RECOGNITION
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 lg:gap-16">
            {/* Signature Triad Heading */}
            <div className="max-w-2xl">
              <h2 className="sr-only">
                Global Web Design and SEO Agency Serving US, UK, CA, AU, and UAE Markets: Recognized Worldwide
              </h2>
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white"
              >
                <span className="text-white mr-3 md:mr-4">RECOGNIZED</span>
                <br className="hidden sm:inline" />
                <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)] mr-3 md:mr-4">
                  WORLD
                </span>
                <span className="stroke-text opacity-95">WIDE.</span>
              </div>

              {/* International Agency Capability Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                  5 GLOBAL CAPITALS
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  24/7 TIMEZONE AGILITY
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                  100% KPI ACCOUNTABILITY
                </div>
              </div>
            </div>

            {/* Editorial Description */}
            <div className="max-w-lg">
              <p className="font-sans font-light text-white/75 text-sm sm:text-base leading-relaxed border-l-2 border-[#6324FC]/60 pl-5 sm:pl-6 py-0.5 mb-4">
                We partner with enterprise leaders and high-growth disruptors across North America, Europe, Asia-Pacific, and the Middle East — engineering high-velocity Next.js architectures and global search dominance that deliver predictable, scalable revenue.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 pl-5 sm:pl-6">
                <Compass className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>CROSS-BORDER DIGITAL SOVEREIGNTY PROTOCOL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Regional Market Presence Hub */}
        <div className="mb-14 md:mb-18">
          <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-white/[0.06]">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#6324FC]" />
              TARGETED SOVEREIGN MARKETS & ACTIVE CLIENT DEPLOYMENTS
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE TELEMETRY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {markets.map((m, idx) => (
              <motion.div
                key={m.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] p-4.5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Micro Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${m.color}, transparent 70%)`,
                  }}
                />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xl leading-none">{m.flag}</span>
                    <span className="font-heading font-bold text-sm text-white group-hover:text-[#00E5FF] transition-colors">
                      {m.country}
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] font-mono text-[9px] text-white/60 font-semibold">
                    {m.code}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="font-mono text-[11px] text-white/70 font-medium mb-1">
                    {m.cities}
                  </div>
                  <div className="font-sans text-[11px] text-white/45 line-clamp-1">
                    {m.focus}
                  </div>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono relative z-10">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {m.status}
                  </span>
                  <span className="text-white/30 group-hover:text-white/70 transition-colors">
                    ACTIVE ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Telemetry Bento Cards (Stats Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {telemetryStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative rounded-[2.2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.07] hover:border-[#6324FC]/40 p-8 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[300px]"
              >
                {/* Dynamic Ambient Background Glow */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: item.color }}
                />

                {/* Shimmer Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                {/* Top Bar of Card */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.color}15`,
                        border: `1px solid ${item.color}35`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors"
                        style={{ color: item.color }}
                      />
                    </div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50 group-hover:text-white/80 transition-colors">
                      {item.id} // STAT
                    </span>
                  </div>

                  {/* Primary Stat Counter */}
                  <div className="font-heading text-5xl lg:text-6xl tracking-tight text-white mb-2 font-bold">
                    <AnimatedCounter
                      from={0}
                      to={item.num}
                      duration={2.5}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </div>

                  <div className="font-heading text-xs tracking-[0.25em] text-white/80 uppercase font-bold mb-3">
                    {item.label}
                  </div>

                  <p className="font-sans font-light text-xs text-white/50 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div className="relative z-10 pt-4 mt-6 border-t border-white/[0.05] flex items-center justify-between">
                  <span
                    className="font-mono text-[11px] font-semibold flex items-center gap-1.5"
                    style={{ color: item.color }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.metric}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Massive Typography Marquee for Industries */}
      <div className="w-full bg-[#050507] py-16 md:py-20 border-t border-white/5 relative overflow-hidden group">
        {/* Edge Gradients for smooth fade out */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

        {/* Section Label */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-8 flex items-center justify-between text-white/40 font-mono text-xs uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6324FC]" />
            INDUSTRIES SCALED ACROSS INTERNATIONAL MARKETS
          </span>
          <span className="hidden sm:inline text-white/25">
            HOVER TO INSPECT // ENTERPRISE VERTICALS
          </span>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 -rotate-1 scale-102">
          {/* Row 1: Left moving */}
          <div
            className="animate-marquee flex whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            style={{ animationDuration: "50s" }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex gap-10 items-center font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight mr-10"
              >
                {industries.slice(0, 10).map((industry, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-10">
                    <span
                      className={`hover:text-[#6324FC] transition-colors cursor-crosshair ${
                        pIdx % 2 !== 0
                          ? "stroke-text italic opacity-85"
                          : "text-white"
                      }`}
                    >
                      {industry}
                    </span>
                    <span className="text-[#6324FC] text-2xl md:text-3xl">
                      ✦
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2: Right moving */}
          <div
            className="animate-marquee-reverse flex whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            style={{ animationDuration: "55s" }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex gap-10 items-center font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight mr-10"
              >
                {industries.slice(10).map((industry, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-10">
                    <span
                      className={`hover:text-[#00E5FF] transition-colors cursor-crosshair ${
                        pIdx % 2 === 0
                          ? "stroke-text italic opacity-85"
                          : "text-white"
                      }`}
                    >
                      {industry}
                    </span>
                    <span className="text-[#00E5FF] text-2xl md:text-3xl">
                      ✦
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
