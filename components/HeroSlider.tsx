"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

import { useProjectModal } from "./ProjectModalContext";
import { ArrowRight } from "lucide-react";

export default function HeroSlider() {
  const { openModal } = useProjectModal();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Spring physics for smooth mouse follow
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms for different layers
  const textX = useTransform(mouseX, [-1, 1], [-50, 50]);
  const textY = useTransform(mouseY, [-1, 1], [-50, 50]);
  
  const img1X = useTransform(mouseX, [-1, 1], [-50, 50]);
  const img1Y = useTransform(mouseY, [-1, 1], [-50, 50]);
  
  const img2X = useTransform(mouseX, [-1, 1], [80, -80]);
  const img2Y = useTransform(mouseY, [-1, 1], [80, -80]);

  const img3X = useTransform(mouseX, [-1, 1], [-40, 40]);
  const img3Y = useTransform(mouseY, [-1, 1], [40, -40]);

  return (
    <section 
      ref={containerRef}
      className="hero-section relative h-screen w-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic Background Glow */}
      <motion.div 
        className="absolute w-[50vw] h-[50vw] bg-[#6324FC]/20 blur-[120px] rounded-full pointer-events-none"
        style={{ x: useTransform(mouseX, [-1, 1], [-200, 200]), y: useTransform(mouseY, [-1, 1], [-200, 200]) }}
      />

      {/* Floating Image 1 - Top Left */}
      <motion.div 
        style={{ x: img1X, y: img1Y, rotate: -10 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-[16%] left-[6%] w-[32vw] h-[16vh] md:top-[35%] md:left-[5%] md:w-[18vw] md:h-[25vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-primary/10 z-10 block"
      >
        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500 z-10" />
        <Image src="/assets/aka_moving_final.webp" alt="Project 1" fill sizes="(max-width: 768px) 100vw, (min-width: 768px) 18vw, 32vw" className="object-cover" priority />
      </motion.div>

      {/* Floating Image 2 - Bottom Right */}
      <motion.div 
        style={{ x: img2X, y: img2Y, rotate: 15 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-[17%] right-[3%] w-[32vw] h-[16vh] md:bottom-[6%] md:right-[5%] md:w-[22vw] md:h-[30vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-primary/10 z-10 block"
      >
        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500 z-10" />
        <Image src="/assets/nexus_esports_final.webp" alt="Project 2" fill sizes="(max-width: 768px) 100vw, (min-width: 768px) 22vw, 32vw" className="object-cover" priority />
      </motion.div>

      {/* Floating Image 3 - Center Top */}
      <motion.div 
        style={{ x: img3X, y: img3Y, rotate: 5 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        className="absolute top-[12%] right-[20%] w-[15vw] h-[20vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-primary/10 z-0 hidden md:block"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/assets/scalia_app_final.webp" alt="Project 3" fill sizes="(max-width: 768px) 100vw, 15vw" className="object-cover" priority />
      </motion.div>

      {/* Massive Central Typography */}
      <div 
        className="hero-content-container relative z-20 flex flex-col items-center text-center pointer-events-none px-6 md:px-0 w-full"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="group relative max-w-[90vw]"
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#6324FC] via-[#A855F7] to-[#00E5FF] rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative font-heading  text-white tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[11px] bg-[#060608] dark:bg-black backdrop-blur-xl px-4 md:px-8 py-3 rounded-full border border-white/10 capitalize flex items-center justify-center gap-2 md:gap-4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0" />
            <span className="truncate">TOP-TIER WEB ENGINEERING & SEO AGENCY</span>
          </div>
        </motion.div>

        <h1 className="hero-title font-heading text-[12vw] sm:text-[10vw] md:text-[9vw] leading-[0.8] tracking-tighter text-primary drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center mt-6 font-bold text-center uppercase">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          >
            WE BUILD WHAT
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
            className="stroke-text text-primary/5 italic opacity-90 mt-2 md:mt-0"
          >
            WINS AWARDS.
          </motion.div>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="hero-description mt-6 md:mt-8 max-w-[700px] font-sans font-light text-sm md: text-primary/80 leading-relaxed px-2 md:px-0"
        >
          We engineer high-performance Next.js websites, dominate search through Technical SEO, and build revenue infrastructure that scales globally — for the US, UK, and beyond.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="hero-button-container mt-8 pointer-events-auto"
        >
          <button 
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105"
          >
            {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            
            <div className="relative w-full h-full px-8 py-4 rounded-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
              {/* Flowing background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              
              {/* Pulsating dot */}
              <span className="w-2.5 h-2.5 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />
              
              <span className="relative z-10 flex items-center gap-2 font-heading  tracking-wider text-primary capitalize transition-colors duration-500">
                LET'S TALK
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#6324FC] dark:group-hover:text-white" />
              </span>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Circular Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="hero-scroll-indicator absolute bottom-8 z-30 flex items-center justify-center cursor-pointer group"
      >
        {/* Spinning Text Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[120px] h-[120px]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-60 group-hover:opacity-100 group-hover:text-[#00E5FF] transition-all duration-500">
            <defs>
              <path id="scroll-path" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text fontSize="9.5" fill="currentColor" letterSpacing="2.5" className="font-heading  capitalize text-white font-semibold">
              <textPath href="#scroll-path" startOffset="0%">
                SCROLL DOWN • DISCOVER MORE • SCROLL DOWN • DISCOVER MORE •
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Center Button Background */}
        <div className="relative w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#6324FC]/20 group-hover:border-[#6324FC]/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(99,36,252,0.4)] group-hover:scale-110">
          
          {/* Bouncing Arrow */}
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#00E5FF] transition-colors duration-500">
              <line x1="12" y1="4" x2="12" y2="20"></line>
              <polyline points="19 13 12 20 5 13"></polyline>
            </svg>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
