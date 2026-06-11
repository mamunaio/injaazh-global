"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: "01", slug: "themesjet", title: "THEMES JET", category: "DIGITAL MARKETPLACE", client: "Elite Developers", year: "2024", img: "/assets/themes_jet_final.webp" },
  { id: "02", slug: "aka-moving", title: "AKA MOVING", category: "SERVICE PLATFORM", client: "AKA Moving", year: "2024", img: "/assets/aka_moving_final.webp" },
  { id: "03", slug: "nexus-esports", title: "NEXUS ESPORTS", category: "GAMING · UI/UX", client: "Nexus Gaming", year: "2024", img: "/assets/nexus_esports_final.webp" },
  { id: "04", slug: "novacore-esports", title: "NOVACORE ESPORTS", category: "ESPORTS · BRANDING", client: "NovaCore Gaming", year: "2024", img: "/assets/novacore_esports_final.webp" },
  { id: "05", slug: "scalia", title: "SCALIA", category: "FINTECH · SAAS", client: "Scalia Inc.", year: "2024", img: "/assets/scalia_app_final.webp" },
];

export default function WorkPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  // Advanced mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for position
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.5 });

  // Calculate velocity for skew effect
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Calculate horizontal velocity for the skew physics
      const currentVelocity = e.clientX - lastX.current;
      setVelocity(currentVelocity);
      lastX.current = e.clientX;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Skew transform based on horizontal velocity
  const skew = useTransform(() => {
    const skewed = velocity * 0.15;
    return Math.max(Math.min(skewed, 15), -15); // Clamp between -15 and 15 degrees
  });

  return (
    <main className="w-full min-h-screen bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 text-primary relative overflow-hidden">
      
      {/* 1. Header Area */}
      <section className="w-full bg-[#060608] pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-primary/10 pb-12">
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize ">
              SELECTED <span className="text-[#6324FC] italic">WORKS</span>
            </h1>
            <p className="font-heading  text-sm tracking-widest text-primary/50 max-w-xs text-right hidden md:block">
              Engineering digital dominance through award-winning design and robust architectures.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Brutalist List */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/[0.03] z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col w-full border-t border-primary/10">
          {projects.map((project) => (
            <Link 
              href={`/work/${project.slug}`}
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.img)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group w-full flex flex-col md:flex-row items-center justify-between py-12 lg:py-16 border-b border-primary/10 hover:border-primary/50 transition-colors duration-500 cursor-pointer"
            >
              {/* Left Side: ID + Title */}
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                <span className="font-heading  text-xl text-primary/30 group-hover:text-[#6324FC] transition-colors duration-500">
                  {project.id}
                </span>
                
                {/* Rolling Text Reveal Animation */}
                <div className="relative overflow-hidden py-2">
                  <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize text-primary group-hover:-translate-y-[150%] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                    {project.title}
                  </h2>
                  <h2 className="absolute top-2 left-0 font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize text-[#6324FC] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] italic">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Right Side: Meta Info */}
              <div className="hidden md:flex items-center gap-16 font-heading  text-sm tracking-widest capitalize ">
                <span className="text-primary/50 group-hover:text-primary transition-colors duration-500 w-48 text-right">
                  {project.category}
                </span>
                <span className="text-primary/30 group-hover:text-primary transition-colors duration-500">
                  {project.year}
                </span>
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-[#6324FC] group-hover:border-[#6324FC] group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <ArrowUpRight className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

      {/* 3. Floating Reveal Image with Skew Physics */}
      <motion.div 
        className="fixed top-0 left-0 w-[400px] h-[500px] pointer-events-none z-50 overflow-hidden rounded-xl shadow-2xl hidden lg:block"
        style={{ 
          x: smoothX, 
          y: smoothY, 
          translateX: "-50%", 
          translateY: "-50%",
          skewX: skew,
          skewY: skew
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: hoveredProject ? 1 : 0, 
          scale: hoveredProject ? 1 : 0.8 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              key={hoveredProject}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={hoveredProject} 
                alt="Preview" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </main>
  );
}
