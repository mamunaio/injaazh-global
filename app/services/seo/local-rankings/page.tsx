"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Search, Zap, Shield, Globe, Navigation, Star, Users, PhoneCall, Building2, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LocalRankingsPage() {
  const features = [
    {
      title: "GMB Dominance",
      description: "Optimizing your Google Business Profile to ensure you rank #1 in the local map pack for high-intent searches.",
      icon: MapPin,
      color: "#6324FC"
    },
    {
      title: "Geo-Targeted Content",
      description: "Crafting location-specific landing pages that resonate with local audiences and satisfy geo-intent.",
      icon: Navigation,
      color: "#00E5FF"
    },
    {
      title: "Citation Engineering",
      description: "Building consistent and authoritative local citations across the web to solidify your business authority.",
      icon: Building2,
      color: "#FF2D55"
    },
    {
      title: "Reputation Velocity",
      description: "Implementing automated systems to gather and manage high-quality local reviews that build trust.",
      icon: Star,
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
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Regional Division</span>
            </motion.div>
            
            <h1 className="font-heading text-8xl md:text-[9vw] leading-[0.85] tracking-tighter text-white uppercase mb-16">
              LOCAL <br/>
              <span className="stroke-text text-transparent italic opacity-40">RANKINGS.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We dominate the neighborhood. Our local SEO strategies ensure that when customers search for your services nearby, you are the only choice they see.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  DOMINATE LOCALLY
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
              alt="Local SEO Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-8 right-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
               <div className="font-mono text-[9px] text-[#6324FC] mb-2 uppercase">Market Share</div>
               <div className="font-heading text-4xl text-white">84% <span className="text-xs text-[#00FFA3] tracking-normal font-sans">↑</span></div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-6xl text-white uppercase tracking-tighter max-w-xl">
              HYPER-LOCAL <span className="italic text-[#6324FC]">AUTHORITY.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              Local search is about proximity, relevance, and prominence. We optimize all three to put you on the map.
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

        {/* 3. Map Pack Visualization */}
        <div className="mb-48 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <Map className="w-8 h-8 text-[#00E5FF]" />
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">Map Radius // 50KM</div>
                 </div>

                 <div className="flex-1 flex flex-col justify-center space-y-6">
                    {[
                      { name: "Your Business", rank: "#1", active: true },
                      { name: "Competitor A", rank: "#4", active: false },
                      { name: "Competitor B", rank: "#9", active: false }
                    ].map((biz, i) => (
                      <div key={i} className={`p-6 rounded-2xl border transition-all duration-500 ${biz.active ? 'bg-[#6324FC]/10 border-[#6324FC]/30' : 'bg-white/[0.02] border-white/5 opacity-40'}`}>
                         <div className="flex justify-between items-center">
                            <div className="space-y-1">
                               <div className="font-heading text-xl text-white uppercase">{biz.name}</div>
                               <div className="flex items-center gap-1">
                                  {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 text-[#00FFA3] fill-[#00FFA3]" />)}
                                  <span className="font-mono text-[8px] text-white/20 ml-2">482 Reviews</span>
                               </div>
                            </div>
                            <div className={`font-heading text-3xl ${biz.active ? 'text-[#6324FC]' : 'text-white/20'}`}>{biz.rank}</div>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="flex justify-between font-mono text-[9px] text-[#00E5FF] uppercase tracking-widest">
                    <span>Proximity Optimization</span>
                    <span>Geo-Shield Active</span>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-none mb-12">
                  BE THE ONLY <br/>
                  <span className="italic text-[#00E5FF]">CHOICE.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   When local intent peaks, we ensure your business is the most prominent, relevant, and trusted option on the screen.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Mobile First", desc: "Optimizing for the &quot;Near Me&quot; generation who search while on the move." },
                     { label: "Voice Search", desc: "Structuring content for Siri, Alexa, and Google Assistant local queries." },
                     { label: "High Conversion", desc: "Driving direct actions: calls, directions, and website visits." }
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
              THE LOCAL <span className="italic text-[#6324FC]">BLUEPRINT.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Map Audit", desc: "Analyzing your current map presence and identifying inconsistencies in NAP (Name, Address, Phone) data." },
                { step: "02", title: "Citation Blast", desc: "Synchronizing your business data across premium directories and local map engines for maximum authority." },
                { step: "03", title: "Review Loop", desc: "Implementing a continuous feedback system that boosts your reputation and ranking prominence." }
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
            OWN THE <span className="italic text-[#6324FC]">STREET.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to become the local market leader? Let&apos;s put your business on the map and drive more high-intent traffic to your door.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            DOMINATE MAP PACKS ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
