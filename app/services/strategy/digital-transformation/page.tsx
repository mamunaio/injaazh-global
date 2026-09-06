"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  RefreshCw,
  Globe,
  Brain,
  Database,
  Cpu,
  Layers,
  Check,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function DigitalTransformationPage() {
  const { openModal } = useProjectModal();

  const features = [
    {
      title: "Legacy Modernization",
      description:
        "Deconstructing outdated systems, monolithic codebases, and inefficient workflows — then rebuilding them with modern, scalable, and secure architectures that don't become a liability in 18 months.",
      icon: RefreshCw,
      color: "#6324FC",
    },
    {
      title: "Cloud-Native Strategy",
      description:
        "Moving your entire operation to the cloud with serverless and microservices-based ecosystems — for 99.9% uptime, auto-scaling infrastructure, and operational costs that decrease as you grow.",
      icon: Globe,
      color: "#00E5FF",
    },
    {
      title: "AI Integration",
      description:
        "Implementing custom AI models and automation tools that radically improve decision-making, operational efficiency, and customer experience — without the hype, without the complexity.",
      icon: Brain,
      color: "#FF2D55",
    },
    {
      title: "Data Intelligence",
      description:
        "Transforming raw data into actionable business intelligence through advanced analytics, custom dashboards, and visualization frameworks — so every decision is backed by what's actually happening in your business.",
      icon: Database,
      color: "#00FFA3",
    },
  ];

  const legacyCosts = [
    {
      title: "Developer productivity loss",
      description: "Engineers working on legacy systems spend 60–70% of their time maintaining old code instead of building new features. That's your innovation budget — gone.",
      color: "#FF2D55",
    },
    {
      title: "Security exposure",
      description: "Outdated systems are the #1 target for cyberattacks. The average cost of a data breach in 2024 was $4.88M. Legacy infrastructure is not a risk — it's a liability.",
      color: "#6324FC",
    },
    {
      title: "Scaling ceiling",
      description: "Every business hits a point where legacy infrastructure physically can't support growth. Traffic spikes cause downtime. New features take months. Your growth becomes your enemy.",
      color: "#00E5FF",
    },
    {
      title: "Talent drain",
      description: "Top engineers don't want to work on 10-year-old codebases. Legacy systems drive away the talent you need to build the future — and attract the talent that just maintains the past.",
      color: "#00FFA3",
    },
  ];

  const triggers = [
    "Your tech stack is 5+ years old and every new feature takes twice as long as it should",
    "Your infrastructure has caused downtime or performance issues in the last 12 months",
    "Your systems weren't built for the user numbers you're now scaling and hitting",
    "Your team spends more time maintaining old systems than building new capabilities",
    "You're preparing for enterprise clients who will audit your security and infrastructure",
    "You know modernization is inevitable — but you don't know where to start without breaking what works",
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden font-sans text-white pb-20 pt-32">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pb-16 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading text-[#6324FC] text-sm tracking-[0.5em] uppercase">
                STRATEGY DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Digital <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Evolution.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We future-proof your business. Our transformation strategies move you from legacy constraints to a world of infinite digital possibility — with the technical execution to back every recommendation we make.
            </p>

            <button
              onClick={() => openModal()}
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate animate-none"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white uppercase transition-colors duration-500">
                  Initiate Transformation
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group"
          >
            <Image
              src="/assets/scalia_app_final.webp"
              alt="Digital Transformation Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#0A0A0C]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity" />

            {/* Animated Evolution Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/20 text-xs">
                    Legacy
                  </div>
                  <ArrowRight className="w-8 h-8 text-[#6324FC] mt-4" />
                  <div className="w-16 h-16 bg-[#6324FC] border border-[#6324FC]/30 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,36,252,0.5)] text-xs">
                    Future
                  </div>
                </div>

                <div className="text-center">
                  <Cpu className="w-12 h-12 text-[#6324FC] mx-auto mb-4" />
                  <div className="font-heading text-[9px] tracking-[0.5em] text-white/40 uppercase">
                    Ecosystem Migration v9.4
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Reinventing <br />
              <span className="italic text-[#6324FC]">Efficiency.</span>
            </h2>
            <p className="font-sans font-light text-lg text-white/40 max-w-sm leading-relaxed">
              Transformation is not a destination. It is a continuous process of evolution and adaptation to the digital landscape — and it starts with an honest audit of where you are today.
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
                <h3 className="font-heading text-2xl text-white mb-4 capitalize">
                  {f.title}
                </h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* [NEW] SECTION A — THE HIDDEN COST OF LEGACY SYSTEMS */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-5 h-5 text-[#FF2D55]" />
                  <span className="font-heading text-xs tracking-widest text-[#FF2D55] uppercase">
                    SYSTEM LIABILITIES
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                  What Your Legacy <br />
                  <span className="italic text-[#FF2D55]">System Costs Daily.</span>
                </h2>
              </div>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#FF2D55]/40 pl-8 lg:mt-8">
                Legacy systems don't just slow you down — they actively cost you revenue, talent, and competitive position. Every day you delay modernization is a day these costs compound.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {legacyCosts.map((card, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-500 relative"
                >
                  <div className="font-heading text-sm text-[#FF2D55] mb-4">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-3 capitalize">
                    {card.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => openModal()}
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(255,45,85,0.2)] hover:scale-105 inline-block isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#FF2D55,#6324FC,#FF2D55)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                  <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-lg tracking-widest text-white uppercase text-center">
                    Calculate Your Legacy Cost
                    <ArrowRight className="w-5 h-5 text-[#FF2D55] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                    Start Transformation Study
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* [NEW] SECTION B — TRANSFORMATION IN ACTION: SCALIA DOMAIN */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-[1400px]">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-5 h-5 text-[#6324FC]" />
                <span className="font-heading text-xs tracking-widest text-[#6324FC] uppercase">
                  TRANSFORMATION IN ACTION
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white mb-4">
                From Legacy <br />
                <span className="italic text-[#6324FC]">To Future.</span>
              </h2>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50 mb-6 font-heading">
                <div>Client: <span className="text-white font-sans font-light">Scalia Domain</span></div>
                <div>Category: <span className="text-[#00E5FF] font-sans font-light">SaaS · Domain Management · Global</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
              <div className="lg:col-span-6 space-y-6">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h3 className="font-heading text-xl text-[#FF2D55] mb-3">The Legacy Problem:</h3>
                  <p className="font-sans font-light text-white/60 leading-relaxed">
                    Scalia was running a domain registrar on fragmented infrastructure — manual renewal processes, no automation, no real-time notifications, and a user dashboard that couldn't scale beyond a few hundred users without performance degradation.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h3 className="font-heading text-xl text-[#00FFA3] mb-3">The Transformation:</h3>
                  <p className="font-sans font-light text-white/60 leading-relaxed">
                    We rebuilt the entire ecosystem from the ground up — a cloud-native Next.js frontend, Node.js backend, PostgreSQL database, Redis caching layer, and a Telegram bot for automated renewal alerts. The old system was replaced in phases, with zero downtime throughout the migration.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 p-8 rounded-3xl bg-white/[0.02] border border-[#6324FC]/20">
                <h3 className="font-heading text-2xl text-white mb-6">The Result:</h3>
                <ul className="space-y-4">
                  {[
                    "Legacy system → Serverless cloud-native architecture",
                    "Manual renewals → Fully automated Telegram notification system",
                    "Slow dashboard → Sub-second load times at scale",
                    "Limited users → Infrastructure ready for 100x user growth",
                    "99.99% uptime post-migration",
                  ].map((res, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/30 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-3 h-3 text-[#6324FC]" />
                      </div>
                      <span className="font-sans font-light text-white/70">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => openModal()}
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.2)] hover:scale-105 inline-block isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                  <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-lg tracking-widest text-white uppercase text-center">
                    READ THE FULL CASE STUDY
                    <ArrowRight className="w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* 3. Transformation Map Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <Layers className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Architectural Node // 0xDE
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-6">
                {[
                  {
                    label: "Infrastructure",
                    val: "Serverless",
                    color: "text-[#00E5FF]",
                  },
                  {
                    label: "Operations",
                    val: "Automated",
                    color: "text-[#6324FC]",
                  },
                  {
                    label: "Security",
                    val: "Immutable",
                    color: "text-[#FF2D55]",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex justify-between items-center group hover:border-white/20 transition-colors"
                  >
                    <div className="font-heading text-xl text-white capitalize">
                      {item.label}
                    </div>
                    <div
                      className={`font-heading text-[10px] tracking-widest capitalize ${item.color}`}
                    >
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Ecosystem Health</span>
                <span>99.99% Performance</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                Modernize Or <br />
                <span className="italic text-[#6324FC]">Stagnate.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                The cost of doing nothing is the highest cost of all. Every month your business runs on legacy infrastructure is a month your competitors widen the gap. We provide the technical expertise and strategic vision to rebuild your organization for the modern era.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Operational ROI",
                    desc: "Reducing overhead costs by automating complex manual workflows, eliminating redundant systems, and optimizing resource allocation — so your team spends time on growth, not maintenance.",
                  },
                  {
                    label: "Security First",
                    desc: "Protecting your digital assets with enterprise-grade encryption, zero-trust architecture, and decentralized systems that make breaches exponentially harder and data loss effectively impossible.",
                  },
                  {
                    label: "Scalable DNA",
                    desc: "Ensuring your business can handle 100x traffic spikes, user growth, and data volume without an emergency engineering sprint — because the architecture was designed for scale from day one.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize">
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
            THE TRANSFORMATION <span className="italic text-[#6324FC]">CYCLE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Mapping your entire technical landscape — systems, workflows, integrations, and dependencies — and identifying the critical friction points that are costing you speed, money, and competitive position.",
              },
              {
                step: "02",
                title: "Re-Engineering",
                desc: "Designing and building the modern, cloud-native infrastructure that will power your future growth — migrating data, rebuilding systems, and deploying automation layer by layer, with zero disruption to live operations.",
              },
              {
                step: "03",
                title: "Scale-Up",
                desc: "Seamlessly migrating your data and users to the new system while monitoring performance in real-time — with rollback protocols, load testing, and post-migration optimization built into every handover.",
              },
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white capitalize">
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

        {/* [NEW] SECTION C — IS YOUR BUSINESS READY TO TRANSFORM? (Self-Qualification) */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-5 h-5 text-[#00E5FF]" />
                  <span className="font-heading text-xs tracking-widest text-[#00E5FF] uppercase">
                    QUALIFICATION STAGE
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                  Is Your Business <br />
                  <span className="italic text-[#00E5FF]">Ready To Evolve?</span>
                </h2>
              </div>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#00E5FF]/40 pl-8 lg:mt-8">
                Digital transformation isn't for every business at every stage. But if any of these describe your current situation, you're exactly where we need to talk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {triggers.map((trigger, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-500 flex items-start gap-4"
                >
                  <div className="w-5 h-5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3 text-[#00E5FF]" />
                  </div>
                  <p className="font-sans font-light text-white/60 text-base leading-relaxed">
                    {trigger}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => openModal()}
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:scale-105 inline-block isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#00E5FF,#6324FC,#00E5FF)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                  <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-lg tracking-widest text-white uppercase text-center">
                    This Is Us
                    <ArrowRight className="w-5 h-5 text-[#00E5FF] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                    Initiate Transformation Study
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Evolve The <span className="italic text-[#6324FC]">Entity.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to break free from legacy limitations? Let's build a digital ecosystem that grows with your vision, performs without limits, and dominates your market.
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
                START TRANSFORMATION STUDY
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
