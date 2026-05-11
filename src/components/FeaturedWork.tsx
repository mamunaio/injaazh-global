"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const cases = [
  {
    id: "01",
    category: "WEB DEV · MARKETPLACE",
    title: "ThemesJet — Build Faster. Choose Better.",
    location: "🌐 GLOBAL",
    metrics: [
      { label: "PREMIUM ASSETS", val: 500, suffix: "+", prefix: "", icon: Zap },
      { label: "HAPPY DEVELOPERS", val: 10, suffix: "k+", icon: TrendingUp }
    ],
    body: "A full-scale premium digital marketplace for HTML, React & PHP templates — built from scratch with instant download, verified code, and 24/7 support.",
    tags: ["Next.js", "Marketplace", "Digital Products"],
    image: "/assets/themes_jet_final.webp",
    color: "#6324FC"
  },
  {
    id: "02",
    category: "LOGISTICS · SERVICE",
    title: "AKA Moving Redesign",
    location: "🇨🇦 CANADA",
    metrics: [
      { label: "BOOKING CONV.", val: 150, suffix: "%", prefix: "+", icon: Zap },
      { label: "AUTO SCHEDULING", val: 24, suffix: "/7", icon: Target }
    ],
    body: "Redesigning a logistics platform for higher conversion and automated scheduling.",
    tags: ["UI/UX", "Logistics", "Optimization"],
    image: "/assets/aka_moving_final.webp",
    color: "#00E5FF"
  },
  {
    id: "03",
    category: "GAMING · ESPORTS",
    title: "Nexus Esports UI",
    location: "GLOBAL GAMING",
    metrics: [
      { label: "REGISTRATION", val: 200, suffix: "%", prefix: "+", icon: Target },
      { label: "LOAD SPEED", val: 0.9, suffix: "s", icon: Zap },
    ],
    body: "High-performance UI for an esports platform with instant registration.",
    tags: ["UI/UX", "Esports", "Next.js"],
    image: "/assets/nexus_esports_final.webp",
    color: "#FF2D55"
  }
];

function NumberTicker({ value, suffix, prefix }: { value: number, suffix: string, prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }, 500);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <span className="font-heading text-2xl text-white">
      {prefix}
      {typeof value === 'number' && value % 1 !== 0 ? displayValue.toFixed(1) : Math.floor(displayValue)}
      {suffix}
    </span>
  );
}

function CaseStudyCard({ project, index }: { project: typeof cases[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [0, 400], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 400], [-5, 5]), springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/work/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group relative flex flex-col h-full cursor-pointer"
        onMouseMove={handleMouseMove}
        style={{ perspective: 1000 }}
      >
        <motion.div 
          style={{ rotateX, rotateY }}
          className="relative aspect-[4/5] mb-8 overflow-hidden rounded-3xl bg-[#111115] border border-white/5 transition-colors duration-500 group-hover:border-white/20"
        >
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 36, 252, 0.15), transparent 40%)`
              ),
            }}
          />

          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
          />
          
          {/* Floating Metric Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex gap-3 z-10">
            {project.metrics.map((m, i) => (
              <motion.div 
                key={i} 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex-1 bg-[#060608]/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl group/metric hover:bg-white/5 transition-colors duration-300"
              >
                 <div className="flex items-center gap-2 mb-1">
                    <m.icon className="w-3.5 h-3.5 text-[#6324FC] group-hover/metric:scale-110 transition-transform" />
                    <NumberTicker value={m.val} suffix={m.suffix} prefix={(m as any).prefix} />
                 </div>
                 <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase block">{m.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
        </motion.div>

        {/* Content Below */}
        <div className="px-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4 overflow-hidden">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="font-mono text-[11px] tracking-widest text-[#6324FC] uppercase flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC] animate-pulse" />
              {project.category}
            </motion.span>
            <span className="font-mono text-[11px] text-white/20">{project.location}</span>
          </div>
          
          <h3 className="font-heading text-3xl text-white mb-4 group-hover:text-[#6324FC] transition-colors duration-500 leading-tight">
            {project.title}
          </h3>

          {project.body && (
            <p className="font-sans font-light text-white/40 text-sm mb-6 line-clamp-3">
              {project.body}
            </p>
          )}

          <div className="mt-auto">
            <div className="group/link inline-flex items-center gap-3 py-2">
              <span className="font-mono text-[12px] tracking-[0.3em] text-white/40 group-hover/link:text-white transition-colors duration-300 uppercase">
                Explore Study
              </span>
              <div className="relative w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-[#6324FC] group-hover/link:bg-[#6324FC] transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-white group-hover/link:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function FeaturedWork() {
  return (
    <section className="w-full bg-[#060608] py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6324FC]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00E5FF]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Clean Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              className="h-[1px] bg-[#6324FC]" 
            />
            <span className="font-mono text-sm tracking-[0.5em] text-[#6324FC] uppercase">Selected Works</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <h2 className="font-heading text-8xl md:text-[9rem] tracking-tighter text-white leading-[0.9] mb-4">
              RESULTS <br/>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#6324FC] italic inline-block"
              >
                THAT SPEAK.
              </motion.span>
            </h2>
            <div className="max-w-md border-l-2 border-[#6324FC]/20 pl-8 pb-4">
              <p className="font-sans font-light text-white/50 text-xl leading-relaxed mb-6">
                We bridge the gap between ambitious vision and measurable impact — delivering full-service digital solutions that drive real revenue for businesses across the US, UK, and Australia.
              </p>
              <Link href="/work" className="group flex items-center gap-3 text-white/80 hover:text-[#6324FC] transition-colors">
                <span className="font-mono text-xs tracking-widest uppercase">View methodology →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((project, idx) => (
            <CaseStudyCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative pt-8">
             <div className="font-heading text-3xl md:text-5xl text-white/5 absolute top-0 left-0 pointer-events-none select-none italic -translate-y-1/2">
              Success Stories
             </div>
             <div className="font-sans text-white/40 italic text-xl max-w-sm relative z-10">
               "We don't just deliver projects; we engineer long-term digital growth."
             </div>
          </div>
          
          <Link href="/work" className="group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-7 bg-black text-white font-heading text-xl tracking-widest rounded-full overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_60px_rgba(99,36,252,0.4)] flex items-center gap-6 uppercase"
            >
              {/* Button Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC] to-[#4310C7] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <span className="relative z-10 flex items-center gap-4 text-white transition-colors duration-500 uppercase">
                SEE FULL ARCHIVE <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}
