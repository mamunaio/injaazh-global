"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Zap, Shield, Globe, Layers, BarChart, CheckCircle2, Layout, Smartphone, Repeat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeadlessCommercePage() {
  const features = [
    {
      title: "API-First Retail",
      description: "Decoupling your storefront from the backend for absolute flexibility and lightning-fast performance.",
      icon: Layers,
      color: "#6324FC"
    },
    {
      title: "Omnichannel Flow",
      description: "One backend, infinite frontends. Sync your data across web, mobile, and IoT devices seamlessly.",
      icon: Smartphone,
      color: "#00E5FF"
    },
    {
      title: "Conversion Engine",
      description: "Sub-second page loads that directly correlate to a 30%+ increase in checkout conversion rates.",
      icon: Repeat,
      color: "#FF2D55"
    },
    {
      title: "Enterprise Scaling",
      description: "Handle massive traffic spikes (Black Friday, Launches) without breaking a sweat or losing a sale.",
      icon: BarChart,
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
              <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">Commerce Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              HEADLESS <br/>
              <span className="stroke-text text-transparent italic opacity-40">COMMERCE.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We engineer ultra-fast e-commerce ecosystems that eliminate friction and maximize ROI. Your store should be as fast as your customers&apos; intent.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  REBUILD YOUR STORE
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
              src="/assets/case_study_ecommerce_final.webp" 
              alt="Headless Commerce Visual" 
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
              RETAIL AT THE <span className="italic text-[#6324FC]">SPEED OF LIGHT.</span>
            </h2>
            <p className="font-heading  text-[11px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              By decoupling the presentation layer, we unlock infinite design possibilities and extreme loading speeds.
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

        {/* 3. The Tech Stack Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                  ELITE RETAIL <br/>
                  <span className="italic text-[#6324FC]">STACKS.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   We integrate world-class commerce engines with cutting-edge frontends to create high-conversion machines.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   {["Shopify Plus", "BigCommerce", "WooCommerce", "Sanity CMS", "Contentful", "Swell"].map((item, i) => (
                     <div key={i} className="px-6 py-4 bg-white/[0.03] border border-white/5 rounded-xl font-heading  text-[10px] tracking-widest text-white/60 capitalize ">
                        {item}
                     </div>
                   ))}
                </div>
              </div>

              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-full flex items-center justify-center p-20 shadow-2xl shadow-black">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#6324FC]/20 to-transparent blur-3xl rounded-full" />
                 <div className="text-center relative z-10">
                    <ShoppingCart className="w-20 h-20 text-[#6324FC] mx-auto mb-8 animate-pulse" />
                    <div className="font-heading text-6xl text-white tracking-tighter">API FIRST</div>
                    <div className="font-heading  text-[10px] tracking-[0.5em] text-[#6324FC] capitalize mt-4">Unified Commerce</div>
                 </div>
                 
                 {/* Orbits */}
                 <div className="absolute inset-0 border border-white/[0.05] rounded-full scale-75 animate-spin-slow" />
                 <div className="absolute inset-0 border border-white/[0.03] rounded-full scale-110" />
              </div>
           </div>
        </div>

        {/* 4. Strategic Flow */}
        <div className="py-16 md:py-24 border-b border-white/5">
           <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
              COMMERCE <span className="italic text-[#6324FC]">ARCHITECTURE.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Discovery", desc: "Analyzing your current store bottlenecks and defining the ideal technical path for maximum conversion." },
                { step: "02", title: "Engineering", desc: "Building a high-performance frontend using Next.js and connecting it to your commerce engine of choice." },
                { step: "03", title: "Optimization", desc: "Fine-tuning checkout flows, image delivery, and edge caching to ensure the absolute fastest shopping experience." }
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
            MAXIMIZE <span className="italic text-[#6324FC]">REVENUE.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Stop losing sales due to slow legacy systems. Rebuild your store on the future of commerce.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto capitalize "
          >
            INITIATE COMMERCE AUDIT ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
