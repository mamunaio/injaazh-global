"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Zap,
  Target,
  ArrowRight,
  Lock,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface CaseMetric {
  label: string;
  val: number;
  suffix: string;
  prefix?: string;
  icon: any;
}

interface CaseItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  location: string;
  liveUrl: string;
  displayUrl: string;
  status: string;
  metrics: CaseMetric[];
  body: string;
  tags: string[];
  image: string;
  color: string;
  accentGlow: string;
}

const cases: CaseItem[] = [
  {
    id: "01",
    slug: "themesjet",
    category: "WEB DEV · MARKETPLACE",
    title: "ThemesJet — Build Faster. Choose Better.",
    location: "🌐 GLOBAL",
    liveUrl: "https://themesjet.com",
    displayUrl: "themesjet.com",
    status: "LIVE PRODUCTION",
    metrics: [
      { label: "PREMIUM ASSETS", val: 500, suffix: "+", prefix: "", icon: Zap },
      { label: "DEVELOPERS", val: 10, suffix: "k+", icon: TrendingUp },
    ],
    body: "A high-performance digital marketplace built with Next.js 15, React, and Edge Runtime. Engineered for instant digital asset downloads, verified code standards, and seamless Stripe checkout.",
    tags: ["Next.js 15", "Marketplace", "Stripe Connect", "Edge SEO"],
    image: "/assets/themes_jet_final.webp",
    color: "#6324FC",
    accentGlow: "rgba(99, 36, 252, 0.25)",
  },
  {
    id: "02",
    slug: "aka-moving",
    category: "LOGISTICS · SERVICE",
    title: "AKA Moving — Enterprise Logistics Platform",
    location: "🇨🇦 CANADA",
    liveUrl: "https://akamoving.ca",
    displayUrl: "akamoving.ca",
    status: "CLIENT WEBSITE",
    metrics: [
      { label: "BOOKING CONV.", val: 150, suffix: "%", prefix: "+", icon: Zap },
      { label: "AUTO DISPATCH", val: 24, suffix: "/7", icon: Target },
    ],
    body: "Complete relocation logistics and automated booking portal for the Canadian market. Integrated with custom distance calculation, live pricing estimations, and 24/7 client management.",
    tags: ["WordPress", "Logistics Engine", "Automation", "Local SEO"],
    image: "/assets/aka_moving_final.webp",
    color: "#00E5FF",
    accentGlow: "rgba(0, 229, 255, 0.25)",
  },
  {
    id: "03",
    slug: "nexus-esports",
    category: "GAMING · ESPORTS",
    title: "Nexus Esports — Competitive Gaming UI",
    location: "GLOBAL GAMING",
    liveUrl: "https://nexusesports.com",
    displayUrl: "nexusesports.com",
    status: "CONCEPT DEMO",
    metrics: [
      {
        label: "REGISTRATION",
        val: 200,
        suffix: "%",
        prefix: "+",
        icon: Target,
      },
      { label: "LOAD SPEED", val: 0.9, suffix: "s", icon: Zap },
    ],
    body: "An adrenaline-fueled, cyberpunk-inspired web architecture for elite esports collectives — featuring ultra-low latency tournament trackers, roster showcases, and sub-second load times.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Dark Theme"],
    image: "/assets/nexus_esports_final.webp",
    color: "#FF2D55",
    accentGlow: "rgba(255, 45, 85, 0.25)",
  },
];

function NumberTicker({
  value,
  suffix,
  prefix,
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1800;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }, 400);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <span className="font-heading text-xl md:text-2xl text-white font-bold tracking-tight">
      {prefix}
      {typeof value === "number" && value % 1 !== 0
        ? displayValue.toFixed(1)
        : Math.floor(displayValue)}
      {suffix}
    </span>
  );
}

