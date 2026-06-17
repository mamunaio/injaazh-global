"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  UserCheck,
  Layers,
  Activity,
  ClipboardCheck,
  MousePointer2,
  Check,
  ShieldAlert,
  Zap,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function UXAuditsPage() {
  const { openModal } = useProjectModal();

  const features = [
    {
      title: "Heuristic Evaluation",
      description:
        "Analyzing your interface against the 10 core principles of interaction design to systematically find hidden friction points — the micro-frustrations that users feel but never report, and that silently destroy conversion rates.",
      icon: Eye,
      color: "#6324FC",
    },
    {
      title: "Accessibility Compliance",
      description:
        "Ensuring your digital product meets WCAG 2.1 standards and is inclusive for all users, regardless of ability — because accessibility isn't just ethical, it's a direct Google ranking factor and enterprise procurement requirement.",
      icon: UserCheck,
      color: "#00E5FF",
    },
    {
      title: "User Journey Mapping",
      description:
        "Visualizing the entire customer path from first click to final conversion — identifying every barrier, detour, and drop-off point that's leaking revenue from your funnel before users even reach your CTA.",
      icon: Layers,
      color: "#FF2D55",
    },
    {
      title: "Performance UX",
      description:
        "Measuring the psychological impact of page load speeds and interaction latency on your user retention — because a 100ms delay triggers the same frustration response as a broken button. We find and fix both.",
      icon: Activity,
      color: "#00FFA3",
    },
  ];

  const badUxCosts = [
    {
      title: "Your checkout is leaking revenue",
      description: "The average e-commerce checkout abandonment rate is 70%. A single UX fix — removing a required account creation, simplifying form fields, or adding a progress indicator — can recover 15–30% of those lost sales.",
      color: "#FF2D55",
    },
    {
      title: "Your onboarding loses users before they activate",
      description: "For SaaS products, 40–60% of users who sign up never reach their \"aha moment.\" Poor onboarding UX is almost always the cause — and it's fixable with the right audit.",
      color: "#6324FC",
    },
    {
      title: "Mobile users are bouncing",
      description: "If your mobile experience has friction — small tap targets, slow loads, unclear navigation — you're losing 60%+ of your traffic before they even see your value proposition. Google also penalizes it.",
      color: "#00E5FF",
    },
    {
      title: "Your support costs are a UX symptom",
      description: "Every support ticket about \"how do I do X?\" is a UX failure. Poor interface clarity doesn't just frustrate users — it costs your support team time and your business money on every interaction.",
      color: "#00FFA3",
    },
  ];

  const deliverables = [
    {
      title: "Full Heuristic Audit Report",
      description: "A screen-by-screen analysis of your product against the 10 Nielsen-Norman UX heuristics — with every violation documented, severity-rated, and explained in plain language.",
    },
    {
      title: "User Journey Map",
      description: "A visual map of your complete customer journey — from first touch to conversion — with every friction point, drop-off, and emotional state annotated and prioritized.",
    },
    {
      title: "Heatmap & Session Recording Analysis",
      description: "Behavioral data from real users showing where they click, where they stop, where they rage-click, and where they leave — with patterns and anomalies identified.",
    },
    {
      title: "Prioritized Fix Roadmap",
      description: "A ranked list of UX improvements ordered by conversion impact vs. implementation effort — so your dev team knows exactly what to fix first and why.",
    },
    {
      title: "Accessibility Compliance Report",
      description: "A full WCAG 2.1 audit identifying every accessibility violation — with specific fixes documented for each issue and an overall compliance score.",
    },
    {
      title: "High-Fidelity Prototypes",
      description: "For critical UX issues, we provide redesigned screens as high-fidelity Figma prototypes — ready to hand directly to your development team for implementation.",
    },
  ];

  const warningSigns = [
    "Your conversion rate is below industry average and you don't know why",
    "Users sign up but don't activate — your onboarding has a leak you haven't found yet",
    "Your support team keeps answering the same \"how do I...\" questions",
    "You've redesigned before but conversions didn't improve as much as expected",
    "Mobile bounce rates are significantly higher than desktop — a classic mobile UX failure signal",
    "You're adding features but engagement isn't increasing — complexity is killing usability",
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden font-sans text-white pb-20 pt-32">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

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
                EXPERIENCE DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              UX <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Audits.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We audit for empathy. Our UX experts deconstruct your product screen by screen, interaction by interaction — to reveal the hidden frustrations preventing your users from falling in love with your brand and costing you conversions you'll never see in your analytics.
            </p>

            <button
              onClick={() => openModal()}
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white uppercase transition-colors duration-500">
                  Initiate UX Audit
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
              alt="UX Audit Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <ClipboardCheck className="w-20 h-20 text-white mb-4 animate-pulse" />
              <div className="font-heading text-[10px] tracking-[0.5em] text-white/60 uppercase">
                Empathy Scanned
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Eliminating <br />
              <span className="italic text-[#6324FC]">Friction.</span>
            </h2>
            <p className="font-sans font-light text-lg text-white/40 max-w-sm leading-relaxed">
              A great user experience is invisible. When it's working, users don't notice it — they just convert. We find the visible problems and turn them into seamless interactions.
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

        {/* [NEW] SECTION A — WHAT BAD UX COSTS YOUR BUSINESS */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D55]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-5 h-5 text-[#FF2D55]" />
                  <span className="font-heading text-xs tracking-widest text-[#FF2D55] uppercase">
                    CONVERSION BLEEDING
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                  What Bad UX <br />
                  <span className="italic text-[#FF2D55]">Costs You.</span>
                </h2>
              </div>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#FF2D55]/40 pl-8 lg:mt-8">
                UX isn't a design preference — it's a revenue lever. Every friction point in your product is a conversion that didn't happen, a user who didn't return, and a sale your competitor got instead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {badUxCosts.map((card, i) => (
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
                    Audit My UX
                    <ArrowRight className="w-5 h-5 text-[#FF2D55] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                    Start UX Audit
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* 3. User Flow Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <MousePointer2 className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Behavioral Node // 0xUX
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-8">
                {[
                  {
                    label: "Navigation Flow",
                    val: "Optimized",
                    color: "text-[#00E5FF]",
                  },
                  {
                    label: "Interaction Debt",
                    val: "Reduced",
                    color: "#6324FC",
                  },
                  {
                    label: "Visual Hierarchy",
                    val: "Balanced",
                    color: "text-[#00FFA3]",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-white/5 pb-4 group-hover:border-[#6324FC]/30 transition-colors"
                  >
                    <div className="font-heading text-2xl text-white capitalize">
                      {item.label}
                    </div>
                    <div
                      className={`font-heading text-[10px] tracking-widest capitalize ${typeof item.color === "string" && item.color.startsWith("text") ? item.color : ""}`}
                      style={
                        typeof item.color === "string" &&
                        !item.color.startsWith("text")
                          ? { color: item.color }
                          : {}
                      }
                    >
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Empathy Engine</span>
                <span>99% Satisfaction Target</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                User-Centric <br />
                <span className="italic text-[#6324FC]">Precision.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We look at your product through the eyes of your users — not your stakeholders. Our audits identify not just what is broken, but why users feel the way they do when they encounter it.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Pain Point Discovery",
                    desc: "Pinpointing the exact moments when users feel frustrated, confused, or uncertain — mapped to specific screens, interactions, and copy — so fixes are surgical, not speculative.",
                  },
                  {
                    label: "Retention Strategy",
                    desc: "Building the interaction hooks, micro-reward moments, and progress indicators that keep users coming back — because retention is designed, not hoped for.",
                  },
                  {
                    label: "Cross-Device Audit",
                    desc: "Ensuring your experience is flawless from the smallest mobile screen to the largest desktop monitor — because 60%+ of your traffic is mobile, and most UX issues live there.",
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
            THE AUDIT <span className="italic text-[#6324FC]">LIFECYCLE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Inspection",
                desc: "Deep-diving into every screen, interaction, and user flow to map the current state of your user experience — with heatmaps, session recordings, and expert analysis identifying every friction point and conversion leak.",
              },
              {
                step: "02",
                title: "Analysis",
                desc: "Synthesizing all findings into a prioritized roadmap of design and technical improvements — ranked by conversion impact, implementation effort, and user frustration severity. Not a list of problems — a plan to fix them.",
              },
              {
                step: "03",
                title: "Evolution",
                desc: "Providing the high-fidelity prototypes, design specs, and technical recommendations needed to execute the transformation — with implementation support available if you need us to build what we audit.",
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

        {/* [NEW] SECTION B — UX AUDIT DELIVERABLES */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-[#6324FC]" />
                <span className="font-heading text-xs tracking-widest text-[#6324FC] uppercase">
                  AUDIT RESULTS
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white mb-6">
                Your Audit <br />
                <span className="italic text-[#6324FC]">Deliverables.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed">
                Every Injaazh UX Audit delivers a complete experience intelligence package — not a list of opinions, but a prioritized, evidence-based action plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="font-heading text-sm text-[#00E5FF] mb-4">
                      {`0${i + 1}`}
                    </div>
                    <h3 className="font-heading text-2xl text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* [NEW] SECTION C — DOES YOUR PRODUCT NEED A UX AUDIT NOW? */}
        <section className="py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-5 h-5 text-[#00E5FF]" />
                  <span className="font-heading text-xs tracking-widest text-[#00E5FF] uppercase">
                    WARNING SIGNALS
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl leading-[0.9] tracking-tighter capitalize text-white">
                  Does Your Product <br />
                  <span className="italic text-[#00E5FF]">Need An Audit?</span>
                </h2>
              </div>
              <div className="space-y-4 lg:mt-8">
                <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#00E5FF]/40 pl-8">
                  UX problems rarely announce themselves. They hide in your analytics as unexplained drop-offs, in your support queue as repeated questions, and in your churn data as users who left without saying why.
                </p>
                <p className="font-sans font-light text-base text-[#00FFA3] pl-8">
                  If three or more of these describe your product, a UX audit will find revenue you didn't know you were losing.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {warningSigns.map((trigger, i) => (
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
                    Diagnose My Product
                    <ArrowRight className="w-5 h-5 text-[#00E5FF] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                    Start UX Audit
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Design For <span className="italic text-[#6324FC]">Delight.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to fix the friction? Let's run a surgical UX audit and build an experience that your users will never want to leave — and that converts at every step of the journey.
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
                START UX AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
