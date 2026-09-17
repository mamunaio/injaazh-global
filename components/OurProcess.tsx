"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Hexagon,
  Layers,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Terminal,
  TrendingUp,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    phase: "PHASE 01 // 1-2 WEEKS",
    title: "DISCOVERY & FORENSIC AUDIT",
    subtitle: "Data-Driven Gap Analysis & Technical Architecture",
    icon: Hexagon,
    desc: "Every Injaazh engagement begins with a forensic technical SEO audit, full Core Web Vitals profiling, and competitor keyword gap analysis. We uncover structural bottlenecks and engineer a surgical roadmap tailored for global search dominance.",
    deliverables: [
      "100% Core Web Vitals, indexation & crawl budget audit",
      "Competitor search gap & programmatic keyword roadmap",
      "Full-stack security, API gateway & headless architecture specs",
    ],
    tags: ["MARKET RESEARCH", "ENTERPRISE SEO AUDIT", "TECHNICAL BLUEPRINT"],
    accentColor: "#6324FC",
    previewType: "audit",
  },
  {
    id: "02",
    phase: "PHASE 02 // 2-3 WEEKS",
    title: "ENTERPRISE SYSTEM DESIGN",
    subtitle: "Awwwards Aesthetics Mapped to Conversion Psychology",
    icon: Layers,
    desc: "We bridge high-end visual elegance with cognitive conversion psychology. We engineer headless design systems, bespoke component libraries, and dynamic micro-interactions engineered to engage enterprise decision-makers.",
    deliverables: [
      "Figma design system with global token architecture",
      "High-fidelity interactive prototypes with 60fps micro-animations",
      "Conversion-engineered responsive UX for desktop, tablet & mobile",
    ],
    tags: ["DESIGN SYSTEMS", "UI/UX ARCHITECTURE", "CONVERSION PSYCHOLOGY"],
    accentColor: "#00E5FF",
    previewType: "design",
  },
  {
    id: "03",
    phase: "PHASE 03 // 3-4 WEEKS",
    title: "NEXT.JS CORE ENGINEERING",
    subtitle: "Edge Runtime Infrastructure & Sub-Second Latency",
    icon: Cpu,
    desc: "Speed is a competitive moat. We deploy ultra-fast Next.js architectures on edge runtime — guaranteeing sub-second TTFB, 99/100 Google Lighthouse scores, and zero technical debt across international deployments.",
    deliverables: [
      "Next.js 15 App Router with Edge SSR & ISR caching layer",
      "Headless CMS, GraphQL & enterprise API integrations",
      "Sub-second load speeds & automated security headers",
    ],
    tags: ["NEXT.JS 15", "EDGE RUNTIME", "CORE WEB VITALS 99+"],
    accentColor: "#6324FC",
    previewType: "engineering",
  },
  {
    id: "04",
    phase: "PHASE 04 // CONTINUOUS",
    title: "SCALE, DOMINATE & EXPAND",
    subtitle: "Programmatic Growth & Algorithmic Search Dominance",
    icon: Zap,
    desc: "Deployment is just Day One. We deploy programmatic content silos, comprehensive JSON-LD schema networks, and continuous CRO experiments to turn your digital platform into a high-converting growth engine.",
    deliverables: [
      "Structured data / JSON-LD schema syndication",
      "Real-time analytics telemetry & conversion funnel optimization",
      "Programmatic SEO expansion & international keyword dominance",
    ],
    tags: ["TECHNICAL SEO", "SCHEMA NETWORKS", "CONVERSION RATE OPT."],
    accentColor: "#00E5FF",
    previewType: "growth",
  },
];

