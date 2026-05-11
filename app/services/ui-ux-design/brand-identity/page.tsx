"use client";

import { motion } from "framer-motion";
import { ArrowRight, Paintbrush, Target, Heart, Sparkles, PenTool, Type, Palette, Layout, Globe, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BrandIdentityPage() {
  const features = [
    {
      title: "Visual Systems",
      description: "Developing comprehensive design languages that maintain consistency across every digital and physical touchpoint.",
      icon: Layout,
      color: "#6324FC"
    },
    {
      title: "Luxury Typography",
      description: "Custom font selection and typesetting that communicates authority, elegance, and modern sophistication.",
      icon: Type,
      color: "#00E5FF"
    },
    {
      title: "Color Strategy",
      description: "Scientifically backed color palettes designed to evoke specific emotions and drive user action.",
      icon: Palette,
      color: "#FF2D55"
    },
    {
      title: "Global Positioning",
      description: "Strategic branding that resonates with US, UK, and Australian markets while maintaining a global appeal.",
      icon: Globe,
      color: "#00FFA3"
    }
  ];

  return (
    <main className="bg-[#060608] min-h-screen pt-32 lg:pt-48 pb-32 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
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
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Creative Division</span>
            </motion.div>
            
            <h1 className="font-heading text-8xl md:text-[9vw] leading-[0.85] tracking-tighter text-white uppercase mb-16">
              BRAND <br/>
              <span className="stroke-text text-transparent italic opacity-40">IDENTITY.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don&apos;t just design logos; we architect visual legacies. Our branding systems are engineered to dominate attention and command premium value.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  INITIATE BRAND DESIGN
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
              alt="Brand Identity Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-6xl text-white uppercase tracking-tighter max-w-xl">
              CRAFTING <span className="italic text-[#6324FC]">VISUAL AUTHORITY.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              A premium brand is built on consistency, precision, and a deep understanding of market psychology.
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

        {/* 3. Style Guide Visualization */}
        <div className="mb-48 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative">
           <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="font-heading text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-none">
                  BEYOND THE <br/>
                  <span className="italic text-[#6324FC]">LOGO.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 leading-relaxed max-w-xl">
                   We deliver full-scale brand books that define your voice, your motion, and your soul.
                </p>

                <div className="grid grid-cols-2 gap-8">
                   {[
                     { label: "Core Colors", colors: ["bg-black", "bg-[#6324FC]", "bg-white"] },
                     { label: "Typography", font: "font-heading", desc: "Bold & Dominant" },
                     { label: "Iconography", icon: Star, desc: "Surgical Precision" },
                     { label: "Voice", text: "Premium / Bold", desc: "Market Authority" }
                   ].map((spec, i) => (
                     <div key={i} className="space-y-4">
                        <div className="font-mono text-[9px] tracking-widest text-[#6324FC] uppercase">{spec.label}</div>
                        {spec.colors ? (
                          <div className="flex gap-2">
                             {spec.colors.map((c, ci) => <div key={ci} className={`w-8 h-8 rounded-full border border-white/10 ${c}`} />)}
                          </div>
                        ) : spec.font ? (
                          <div className={`${spec.font} text-2xl text-white`}>ABC</div>
                        ) : spec.icon ? (
                           <spec.icon className="w-8 h-8 text-white" />
                        ) : (
                          <div className="font-sans text-sm text-white/60">{spec.text}</div>
                        )}
                        <div className="font-sans text-[10px] text-white/20 uppercase tracking-widest">{spec.desc}</div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                 <Image 
                   src="/assets/scalia_app_final.webp" 
                   alt="Brand Book Mockup" 
                   fill 
                   className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              </div>
           </div>
        </div>

        {/* 4. Strategic Process */}
        <div className="mb-48">
           <h2 className="font-heading text-6xl text-white uppercase tracking-tighter mb-24 text-center">
              THE BRAND <span className="italic text-[#6324FC]">ARCHAEOLOGY.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Analysis", desc: "Deep-diving into your market competitors and target audience psychology to find your unique positioning gap." },
                { step: "02", title: "Concepting", desc: "Developing multiple visual directions that align with your core mission and evoke the right emotional response." },
                { step: "03", title: "Guideline", desc: "Finalizing your brand book, including color usage, typography, and verbal tone guidelines for global consistency." }
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
            LEAVE A <span className="italic text-[#6324FC]">LEGACY.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop blending in? Let&apos;s build a brand identity that commands attention and defines its own category.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            START BRAND DISCOVERY ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
