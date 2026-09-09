"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  LayoutGrid,
  List,
  Search,
  ExternalLink,
  Sparkles,
  Zap,
  Globe,
  ArrowRight,
  Layers,
  X,
} from "lucide-react";
import { catalogProjects, CatalogProject } from "@/lib/projectsData";

const filterCategories = [
  { label: "ALL", key: "ALL" },
  { label: "CLIENT SITES", key: "CLIENT WEBSITE" },
  { label: "TEMPLATES", key: "TEMPLATE" },
  { label: "WEB APPS & SAAS", key: "WEB APP" },
];

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = {
      ALL: catalogProjects.length,
      "CLIENT WEBSITE": catalogProjects.filter(
        (p) =>
          p.category === "CLIENT WEBSITE" ||
          p.category === "DIGITAL MARKETPLACE" ||
          p.category === "SERVICE PLATFORM" ||
          p.category.includes("GAMING") ||
          p.category.includes("ESPORTS")
      ).length,
      TEMPLATE: catalogProjects.filter((p) => p.category.includes("TEMPLATE")).length,
      "WEB APP": catalogProjects.filter(
        (p) =>
          p.category.includes("WEB APP") ||
          p.category.includes("SOFTWARE") ||
          p.category.includes("SAAS") ||
          p.category.includes("ERP") ||
          p.category.includes("OFFICE") ||
          p.category.includes("CRM")
      ).length,
    };
    return counts;
  }, []);

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return catalogProjects.filter((project) => {
      // Category Match
      let matchesCategory = true;
      if (activeFilter === "CLIENT WEBSITE") {
        matchesCategory =
          project.category === "CLIENT WEBSITE" ||
          project.category === "DIGITAL MARKETPLACE" ||
          project.category === "SERVICE PLATFORM" ||
          project.category.includes("GAMING") ||
          project.category.includes("ESPORTS");
      } else if (activeFilter === "TEMPLATE") {
        matchesCategory = project.category.includes("TEMPLATE");
      } else if (activeFilter === "WEB APP") {
        matchesCategory =
          project.category.includes("WEB APP") ||
          project.category.includes("SOFTWARE") ||
          project.category.includes("SAAS") ||
          project.category.includes("ERP") ||
          project.category.includes("OFFICE") ||
          project.category.includes("CRM");
      }

      if (!matchesCategory) return false;

      // Search Query Match
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesClient = project.client.toLowerCase().includes(q);
        const matchesCategoryName = project.category.toLowerCase().includes(q);
        const matchesTags = project.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
        return matchesTitle || matchesClient || matchesCategoryName || matchesTags;
      }

      return true;
    });
  }, [activeFilter, searchQuery]);

  // Featured flagship project
  const flagship = catalogProjects[0];

  // Mouse tracking for List View hover preview
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 160, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 160, mass: 0.5 });

  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const currentVelocity = e.clientX - lastX.current;
      setVelocity(currentVelocity);
      lastX.current = e.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const skew = useTransform(() => {
    const skewed = velocity * 0.12;
    return Math.max(Math.min(skewed, 12), -12);
  });

  return (
    <main className="w-full min-h-screen bg-[#060608] text-white relative overflow-hidden selection:bg-[#6324FC] selection:text-white">
      {/* Dynamic Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-[#6324FC]/15 via-[#00E5FF]/10 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />

      {/* ─────────────────────────────────────────────────────────────
          1. DYNAMIC AGENCY HEADER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-36 md:pt-48 pb-16 px-6 lg:px-12 border-b border-white/5 z-10">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Top Badge */}
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] uppercase text-white/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_#6324FC] animate-pulse" />
            <span>PORTFOLIO & CASE STUDIES</span>
            <span className="text-white/20">•</span>
            <span className="text-[#00E5FF]">{catalogProjects.length} CURATED WORKS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase text-white">
              CRAFTED FOR <br />
              <span className="text-[#6324FC] italic">IMPACT.</span>{" "}
              <span className="stroke-text text-transparent">SCALE.</span>
            </h1>

            <div className="max-w-md lg:border-l-2 lg:border-[#6324FC]/30 lg:pl-8 space-y-4">
              <p className="font-sans font-light text-white/60 text-base md:text-lg leading-relaxed">
                From high-frequency digital marketplaces to enterprise logistics engines and multi-tenant SaaS. Explore how we transform ambitious visions into revenue-generating digital realities.
              </p>
              <div className="flex items-center gap-6 font-mono text-xs text-white/40">
                <span className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#00E5FF]" /> Sub-Second Edge
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#6324FC]" /> Global CDN
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FLAGSHIP SPOTLIGHT BANNER
      ───────────────────────────────────────────────────────────── */}
      {flagship && activeFilter === "ALL" && searchQuery === "" && (
        <section className="py-12 px-6 lg:px-12 border-b border-white/5 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-br from-[#12121D] via-[#0A0A10] to-[#07070A] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group">
              
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#6324FC]/20 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Left Info */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6324FC]/20 border border-[#6324FC]/40 text-[#00E5FF] font-mono text-xs tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Flagship Case Study
                  </div>

                  <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-white leading-none">
                    {flagship.title}
                  </h2>

                  <p className="font-sans font-light text-white/70 text-base md:text-lg leading-relaxed">
                    Digital Dominance through Architectural Purity. A sub-second marketplace engineered with Next.js 15 Edge Runtime, automated Stripe Connect splits, and 99/100 Core Web Vitals.
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {(flagship.tags || ["Next.js 15", "Marketplace", "Fintech"]).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      href={`/work/${flagship.slug}`}
                      className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#6324FC] text-white font-heading text-xs tracking-[0.2em] uppercase hover:bg-[#783cfd] transition-all duration-300 shadow-[0_0_25px_rgba(99,36,252,0.5)]"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {flagship.link && (
                      <Link
                        href={flagship.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/30 text-white/80 hover:text-white font-heading text-xs tracking-[0.2em] uppercase transition-all duration-300"
                      >
                        Live Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Image Showcase */}
                <div className="lg:col-span-6">
                  <Link href={`/work/${flagship.slug}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/img">
                    <Image
                      src={flagship.img}
                      alt={flagship.title}
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-white/80 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                      <span>{flagship.client}</span>
                      <span className="text-[#00E5FF]">99/100 Performance Score</span>
                    </div>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. CONTROLS TOOLBAR (CATEGORIES + SEARCH + VIEW TOGGLE)
      ───────────────────────────────────────────────────────────── */}
      <section className="sticky top-20 z-40 bg-[#060608]/90 backdrop-blur-2xl py-6 border-b border-white/10 transition-all">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Category Filter Pills with Item Counts */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {filterCategories.map((cat) => {
              const count = categoryCounts[cat.key as keyof typeof categoryCounts] || 0;
              const isActive = activeFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`flex items-center gap-2 font-mono text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#6324FC] text-white border-[#6324FC] shadow-[0_0_20px_rgba(99,36,252,0.4)]"
                      : "bg-white/[0.02] text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-white/5 text-white/40"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Layout View Mode Switcher */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tags..."
                className="w-full pl-10 pr-9 py-2 bg-white/[0.03] border border-white/10 rounded-full text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-[#6324FC] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Grid ↔ List View Switcher */}
            <div className="flex items-center bg-white/[0.03] p-1 rounded-full border border-white/10">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#6324FC] text-white shadow-[0_0_15px_rgba(99,36,252,0.5)]"
                    : "text-white/40 hover:text-white"
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-[#6324FC] text-white shadow-[0_0_15px_rgba(99,36,252,0.5)]"
                    : "text-white/40 hover:text-white"
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. MAIN PORTFOLIO DISPLAY (GRID OR LIST)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Search/Empty State */}
          {filteredProjects.length === 0 && (
            <div className="py-24 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto text-white/40">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl text-white uppercase">No Projects Found</h3>
              <p className="font-sans text-sm text-white/40 max-w-sm mx-auto">
                No matching portfolio items for &quot;{searchQuery}&quot;. Try a different keyword or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("ALL");
                }}
                className="px-6 py-2.5 rounded-full bg-[#6324FC] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#783cfd] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* ──────────────────────────
              VIEW MODE: GRID VIEW
          ────────────────────────── */}
          {viewMode === "grid" && filteredProjects.length > 0 && (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, idx) => {
                const accent = project.accent || "#6324FC";
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.03 }}
                    className="group relative flex flex-col rounded-3xl bg-[#0D0D14]/90 border border-white/10 hover:border-white/25 backdrop-blur-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                  >
                    {/* Top Browser Chrome Bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#08080E]/90">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Screenshot Preview with Accent Glow */}
                    <Link
                      href={`/work/${project.slug}`}
                      className="relative w-full aspect-[16/10] overflow-hidden bg-black/40 block"
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14] via-transparent to-transparent opacity-60" />

                      {/* Floating Category Badge */}
                      <div className="absolute bottom-3 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md font-mono text-[10px] text-white">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: accent }}
                        />
                        <span>{project.client}</span>
                      </div>
                    </Link>

                    {/* Body Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <Link href={`/work/${project.slug}`}>
                            <h3 className="font-heading text-2xl tracking-tight uppercase text-white group-hover:text-[#6324FC] transition-colors">
                              {project.title}
                            </h3>
                          </Link>
                          <span className="font-mono text-xs text-white/30">
                            {project.year}
                          </span>
                        </div>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {(project.tags || [project.category]).slice(0, 3).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/50"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 font-heading text-xs tracking-wider uppercase text-white hover:text-[#6324FC] transition-colors"
                        >
                          View Case Study
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#6324FC] hover:text-[#6324FC] text-white/60 transition-colors"
                            title="Open Live Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* ──────────────────────────
              VIEW MODE: LIST VIEW
          ────────────────────────── */}
          {viewMode === "list" && filteredProjects.length > 0 && (
            <div className="flex flex-col w-full border-t border-white/10">
              {filteredProjects.map((project) => (
                <Link
                  href={`/work/${project.slug}`}
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.img)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 border-b border-white/10 hover:border-[#6324FC]/60 transition-colors duration-300 cursor-pointer"
                >
                  {/* Left: ID + Title */}
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="font-mono text-sm text-white/30 group-hover:text-[#6324FC] transition-colors">
                      {project.id}
                    </span>

                    <div className="space-y-1">
                      <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase text-white group-hover:text-[#6324FC] transition-colors">
                        {project.title}
                      </h3>
                      <div className="font-mono text-xs text-white/40 md:hidden">
                        {project.category} • {project.client}
                      </div>
                    </div>
                  </div>

                  {/* Right: Meta Info & Circle CTA */}
                  <div className="hidden md:flex items-center gap-12 font-mono text-xs tracking-wider">
                    <span className="text-white/60 group-hover:text-white transition-colors w-44 text-right">
                      {project.category}
                    </span>
                    <span className="text-white/40 group-hover:text-white transition-colors w-32 text-right">
                      {project.client}
                    </span>
                    <span className="text-white/30">{project.year}</span>

                    <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#6324FC] group-hover:bg-[#6324FC] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Floating Reveal Image with Skew Physics (List View Desktop Only) */}
      {viewMode === "list" && (
        <motion.div
          className="fixed top-0 left-0 w-[420px] h-[520px] pointer-events-none z-50 overflow-hidden rounded-2xl shadow-2xl border border-white/20 hidden lg:block"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            skewX: skew,
            skewY: skew,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredProject ? 1 : 0,
            scale: hoveredProject ? 1 : 0.8,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                key={hoveredProject}
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.05, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={hoveredProject}
                  alt="Portfolio Item Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </main>
  );
}
