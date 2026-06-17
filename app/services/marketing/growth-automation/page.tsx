"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Workflow,
  Cpu,
  Database,
  Terminal,
  Settings,
  Mail,
  UserPlus,
  BarChart2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GrowthAutomationPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Autonomous Funnels",
      description:
        "Engineering self-optimizing marketing funnels that nurture leads and close sales while you sleep — from first touch to signed contract, every step automated, tracked, and continuously refined.",
      icon: Workflow,
      color: "#6324FC",
    },
    {
      title: "CRM Intelligence",
      description:
        "Deep integration with Salesforce, HubSpot, and Pipedrive to ensure absolute data transparency — no lost leads, no manual data entry, no deals falling through the cracks because someone forgot to follow up.",
      icon: Database,
      color: "#00E5FF",
    },
    {
      title: "Email Workflows",
      description:
        "Hyper-personalized, behavior-triggered email sequences that drive 4x higher engagement rates — sent at the right moment, with the right message, to the right lead, based on what they actually did.",
      icon: Mail,
      color: "#FF2D55",
    },
    {
      title: "Lead Scoring",
      description:
        "AI-driven algorithms that identify your most valuable prospects based on real-time behavioral data — so your sales team spends time on leads that are ready to buy, not leads that need six more months.",
      icon: Cpu,
      color: "#00FFA3",
    },
  ];

  const platforms = [
    "Zapier Enterprise",
    "Make.com (Integromat)",
    "ActiveCampaign",
    "HubSpot Ops Hub",
    "n8n",
    "Segment",
  ];

  const steps = [
    {
      step: "01",
      title: "Stack Audit",
      desc: "Identifying friction points and repetitive tasks within your current marketing and sales infrastructure — every manual step that costs your team time, every gap where leads are slipping through, every tool that isn't talking to the others.",
    },
    {
      step: "02",
      title: "Logic Design",
      desc: "Mapping out complex conditional workflows that handle lead routing, nurturing, and data synchronization — if this, then that, at scale. Every trigger, every branch, every outcome documented before a single automation is built.",
    },
    {
      step: "03",
      title: "Autonomous Ops",
      desc: "Deploying and monitoring self-correcting systems that scale your growth with minimal human intervention — with error alerts, fallback sequences, and monthly performance reviews built in from the start.",
    },
  ];

  const scope = [
    {
      title: "Lead Capture & Routing",
      desc: "Every form submission, ad lead, and inbound inquiry automatically captured, enriched with firmographic data, scored, and routed to the right sales rep — within seconds, not hours.",
    },
    {
      title: "Email Nurture Sequences",
      desc: "Behavior-triggered email flows that respond to what a lead actually does — opened an email, visited a pricing page, watched a demo — with the right follow-up at the right moment, automatically.",
    },
    {
      title: "CRM Data Management",
      desc: "Contact creation, deal stage updates, task assignment, and activity logging — all automated based on pipeline triggers. Your CRM stays clean and current without anyone touching it manually.",
    },
    {
      title: "Follow-Up & Re-Engagement",
      desc: "Automated follow-up sequences for leads that went cold, trials that didn't convert, and clients whose contracts are expiring — timed, personalized, and sent without a human remembering to do it.",
    },
    {
      title: "Reporting & Alerts",
      desc: "Weekly performance summaries, anomaly alerts, and revenue forecast updates — delivered to your inbox automatically so you always know where your pipeline stands without pulling a report.",
    },
    {
      title: "Onboarding Flows",
      desc: "New client welcome sequences, document collection, kickoff scheduling, and access provisioning — automated from contract signed to onboarding complete with zero manual coordination.",
    },
  ];

  const checklistItems = [
    "Your sales team manually follows up with every lead individually",
    "Leads from your website or ads are sitting in a spreadsheet, not a CRM",
    "New client onboarding requires manual coordination across email and documents",
    "You have HubSpot or Salesforce but it's mostly empty or out of date",
    "Your email marketing is batch-and-blast, not behavior-triggered",
    "You're ready to scale but your current process doesn't support more volume",
  ];

  const compareHiring = [
    {
      title: "Hiring a Sales Development Rep",
      items: [
        "$4,000–$6,000/month salary + benefits",
        "Works 8 hours/day, 5 days/week",
        "Needs training, management, and oversight",
        "Makes 50–80 calls or emails per day",
        "Takes sick days, holidays, and mental health days",
        "Inconsistent — performance varies with mood and motivation",
      ],
      isSystem: false,
    },
    {
      title: "Injaazh Automation System",
      items: [
        "One-time build cost, low monthly maintenance",
        "Runs 24 hours/day, 7 days/week, 365 days/year",
        "Self-correcting with error alerts and fallback sequences",
        "Processes thousands of leads simultaneously",
        "Never takes a day off",
        "Consistent — the same logic executes perfectly every time",
      ],
      isSystem: true,
    },
  ];

  const faqs = [
    {
      q: "How long does it take to build an automation system?",
      a: "A focused automation build — lead capture, CRM integration, and a nurture sequence — typically takes 2–3 weeks. A full growth automation system covering the entire lead-to-close pipeline runs 4–8 weeks depending on stack complexity and the number of workflows required. We scope and document everything before we build.",
    },
    {
      q: "Do we need to already have a CRM?",
      a: "No — but you'll need one. If you don't have a CRM, we'll recommend and configure the right one for your business as part of the engagement. HubSpot's free tier is sufficient for most early-stage builds. For more complex pipelines, we work with HubSpot Sales Hub, Salesforce, or Pipedrive.",
    },
    {
      q: "What platforms do you build automations on?",
      a: "We build on Make.com (Integromat), Zapier Enterprise, N8n, ActiveCampaign, HubSpot Ops Hub, and Segment — selected based on your existing stack, budget, and workflow complexity. We don't force a platform preference; we recommend what's right for your use case.",
    },
    {
      q: "Will the automations break if we change our tools?",
      a: "Automations are built on connection points between tools — so yes, changing a core tool requires updating the automations that connect to it. We document every workflow thoroughly so changes can be made quickly. Clients on our maintenance retainer get tool change support included.",
    },
    {
      q: "Can you automate our outbound prospecting as well?",
      a: "Yes. We build outbound automation sequences across email and LinkedIn — personalized at scale using enrichment tools and conditional logic. Every sequence is designed to comply with CAN-SPAM and GDPR requirements. We also integrate reply detection so hot responses are immediately routed to your sales team for human follow-up.",
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
              <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
                AUTOMATION DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Growth <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Automation.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We eliminate human error from your growth engine. Our automation
              systems ensure every lead is captured, nurtured, and converted
              with algorithmic precision — while your team focuses on decisions,
              not repetitive tasks.
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
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                  Automate Your Growth
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group flex items-center justify-center"
          >
            <Image
              src="/assets/nexus_esports_final.webp"
              alt="Growth Automation Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#0A0A0C]/60 mix-blend-multiply group-hover:opacity-0 transition-opacity" />

            {/* Animated Nodes Overlay */}
            <div className="absolute inset-0 p-12 flex items-center justify-center">
              <div className="relative w-full h-full border border-dashed border-white/10 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#6324FC] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,36,252,0.5)]">
                    <Workflow className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                <div className="text-center relative z-10">
                  <Cpu className="w-16 h-16 text-[#6324FC] mx-auto mb-4 animate-pulse" />
                  <div className="font-heading text-4xl text-white tracking-tighter">
                    AI Core
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02. Systems That Never Sleep */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Systems That Never <br />
              <span className="italic text-[#6324FC]">Sleep.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Efficiency is the ultimate competitive advantage. We build the
              systems that allow your team to focus on strategy, not repetitive
              tasks — and your pipeline to fill itself while you're offline.
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
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-xl relative flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <f.icon className="w-24 h-24 text-white" />
                </div>
                <div>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 03. The Engine Room */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                The Engine <br />
                <span className="italic text-[#6324FC]">Room.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We connect your entire tech stack into a unified,
                high-performance growth machine using the world's most advanced
                automation platforms — chosen for your specific workflow, not for
                convenience.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {platforms.map((item, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 bg-white/[0.03] border border-white/5 rounded-xl font-heading text-[10px] tracking-widest text-white/60 capitalize flex items-center gap-3"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#6324FC]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <Terminal className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  System Flow // 0xAF
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-6">
                {[
                  { label: "Lead Ingestion", status: "Active", val: "2.4k/hr" },
                  {
                    label: "Data Enrichment",
                    status: "Enriching",
                    val: "99.2% Sync",
                  },
                  {
                    label: "CRM Syncing",
                    status: "Operational",
                    val: "Instant",
                  },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex justify-between items-center group hover:border-[#6324FC]/30 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="font-heading text-xl text-white capitalize">
                        {node.label}
                      </div>
                      <div className="font-heading text-[9px] text-[#00E5FF] capitalize tracking-widest">
                        {node.status}
                      </div>
                    </div>
                    <div className="font-heading text-2xl text-white">
                      {node.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/4 bg-[#6324FC]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 04. The Automation Roadmap */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            The Automation <span className="italic text-[#6324FC]">Roadmap.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white capitalize">
                    Step {s.step} — {s.title}
                  </h3>
                  <p className="font-sans font-light text-lg text-white/40 leading-relaxed border-l border-white/10 pl-8 group-hover:border-[#6324FC] transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION A — WHAT GETS AUTOMATED */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              AUTOMATION SCOPE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                If It's Repetitive, <br />
                <span className="italic text-[#6324FC]">
                  It Shouldn't Be Manual.
                </span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              Automation isn't just email sequences. It's every task your team
              does more than twice — captured, systematized, and removed from
              the human workload permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scope.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading text-[#6324FC] text-xs mb-6">
                    Scope 0{i + 1}
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 group-hover:text-[#6324FC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B — WHO NEEDS GROWTH AUTOMATION */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              AUTOMATION CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Your Team Is Working Hard. <br />
                <span className="italic text-[#6324FC]">
                  The System Should Too.
                </span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                If your team is spending hours on tasks a system could handle in
                seconds — you're not scaling, you're staffing. Automation is the
                difference between a business that grows linearly and one that
                grows exponentially.
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
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                  Map My Automation
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION C — AUTOMATION VS HIRING */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              THE MATH IS CLEAR
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                One System. <br />
                <span className="italic text-[#6324FC]">Zero Salaries.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              Every repetitive task you automate is a task you don't need to
              hire for. Here's what that comparison looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {compareHiring.map((table, i) => (
              <div
                key={i}
                className={`p-10 rounded-[2.5rem] bg-white/[0.01] border transition-all duration-500 relative overflow-hidden ${
                  table.isSystem
                    ? "border-[#6324FC]/30 hover:border-[#6324FC]/50"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {table.isSystem && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#6324FC]/10 blur-3xl rounded-full pointer-events-none" />
                )}
                <h3
                  className={`font-heading text-3xl mb-8 ${
                    table.isSystem ? "text-[#6324FC]" : "text-white/60"
                  }`}
                >
                  {table.title}
                </h3>
                <ul className="space-y-6">
                  {table.items.map((item, j) => (
                    <li key={j} className="flex gap-4 items-start">
                      {table.isSystem ? (
                        <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-1" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      )}
                      <span className="font-sans font-light text-white/70 text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center max-w-4xl mx-auto">
            <p className="font-sans font-light text-lg text-white/70">
              <strong className="font-heading text-white">Bottom Line:</strong>{" "}
              Automation doesn't replace your team. It removes the work beneath
              them — so they spend 100% of their time on the tasks only a human
              can do.
            </p>
          </div>
        </div>

        {/* SECTION D — GROWTH AUTOMATION FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Growth Automation <span className="italic text-[#6324FC]">FAQ.</span>
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

        {/* 05. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Free The <span className="italic text-[#6324FC]">Engine.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop doing the work and start managing the system? Let's
            build an automation engine that scales your brand effortlessly.
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
                INITIATE AUTOMATION STUDY
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
