"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, Zap, Globe, Search, ArrowRight } from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";

const timeline = [
  { year: "2015", title: "The Strategic Inception", desc: "Founded by a developer with a singular obsession for web performance and technical SEO. Focusing on measurable ROI rather than just aesthetics." },
  { year: "2019", title: "Global Agency Expansion", desc: "Crossed 20+ countries and 500+ enterprise clients. Evolving into a full-service global digital agency for competitive markets." },
  { year: "2024", title: "Enterprise Market Leadership", desc: "1,200+ clients worldwide. $1B+ in client revenue generated through our custom web solutions. Launched ThemesJet globally." },
];

const clients = [
  { name: "ThemesJet", industry: "Digital Marketplace", location: "Global", accent: "group-hover:bg-[#6324FC]", image: "/assets/enterprise_ecommerce_1780213870802.png" },
  { name: "Apex FinTech", industry: "Enterprise SaaS", location: "New York, US", accent: "group-hover:bg-[#00E5FF]", image: "/assets/b2b_saas_dashboard_1780213845016.png" },
  { name: "Quantum Labs", industry: "B2B Infrastructure", location: "San Francisco, US", accent: "group-hover:bg-[#FACC15]", image: "/assets/enterprise_ecommerce_1780213870802.png" },
  { name: "Nova Architect", industry: "Corporate Architecture", location: "London, UK", accent: "group-hover:bg-[#FF3366]", image: "/assets/b2b_saas_dashboard_1780213845016.png" },
];

const featuredCaseStudies = [
  { slug: "themesjet", title: "Enterprise E-commerce Web Design", image: "/assets/enterprise_ecommerce_1780213870802.png" },
  { slug: "scalia", title: "B2B SaaS Web Application UI/UX", image: "/assets/b2b_saas_dashboard_1780213845016.png" },
  { slug: "aka-moving", title: "Global Logistics Web Platform", image: "/assets/enterprise_ecommerce_1780213870802.png" },
  { slug: "nexus-esports", title: "Esports Tournament Dashboard", image: "/assets/b2b_saas_dashboard_1780213845016.png" },
  { slug: "novacore-esports", title: "Gaming Brand Architecture", image: "/assets/enterprise_ecommerce_1780213870802.png" }
];

