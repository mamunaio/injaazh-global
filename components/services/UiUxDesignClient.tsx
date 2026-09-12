"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Target,
  Layers,
  Palette,
  Zap,
  CheckCircle2,
  XCircle,
  Sliders,
  Cpu,
  Eye,
  MousePointer2,
  Check,
  Monitor,
  Smartphone,
  Layout,
  ChevronRight,
  Code2,
  Component,
  Compass,
  Shapes,
  Maximize2,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";
import Counter from "@/components/Counter";

// -------------------------------------------------------------
// Helper: Color to RGBA
// -------------------------------------------------------------
function hexToRgba(hex: string, alpha: number) {
  const c = hex.replace("#", "");
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// -------------------------------------------------------------
// Interactive Metric Spotlight Card (Dynamic Hover & Spotlight)
// -------------------------------------------------------------
function MetricSpotlightCard({
  stat,
  idx,
}: {
  stat: {
    value: string;
    label: string;
    desc: string;
    badge: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
  };
  idx: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = stat.icon;

  const colorRgba = useMemo(() => hexToRgba(stat.color, 0.18), [stat.color]);
  const colorBorder = useMemo(() => hexToRgba(stat.color, 0.6), [stat.color]);
  const colorShadow = useMemo(() => hexToRgba(stat.color, 0.22), [stat.color]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-default shadow-sm"
      style={{
        borderColor: isHovered ? colorBorder : undefined,
        boxShadow: isHovered ? `0 20px 50px ${colorShadow}` : undefined,
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(350px circle at ${x}px ${y}px, ${colorRgba}, transparent 70%)`
          ),
        }}
      />

      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(stat.color, 0.2)} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-20 flex items-center justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
          style={{
            backgroundColor: isHovered ? stat.color : `${stat.color}15`,
            border: `1px solid ${isHovered ? stat.color : `${stat.color}30`}`,
            boxShadow: isHovered ? `0 0 15px ${hexToRgba(stat.color, 0.4)}` : undefined,
          }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isHovered ? "#ffffff" : stat.color }}
          />
        </div>

        <span
          className="px-2.5 py-0.5 rounded-full text-[9px] font-heading uppercase tracking-wider font-semibold transition-all duration-300 bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/5 text-primary/60"
          style={{
            backgroundColor: isHovered ? hexToRgba(stat.color, 0.12) : undefined,
            color: isHovered ? stat.color : undefined,
            borderColor: isHovered ? hexToRgba(stat.color, 0.3) : undefined,
          }}
        >
          {stat.badge}
        </span>
      </div>

      <div className="relative z-20 space-y-1 my-2">
        <div
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight transition-all duration-300 group-hover:scale-105"
          style={{ color: stat.color }}
        >
          <Counter value={stat.value} />
        </div>
        <div className="font-heading text-xs sm:text-sm uppercase tracking-wider text-primary font-bold transition-colors">
          {stat.label}
        </div>
      </div>

      <p className="relative z-20 text-[11px] font-sans text-primary/60 leading-relaxed pt-2 border-t border-black/5 dark:border-white/5">
        {stat.desc}
      </p>

      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out z-20"
        style={{
          background: `linear-gradient(90deg, ${stat.color}, ${hexToRgba(stat.color, 0.2)})`,
        }}
      />
    </motion.div>
  );
}

// -------------------------------------------------------------
// Interactive Tool & Technology Spotlight Card
// -------------------------------------------------------------
function ToolSpotlightCard({
  tool,
  idx,
}: {
  tool: {
    title: string;
    role: string;
    desc: string;
    badge: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
  };
  idx: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = tool.icon;

  const colorRgba = useMemo(() => hexToRgba(tool.color, 0.18), [tool.color]);
  const colorBorder = useMemo(() => hexToRgba(tool.color, 0.6), [tool.color]);
  const colorShadow = useMemo(() => hexToRgba(tool.color, 0.22), [tool.color]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative rounded-3xl p-7 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-default"
      style={{
        borderColor: isHovered ? colorBorder : undefined,
        boxShadow: isHovered ? `0 20px 50px ${colorShadow}` : undefined,
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(360px circle at ${x}px ${y}px, ${colorRgba}, transparent 70%)`
          ),
        }}
      />

      <div
        className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(tool.color, 0.2)} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-20 space-y-4">
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
            style={{
              backgroundColor: isHovered ? tool.color : `${tool.color}15`,
              border: `1px solid ${isHovered ? tool.color : `${tool.color}35`}`,
              boxShadow: isHovered ? `0 0 20px ${hexToRgba(tool.color, 0.4)}` : undefined,
            }}
          >
            <Icon
              className="w-6 h-6 transition-colors duration-300"
              style={{ color: isHovered ? "#ffffff" : tool.color }}
            />
          </div>
          <span
            className="px-3 py-1 rounded-full text-[10px] font-heading uppercase tracking-widest font-semibold bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/5 text-primary/70 transition-all duration-300"
            style={{
              backgroundColor: isHovered ? hexToRgba(tool.color, 0.12) : undefined,
              color: isHovered ? tool.color : undefined,
              borderColor: isHovered ? hexToRgba(tool.color, 0.3) : undefined,
            }}
          >
            {tool.role}
          </span>
        </div>

        <div>
          <h3
            className="font-heading text-xl font-bold tracking-tight text-primary transition-colors duration-300"
            style={{
              color: isHovered ? tool.color : undefined,
            }}
          >
            {tool.title}
          </h3>
          <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed mt-2">
            {tool.desc}
          </p>
        </div>
      </div>

      <div className="relative z-20 pt-5 mt-5 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-primary/50 uppercase tracking-tight">
          Specification:
        </span>
        <span
          className="text-xs font-heading font-bold transition-colors duration-300"
          style={{ color: tool.color }}
        >
          {tool.badge}
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out z-20"
        style={{
          background: `linear-gradient(90deg, ${tool.color}, ${hexToRgba(tool.color, 0.2)})`,
        }}
      />
    </motion.div>
  );
}

