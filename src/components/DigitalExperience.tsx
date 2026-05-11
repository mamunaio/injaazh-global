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
      desc: "We build ultra-fast, scalable web architectures for global businesses. Our stack dominates Core Web Vitals — ensuring your infrastructure is built for 2026 standards.",
      tags: ["Next.js Development", "WordPress & WooCommerce", "Custom Web Applications"],
      kpis: [{ label: "PAGE SPEED", val: "99" }, { label: "UPTIME", val: "99.9%" }],
      bars: [{ label: "Performance", width: "98%" }, { label: "Accessibility", width: "100%" }, { label: "Security Score", width: "95%" }],
      cta: "INITIATE PROJECT"
    },
    {
      badge: "SEO Dominance // 02",
      headline: "TECHNICAL SEARCH ARCHITECTURE",
      desc: "Dominate search with high-precision technical SEO. We ensure your digital assets are crawled, indexed, and ranked with surgical precision across global markets.",
      tags: ["Technical SEO Audit", "Local & International SEO", "Keyword & Content Strategy"],
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
      desc: "Words that convert and architectures that rank. We craft SEO-optimized, brand-aligned content that engages high-intent readers globally.",
      tags: ["SEO Blog Writing", "Website Copywriting", "Brand Narrative & Sales Copy"],
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
      {/* High-Tech Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54 48c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-30 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm30-24c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm30-24c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-12 0c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z\' fill=\'%236324FC\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Tab Navigation (Glass Pill Style) */}
        <div className="flex justify-center mb-24">
          <div className="inline-flex items-center p-1 bg-white/[0.03] border border-white/[0.05] rounded-full backdrop-blur-xl">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                className={`relative px-8 py-4 rounded-full font-heading text-lg tracking-widest transition-all duration-500 flex items-center gap-3 ${activeTab === idx ? "text-white" : "text-white/30 hover:text-white/60"}`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-[#6324FC] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  <tab.icon className="w-4 h-4" />
                  {tab.name}
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              {/* Technical Brief */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#6324FC]" />
                  <span className="font-mono text-[10px] tracking-[0.5em] text-[#6324FC] uppercase">{content[activeTab].badge}</span>
                </div>
                
                <h3 className="font-heading text-6xl md:text-8xl leading-[0.8] tracking-tighter text-white uppercase">
                  {content[activeTab].headline.split(' ').map((word, i) => (
                    <span key={i} className="block">
                      {i % 2 !== 0 ? <span className="italic text-[#6324FC]">{word}</span> : word}
                    </span>
                  ))}
                </h3>
                
                <p className="font-sans font-light text-xl text-white/40 leading-relaxed max-w-xl border-l border-white/5 pl-8">
                  {content[activeTab].desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  {content[activeTab].tags.map((tag, idx) => (
                    <div key={idx} className="px-5 py-2 bg-white/[0.02] border border-white/5 font-mono text-[9px] tracking-widest text-white/40 uppercase rounded-full">
                      {tag}
                    </div>
                  ))}
                </div>

                <motion.button 
                  onClick={() => openModal()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-12 py-6 bg-[#6324FC] rounded-full overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(99,36,252,0.3)]"
                >
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  <span className="relative z-10 flex items-center gap-4 font-heading text-2xl tracking-tighter text-white group-hover:text-black transition-colors duration-500 uppercase">
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
                  className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 lg:p-20 overflow-hidden shadow-2xl shadow-black transition-colors duration-500 hover:border-white/20"
                >
                  {/* Decorative Ambient Glows inside the card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#6324FC]/10 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5FF]/5 blur-[80px] rounded-full -ml-32 -mb-32 pointer-events-none" />

                  {/* Decorative Scan Line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />
                  
                  <div className="grid grid-cols-2 gap-12 mb-20" style={{ transform: "translateZ(50px)" }}>
                    {content[activeTab].kpis.map((kpi, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="font-heading text-5xl md:text-7xl text-white tracking-tighter drop-shadow-2xl">
                          {kpi.val}
                        </div>
                        <div className="font-mono text-[10px] tracking-[0.5em] text-[#6324FC] uppercase font-bold">
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-12" style={{ transform: "translateZ(30px)" }}>
                    {content[activeTab].bars.map((bar, idx) => (
                      <div key={idx} className="space-y-5">
                        <div className="flex justify-between font-mono text-[9px] tracking-[0.3em] text-white/50 uppercase">
                          <span>{bar.label}</span>
                          <span className="text-white font-bold">{bar.width}</span>
                        </div>
                        <div className="relative h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
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
