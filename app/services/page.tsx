"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "WEB DEV",
    desc: "Next.js Architectures & Headless Commerce",
    color: "#6324FC", // Brand Red
    image: "/assets/case_study_ecommerce_1777698148266.png",
    details: ["React / Next.js", "Three.js / WebGL", "Headless CMS", "Shopify Plus"]
  },
  {
    title: "UI/UX DESIGN",
    desc: "Immersive Interfaces & Design Systems",
    color: "#1E293B", // Slate
    image: "/assets/hero_interface_mockup_1777698117495.png",
    details: ["User Research", "Wireframing", "Prototyping", "Motion Graphics"]
  },
  {
    title: "SEO",
    desc: "Technical Audits & Keyword Strategy",
    color: "#0F766E", // Teal
    image: "/assets/case_study_saas_1777698132702.png",
    details: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"]
  },
  {
    title: "MARKETING",
    desc: "PPC Campaigns & Growth Automation",
    color: "#B45309", // Amber
    image: "/assets/case_study_ecommerce_1777698148266.png",
    details: ["Google Ads", "Meta Ads", "Email Automation", "CRO"]
  },
  {
    title: "STRATEGY",
    desc: "Digital Transformation & Business Intelligence",
    color: "#4338CA", // Indigo
    image: "/assets/case_study_saas_1777698132702.png",
    details: ["Brand Positioning", "Market Analysis", "UX Audits", "Data Architecture"]
  }
];

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main 
      className="w-full min-h-screen transition-colors duration-700 selection:bg-white selection:text-black font-sans"
      style={{ backgroundColor: hoveredIndex !== null ? services[hoveredIndex].color : "var(--background)" }}
    >
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-end pb-20 overflow-hidden">
        <div className="relative z-10 px-6 max-w-[1600px] w-full flex flex-col items-start transition-colors duration-700">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-4 mb-8"
            style={{ color: hoveredIndex !== null ? "rgba(255,255,255,0.7)" : "var(--primary)" }}
          >
            <span className="w-12 h-[1px] transition-colors duration-700" style={{ backgroundColor: hoveredIndex !== null ? "white" : "var(--primary)" }} /> EXPERTISE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-heading text-7xl md:text-[12vw] leading-[0.8] tracking-tighter uppercase transition-colors duration-700 drop-shadow-sm"
            style={{ color: hoveredIndex !== null ? "white" : "var(--primary)" }}
          >
            WHAT WE <span className="italic">DO</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Massive Interactive List */}
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto py-20 pb-40">
        <div className="flex flex-col border-t transition-colors duration-700" style={{ borderColor: hoveredIndex !== null ? "rgba(255,255,255,0.2)" : "var(--border-opacity-10)" }}>
          {services.map((svc, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-24 border-b cursor-pointer transition-colors duration-700"
              style={{ borderColor: hoveredIndex !== null ? "rgba(255,255,255,0.2)" : "var(--border-opacity-10)" }}
            >
              
              {/* Index Number */}
              <div className="hidden md:block w-[10%]">
                 <span className="font-mono text-2xl transition-all duration-700" style={{ color: hoveredIndex === index ? "white" : "var(--primary)", opacity: hoveredIndex === index ? 1 : 0.3 }}>0{index + 1}</span>
              </div>

              {/* Title */}
              <div className="w-full md:w-[45%] z-10 relative">
                <h2 
                  className="font-heading text-5xl md:text-7xl lg:text-[7vw] uppercase tracking-tighter leading-[0.85] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] md:group-hover:translate-x-8"
                  style={{ color: hoveredIndex === index ? "white" : hoveredIndex !== null ? "rgba(255,255,255,0.2)" : "var(--primary)" }}
                >
                  {svc.title}
                </h2>
              </div>

              {/* Details & Image */}
              <div className="w-full md:w-[45%] flex justify-end items-center mt-8 md:mt-0 z-10">
                <div className="flex flex-col md:items-end text-left md:text-right">
                  <p className="font-sans font-light text-2xl md:text-3xl mb-8 transition-all duration-700" style={{ color: hoveredIndex === index ? "white" : "var(--primary)", opacity: hoveredIndex === index ? 1 : 0.6 }}>
                    {svc.desc}
                  </p>
                  <div className="flex gap-3 flex-wrap md:justify-end">
                    {svc.details.map((detail, i) => (
                      <span key={i} className="font-mono text-[10px] md:text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-colors duration-700 backdrop-blur-sm" style={{ borderColor: hoveredIndex === index ? "rgba(255,255,255,0.3)" : "var(--border-opacity-10)", color: hoveredIndex === index ? "white" : "var(--primary)", opacity: hoveredIndex === index ? 1 : 0.7 }}>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Image Reveal on Hover (Centered Absolute) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -5, x: "-50%", y: "-50%" }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, x: "-50%", y: "-50%" }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5, x: "-50%", y: "-50%" }}
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute top-1/2 left-1/2 w-[350px] h-[450px] rounded-3xl overflow-hidden pointer-events-none z-0 hidden lg:block shadow-2xl border border-white/20"
                  >
                    <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Global Reach / Process (Dark Block) */}
      <section className="py-32 md:py-48 px-6 lg:px-12 relative overflow-hidden transition-colors duration-1000 border-t border-primary/10" style={{ backgroundColor: hoveredIndex !== null ? "rgba(0,0,0,0.8)" : "" }}>
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="font-heading text-6xl md:text-8xl tracking-tighter uppercase mb-8">
              THE <br/><span className="italic opacity-80">METHOD</span>
            </h2>
          </div>
          <div className="flex flex-col gap-16">
            <p className="font-sans font-light text-3xl md:text-5xl leading-[1.2]">
              We operate on a rigid framework of discovery, design, engineering, and scaling. We do not guess. Everything is driven by data and executed with precision.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-mono text-sm tracking-[0.2em] uppercase opacity-70">
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] bg-primary opacity-50" />
                <span>01. Insight & Strategy</span>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] bg-primary opacity-50" />
                <span>02. UX/UI Prototyping</span>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] bg-primary opacity-50" />
                <span>03. Full-Stack Dev</span>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] bg-primary opacity-50" />
                <span>04. Growth & Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
