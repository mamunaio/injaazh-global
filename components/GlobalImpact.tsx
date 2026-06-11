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
    <section className="relative w-full bg-gradient-to-br from-[#6324FC] via-[#5219D3] to-[#4310C7] text-white pt-16 md:pt-20 pb-0 overflow-hidden">
      
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 border-b border-white/20 pb-12">
          <div>
            <div className="font-mono text-white/60 text-sm tracking-[0.3em] uppercase mb-6">
              // GLOBAL IMPACT
            </div>
            <h2 className="sr-only">Global Web Design and SEO Agency Serving US, UK, CA, and AU Markets</h2>
            <div aria-hidden="true" className="font-heading text-5xl md:text-6xl tracking-tight leading-[0.85]">
              RECOGNIZED <br/>
              <span className="stroke-white italic opacity-80">WORLDWIDE.</span>
            </div>
          </div>
          <p className="font-sans font-light text-xl text-white/80 max-w-md">
            We partner with enterprise leaders and ambitious challengers globally — delivering highly scalable web architectures and revenue-driven SEO campaigns across the US, UK, Australia, and UAE.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          <div className="flex flex-col group cursor-pointer hover:-translate-y-4 transition-transform duration-500">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              <Trophy className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-500" />
            </motion.div>
            <div className="font-heading text-5xl md:text-6xl tracking-wider mb-2">
              <AnimatedCounter from={0} to={500} duration={2.5} suffix="+" />
            </div>
            <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/70 border-t border-white/20 pt-4 mt-2 group-hover:border-white/50 transition-colors duration-500">
              PROJECTS DELIVERED
            </div>
          </div>

          <div className="flex flex-col group cursor-pointer hover:-translate-y-4 transition-transform duration-500 delay-75">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }}>
              <Globe2 className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-500" />
            </motion.div>
            <div className="font-heading text-5xl md:text-6xl tracking-wider mb-2">
              <AnimatedCounter from={0} to={25} duration={2} suffix="+" />
            </div>
            <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/70 border-t border-white/20 pt-4 mt-2 group-hover:border-white/50 transition-colors duration-500">
              COUNTRIES REACHED
            </div>
          </div>

          <div className="flex flex-col group cursor-pointer hover:-translate-y-4 transition-transform duration-500 delay-150">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}>
              <Target className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors duration-500" />
            </motion.div>
            <div className="font-heading text-5xl md:text-6xl tracking-wider mb-2">
              <AnimatedCounter from={0} to={1000} duration={3} suffix="+" />
            </div>
            <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/70 border-t border-white/20 pt-4 mt-2 group-hover:border-white/50 transition-colors duration-500">
              CLIENTS SERVED
            </div>
          </div>

        </div>
      </div>

      {/* Massive Typography Marquee for Industries */}
      <div className="w-full bg-[#060608] py-16 md:py-20 border-t border-white/5 relative overflow-hidden group">
        
        {/* Edge Gradients for smooth fade out */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />
        
        <div className="flex flex-col gap-6 md:gap-10 -rotate-2 scale-105">
          {/* Row 1: Left moving */}
          <div className="animate-marquee flex whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDuration: '60s' }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center font-heading text-5xl md:text-6xl tracking-tight mr-12 uppercase">
                {industries.slice(0, 10).map((industry, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-12">
                    <span className={`hover:text-[#6324FC] transition-colors cursor-crosshair ${pIdx % 2 !== 0 ? 'stroke-white italic opacity-80' : 'text-white'}`}>
                      {industry}
                    </span>
                    <span className="text-[#6324FC] text-3xl md:text-5xl">✧</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2: Right moving */}
          <div className="animate-marquee-reverse flex whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDuration: '60s' }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center font-heading text-5xl md:text-6xl tracking-tight mr-12 uppercase">
                {industries.slice(10).map((industry, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-12">
                    <span className={`hover:text-[#00E5FF] transition-colors cursor-crosshair ${pIdx % 2 === 0 ? 'stroke-white italic opacity-80' : 'text-white'}`}>
                      {industry}
                    </span>
                    <span className="text-[#00E5FF] text-3xl md:text-5xl">✧</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
