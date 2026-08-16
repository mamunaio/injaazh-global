"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "WEB DEV",
    slug: "web-dev",
    desc: "High-performance Next.js architectures and seamless Headless Commerce migrations built for speed and scale.",
    color: "#6324FC", // Brand Red
    image: "/assets/enterprise_ecommerce_1780213870802.png",
    details: ["React / Next.js", "Three.js / WebGL", "Headless CMS", "Shopify Plus"]
  },
  {
    title: "UI/UX DESIGN",
    slug: "ui-ux-design",
    desc: "Data-driven wireframing and prototyping that convert users into loyal customers without sacrificing aesthetic luxury.",
    color: "#1E293B", // Slate
    image: "/assets/b2b_saas_dashboard_1780213845016.png",
    details: ["User Research", "Wireframing", "Prototyping", "Motion Graphics"]
  },
  {
    title: "SEO",
    slug: "seo",
    desc: "Aggressive keyword strategies and deep technical audits to dominate search rankings and drive high-intent organic traffic.",
    color: "#0F766E", // Teal
    image: "/assets/nexus_esports_final.webp",
    details: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"]
  },
  {
    title: "MARKETING",
    slug: "marketing",
    desc: "ROI-obsessed PPC campaigns and conversion rate optimization (CRO) designed for exponential revenue growth.",
    color: "#B45309", // Amber
    image: "/assets/themes_jet_final.webp",
    details: ["Google Ads", "Meta Ads", "Email Automation", "CRO"]
  },
  {
    title: "CONTENT",
    slug: "content",
    desc: "Persuasive editorial writing and brand narratives designed to establish unshakeable industry authority.",
    color: "#BE185D", // Pink
    image: "/assets/novacore_esports_final.webp",
    details: ["Editorial Writing", "Brand Narrative", "Copywriting", "Thought Leadership"]
  },
  {
    title: "STRATEGY",
    slug: "strategy",
    desc: "Brand positioning and rigorous market analysis to align your digital presence with aggressive business goals.",
    color: "#4338CA", // Indigo
    image: "/assets/aka_moving_final.webp",
    details: ["Brand Positioning", "Market Analysis", "UX Audits", "Data Architecture"]
  }
];