function CaseStudyCard({
  project,
  index,
}: {
  project: CaseItem;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 400], [4, -4]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 400], [-4, 4]),
    springConfig,
  );

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative flex flex-col h-full rounded-3xl bg-[#09090D] border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
      onMouseMove={handleMouseMove}
      style={{ perspective: 1000 }}
    >
      {/* Background Spotlight following cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(650px circle at ${x}px ${y}px, ${project.accentGlow}, transparent 50%)`,
          ),
        }}
      />

      {/* Top Safari Mockup Browser Chrome */}
      <div className="relative z-10 flex items-center justify-between px-5 py-3 bg-[#0E0E14] border-b border-white/[0.06] rounded-t-3xl">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 group-hover:bg-[#FF5F56] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 group-hover:bg-[#FFBD2E] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 group-hover:bg-[#27C93F] transition-colors" />
        </div>

        {/* SSL Domain Bar */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit ${project.displayUrl}`}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-white/70 hover:text-white hover:bg-white/[0.08] transition-all"
        >
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate max-w-[130px] font-medium">{project.displayUrl}</span>
        </a>

        {/* Status Beacon */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-400/90 uppercase hidden sm:inline">
            {project.status}
          </span>
        </div>
      </div>

      {/* Interactive Mockup Preview Frame */}
      <div className="relative z-10 p-3 pb-0">
        <Link
          href={`/work/${project.slug}`}
          className="block relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#13131A] border border-white/5 group/img"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out rounded-2xl"
            />

            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090D] via-[#09090D]/30 to-transparent opacity-75 group-hover:opacity-30 transition-opacity duration-500" />

            {/* Quick Inspection Pill on Image Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-[#060608]/90 backdrop-blur-md border border-white/20 text-white font-mono text-xs tracking-wider flex items-center gap-2 shadow-2xl">
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                EXPLORE CASE STUDY
              </span>
            </div>

            {/* Floating Metric Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 z-10">
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#060608]/85 backdrop-blur-xl border border-white/10 p-3 rounded-xl hover:bg-[#060608] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <m.icon
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: project.color }}
                    />
                    <NumberTicker
                      value={m.val}
                      suffix={m.suffix}
                      prefix={m.prefix}
                    />
                  </div>
                  <span className="font-mono text-[9px] tracking-wider text-white/50 uppercase block truncate">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Card Content & Metadata */}
      <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Location Header */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className="font-mono text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1.5"
              style={{ color: project.color }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: project.color }}
              />
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-white/40 tracking-wider">
              {project.location}
            </span>
          </div>

          {/* Project Title */}
          <Link href={`/work/${project.slug}`}>
            <h3 className="font-heading text-2xl text-white font-bold mb-3 hover:text-[#00E5FF] transition-colors leading-tight group-hover:translate-x-0.5 duration-300">
              {project.title}
            </h3>
          </Link>

          {/* Project Body */}
          <p className="font-sans font-light text-white/60 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
            {project.body}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/70 font-mono text-[10px] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dual Action Buttons Footer */}
        <div className="pt-4 border-t border-white/[0.07] flex items-center gap-3">
          {/* Live Preview Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-white font-mono text-[11px] tracking-wider uppercase font-semibold transition-all group/btn"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover/btn:text-white transition-colors" />
          </a>

          {/* Detailed Case Study Button */}
          <Link
            href={`/work/${project.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-mono text-[11px] tracking-wider uppercase font-semibold transition-all relative overflow-hidden group/cs"
            style={{
              background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
              borderColor: `${project.color}55`,
              borderWidth: 1,
            }}
          >
            <span className="relative z-10 group-hover/cs:translate-x-[-2px] transition-transform">
              Case Study
            </span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover/cs:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="w-full bg-[#060608] py-20 md:py-28 relative overflow-hidden">
      {/* Background Ambience & Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5FF]/10 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              className="h-[1px] bg-[#6324FC]"
            />
            <span className="font-mono text-xs md:text-sm tracking-[0.5em] text-[#6324FC] uppercase font-semibold">
              SELECTED WORKS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8">
            <div>
              <h2 className="sr-only">
                Our Portfolio of Enterprise Web Development and SEO Case Studies
              </h2>
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-white"
              >
                RESULTS <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block italic text-[#6324FC] mr-3 sm:mr-4"
                >
                  THAT
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block stroke-text opacity-90"
                >
                  SPEAK.
                </motion.span>
              </div>
            </div>

            <div className="max-w-xl border-l-2 border-[#6324FC]/40 pl-6 sm:pl-8 py-1">
              <p className="font-sans font-light text-white/70 text-base sm:text-lg leading-relaxed mb-4">
                Real enterprise websites engineered for measurable ROI, high Google rankings, and frictionless user experiences. Every featured case study below represents live client solutions.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#6324FC] hover:text-white uppercase transition-colors"
              >
                <span>EXPLORE ALL METHODOLOGIES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3-Column Interactive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {cases.map((project, idx) => (
            <CaseStudyCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom Banner & Full Archive CTA */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative">
            <div className="font-mono text-xs tracking-widest text-[#6324FC] uppercase mb-1 font-semibold">
              ENTERPRISE STANDARDS
            </div>
            <div className="font-sans text-white/90 text-lg sm:text-xl font-medium max-w-lg">
              "We don&apos;t just deliver web pages — we engineer high-speed digital assets that dominate search and drive revenue."
            </div>
          </div>

          <Link href="/work" className="group block w-full md:w-auto shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 w-full hover:shadow-[0_0_35px_rgba(99,36,252,0.4)] isolate"
            >
              {/* Rotating Conic Border */}
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[160%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>

              <div className="relative w-full h-full px-8 py-4 rounded-full bg-[#060608] flex items-center justify-center gap-3.5 z-10">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse shrink-0" />
                <span className="font-heading text-sm md:text-base tracking-widest text-white uppercase font-bold flex items-center gap-3">
                  VIEW FULL PORTFOLIO ARCHIVE
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[#00E5FF]" />
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
