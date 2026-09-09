"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Zap,
  Target,
  TrendingUp,
  Cpu,
  Globe,
  Code,
  MessageSquare,
  Quote,
  MoveRight,
  Hash,
  Calendar,
  User,
  Database,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Monitor,
  Smartphone,
  ChevronDown,
  Clock,
  GitBranch,
  Activity,
  HelpCircle,
  Award,
} from "lucide-react";
import { ProjectDetail, projectsData as defaultProjects } from "@/lib/projectsData";

const iconMap: Record<string, any> = {
  Hash,
  User,
  Zap,
  TrendingUp,
  Calendar,
  Target,
  Code,
  Database,
  Globe,
  Cpu,
  MessageSquare,
};

function NumberTicker({
  value,
  suffix = "",
  prefix = "",
}: {
  value: string;
  suffix?: string;
  prefix?: string;
}) {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const isDecimal = value.includes(".");
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = numericValue / steps;
    let current = 0;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      current += increment;
      if (stepCount >= steps) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue, isDecimal]);

  return (
    <span className="font-heading">
      {prefix}
      {isDecimal ? displayValue.toFixed(1) : displayValue}
      {suffix}
    </span>
  );
}

interface WorkDetailClientProps {
  project: ProjectDetail;
  allProjects?: Record<string, ProjectDetail>;
}