// -------------------------------------------------------------
// Main UI/UX Design Client
// -------------------------------------------------------------
export default function UiUxDesignClient() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Design Token Simulator State
  const [previewTheme, setPreviewTheme] = useState<"dark" | "light" | "cyber">("dark");
  const [cornerRounding, setCornerRounding] = useState<number>(16);
  const [accentColor, setAccentColor] = useState<string>("#6324FC");

  // Protocol Active Stage
  const [activeStage, setActiveStage] = useState<number>(0);

  const stats = [
    {
      value: "99.4/100",
      label: "Usability & Accessibility",
      desc: "Verified WCAG AAA contrast and cognitive flow benchmarks",
      badge: "USABILITY SLA",
      icon: Eye,
      color: "#6324FC",
    },
    {
      value: "+64%",
      label: "Avg Conversion Lift",
      desc: "Measured after deploying our conversion-engineered prototypes",
      badge: "CRO LIFT",
      icon: TrendingUp,
      color: "#00E5FF",
    },
    {
      value: "72hrs",
      label: "Prototype Sprint Kickoff",
      desc: "Rapid Figma high-fidelity interactive wireframes & micro-flows",
      badge: "AGILITY",
      icon: Zap,
      color: "#00FFA3",
    },
    {
      value: "100%",
      label: "Tokenized Handoff",
      desc: "Zero translation loss between Figma design tokens and Next.js code",
      badge: "ZERO UI DRIFT",
      icon: Layers,
      color: "#FACC15",
    },
  ];

  // 3 Primary Sub-Architectures with direct internal links
  const subArchitectures = [
    {
      title: "Brand Identity & Visual Language",
      slug: "brand-identity",
      href: "/services/ui-ux-design/brand-identity",
      tagline: "Iconic Logomarks, Typography Systems & Brand Guidelines",
      desc: "Your brand is your primary trust moat. We construct distinctive visual identities, typographic scale hierarchies, and mathematical color tokens designed for brand authority.",
      badge: "BRAND ARCHITECTURE",
      metrics: "100% Vector Scalable",
      features: ["Vector Logomarks", "Mathematical Color Tokens", "Typography Hierarchies", "Enterprise Style Guidelines"],
    },
    {
      title: "Enterprise Design Systems & Figma",
      slug: "design-systems",
      href: "/services/ui-ux-design/design-systems",
      tagline: "Multi-Brand Variable Tokens & Frictionless Code Handoff",
      desc: "Eliminate UI drift and engineering friction. We construct scalable, tokenized Figma component libraries mapped 1-to-1 with React, Tailwind CSS, and headless frontends.",
      badge: "SYSTEM ARCHITECTURE",
      metrics: "4.5x Dev Velocity",
      features: ["Figma Variable Tokens", "Auto Layout 5.0 Components", "WCAG AAA Compliant", "Zero-Drift Code Sync"],
    },
    {
      title: "Cinematic Motion & Micro-Interactions",
      slug: "motion-graphics",
      href: "/services/ui-ux-design/motion-graphics",
      tagline: "Fluid Physics-Based Choreography & Scroll-Bound Narratives",
      desc: "Static layouts are easily forgotten. We design 60FPS micro-interactions, cursor spotlights, magnetic triggers, and scroll-bound animations that mesmerize users.",
      badge: "MOTION ENGINEERING",
      metrics: "60 FPS Fluidity",
      features: ["Framer Motion Choreography", "GSAP ScrollTrigger Logic", "Lottie Micro-Assets", "Interactive 3D Elements"],
    },
  ];

  // 4-Stage Human-Centered Design Protocol
  const designStages = [
    {
      id: "01",
      name: "Cognitive Discovery & User Research",
      focus: "Behavioral Heuristics & Competitive Friction Audits",
      desc: "We analyze target user psychology, cognitive load bottlenecks, and competitor design flaws to architect an unshakeable information architecture before drawing a single frame.",
      deliverables: ["User Journey Archetypes", "Friction Drop-off Audit", "Heuristic UX Scorecard", "Competitive Benchmark Matrix"],
      outcomes: ["Zero Guesswork", "Clear Information Hierarchy", "Validated User Intent"],
    },
    {
      id: "02",
      name: "Wireframing & Information Architecture",
      focus: "Structural Low-Fidelity Conversion Wireframes",
      desc: "Mapping out every viewport and user touchpoint with structural wireframes. We optimize layout hierarchy, scanning patterns (F & Z patterns), and frictionless CTA funnels.",
      deliverables: ["Interactive Flow Diagrams", "Low-Fidelity Mobile/Desktop Wireframes", "Content Hierarchy Specs", "CTA Funnel Mapping"],
      outcomes: ["Clear Conversion Paths", "Streamlined User Scans", "Validated Layouts"],
    },
    {
      id: "03",
      name: "High-Fidelity Interactive Prototyping",
      focus: "Pixel-Perfect Visual Luxury & Micro-Interactions",
      desc: "We transform approved wireframes into breathtaking, Awwwards-caliber visual interfaces in Figma. Every micro-animation, button hover state, and modal transition is interactive.",
      deliverables: ["Clickable Figma Prototypes", "Micro-Interaction Motion Specs", "Component State Matrices", "Light/Dark Contrast Modes"],
      outcomes: ["Awwwards-Level Aesthetics", "Stakeholder Sign-Off Velocity", "Living Interactive Models"],
    },
    {
      id: "04",
      name: "Tokenized Design System & Zero-Drift Handoff",
      focus: "1-to-1 Developer Synchronization & Production Code",
      desc: "We export tokenized design variables (spacing, typography, HSL colors, elevations) directly synced to Tailwind CSS and React component libraries for flawless, pixel-perfect production builds.",
      deliverables: ["Figma Variables & Token Library", "Developer Handoff Documentation", "WCAG AAA Accessibility Audit", "Storybook Ready Components"],
      outcomes: ["Zero Translation Loss", "4.5x Faster Frontend Build", "Infinite Scalability"],
    },
  ];

  // Tools & Technologies
  const tools = [
    {
      title: "Figma Architecture",
      role: "Core Design Canvas",
      desc: "Leveraged with Auto Layout 5.0, Variable Tokens, Component Properties, and modular multi-tier library publishing for seamless collaboration.",
      badge: "Auto Layout 5.0",
      icon: Component,
      color: "#6324FC",
    },
    {
      title: "Framer Motion & GSAP",
      role: "Motion Choreography",
      desc: "Physics-based spring curves, momentum dampening, and GPU-accelerated micro-interactions that feel alive under user touch.",
      badge: "60 FPS Fluidity",
      icon: Zap,
      color: "#00E5FF",
    },
    {
      title: "Design Tokens & Tailwind CSS",
      role: "Zero-Drift Code Sync",
      desc: "Mathematical design tokens mapped directly to Tailwind utility tokens and CSS variables, ensuring 100% fidelity from canvas to production.",
      badge: "Token Synchronized",
      icon: Code2,
      color: "#00FFA3",
    },
    {
      title: "WCAG AAA Accessibility",
      role: "Inclusive Usability",
      desc: "Color contrast testing, keyboard focus states, screen reader semantics, and motion-reduction fallbacks baked into every design spec.",
      badge: "99.4/100 Score",
      icon: Eye,
      color: "#FF2D55",
    },
    {
      title: "Spline 3D & WebGL",
      role: "Spatial Interactive Elements",
      desc: "Sub-second 3D interactive assets, floating spatial geometry, and camera-bound orbit controls integrated directly into web viewports.",
      badge: "Real-time 3D",
      icon: Shapes,
      color: "#FACC15",
    },
    {
      title: "Storybook Component Sync",
      role: "Design System Governance",
      desc: "Isolating and documenting every interactive component state in Storybook to guarantee enterprise brand consistency.",
      badge: "Living Styleguide",
      icon: Layout,
      color: "#8B5CF6",
    },
  ];

  // Comparative Advantage: Traditional Freelancers/Agencies vs Injaazh Tokenized Architecture
  const comparisonItems = [
    {
      feature: "Component Architecture",
      legacy: "Disorganized static frames with disconnected copy-pasted layers",
      injaazh: "Tokenized Auto Layout 5.0 components with dynamic variable states",
    },
    {
      feature: "Code Translation & Handoff",
      legacy: "Static screenshots resulting in 50% visual drift in frontend code",
      injaazh: "1-to-1 Tailwind CSS & React design token mapping with zero drift",
    },
    {
      feature: "Motion & Micro-Interactions",
      legacy: "Static artboards with vague notes ('make it pop or animate smoothly')",
      injaazh: "Exact Framer Motion & GSAP spring physics parameters (damping, stiffness)",
    },
    {
      feature: "Conversion Engineering",
      legacy: "Design based on subjective artistic taste without behavioral heuristics",
      injaazh: "Data-backed visual hierarchy, cognitive load limits, and conversion heatmaps",
    },
    {
      feature: "Accessibility & Governance",
      legacy: "Low-contrast aesthetics that fail WCAG standards and alienate users",
      injaazh: "Strict WCAG AAA compliance, dark/light contrast auditing, and token governance",
    },
  ];

  const faqs = [
    {
      q: "What is a 'Tokenized Design System' and why is it superior?",
      a: "A tokenized design system defines all visual decisions — colors, typography scales, spacing units, border radii, and elevation shadows — as programmatic variables (tokens). Instead of hardcoding values, your designers in Figma and your engineers in React/Tailwind share the exact same tokens. This eliminates UI drift, speeds up future feature development by 4.5x, and makes brand-wide redesigns instantaneous.",
    },
    {
      q: "How do you guarantee that what is designed in Figma matches the coded website?",
      a: "Because our team consists of cross-functional Design Engineers who write clean React and Tailwind CSS. We don't just hand off static mockups; we provide interactive Figma prototypes with exact Auto Layout structures, responsive break points, and CSS token mappings. What you approve in Figma is precisely what is rendered in the final production code.",
    },
    {
      q: "Can you redesign our existing digital product without disrupting current users?",
      a: "Yes, absolutely. We specialize in non-disruptive, phased design transformations. We start with an extensive cognitive friction audit and user flow telemetry analysis to pinpoint exact drop-off moments. We then prototype modern UI improvements, test them through structured usability sessions, and hand off modular components that your team can deploy incrementally.",
    },
    {
      q: "Do you design for both Desktop and Mobile viewports simultaneously?",
      a: "Yes. Every single component and screen layout is architected with a mobile-first, responsive mentality. We design fluid breakpoints for 320px mobile viewports, tablet screens, standard laptops, and 4K widescreen displays, ensuring flawless typography scaling and touch ergonomics across all devices.",
    },
    {
      q: "What deliverables will our development team receive at handoff?",
      a: "Your team receives full access to a master Figma file containing tokenized component libraries, interactive micro-interaction prototypes, responsive breakpoint guidelines, iconography SVGs, motion curves (easing and spring values), and a structured Design Token documentation manifest ready for Tailwind CSS and React integration.",
    },
  ];

  return (
    <main className="bg-[#FAF9F6] dark:bg-[#060608] min-h-screen relative overflow-hidden transition-colors duration-500">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/10 dark:bg-[#6324FC]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[#00E5FF]/10 dark:bg-[#00E5FF]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.025] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ========================================================
            1. HERO HEADER SECTION
            ======================================================== */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-primary/50 hover:text-[#6324FC] transition-colors"
            >
              Services
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-xs font-heading uppercase tracking-widest text-[#6324FC] font-semibold">
              UI/UX Design Systems & Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6324FC]/25 bg-[#6324FC]/10 text-[#6324FC] text-xs font-heading font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" />
                AWWWARDS-CALIBER DESIGN // V2.5 ARCHITECTURE
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.92] capitalize">
                Cinematic UI/UX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6324FC] via-[#a855f7] to-[#00E5FF] italic">
                  Engineered To Convert.
                </span>
              </h1>

              <p className="font-sans font-light text-base sm:text-xl text-primary/70 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-6">
                Design is not decoration; it is your ultimate competitive moat. At Injaazh, we architect tokenized Figma design systems, fluid 60FPS motion choreography, and cognitive behavioral flows that turn passive visitors into high-LTV brand advocates.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => openModal("UI/UX Design System Proposal")}
                  className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.4)] isolate"
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                    <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                  </div>
                  <div className="relative w-full h-full px-8 py-4 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                    <span className="relative z-10 font-heading text-sm tracking-[0.15em] text-primary uppercase text-center font-medium">
                      REQUEST DESIGN AUDIT
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>

                <a
                  href="#simulator"
                  className="px-6 py-4 rounded-full border border-black/10 dark:border-white/10 hover:border-[#6324FC]/40 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.05] text-xs font-heading uppercase tracking-wider text-primary font-medium flex items-center gap-2 transition-all"
                >
                  <Sliders className="w-4 h-4 text-[#6324FC]" />
                  Interactive Token Simulator
                </a>
              </div>
            </div>

            {/* Quick Guarantees Badge */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 shadow-lg space-y-4">
              <span className="text-[10px] font-heading uppercase tracking-widest text-[#6324FC] font-bold block">
                INJAAZH DESIGN SLA
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary">Zero-Drift Code Synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary">WCAG AAA Accessibility Audited</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary">Complete 100% IP & Figma Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. PROVEN DESIGN METRICS STRIP
            ======================================================== */}
        <section className="py-12 border-b border-black/10 dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <MetricSpotlightCard key={stat.label} stat={stat} idx={i} />
            ))}
          </div>
        </section>

        {/* ========================================================
            3. INTERACTIVE DESIGN SYSTEM & TOKEN SIMULATOR
            ======================================================== */}
        <section id="simulator" className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 text-[#6324FC] border border-[#6324FC]/20 text-xs font-heading font-semibold uppercase tracking-widest">
              <Component className="w-3.5 h-3.5" />
              LIVE DESIGN TOKEN LAB
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Test Our Tokenized <br />
              <span className="text-[#6324FC] italic">Design System Architecture.</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-xl mx-auto">
              Experiment with real-time tokens. Toggle theme variables, curvature tokens, and accent palettes to experience how zero-drift design tokens operate.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-[32px] bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Token Control Column */}
              <div className="lg:col-span-6 space-y-8">
                {/* Mode Selector */}
                <div>
                  <label className="text-xs font-heading uppercase tracking-widest text-primary/60 font-semibold block mb-3">
                    Select Mode Preset:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["dark", "light", "cyber"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setPreviewTheme(mode)}
                        className={`py-2.5 px-3 rounded-xl font-heading text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          previewTheme === mode
                            ? "bg-[#6324FC] text-white font-semibold shadow-[0_0_15px_rgba(99,36,252,0.3)]"
                            : "bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-primary/70 hover:text-primary"
                        }`}
                      >
                        {mode === "dark" ? "Onyx Dark" : mode === "light" ? "Alabaster" : "Cyber Pulse"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent Color Token */}
                <div>
                  <label className="text-xs font-heading uppercase tracking-widest text-primary/60 font-semibold block mb-3">
                    Accent Color Token:
                  </label>
                  <div className="flex items-center gap-3">
                    {[
                      { name: "Purple", hex: "#6324FC" },
                      { name: "Cyan", hex: "#00E5FF" },
                      { name: "Emerald", hex: "#00FFA3" },
                      { name: "Rose", hex: "#FF2D55" },
                      { name: "Amber", hex: "#FACC15" },
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => setAccentColor(col.hex)}
                        className={`w-9 h-9 rounded-full transition-transform cursor-pointer flex items-center justify-center ${
                          accentColor === col.hex ? "scale-125 ring-2 ring-offset-2 ring-primary" : "hover:scale-110"
                        }`}
                        style={{ backgroundColor: col.hex }}
                      >
                        {accentColor === col.hex && <Check className="w-4 h-4 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Border Radius Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-heading uppercase tracking-widest text-primary/60 font-semibold">
                      Border Radius Token:
                    </label>
                    <span className="font-mono text-xs font-bold text-[#6324FC]">
                      --radius: {cornerRounding}px
                    </span>
                  </div>

                  <input
                    type="range"
                    min={4}
                    max={32}
                    step={2}
                    value={cornerRounding}
                    onChange={(e) => setCornerRounding(Number(e.target.value))}
                    className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6324FC]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-primary/40">
                    <span>4px (Sharp)</span>
                    <span>16px (Balanced)</span>
                    <span>32px (Fluid Pill)</span>
                  </div>
                </div>

                {/* Code Manifest Preview */}
                <div className="p-4 rounded-2xl bg-black/[0.04] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1 font-mono text-xs text-primary/80">
                  <div className="text-[10px] text-primary/40 uppercase mb-1">Tailwind Design Token Sync</div>
                  <div>--color-primary: <span style={{ color: accentColor }}>{accentColor}</span>;</div>
                  <div>--radius-component: {cornerRounding}px;</div>
                  <div>--theme-mode: "{previewTheme}";</div>
                </div>
              </div>

              {/* Live Rendered Component Sandbox */}
              <div
                className="lg:col-span-6 p-8 rounded-3xl border transition-all duration-500 space-y-6 shadow-2xl relative overflow-hidden"
                style={{
                  backgroundColor: previewTheme === "dark" ? "#08080c" : previewTheme === "light" ? "#ffffff" : "#050814",
                  borderColor: hexToRgba(accentColor, 0.4),
                  borderRadius: `${cornerRounding * 1.5}px`,
                  color: previewTheme === "light" ? "#0c0c12" : "#ffffff",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 text-[10px] font-heading uppercase tracking-widest font-semibold"
                    style={{
                      borderRadius: `${cornerRounding}px`,
                      backgroundColor: hexToRgba(accentColor, 0.15),
                      color: accentColor,
                      border: `1px solid ${hexToRgba(accentColor, 0.3)}`,
                    }}
                  >
                    Enterprise Component V2.5
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading text-2xl font-bold tracking-tight">
                    High-Conversion Interface Spec
                  </h4>
                  <p className="text-xs opacity-70 leading-relaxed font-sans">
                    Zero visual drift. This interactive card represents your living design tokens rendered with responsive CSS geometry.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3 border-y border-black/10 dark:border-white/10">
                  <div className="space-y-0.5">
                    <span className="text-[10px] opacity-50 uppercase font-mono block">Speed Index</span>
                    <span className="font-heading text-lg font-bold" style={{ color: accentColor }}>&lt; 0.6s LCP</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] opacity-50 uppercase font-mono block">Figma Sync</span>
                    <span className="font-heading text-lg font-bold text-green-400">100% Tokenized</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => openModal(`Design System Token Build (${accentColor})`)}
                    className="flex-1 py-3 px-4 font-heading text-xs uppercase tracking-widest font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    style={{
                      borderRadius: `${cornerRounding}px`,
                      backgroundColor: accentColor,
                      boxShadow: `0 0 20px ${hexToRgba(accentColor, 0.4)}`,
                    }}
                  >
                    <span>Deploy This System</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    className="py-3 px-4 border text-xs font-heading uppercase tracking-wider font-semibold opacity-80 hover:opacity-100 transition-opacity"
                    style={{
                      borderRadius: `${cornerRounding}px`,
                      borderColor: hexToRgba(accentColor, 0.3),
                    }}
                  >
                    Inspect Figma Spec
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            4. DEDICATED 3 SUB-ARCHITECTURES (DEEP ROUTES)
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
                SPECIALIZED DESIGN MODULES
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
                Our 3 Core UI/UX <br />
                <span className="text-[#6324FC] italic">Sub-Architectures.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-md">
              Each specialized discipline operates with dedicated Figma token systems, responsive wireframes, and production-ready code handoffs. Explore our individual sub-architectures:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subArchitectures.map((sub, idx) => (
              <div
                key={sub.slug}
                className="group relative rounded-3xl p-8 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(99,36,252,0.18)] flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-heading uppercase tracking-widest font-semibold bg-[#6324FC]/10 text-[#6324FC] border border-[#6324FC]/20">
                      {sub.badge}
                    </span>
                    <span className="font-mono text-xs text-[#6324FC] font-bold">
                      {sub.metrics}
                    </span>
                  </div>

                  <div>
                    <Link href={sub.href} className="group-hover:text-[#6324FC] transition-colors">
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-primary flex items-center justify-between">
                        <span>{sub.title}</span>
                        <ChevronRight className="w-5 h-5 text-primary/30 group-hover:text-[#6324FC] group-hover:translate-x-1 transition-transform" />
                      </h3>
                    </Link>
                    <p className="text-xs text-[#6324FC] font-heading font-medium tracking-wide mt-1">
                      {sub.tagline}
                    </p>
                    <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed mt-3">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 dark:border-white/5 space-y-2">
                    <span className="text-[10px] font-heading uppercase tracking-wider text-primary/50 block font-semibold">
                      Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sub.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-[11px] font-mono text-primary/70"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-black/5 dark:border-white/5">
                  <Link
                    href={sub.href}
                    className="w-full py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-[#6324FC] hover:text-white border border-black/10 dark:border-white/10 hover:border-[#6324FC] font-heading text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Inspect Deep Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#6324FC] transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. THE 4-STAGE HUMAN-CENTERED DESIGN PROTOCOL
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              ENGINEERING METHODOLOGY
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              The 4-Stage Human-Centered <br />
              <span className="text-[#6324FC] italic">Design Protocol.</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70">
              We eliminate ambiguity through milestone-gated Figma wireframes, iterative usability testing, and zero-drift token synchronization.
            </p>
          </div>

          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {designStages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeStage === idx
                    ? "bg-[#6324FC] text-white border-[#6324FC] shadow-[0_0_20px_rgba(99,36,252,0.3)]"
                    : "bg-white dark:bg-[#0c0c12] border-black/10 dark:border-white/10 text-primary hover:border-[#6324FC]/40"
                }`}
              >
                <div className={`font-heading text-xs font-mono mb-1 ${activeStage === idx ? "text-white/80" : "text-[#6324FC]"}`}>
                  STAGE {stage.id}
                </div>
                <div className="font-heading text-sm font-bold tracking-tight line-clamp-1">
                  {stage.name.split(" &")[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Stage Active Content Display */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-heading font-semibold uppercase tracking-widest text-[#6324FC]">
                      {designStages[activeStage].name}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                      {designStages[activeStage].focus}
                    </h3>
                    <p className="font-sans font-light text-sm sm:text-base text-primary/70 leading-relaxed pt-2">
                      {designStages[activeStage].desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4">
                    <span className="text-xs font-heading uppercase tracking-wider text-primary/50 block font-semibold">
                      Milestone Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {designStages[activeStage].deliverables.map((deliv, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-xs text-primary font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#6324FC] shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-4">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#6324FC] block">
                    BUSINESS OUTCOMES & GUARANTEES
                  </span>
                  <div className="space-y-2.5">
                    {designStages[activeStage].outcomes.map((outcome, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#0a0a0f] border border-black/5 dark:border-white/5 text-xs font-heading font-semibold text-primary"
                      >
                        <span>{outcome}</span>
                        <span className="text-green-500 font-mono">Verified SLA</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(`Stage ${activeStage + 1} UI/UX Sprint`)}
                    className="w-full mt-4 py-3 rounded-xl bg-[#6324FC] text-white font-heading text-xs uppercase tracking-wider font-semibold hover:bg-[#521cd6] transition-colors cursor-pointer"
                  >
                    Kickoff This Design Stage
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================
            6. DESIGN & MOTION TOOLING ECOSYSTEM
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
                TOOLING & RUNTIME ECOSYSTEM
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
                Tools & Runtimes We <br />
                <span className="text-[#6324FC] italic">Architect Within.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-md">
              We design in Figma, Choreograph in Framer Motion, and deliver mathematically tokenized code for production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => (
              <ToolSpotlightCard key={tool.title} tool={tool} idx={idx} />
            ))}
          </div>
        </section>

        {/* ========================================================
            7. CONVENTIONAL DESIGNERS VS INJAAZH TOKENIZED ARCHITECTURE
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 text-[#6324FC] border border-[#6324FC]/20 text-xs font-heading font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              THE PARADIGM SHIFT
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Why Traditional UI Agencies <br />
              <span className="text-[#6324FC] italic">Cause UI Drift.</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-xl mx-auto">
              The difference between static decoration and scalable digital product authority lies in tokenized engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Typical Agency Flaws */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-red-500/[0.02] dark:bg-red-500/[0.03] border border-red-500/20 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-red-500/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading text-xs uppercase tracking-widest text-red-500 font-bold block">
                        LEGACY UI/UX AGENCIES
                      </span>
                      <span className="text-[11px] text-primary/50 font-sans">Fragmented artboards & high UI drift</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-heading uppercase tracking-wider font-semibold bg-red-500/10 text-red-500 border border-red-500/20">
                    DECORATIVE ONLY
                  </span>
                </div>

                <div className="space-y-3.5 pt-2">
                  {comparisonItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-red-500/10 flex items-start gap-3.5"
                    >
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-heading text-xs font-bold uppercase tracking-wider text-red-400">
                          {item.feature}
                        </div>
                        <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed">
                          {item.legacy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-red-500/10 text-center">
                <span className="text-xs font-heading uppercase tracking-wider text-red-500/80 font-semibold">
                  Result: 50%+ Frontend Code Drift & Expensive Re-builds
                </span>
              </div>
            </div>

            {/* Card 2: Injaazh Tokenized Architecture (Featured Hero) */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-white dark:bg-[#0c0c12] border-2 border-[#6324FC] shadow-[0_25px_70px_rgba(99,36,252,0.22)] dark:shadow-[0_30px_90px_rgba(99,36,252,0.35)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#6324FC]/20 to-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#6324FC]/15 border border-[#6324FC]/30 flex items-center justify-center text-[#6324FC]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading text-xs uppercase tracking-widest text-[#6324FC] font-bold block">
                        INJAAZH TOKENIZED ARCHITECTURE
                      </span>
                      <span className="text-[11px] text-primary/50 font-sans">Zero-drift design-to-code synchronization</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-heading uppercase tracking-wider font-bold bg-[#6324FC] text-white shadow-[0_0_15px_rgba(99,36,252,0.5)]">
                    ENTERPRISE STANDARD
                  </span>
                </div>

                <div className="space-y-3.5 pt-2">
                  {comparisonItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#6324FC]/[0.04] dark:bg-[#6324FC]/[0.08] border border-[#6324FC]/30 hover:border-[#6324FC]/70 transition-colors flex items-start gap-3.5 group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-heading text-xs font-bold uppercase tracking-wider text-[#6324FC] group-hover:text-primary transition-colors">
                          {item.feature}
                        </div>
                        <p className="font-sans font-medium text-xs sm:text-sm text-primary leading-relaxed">
                          {item.injaazh}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-black/10 dark:border-white/10">
                <button
                  onClick={() => openModal("Tokenized UI/UX Migration")}
                  className="w-full py-4 rounded-2xl bg-[#6324FC] hover:bg-[#521cd6] text-white font-heading text-xs uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(99,36,252,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Deploy Tokenized Design System</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            8. FREQUENTLY ASKED QUESTIONS
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              TRANSPARENCY FIRST
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Frequently Asked <br />
              <span className="text-[#6324FC] italic">Questions.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-primary">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6324FC] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-primary/70 leading-relaxed font-sans border-t border-black/5 dark:border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            9. BOTTOM HERO CTA: DESIGN AUDIT
            ======================================================== */}
        <section className="text-center py-24 px-6 rounded-[36px] bg-gradient-to-br from-[#6324FC]/10 via-transparent to-[#00E5FF]/10 border border-[#6324FC]/25 my-16 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              ELEVATE YOUR DIGITAL PRESENCE
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl capitalize tracking-tight leading-tight">
              Ready To Architect <br />
              <span className="text-[#6324FC] italic">A World-Class Interface?</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-lg mx-auto">
              Schedule a design architecture consultation with our principal design engineers or request an interactive Figma token audit.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => openModal("UI/UX Design Consultation")}
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,36,252,0.4)] isolate w-full sm:w-auto"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                  <span className="relative z-10 font-heading text-sm tracking-[0.15em] text-primary uppercase text-center font-medium">
                    START YOUR DESIGN AUDIT
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>

              <Link
                href="/contact"
                className="px-8 py-5 rounded-full border border-black/10 dark:border-white/10 hover:border-[#6324FC]/40 bg-white/40 dark:bg-white/[0.03] text-xs font-heading uppercase tracking-wider text-primary font-medium transition-all"
              >
                Contact Design Directors
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
