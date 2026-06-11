"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Shield, Globe, MousePointerClick, BarChart4, Target, Users2, DollarSign, PieChart, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PPCCampaignsPage() {
  const features = [
    {
      title: "Google Ads Dominance",
      description: "Capturing high-intent search traffic with surgical precision and industry-leading click-through rates.",
      icon: Search,
      color: "#6324FC"
    },
    {
      title: "Meta Ads Scaling",
      description: "Driving massive brand awareness and direct-response sales through advanced social targeting algorithms.",
      icon: Users2,
      color: "#00E5FF"
    },
    {
      title: "Retargeting Ops",
      description: "Recapturing lost visitors and maximizing lifetime value through intelligent cross-channel retargeting funnels.",
      icon: Rocket,
      color: "#FF2D55"
    },
    {
      title: "Conversion tracking",
      description: "Implementing end-to-end attribution models to ensure every dollar spent is accounted for in revenue.",
      icon: BarChart4,
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
              <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Growth Division</span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              PPC <br/>
              <span className="stroke-text text-transparent italic opacity-40">CAMPAIGNS.</span>
            </h1>
            
            <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We turn ad spend into exponential revenue. Our PPC strategies are engineered for maximum ROAS and rapid global scalability.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/contact" className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden flex items-center gap-4">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                  SCALE YOUR REVENUE
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
              alt="PPC Performance Visual" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
               <div className="font-heading text-8xl text-white tracking-tighter shadow-text animate-pulse">8.4X</div>
               <div className="font-mono text-[10px] tracking-[0.5em] text-[#6324FC] uppercase mt-2">Average ROAS</div>
            </div>
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase max-w-xl">
              PERFORMANCE <span className="italic text-[#6324FC]">WITHOUT LIMITS.</span>
            </h2>
            <p className="font-mono text-[11px] tracking-widest text-white/30 uppercase max-w-xs leading-loose">
              We manage millions in ad spend with a single focus: maximizing your bottom-line profitability.
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
                   {f.icon && <f.icon className="w-24 h-24 text-white" />}
                </div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                   {f.icon && <f.icon className="w-8 h-8" style={{ color: f.color }} />}
                </div>
                <h3 className="font-heading text-2xl text-white mb-4 uppercase">{f.title}</h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. ROI Calculator Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
           <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <DollarSign className="w-8 h-8 text-[#00FFA3]" />
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">Revenue Node // v4.2</div>
                 </div>

                 <div className="space-y-8 flex-1 flex flex-col justify-center">
                    <div className="space-y-2">
                       <div className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Monthly Ad Spend</div>
                       <div className="font-heading text-5xl text-white tracking-tighter">$50,000</div>
                    </div>
                    
                    <div className="h-[1px] w-full bg-white/5" />

                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <div className="font-mono text-[9px] text-[#6324FC] uppercase tracking-widest">New Customers</div>
                          <div className="font-heading text-4xl text-white">+1,240</div>
                       </div>
                       <div className="space-y-2">
                          <div className="font-mono text-[9px] text-[#00FFA3] uppercase tracking-widest">Total Revenue</div>
                          <div className="font-heading text-4xl text-white font-bold">$420,000</div>
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-between font-mono text-[9px] text-[#6324FC] uppercase tracking-widest">
                    <span>Performance Mode</span>
                    <span>Real-time Sync Active</span>
                 </div>
              </div>

              <div>
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-12">
                  SCALE WITH <br/>
                  <span className="italic text-[#00FFA3]">PRECISION.</span>
                </h2>
                
                <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                   We use advanced predictive modeling and behavioral analysis to identify the exact moments when your customers are ready to buy.
                </p>

                <div className="space-y-8">
                   {[
                     { label: "Predictive Bidding", desc: "AI-driven bidding strategies that optimize for conversion value in real-time." },
                     { label: "Dynamic Creatives", desc: "Automated ad testing to ensure the most resonant message always wins." },
                     { label: "Funnel Shielding", desc: "Protecting your brand from low-quality traffic and bot clicks." }
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
              THE GROWTH <span className="italic text-[#6324FC]">PROTOCOL.</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Funnel Mapping", desc: "Analyzing your customer journey to identify the highest leverage points for paid traffic injection." },
                { step: "02", title: "Campaign Launch", desc: "Deploying multi-channel campaigns across Google, Meta, and LinkedIn with surgical audience targeting." },
                { step: "03", title: "Aggressive Scaling", desc: "Continuously monitoring performance and increasing spend on winning campaigns to maximize total revenue." }
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
            INITIATE <span className="italic text-[#6324FC]">ASCENSION.</span>
          </h2>
          <p className="font-sans text-white/40 text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to stop burning money and start generating high-margin revenue? Let&apos;s build a PPC strategy that actually scales.
          </p>
          <motion.button 
            onClick={() => window.location.href='/contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-8 bg-white text-black rounded-full font-heading text-2xl tracking-widest shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:bg-[#6324FC] hover:text-white transition-all flex items-center gap-6 mx-auto uppercase"
          >
            START PPC AUDIT ⚡
          </motion.button>
        </div>

      </div>
    </main>
  );
}

function Search(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
