"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Paintbrush,
  Target,
  Heart,
  Sparkles,
  PenTool,
  Type,
  Palette,
  Layout,
  Globe,
  Star,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BrandIdentityPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Visual Systems",
      description:
        "Developing comprehensive design languages that maintain consistency across every digital and physical touchpoint — from your website to your packaging.",
      icon: Layout,
      color: "#6324FC",
    },
    {
      title: "Luxury Typography",
      description:
        "Custom font selection and typesetting that communicates authority, elegance, and modern sophistication — because how you say it matters as much as what you say.",
      icon: Type,
      color: "#00E5FF",
    },
    {
      title: "Color Strategy",
      description:
        "Scientifically backed color palettes designed to evoke specific emotions and drive user action — chosen for your market, not your personal preference.",
      icon: Palette,
      color: "#FF2D55",
    },
    {
      title: "Global Positioning",
      description:
        "Strategic branding that resonates with US, UK, and Australian markets while maintaining a global appeal — so your brand travels without losing its authority.",
      icon: Globe,
      color: "#00FFA3",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
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
                CREATIVE DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              Brand <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Identity.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t design logos — we architect visual legacies. Our
              branding systems are engineered to dominate attention and command
              premium value in any market.
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
                  Initiate Brand Design
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
              alt="Brand Identity Visual"
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
              Crafting Visual{" "}
              <span className="italic text-[#6324FC]">Authority.</span>
            </h2>
            <p className="font-heading text-[16px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              A premium brand is built on consistency, precision, and a deep
              understanding of market psychology.
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

        {/* 3. Beyond The Logo Section */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
            <div className="space-y-12">
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize ">
                Beyond The <span className="italic text-[#6324FC]">Logo.</span>
              </h2>

              <p className="font-sans font-light text-lg text-white/40 leading-relaxed max-w-xl">
                We deliver full-scale brand books that define your voice, your
                motion, and your soul. Everything a brand needs to exist with
                authority — documented, structured, and ready to deploy.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    label: "Core Colors",
                    desc: "A defined primary, secondary, and neutral palette — with exact HEX, RGB, and CMYK values for flawless reproduction across every medium.",
                    colors: ["bg-black", "bg-[#6324FC]", "bg-white"],
                  },
                  {
                    label: "Typography",
                    desc: "Heading and body typeface pairings selected for your specific audience. Bold and dominant, or refined and editorial — chosen with intention.",
                    font: "font-heading",
                  },
                  {
                    label: "Iconography",
                    desc: "A custom icon set built on a unified grid system. Surgical precision across every symbol, consistent weight, consistent meaning.",
                    icon: Star,
                  },
                  {
                    label: "Voice",
                    desc: "Your brand's verbal identity — tone, language rules, and messaging hierarchy. Premium / Bold. Market Authority.",
                  },
                ].map((spec, i) => (
                  <div key={i} className="space-y-4">
                    <div className="font-heading text-[10px] tracking-widest text-[#6324FC] uppercase">
                      {spec.label}
                    </div>
                    {spec.colors ? (
                      <div className="flex gap-2">
                        {spec.colors.map((c, ci) => (
                          <div
                            key={ci}
                            className={`w-8 h-8 rounded-full border border-white/10 ${c}`}
                          />
                        ))}
                      </div>
                    ) : spec.font ? (
                      <div className={`${spec.font} text-2xl text-white`}>
                        ABC
                      </div>
                    ) : spec.icon ? (
                      <spec.icon className="w-8 h-8 text-white" />
                    ) : null}
                    <p className="font-sans text-xs text-white/40 leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Brand Build - Scalia Domain */}
            <div className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 space-y-6">
              <span className="font-heading text-[#6324FC] text-[9px] tracking-widest uppercase block">
                FEATURED BRAND BUILD
              </span>
              <h3 className="font-heading text-3xl text-white">
                SCALIA DOMAIN
              </h3>
              <div className="inline-block px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full font-heading text-[9px] tracking-wider text-[#00E5FF] uppercase">
                BRAND IDENTITY · SAAS · GLOBAL
              </div>

              <div className="space-y-4 text-xs font-sans text-white/50 leading-relaxed">
                <p>
                  <strong className="text-white block font-heading tracking-wider text-[10px] uppercase mb-1">
                    Challenge
                  </strong>
                  Scalia Domain needed a brand identity that communicated
                  enterprise trust and technical authority — while remaining
                  approachable to global SME users managing their domains.
                </p>

                <div>
                  <strong className="text-white block font-heading tracking-wider text-[10px] uppercase mb-1">
                    Deliverables
                  </strong>
                  <ul className="list-disc pl-4 space-y-1 text-white/40">
                    <li>Full logo system (primary, secondary, icon-only)</li>
                    <li>Dark-mode-first color system for SaaS</li>
                    <li>Bold & Dominant typography pairing</li>
                    <li>Custom iconography with surgical precision</li>
                    <li>Brand voice guidelines — Premium / Authority</li>
                  </ul>
                </div>

                <p>
                  <strong className="text-white block font-heading tracking-wider text-[10px] uppercase mb-1">
                    Result
                  </strong>
                  A complete visual identity deployed across web app, marketing
                  site, and Telegram bot — consistent, authoritative, and
                  immediately recognizable.
                </p>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mt-6 group">
                <Image
                  src="/assets/scalia_app_final.webp"
                  alt="Scalia Domain Case Study"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Strategic Process */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12 text-center">
            The Brand{" "}
            <span className="italic text-[#6324FC]">Archaeology.</span>
          </h2>
          <p className="font-sans font-light text-xl text-white/40 text-center max-w-3xl mx-auto leading-relaxed mb-24">
            Our process doesn&apos;t start with aesthetics. It starts with
            excavation — uncovering what your brand needs to own in your market
            before we draw a single line.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Analysis",
                desc: "Deep-diving into your market, competitors, and target audience psychology to find your unique positioning gap. We define what your brand must own before we design anything.",
              },
              {
                step: "02",
                title: "Concepting",
                desc: "Developing multiple visual directions that align with your core mission and evoke the right emotional response. You see the strategy behind every choice — not just the aesthetics.",
              },
              {
                step: "03",
                title: "Guideline",
                desc: "Finalizing your brand book, including color usage, typography, and verbal tone guidelines for global consistency. Every rule documented so your brand stays intact across every team and touchpoint.",
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

        {/* [NEW] SECTION A — WHO THIS IS FOR (BRAND CLARITY) */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <div>
              <span className="font-heading text-[#6324FC] text-xs uppercase tracking-widest block mb-4">
                BRAND CLARITY
              </span>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Is Your Brand{" "}
                <span className="italic text-[#6324FC]">
                  Working Hard Enough?
                </span>
              </h2>
              <p className="font-sans font-light text-lg text-white/40 leading-relaxed mb-12">
                Your brand is either building trust or losing it — every second
                someone lands on your page. If any of these sound familiar,
                it&apos;s time for a redesign.
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
                    My Brand Needs This
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Your logo was made in Canva and it shows",
                "Competitors look more premium than you — even if you're better",
                "You have no consistent visual identity across your channels",
                "You're entering a new market and need to command respect from day one",
                "Your current brand doesn't reflect your actual price point",
                "You've outgrown your identity but don't know where to start",
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

        {/* [NEW] SECTION B — WHAT YOU RECEIVE (FULL DELIVERABLE SET) */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <span className="font-heading text-[#6324FC] text-xs uppercase tracking-widest block mb-4">
                FULL DELIVERABLE SET
              </span>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Everything.{" "}
                <span className="italic text-[#6324FC]">Documented.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed">
              Not a logo file and a handshake. A complete brand system —
              structured, transferable, and built to survive every platform,
              team change, and market shift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Logo Suite",
                desc: "Primary logo, secondary lockup, icon-only variant, and reverse versions. Delivered in SVG, PNG, and PDF — ready for print, web, and motion.",
              },
              {
                num: "02",
                title: "Color System",
                desc: "Primary, secondary, and neutral palettes with exact HEX, RGB, CMYK, and Pantone values. Light and dark mode variants included for digital-first brands.",
              },
              {
                num: "03",
                title: "Typography System",
                desc: "Heading, subheading, body, and caption typeface pairings — with scale ratios, line height, and letter spacing specifications documented for developers and designers.",
              },
              {
                num: "04",
                title: "Icon Set",
                desc: "Custom icons built on a unified 24px grid. Consistent stroke weight, corner radius, and optical alignment — so every symbol feels like part of the same system.",
              },
              {
                num: "05",
                title: "Brand Voice Guidelines",
                desc: "Tone of voice, vocabulary rules, messaging hierarchy, and example copy — so every piece of communication sounds like it came from the same source.",
              },
              {
                num: "06",
                title: "Brand Book (PDF)",
                desc: "Every rule, every asset, every decision — compiled into a single master document your team, developers, and future partners can reference forever.",
              },
            ].map((del, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors relative group"
              >
                <div className="font-heading text-6xl text-white/[0.02] absolute top-6 right-6 group-hover:text-[#6324FC]/5 transition-colors">
                  {del.num}
                </div>
                <h3 className="font-heading text-2xl text-white mb-4 uppercase">
                  {del.title}
                </h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                  {del.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* [NEW] SECTION C — BRAND FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              BRAND <span className="italic text-[#6324FC]">FAQ.</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How long does a brand identity project take?",
                a: "A focused brand identity — logo, color, typography, and basic guidelines — typically takes 2–3 weeks. A full brand system with voice guidelines, icon sets, and a complete brand book runs 4–6 weeks. Timeline is locked in at the start of every project.",
              },
              {
                q: "What if I already have a logo but need everything else?",
                a: "We work with both. If your logo is strong, we build the full system around it. If it's not, we tell you honestly — and give you the option to rebuild it as part of the engagement.",
              },
              {
                q: "Do you design for specific industries?",
                a: "We've built brand identities for SaaS products, professional service firms, e-commerce brands, and digital agencies. What matters more than industry is ambition — we work best with brands that want to own their category.",
              },
              {
                q: "Will I own everything after the project?",
                a: "Yes — completely. All source files, Figma files, font licenses (where applicable), and the brand book are transferred to you at delivery. No ongoing fees, no lock-in.",
              },
              {
                q: "Can you redesign an existing brand without losing brand recognition?",
                a: "Yes. Brand evolution is a defined discipline. We audit what equity exists in your current identity, preserve what's working, and replace what isn't — so the redesign feels like a natural step forward, not a rupture.",
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
            LEAVE A <span className="italic text-[#6324FC]">LEGACY.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop blending in? Let&apos;s build a brand identity that
            commands attention and defines its own category.
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
                START BRAND DISCOVERY
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
