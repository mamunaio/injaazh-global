"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Zap,
  Cpu,
  Globe,
  Film,
  Layers,
  MousePointer2,
  Box,
  Sparkles,
  Move,
  Camera,
  ChevronDown,
  Check,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MotionGraphicsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Kinetic Branding",
      description:
        "Bringing static logos and identities to life with fluid, purposeful motion that defines brand character — so your brand doesn't just look premium, it feels it.",
      icon: Move,
      color: "#6324FC",
    },
    {
      title: "3D Immersion",
      description:
        "Creating depth-rich environments and product visualizations using Spline and After Effects — for a premium, tactile feel that flat design simply cannot replicate.",
      icon: Box,
      color: "#00E5FF",
    },
    {
      title: "Micro-Interactions",
      description:
        "Enhancing UX with subtle, high-performance animations that guide user behavior and provide instant feedback — the details that make a product feel alive.",
      icon: MousePointer2,
      color: "#FF2D55",
    },
    {
      title: "Explainer Systems",
      description:
        "Complex concepts simplified through engaging visual storytelling and data-driven motion graphics — for product launches, investor decks, and onboarding flows that actually get watched.",
      icon: Film,
      color: "#00FFA3",
    },
  ];

  const applications = [
    {
      title: "Website & Landing Pages",
      desc: "Scroll animations, hero sequences, and hover interactions that make first impressions count. The difference between a visitor who bounces and one who converts is often a single well-timed animation.",
    },
    {
      title: "Product UI & Onboarding",
      desc: "Micro-interactions, loading states, success animations, and empty state illustrations — the moments inside your product that build trust and reduce friction without the user noticing.",
    },
    {
      title: "Brand Videos & Reels",
      desc: "Logo animations, brand idents, social media reels, and launch videos — motion assets that work on LinkedIn, Instagram, Behance, and pitch decks simultaneously.",
    },
    {
      title: "Explainer & Demo Videos",
      desc: "Product walkthroughs, feature explainers, and investor-ready demo videos — turning complex functionality into a 90-second visual argument for why your product wins.",
    },
    {
      title: "Presentations & Pitch Decks",
      desc: "Animated slide transitions, data visualizations, and kinetic typography — so your next investor meeting doesn't look like a Google Slides template.",
    },
  ];

  const withoutMotion = [
    "Pages feel flat, corporate, and generic",
    "Users scroll past without engaging",
    "Complex products are hard to explain",
    "Brand identity doesn't translate across touchpoints",
    "Competitors with motion look more premium — regardless of quality",
  ];

  const withMotion = [
    "Interfaces feel alive, premium, and intentional",
    "Scroll depth and time-on-page increase measurably",
    "Product value is communicated in seconds, not paragraphs",
    "Brand character is consistent across web, app, and video",
    "Motion becomes a competitive moat that's hard to replicate",
  ];

  const faqs = [
    {
      q: "What's the difference between UI animation and brand motion?",
      a: "UI animation is functional — hover states, loading spinners, page transitions. Brand motion is expressive — logo reveals, hero sequences, brand films. We do both, and we make sure they feel like they came from the same place.",
    },
    {
      q: "Will animations slow down my website?",
      a: "Not with us. Every animation we produce is optimized for web performance — Lottie files for complex animations, CSS/GSAP for interactions, and WebM/MP4 for video. We test load impact before delivery and optimize until it's imperceptible.",
    },
    {
      q: "Do you animate for mobile as well as desktop?",
      a: "Yes. Every motion piece is reviewed at mobile breakpoints. Animations that feel cinematic on desktop and sluggish on mobile don't ship. We reduce complexity and adjust timing for smaller screens as a standard step.",
    },
    {
      q: "Can you animate an existing brand identity we already have?",
      a: "Yes. If your brand guidelines, logo, and color system are established, we build a motion language that extends them — not overrides them. We document every motion decision so your team can maintain consistency going forward.",
    },
    {
      q: "What do you deliver at the end of a motion project?",
      a: "Source files (After Effects, Spline, Figma), production-ready exports in all required formats (Lottie JSON, WebM, MP4, SVG), and a motion guideline document covering timing, easing curves, and usage rules — so the system can be extended by any future collaborator.",
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
                MOTION DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              KINETIC <br />
              <span className="stroke-text text-transparent italic opacity-40">
                ENERGY.
              </span>
            </h1>

            <p className="font-sans font-light text-lg  text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We define the soul of your brand through movement. From subtle
              micro-interactions to immersive 3D narratives — we engineer motion
              that captivates, converts, and leaves a mark.
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
                  Initiate Motion Study
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
              alt="Motion Graphics Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white"
              >
                <Play className="w-8 h-8 fill-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 02. Movement With Purpose */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              MOVEMENT WITH <br />
              <span className="italic text-[#6324FC]">PURPOSE.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Motion is not just decoration. It is a functional layer that
              directs attention, builds emotional resonance, and separates
              products that feel premium from products that feel plain.
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

        {/* 03. The Motion Arsenal */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                THE MOTION <br />
                <span className="italic text-[#6324FC]">ARSENAL.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We utilize the world&apos;s most advanced motion tools to
                deliver broadcast-quality animations for the digital age —
                chosen for the output required, not for personal preference.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    label: "High-End 3D",
                    val: "Spline / Blender",
                    desc: "Real-time 3D scenes, interactive product renders, and immersive web experiences — built for performance, not just aesthetics.",
                  },
                  {
                    label: "Web Motion",
                    val: "GSAP / Framer",
                    desc: "Scroll-triggered animations, page transitions, and interactive motion sequences — coded for 60fps performance and zero layout shift.",
                  },
                  {
                    label: "VFX",
                    val: "After Effects",
                    desc: "Broadcast-quality compositing, kinetic typography, and brand animation — rendered for web, social, and presentation formats.",
                  },
                  {
                    label: "UI Motion",
                    val: "Figma / Principle",
                    desc: "Prototype-level interaction design and UI animation specs — so developers build exactly what was designed, not an approximation.",
                  },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-2 group hover:border-[#6324FC]/30 transition-colors"
                  >
                    <div className="font-heading text-[9px] tracking-widest text-[#6324FC] capitalize">
                      {tool.label}
                    </div>
                    <div className="font-heading text-xl text-white capitalize">
                      {tool.val}
                    </div>
                    <p className="font-sans text-xs text-white/30 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden group flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <Camera className="w-6 h-6 text-[#6324FC]" />
                <div className="font-heading text-[8px] text-white/20 capitalize tracking-[0.3em]">
                  Frame 024 // 60FPS
                </div>
              </div>

              <div className="flex items-center justify-center flex-1">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-48 h-48 border border-dashed border-[#6324FC]/30 rounded-full flex items-center justify-center relative"
                >
                  <Sparkles className="w-12 h-12 text-[#6324FC] animate-pulse" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#6324FC] rounded-full shadow-[0_0_15px_rgba(99,36,252,0.8)]"
                  />
                </motion.div>
              </div>

              <div className="space-y-4">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-full w-1/3 bg-[#6324FC]"
                  />
                </div>
                <div className="flex justify-between font-heading text-[8px] text-white/40 capitalize">
                  <span>Rendering Engine</span>
                  <span>99.8% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04. Storyboard To Screen */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            STORYBOARD <span className="italic text-[#6324FC]">TO SCREEN.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Visual Narrative",
                desc: "Crafting a compelling storyboard that aligns with your brand message and user journey objectives. Every motion piece starts with a defined story — before a single frame is animated.",
              },
              {
                step: "02",
                title: "Motion Design",
                desc: "Iterative animation process where we refine the timing, easing, and physics of every moving element. Motion that feels natural is motion that was engineered — not guessed.",
              },
              {
                step: "03",
                title: "Optimization",
                desc: "Exporting for performance. Ensuring high-quality playback with minimal impact on web loading speeds — Lottie, WebM, MP4, and SVG animation formats, delivered ready for production.",
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

        {/* SECTION A — Where Motion Lives */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              MOTION APPLICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Every Surface. <br />
                <span className="italic text-[#6324FC]">Every Touchpoint.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                Motion isn&apos;t a single deliverable — it&apos;s a layer that
                lives across your entire product. Here&apos;s where we deploy
                it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-500 group space-y-4"
                >
                  <h3 className="font-heading text-2xl text-white group-hover:text-[#6324FC] transition-colors">
                    {app.title}
                  </h3>
                  <p className="font-sans font-light text-white/60 leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION B — Why Motion Converts */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              THE CASE FOR MOTION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Static Is <br />
                <span className="italic text-[#6324FC]">Forgettable.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                Motion isn&apos;t a luxury for brands that have already arrived.
                It&apos;s a competitive signal that tells your audience — before
                they read a single word — that your product is serious.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 - Without Motion */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-red-500/10 hover:border-red-500/20 transition-all duration-500">
                <h3 className="font-heading text-3xl text-red-500 mb-8 tracking-tight capitalize">
                  Without Motion
                </h3>
                <div className="space-y-6">
                  {withoutMotion.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      <p className="font-sans font-light text-white/50 leading-relaxed text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 - With Injaazh Motion */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-[#6324FC]/10 hover:border-[#6324FC]/30 transition-all duration-500">
                <h3 className="font-heading text-3xl text-[#00E5FF] mb-8 tracking-tight capitalize">
                  With Injaazh Motion
                </h3>
                <div className="space-y-6">
                  {withMotion.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-1" />
                      <p className="font-sans font-light text-white/70 leading-relaxed text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line Alert Banner */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 border border-[#6324FC]/20 text-center max-w-4xl mx-auto">
            <p className="font-sans font-light text-lg  text-white/80 leading-relaxed italic">
              &quot;Attention is the scarcest resource on the internet. Motion
              is how you hold it.&quot;
            </p>
          </div>
        </div>

        {/* SECTION C — Motion FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Motion <span className="italic text-[#6324FC]">FAQ.</span>
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
            IGNITE THE <span className="italic text-[#6324FC]">SOUL.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your brand to life? Let&apos;s engineer a motion
            strategy that leaves your competition standing still.
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
                START MOTION AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
