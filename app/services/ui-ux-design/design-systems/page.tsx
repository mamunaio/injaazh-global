"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Box,
  Layers,
  Layout,
  Globe,
  MousePointer2,
  Type,
  Check,
  X,
  Shield,
  Code,
  BookOpen,
  Eye,
  FileText,
  Activity,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function DesignSystemsPage() {
  const { openModal } = useProjectModal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Atomic Frameworks",
      description:
        "Building scalable systems from the smallest atom to the most complex organism — for absolute consistency across every interface state, breakpoint, and product line.",
      icon: Box,
      color: "#6324FC",
    },
    {
      title: "Design Tokens",
      description:
        "Defining shared styles as platform-agnostic tokens — colors, spacing, type — that sync instantly across design and development. Change one token, update everything.",
      icon: Layers,
      color: "#00E5FF",
    },
    {
      title: "Component Libraries",
      description:
        "Curating a library of high-performance, reusable UI components that slash development time by 50%+. Built in Figma, mirrored in React/Next.js — pixel-perfect in both.",
      icon: Layout,
      color: "#FF2D55",
    },
    {
      title: "Living Documentation",
      description:
        "Comprehensive usage guidelines and accessibility standards that evolve with your product ecosystem — so new team members ship on-brand from day one.",
      icon: Globe,
      color: "#00FFA3",
    },
  ];

  const checklistItems = [
    "Your buttons look different across three different pages",
    "Every new feature takes longer to design than the last",
    "Designers and developers are using different color values for the same brand color",
    "New team members can't ship without breaking the visual language",
    "Your product has grown but your design files haven't kept up",
    "You're preparing for a major product expansion or rebrand",
  ];

  const deliverables = [
    {
      title: "Token Architecture",
      desc: "A complete set of design tokens covering color, spacing, typography, border radius, shadow, and motion — exported as JSON and ready for integration with Tailwind, CSS variables, or your existing stack.",
      icon: Layers,
      color: "#6324FC",
    },
    {
      title: "Figma Component Library",
      desc: "A master Figma file with auto-layout components, variant sets, and interactive states — organized, named, and annotated for immediate designer handoff.",
      icon: Layout,
      color: "#00E5FF",
    },
    {
      title: "React / Next.js Component Library",
      desc: "Every component mirrored in production-ready React — typed with TypeScript, styled with Tailwind or CSS Modules, and exported as a private NPM package or monorepo module.",
      icon: Code,
      color: "#FF2D55",
    },
    {
      title: "Accessibility Standards",
      desc: "WCAG 2.1 AA compliance built into every component from the start — contrast ratios, focus states, ARIA labels, and keyboard navigation documented and enforced.",
      icon: Activity,
      color: "#00FFA3",
    },
    {
      title: "Living Style Guide",
      desc: "A hosted or Figma-embedded documentation site where every component is searchable, with usage examples, do/don't guidelines, and version history.",
      icon: BookOpen,
      color: "#FACC15",
    },
    {
      title: "Handoff Documentation",
      desc: "Component specs, token maps, and integration guides written for your engineering team — so they can implement and maintain the system without design dependency.",
      icon: FileText,
      color: "#9333EA",
    },
  ];

  const noSystemCost = [
    "Inconsistent UI that erodes user trust over time",
    "Every new feature rebuilt from scratch",
    "Design and dev constantly out of sync",
    "Onboarding new team members takes weeks",
    "Rebrand or redesign = rebuild everything",
    "Accessibility bolted on at the end — or ignored",
  ];

  const withSystemValue = [
    "Pixel-perfect consistency across every screen",
    "New features assembled from existing components",
    "Figma tokens sync directly to production code",
    "New hires ship on-brand from week one",
    "Rebrand = update tokens, propagate everywhere",
    "WCAG 2.1 AA compliance built in from atom level",
  ];

  const faqs = [
    {
      q: "How long does it take to build a design system?",
      a: "A focused system — tokens, core components, and documentation — typically takes 4–6 weeks. A full enterprise system with React component library, accessibility standards, and living documentation runs 8–12 weeks. Scope is defined and locked before we start.",
    },
    {
      q: "Do you build for Figma, code, or both?",
      a: "Both — always. A design system only works when Figma and code are in sync. We deliver a Figma component library and a React/Next.js component library as paired outputs, with shared token architecture connecting them.",
    },
    {
      q: "Can you build a design system on top of our existing codebase?",
      a: "Yes. We start with a UI audit of your existing product — cataloguing what components exist, identifying inconsistencies, and deciding what to standardize versus rebuild. We don't throw away what works.",
    },
    {
      q: "What if our team doesn't use React?",
      a: "We primarily build for React and Next.js, but we can adapt token architecture and component specs for Vue, Angular, or vanilla CSS implementations. We'll be upfront about what's possible based on your stack.",
    },
    {
      q: "How do we maintain the system after you hand it off?",
      a: "We provide full documentation and can train your team on system governance. We also offer a retainer model for ongoing system maintenance — adding components, updating tokens, and evolving documentation as your product grows.",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 01. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">
                SYSTEMS DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              DESIGN <br />
              <span className="stroke-text text-transparent italic opacity-40">
                SYSTEMS.
              </span>
            </h1>

            <p className="font-sans font-light text-lg  text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We engineer scalable visual languages. Our design systems bridge
              the gap between design and development — ensuring speed,
              consistency, and absolute brand integrity across every screen,
              every team, and every release.
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
                  Build Your System
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
              src="/assets/nexus_esports_final.webp"
              alt="Design System Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>

        {/* 02. Consistency At Scale */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              CONSISTENCY <br />
              <span className="italic text-[#6324FC]">AT SCALE.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Stop reinventing the wheel. Invest in a system that allows your
              team to build faster and maintain a unified brand voice — from the
              first component to the thousandth screen.
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

        {/* 03. Atomic Methodology */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                ATOMIC <br />
                <span className="italic text-[#6324FC]">METHODOLOGY.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We follow Brad Frost&apos;s atomic design principles to build
                modular components that are durable, testable, and reusable —
                structured so your product can grow without visual chaos.
              </p>

              <div className="space-y-6">
                {[
                  {
                    label: "Atoms",
                    desc: "Colors, Icons, Typography, Input Fields. The irreducible building blocks. Every visual decision starts here.",
                  },
                  {
                    label: "Molecules",
                    desc: "Search Bars, Card Headers, List Items. Purposeful combinations of atoms that form distinct UI functions.",
                  },
                  {
                    label: "Organisms",
                    desc: "Navbars, Footers, Data Grids, Forms. Complete sections of an interface — assembled from molecules, ready to deploy.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC] mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <div className="font-heading text-xl text-white capitalize ">
                        {item.label}
                      </div>
                      <p className="font-sans text-white/45 text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6324FC]/10 to-transparent blur-3xl" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-12">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 h-48 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative shadow-2xl"
                >
                  <Layout className="w-12 h-12 text-[#6324FC]" />
                  {/* Floating sub-elements */}
                  <motion.div
                    animate={{ x: [-20, 0, -20] }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center"
                  >
                    <MousePointer2 className="w-5 h-5 text-[#00E5FF]" />
                  </motion.div>
                  <motion.div
                    animate={{ x: [20, 0, 20] }}
                    className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center"
                  >
                    <Type className="w-5 h-5 text-[#FF2D55]" />
                  </motion.div>
                </motion.div>

                <div className="text-center space-y-2">
                  <div className="font-heading  text-[10px] tracking-[0.5em] text-[#6324FC] capitalize ">
                    System Assembly
                  </div>
                  <div className="font-heading text-2xl text-white">
                    COMPONENT-DRIVEN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04. System Deployment */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            SYSTEM <span className="italic text-[#6324FC]">DEPLOYMENT.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Audit & Align",
                desc: "Analyzing your current UI debt and aligning on a unified visual direction for the entire organization. We document what exists, identify what conflicts, and define what needs to be built.",
              },
              {
                step: "02",
                title: "System Build",
                desc: "Creating the component library and design tokens in Figma — then synchronizing them directly with React/Next.js code. Every component tested, documented, and developer-ready.",
              },
              {
                step: "03",
                title: "Documentation",
                desc: "Deploying a living style guide that serves as the single source of truth for design, engineering, and product. Versioned, searchable, and maintained as your product evolves.",
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

        {/* SECTION A — Who Needs a Design System? */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">
              SYSTEM CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Is Your Product <br />
                <span className="italic text-[#6324FC]">Inconsistent?</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                If your team is rebuilding the same components across different
                screens, your product has UI debt. Here&apos;s how to know
                it&apos;s time for a system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-500 group flex gap-4"
                >
                  <Sparkles className="w-5 h-5 text-[#6324FC] shrink-0 mt-0.5" />
                  <p className="font-sans font-light text-white/60 group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
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
                  My Team Needs This
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION B — What You Receive */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">
              FULL SYSTEM DELIVERABLES
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              One Source. <br />
              <span className="italic text-[#6324FC]">Every Screen.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Not a Figma file with 200 unorganized frames. A structured,
              developer-synchronized design system your entire product
              organization can operate from — indefinitely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-xl relative flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-24 h-24 text-white" />
                </div>
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <item.icon
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 capitalize ">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION C — Design System vs No System */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
              The Cost of <br />
              <span className="italic text-[#6324FC]">No System.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 leading-relaxed">
              Teams without a design system don&apos;t move faster — they move
              in circles. Here&apos;s what that looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Column 1 - No System */}
            <div className="p-10 md:p-12 rounded-[2.5rem] bg-white/[0.01] border border-red-500/10 hover:border-red-500/20 transition-all duration-500">
              <h3 className="font-heading text-3xl text-red-500 mb-8 tracking-tight capitalize">
                No Design System
              </h3>
              <div className="space-y-6">
                {noSystemCost.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <p className="font-sans font-light text-white/50 leading-relaxed text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Injaazh System */}
            <div className="p-10 md:p-12 rounded-[2.5rem] bg-white/[0.01] border border-[#6324FC]/10 hover:border-[#6324FC]/30 transition-all duration-500">
              <h3 className="font-heading text-3xl text-[#00E5FF] mb-8 tracking-tight capitalize">
                Injaazh Design System
              </h3>
              <div className="space-y-6">
                {withSystemValue.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-1" />
                    <p className="font-sans font-light text-white/70 leading-relaxed text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Line Alert Banner */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 border border-[#6324FC]/20 text-center max-w-4xl mx-auto">
            <p className="font-sans font-light text-lg  text-white/80 leading-relaxed italic">
              &quot;UI debt compounds. Every sprint without a system makes the
              next sprint slower. A design system is infrastructure — and
              infrastructure pays for itself.&quot;
            </p>
          </div>
        </div>

        {/* SECTION D — Design System FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Design System <span className="italic text-[#6324FC]">FAQ.</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => {
              const isOpen = activeIndex === i;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
                  onClick={() => toggleFaq(i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-xl text-white">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-white/50" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 16 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 05. Final CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            ELIMINATE <span className="italic text-[#6324FC]">DEBT.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to build a scalable future? Let&apos;s architect a design
            system that empowers your team to ship faster, maintain consistency,
            and never rebuild the same component twice.
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
                INITIATE SYSTEM AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
