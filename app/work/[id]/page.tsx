"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Zap, Target, TrendingUp, Cpu, Globe, Code, Layout, Palette, MessageSquare, Quote, MoveRight, ChevronRight, Hash, Calendar, User, ExternalLink, Database } from "lucide-react";

// --- Components ---

function NumberTicker({ value, suffix, prefix }: { value: string, suffix?: string, prefix?: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = true; // Simplified for this template

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [numericValue, isInView]);

  return (
    <span className="font-heading">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

// --- Enhanced Data ---

const projectData: Record<string, any> = {
  "themesjet": { 
    id: "01", 
    title: "THEMES JET", 
    subtitle: "Digital Dominance through Architectural Purity.",
    category: "Marketplace Architecture", 
    client: "ThemesJet Elite", 
    year: "2024", 
    img: "/assets/themes_jet_final.webp", 
    accent: "#6324FC",
    secondaryAccent: "#00E5FF",
    tags: ["Full-Stack", "Fintech", "UX Strategy"],
    overview: "ThemesJet is not just a marketplace; it is an ecosystem. We were tasked with building a platform that could handle high-frequency digital asset transactions while maintaining the aesthetic standards of a world-class design agency.",
    problem: "The legacy digital marketplace landscape is cluttered, slow, and lacks the premium feel that high-end developers demand. ThemesJet needed a radical departure from the 'template store' norm.",
    solution: "We engineered a sub-second browsing experience using Next.js Edge Runtime, combined with a bespoke multi-vendor dashboard that simplifies complex asset management.",
    tech: [
      { name: "Next.js 14", icon: Code },
      { name: "PostgreSQL", icon: Database },
      { name: "Stripe Connect", icon: Zap },
      { name: "AWS Edge", icon: Globe }
    ],
    metrics: [
      { label: "Assets", val: "500", suffix: "+", icon: Hash, size: "large" },
      { label: "Devs", val: "10", suffix: "k", icon: User, size: "small" },
      { label: "Speed", val: "99", suffix: "/100", icon: Zap, size: "small" },
      { label: "Growth", val: "340", suffix: "%", icon: TrendingUp, size: "medium" }
    ],
    testimonial: {
      quote: "Injaazh Global doesn't build websites. They build competitive advantages.",
      author: "Marcus Thorne",
      role: "CEO"
    },
    next: { id: "aka-moving", title: "AKA MOVING" }
  },
  "aka-moving": { 
    id: "02", 
    title: "AKA MOVING", 
    subtitle: "Logistics Reimagined for the Modern Era.",
    category: "Service Platform", 
    client: "AKA Moving", 
    year: "2024", 
    img: "/assets/aka_moving_final.webp", 
    accent: "#00E5FF",
    secondaryAccent: "#6324FC",
    tags: ["Automation", "React", "Optimization"],
    overview: "Migrating a traditional logistics company into a fully automated digital platform capable of handling thousands of moving requests across Canada.",
    problem: "Manual scheduling and opaque pricing were causing 30% lead leakage. The industry standard was outdated and friction-heavy.",
    solution: "A custom real-time booking engine with dynamic pricing algorithms and automated workforce dispatching.",
    tech: [
      { name: "React.js", icon: Code },
      { name: "Google Maps", icon: Globe },
      { name: "Node.js", icon: Cpu },
      { name: "Twilio", icon: MessageSquare }
    ],
    metrics: [
      { label: "Bookings", val: "150", suffix: "%", icon: Hash, size: "large" },
      { label: "Availability", val: "24", suffix: "/7", icon: Calendar, size: "small" },
      { label: "Satisfaction", val: "98", suffix: "%", icon: Target, size: "small" },
      { label: "Efficiency", val: "40", suffix: "%", icon: TrendingUp, size: "medium" }
    ],
    testimonial: {
      quote: "Our operational costs dropped by 40% in the first quarter post-launch.",
      author: "Sarah Jenkins",
      role: "COO"
    },
    next: { id: "nexus-esports", title: "NEXUS ESPORTS" }
  },
  "nexus-esports": {
    id: "03",
    title: "NEXUS ESPORTS",
    subtitle: "High-octane UI for global competitive gaming.",
    category: "Gaming Platform",
    client: "Nexus Gaming",
    year: "2024",
    img: "/assets/nexus_esports_final.webp",
    accent: "#FF2D55",
    secondaryAccent: "#00E5FF",
    tags: ["UI/UX", "Esports", "Next.js"],
    overview: "A lightning-fast, high-performance web architecture for a global esports platform, achieving instant registrations and sub-second load times.",
    problem: "Legacy platforms couldn't handle the traffic spikes during live tournaments.",
    solution: "We deployed Edge computing and React Server Components.",
    tech: [
      { name: "React", icon: Code },
      { name: "Edge", icon: Globe },
      { name: "Node.js", icon: Cpu }
    ],
    metrics: [
      { label: "Signups", val: "200", suffix: "%", icon: Target, size: "large" },
      { label: "Speed", val: "0.9", suffix: "s", icon: Zap, size: "medium" }
    ],
    testimonial: {
      quote: "Our platform didn't just survive the tournament; it dominated it.",
      author: "Alex Mercer",
      role: "CTO"
    },
    next: { id: "themesjet", title: "THEMES JET" }
  }
  // Other projects follow similar structure...
};



export default function UltraPremiumCaseStudy() {
  const params = useParams();
  const slug = (params.id as string) || "themesjet";
  const project = projectData[slug] || projectData["themesjet"];

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Parallax
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <main ref={containerRef} className="bg-[#060608] min-h-screen text-white relative overflow-x-hidden">
      
      {/* 1. Cinematic "Movie Poster" Hero */}
      <section ref={heroRef} className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            className="object-cover grayscale brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/80 via-transparent to-[#060608]" />
        </motion.div>

        {/* Masked Typo Layer */}
        <div className="relative z-10 w-full max-w-[1600px] px-6 lg:px-12 flex flex-col items-center">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             style={{ y: heroTextY }}
             className="text-center"
           >
              <div className="font-heading  text-[10px] tracking-[0.8em] text-[#6324FC] capitalize mb-8 ml-[0.8em]">Case Study // {project.id}</div>
              <h1 className="font-heading text-[15vw] leading-[0.75] tracking-tighter capitalize mb-8">
                 {project.title.split(' ')[0]} <br/>
                 <span className="stroke-text text-transparent italic opacity-40">{project.title.split(' ')[1] || ""}</span>
              </h1>
              <div className="font-sans font-light text-2xl md:text-4xl text-white/40 tracking-tight max-w-3xl mx-auto leading-tight italic">
                 &quot;{project.subtitle}&quot;
              </div>
           </motion.div>
        </div>

        {/* Scroll Indicator Overlay */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-30">
           <div className="font-heading  text-[9px] tracking-[0.4em] capitalize ">Scroll to Explore</div>
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" 
           />
        </div>

        {/* Back Link */}
        <Link href="/work" className="absolute top-12 left-12 z-[100] group flex items-center gap-4">
           <div className="relative w-12 h-12 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg isolate">
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <ArrowLeft className="relative z-10 w-4 h-4 text-[#6324FC] group-hover:text-white transition-all duration-500" />
              </div>
           </div>
           <span className="font-heading  text-[9px] tracking-[0.4em] capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-500">Archive</span>
        </Link>
      </section>

      {/* 2. Bento Grid Stats */}
      <section className="relative z-20 py-16 md:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto -mt-20">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[500px]">
            {project.metrics.map((m: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`
                  relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl overflow-hidden flex flex-col justify-between group hover:border-[#6324FC]/30 transition-all duration-700
                  ${m.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${m.size === 'medium' ? 'md:col-span-2' : ''}
                `}
              >
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <m.icon className="w-32 h-32 text-white" />
                 </div>
                 
                 <div className="flex justify-between items-start relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                       <m.icon className="w-5 h-5 text-[#6324FC]" />
                    </div>
                    <div className="font-heading  text-[10px] tracking-widest text-white/20 capitalize ">{m.label}</div>
                 </div>

                 <div className="relative z-10 mt-auto">
                    <div className={`font-heading tracking-tighter leading-none ${m.size === 'large' ? 'text-9xl' : 'text-6xl'} text-white mb-2`}>
                       <NumberTicker value={m.val} suffix={m.suffix} prefix={m.prefix} />
                    </div>
                    <div className="font-heading  text-[9px] tracking-[0.3em] text-[#6324FC] capitalize ">Validated Metric // 0x{i}</div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 3. The Narrative (Bento Style Layout) */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Context Sidebar */}
            <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-48">
               <div className="space-y-4">
                  <div className="font-heading  text-[9px] text-[#6324FC] tracking-[0.5em] capitalize ">Core Intel</div>
                  <div className="flex flex-wrap gap-3">
                     {project.tags.map((tag: string, i: number) => (
                       <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full font-heading  text-[9px] text-white/40 capitalize ">
                          {tag}
                       </span>
                     ))}
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-8 font-heading  text-[9px] tracking-widest capitalize ">
                  <div className="space-y-2">
                     <div className="text-white/20">Client</div>
                     <div className="text-white text-base font-heading">{project.client}</div>
                  </div>
                  <div className="space-y-2">
                     <div className="text-white/20">Year</div>
                     <div className="text-white text-base font-heading">{project.year}</div>
                  </div>
               </div>

               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                  <div className="font-heading  text-[9px] text-[#6324FC] tracking-[0.5em] capitalize mb-4">Tech Stack</div>
                  <div className="grid grid-cols-1 gap-4">
                     {project.tech.map((t: any, i: number) => (
                       <div key={i} className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-4">
                             <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#6324FC]/20 transition-colors">
                                <t.icon className="w-3.5 h-3.5 text-white/40 group-hover:text-[#6324FC]" />
                             </div>
                             <span className="font-heading  text-[10px] text-white/60 group-hover:text-white transition-colors capitalize ">{t.name}</span>
                          </div>
                          <ArrowUpRight className="w-3 h-3 text-white/10 group-hover:text-[#6324FC] transition-colors" />
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Main Narrative Content */}
            <div className="lg:col-span-8 space-y-32">
               
               {/* Overview */}
               <div className="space-y-10">
                  <div className="font-heading  text-[11px] text-[#6324FC] tracking-[0.5em] capitalize ">Project Essence</div>
                  <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize ">
                     THE <span className="italic opacity-40">OVERVIEW.</span>
                  </h2>
                  <p className="font-sans font-light text-2xl md:text-4xl text-white/60 leading-tight">
                     {project.overview}
                  </p>
               </div>

               {/* Problem/Solution Split */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                     <div className="w-12 h-[1px] bg-white/10" />
                     <div className="font-heading  text-[10px] text-white/30 tracking-[0.4em] capitalize ">The Friction</div>
                     <h3 className="font-heading text-4xl capitalize tracking-tighter">The Challenge</h3>
                     <p className="font-sans font-light text-xl text-white/40 leading-relaxed">{project.problem}</p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                  >
                     <div className="w-12 h-[1px] bg-[#6324FC]/30" />
                     <div className="font-heading  text-[10px] text-[#6324FC] tracking-[0.4em] capitalize ">The Breakthrough</div>
                     <h3 className="font-heading text-4xl capitalize tracking-tighter">The Solution</h3>
                     <p className="font-sans font-light text-xl text-white/40 leading-relaxed">{project.solution}</p>
                  </motion.div>
               </div>

               {/* Editorial Quote */}
               <div className="relative py-24 border-y border-white/5">
                  <Quote className="absolute top-10 left-0 w-20 h-20 text-[#6324FC] opacity-[0.05] pointer-events-none" />
                  <blockquote className="font-heading text-5xl md:text-7xl text-center leading-[1.1] tracking-tighter capitalize ">
                     &quot;{project.testimonial.quote}&quot;
                  </blockquote>
                  <div className="mt-12 flex flex-col items-center gap-2">
                     <div className="font-heading text-2xl">{project.testimonial.author}</div>
                     <div className="font-heading  text-[9px] text-[#6324FC] tracking-[0.3em] capitalize ">{project.testimonial.role}</div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Horizontal Scroll "Masterpiece" Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-white text-black overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
         
         <div className="max-w-[1400px] mx-auto mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
               <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize ">
                  VISUAL <br/>
                  <span className="text-[#6324FC] italic">CHRONICLE.</span>
               </h2>
               <div className="max-w-sm border-l-2 border-[#6324FC] pl-8">
                  <p className="font-heading  text-[11px] tracking-widest capitalize text-black/40 mb-4">Gallery 0x{project.id}</p>
                  <p className="font-sans font-light text-xl leading-relaxed">A surgical breakdown of the user experience and architectural depth of the project.</p>
               </div>
            </div>
         </div>

         {/* Cinematic Large Image */}
         <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl mb-24 group">
            <Image src={project.img} alt="Full Showcase" fill className="object-cover group-hover:scale-105 transition-transform duration-[3s]" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-black/5 bg-black/5 p-12 flex items-center justify-center">
               <Image src={project.img} alt="Shot 1" fill className="object-cover opacity-80" />
            </div>
            <div className="flex flex-col justify-center space-y-12 p-12">
               <div className="space-y-4">
                  <div className="font-heading text-4xl capitalize tracking-tighter italic text-[#6324FC]">01 // Interaction Design</div>
                  <p className="font-sans font-light text-2xl text-black/60 leading-tight">We created a custom animation engine that handles state transitions with fluid, physics-based motion.</p>
               </div>
               <div className="space-y-4">
                  <div className="font-heading text-4xl capitalize tracking-tighter italic text-[#6324FC]">02 // Performance Core</div>
                  <p className="font-sans font-light text-2xl text-black/60 leading-tight">Optimizing every asset to ensure sub-second interaction times, regardless of device or network speed.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Next Project Takeover */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#060608] border-t border-white/5 group">
         <Link href={`/work/${project.next.id}`} className="relative z-10 w-full h-full flex flex-col items-center justify-center cursor-pointer">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="absolute inset-0 z-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
            >
               <Image 
                  src={projectData[project.next.id]?.img || project.img} 
                  alt="Next Project" 
                  fill 
                  className="object-cover grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]" />
            </motion.div>

            <div className="relative z-10 text-center space-y-8">
               <div className="font-heading  text-[11px] tracking-[0.8em] text-white/30 capitalize ">Next Masterpiece</div>
               <h2 className="font-heading text-[15vw] leading-none tracking-tighter capitalize text-white group-hover:text-[#6324FC] transition-colors duration-700 italic">
                  {project.next.title.split(' ')[0]}
               </h2>
               <div className="flex items-center justify-center gap-6">
                  <div className="w-16 h-[1px] bg-white/20" />
                   <div className="relative w-20 h-20 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-xl isolate">
                      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                        <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                      </div>
                      <div className="relative w-full h-full rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                        <MoveRight className="relative z-10 w-8 h-8 text-[#6324FC] group-hover:text-white transition-all duration-500" />
                      </div>
                   </div>
                  <div className="w-16 h-[1px] bg-white/20" />
               </div>
            </div>
         </Link>
      </section>

    </main>
  );
}
