"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Shield, Globe, Settings, Terminal, Layers, Box, Monitor, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CustomWebAppsPage() {
  const features = [
    {
      title: "Bespoke SaaS Engines",
      description: "Engineering scalable, multi-tenant software platforms designed for global market penetration.",
      icon: Box,
      color: "#6324FC"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom internal tools, CRM, and ERP systems that streamline complex business operations.",
      icon: Terminal,
      color: "#00E5FF"
    },
    {
      title: "Real-time Systems",
      description: "High-performance applications featuring WebSocket integration for instant data synchronization.",
      icon: Activity,
      color: "#FF2D55"
    },
    {
      title: "Cloud-Native Ops",
      description: "Serverless and microservices-based architectures that scale horizontally with zero downtime.",
      icon: Globe,
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
              <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">Software Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              CUSTOM <br/>
              <span className="stroke-text text-transparent italic opacity-40">WEB APPS.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We build complex digital products that solve real problems. From high-scale SaaS to enterprise management systems, we engineer excellence.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  START YOUR PRODUCT
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
              alt="Custom App Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              COMPLEXITY <span className="italic text-[#6324FC]">SIMPLIFIED.</span>
            </h2>
            <p className="font-heading  text-[11px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              We handle the heavy engineering so you can focus on your business logic and market growth.
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
                <h3 className="font-heading text-2xl text-white mb-4 capitalize ">{f.title}</h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Tech Specs Grid */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#00E5FF] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black p-10">
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1h1v1H1z\' fill=\'%236324FC\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] opacity-30" />
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between">
                       <Terminal className="w-8 h-8 text-[#6324FC]" />
                       <div className="font-heading  text-[10px] text-white/20 capitalize tracking-widest">Dev Environment v9.0</div>
                    </div>
                    
                    <div className="space-y-4">
                       <div className="font-heading text-4xl text-white capitalize tracking-tighter">Full-Stack <br/>Control.</div>
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="font-heading  text-[9px] text-white/40 capitalize ">System Status: Operational</span>
                       </div>
                    </div>
                    
                    <div className="space-y-4 border-t border-white/5 pt-8">
                       {["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"].map((tech, i) => (
                         <div key={i} className="flex items-center justify-between font-heading  text-[10px] text-white/30 capitalize ">
                            <span>{tech}</span>
                            <span className="text-[#6324FC]">Optimized</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                  FULL-STACK <br/>
                  <span className="italic text-[#00E5FF]">MASTERY.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   We don&apos;t use templates. We architect custom solutions using the most reliable and scalable technologies in the modern web ecosystem.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Security", val: "Enterprise Grade", desc: "Advanced encryption and secure authentication protocols." },
                     { label: "Performance", val: "Ultra Responsive", desc: "Optimized for sub-second user interactions." },
                     { label: "Scale", val: "Auto-Scaling", desc: "Infrastructure that grows with your user base." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 group-hover:scale-150 transition-transform" />
                        <div className="space-y-2">
                           <div className="flex items-center gap-4">
                              <span className="font-heading text-2xl text-white capitalize ">{item.label}</span>
                              <span className="font-heading  text-[9px] text-[#00E5FF] tracking-widest capitalize ">{item.val}</span>
                           </div>
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
           <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
              THE PRODUCT <span className="italic text-[#6324FC]">LIFECYCLE.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Prototyping", desc: "Rapid wireframing and interactive prototyping to validate your product logic before a single line of code is written." },
                { step: "02", title: "Architecture", desc: "Designing a robust database schema and system architecture that can handle millions of data points effortlessly." },
                { step: "03", title: "Scale-up", desc: "Continuous integration and deployment with real-time monitoring to ensure your app evolves with your users." }
              ].map((s, i) => (
                <div key={i} className="relative group">
                   <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">{s.step}</div>
                   <div className="relative z-10 pt-12 space-y-6">
                      <h3 className="font-heading text-3xl text-white capitalize ">{s.title}</h3>
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
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            BUILD THE <span className="italic text-[#6324FC]">IMPOSSIBLE.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Have a complex requirement? Our engineering team is ready to turn your vision into a high-performance digital asset.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto capitalize "
          >
            INITIATE PRODUCT DESIGN ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
