"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenTool, Zap, Shield, Globe, BookOpen, Quote, Feather, Newspaper, AlignLeft, Search, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EditorialWritingPage() {
  const features = [
    {
      title: "Thought Leadership",
      description: "Crafting industry-defining articles that position your executives as the primary authorities in your sector.",
      icon: Feather,
      color: "#6324FC"
    },
    {
      title: "Industry Reports",
      description: "Data-driven editorial reports that provide deep insights and become the standard reference for your market.",
      icon: Newspaper,
      color: "#00E5FF"
    },
    {
      title: "Brand Narratives",
      description: "Engineering cohesive, high-impact stories that define your mission and resonate with global audiences.",
      icon: AlignLeft,
      color: "#FF2D55"
    },
    {
      title: "Strategic Whitepapers",
      description: "Complex technical concepts translated into compelling narratives that drive enterprise-level trust.",
      icon: BookOpen,
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
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Editorial Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              EDITORIAL <br/>
              <span className="stroke-text text-transparent italic opacity-40">WRITING.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We define the conversation. Our editorial team engineers authoritative content that dictates market trends and builds absolute brand trust.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  DEFINE YOUR VOICE
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
              alt="Editorial Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#060608]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
               <Quote className="w-12 h-12 text-[#6324FC] mb-6 opacity-30" />
               <div className="font-heading text-4xl text-white tracking-tighter italic leading-none max-w-xs">
                  WORDS ARE THE <br/>INFRASTRUCTURE <br/>OF TRUST.
               </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase max-w-xl">
              CRAFTING <span className="italic text-[#6324FC]">AUTHORITY.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              Content is not just noise. It is the tactical deployment of ideas that capture and hold global attention.
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

        {/* 3. Editorial Layout Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
                 <div className="flex justify-between items-start">
                    <Newspaper className="w-8 h-8 text-[#6324FC]" />
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">Issue 024 // Strategic Narrative</div>
                 </div>

                 <div className="space-y-6 flex-1 flex flex-col justify-center">
                    <div className="space-y-2">
                       <div className="h-2 w-full bg-white/10 rounded-full" />
                       <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                       <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                    </div>
                    
                    <div className="p-8 bg-[#6324FC]/5 border border-[#6324FC]/20 rounded-2xl relative overflow-hidden">
                       <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className="absolute inset-0 bg-[#6324FC]/10" />
                       <div className="relative z-10 space-y-4">
                          <div className="font-heading text-2xl text-white uppercase italic">Modern Hegemony.</div>
                          <p className="font-sans text-[10px] text-white/40 leading-relaxed">
                             In an era of digital noise, silence is authority. We craft the narratives that command the space between the screams.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="flex-1 h-20 bg-white/[0.02] rounded-xl border border-white/5" />
                       <div className="flex-1 h-20 bg-white/[0.02] rounded-xl border border-white/5" />
                    </div>
                 </div>

                 <div className="flex justify-between font-mono text-[9px] text-[#6324FC] uppercase tracking-widest">
                    <span>Editorial Engine</span>
                    <span>Tone Consensus: High</span>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-12">
                  THE ART OF <br/>
                  <span className="italic text-[#6324FC]">NARRATIVE.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   We translate your technical complexity into compelling human stories. Our writing is designed for resonance, retention, and results.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Semantic Flow", desc: "Engineering sentences that are as beautiful to read as they are easy for bots to index." },
                     { label: "Authority Bias", desc: "Using high-level diction and strategic positioning to build instant intellectual trust." },
                     { label: "Viral Longevity", desc: "Creating evergreen assets that continue to drive traffic and trust for years." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC] mt-2 group-hover:scale-150 transition-transform" />
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
              THE EDITORIAL <span className="italic text-[#6324FC]">PROTOCOL.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Intel Gathering", desc: "Deep-diving into your industry data and internal insights to find the unique angle that nobody else is talking about." },
                { step: "02", title: "Narrative Build", desc: "Constructing the editorial framework and drafting high-impact content that aligns with your brand voice." },
                { step: "03", title: "Market Launch", desc: "Optimizing for search and social sharing to ensure your ideas reach the exact people who need to see them." }
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
            COMMAND THE <span className="italic text-[#6324FC]">SPACE.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to lead the industry conversation? Let&apos;s build an editorial strategy that positions your brand as the absolute standard.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            START EDITORIAL STUDY ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
