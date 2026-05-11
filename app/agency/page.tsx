"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";

const methodology = [
  { 
    id: "01", 
    title: "Discovery & Strategy", 
    desc: "We don't just take orders. We dive deep into your business model, market gaps, user psychology, and technical constraints — then formulate a bulletproof digital strategy tailored to your goals." 
  },
  { 
    id: "02", 
    title: "UX/UI Architecture", 
    desc: "Wireframes to high-fidelity prototypes — designed around conversion psychology and Western user behavior. Every layout decision is intentional, not decorative." 
  },
  { 
    id: "03", 
    title: "Engineering & Performance", 
    desc: "Clean, modular, production-ready code built for speed, security, and scale. PageSpeed 99/100. Core Web Vitals compliant. Built to rank and built to last." 
  },
  { 
    id: "04", 
    title: "QA & Deployment", 
    desc: "Rigorous testing across devices, browsers, and screen sizes before a single line goes live. Then we monitor, optimize, and support — because launch day is just the beginning." 
  },
];

const timeline = [
  { 
    year: "2015", 
    title: "The Inception", 
    desc: "Founded by a developer with a single laptop and an obsession for performance. We set out to redefine what a digital agency could deliver — starting with one client at a time." 
  },
  { 
    year: "2019", 
    title: "Global Expansion", 
    desc: "Crossed 20+ countries and 500+ clients. Expanded our team with specialists in SEO, marketing, content, and UI/UX — becoming a true full-service digital agency for Western markets." 
  },
  { 
    year: "2024", 
    title: "Market Leadership", 
    desc: "1,200+ clients. $1B+ in client revenue generated. ThemesJet launched as our flagship digital product — serving 10,000+ developers worldwide. The journey continues." 
  },
];

const clients = [
  { name: "ThemesJet", industry: "Marketplace", location: "Global" },
  { name: "Confidential", industry: "E-Commerce", location: "New York, US" },
  { name: "Confidential", industry: "SaaS & Tech", location: "San Francisco, US" },
  { name: "Confidential", industry: "Architecture", location: "London, UK" },
];