function CardPreview({ type }: { type: string }) {
  if (type === "audit") {
    return (
      <div className="w-full h-full p-5 sm:p-6 rounded-2xl bg-[#08080C] border border-white/[0.06] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-[11px] font-semibold text-white/90">
              LIGHTHOUSE PERFORMANCE
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
            PASSED 100/100
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 my-4">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="font-mono text-[9px] text-white/40 block mb-0.5">
              FIRST CONTENTFUL PAINT
            </span>
            <span className="font-heading text-xl text-white font-bold">
              0.4<span className="text-xs text-emerald-400">s</span>
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="font-mono text-[9px] text-white/40 block mb-0.5">
              TIME TO FIRST BYTE
            </span>
            <span className="font-heading text-xl text-white font-bold">
              38<span className="text-xs text-emerald-400">ms</span>
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="font-mono text-[9px] text-white/40 block mb-0.5">
              CUMULATIVE LAYOUT SHIFT
            </span>
            <span className="font-heading text-xl text-white font-bold">
              0.00
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="font-mono text-[9px] text-white/40 block mb-0.5">
              TOTAL BLOCKING TIME
            </span>
            <span className="font-heading text-xl text-white font-bold">
              0<span className="text-xs text-emerald-400">ms</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.05] text-[10px] font-mono text-white/50">
          <span>Security Audit: Grade A+</span>
          <span className="text-emerald-400">0 Vulnerabilities</span>
        </div>
      </div>
    );
  }

  if (type === "design") {
    return (
      <div className="w-full h-full p-5 sm:p-6 rounded-2xl bg-[#08080C] border border-white/[0.06] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00E5FF]" />
            <span className="font-mono text-[11px] font-semibold text-white/90">
              GLOBAL TOKEN SYSTEM
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] font-mono text-[10px] font-bold">
            FIGMA // 60 FPS
          </span>
        </div>

        <div className="my-4 space-y-2.5">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="font-mono text-xs text-white/70">Palette Tokens</span>
            <div className="flex gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#6324FC] ring-1 ring-white/20" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#00E5FF] ring-1 ring-white/20" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF2D55] ring-1 ring-white/20" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#0E0E14] ring-1 ring-white/20" />
            </div>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="font-mono text-xs text-white/70">Typography Scale</span>
            <span className="font-mono text-xs text-[#00E5FF]">Cabinet + JetBrains</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="font-mono text-xs text-white/70">Responsive Grids</span>
            <span className="font-mono text-xs text-emerald-400">Fluid 12-Column</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.05] text-[10px] font-mono text-white/50">
          <span>Awwwards Aesthetic Standard</span>
          <span className="text-[#00E5FF]">Verified Accessible</span>
        </div>
      </div>
    );
  }

  if (type === "engineering") {
    return (
      <div className="w-full h-full p-5 sm:p-6 rounded-2xl bg-[#08080C] border border-white/[0.06] flex flex-col justify-between font-mono">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#6324FC]" />
            <span className="text-[11px] font-semibold text-white/90">
              EDGE ARCHITECTURE
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#6324FC]/20 border border-[#6324FC]/30 text-[#00E5FF] text-[10px] font-bold">
            NEXT.JS 15
          </span>
        </div>

        <div className="my-3 p-3 rounded-xl bg-black/60 border border-white/5 text-[11px] leading-relaxed text-white/80 overflow-hidden">
          <div className="text-white/40 mb-0.5">// Edge SSR Runtime</div>
          <div>
            <span className="text-purple-400">export const</span> runtime ={" "}
            <span className="text-emerald-400">&apos;edge&apos;</span>;
          </div>
          <div>
            <span className="text-purple-400">export async function</span>{" "}
            <span className="text-cyan-400">GET</span>() &#123;
          </div>
          <div className="pl-4">
            <span className="text-purple-400">return</span> Response.json(&#123;{" "}
            <span className="text-cyan-400">ttfb</span>:{" "}
            <span className="text-emerald-400">&apos;38ms&apos;</span>,{" "}
            <span className="text-cyan-400">cache</span>:{" "}
            <span className="text-emerald-400">&apos;HIT&apos;</span> &#125;);
          </div>
          <div>&#125;</div>
        </div>

        <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.05] text-[10px] text-white/50">
          <span>Global CDN: 300+ PoPs</span>
          <span className="text-emerald-400">99.99% Uptime</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-5 sm:p-6 rounded-2xl bg-[#08080C] border border-white/[0.06] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-[11px] font-semibold text-white/90">
            SEARCH DOMINANCE TELEMETRY
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
          GEO & AEO OPTIMIZED
        </span>
      </div>

      <div className="my-4 space-y-2.5">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
          <div>
            <span className="font-mono text-[9px] text-white/40 block">
              ORGANIC TRAFFIC SCALE
            </span>
            <span className="font-heading text-xl text-white font-bold">
              +340<span className="text-xs text-emerald-400">%</span>
            </span>
          </div>
          <span className="font-mono text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">
            COMPOUNDING
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
          <div>
            <span className="font-mono text-[9px] text-white/40 block">
              COMPETITIVE SERP RANKINGS
            </span>
            <span className="font-heading text-lg text-white font-bold">
              Top 3 Dominance
            </span>
          </div>
          <span className="font-mono text-xs text-[#00E5FF]">High Intent</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.05] text-[10px] font-mono text-white/50">
        <span>Rich Snippet Silos: Active</span>
        <span className="text-emerald-400">Zero Technical Debt</span>
      </div>
    </div>
  );
}