export default function ServicesClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Global mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of image width/height (350/2, 450/2) to center the image on the cursor
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 225);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main 
      className="w-full min-h-screen transition-colors duration-700 selection:bg-white selection:text-black font-sans"
      style={{ backgroundColor: hoveredIndex !== null ? services[hoveredIndex].color : "var(--background)" }}
    >
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden">
        <div className="relative z-10 px-6 max-w-[1400px] mx-auto w-full flex flex-col items-start transition-colors duration-700">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading  text-xs tracking-[0.3em] capitalize flex items-center gap-4 mb-8"
            style={{ color: hoveredIndex !== null ? "rgba(255,255,255,0.7)" : "var(--primary)" }}
          >
            <span className="w-12 h-[1px] transition-colors duration-700" style={{ backgroundColor: hoveredIndex !== null ? "white" : "var(--primary)" }} /> EXPERTISE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize transition-colors duration-700 drop-shadow-sm mb-6"
            style={{ color: hoveredIndex !== null ? "white" : "var(--primary)" }}
          >
            ENGINEERING <br/><span className="italic">DIGITAL SUPREMACY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-2xl font-sans font-light text-lg md:text-xl transition-colors duration-700"
            style={{ color: hoveredIndex !== null ? "rgba(255,255,255,0.6)" : "var(--primary)", opacity: 0.8 }}
          >
            We don't just build websites. We engineer high-performance digital ecosystems using Next.js, Headless Commerce, and data-driven SEO strategies that dominate search engines.
          </motion.p>
        </div>
      </section>

      {/* 2. Massive Interactive List */}
      <section className="w-full bg-transparent py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col border-t transition-colors duration-700" style={{ borderColor: hoveredIndex !== null ? "rgba(255,255,255,0.2)" : "var(--border-opacity-10)" }}>
          {services.map((svc, index) => (
            <Link 
              href={`/services/${svc.slug}`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-24 border-b cursor-pointer transition-colors duration-700 w-full"
              style={{ borderColor: hoveredIndex !== null ? "rgba(255,255,255,0.2)" : "var(--border-opacity-10)" }}
            >
              
              {/* Index Number */}
              <div className="hidden md:block w-[10%]">
                 <span className="font-heading  text-2xl transition-all duration-700" style={{ color: hoveredIndex === index ? "white" : "var(--primary)", opacity: hoveredIndex === index ? 1 : 0.3 }}>0{index + 1}</span>
              </div>

              {/* Title */}
              <div className="w-full md:w-[45%] z-10 relative">
                <h2 
                  className="font-heading text-5xl md:text-7xl capitalize tracking-tighter leading-[0.85] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] md:group-hover:translate-x-8"
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
                      <span key={i} className="font-heading  text-[10px] md:text-xs tracking-widest capitalize px-4 py-2 rounded-full border transition-colors duration-700 backdrop-blur-sm" style={{ borderColor: hoveredIndex === index ? "rgba(255,255,255,0.3)" : "var(--border-opacity-10)", color: hoveredIndex === index ? "white" : "var(--primary)", opacity: hoveredIndex === index ? 1 : 0.7 }}>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Image moved to global cursor tracking */}

            </Link>
          ))}
        </div>
      </div>
    </section>

      {/* 3. Global Reach / Process (Dark Block) */}
      <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-1000 border-t border-primary/10" style={{ backgroundColor: hoveredIndex !== null ? "rgba(0,0,0,0.8)" : "" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8 transition-colors duration-700" style={{ color: hoveredIndex !== null ? "white" : "var(--primary)" }}>
              THE <br/><span className="italic opacity-80">ARCHITECTURE</span><br/>OF SUCCESS
            </h2>
          </div>
          <div className="flex flex-col gap-16">
            <p className="font-sans font-light text-3xl md:text-5xl leading-[1.2] transition-colors duration-700" style={{ color: hoveredIndex !== null ? "white" : "var(--primary)" }}>
              We do not guess. We operate on a rigorous, data-driven framework of strategic discovery, robust engineering, and aggressive scaling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-heading  text-sm tracking-[0.2em] capitalize opacity-70 transition-colors duration-700" style={{ color: hoveredIndex !== null ? "white" : "var(--primary)" }}>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] transition-colors duration-700" style={{ backgroundColor: hoveredIndex !== null ? "white" : "var(--primary)", opacity: 0.5 }} />
                <span>01. Market & Intent Discovery</span>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] transition-colors duration-700" style={{ backgroundColor: hoveredIndex !== null ? "white" : "var(--primary)", opacity: 0.5 }} />
                <span>02. Data-Driven Prototyping</span>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] transition-colors duration-700" style={{ backgroundColor: hoveredIndex !== null ? "white" : "var(--primary)", opacity: 0.5 }} />
                <span>03. High-Performance Engineering</span>
              </div>
              <div className="flex flex-col gap-6">
                <div className="w-12 h-[1px] transition-colors duration-700" style={{ backgroundColor: hoveredIndex !== null ? "white" : "var(--primary)", opacity: 0.5 }} />
                <span>04. SEO Domination & Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Cursor-Tracking Thumbnail */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 left-0 w-[350px] h-[450px] rounded-[2rem] overflow-hidden pointer-events-none z-[100] hidden lg:block shadow-2xl border border-white/20 origin-center"
            style={{ 
              x: cursorX, 
              y: cursorY 
            }}
          >
            <Image 
              src={services[hoveredIndex].image} 
              alt={services[hoveredIndex].title} 
              fill 
              className="object-cover" 
              priority
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