export default function AgencyPage() {
  const { openModal } = useProjectModal();
  const [activeAccordion, setActiveAccordion] = useState<string | null>("01");
  const dragRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const updateConstraints = () => {
    if (dragRef.current) {
      const scrollWidth = dragRef.current.scrollWidth;
      const offsetWidth = dragRef.current.offsetWidth;
      setDragConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  };

  useEffect(() => {
    updateConstraints();
    const timer = setTimeout(updateConstraints, 500);
    window.addEventListener("resize", updateConstraints);
    return () => {
      window.removeEventListener("resize", updateConstraints);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="w-full bg-[#060608] text-white min-h-screen pb-0 font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        
        {/* Massive Background Text */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.02 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center font-heading text-[22vw] md:text-[27vw] leading-none whitespace-nowrap tracking-tighter text-white text-center w-full"
        >
          INJAAZH
        </motion.div>

        <div className="relative z-10 px-6 max-w-[1200px] text-center flex flex-col items-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-mono text-sm tracking-[0.5em] text-[#6324FC] uppercase mb-8"
          >
            A COLLECTIVE OF DESIGNERS, ENGINEERS, AND STRATEGISTS.
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase mb-12"
          >
            We engineer <br/>digital <span className="italic text-[#6324FC]">dominance</span> <br/>for global brands.
          </motion.h1>
        </div>
      </section>

      {/* 2. Manifesto */}
      <section className="py-32 md:py-48 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-[#6324FC]" />
          <span className="font-mono text-sm tracking-[0.5em] text-[#6324FC] uppercase">THE MANIFESTO</span>
        </div>
        
        <p className="font-sans font-light text-3xl md:text-5xl lg:text-[4vw] leading-[1.3] text-white/90 max-w-5xl">
          The internet is flooded with mediocrity. We exist to build platforms that break through the noise. We don't use templates. We don't cut corners. We write code that scales and design interfaces that capture human emotion.
        </p>
      </section>

      {/* 3. The Journey (Timeline) */}
      <section className="relative w-full border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side */}
          <div className="lg:sticky lg:top-0 h-auto lg:h-screen p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-[#060608]">
            <h2 className="font-heading text-6xl md:text-8xl uppercase tracking-tighter mb-8">
              THE <br/><span className="italic text-[#6324FC]">JOURNEY</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed">
              From a single freelancer to a global digital agency. This is how we evolved.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col bg-[#060608]">
            {timeline.map((item, index) => (
              <div key={index} className="p-12 lg:p-24 border-b border-white/5 hover:bg-white/[0.01] transition-colors duration-500 group">
                <div className="font-mono text-5xl md:text-7xl text-white/5 mb-8 group-hover:text-[#6324FC] transition-colors duration-500">{item.year}</div>
                <h3 className="font-heading text-3xl mb-4">{item.title}</h3>
                <p className="font-sans font-light text-lg text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. How We Work */}
      <section className="py-32 md:py-48 px-6 lg:px-12 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-6xl md:text-[6vw] leading-[0.9] uppercase tracking-tighter sticky top-32">
              HOW <br/><span className="italic text-[#6324FC]">WE</span> <br/>WORK
            </h2>
            <p className="font-sans font-light text-xl text-white/50 mt-10 max-w-md leading-relaxed hidden lg:block sticky top-[300px]">
              A systematic approach to engineering digital excellence. No guesswork — just pure strategy and execution.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col border-t border-white/5">
            {methodology.map((item) => (
              <div key={item.id} className="border-b border-white/5 overflow-hidden">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between py-12 text-left hover:text-[#6324FC] transition-colors group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-sm text-white/20 group-hover:text-[#6324FC] transition-colors">{item.id}</span>
                    <h3 className="font-heading text-3xl">{item.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#6324FC] shrink-0 transition-colors">
                    {activeAccordion === item.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeAccordion === item.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <div className="pb-12 pl-[5.5rem] pr-8 font-sans font-light text-lg text-white/40 leading-relaxed">
                        {item.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Partners / Clients */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto border-y border-white/5 bg-[#060608]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#6324FC]" />
          <span className="font-mono text-sm tracking-[0.5em] text-[#6324FC] uppercase">PARTNERS IN CRIME</span>
        </div>

        <div className="w-full overflow-x-auto pb-8">
          <table className="w-full text-left font-sans min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 font-mono text-xs tracking-widest text-white/30 uppercase">
                <th className="pb-6 font-normal w-1/3">Client</th>
                <th className="pb-6 font-normal w-1/3">Industry</th>
                <th className="pb-6 font-normal w-1/3">Location</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                  <td className="py-10 font-heading text-3xl group-hover:text-[#6324FC] transition-colors">{client.name}</td>
                  <td className="py-10 font-light text-white/50 text-xl">{client.industry}</td>
                  <td className="py-10 font-light text-white/30 text-xl">{client.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Behind The Scenes */}
      <section className="py-40 overflow-hidden relative">
        <div className="px-6 lg:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between max-w-[1600px] mx-auto gap-8">
          <div>
            <h2 className="font-heading text-6xl md:text-[6vw] uppercase tracking-tighter leading-none mb-4">
              BEHIND THE <br/><span className="italic text-[#6324FC]">SCENES</span>
            </h2>
            <p className="font-sans font-light text-lg text-white/40 max-w-md">
              A glimpse into the digital products and platforms we've engineered for clients across the globe.
            </p>
          </div>
          <div className="font-mono text-xs text-[#6324FC] tracking-widest uppercase">
            DRAG TO EXPLORE →
          </div>
        </div>

        <motion.div 
          ref={dragRef}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragStart={updateConstraints}
          className="flex gap-8 px-6 lg:px-12 cursor-grab active:cursor-grabbing w-max"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="w-[85vw] md:w-[600px] aspect-[4/3] relative rounded-3xl overflow-hidden shrink-0 border border-white/5 bg-white/[0.02] pointer-events-none group">
              <Image 
                src={item % 2 === 0 ? "/assets/case_study_ecommerce_1777698148266.png" : "/assets/case_study_saas_1777698132702.png"} 
                alt="Culture" 
                fill 
                sizes="(max-width: 768px) 85vw, 600px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-auto"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 7. Outro */}
      <section className="h-[90vh] flex flex-col items-center justify-center text-center px-6 border-t border-white/5 relative overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-12 relative z-10 max-w-4xl uppercase">
          Let's build something <br/> <span className="italic text-[#6324FC]">extraordinary.</span>
        </h2>
        
        <button 
          onClick={() => openModal()}
          className="relative z-10 flex items-center gap-4 bg-[#6324FC] text-white px-12 py-6 rounded-full font-heading text-xl tracking-widest hover:scale-105 hover:shadow-[0_0_50px_rgba(99,36,252,0.5)] transition-all duration-300 mb-8"
        >
          GET A FREE PROPOSAL <ArrowUpRight className="w-5 h-5" />
        </button>

        <div className="flex flex-wrap justify-center gap-8 font-mono text-xs text-white/40 tracking-widest uppercase">
          <span>✓ 24hr response</span>
          <span>✓ USD pricing</span>
          <span>✓ No commitment required</span>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Injaazh",
            "description": "Injaazh is a full-service digital agency trusted by 1,200+ clients across 20+ countries. We offer web development, SEO, digital marketing, content writing, UI/UX design, and digital strategy.",
            "url": "https://injaazh.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Injaazh",
              "foundingDate": "2022",
              "numberOfEmployees": "10-50",
              "areaServed": ["US", "GB", "AU", "CA", "AE"],
              "slogan": "Achieving More"
            }
          })
        }}
      />
    </main>
  );
}