export default function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { openModal } = useProjectModal();

  useGSAP(
    () => {
      const cards = cardsRef.current.filter((c): c is HTMLDivElement => c !== null);
      if (cards.length < 4 || !stageRef.current) return;

      // Card 0 starts in normal view at y: 0
      // Cards 1, 2, 3 start below the stage at yPercent: 120, opacity: 0
      gsap.set(cards.slice(1), { yPercent: 125, opacity: 0 });

      // Build a unified, scrubbed GSAP timeline inside the pinned stage
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top+=100",
          end: "+=1300",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // --- SEQUENCE 1: Card 01 enters over Card 00 ---
      tl.to(cards[1], {
        yPercent: 0,
        y: 26,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, 0)
      .to(cards[0].querySelector(".deck-card-inner"), {
        scale: 0.95,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.out",
      }, 0)
      .to(cards[0].querySelector(".deck-card-overlay"), {
        opacity: 0.35,
        duration: 1,
        ease: "power2.out",
      }, 0);

      // --- SEQUENCE 2: Card 02 enters over Card 01 ---
      tl.to(cards[2], {
        yPercent: 0,
        y: 52,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, 1)
      .to(cards[1].querySelector(".deck-card-inner"), {
        scale: 0.95,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.out",
      }, 1)
      .to(cards[1].querySelector(".deck-card-overlay"), {
        opacity: 0.35,
        duration: 1,
        ease: "power2.out",
      }, 1)
      .to(cards[0].querySelector(".deck-card-inner"), {
        scale: 0.91,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.out",
      }, 1)
      .to(cards[0].querySelector(".deck-card-overlay"), {
        opacity: 0.60,
        duration: 1,
        ease: "power2.out",
      }, 1);

      // --- SEQUENCE 3: Card 03 (LAST CARD) enters smoothly over Card 02 ---
      tl.to(cards[3], {
        yPercent: 0,
        y: 78,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, 2)
      .to(cards[2].querySelector(".deck-card-inner"), {
        scale: 0.95,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.out",
      }, 2)
      .to(cards[2].querySelector(".deck-card-overlay"), {
        opacity: 0.35,
        duration: 1,
        ease: "power2.out",
      }, 2)
      .to(cards[1].querySelector(".deck-card-inner"), {
        scale: 0.91,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.out",
      }, 2)
      .to(cards[1].querySelector(".deck-card-overlay"), {
        opacity: 0.60,
        duration: 1,
        ease: "power2.out",
      }, 2)
      .to(cards[0].querySelector(".deck-card-inner"), {
        scale: 0.88,
        transformOrigin: "top center",
        duration: 1,
        ease: "power2.out",
      }, 2)
      .to(cards[0].querySelector(".deck-card-overlay"), {
        opacity: 0.75,
        duration: 1,
        ease: "power2.out",
      }, 2);

      // --- SEQUENCE 4: Compact buffer pause before smooth unpinning ---
      tl.to({}, { duration: 0.2 });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#060608] text-white"
    >
      {/* Background Ambience & Fine Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#6324FC 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608]" />
      </div>

      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-12 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              className="h-[1px] bg-[#6324FC]"
            />
            <span className="font-mono text-xs md:text-sm tracking-[0.5em] text-[#6324FC] uppercase font-semibold">
              OUR METHODOLOGY // 04-STEP SYSTEM
            </span>
          </div>

          <h2 className="sr-only">
            Our Digital Agency Process: Strategy, Web Design, Next.js Engineering, and SEO Growth
          </h2>
          <div
            aria-hidden="true"
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-white mb-6"
          >
            The Architecture <br />
            <span className="inline-block italic text-[#6324FC] mr-4">
              Of
            </span>
            {" "}
            <span className="inline-block stroke-text opacity-90">
              Dominance.
            </span>
          </div>

          <p className="font-sans font-light text-white/70 text-base sm:text-lg border-l-2 border-[#6324FC]/40 pl-6 leading-relaxed mb-8">
            We don&apos;t just build websites. We engineer high-performance digital ecosystems — designed to capture market share, outrank competitors in Google search, and dominate every channel your enterprise clients use to find you.
          </p>

          <motion.button
            onClick={() => openModal()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 w-fit hover:shadow-[0_0_30px_rgba(99,36,252,0.4)] isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[160%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            <div className="relative w-full h-full px-7 py-3.5 rounded-full bg-[#060608] flex items-center justify-center gap-3 z-10">
              <span className="font-heading text-xs tracking-widest text-white uppercase font-bold">
                INITIATE YOUR BLUEPRINT
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Pinned Card Deck Stage */}
      <div
        ref={stageRef}
        className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative min-h-[500px] md:h-[500px] pb-0 mb-0"
      >
        {steps.map((step, idx) => (
          <div
            key={step.id}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="deck-card absolute top-0 left-4 right-4 sm:left-6 sm:right-6 lg:left-12 lg:right-12"
            style={{ zIndex: idx + 10 }}
          >
            <div className="deck-card-inner relative w-full rounded-3xl bg-[#0B0B11]/98 backdrop-blur-2xl border border-white/[0.1] hover:border-white/20 p-6 sm:p-9 lg:p-11 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.95)] transition-colors duration-500 overflow-hidden group origin-top">
              {/* Dynamic Darkening Overlay for Progressive Depth */}
              <div className="deck-card-overlay absolute inset-0 bg-[#060608] opacity-0 pointer-events-none rounded-3xl z-30 transition-opacity" />

              {/* Top Edge Ambient Highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, ${step.accentColor}, transparent)`,
                }}
              />

              {/* Corner Ambient Glow */}
              <div
                className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: step.accentColor }}
              />

              {/* Large Faded Background Number */}
              <div className="absolute top-3 right-5 sm:right-9 font-heading text-[5.5rem] sm:text-[7.5rem] lg:text-[9rem] leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none">
                {step.id}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Left Column: Metadata, Description & Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Phase Badge & Step Count */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] tracking-wider uppercase font-semibold"
                        style={{ color: step.accentColor }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: step.accentColor }}
                        />
                        {step.phase}
                      </span>
                      <span className="font-mono text-xs text-white/40 tracking-widest font-semibold">
                        STEP {step.id} / 04
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <div className="font-mono text-xs sm:text-sm text-white/60 mb-4 tracking-wide">
                      {step.subtitle}
                    </div>

                    {/* Body Text */}
                    <p className="font-sans font-light text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed mb-5">
                      {step.desc}
                    </p>

                    {/* Key Deliverables Checklist */}
                    <div className="mb-5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-2.5 font-semibold">
                        MILESTONE DELIVERABLES
                      </span>
                      <div className="space-y-2">
                        {step.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-sans"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {step.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] tracking-wide px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/60 group-hover:text-white/90 group-hover:border-white/15 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Live High-Tech Blueprint Sandbox Graphic */}
                <div className="lg:col-span-5 h-full min-h-[240px] sm:min-h-[280px]">
                  <CardPreview type={step.previewType} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
