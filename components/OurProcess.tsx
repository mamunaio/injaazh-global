"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hexagon, Layers, Cpu, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "DISCOVERY & AUDIT",
    icon: Hexagon,
    desc: "We don't guess — we engineer. Every Injaazh engagement starts with a deep deconstruction of your current digital presence, a full competitor gap analysis, and a mathematically proven roadmap for market domination.",
    tags: ["Market Research", "UX Audit", "Technical Architecture"]
  },
  {
    id: "02",
    title: "SYSTEM DESIGN",
    icon: Layers,
    desc: "Awwwards-level aesthetics mapped to conversion psychology. As a full-service digital agency, we build design systems that are ruthlessly efficient, visually unparalleled, and engineered to keep visitors engaged — and convert them.",
    tags: ["Wireframing", "UI/UX Design", "Prototyping"]
  },
  {
    id: "03",
    title: "CORE ENGINEERING",
    icon: Cpu,
    desc: "Performance is non-negotiable. We deploy ultra-fast Next.js infrastructures built for global audiences — guaranteeing 99/100 Lighthouse scores, sub-second load times, and Core Web Vitals that satisfy Google US, UK, and AU simultaneously.",
    tags: ["Next.js App Router", "React 19", "GSAP Animations"]
  },
  {
    id: "04",
    title: "SCALE & DOMINATE",
    icon: Zap,
    desc: "Deployment is just the beginning. We integrate advanced technical SEO, real-time analytics, and conversion rate optimization to continuously grow your market share — turning your website into a 24/7 client-acquisition machine.",
    tags: ["Technical SEO", "Performance Monitoring", "CRO"]
  }
];

export default function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin the left side while the right side scrolls
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: leftRef.current,
      pinSpacing: false, // Prevents pushing layout down weirdly
    });

    // Fade in text elements on the left
    gsap.from(".process-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    // Animate the cards on the right as they enter
    gsap.utils.toArray<HTMLElement>(".process-card").forEach((card, i) => {
      gsap.set(card, { transformPerspective: 1000 });
      gsap.from(card, {
        y: 250,
        opacity: 0,
        scale: 0.85,
        rotationX: 15,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 40%",
          scrub: 1.5, // Smoothly ties animation to scroll speed
        }
      });
    });

    // Vertical Progress Timeline Fill
    gsap.to(".process-progress", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 text-primary pt-10 pb-16">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#6324FC 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F0] dark:from-[#060608] via-transparent to-[#F5F5F0] dark:to-[#060608] transition-colors duration-500" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row relative z-10">
        
        {/* Left Side (Sticky) */}
        <div className="w-full lg:w-1/2 h-screen hidden lg:flex flex-col justify-start pt-[20vh] pr-20 relative" ref={leftRef}>
          
          {/* Rotating Abstract Wireframe SVG */}
          <motion.div 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] opacity-[0.03] pointer-events-none z-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,5 95,27 95,72 50,95 5,72 5,27" fill="none" stroke="currentColor" className="text-primary/20" strokeWidth="0.5"/>
              <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" fill="none" stroke="currentColor" className="text-primary/20" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-primary/20" strokeWidth="0.5" strokeDasharray="2 4"/>
              <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" className="text-primary/20" strokeWidth="0.5" />
              <line x1="5" y1="27" x2="95" y2="72" stroke="currentColor" className="text-primary/20" strokeWidth="0.5" />
              <line x1="5" y1="72" x2="95" y2="27" stroke="currentColor" className="text-primary/20" strokeWidth="0.5" />
            </svg>
          </motion.div>

          <div className="font-mono text-[#6324FC] text-sm tracking-[0.3em] uppercase mb-8 process-title relative z-10">
            // THE METHODOLOGY
          </div>
          <h2 className="font-heading text-8xl lg:text-[8.5rem] leading-[0.8] tracking-tight mb-8">
            <div className="process-title overflow-hidden pb-1">THE</div>
            <div className="process-title overflow-hidden pb-1">ARCHITECTURE</div>
            <div className="process-title overflow-hidden pb-1">OF</div>
            <div className="process-title overflow-hidden pb-1 stroke-text text-transparent italic">DOMINANCE</div>
          </h2>
          <p className="font-sans font-light text-lg text-primary/60 max-w-md process-title border-l-2 border-[#6324FC] pl-6 leading-relaxed">
            We don't just build websites. We engineer high-performance digital ecosystems — designed to capture market share, outrank competitors, and dominate every channel your clients use to find you.
          </p>
        </div>

        {/* Right Side (Scrollable Cards) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-32 pt-[20vh] lg:pt-[20vh] pb-[10vh] relative" ref={rightRef}>
          
          {/* Vertical Progress Line (Desktop Only) */}
          <div className="absolute left-0 top-[20vh] bottom-[10vh] w-[1px] bg-primary/10 hidden lg:block z-0">
             <div className="process-progress w-full bg-[#6324FC] h-0 origin-top" />
          </div>

          {/* Mobile Header (Hidden on Desktop) */}
          <div className="lg:hidden mb-20 relative z-10">
            <div className="font-mono text-[#6324FC] text-sm tracking-[0.3em] uppercase mb-4">
              // THE METHODOLOGY
            </div>
            <h2 className="font-heading text-7xl leading-[0.85] tracking-tight mb-6">
              THE ARCHITECTURE <br/> <span className="stroke-text text-transparent italic">OF DOMINANCE</span>
            </h2>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="process-card relative w-full p-10 md:p-14 bg-primary/[0.02] backdrop-blur-xl border border-primary/10 shadow-[0_0_50px_rgba(0,0,0,0.1)] group lg:ml-12 z-10">
              
              {/* Timeline Connector Dot (Desktop Only) */}
              <div className="absolute top-1/2 -left-[3rem] w-3 h-3 bg-background border border-primary/20 rounded-full hidden lg:block group-hover:border-[#6324FC] group-hover:bg-[#6324FC] transition-colors duration-500 shadow-[0_0_10px_rgba(99,36,252,0)] group-hover:shadow-[0_0_20px_rgba(99,36,252,0.8)] z-20 -translate-y-1/2 -translate-x-1/2" />
              
              {/* Connector Line to Dot */}
              <div className="absolute top-1/2 left-[-3rem] w-[3rem] h-[1px] bg-primary/10 hidden lg:block group-hover:bg-[#6324FC]/50 transition-colors duration-500 z-10" />

              {/* Subtle Red Glow on Hover */}
              <div className="absolute inset-0 bg-[#6324FC]/0 group-hover:bg-[#6324FC]/5 transition-colors duration-500 pointer-events-none" />
              
              {/* Massive Background Number */}
              <div className="absolute top-4 right-8 font-heading text-[8rem] leading-none text-primary/[0.03] group-hover:text-[#6324FC]/10 transition-colors duration-500 select-none">
                {step.id}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/5 border border-primary/10 flex items-center justify-center mb-10 group-hover:bg-[#6324FC] group-hover:border-[#6324FC] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-[#6324FC] group-hover:text-background transition-colors duration-500" />
                </div>
                
                <h3 className="font-heading text-4xl tracking-widest text-primary mb-6">
                  {step.title}
                </h3>
                
                <p className="font-sans font-light text-lg text-primary/60 mb-10 leading-relaxed">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {step.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="font-mono text-xs tracking-wider px-4 py-2 bg-primary/5 border border-primary/10 text-primary/60 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
