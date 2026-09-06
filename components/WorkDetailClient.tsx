"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Zap,
  Target,
  TrendingUp,
  Cpu,
  Globe,
  Code,
  MessageSquare,
  Quote,
  MoveRight,
  Hash,
  Calendar,
  User,
  Database,
} from "lucide-react";
import { ProjectDetail, projectsData as defaultProjects } from "@/lib/projectsData";

const iconMap: Record<string, any> = {
  Hash,
  User,
  Zap,
  TrendingUp,
  Calendar,
  Target,
  Code,
  Database,
  Globe,
  Cpu,
  MessageSquare,
};

function NumberTicker({ value, suffix, prefix }: { value: string; suffix?: string; prefix?: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
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
  }, [numericValue]);

  return (
    <span className="font-heading">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

interface WorkDetailClientProps {
  project: ProjectDetail;
  allProjects?: Record<string, ProjectDetail>;
}

export default function WorkDetailClient({ project, allProjects = defaultProjects }: WorkDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero Parallax
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Mockup Parallax
  const mockupY1 = useTransform(scrollYProgress, [0.3, 0.8], [50, -50]);
  const mockupY2 = useTransform(scrollYProgress, [0.3, 0.8], [150, -150]);

  const nextProject = allProjects[project.next?.id] || allProjects["themesjet"] || project;

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
            <div
              className="font-heading text-[10px] tracking-[0.8em] capitalize mb-8 ml-[0.8em]"
              style={{ color: project.accent }}
            >
              Case Study // {project.id}
            </div>
            <h1 className="font-heading text-[15vw] leading-[0.75] tracking-tighter capitalize mb-8">
              {project.title.split(" ")[0]} <br />
              <span className="stroke-text text-transparent italic opacity-40">
                {project.title.split(" ").slice(1).join(" ") || ""}
              </span>
            </h1>
            <div className="font-sans font-light text-2xl md:text-4xl text-white/40 tracking-tight max-w-3xl mx-auto leading-tight italic mb-12">
              &quot;{project.subtitle}&quot;
            </div>

            {/* Visit Live Site Button */}
            {project.link && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105"
                  style={{ backgroundColor: `${project.accent}15`, border: `1px solid ${project.accent}40` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, ${project.accent}30, transparent)` }}
                  />
                  <span className="relative z-10 font-heading tracking-widest text-sm uppercase">Visit Live Site</span>
                  <ArrowUpRight className="relative z-10 w-5 h-5" style={{ color: project.accent }} />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator Overlay */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-30">
          <div className="font-heading text-[9px] tracking-[0.4em] capitalize">Scroll to Explore</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"
          />
        </div>

        {/* Floating Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="fixed top-32 left-6 lg:left-12 z-[100]"
        >
          <Link
            href="/work"
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-2xl"
            style={{ border: `1px solid ${project.accent}30` }}
          >
            <div
              className="p-2 rounded-full transition-colors duration-300"
              style={{ backgroundColor: `${project.accent}30` }}
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading text-xs tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
              Back to Works
            </span>
          </Link>
        </motion.div>
      </section>

      {/* 2. Premium Glass Cards Stats */}
      <section className="relative z-20 py-16 md:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.metrics.map((m, i) => {
            const IconComponent = (m.iconType && iconMap[m.iconType]) || Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative flex flex-col justify-between min-h-[320px] p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-2xl"
              >
                {/* Dynamic Border & Background Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${project.accent}60`,
                    background: `radial-gradient(circle at top right, ${project.accent}15, transparent 70%)`,
                  }}
                />

                {/* Top: Icon in glowing circle */}
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/10 group-hover:bg-white/[0.05] transition-colors duration-500"
                    style={{ boxShadow: `0 0 20px -5px ${project.accent}40` }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: project.accent }} />
                  </div>
                  <div className="font-heading text-[9px] tracking-[0.4em] text-white/20 uppercase group-hover:text-white/40 transition-colors">
                    0x{i + 1}
                  </div>
                </div>

                {/* Bottom: Label and Number */}
                <div className="relative z-10 mt-auto pt-12 space-y-2">
                  <div className="font-heading text-[10px] tracking-widest text-white/40 uppercase group-hover:text-white/70 transition-colors duration-500">
                    {m.label}
                  </div>
                  <div className="font-heading text-6xl tracking-tighter leading-none text-white group-hover:scale-105 transition-transform duration-500 origin-left">
                    <span
                      style={{
                        background: `linear-gradient(to bottom right, #ffffff, ${project.accent}cc)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <NumberTicker value={m.val} suffix={m.suffix} prefix={m.prefix} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. The Narrative (Bento Style Layout) */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Context Sidebar */}
          <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-48">
            <div className="space-y-4">
              <div className="font-heading text-[9px] text-[#6324FC] tracking-[0.5em] capitalize">Core Intel</div>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full font-heading text-[9px] text-white/40 capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 font-heading text-[9px] tracking-widest capitalize">
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
              <div className="font-heading text-[9px] text-[#6324FC] tracking-[0.5em] capitalize mb-4">Tech Stack</div>
              <div className="grid grid-cols-1 gap-4">
                {project.tech.map((t, i) => {
                  const TechIcon = (t.iconType && iconMap[t.iconType]) || Code;
                  return (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#6324FC]/20 transition-colors">
                          <TechIcon className="w-3.5 h-3.5 text-white/40 group-hover:text-[#6324FC]" />
                        </div>
                        <span className="font-heading text-[10px] text-white/60 group-hover:text-white transition-colors capitalize">
                          {t.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-white/10 group-hover:text-[#6324FC] transition-colors" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Narrative Content */}
          <div className="lg:col-span-8 space-y-32">
            {/* Overview */}
            <div className="space-y-10">
              <div className="font-heading text-[11px] text-[#6324FC] tracking-[0.5em] capitalize">Project Essence</div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize">
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
                <div className="font-heading text-[10px] text-white/30 tracking-[0.4em] capitalize">The Friction</div>
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
                <div className="font-heading text-[10px] text-[#6324FC] tracking-[0.4em] capitalize">The Breakthrough</div>
                <h3 className="font-heading text-4xl capitalize tracking-tighter">The Solution</h3>
                <p className="font-sans font-light text-xl text-white/40 leading-relaxed">{project.solution}</p>
              </motion.div>
            </div>

            {/* Editorial Quote */}
            <div className="relative py-24 border-y border-white/5">
              <Quote className="absolute top-10 left-0 w-20 h-20 text-[#6324FC] opacity-[0.05] pointer-events-none" />
              <blockquote className="font-heading text-5xl md:text-7xl text-center leading-[1.1] tracking-tighter capitalize">
                &quot;{project.testimonial.quote}&quot;
              </blockquote>
              <div className="mt-12 flex flex-col items-center gap-2">
                <div className="font-heading text-2xl">{project.testimonial.author}</div>
                <div className="font-heading text-[9px] text-[#6324FC] tracking-[0.3em] capitalize">
                  {project.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Parallax Device Mockups */}
      <section className="relative w-full py-32 bg-[#060608] flex items-center justify-center overflow-hidden border-t border-white/5">
        <div
          className="absolute inset-0 opacity-50"
          style={{ background: `linear-gradient(to bottom, ${project.accent}10, transparent)` }}
        />

        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative flex flex-col md:flex-row items-center justify-center gap-12 h-[600px] md:h-[800px]">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <h2 className="font-heading text-[15vw] leading-none whitespace-nowrap">EXPERIENCE</h2>
          </div>

          {/* Left Floating Card (Slow Parallax) */}
          <motion.div
            className="absolute md:relative w-[85%] md:w-[55%] aspect-video rounded-3xl p-3 md:p-4 bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl z-10 top-10 md:top-0"
            style={{ y: mockupY1, boxShadow: `0 25px 50px -12px ${project.accent}20` }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#060608]">
              <Image src={project.img} alt="Showcase View 1" fill className="object-cover object-left" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>

          {/* Right Floating Card (Fast Parallax) */}
          <motion.div
            className="absolute right-[5%] md:right-[15%] bottom-[5%] md:bottom-[10%] w-[45%] md:w-[30%] aspect-[3/4] md:aspect-square rounded-3xl p-3 md:p-4 bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl z-20"
            style={{ y: mockupY2, boxShadow: `0 25px 50px -12px ${project.accent}30` }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#060608]">
              <Image src={project.img} alt="Showcase View 2" fill className="object-cover object-right" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Horizontal Scroll "Masterpiece" Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-white text-black overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize">
              VISUAL <br />
              <span className="text-[#6324FC] italic">CHRONICLE.</span>
            </h2>
            <div className="max-w-sm border-l-2 border-[#6324FC] pl-8">
              <p className="font-heading text-[11px] tracking-widest capitalize text-black/40 mb-4">
                Gallery 0x{project.id}
              </p>
              <p className="font-sans font-light text-xl leading-relaxed">
                A surgical breakdown of the user experience and architectural depth of the project.
              </p>
            </div>
          </div>
        </div>

        {/* Cinematic Large Image */}
        <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl mb-24 group">
          <Image
            src={project.img}
            alt="Full Showcase"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-black/5 bg-black/5 p-12 flex items-center justify-center">
            <Image src={project.img} alt="Shot 1" fill className="object-cover opacity-80" />
          </div>
          <div className="flex flex-col justify-center space-y-12 p-12">
            <div className="space-y-4">
              <div className="font-heading text-4xl capitalize tracking-tighter italic text-[#6324FC]">
                01 // Interaction Design
              </div>
              <p className="font-sans font-light text-2xl text-black/60 leading-tight">
                We created a custom animation engine that handles state transitions with fluid, physics-based motion.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-heading text-4xl capitalize tracking-tighter italic text-[#6324FC]">
                02 // Performance Core
              </div>
              <p className="font-sans font-light text-2xl text-black/60 leading-tight">
                Optimizing every asset to ensure sub-second interaction times, regardless of device or network speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Next Project Takeover */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#060608] border-t border-white/5 group">
        <Link
          href={`/work/${nextProject.slug || project.next.id}`}
          className="relative z-10 w-full h-full flex flex-col items-center justify-center cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute inset-0 z-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
          >
            <Image
              src={nextProject.img || project.img}
              alt="Next Project"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]" />
          </motion.div>

          <div className="relative z-10 text-center space-y-8">
            <div className="font-heading text-[11px] tracking-[0.8em] text-white/30 capitalize">Next Masterpiece</div>
            <h2 className="font-heading text-[15vw] leading-none tracking-tighter capitalize text-white group-hover:text-[#6324FC] transition-colors duration-700 italic">
              {project.next.title.split(" ")[0]}
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
