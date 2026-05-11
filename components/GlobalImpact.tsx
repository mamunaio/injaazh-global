"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Trophy, Globe2, Target } from "lucide-react";

// Counter Component for smooth number animation
function AnimatedCounter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export default function GlobalImpact() {
  const industries = [
    "E-COMMERCE", "SAAS", "REAL ESTATE", "HEALTHCARE", "FINTECH", "FASHION", 
    "HOSPITALITY", "EDUCATION", "LAW FIRMS", "STARTUPS", "RETAIL", "TECH",
    "MARKETING", "AUTOMOTIVE", "TRAVEL", "WELLNESS", "LOGISTICS", "DTC BRANDS", "LUXURY"
  ];
  
  return (
    <section className="relative w-full bg-gradient-to-br from-[#6324FC] via-[#5219D3] to-[#4310C7] text-white pt-20 pb-0 overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 mb-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 border-b border-white/20 pb-12">
          <div>
            <div className="font-mono text-white/60 text-sm tracking-[0.3em] uppercase mb-6">
              // GLOBAL IMPACT
            </div>
            <h2 className="font-heading text-8xl md:text-[9rem] tracking-tight leading-none">
              RECOGNIZED <br/>
              <span className="stroke-text text-transparent italic opacity-80">WORLDWIDE</span>
            </h2>
          </div>
          <p className="font-sans font-light text-xl text-white/80 max-w-md">
            We partner with industry leaders and ambitious challengers worldwide — delivering full-service digital solutions that have redefined the standard for what a digital agency can achieve.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-32">
          
          <div className="flex flex-col group cursor-pointer hover:-translate-y-4 transition-transform duration-500">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              <Trophy className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-500" />
            </motion.div>
            <div className="font-heading text-6xl md:text-8xl tracking-wider mb-2">
              <AnimatedCounter from={0} to={1200} duration={2.5} suffix="+" />
            </div>
            <div className="font-mono text-sm tracking-[0.2em] text-white/70 border-t border-white/20 pt-4 mt-2 group-hover:border-white/50 transition-colors duration-500">
              CLIENTS SERVED
            </div>
          </div>

          <div className="flex flex-col group cursor-pointer hover:-translate-y-4 transition-transform duration-500 delay-75">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }}>
              <Globe2 className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-500" />
            </motion.div>
            <div className="font-heading text-6xl md:text-8xl tracking-wider mb-2">
              <AnimatedCounter from={0} to={20} duration={2} suffix="+" />
            </div>
            <div className="font-mono text-sm tracking-[0.2em] text-white/70 border-t border-white/20 pt-4 mt-2 group-hover:border-white/50 transition-colors duration-500">
              COUNTRIES REACHED
            </div>
          </div>

          <div className="flex flex-col group cursor-pointer hover:-translate-y-4 transition-transform duration-500 delay-150">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}>
              <Target className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-500" />
            </motion.div>
            <div className="font-heading text-6xl md:text-8xl tracking-wider mb-2">
              $<AnimatedCounter from={0} to={1} duration={3} suffix="B+" />
            </div>
            <div className="font-mono text-sm tracking-[0.2em] text-white/70 border-t border-white/20 pt-4 mt-2 group-hover:border-white/50 transition-colors duration-500">
              CLIENT REVENUE GENERATED
            </div>
          </div>

        </div>
      </div>

      {/* Massive Typography Marquee for Partners */}
      <div className="w-full bg-[#060608] py-16 border-t border-white/10 relative overflow-hidden group">
        
        {/* Edge Gradients for smooth fade out */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex whitespace-nowrap opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '50s' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center font-heading text-4xl md:text-6xl tracking-widest text-white mr-20">
              {industries.map((industry, pIdx) => (
                <span key={pIdx} className="hover:text-[#6324FC] transition-colors cursor-crosshair">
                  {industry}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
