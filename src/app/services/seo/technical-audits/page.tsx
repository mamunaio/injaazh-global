"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Zap, Shield, Globe, BarChart3, Binary, Eye, Database, FileSearch, PieChart, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechnicalAuditsPage() {
  const features = [
    {
      title: "Core Web Vitals",
      description: "Surgical optimization of LCP, FID, and CLS to ensure your site meets Google&apos;s highest performance standards.",
      icon: Activity,
      color: "#6324FC"
    },
    {
      title: "Semantic Architecture",
      description: "Structuring your data and HTML to ensure search engines perfectly understand your content hierarchy.",
      icon: Binary,
      color: "#00E5FF"
    },
    {
      title: "Crawl Budget Ops",
      description: "Optimizing your site structure so bots can index your most valuable pages faster and more efficiently.",
      icon: FileSearch,
      color: "#FF2D55"
    },
    {
      title: "Global Visibility",
      description: "Ensuring your international SEO setup (Hreflang, CDN) is flawless for worldwide market dominance.",
      icon: Globe,
      color: "#00FFA3"
    }
  ];

  return (
    <main className="bg-[#060608] min-h-screen pt-32 lg:pt-48 pb-32 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center mb-48">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Intelligence Division</span>
            </motion.div>
            
            <h1 className="font-heading text-8xl md:text-[9vw] leading-[0.85] tracking-tighter text-white uppercase mb-16">
              TECHNICAL <br/>
              <span className="stroke-text text-transparent italic opacity-40">AUDITS.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t just look at keywords. We look at code. Our technical audits reveal the hidden barriers preventing your site from absolute search dominance.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  INITIATE AUDIT
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
              alt="Technical SEO Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#060608]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-8 left-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
               <div className="font-mono text-[9px] text-[#00E5FF] mb-2 uppercase">Crawler Status</div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="font-heading text-xl text-white">OPTIMIZED</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-6xl text-white uppercase tracking-tighter max-w-xl">
              PRECISION <span className="italic text-[#6324FC]">REVEALED.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              Our audit process covers over 200+ technical data points that impact your organic visibility and user retention.
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

        {/* 3. Audit Dashboard Visualization */}
        <div className="mb-48 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <BarChart3 className="w-8 h-8 text-[#6324FC]" />
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">Analysis Node // 0x42</div>
                 </div>

                 <div className="space-y-12 flex-1 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-8">
                       {[
                         { label: "Indexing", val: "98.4%", color: "text-[#00E5FF]" },
                         { label: "Performance", val: "100/100", color: "text-[#6324FC]" },
                         { label: "Semantic", val: "Perfect", color: "text-[#00FFA3]" },
                         { label: "Security", val: "Shielded", color: "text-[#FF2D55]" }
                       ].map((stat, i) => (
                         <div key={i} className="space-y-2">
                            <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">{stat.label}</div>
                            <div className={`font-heading text-4xl ${stat.color}`}>{stat.val}</div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="h-20 w-full bg-white/[0.02] border border-white/5 rounded-xl flex items-end gap-1 p-4">
                       {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
                         <motion.div 
                           key={i}
                           initial={{ height: 0 }}
                           whileInView={{ height: `${h}%` }}
                           className="flex-1 bg-[#6324FC]/30 rounded-t-sm"
                         />
                       ))}
                    </div>
                 </div>

                 <div className="flex justify-between font-mono text-[9px] text-[#6324FC] uppercase tracking-widest">
                    <span>Neural Scan</span>
                    <span>Continuous Audit Active</span>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-none mb-12">
                  DATA OVER <br/>
                  <span className="italic text-[#00E5FF]">GUESSWORK.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   We use enterprise-grade crawling technology to simulate how Google sees your site, identifying every friction point in the user journey.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Site Depth", desc: "Ensuring no important content is more than 3 clicks away from the homepage." },
                     { label: "Schema Validation", desc: "Implementing rich snippets to dominate search results real estate." },
                     { label: "Speed Protocol", desc: "Eliminating render-blocking resources and optimizing asset delivery pipelines." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 group-hover:scale-150 transition-transform" />
                        <div className="space-y-1">
                           <div className="font-heading text-2xl text-white uppercase">{item.label}</div>
                           <p className="font-sans font-light text-sm text-white/30">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>

        {/* 4. Strategic Flow */}
        <div className="mb-48">
           <h2 className="font-heading text-6xl text-white uppercase tracking-tighter mb-24 text-center">
              THE AUDIT <span className="italic text-[#6324FC]">PROTOCOL.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Full Crawl", desc: "Executing a deep-scan of your entire domain to map out architecture and identify all 4xx/5xx errors." },
                { step: "02", title: "Data Analysis", desc: "Cross-referencing crawl data with Google Search Console and Analytics to prioritize high-impact fixes." },
                { step: "03", title: "Execution Plan", desc: "Providing a surgical roadmap for your engineering team to eliminate technical debt and boost rankings." }
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
        <div className="text-center py-24 border-t border-white/5">
          <h2 className="font-heading text-7xl md:text-8xl text-white tracking-tighter uppercase mb-12">
            VISIBLE <span className="italic text-[#6324FC]">DOMINANCE.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to fix the foundation? Let&apos;s run a surgical audit and unlock your site&apos;s true organic potential.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            START TECHNICAL AUDIT ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
