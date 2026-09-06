"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Feather,
  Newspaper,
  AlignLeft,
  BookOpen,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EditorialWritingPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Thought Leadership",
      description:
        "Crafting industry-defining articles that position your executives as the primary authorities in your sector — so when your market needs an answer, they come to you first.",
      icon: Feather,
      color: "#6324FC",
    },
    {
      title: "Industry Reports",
      description:
        "Data-driven editorial reports that provide deep insights, establish category authority, and become the standard reference document for your market. The piece everyone cites — written by you.",
      icon: Newspaper,
      color: "#00E5FF",
    },
    {
      title: "Brand Narratives",
      description:
        "Engineering cohesive, high-impact brand stories that define your mission, communicate your values, and resonate with global audiences across every touchpoint they encounter your brand.",
      icon: AlignLeft,
      color: "#FF2D55",
    },
    {
      title: "Strategic Whitepapers",
      description:
        "Complex technical concepts translated into compelling narratives that drive enterprise-level trust. Written for decision-makers who need depth — and the credibility to act on it.",
      icon: BookOpen,
      color: "#00FFA3",
    },
  ];

  const bullets = [
    {
      label: "Semantic Flow",
      desc: "Engineering sentences that are as beautiful to read as they are easy for search bots to index. Readability and rankability — never in conflict.",
    },
    {
      label: "Authority Bias",
      desc: "Using high-level diction and strategic positioning to build instant intellectual trust — so your audience assumes expertise before they've finished the first paragraph.",
    },
    {
      label: "Viral Longevity",
      desc: "Creating evergreen content assets that continue to drive traffic, citations, and trust for years after publication. Not content that expires — content that appreciates.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Intel Gathering",
      desc: "Deep-diving into your industry data, competitor content landscape, and internal insights to find the unique angle nobody else is talking about. We don't write generic takes — we find the gap and own it.",
    },
    {
      step: "02",
      title: "Narrative Build",
      desc: "Constructing the editorial framework and drafting high-impact content that aligns with your brand voice, tone guidelines, and strategic objectives. Every sentence earns its place.",
    },
    {
      step: "03",
      title: "Market Launch",
      desc: "Optimizing for search and social sharing to ensure your ideas reach the exact people who need to see them — with distribution strategy, metadata, and amplification built in from the start.",
    },
  ];

  const checklistItems = [
    "You're a B2B brand that needs to be taken seriously by enterprise buyers",
    "Your executives have expertise worth publishing — but no time or team to do it",
    "You're entering a competitive market and need instant credibility",
    "Your competitors are publishing and getting industry attention — you're not",
    "You need long-form content that positions your brand above commodity providers",
    "You want content that gets cited, shared, and referenced — not just read once",
  ];

  const formats = [
    {
      title: "Executive Op-Eds",
      desc: "Bylined thought leadership articles for LinkedIn, Forbes, industry publications, and owned channels. Your name. Our craft.",
    },
    {
      title: "Annual Industry Reports",
      desc: "Data-led, deeply researched reports that establish category authority. The piece your competitors wish they'd written.",
    },
    {
      title: "Flagship Whitepapers",
      desc: "3,000–10,000 word technical narratives that convert enterprise prospects and generate qualified leads at scale.",
    },
    {
      title: "Brand Origin Stories",
      desc: "The founding narrative, mission architecture, and brand voice document that makes every piece of content feel cohesive.",
    },
    {
      title: "Case Study Narratives",
      desc: "Client success stories engineered for persuasion — not just facts. Written to move prospects from consideration to decision.",
    },
    {
      title: "Newsletter Editorial",
      desc: "Weekly or monthly editorial content that builds a loyal audience and keeps your brand at the top of their minds between purchase cycles.",
    },
  ];

  const comparisonRows = [
    {
      metric: "Purpose",
      standard: "Inform or entertain",
      editorial: "Establish authority and drive decisions",
    },
    {
      metric: "Tone",
      standard: "Generic, accessible",
      editorial: "Precise, authoritative, brand-specific",
    },
    {
      metric: "Research depth",
      standard: "Surface-level",
      editorial: "Industry data, competitor gap analysis",
    },
    {
      metric: "SEO approach",
      standard: "Keyword stuffing",
      editorial: "Semantic architecture + topical authority",
    },
    {
      metric: "Lifespan",
      standard: "Months",
      editorial: "Years — evergreen by design",
    },
    {
      metric: "Business outcome",
      standard: "Traffic",
      editorial: "Trust, leads, and market positioning",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

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
                EDITORIAL DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Editorial <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Writing.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We define the conversation. Our editorial team engineers
              authoritative content that dictates market trends, positions your
              brand above competitors, and builds the kind of trust that
              compounds over years — not months.
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
                  Define Your Voice
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
              alt="Editorial Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#060608]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
              <Quote className="w-12 h-12 text-[#6324FC] mb-6 opacity-30" />
              <div className="font-heading text-4xl text-white tracking-tighter italic leading-none max-w-xs">
                "Words Are The Infrastructure Of Trust."
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02. Crafting Authority */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Crafting <span className="italic text-[#6324FC]">Authority.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Content is not just noise. It is the tactical deployment of ideas
              that capture and hold global attention. Every piece we produce is
              engineered to own a conversation — not participate in it.
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

        {/* 03. The Art Of Narrative */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <Newspaper className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Issue 024 // Strategic Narrative
                </div>
              </div>

              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                </div>

                <div className="p-8 bg-[#6324FC]/5 border border-[#6324FC]/20 rounded-2xl relative overflow-hidden">
                  <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[#6324FC]/10"
                  />
                  <div className="relative z-10 space-y-4">
                    <div className="font-heading text-2xl text-white capitalize italic">
                      Modern Hegemony.
                    </div>
                    <p className="font-sans text-[10px] text-white/40 leading-relaxed">
                      In an era of digital noise, silence is authority. We craft
                      the narratives that command the space between the screams.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 h-20 bg-white/[0.02] rounded-xl border border-white/5" />
                  <div className="flex-1 h-20 bg-white/[0.02] rounded-xl border border-white/5" />
                </div>
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Editorial Engine</span>
                <span>Tone Consensus: High</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                The Art Of <br />
                <span className="italic text-[#6324FC]">Narrative.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We translate your technical complexity into compelling human
                stories. Our writing is designed for resonance, retention, and
                results — content that stays with the reader long after they've
                left the page.
              </p>

              <div className="space-y-8">
                {bullets.map((item, i) => (
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

        {/* 04. The Editorial Protocol */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            The Editorial <span className="italic text-[#6324FC]">Protocol.</span>
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

        {/* SECTION A — WHO EDITORIAL WRITING IS FOR */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              WHO NEEDS EDITORIAL AUTHORITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Who Needs <br />
                <span className="italic text-[#6324FC]">Editorial Authority.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                Editorial writing isn't for everyone. It's for brands that are
                ready to stop following the conversation — and start leading it.
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
                  This Is My Brand → Let's Talk
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION B — EDITORIAL FORMATS WE PRODUCE */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              WHAT WE PRODUCE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                What We <br />
                <span className="italic text-[#6324FC]">Produce.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              "Editorial Writing" can mean many things. Showing specific
              formats removes ambiguity and helps visitors immediately
              understand the scope of work — reducing friction before the sales
              call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formats.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading text-[#6324FC] text-xs mb-6">
                    Format 0{i + 1}
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 group-hover:text-[#6324FC] transition-colors">
                    {f.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION C — EDITORIAL VS. STANDARD CONTENT */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              THE CONTRAST
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Editorial Writing <br />
                <span className="italic text-[#6324FC]">vs. Standard Content.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              Not all writing is equal. Here's the difference between content
              that fills space and content that commands it.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01]">
            <table className="w-full text-left border-collapse font-sans text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-6 font-heading text-white">Dimension</th>
                  <th className="p-6 font-heading text-white/40">Standard Content</th>
                  <th className="p-6 font-heading text-[#6324FC]">Injaazh Editorial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-6 font-heading text-white">{row.metric}</td>
                    <td className="p-6 font-light text-white/40">{row.standard}</td>
                    <td className="p-6 font-light text-[#00FFA3]">{row.editorial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 text-center max-w-4xl mx-auto mt-12">
            <p className="font-sans font-light text-lg text-white/70">
              <strong className="font-heading text-[#6324FC]">Bottom line:</strong>{" "}
              Standard content gets read. Editorial content gets cited. We write
              the kind that gets cited.
            </p>
          </div>
        </div>

        {/* 05. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Command The <span className="italic text-[#6324FC]">Space.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to lead the industry conversation? Let's build an editorial
            strategy that positions your brand as the absolute standard — the
            source your market quotes, references, and trusts.
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
                START EDITORIAL STUDY
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
