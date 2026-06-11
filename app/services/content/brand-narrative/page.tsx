"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Heart, MessageSquare, Flame, Star, Target, Compass, Anchor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BrandNarrativePage() {
  const features = [
    {
      title: "Origin Stories",
      description: "Defining the unique &quot;Why&quot; behind your brand and crafting a compelling journey from inception to industry leader.",
      icon: Anchor,
      color: "#6324FC"
    },
    {
      title: "Tone of Voice",
      description: "Developing a distinct verbal personality that cuts through the noise and resonates with your specific audience.",
      icon: MessageSquare,
      color: "#00E5FF"
    },
    {
      title: "Emotional Mapping",
      description: "Identifying the core emotional triggers that drive loyalty and building a narrative around them.",
      icon: Heart,
      color: "#FF2D55"
    },
    {
      title: "Mission Alignment",
      description: "Ensuring your brand mission isn&apos;t just a paragraph, but a living story that inspires both customers and employees.",
      icon: Compass,
      color: "#00FFA3"
    }
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
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Story Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              BRAND <br/>
              <span className="stroke-text text-transparent italic opacity-40">NARRATIVE.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t just tell stories; we build worlds. Our brand narratives define the emotional infrastructure that connects you to your audience.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  CRAFT YOUR STORY
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

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase max-w-xl">
              THE SOUL OF <span className="italic text-[#6324FC]">THE MACHINE.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              A product can be copied. A story is yours alone. We help you find and amplify the human element in your business.
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

        {/* 3. Emotional Journey Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between group">
                 <div className="flex justify-between items-start">
                    <Target className="w-8 h-8 text-[#FF2D55]" />
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">Emotional Resonance // v1.2</div>
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
                          <div className="font-heading text-2xl text-white uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">EMPATHY MAP</div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-center">
                          <div className="font-mono text-[8px] text-[#00E5FF] uppercase mb-1">Trust Index</div>
                          <div className="font-heading text-2xl text-white">94%</div>
                       </div>
                       <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-center">
                          <div className="font-mono text-[8px] text-[#FF2D55] uppercase mb-1">Relatability</div>
                          <div className="font-heading text-2xl text-white">88%</div>
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-between font-mono text-[9px] text-[#FF2D55] uppercase tracking-widest">
                    <span>Story Protocol</span>
                    <span>Resonance Sync Active</span>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-12">
                  BEYOND THE <br/>
                  <span className="italic text-[#FF2D55]">PRODUCT.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   We help you find the story only you can tell. Our process extracts the authentic truth of your brand and translates it into a narrative that compels action.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Archetype Definition", desc: "Aligning your brand with universal human archetypes for instant familiarity and trust." },
                     { label: "Conflict & Resolution", desc: "Framing your customer journey as a heroic narrative where your product is the guide." },
                     { label: "Legacy Engineering", desc: "Building a story that doesn&apos;t just sell today, but builds a brand for the next century." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] mt-2 group-hover:scale-150 transition-transform" />
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
              THE STORY <span className="italic text-[#6324FC]">ARCHITECTURE.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Excavation", desc: "Diving deep into your history, values, and vision to find the core truths that make your brand unique." },
                { step: "02", title: "Weaving", desc: "Connecting those truths into a cohesive, multi-layered narrative that works across every platform." },
                { step: "03", title: "Resonance", desc: "Testing and refining the narrative to ensure it lands with maximum impact on your target audience." }
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
            TELL THE <span className="italic text-[#6324FC]">UNFORGETTABLE.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop being a commodity and start being a character? Let&apos;s architect a brand narrative that defines your category.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            INITIATE STORY STUDY ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
