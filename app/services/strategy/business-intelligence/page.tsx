"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Zap, Shield, Globe, PieChart, LineChart, Database, Activity, Target, Brain, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessIntelligencePage() {
  const features = [
    {
      title: "Custom Dashboards",
      description: "Visualizing complex data sets into intuitive, real-time dashboards that drive immediate business clarity.",
      icon: BarChart3,
      color: "#6324FC"
    },
    {
      title: "Predictive Analytics",
      description: "Leveraging historical data and AI models to forecast future market trends and user behavior.",
      icon: TrendingUp,
      color: "#00E5FF"
    },
    {
      title: "Market Insights",
      description: "Deep-diving into competitor performance and industry shifts to find your unique advantage.",
      icon: Globe,
      color: "#FF2D55"
    },
    {
      title: "ROI Attribution",
      description: "Precision tracking of every marketing dollar and operational hour to maximize total profitability.",
      icon: Target,
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
              <span className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize ">Intelligence Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              BUSINESS <br/>
              <span className="stroke-text text-transparent italic opacity-40">INTELLIGENCE.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We turn data into dominance. Our intelligence systems provide the surgical clarity needed to make high-stakes decisions with absolute confidence.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  ACTIVATE INTELLIGENCE
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
              alt="Business Intelligence Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#060608]/40 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-8 left-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
               <div className="font-heading  text-[9px] text-[#00E5FF] mb-2 capitalize ">Data Integrity</div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="font-heading text-xl text-white">VALIDATED</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              PRECISION <span className="italic text-[#6324FC]">REVEALED.</span>
            </h2>
            <p className="font-heading  text-[11px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              Data without context is just noise. We provide the structural intelligence to find the signal in the chaos.
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

        {/* 3. Analytics Dashboard Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <PieChart className="w-8 h-8 text-[#6324FC]" />
                    <div className="font-heading  text-[9px] text-white/20 capitalize tracking-[0.3em]">Insights Node // 0xBI</div>
                 </div>

                 <div className="space-y-12 flex-1 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-8">
                       {[
                         { label: "Predictive", val: "88%", color: "text-[#00E5FF]" },
                         { label: "Growth", val: "+24%", color: "text-[#6324FC]" },
                         { label: "Retention", val: "94%", color: "text-[#00FFA3]" },
                         { label: "Efficiency", val: "High", color: "text-[#FF2D55]" }
                       ].map((stat, i) => (
                         <div key={i} className="space-y-2">
                            <div className="font-heading  text-[8px] text-white/20 capitalize tracking-widest">{stat.label}</div>
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
                           className="flex-1 bg-[#00E5FF]/30 rounded-t-sm"
                         />
                       ))}
                    </div>
                 </div>

                 <div className="flex justify-between font-heading  text-[9px] text-[#00E5FF] capitalize tracking-widest">
                    <span>Neural Analysis</span>
                    <span>Decision Protocol Active</span>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                  DATA OVER <br/>
                  <span className="italic text-[#00E5FF]">INTUITION.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   Stop guessing. We build the data pipelines that tell you exactly what is working, what isn&apos;t, and where your next big opportunity is hidden.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Real-time Sync", desc: "Connecting your sales, marketing, and ops data into a single source of truth." },
                     { label: "Predictive Modeling", desc: "Using AI to identify customer churn and lifetime value before it happens." },
                     { label: "Operational KPIs", desc: "Tracking the metrics that actually matter for your bottom line profitability." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 group-hover:scale-150 transition-transform" />
                        <div className="space-y-1">
                           <div className="font-heading text-2xl text-white capitalize ">{item.label}</div>
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
              THE BI <span className="italic text-[#6324FC]">ARCHITECTURE.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Data Mining", desc: "Extracting raw data from every touchpoint in your business ecosystem to build a comprehensive data lake." },
                { step: "02", title: "Modeling", desc: "Cleaning and structuring data into logical models that reveal deep patterns and correlations." },
                { step: "03", title: "Activation", desc: "Deploying interactive dashboards and automated alerts that drive strategic business actions." }
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
            OWN THE <span className="italic text-[#6324FC]">NUMBERS.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to lead with data? Let&apos;s build an intelligence system that gives you the competitive edge in an increasingly complex market.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto capitalize "
          >
            INITIATE BI STUDY ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}
