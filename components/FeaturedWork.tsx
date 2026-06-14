"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Zap,
  Target,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const cases = [
  {
    id: "01",
    slug: "themesjet",
    category: "WEB DEV · MARKETPLACE",
    title: "ThemesJet — Build Faster. Choose Better.",
    location: "🌐 GLOBAL",
    metrics: [
      { label: "PREMIUM ASSETS", val: 500, suffix: "+", prefix: "", icon: Zap },
      { label: "DEVELOPERS", val: 10, suffix: "k+", icon: TrendingUp },
    ],
    body: "A high-performance premium digital marketplace for Next.js, React & HTML templates. Engineered for scalability with instant downloads and verified code.",
    tags: ["Next.js", "Marketplace", "Digital Products"],
    image: "/assets/themes_jet_final.webp",
    color: "#6324FC",
  },
  {
    id: "02",
    slug: "aka-moving",
    category: "LOGISTICS · SERVICE",
    title: "AKA Moving Redesign",
    location: "🇨🇦 CANADA",
    metrics: [
      { label: "BOOKING CONV.", val: 150, suffix: "%", prefix: "+", icon: Zap },
      { label: "AUTO SCHEDULING", val: 24, suffix: "/7", icon: Target },
    ],
    body: "A complete logistics platform redesign focused on enterprise UX/UI — driving higher booking conversions and fully automated scheduling systems.",
    tags: ["UI/UX", "Logistics", "Optimization"],
    image: "/assets/aka_moving_final.webp",
    color: "#00E5FF",
  },
  {
    id: "03",
    slug: "nexus-esports",
    category: "GAMING · ESPORTS",
    title: "Nexus Esports UI",
    location: "GLOBAL GAMING",
    metrics: [
      {
        label: "REGISTRATION",
        val: 200,
        suffix: "%",
        prefix: "+",
        icon: Target,
      },
      { label: "LOAD SPEED", val: 0.9, suffix: "s", icon: Zap },
    ],
    body: "A lightning-fast, high-performance web architecture for a global esports platform — achieving instant registrations and sub-second load times.",
    tags: ["UI/UX", "Esports", "Next.js"],
    image: "/assets/nexus_esports_final.webp",
    color: "#FF2D55",
  },
];

function NumberTicker({
  value,
  suffix,
  prefix,
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
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
      {typeof value === "number" && value % 1 !== 0
        ? displayValue.toFixed(1)
        : Math.floor(displayValue)}
      {suffix}
    </span>
  );
}

function CaseStudyCard({
  project,
  index,
}: {
  project: (typeof cases)[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 400], [5, -5]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 400], [-5, 5]),
    springConfig,
  );

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/work/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group relative flex flex-col h-full cursor-pointer rounded-3xl overflow-hidden"
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
                ([x, y]) =>
                  `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 36, 252, 0.15), transparent 40%)`,
              ),
            }}
          />

          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out rounded-3xl"
          />

          {/* Floating Metric Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex gap-3 z-10">
            {project.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex-1 bg-[#060608]/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl group/metric hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-1">
                  <m.icon className="w-3.5 h-3.5 text-[#6324FC] group-hover/metric:scale-110 transition-transform" />
                  <NumberTicker
                    value={m.val}
                    suffix={m.suffix}
                    prefix={(m as any).prefix}
                  />
                </div>
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase block">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
        </motion.div>

        {/* Content Below */}
        <div className="px-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4 overflow-hidden mt-6">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="font-mono text-[11px] tracking-widest text-[#00E5FF] uppercase flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              {project.category}
            </motion.span>
            <span className="font-mono text-[11px] text-white/50">
              {project.location}
            </span>
          </div>

          <h3 className="font-heading text-3xl text-white mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
            {project.title}
          </h3>

          {project.body && (
            <p className="font-sans font-light text-white/70 text-sm mb-6 line-clamp-3">
              {project.body}
            </p>
          )}

          <div className="mt-auto">
            <div className="group/link inline-flex items-center gap-3 py-2">
              <span className="font-mono text-[12px] tracking-[0.3em] text-white/70 group-hover/link:text-white transition-colors duration-300 uppercase font-medium">
                EXPLORE STUDY
              </span>
              <div className="relative w-8 h-8 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 group-hover/link:scale-110 shadow-lg isolate">
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 rounded-full" />
                  <ArrowUpRight className="relative z-10 w-4 h-4 text-[#6324FC] group-hover/link:text-white transition-all duration-500" />
                </div>
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
    <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6324FC]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00E5FF]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Clean Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              className="h-[1px] bg-[#6324FC]"
            />
            <span className="font-mono text-sm tracking-[0.5em] text-[#6324FC] uppercase">
              SELECTED WORKS
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            <h2 className="sr-only">
              Our Portfolio of Enterprise Web Development and SEO Case Studies
            </h2>
            <div
              aria-hidden="true"
              className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white mb-4"
            >
              RESULTS <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#6324FC] italic inline-block"
              >
                THAT SPEAK.
              </motion.span>
            </div>
            <div className="max-w-md border-l-2 border-[#6324FC]/20 pl-8 pb-4">
              <p className="font-sans font-light text-white/50 text-xl leading-relaxed mb-6">
                Three industries. Three countries. One standard — ship work that
                performs. Every project below was measured against real KPIs,
                not aesthetics alone.
              </p>
              <Link
                href="/work"
                className="group flex items-center gap-3 text-white/80 hover:text-[#6324FC] transition-colors"
              >
                <span className="font-mono text-xs tracking-widest uppercase">
                  VIEW METHODOLOGY →
                </span>
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
        <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative pt-8">
            <div className="font-heading text-3xl sm:text-4xl md:text-5xl text-white/20 absolute top-0 left-0 pointer-events-none select-none italic -translate-y-1/2">
              Success Stories
            </div>
            <div className="font-sans text-white/90 italic text-lg max-w-sm relative z-10 font-medium">
              "We don't just deliver projects — we engineer long-term digital
              growth."
            </div>
          </div>

          <Link href="/work" className="group block w-full md:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 w-full hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] isolate"
            >
              {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>

              <div className="relative w-full h-full px-8 py-4 md:px-12 md:py-5 rounded-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                {/* Flowing background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                {/* Bouncing/pulsating dot */}
                <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />

                <span className="relative z-10 flex items-center justify-center gap-4 font-heading md:text-xl tracking-widest text-primary uppercase text-center">
                  SEE FULL ARCHIVE
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#6324FC] dark:group-hover:text-white" />
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
