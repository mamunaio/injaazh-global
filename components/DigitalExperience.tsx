"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Search, TrendingUp, PenTool, LayoutDashboard } from "lucide-react";
import { useProjectModal } from "./ProjectModalContext";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalExperience() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openModal } = useProjectModal();
  
  const tabs = [
    { name: "ENGINEERING", icon: Code },
    { name: "VISIBILITY", icon: Search },
    { name: "REVENUE", icon: TrendingUp },
    { name: "NARRATIVE", icon: PenTool },
    { name: "STRATEGY", icon: LayoutDashboard }
  ];

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = [
    {
      badge: "Architecture // 01",
      headline: "HEADLESS COMMERCE & NEXT.JS",
      desc: "We engineer high-performance Next.js websites and headless commerce architectures. Dominating Core Web Vitals, our custom web development solutions are built to scale enterprise revenue and pass Google's strictest performance algorithms.",
      tags: ["Next.js Web Development", "Enterprise Headless CMS", "Custom Web Applications"],
      kpis: [{ label: "PAGE SPEED", val: "99" }, { label: "UPTIME", val: "99.9%" }],
      bars: [{ label: "Performance", width: "98%" }, { label: "Accessibility", width: "100%" }, { label: "Security Score", width: "95%" }],
      cta: "INITIATE PROJECT"
    },
    {
      badge: "SEO Dominance // 02",
      headline: "TECHNICAL SEARCH ARCHITECTURE",
      desc: "Dominate Google search with high-precision Technical SEO. We ensure your digital assets are crawled, indexed, and ranked with surgical precision across international markets, securing topical authority.",
      tags: ["Enterprise SEO Audit", "International SEO Strategy", "Programmatic SEO"],
      kpis: [{ label: "TRAFFIC GROWTH", val: "340%" }, { label: "RANKING", val: "Top 3" }],
      bars: [{ label: "Authority", width: "88%" }, { label: "Trust Flow", width: "92%" }, { label: "Index Rate", width: "100%" }],
      cta: "START NEURAL AUDIT"
    },
    {
      badge: "Performance // 03",
      headline: "ROI FOCUSED PERFORMANCE",
      desc: "Data-driven marketing engineered for maximum market penetration. We turn clicks into compound interest through precision-targeted neural campaigns.",
      tags: ["Google & Meta Ads (PPC)", "Growth & Funnel Strategy", "Conversion Rate Optimization"],
      kpis: [{ label: "AVG ROAS", val: "4.5x" }, { label: "CPA CUT", val: "40%" }],
      bars: [{ label: "Conv. Rate", width: "8.5%" }, { label: "Retention", width: "90%" }, { label: "Market Fit", width: "95%" }],
      cta: "LAUNCH CAMPAIGN"
    },
    {
      badge: "Creative // 04",
      headline: "EDITORIAL CONTENT ENGINES",
      desc: "Words that convert and content architectures that rank. We craft SEO-optimized editorial content, B2B copywriting, and semantic silos that engage high-intent readers and satisfy search intent.",
      tags: ["B2B Content Marketing", "SEO Copywriting", "Topical Authority Silos"],
      kpis: [{ label: "ENGAGEMENT", val: "+120%" }, { label: "READ TIME", val: "4m 20s" }],
      bars: [{ label: "Readability", width: "96%" }, { label: "SEO Score", width: "100%" }, { label: "Voice Sync", width: "92%" }],
      cta: "GET CONTENT BRIEF"
    },
    {
      badge: "Strategic // 05",
      headline: "ELITE PRODUCT STRATEGY",
      desc: "The blueprint for market dominance. We align your high-level business objectives with technical execution — building the roadmap for future dominance.",
      tags: ["Positioning", "UX Audit", "Scale"],
      kpis: [{ label: "SHARE", val: "+25%" }, { label: "GROWTH", val: "Exp" }],
      bars: [{ label: "Alignment", width: "100%" }, { label: "UX Maturity", width: "88%" }, { label: "Velocity", width: "95%" }],
      cta: "CONSULT STRATEGY"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#060608] transition-colors duration-500 overflow-hidden border-t border-white/[0.03]">
      <h2 className="sr-only">Our Premium Digital Services: Web Development, SEO, and Marketing</h2>
      
      {/* High-Tech Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54 48c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-30 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm30-24c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm30-24c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z\' fill=\'%236324FC\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Tab Navigation (Glass Pill Style) */}
        <div className="w-full flex justify-center mb-12 md:mb-24 px-4 md:px-0">
          <div className="flex items-center p-1.5 bg-white/[0.03] border border-white/[0.05] rounded-full backdrop-blur-xl w-full md:w-auto justify-between md:justify-center gap-1 md:gap-2">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                onMouseEnter={() => setActiveTab(idx)}
                className={`relative py-3 md:py-4 rounded-full font-heading text-xs sm:text-sm md:text-lg tracking-widest transition-all duration-500 flex items-center justify-center ${
                  activeTab === idx 
                    ? "px-4 sm:px-5 md:px-8 text-white flex-grow md:flex-grow-0" 
                    : "px-3 sm:px-4 md:px-8 text-white/40 hover:text-white/70 flex-shrink-0"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-[#6324FC] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  <tab.icon className="w-4 h-4 shrink-0" />
                  <span className={`whitespace-nowrap transition-all duration-500 overflow-hidden ${
                    activeTab === idx 
                      ? "max-w-[200px] opacity-100 ml-2 md:ml-3" 
                      : "max-w-0 opacity-0 ml-0 md:max-w-[200px] md:opacity-100 md:ml-3"
                  }`}>
                    {tab.name}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Technical Brief */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#6324FC]" />
                  <span className="font-mono text-[10px] tracking-[0.5em] text-[#6324FC] uppercase">{content[activeTab].badge}</span>
                </div>
                
                <h3 className="font-heading text-5xl md:text-[5.5rem] leading-[0.85] tracking-tighter text-white uppercase flex flex-wrap gap-x-4 gap-y-2">
                  {content[activeTab].headline.split(' ').map((word, i) => (
                    <span key={i} className="inline-block">
                      {i % 2 !== 0 ? <span className="italic text-[#6324FC]">{word}</span> : word}
                    </span>
                  ))}
                </h3>
                
                <p className="font-sans font-light text-lg md:text-xl text-white/70 leading-relaxed max-w-xl border-l-2 border-[#6324FC]/40 pl-6 md:pl-8">
                  {content[activeTab].desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {content[activeTab].tags.map((tag, idx) => (
                    <div key={idx} className="px-4 py-2 bg-[#6324FC]/10 border border-[#6324FC]/30 font-mono text-[10px] tracking-widest text-white/90 uppercase rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(99,36,252,0.1)]">
                      {tag}
                    </div>
                  ))}
                </div>

                <motion.button 
                  onClick={() => openModal()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 md:px-12 py-4 md:py-6 bg-[#6324FC] rounded-full overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(99,36,252,0.3)] w-full md:w-auto"
                >
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  <span className="relative z-10 flex items-center justify-center gap-4 font-heading text-xl md:text-2xl tracking-tighter text-white group-hover:text-black transition-colors duration-500 uppercase text-center w-full">
                    {content[activeTab].cta}
                  </span>
                </motion.button>
              </div>

              {/* Data Visualization Widget with 3D Tilt */}
              <div className="relative group perspective-[1000px]">
                <div className="absolute -inset-10 bg-gradient-to-r from-[#6324FC]/20 to-[#00E5FF]/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                
                <motion.div 
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl shadow-black transition-colors duration-500 hover:border-white/20"
                >
                  {/* Decorative Ambient Glows inside the card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#6324FC]/10 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5FF]/5 blur-[80px] rounded-full -ml-32 -mb-32 pointer-events-none" />

                  {/* Decorative Scan Line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
                  
                  <div className="grid grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16" style={{ transform: "translateZ(50px)" }}>
                    {content[activeTab].kpis.map((kpi, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter drop-shadow-2xl whitespace-nowrap">
                          {kpi.val}
                        </div>
                        <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[#00E5FF] uppercase font-semibold">
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
                    {content[activeTab].bars.map((bar, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] text-white/70 uppercase">
                          <span>{bar.label}</span>
                          <span className="text-white font-bold">{bar.width}</span>
                        </div>
                        <div className="relative h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: bar.width }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 bg-gradient-to-r from-[#6324FC] to-[#00E5FF] shadow-[0_0_15px_rgba(99,36,252,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
