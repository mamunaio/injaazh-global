"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Shield,
  Globe,
  Settings,
  Terminal,
  Layers,
  Box,
  Monitor,
  Activity,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CustomWebAppsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "BESPOKE SAAS ENGINES",
      description:
        "We engineer scalable, multi-tenant software platforms designed for global market penetration — with role-based access, subscription billing, and the infrastructure to onboard thousands of users without breaking a sweat.",
      icon: Box,
      color: "#6324FC",
    },
    {
      title: "ENTERPRISE SOLUTIONS",
      description:
        "Custom internal tools, CRM systems, and ERP integrations that replace fragmented workflows with a single, unified platform — built exactly to your operational requirements, not a generic template.",
      icon: Terminal,
      color: "#00E5FF",
    },
    {
      title: "REAL-TIME SYSTEMS",
      description:
        "High-performance applications with WebSocket integration for instant data synchronization — live dashboards, collaborative tools, and notification systems that respond in milliseconds.",
      icon: Activity,
      color: "#FF2D55",
    },
    {
      title: "CLOUD-NATIVE OPS",
      description:
        "Serverless and microservices-based architectures that scale horizontally with zero downtime — auto-scaling under traffic spikes, isolated deployments, and infrastructure that never becomes a bottleneck.",
      icon: Globe,
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
              <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">
                SOFTWARE DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              CUSTOM <br />
              <span className="stroke-text text-transparent italic opacity-40">
                WEB APPS.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We build complex digital products that solve real problems. From
              high-scale SaaS platforms to enterprise management systems — every
              line of code is engineered for performance, security, and
              longevity.
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
                  START YOUR PRODUCT
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
              alt="Scalia Domain dashboard visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              COMPLEXITY{" "}
              <span className="italic text-[#6324FC]">SIMPLIFIED.</span>
            </h2>
            <p className="font-heading text-[16px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              We handle the heavy engineering — database architecture,
              authentication systems, real-time data — so you can stay focused
              on your business logic and market growth.
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

        {/* 3. Tech Specs Grid */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#00E5FF] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black p-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1h1v1H1z\' fill=\'%236324FC\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] opacity-30" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <Terminal className="w-8 h-8 text-[#6324FC]" />
                  <div className="font-heading text-[10px] text-white/20 uppercase tracking-widest">
                    DEV ENVIRONMENT V9.0
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-heading text-4xl text-white capitalize tracking-tighter">
                    FULL-STACK CONTROL.
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-heading text-[9px] text-white/40 uppercase">
                      🟢 SYSTEM STATUS: OPERATIONAL
                    </span>
                  </div>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-8">
                  {[
                    "NEXT.JS",
                    "NODE.JS",
                    "POSTGRESQL",
                    "REDIS",
                    "AWS",
                    "DOCKER",
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between font-heading text-[10px] text-white/30 uppercase"
                    >
                      <span>{tech}</span>
                      <span className="text-[#6324FC]">OPTIMIZED</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                FULL-STACK <br />
                <span className="italic text-[#00E5FF]">MASTERY.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We don&apos;t use templates. We architect custom solutions using
                the most reliable and scalable technologies in the modern web
                ecosystem — chosen for your specific product requirements, not
                convenience.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "SECURITY",
                    val: "ENTERPRISE GRADE",
                    desc: "Advanced encryption, secure authentication protocols, and penetration-tested codebases — your data and your users' data stay protected.",
                  },
                  {
                    label: "PERFORMANCE",
                    val: "ULTRA RESPONSIVE",
                    desc: "Every interaction optimized for sub-second response times. No sluggish UIs, no loading spinners where they don't belong.",
                  },
                  {
                    label: "SCALE",
                    val: "AUTO-SCALING",
                    desc: "Infrastructure that grows with your user base automatically — from 100 users to 100,000 without an architecture rebuild.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="font-heading text-2xl text-white uppercase">
                          {item.label}
                        </span>
                        <span className="font-heading text-[9px] text-[#00E5FF] tracking-widest uppercase">
                          {item.val}
                        </span>
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
            THE PRODUCT{" "}
            <span className="italic text-[#6324FC]">LIFECYCLE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "PROTOTYPING",
                desc: "Rapid wireframing and interactive prototyping to validate your product logic, user flows, and core assumptions — before a single line of production code is written. Catch expensive mistakes early.",
              },
              {
                step: "02",
                title: "ARCHITECTURE",
                desc: "We design a robust database schema and system architecture capable of handling millions of data points, concurrent users, and complex business logic — built to last, not just to launch.",
              },
              {
                step: "03",
                title: "SCALE-UP",
                desc: "Continuous integration and deployment pipelines with real-time monitoring, automated testing, and performance tracking — so your application evolves with your users and never falls behind demand.",
              },
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white uppercase">
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

        {/* [NEW] SECTION A — IS THIS FOR YOU? */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                IS THIS <span className="italic text-[#6324FC]">FOR YOU?</span>
              </h2>
              <p className="font-sans font-light text-lg text-white/40 leading-relaxed mb-12">
                We work best with founders, CTOs, and product teams who have
                outgrown off-the-shelf solutions. If any of these sound
                familiar, we should talk.
              </p>
              <Link
                href="/contact"
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <span className="relative z-10 font-heading text-lg tracking-widest text-white transition-colors duration-500 uppercase">
                    THIS IS ME — LET&apos;S TALK
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "You have a SaaS idea that needs to be built from the ground up",
                "Your current software can't handle your growth or user load",
                "You need a client portal, internal tool, or dashboard no template can replicate",
                "You're rebuilding a legacy system that's slowing your team down",
                "You need API integrations between systems that don't talk to each other",
                "You have a complex workflow that needs to be fully automated",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#6324FC] shrink-0 mt-0.5" />
                  <p className="font-sans font-light text-white/60 text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* [NEW] SECTION B — FEATURED BUILD: SCALIA DOMAIN */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <div>
              <span className="font-heading text-[#6324FC] text-xs uppercase tracking-widest block mb-4">
                FEATURED BUILD
              </span>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-4">
                SCALIA <span className="italic text-[#6324FC]">DOMAIN.</span>
              </h2>
              <div className="inline-block px-4 py-1.5 bg-white/[0.03] border border-white/5 rounded-full font-heading text-[10px] tracking-wider text-[#00E5FF] mb-8 uppercase">
                WEB APP · SAAS · GLOBAL
              </div>
              <div className="space-y-8 mb-12">
                <div>
                  <span className="font-heading text-red-500/80 text-xs uppercase tracking-widest block mb-2">
                    The Challenge
                  </span>
                  <p className="font-sans text-white/50 text-base">
                    A domain registrar needed a fully custom SaaS platform —
                    with multi-user dashboards, automated renewal alerts,
                    Telegram bot integration, and a credits-based billing
                    system. No existing platform could handle the combination.
                  </p>
                </div>
                <div>
                  <span className="font-heading text-[#00E5FF] text-xs uppercase tracking-widest block mb-2">
                    Our Solution
                  </span>
                  <p className="font-sans text-white/50 text-base">
                    We engineered a full-stack web application with a custom
                    Next.js frontend, Node.js backend, PostgreSQL database, and
                    real-time Telegram notifications — deployed on AWS with
                    automated CI/CD pipelines.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {[
                    "Sub-second dashboard load times",
                    "Enterprise-grade authentication system",
                    "Fully automated renewal notification via Telegram",
                    "Real-time domain management for global users",
                  ].map((result, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                      <span className="font-sans text-sm text-white/70">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/work"
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <span className="relative z-10 font-heading text-lg tracking-widest text-white transition-colors duration-500 uppercase">
                    EXPLORE THE BUILD
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </Link>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
              <Image
                src="/assets/scalia_app_final.webp"
                alt="Scalia Domain Case Study"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* [NEW] SECTION C — WHY NOT JUST USE NO-CODE / OFF-THE-SHELF? */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-4">
              WHY NOT <span className="italic text-[#6324FC]">NO-CODE?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* No-Code column */}
            <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 space-y-6">
              <h3 className="font-heading text-2xl text-white/50 uppercase tracking-wider mb-8">
                No-Code / Off-the-Shelf
              </h3>
              {[
                "Hit a ceiling at scale — always",
                "Vendor lock-in with no exit",
                "Can't handle complex business logic",
                "Performance degrades with users",
                "You own nothing — they do",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="font-sans text-white/40 text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Injaazh column */}
            <div className="p-10 rounded-[2.5rem] bg-[#6324FC]/5 border border-[#6324FC]/20 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#6324FC]/10 blur-[80px] rounded-full pointer-events-none" />
              <h3 className="font-heading text-2xl text-[#6324FC] uppercase tracking-wider mb-8">
                Injaazh Custom Build
              </h3>
              {[
                "Scales to millions of users",
                "You own 100% of the codebase",
                "Built around your exact logic",
                "Performance improves with optimization",
                "No monthly platform fees eating margin",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span className="text-green-400 text-lg">✅</span>
                  <span className="font-sans text-white text-base font-light">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="font-sans font-light text-lg text-white/60 max-w-2xl mx-auto italic">
              Bottom Line: No-code is for prototypes. If your product is your
              business, it needs to be engineered.
            </p>
          </div>
        </div>

        {/* [NEW] SECTION D — FAQ (Custom Web App Specific) */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              PRODUCT <span className="italic text-[#6324FC]">FAQ.</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How long does it take to build a custom web application?",
                a: "A standard web app with core features typically takes 8–14 weeks from brief to launch. Complex SaaS platforms with multi-tenancy, billing systems, and advanced integrations run 14–24 weeks. Every project begins with a detailed technical blueprint so timelines are locked in before development starts.",
              },
              {
                q: "Who owns the code after the project is complete?",
                a: "You do — 100%. Every line of code we write for your project is transferred to you at launch. No licensing fees, no vendor lock-in, no ongoing dependency on Injaazh to run your product.",
              },
              {
                q: "Can you build on top of an existing codebase?",
                a: "Yes. We regularly inherit legacy codebases for refactoring, feature additions, and architecture upgrades. We conduct a full technical audit before starting to understand what exists, what needs to be replaced, and what can be optimized.",
              },
              {
                q: "Do you handle hosting and infrastructure?",
                a: "Yes. We set up and configure AWS, Vercel, or your preferred cloud provider — including CI/CD pipelines, environment management, database hosting, and automated backups. We can also hand off infrastructure management to your team with full documentation.",
              },
              {
                q: "What happens after launch?",
                a: "Every project includes a post-launch support window for bug fixes and performance monitoring. We also offer ongoing retainer packages for feature development, security updates, and scaling support — so your product keeps evolving after go-live.",
              },
            ].map((faq, i) => {
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

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            BUILD THE <span className="italic text-[#6324FC]">IMPOSSIBLE.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Have a complex requirement that other agencies said was too
            difficult or too expensive? Our engineering team has heard that
            before. Send us your brief and we&apos;ll tell you exactly how
            we&apos;d build it.
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
                INITIATE PRODUCT DESIGN
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