export default function WorkDetailClient({
  project,
  allProjects = defaultProjects,
}: WorkDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeDeviceView, setActiveDeviceView] = useState<"desktop" | "mobile">("desktop");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero Parallax & Fade
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.1]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.05]);

  // Mockup Parallax shifts
  const mockupY1 = useTransform(scrollYProgress, [0.35, 0.85], [30, -30]);
  const mockupY2 = useTransform(scrollYProgress, [0.35, 0.85], [80, -80]);

  const nextProject =
    (project.next && allProjects[project.next.id]) ||
    defaultProjects[project.next?.id] ||
    defaultProjects["aka-moving"] ||
    project;

  const accentColor = project.accent || "#6324FC";
  const secondaryAccent = project.secondaryAccent || "#00E5FF";

  return (
    <main
      ref={containerRef}
      className="bg-[#060608] min-h-screen text-white relative overflow-x-hidden selection:bg-[#6324FC] selection:text-white"
    >
      {/* Ambient Radial Mesh Lighting */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-20 blur-[170px] rounded-full z-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, ${secondaryAccent} 40%, transparent 80%)`,
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. CINEMATIC HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] pt-32 md:pt-40 pb-20 w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
          
          {/* Breadcrumb Navigation & Status Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              {/* Back to Archive Button */}
              <Link
                href="/work"
                className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0E0E14]/90 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 shadow-md backdrop-blur-xl"
                style={{ borderColor: `${accentColor}40` }}
              >
                <div
                  className="p-1 rounded-full transition-transform duration-300 group-hover:-translate-x-1"
                  style={{ backgroundColor: `${accentColor}25` }}
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-mono text-xs tracking-wider uppercase text-white/80 group-hover:text-white transition-colors duration-300">
                  Back to Archive
                </span>
              </Link>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: accentColor, boxShadow: `0 0 12px ${accentColor}` }}
                />
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/70">
                  CASE STUDY // 0x{project.id}
                </span>
                <span className="text-white/20">|</span>
                <span className="font-mono text-xs tracking-wider uppercase" style={{ color: accentColor }}>
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-white/40">
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </motion.div>

          {/* Project Title & Subtitle */}
          <div className="space-y-6 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tighter uppercase text-white"
            >
              {project.title.split(" ")[0]}{" "}
              <span
                className="italic font-light stroke-text"
                style={{
                  color: "transparent",
                  WebkitTextStroke: `1.5px ${accentColor}`,
                }}
              >
                {project.title.split(" ").slice(1).join(" ") || "ARCHITECTURE"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans font-light text-lg sm:text-xl md:text-2xl text-white/60 max-w-4xl leading-relaxed"
            >
              {project.subtitle}
            </motion.p>
          </div>

          {/* Meta Ribbon & Primary Live CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-white/10"
          >
            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2.5 items-center">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider bg-white/[0.04] border border-white/10 text-white/80 hover:border-white/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Launch Live Project Button */}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-heading text-xs tracking-[0.2em] uppercase text-white overflow-hidden transition-all duration-500 shadow-xl hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, ${secondaryAccent})`,
                  boxShadow: `0 0 35px -5px ${accentColor}80`,
                }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Launch Live Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            )}
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              INTERACTIVE SAFARI BROWSER FRAME
          ───────────────────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="mt-12 relative w-full rounded-2xl md:rounded-3xl p-2 md:p-3 bg-[#12121A]/80 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Ambient Behind Glow */}
            <div
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-40"
              style={{ backgroundColor: accentColor }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-30"
              style={{ backgroundColor: secondaryAccent }}
            />

            {/* Safari Chrome Header */}
            <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0A0A10]/90 rounded-t-xl">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
              </div>

              {/* Fake Address Bar */}
              <div className="hidden sm:flex items-center gap-2 px-6 py-1.5 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-white/50 w-80 justify-center">
                <span className="text-emerald-400">🔒</span>
                <span className="truncate">
                  {project.link ? project.link.replace(/^https?:\/\//, "") : `injaazh.com/work/${project.slug}`}
                </span>
              </div>

              {/* Device Preview Switcher */}
              <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setActiveDeviceView("desktop")}
                  className={`p-1.5 rounded transition-colors ${
                    activeDeviceView === "desktop"
                      ? "bg-white/20 text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveDeviceView("mobile")}
                  className={`p-1.5 rounded transition-colors ${
                    activeDeviceView === "mobile"
                      ? "bg-white/20 text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Screen Viewport */}
            <div className="relative z-10 w-full overflow-hidden rounded-b-xl bg-[#08080C] flex items-center justify-center min-h-[380px] md:min-h-[580px]">
              <AnimatePresence mode="wait">
                {activeDeviceView === "desktop" ? (
                  <motion.div
                    key="desktop"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full aspect-[16/10] md:aspect-[16/9]"
                  >
                    <Image
                      src={project.img}
                      alt={`${project.title} Interface`}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 flex justify-center w-full"
                  >
                    <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#222230] overflow-hidden shadow-2xl bg-black">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#222230] rounded-full z-20" />
                      <Image
                        src={project.img}
                        alt={`${project.title} Mobile Interface`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. EXECUTIVE IMPACT BENTO GRID (KPI STATS)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-20 py-20 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase text-white/50 mb-3">
              <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
              Measurable Outcomes
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white">
              RESULTS THAT <span style={{ color: accentColor }}>MOVE THE NEEDLE.</span>
            </h2>
          </div>
          <p className="font-sans font-light text-white/50 max-w-sm text-sm md:text-base">
            Every architectural decision was measured against commercial conversion and latency benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.metrics.map((m, i) => {
            const IconComponent = (m.iconType && iconMap[m.iconType]) || Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative flex flex-col justify-between min-h-[260px] p-8 rounded-3xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-xl hover:border-white/25 transition-all duration-500 shadow-xl overflow-hidden hover:-translate-y-1.5"
              >
                {/* Glow Spotlight */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-[50px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: accentColor }}
                />

                {/* Top Row: Icon + Index */}
                <div className="flex items-center justify-between relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.04] border border-white/10 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: accentColor }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-white/30">
                    0{i + 1}
                  </span>
                </div>

                {/* Bottom Row: Number & Label */}
                <div className="relative z-10 pt-8 space-y-2">
                  <div className="font-heading text-5xl sm:text-6xl tracking-tighter leading-none text-white">
                    <span
                      style={{
                        background: `linear-gradient(135deg, #ffffff 30%, ${accentColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <NumberTicker value={m.val} suffix={m.suffix} prefix={m.prefix} />
                    </span>
                  </div>
                  <div className="font-mono text-xs tracking-widest text-white/50 uppercase">
                    {m.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. STRATEGIC NARRATIVE & BACKGROUND
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context Sidebar (Sticky on Desktop) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-36">
            
            {/* Meta Card */}
            <div className="p-8 rounded-3xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-xl space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white/50">
                <Sparkles className="w-3.5 h-3.5" style={{ color: accentColor }} />
                Project Intelligence
              </div>

              <div className="space-y-4 divide-y divide-white/5 font-mono text-xs">
                <div className="flex justify-between pt-2">
                  <span className="text-white/40 uppercase">Client</span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-white/40 uppercase">Timeline</span>
                  <span className="text-white font-medium">{project.year}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-white/40 uppercase">Domain</span>
                  <span className="text-white font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-white/40 uppercase">Architect</span>
                  <span className="text-white font-medium">INJAAZH Global</span>
                </div>
              </div>
            </div>

            {/* Scope & Deliverables Checklist */}
            <div className="p-8 rounded-3xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white/50 mb-2">
                <Layers className="w-3.5 h-3.5" style={{ color: accentColor }} />
                Delivered Engineering
              </div>

              <ul className="space-y-3 font-sans text-sm text-white/70">
                {(project.deliverables || [
                  "Sub-second Edge Deployment",
                  "High-Converting UI/UX System",
                  "Technical SEO & Schema Integration",
                  "Cross-Device Responsive Architecture",
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: accentColor }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Tech Stack */}
            <div className="p-8 rounded-3xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white/50 mb-2">
                <Cpu className="w-3.5 h-3.5" style={{ color: accentColor }} />
                Technology Stack
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t, idx) => {
                  const TechIcon = (t.iconType && iconMap[t.iconType]) || Code;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors group cursor-default"
                    >
                      <TechIcon className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                      <span className="font-mono text-xs text-white/80">{t.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Storyline */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Project Overview */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase text-white/50">
                <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
                Executive Summary
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white leading-[0.9]">
                ARCHITECTING FOR <span style={{ color: accentColor }}>SUPREMACY.</span>
              </h2>
              <p className="font-sans font-light text-xl md:text-2xl text-white/70 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Client Background & Industry Environment */}
            {project.background && (
              <div className="p-8 md:p-10 rounded-3xl bg-[#0D0D14]/70 border border-white/5 backdrop-blur-xl space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white/50">
                  <Award className="w-4 h-4" style={{ color: accentColor }} />
                  Strategic Context & Market Landscape
                </div>
                <h3 className="font-heading text-2xl uppercase tracking-tight text-white">
                  The Commercial Imperative
                </h3>
                <p className="font-sans font-light text-base md:text-lg text-white/70 leading-relaxed">
                  {project.background}
                </p>
              </div>
            )}

            {/* The Friction vs The Solution Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Challenge Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-3xl bg-[#0D0D14]/90 border border-red-500/20 backdrop-blur-xl relative overflow-hidden space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <Target className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-red-400">
                  The Friction & Bottlenecks
                </div>
                <h3 className="font-heading text-2xl uppercase tracking-tight text-white">
                  Why Legacy Methods Failed
                </h3>
                <p className="font-sans font-light text-base text-white/60 leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 md:p-10 rounded-3xl bg-[#0D0D14]/90 border border-emerald-500/20 backdrop-blur-xl relative overflow-hidden space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-emerald-400">
                  The Engineering Breakthrough
                </div>
                <h3 className="font-heading text-2xl uppercase tracking-tight text-white">
                  How INJAAZH Engineered Success
                </h3>
                <p className="font-sans font-light text-base text-white/60 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FOUR-PHASE ENGINEERING EXECUTION ROADMAP
      ───────────────────────────────────────────────────────────── */}
      {project.roadmap && project.roadmap.length > 0 && (
        <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase text-white/50 mb-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
                Methodology & Timeline
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white">
                THE 4-PHASE <span style={{ color: accentColor }}>EXECUTION BLUEPRINT.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-white/50 max-w-sm text-sm md:text-base">
              A structured, sprint-based approach from technical discovery to production-ready global deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.roadmap.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-white/25 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-bold"
                      style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                    >
                      {step.phase}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl uppercase tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="font-sans font-light text-xs text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="font-mono text-[10px] tracking-wider uppercase text-white/40 mb-2">
                    Milestone Deliverables:
                  </div>
                  {step.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 font-mono text-xs text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. BEFORE VS AFTER AUDIT BENCHMARKS (MEASURABLE ROI)
      ───────────────────────────────────────────────────────────── */}
      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase text-white/50 mb-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
                Technical Proof & Audit
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white">
                BEFORE VS AFTER <span style={{ color: accentColor }}>PERFORMANCE MATRIX.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-white/50 max-w-sm text-sm md:text-base">
              Hard data extracted from Google Lighthouse, Cloudflare analytics, and conversion telemetry.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D14]/90 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-12 px-6 sm:px-10 py-5 bg-[#08080E] border-b border-white/10 font-mono text-xs uppercase tracking-widest text-white/50">
              <div className="col-span-5 sm:col-span-4">Benchmark Metric</div>
              <div className="col-span-2 text-center hidden sm:block">Legacy Baseline</div>
              <div className="col-span-4 sm:col-span-3 text-center">INJAAZH Architecture</div>
              <div className="col-span-3 text-right">Net Gain</div>
            </div>

            <div className="divide-y divide-white/5 font-sans">
              {project.beforeAfter.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 px-6 sm:px-10 py-6 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-5 sm:col-span-4">
                    <span className="font-heading text-lg sm:text-xl text-white">{row.metric}</span>
                  </div>

                  <div className="col-span-2 text-center font-mono text-xs sm:text-sm text-red-400/80 line-through hidden sm:block">
                    {row.before}
                  </div>

                  <div className="col-span-4 sm:col-span-3 text-center">
                    <span
                      className="px-3.5 py-1.5 rounded-full font-mono text-xs sm:text-sm font-bold"
                      style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                    >
                      {row.after}
                    </span>
                  </div>

                  <div className="col-span-3 text-right font-heading text-base sm:text-xl text-emerald-400">
                    {row.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. ARCHITECTURAL DEEP-DIVE BENTO CARDS
      ───────────────────────────────────────────────────────────── */}
      {project.architectureHighlights && project.architectureHighlights.length > 0 && (
        <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase text-white/50">
              <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
              Engineering Depth
              <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white">
              CORE TECHNICAL <span style={{ color: accentColor }}>INNOVATIONS.</span>
            </h2>
            <p className="font-sans font-light text-white/50 text-base">
              A breakdown of the proprietary systems and custom architecture developed for this project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.architectureHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-8 md:p-10 rounded-3xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-xl relative overflow-hidden space-y-6 hover:border-white/25 transition-all duration-300 shadow-xl group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform"
                  style={{ color: accentColor }}
                >
                  <Cpu className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                    {item.tag}
                  </span>
                  <h3 className="font-heading text-2xl uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="font-sans font-light text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. INTERACTIVE DUAL DEVICE SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/5 relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase text-white/50">
            <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
            Cross-Device Fidelity
            <span className="w-8 h-[1px]" style={{ backgroundColor: accentColor }} />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white">
            SEAMLESS <span style={{ color: accentColor }}>ACROSS VIEWPORTS.</span>
          </h2>
          <p className="font-sans font-light text-white/50 text-base">
            Responsive design is not an afterthought. Every breakpoint is handcrafted for maximum engagement.
          </p>
        </div>

        {/* Dual Device Composition */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[480px] md:min-h-[600px]">
          
          {/* Main Desktop Card */}
          <motion.div
            style={{ y: mockupY1 }}
            className="w-full lg:w-[68%] rounded-3xl p-3 bg-[#111118]/90 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#08080E] rounded-t-2xl border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="font-mono text-[10px] text-white/40 ml-2 truncate">
                Desktop High-Resolution View
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full rounded-b-xl overflow-hidden">
              <Image
                src={project.img}
                alt={`${project.title} Desktop`}
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Floating Mobile Companion Card */}
          <motion.div
            style={{ y: mockupY2 }}
            className="w-[260px] sm:w-[300px] lg:w-[28%] rounded-[2.5rem] p-3 bg-[#141420]/90 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden lg:-ml-12 z-20"
          >
            <div className="relative aspect-[9/18] w-full rounded-[2rem] overflow-hidden bg-black border-2 border-white/10">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-white/10 rounded-full z-20" />
              <Image
                src={project.img}
                alt={`${project.title} Mobile`}
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. SEO-RICH INTERACTIVE FAQ ACCORDION
      ───────────────────────────────────────────────────────────── */}
      {project.faq && project.faq.length > 0 && (
        <section className="py-24 px-6 lg:px-12 max-w-[1200px] mx-auto border-b border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.4em] uppercase text-white/50">
              <HelpCircle className="w-4 h-4" style={{ color: accentColor }} />
              Knowledge & Insights
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white">
              FREQUENTLY ASKED <span style={{ color: accentColor }}>QUESTIONS.</span>
            </h2>
            <p className="font-sans font-light text-white/50 text-base">
              Common architectural, technical, and strategic questions regarding this project.
            </p>
          </div>

          <div className="space-y-4">
            {project.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#0D0D14]/90 backdrop-blur-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="font-heading text-lg sm:text-xl text-white group-hover:text-[#6324FC] transition-colors">
                      {item.question}
                    </span>
                    <div
                      className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-white/10" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-white/60" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 pt-2 font-sans font-light text-sm md:text-base text-white/70 leading-relaxed border-t border-white/5">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          9. STRATEGIC TAKEAWAYS FOR TECH LEADERS
      ───────────────────────────────────────────────────────────── */}
      {project.keyTakeaways && project.keyTakeaways.length > 0 && (
        <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/5">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#12121E] to-[#0A0A10] border border-white/10 backdrop-blur-2xl">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white/50 mb-4">
              <Activity className="w-4 h-4" style={{ color: accentColor }} />
              Executive Takeaways
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl uppercase tracking-tight text-white mb-8">
              Key Lessons for CTOs & Product Founders
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.keyTakeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3"
                >
                  <div className="font-mono text-xs font-bold" style={{ color: accentColor }}>
                    0{idx + 1} // Insight
                  </div>
                  <p className="font-sans text-sm text-white/80 leading-relaxed">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          10. CLIENT TESTIMONIAL QUOTE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto border-b border-white/5">
        <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#12121D] to-[#0A0A10] border border-white/10 backdrop-blur-2xl overflow-hidden text-center">
          <Quote
            className="absolute top-6 right-6 w-28 h-28 opacity-5 pointer-events-none"
            style={{ color: accentColor }}
          />
          <blockquote className="relative z-10 font-heading text-2xl sm:text-3xl md:text-4xl text-white leading-snug tracking-tight mb-8 max-w-3xl mx-auto">
            &quot;{project.testimonial.quote}&quot;
          </blockquote>

          <div className="flex flex-col items-center gap-2 relative z-10">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-heading text-lg text-white font-bold mb-2"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${secondaryAccent})`,
              }}
            >
              {project.testimonial.author.charAt(0)}
            </div>
            <div className="font-heading text-xl text-white">
              {project.testimonial.author}
            </div>
            <div className="font-mono text-xs tracking-wider text-white/50 uppercase">
              {project.testimonial.role}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. MAGNETIC NEXT PROJECT TAKEOVER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 lg:px-12 w-full flex items-center justify-center bg-gradient-to-b from-[#060608] to-[#0D0D14] border-t border-white/5 overflow-hidden group">
        <Link
          href={`/work/${nextProject.slug || project.next.id}`}
          className="relative z-10 w-full max-w-[1200px] flex flex-col items-center text-center cursor-pointer"
        >
          {/* Subtle Ambient Background */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${nextProject.accent || "#6324FC"} 0%, transparent 70%)`,
            }}
          />

          <span className="font-mono text-xs tracking-[0.4em] uppercase text-white/40 mb-4 group-hover:text-white transition-colors duration-300">
            CONTINUE EXPLORING // NEXT CASE STUDY
          </span>

          <h2
            className="font-heading text-5xl sm:text-7xl md:text-9xl tracking-tighter uppercase text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-700 leading-none mb-8"
            style={{
              backgroundImage: `linear-gradient(135deg, #ffffff, ${nextProject.accent || "#6324FC"})`,
            }}
          >
            {project.next.title}
          </h2>

          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.04] border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500 shadow-xl">
            <span className="font-heading text-xs tracking-[0.2em] uppercase text-white">
              View Next Case Study
            </span>
            <MoveRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </Link>
      </section>
    </main>
  );
}
