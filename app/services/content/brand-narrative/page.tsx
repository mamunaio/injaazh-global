"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Heart,
  MessageSquare,
  Compass,
  Anchor,
  Target,
  Layers,
  Inbox,
  SlidersHorizontal,
  Briefcase,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BrandNarrativePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Origin Stories",
      description:
        "Defining the unique \"Why\" behind your brand and crafting a compelling journey from inception to industry leader — the founding story that makes people root for you before they've bought a thing.",
      icon: Anchor,
      color: "#6324FC",
    },
    {
      title: "Tone Of Voice",
      description:
        "Developing a distinct verbal personality that cuts through the noise and resonates with your specific audience — so every piece of communication, from a tweet to a whitepaper, sounds unmistakably like you.",
      icon: MessageSquare,
      color: "#00E5FF",
    },
    {
      title: "Emotional Mapping",
      description:
        "Identifying the core emotional triggers that drive loyalty and purchasing decisions in your market — then building your entire narrative architecture around those triggers.",
      icon: Heart,
      color: "#FF2D55",
    },
    {
      title: "Mission Alignment",
      description:
        "Ensuring your brand mission isn't just a paragraph on an about page — but a living story that inspires both customers to buy and employees to believe. The kind of mission people repeat without being asked.",
      icon: Compass,
      color: "#00FFA3",
    },
  ];

  const bullets = [
    {
      label: "Archetype Definition",
      desc: "Aligning your brand with universal human archetypes for instant familiarity and trust — so new audiences feel like they already know you before the first conversation.",
    },
    {
      label: "Conflict & Resolution",
      desc: "Framing your customer's journey as a heroic narrative where your product is the guide — not the hero. The story structure that makes buyers feel seen, understood, and ready to act.",
    },
    {
      label: "Legacy Engineering",
      desc: "Building a brand story that doesn't just sell today, but compounds in cultural weight over years — creating a brand that the next generation of customers inherits as part of their identity.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Excavation",
      desc: "Diving deep into your history, values, founding decisions, and vision to find the core truths that make your brand genuinely unique — the raw material no competitor has access to because it belongs only to you.",
    },
    {
      step: "02",
      title: "Weaving",
      desc: "Connecting those truths into a cohesive, multi-layered narrative that works across every platform — website, pitch deck, social, PR, and internal culture. One story. Infinite expressions.",
    },
    {
      step: "03",
      title: "Resonance",
      desc: "Testing and refining the narrative to ensure it lands with maximum emotional impact on your target audience — before it goes live in the market. We don't publish guesses; we publish what we know will work.",
    },
  ];

  const deliverables = [
    {
      title: "Brand Origin Document",
      desc: "The definitive written account of your founding story, mission, and \"Why\" — 1,500–3,000 words, ready to publish or adapt.",
      icon: FileText,
      color: "#6324FC",
    },
    {
      title: "Tone of Voice Guide",
      desc: "A practical, example-rich guide defining your verbal identity, vocabulary rules, words to use, and words to avoid.",
      icon: MessageSquare,
      color: "#00E5FF",
    },
    {
      title: "Core Messaging Matrix",
      desc: "Key taglines, value propositions, and elevator pitches mapped to different target customer personas and funnel stages.",
      icon: Layers,
      color: "#FF2D55",
    },
    {
      title: "Editorial Style Guide",
      desc: "Formatting rules, capitalization preferences, and writing styles to ensure brand alignment across all content formats.",
      icon: SlidersHorizontal,
      color: "#00FFA3",
    },
    {
      title: "Customer Persona Mapping",
      desc: "Deep profiles of your ideal buyers, identifying their emotional pain points, buying triggers, and objection resolution copy.",
      icon: Inbox,
      color: "#FACC15",
    },
    {
      title: "Deployment Roadmap",
      desc: "A sequenced rollout plan showing how to deploy your new brand narrative across your website, pitch decks, PR, and social media.",
      icon: Briefcase,
      color: "#6324FC",
    },
  ];

  const checklistItems = [
    "You're struggling to stand out in a crowded market where everyone sounds the same",
    "Your team describes what you do differently depending on who you ask",
    "You're launching a new product line or expanding into a new demographic",
    "Your brand has outgrown its original founding story and needs a mature narrative",
    "You're losing market share to newer competitors with stronger visual and verbal branding",
    "You want to build a loyal community of customers who believe in your mission",
  ];

  const faqs = [
    {
      q: "What exactly is a brand narrative?",
      a: "A brand narrative is the overarching story that connects your company's mission, values, origin, and customer journey. It's the strategic foundation that ensures all your marketing, sales, and internal messaging sound cohesive, consistent, and emotionally resonant.",
    },
    {
      q: "How long does the brand narrative process take?",
      a: "A typical brand narrative engagement takes 4–6 weeks from initial excavation sessions to the delivery of the final Brand Narrative Playbook. This timeline allows for deep research, collaborative workshops, drafting, and iterative refinements.",
    },
    {
      q: "Who is involved in the brand narrative process?",
      a: "We work closely with your core leadership team — founders, C-level executives, and marketing leads. Their inputs are critical during the excavation phase to ensure the story we write represents the authentic truth of your business.",
    },
    {
      q: "How do we use the brand narrative after it's delivered?",
      a: "The Brand Narrative Playbook is designed to be immediately actionable. Your marketing team can use it to rewrite website copy, your sales team can use it for pitch decks, your HR team can use it for onboarding, and external writers can use it as a guide.",
    },
    {
      q: "Can you help us implement the new brand narrative across our site?",
      a: "Yes. In addition to creating the narrative playbook, we offer full implementation services — rewriting website copy, designing pitch decks, and building brand narrative campaigns to launch your new story to the market.",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
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
                STORY DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Brand <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Narrative.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don't just tell stories — we build worlds. Our brand narratives
              define the emotional infrastructure that connects you to your
              audience, separates you from every competitor, and makes your
              brand impossible to forget.
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
                  Craft Your Story
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
              alt="Brand Narrative Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border border-dashed border-white/20 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-12 h-12 text-white animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 02. The Soul Of The Machine */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              The Soul Of <br />
              <span className="italic text-[#6324FC]">The Machine.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              A product can be copied. A story is yours alone. We help you find
              and amplify the human element in your business — the part that no
              competitor can replicate, regardless of budget.
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

        {/* 03. Beyond The Product */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <Target className="w-8 h-8 text-[#FF2D55]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Emotional Resonance // v1.2
                </div>
              </div>

              <div className="space-y-12 flex-1 flex flex-col justify-center">
                <div className="relative h-48 w-full border border-white/5 rounded-2xl overflow-hidden flex items-end">
                  {[60, 40, 80, 50, 90, 70, 45, 85, 65, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-[#FF2D55]/30 to-[#6324FC]/30 border-t border-white/10"
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-heading text-2xl text-white capitalize tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">
                      EMPATHY MAP
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-center">
                    <div className="font-heading text-[8px] text-[#00E5FF] capitalize mb-1">
                      Trust Index
                    </div>
                    <div className="font-heading text-2xl text-white">94%</div>
                  </div>
                  <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-center">
                    <div className="font-heading text-[8px] text-[#FF2D55] capitalize mb-1">
                      Relatability
                    </div>
                    <div className="font-heading text-2xl text-white">88%</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#FF2D55] capitalize tracking-widest">
                <span>Story Protocol</span>
                <span>Resonance Sync Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                Beyond The <br />
                <span className="italic text-[#FF2D55]">Product.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We help you find the story only you can tell. Our process
                extracts the authentic truth of your brand and translates it
                into a narrative that compels action — from first impression to
                lifelong loyalty.
              </p>

              <div className="space-y-8">
                {bullets.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] mt-2 group-hover:scale-150 transition-transform" />
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

        {/* 04. The Story Architecture */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            The Story <span className="italic text-[#6324FC]">Architecture.</span>
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

        {/* SECTION A — WHAT YOU RECEIVE: THE BRAND NARRATIVE PACKAGE */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              WHAT YOU RECEIVE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              What You <br />
              <span className="italic text-[#6324FC]">Receive.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Every Injaazh Brand Narrative engagement delivers a complete brand
              story system — not just a document, but a living framework your
              entire team can use.
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
                  <h3 className="font-heading text-2xl text-white mb-4 capitalize">
                    Deliverable 0{i + 1} — {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B — WHO THIS IS FOR */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              STORY CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Is Your Story <br />
                <span className="italic text-[#6324FC]">Lost In Translation?</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                A commodity sells features. A brand sells a story. If any of
                these challenges resonate with your current market position,
                it's time to build a cohesive narrative.
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
                  Define My Brand Story
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION C — BRAND NARRATIVE FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Brand Narrative <span className="italic text-[#6324FC]">FAQ.</span>
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
            Tell The <span className="italic text-[#6324FC]">Unforgettable.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop being a commodity and start being a character? Let's
            architect a brand narrative that defines your category — and makes
            every competitor look like an also-ran.
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
                INITIATE STORY STUDY
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
