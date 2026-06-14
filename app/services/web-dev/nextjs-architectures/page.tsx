"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Cpu,
  Globe,
  Database,
  Server,
  ZapOff,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NextJsArchitecturesPage() {
  const features = [
    {
      title: "APP ROUTER & RSC",
      description:
        "We reduce client-side JavaScript by up to 80% using React Server Components and nested layouts — delivering pages that load instantly and scale without bloat.",
      icon: Cpu,
      color: "#6324FC",
    },
    {
      title: "EDGE RUNTIME",
      description:
        "Computation-heavy tasks are deployed to the edge — putting your logic closer to your users for sub-100ms global latency and instant response on every request.",
      icon: Globe,
      color: "#00E5FF",
    },
    {
      title: "OPTIMIZED CACHING",
      description:
        "Granular caching strategies using revalidateTag and revalidatePath ensure real-time content consistency without sacrificing performance.",
      icon: Database,
      color: "#FF2D55",
    },
    {
      title: "SECURITY SHIELDING",
      description:
        "Built-in protection against common vulnerabilities — XSS, CSRF, and injection attacks — with a secure-by-default headless architecture that never exposes your backend.",
      icon: Shield,
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">
                ARCHITECTURE DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              NEXT.JS <br />
              <span className="stroke-text text-transparent italic opacity-40">
                ARCHITECTURES.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t build websites — we engineer digital foundations.
              Every architecture we deploy is precision-built for speed,
              security, and the kind of global performance that compounds into
              market dominance.
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
                  CONSULT AN ARCHITECT
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
              alt="Architecture Concept"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>

        {/* 2. Technical Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              THE PILLARS OF{" "}
              <span className="italic text-[#6324FC]">MODERN SPEED.</span>
            </h2>
            <p className="font-heading text-[16px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              Every build follows our &quot;Performance-First&quot; protocol to
              ensure sub-second TTI and maximum crawl budget.
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

        {/* 3. The Comparison Grid */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                STANDARD DEV <br />
                <span className="italic text-[#6324FC]">VS. INJAAZH OPS.</span>
              </h2>

              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 opacity-30">
                    <ZapOff className="w-5 h-5 text-red-500" />
                    <span className="font-heading text-xl uppercase">
                      STANDARD WORDPRESS / LEGACY
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-red-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Zap className="w-5 h-5 text-[#6324FC]" />
                    <span className="font-heading text-xl uppercase">
                      INJAAZH NEXT.JS ARCHITECTURE
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-[#6324FC] shadow-[0_0_20px_rgba(99,36,252,0.5)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "TTI", val: "< 0.4s", sub: "TIME TO INTERACTIVE" },
                { label: "SEO SCORE", val: "100/100", sub: "LIGHTHOUSE AUDIT" },
                { label: "BUNDLE", val: "-80%", sub: "JS WEIGHT REDUCTION" },
                { label: "UPTIME", val: "99.9%", sub: "EDGE REDUNDANCY" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl text-center group hover:bg-[#6324FC]/5 transition-colors"
                >
                  <div className="font-heading text-4xl text-white mb-2 group-hover:text-[#6324FC] transition-colors">
                    {stat.val}
                  </div>
                  <div className="font-heading text-[9px] tracking-widest text-[#6324FC] uppercase mb-1">
                    {stat.label}
                  </div>
                  <div className="font-sans text-[10px] text-white/20 uppercase">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Strategic Flow */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            OUR ARCHITECTURAL{" "}
            <span className="italic text-[#6324FC]">WORKFLOW.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "SCHEMA ENGINEERING",
                desc: "We design type-safe content schemas that bridge the gap between your headless CMS and high-speed delivery layer — so every data structure is clean, predictable, and built to scale.",
              },
              {
                step: "02",
                title: "ATOMIC DEVELOPMENT",
                desc: "We build modular, reusable React Server Components optimized for zero-hydration and instant paint speeds. Every component is isolated, tested, and production-ready before it touches your codebase.",
              },
              {
                step: "03",
                title: "EDGE DEPLOYMENT",
                desc: "Your application logic is distributed across 300+ global edge locations — guaranteeing sub-100ms response times for users in the US, UK, Australia, and beyond, regardless of origin server location.",
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

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            READY TO <span className="italic text-[#6324FC]">ASCEND?</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can rebuild your digital infrastructure on
            a foundation built to last — and built to rank.
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
                START THE ARCHITECTURE ⚡
              </span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
