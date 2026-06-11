"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Shield, Globe, MousePointer2, BarChart, Eye, Microscope, Brain, Filter, Percent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ConversionOptimizationPage() {
  const features = [
    {
      title: "Scientific A/B Testing",
      description: "Executing data-driven experiments to identify the exact layout and copy that drives maximum user action.",
      icon: Microscope,
      color: "#6324FC"
    },
    {
      title: "Behavioral Psychology",
      description: "Leveraging cognitive biases and psychological triggers to eliminate friction and nudge users toward conversion.",
      icon: Brain,
      color: "#00E5FF"
    },
    {
      title: "Heatmap Analysis",
      description: "Visualizing exactly where your users click, scroll, and hesitate to identify and fix leakage points.",
      icon: Eye,
      color: "#FF2D55"
    },
    {
      title: "Funnel Engineering",
      description: "Redesigning checkout and lead-gen flows to ensure the absolute smoothest path from click to cash.",
      icon: Filter,
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Optimization Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              CONVERSION <br/>
              <span className="stroke-text text-transparent italic opacity-40">MASTERY.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t just drive traffic; we manufacture revenue. Our optimization strategies turn your existing visitors into loyal, high-value customers.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  MAXIMIZE YOUR ROI
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
              alt="Conversion Lab Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-8 left-8 p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
               <div className="font-mono text-[9px] text-[#00FFA3] mb-2 uppercase">Lifting Conversion By</div>
               <div className="font-heading text-5xl text-white">+42%</div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase max-w-xl">
              THE ART OF <span className="italic text-[#6324FC]">REVENUE GENERATION.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              Optimization is a science. We test, learn, and iterate until your user journey is mathematically perfect.
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

        {/* 3. A/B Testing Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <Microscope className="w-8 h-8 text-[#6324FC]" />
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">Testing Node // 0x7B</div>
                 </div>

                 <div className="flex-1 flex items-center gap-4">
                    <div className="flex-1 space-y-4">
                       <div className="font-mono text-[8px] text-white/20 uppercase">Variant A</div>
                       <div className="h-32 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                          <Percent className="w-6 h-6 text-white/10" />
                       </div>
                       <div className="font-heading text-2xl text-white/40">3.2%</div>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center">
                       <span className="font-heading text-xl text-[#6324FC]">VS</span>
                    </div>
                    <div className="flex-1 space-y-4">
                       <div className="font-mono text-[8px] text-[#00FFA3] uppercase">Variant B</div>
                       <div className="h-32 bg-[#00FFA3]/10 rounded-xl border border-[#00FFA3]/30 flex items-center justify-center relative">
                          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 bg-[#00FFA3] rounded-full" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-10">
                             <Zap className="w-12 h-12 text-[#00FFA3]" />
                          </div>
                       </div>
                       <div className="font-heading text-2xl text-[#00FFA3]">7.8%</div>
                    </div>
                 </div>

                 <div className="flex justify-between font-mono text-[9px] text-[#6324FC] uppercase tracking-widest">
                    <span>Winner Identified</span>
                    <span>Statistical Significance: 99%</span>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-12">
                  THE SCIENCE OF <br/>
                  <span className="italic text-[#00FFA3]">PROFIT.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   Small changes lead to massive revenue increases. We analyze every pixel, every word, and every micro-interaction to remove the barriers to your growth.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Friction Removal", desc: "Identifying and eliminating every unnecessary step in your checkout and signup flows." },
                     { label: "Social Proofing", desc: "Strategically placing authority signals to build instant trust with first-time visitors." },
                     { label: "Urgency Ops", desc: "Implementing ethical scarcity and urgency triggers to drive immediate action." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] mt-2 group-hover:scale-150 transition-transform" />
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
        <div className="py-16 md:py-24 border-b border-white/5">
           <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-24 text-center">
              THE OPTIMIZATION <span className="italic text-[#6324FC]">CYCLE.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Hypothesis", desc: "Using quantitative and qualitative data to identify the highest leverage testing opportunities on your site." },
                { step: "02", title: "Experiment", desc: "Designing and deploying split-tests to validate our theories and find the winning user experience." },
                { step: "03", title: "Deployment", desc: "Implementing the winners permanently while moving on to the next phase of the continuous growth cycle." }
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
            STOP LEAKING <span className="italic text-[#6324FC]">REVENUE.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Your traffic is expensive. Don&apos;t waste it. Let&apos;s build a conversion engine that extracts maximum value from every single visitor.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            START CONVERSION AUDIT ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
