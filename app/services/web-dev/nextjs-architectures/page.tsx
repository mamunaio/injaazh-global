"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Cpu, Globe, Database, Server, ZapOff, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NextJsArchitecturesPage() {
  const features = [
    {
      title: "App Router & RSC",
      description: "Reducing client-side JavaScript by up to 80% with React Server Components and nested layouts.",
      icon: Cpu,
      color: "#6324FC"
    },
    {
      title: "Edge Runtime",
      description: "Deploying computation-heavy tasks to the edge for sub-100ms global latency and instant response.",
      icon: Globe,
      color: "#00E5FF"
    },
    {
      title: "Optimized Caching",
      description: "Granular caching strategies using revalidateTag and revalidatePath for real-time consistency.",
      icon: Database,
      color: "#FF2D55"
    },
    {
      title: "Security Shielding",
      description: "Built-in protection against common vulnerabilities with a secure-by-default headless architecture.",
      icon: Shield,
      color: "#00FFA3"
    }
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
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Architecture Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              NEXT.JS <br/>
              <span className="stroke-text text-transparent italic opacity-40">ARCHITECTURES.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t build websites; we engineer digital foundations. Our architectures are optimized for speed, security, and global market dominance.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  CONSULT AN ARCHITECT
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-500" />
              </Link>
            </motion.div>
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
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase max-w-xl">
              THE PILLARS OF <span className="italic text-[#6324FC]">MODERN SPEED.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              Every build follows our &quot;Performance-First&quot; protocol to ensure sub-second TTI and maximum crawl budget.
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
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                  <f.icon className="w-8 h-8" style={{ color: f.color }} />
                </div>
                <h3 className="font-heading text-2xl text-white mb-4 uppercase">{f.title}</h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. The Comparison Grid */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-12">
                  STANDARD DEV <br/>
                  <span className="italic text-[#6324FC]">VS. INJAAZH OPS.</span>
                </h2>
                
                <div className="space-y-12">
                   <div className="space-y-6">
                      <div className="flex items-center gap-4 opacity-30">
                         <ZapOff className="w-5 h-5 text-red-500" />
                         <span className="font-heading text-xl uppercase">Standard WordPress / Legacy</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} transition={{ duration: 1.5 }} className="h-full bg-red-500/50" />
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="flex items-center gap-4">
                         <Zap className="w-5 h-5 text-[#6324FC]" />
                         <span className="font-heading text-xl uppercase">Injaazh Next.js Architecture</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: "99%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-[#6324FC] shadow-[0_0_20px_rgba(99,36,252,0.5)]" />
                      </div>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: "TTI", val: "< 0.4s", sub: "Time to Interactive" },
                   { label: "SEO Score", val: "100/100", sub: "Lighthouse Audit" },
                   { label: "Bundle", val: "-80%", sub: "JS Weight Reduction" },
                   { label: "Uptime", val: "99.9%", sub: "Edge Redundancy" }
                 ].map((stat, i) => (
                   <div key={i} className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl text-center group hover:bg-[#6324FC]/5 transition-colors">
                      <div className="font-heading text-4xl text-white mb-2 group-hover:text-[#6324FC] transition-colors">{stat.val}</div>
                      <div className="font-mono text-[9px] tracking-widest text-[#6324FC] uppercase mb-1">{stat.label}</div>
                      <div className="font-sans text-[10px] text-white/20 uppercase">{stat.sub}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 4. Strategic Flow */}
        <div className="py-16 md:py-24 border-b border-white/5">
           <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-24 text-center">
              OUR ARCHITECTURAL <span className="italic text-[#6324FC]">WORKFLOW.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Schema Engineering", desc: "We design type-safe content schemas that bridge the gap between headless CMS and high-speed delivery." },
                { step: "02", title: "Atomic Development", desc: "Building modular, reusable server components that optimize for zero-hydration and instant paint speeds." },
                { step: "03", title: "Edge Deployment", desc: "Distributing your logic across 300+ global edge locations to ensure sub-100ms response times anywhere." }
              ].map((s, i) => (
                <div key={i} className="relative group">
                   <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">{s.step}</div>
                   <div className="relative z-10 pt-12 space-y-6">
                      <h3 className="font-heading text-3xl text-white uppercase">{s.title}</h3>
                      <p className="font-sans font-light text-xl text-white/40 leading-relaxed border-l border-white/10 pl-8 group-hover:border-[#6324FC] transition-colors">
                        {s.desc}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-12">
            READY TO <span className="italic text-[#6324FC]">ASCEND?</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can rebuild your digital infrastructure on a foundation that lasts.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            START THE ARCHITECTURE ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
