"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Globe, Cpu, Network, Workflow, MessageSquare, Database, Terminal, Settings, Cog, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GrowthAutomationPage() {
  const features = [
    {
      title: "Autonomous Funnels",
      description: "Engineering self-optimizing marketing funnels that nurture leads and close sales while you sleep.",
      icon: Network,
      color: "#6324FC"
    },
    {
      title: "CRM Intelligence",
      description: "Deep integration with Salesforce, HubSpot, and Pipedrive to ensure absolute data transparency.",
      icon: Database,
      color: "#00E5FF"
    },
    {
      title: "Email Workflows",
      description: "Hyper-personalized, behavior-triggered email sequences that drive 4x higher engagement rates.",
      icon: MessageSquare,
      color: "#FF2D55"
    },
    {
      title: "Lead Scoring",
      description: "AI-driven algorithms that identify your most valuable prospects based on real-time behavioral data.",
      icon: Cpu,
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
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Automation Division</span>
            </motion.div>
            
            <h1 className="font-heading text-8xl md:text-[9vw] leading-[0.85] tracking-tighter text-white uppercase mb-16">
              GROWTH <br/>
              <span className="stroke-text text-transparent italic opacity-40">AUTOMATION.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We eliminate human error from your growth engine. Our automation systems ensure every lead is captured, nurtured, and converted with algorithmic precision.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  AUTOMATE YOUR GROWTH
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
              alt="Growth Automation Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#0A0A0C]/60 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            
            {/* Animated Nodes Overlay */}
            <div className="absolute inset-0 p-12 flex items-center justify-center">
               <div className="relative w-full h-full border border-dashed border-white/10 rounded-full flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#6324FC] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,36,252,0.5)]">
                        <Workflow className="w-5 h-5 text-white" />
                     </div>
                  </motion.div>
                  <div className="text-center">
                     <Cpu className="w-16 h-16 text-[#6324FC] mx-auto mb-4 animate-pulse" />
                     <div className="font-heading text-4xl text-white tracking-tighter">AI CORE</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-6xl text-white uppercase tracking-tighter max-w-xl">
              SYSTEMS THAT <span className="italic text-[#6324FC]">NEVER SLEEP.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              Efficiency is the ultimate competitive advantage. We build the systems that allow your team to focus on strategy, not repetitive tasks.
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

        {/* 3. Workflow Engine Visualization */}
        <div className="mb-48 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="font-heading text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-none mb-12">
                  THE ENGINE <br/>
                  <span className="italic text-[#6324FC]">ROOM.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   We connect your entire tech stack into a unified, high-performance growth machine using the world&apos;s most advanced automation platforms.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {["Zapier Enterprise", "Make.com (Integromat)", "ActiveCampaign", "HubSpot Ops Hub", "n8n", "Segment"].map((item, i) => (
                     <div key={i} className="px-6 py-4 bg-white/[0.03] border border-white/5 rounded-xl font-mono text-[10px] tracking-widest text-white/60 uppercase flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#6324FC]" />
                        {item}
                     </div>
                   ))}
                </div>
              </div>

              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <Terminal className="w-8 h-8 text-[#6324FC]" />
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">System Flow // 0xAF</div>
                 </div>

                 <div className="flex-1 flex flex-col justify-center space-y-6">
                    {[
                      { label: "Lead Ingestion", status: "Active", val: "2.4k/hr" },
                      { label: "Data Enrichment", status: "Enriching", val: "99.2% Sync" },
                      { label: "CRM Syncing", status: "Operational", val: "Instant" }
                    ].map((node, i) => (
                      <div key={i} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex justify-between items-center group hover:border-[#6324FC]/30 transition-colors">
                         <div className="space-y-1">
                            <div className="font-heading text-xl text-white uppercase">{node.label}</div>
                            <div className="font-mono text-[9px] text-[#00E5FF] uppercase tracking-widest">{node.status}</div>
                         </div>
                         <div className="font-heading text-2xl text-white">{node.val}</div>
                      </div>
                    ))}
                 </div>

                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                      className="h-full w-1/4 bg-[#6324FC]" 
                    />
                 </div>
              </div>
           </div>
        </div>

        {/* 4. Strategic Flow */}
        <div className="mb-48">
           <h2 className="font-heading text-6xl text-white uppercase tracking-tighter mb-24 text-center">
              THE AUTOMATION <span className="italic text-[#6324FC]">ROADMAP.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Stack Audit", desc: "Identifying friction points and repetitive tasks within your current marketing and sales infrastructure." },
                { step: "02", title: "Logic Design", desc: "Mapping out complex conditional workflows that handle lead routing, nurturing, and data synchronization." },
                { step: "03", title: "Autonomous Ops", desc: "Deploying and monitoring self-correcting systems that scale your growth with minimal human intervention." }
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
            FREE THE <span className="italic text-[#6324FC]">ENGINE.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop doing the work and start managing the system? Let&apos;s build an automation engine that scales your brand effortlessly.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            INITIATE AUTOMATION STUDY ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
