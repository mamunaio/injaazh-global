"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Zap,
  Shield,
  Globe,
  Eye,
  MousePointer2,
  UserCheck,
  Layers,
  ClipboardCheck,
  Activity,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UXAuditsPage() {
  const features = [
    {
      title: "Heuristic Evaluation",
      description:
        "Analyzing your interface against the 10 core principles of interaction design to find hidden friction points.",
      icon: Eye,
      color: "#6324FC",
    },
    {
      title: "Accessibility Compliance",
      description:
        "Ensuring your digital product meets WCAG standards and is inclusive for all users, regardless of ability.",
      icon: UserCheck,
      color: "#00E5FF",
    },
    {
      title: "User Journey Mapping",
      description:
        "Visualizing the entire customer path to identify and eliminate barriers to conversion and satisfaction.",
      icon: Layers,
      color: "#FF2D55",
    },
    {
      title: "Performance UX",
      description:
        "Measuring the psychological impact of page load speeds and interaction latency on your user retention.",
      icon: Activity,
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
              <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">
                Experience Division
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              UX <br />
              <span className="stroke-text text-transparent italic opacity-40">
                AUDITS.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We audit for empathy. Our UX experts deconstruct your product to
              reveal the hidden frustrations preventing your users from falling
              in love with your brand.
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
                  INITIATE UX AUDIT
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
              alt="UX Audit Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <ClipboardCheck className="w-20 h-20 text-white mb-4 animate-pulse" />
              <div className="font-heading  text-[10px] tracking-[0.5em] text-white/60 capitalize ">
                Empathy Scanned
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              ELIMINATING{" "}
              <span className="italic text-[#6324FC]">FRICTION.</span>
            </h2>
            <p className="font-heading  text-[16px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              A great user experience is invisible. We find the visible problems
              and turn them into seamless interactions.
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

        {/* 3. User Flow Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <MousePointer2 className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading  text-[9px] text-white/20 capitalize tracking-[0.3em]">
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
                    <div className="font-heading text-2xl text-white capitalize ">
                      {item.label}
                    </div>
                    <div
                      className={`font-heading  text-[10px] tracking-widest capitalize ${typeof item.color === "string" && item.color.startsWith("text") ? item.color : ""}`}
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

              <div className="flex justify-between font-heading  text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Empathy Engine</span>
                <span>99% Satisfaction Target</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                USER-CENTRIC <br />
                <span className="italic text-[#6324FC]">PRECISION.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We look at your product through the eyes of your users. Our
                audits identify not just what is broken, but why users feel the
                way they do.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Pain Point Discovery",
                    desc: "Pinpointing the exact moments when users feel frustrated or confused.",
                  },
                  {
                    label: "Retention Strategy",
                    desc: "Building the interaction hooks that keep users coming back for more.",
                  },
                  {
                    label: "Cross-Device Audit",
                    desc: "Ensuring your experience is flawless from the smallest mobile screen to the largest monitor.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize ">
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
                desc: "Deep-diving into every screen and interaction to map out the current state of your user experience.",
              },
              {
                step: "02",
                title: "Analysis",
                desc: "Synthesizing our findings into a prioritized roadmap of design and technical improvements.",
              },
              {
                step: "03",
                title: "Evolution",
                desc: "Providing the high-fidelity prototypes and specs needed to execute the transformation.",
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

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            DESIGN FOR <span className="italic text-[#6324FC]">DELIGHT.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to fix the friction? Let&apos;s run a surgical UX audit and
            build an experience that your users will never want to leave.
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
                START UX AUDIT ⚡
              </span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