export default function AgencyClient() {
  const { openModal } = useProjectModal();
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const dragRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const updateConstraints = () => {
    if (dragRef.current) {
      const scrollWidth = dragRef.current.scrollWidth;
      const offsetWidth = dragRef.current.offsetWidth;
      setDragConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  };

  // Cursor tracking setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    updateConstraints();
    const timer = setTimeout(updateConstraints, 500);
    window.addEventListener("resize", updateConstraints);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateConstraints);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

  return (
    <main ref={containerRef} className="w-full bg-[#060608] text-white min-h-screen pb-0 font-sans overflow-hidden selection:bg-[#6324FC] selection:text-white">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative w-full min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center overflow-hidden">
        {/* Dynamic Glow Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#6324FC]/20 to-[#00E5FF]/20 blur-[120px] rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />
        
        {/* Massive Background Text */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.02 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center font-heading text-[22vw] md:text-[18vw] leading-none whitespace-nowrap tracking-tighter text-white text-center w-full select-none"
        >
          INJAAZH
        </motion.div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 px-6 max-w-[1400px] text-center flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="font-heading  text-xs tracking-widest capitalize ">Global Digital Agency</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8 max-w-5xl mx-auto"
          >
            Engineering <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6324FC] to-[#00E5FF]">Dominance</span> <br/>
            Through Custom Web & SEO Solutions.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans font-light text-xl md:text-2xl text-white/50 max-w-3xl"
          >
            We are a collective of elite UI/UX designers, software engineers, and digital strategists transforming businesses into market leaders.
          </motion.h2>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
          >
            <span className="font-heading  text-[10px] tracking-[0.3em] text-white/30 capitalize ">Scroll to Explore</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. The Manifesto (Bento Grid) */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/[0.03] z-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#6324FC]" />
          <span className="font-heading  text-sm tracking-[0.5em] text-[#6324FC] capitalize ">The Agency Manifesto</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[600px]">
          
          {/* Main Manifesto Block (Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] p-12 overflow-hidden group bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 hover:border-white/20 hover:shadow-[0_0_40px_rgba(99,36,252,0.1)] transition-all duration-500 flex flex-col justify-center cursor-default"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,36,252,0.15),transparent_50%)]" />
            <h3 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8 relative z-10">
              We Break Through <br/><span className="italic text-[#6324FC]">The Noise.</span>
            </h3>
            <p className="font-sans font-light text-2xl md:text-3xl leading-[1.4] text-white/70 max-w-2xl relative z-10">
              The internet is flooded with generic templates. We exist to build <strong className="font-normal text-white">enterprise web applications</strong> that scale. We engineer <strong className="font-normal text-white">high-converting UI/UX designs</strong> and deploy advanced SEO strategies that capture absolute market share.
            </p>
          </motion.div>

          {/* Metric Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-500 group cursor-default"
          >
            <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center group-hover:bg-[#00E5FF]/20 group-hover:scale-110 transition-all duration-500">
              <Globe className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <h4 className="font-heading text-7xl tracking-tighter text-[#00E5FF] mb-2">20+</h4>
            <p className="font-heading  text-xs tracking-widest text-white/50 capitalize ">Countries Served</p>
          </motion.div>

          {/* Metric Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden bg-[#6324FC]/5 hover:bg-[#6324FC]/10 border border-[#6324FC]/20 hover:border-[#6324FC]/50 transition-all duration-500 group cursor-default"
          >
            <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-[#6324FC]/20 flex items-center justify-center group-hover:bg-[#6324FC]/40 group-hover:scale-110 transition-all duration-500">
              <Zap className="w-5 h-5 text-[#6324FC]" />
            </div>
            <h4 className="font-heading text-7xl tracking-tighter text-white mb-2">$1B+</h4>
            <p className="font-heading  text-xs tracking-widest text-white/70 capitalize ">Client Revenue Generated</p>
          </motion.div>

        </div>
      </div>
    </section>

      {/* 3. Methodology Bento */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/[0.03]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] hover:border-[#6324FC]/30 transition-all duration-500 cursor-default"
          >
            <Search className="w-10 h-10 text-[#6324FC] mb-8" />
            <h3 className="font-heading text-3xl capitalize tracking-tighter mb-4">Digital Strategy & SEO Architecture</h3>
            <p className="font-sans font-light text-white/50 leading-relaxed">
              We engineer revenue-generating ecosystems. Our process begins with deep market gap analysis, competitive SEO auditing, and global digital strategy formulation to ensure your brand captures high-intent traffic.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] hover:border-[#00E5FF]/30 transition-all duration-500 cursor-default"
          >
            <Code className="w-10 h-10 text-[#00E5FF] mb-8" />
            <h3 className="font-heading text-3xl capitalize tracking-tighter mb-4">Enterprise Web Engineering</h3>
            <p className="font-sans font-light text-white/50 leading-relaxed">
              We deploy scalable, production-ready code architectures built for speed and security. We guarantee Core Web Vitals compliance and 99/100 PageSpeed scores, ensuring your technical SEO foundation is flawless.
            </p>
          </motion.div>

        </div>
      </div>
    </section>

      {/* 4. Interactive Client Roster */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/[0.03] z-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#6324FC]" />
          <span className="font-heading  text-sm tracking-[0.5em] text-[#6324FC] capitalize ">Enterprise Clientele</span>
        </div>

        <div className="flex flex-col border-t border-white/5 relative">
          
          {/* Floating Cursor Image */}
          <motion.div 
            style={{ 
              x: cursorX, 
              y: cursorY, 
              translateX: "-50%", 
              translateY: "-50%",
              opacity: hoveredClient !== null ? 1 : 0,
              scale: hoveredClient !== null ? 1 : 0.8
            }}
            transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
            className="fixed top-0 left-0 w-[400px] h-[300px] rounded-3xl overflow-hidden pointer-events-none z-50 hidden lg:block shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                className={`absolute inset-0 transition-opacity duration-500 ${hoveredClient === idx ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={client.image} alt={client.name} fill className="object-cover" />
              </div>
            ))}
          </motion.div>

          {clients.map((client, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredClient(idx)}
              onMouseLeave={() => setHoveredClient(null)}
              className="group relative border-b border-white/5 py-12 px-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer overflow-hidden transition-all duration-500 hover:px-12 z-10"
            >
              {/* Dynamic Hover Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${client.accent}`} />
              
              <h3 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize relative z-10 group-hover:text-white transition-colors duration-500">
                {client.name}
              </h3>
              
              <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0 relative z-10">
                <span className="font-sans font-light text-xl text-white/60 group-hover:text-white/90 transition-colors">
                  {client.industry}
                </span>
                <span className="font-heading  text-xs tracking-widest text-white/30 capitalize group-hover:text-white/60 transition-colors">
                  {client.location}
                </span>
              </div>
              
              {/* Floating Arrow */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:flex w-16 h-16 rounded-full bg-white text-black items-center justify-center z-10">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 5. The Evolution (Timeline) */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/[0.03]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:sticky lg:top-0 h-auto lg:h-[80vh] p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-[#060608] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_left,rgba(99,36,252,0.15),transparent_70%)] pointer-events-none" />
            
            {/* Massive Watermark */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 font-heading text-[20vw] lg:text-[15vw] leading-none text-white/[0.02] pointer-events-none select-none z-0">
              05
            </div>

            <div className="relative z-10">
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8">
                THE <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6324FC] to-[#00E5FF]">
                  EVOLUTION
                </span>
              </h2>
              <div className="w-24 h-[1px] bg-gradient-to-r from-[#00E5FF] to-transparent mb-8" />
              <p className="font-sans font-light text-xl md:text-2xl text-white/60 max-w-md leading-relaxed">
                From a hyper-focused web development studio to an award-winning global digital agency trusted by industry titans.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-[#060608] relative">
            {timeline.map((item, index) => (
              <div key={index} className="p-12 lg:p-24 border-b border-white/5 hover:bg-white/[0.03] transition-all duration-700 group relative overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#6324FC]/0 group-hover:bg-[#6324FC]/10 blur-[100px] rounded-full transition-colors duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-6 mb-8">
                  <div className="font-heading text-7xl md:text-8xl lg:text-9xl text-transparent stroke-text opacity-30 group-hover:opacity-100 group-hover:text-[#6324FC] group-hover:stroke-none transition-all duration-700">
                    {item.year}
                  </div>
                  <div className="w-12 h-[1px] bg-white/10 group-hover:bg-[#00E5FF] transition-colors duration-700 hidden md:block" />
                </div>
                
                <h3 className="font-heading text-4xl md:text-5xl mb-6 capitalize tracking-tight relative z-10 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans font-light text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl relative z-10 group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* 6. Behind The Scenes */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/[0.03]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-4">
              AGENCY <br/><span className="italic text-[#6324FC]">CASE STUDIES</span>
            </h2>
            <p className="font-sans font-light  text-white/40 max-w-md">
              A glimpse into the digital products, headless commerce platforms, and web applications we've engineered.
            </p>
          </div>
          <div className="font-heading  text-xs text-[#6324FC] tracking-widest capitalize flex items-center gap-2">
            DRAG TO EXPLORE <ArrowRight className="w-4 h-4" />
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
          {featuredCaseStudies.map((item, idx) => (
            <Link 
              href={`/work/${item.slug}`}
              key={idx} 
              className="w-[85vw] md:w-[600px] aspect-[4/3] relative rounded-[2rem] overflow-hidden shrink-0 border border-white/5 bg-white/[0.02] group block"
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                sizes="(max-width: 768px) 85vw, 600px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="font-heading text-2xl capitalize tracking-wider text-white flex items-center gap-2">
                  View Project <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>

      {/* 7. Outro */}
      <section className="h-[90vh] flex flex-col items-center justify-center text-center px-6 border-t border-white/5 relative overflow-hidden bg-[#060608]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-12 relative z-10 max-w-5xl capitalize tracking-tighter">
          Let's engineer your <br/> <span className="italic text-[#6324FC]">digital growth.</span>
        </h2>
        
        <button 
          onClick={() => openModal()}
          className="relative z-10 flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-heading text-xl tracking-widest hover:bg-[#00E5FF] hover:scale-105 transition-all duration-300 mb-8 overflow-hidden group"
        >
          <span className="relative z-10">SCHEDULE A STRATEGY CALL</span>
          <ArrowUpRight className="w-5 h-5 relative z-10" />
        </button>

        <div className="flex flex-wrap justify-center gap-8 font-heading  text-xs text-white/40 tracking-widest capitalize relative z-10">
          <span>✓ Global SEO Audits</span>
          <span>✓ Custom Web Development</span>
          <span>✓ Enterprise UI/UX</span>
        </div>
      </section>
    </main>
  );
}
