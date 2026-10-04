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
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { catalogProjects, CatalogProject } from "@/lib/projectsData";
import {
  getTotalProjectViews,
  formatViewsCount,
  getStoredProjectViews,
} from "@/lib/projectViews";

const filterCategories = [
  { label: "ALL", key: "ALL" },
  { label: "CLIENT SITES", key: "CLIENT WEBSITE" },
  { label: "TEMPLATES", key: "TEMPLATE" },
  { label: "WEB APPS & SAAS", key: "WEB APP" },
];

const ITEMS_PER_PAGE = 12;

// Helper function to accurately map projects into the 3 curated categories
function getProjectCategoryGroup(project: CatalogProject): "CLIENT WEBSITE" | "TEMPLATE" | "WEB APP" {
  const cat = (project.category || "").toUpperCase();
  const idNum = parseInt(project.id, 10);

  // 1. Templates
  if (cat.includes("TEMPLATE")) {
    return "TEMPLATE";
  }

  // 2. Web Apps & SaaS (IDs 30-48 except templates, or categories containing software/SaaS/platform keywords)
  if (
    cat.includes("WEB APP") ||
    cat.includes("SAAS") ||
    cat.includes("SOFTWARE") ||
    cat.includes("ERP") ||
    cat.includes("CRM") ||
    cat.includes("FINTECH") ||
    cat.includes("DEVELOPER") ||
    cat.includes("API") ||
    cat.includes("OFFICE") ||
    cat.includes("PET") ||
    cat.includes("AUTOMOTIVE") ||
    (idNum >= 30 && idNum <= 48)
  ) {
    return "WEB APP";
  }

  // 3. Client Websites (IDs 01-20 and all client solutions)
  return "CLIENT WEBSITE";
}

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [hoveredListId, setHoveredListId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [storedViews, setStoredViews] = useState<Record<string, number>>({});

  const toolbarRef = useRef<HTMLDivElement>(null);

  // Load stored dynamic views on mount
  useEffect(() => {
    setStoredViews(getStoredProjectViews());
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = {
      ALL: catalogProjects.length,
      "CLIENT WEBSITE": catalogProjects.filter(
        (p) => getProjectCategoryGroup(p) === "CLIENT WEBSITE"
      ).length,
      TEMPLATE: catalogProjects.filter(
        (p) => getProjectCategoryGroup(p) === "TEMPLATE"
      ).length,
      "WEB APP": catalogProjects.filter(
        (p) => getProjectCategoryGroup(p) === "WEB APP"
      ).length,
    };
    return counts;
  }, []);

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return catalogProjects.filter((project) => {
      // Category Match
      if (activeFilter !== "ALL") {
        const group = getProjectCategoryGroup(project);
        if (group !== activeFilter) return false;
      }

      // Search Query Match
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesClient = project.client.toLowerCase().includes(q);
        const matchesCategoryName = project.category.toLowerCase().includes(q);
        const matchesTags = project.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
        const matchesYear = project.year.toLowerCase().includes(q);
        return matchesTitle || matchesClient || matchesCategoryName || matchesTags || matchesYear;
      }

      return true;
    });
  }, [activeFilter, searchQuery]);

  // Reset to page 1 whenever active filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  // Total pages and Paginated Projects
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  // Handle Page Change with Smooth Scroll to toolbar
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (toolbarRef.current) {
      toolbarRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Dynamically select Featured Flagship Project based on Page Views in current category
  const flagship = useMemo(() => {
    if (filteredProjects.length === 0) return null;
    const candidates = filteredProjects.filter((p) => p.featured !== false);
    const pool = candidates.length > 0 ? candidates : filteredProjects;
    return pool.reduce((highest, current) => {
      const highestViews = getTotalProjectViews(highest.slug, storedViews);
      const currentViews = getTotalProjectViews(current.slug, storedViews);
      return currentViews > highestViews ? current : highest;
    }, pool[0]);
  }, [filteredProjects, storedViews]);

  const flagshipViews = flagship ? getTotalProjectViews(flagship.slug, storedViews) : 0;

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
    <main className="w-full min-h-screen bg-[#F5F5F0] dark:bg-[#060608] text-neutral-900 dark:text-white relative overflow-hidden selection:bg-[#6324FC] selection:text-white">
      {/* Dynamic Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-[#6324FC]/15 via-[#00E5FF]/10 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />

      {/* ─────────────────────────────────────────────────────────────
          1. DYNAMIC AGENCY HEADER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-36 md:pt-48 pb-16 px-6 lg:px-12 border-b border-black/5 dark:border-white/5 z-10">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Badge */}
          <div className="flex items-center gap-3 font-mono text-[14px] tracking-[0.4em] uppercase text-neutral-500 dark:text-white/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_#6324FC] animate-pulse" />
            <span>PORTFOLIO & CASE STUDIES</span>
            <span className="text-neutral-300 dark:text-white/20">•</span>
            <span className="text-[#6324FC] dark:text-[#00E5FF] font-semibold">{catalogProjects.length} CURATED WORKS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase text-neutral-900 dark:text-white">
              CRAFTED FOR <br />
              <span className="text-[#6324FC] italic">IMPACT.</span>{" "}
              <span className="stroke-text text-transparent">SCALE.</span>
            </h1>

            <div className="max-w-md lg:border-l-2 lg:border-[#6324FC]/30 lg:pl-8 space-y-4">
              <p className="font-sans font-light text-neutral-600 dark:text-white/60 text-base md:text-lg leading-relaxed">
                From high-frequency digital marketplaces to enterprise logistics engines and multi-tenant SaaS. Explore how we transform ambitious visions into revenue-generating digital realities.
              </p>
              <div className="flex items-center gap-6 font-mono text-[14px] text-neutral-500 dark:text-white/40">
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
          2. FLAGSHIP SPOTLIGHT BANNER (FEATURED BASED ON PAGE VIEWS)
      ───────────────────────────────────────────────────────────── */}
      {flagship && currentPage === 1 && searchQuery === "" && (
        <section className="py-12 px-6 lg:px-12 border-b border-black/5 dark:border-white/5 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-white dark:bg-[#0A0A10] dark:bg-gradient-to-br dark:from-[#12121D] dark:via-[#0A0A10] dark:to-[#07070A] border border-black/10 dark:border-white/10 backdrop-blur-2xl shadow-xl dark:shadow-2xl overflow-hidden group">

              {/* Corner Glow with Dynamic Accent */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-700 opacity-20"
                style={{ backgroundColor: flagship.accent || "#6324FC" }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                {/* Left Info */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6324FC]/10 dark:bg-[#6324FC]/20 border border-[#6324FC]/30 dark:border-[#6324FC]/40 text-[#6324FC] dark:text-[#00E5FF] font-mono text-[14px] tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5" /> Featured Spotlight
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 font-mono text-[13px] text-neutral-600 dark:text-white/60">
                      <Eye className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>{formatViewsCount(flagshipViews)} Page Views</span>
                    </div>
                  </div>

                  <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase text-neutral-900 dark:text-white leading-none">
                    {flagship.title}
                  </h2>

                  <p className="font-sans font-normal dark:font-light text-neutral-600 dark:text-white/70 text-base md:text-lg leading-relaxed">
                    Digital Dominance through Architectural Purity. A sub-second digital solution engineered with Next.js Edge Runtime, automated workflows, and 99/100 Core Web Vitals.
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {(flagship.tags || ["Next.js", "Enterprise", "High-Performance"]).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[14px] font-mono text-neutral-700 dark:text-white/70"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      href={`/work/${flagship.slug}`}
                      className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#6324FC] text-white font-heading text-[14px] tracking-[0.2em] uppercase hover:bg-[#783cfd] transition-all duration-300 shadow-[0_0_25px_rgba(99,36,252,0.5)]"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {flagship.link && (
                      <Link
                        href={flagship.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-neutral-800 dark:text-white/80 hover:text-neutral-950 dark:hover:text-white font-heading text-[14px] tracking-[0.2em] uppercase transition-all duration-300 shadow-sm"
                      >
                        Live Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Image Showcase */}
                <div className="lg:col-span-6">
                  <Link href={`/work/${flagship.slug}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl group/img">
                    <Image
                      src={flagship.img}
                      alt={flagship.title}
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[14px] font-mono text-white/80 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
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
      <section ref={toolbarRef} className="sticky top-20 z-40 bg-[#F5F5F0]/90 dark:bg-[#060608]/90 backdrop-blur-2xl py-6 border-b border-black/10 dark:border-white/10 transition-all">
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
                  className={`flex items-center gap-2 font-mono text-[14px] tracking-wider px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-[#6324FC] text-white border-[#6324FC] shadow-[0_0_20px_rgba(99,36,252,0.4)]"
                    : "bg-white dark:bg-white/[0.02] text-neutral-600 dark:text-white/50 border-black/10 dark:border-white/10 hover:border-[#6324FC] hover:text-neutral-900 dark:hover:text-white shadow-sm"
                    }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-white/40"
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
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tags..."
                className="w-full pl-10 pr-9 py-2 bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-full text-[14px] font-mono text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#6324FC] transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 dark:text-white/40 dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Grid ↔ List View Switcher */}
            <div className="flex items-center bg-white dark:bg-white/[0.03] p-1 rounded-full border border-black/10 dark:border-white/10 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all cursor-pointer ${viewMode === "grid"
                  ? "bg-[#6324FC] text-white shadow-[0_0_15px_rgba(99,36,252,0.5)]"
                  : "text-neutral-400 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all cursor-pointer ${viewMode === "list"
                  ? "bg-[#6324FC] text-white shadow-[0_0_15px_rgba(99,36,252,0.5)]"
                  : "text-neutral-400 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white"
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
              <div className="w-16 h-16 rounded-full bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center mx-auto text-neutral-400 dark:text-white/40 shadow-sm">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl text-neutral-900 dark:text-white uppercase">No Projects Found</h3>
              <p className="font-sans text-sm text-neutral-500 dark:text-white/40 max-w-sm mx-auto">
                No matching portfolio items for &quot;{searchQuery}&quot;. Try a different keyword or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("ALL");
                }}
                className="px-6 py-2.5 rounded-full bg-[#6324FC] text-white font-mono text-[14px] uppercase tracking-wider hover:bg-[#783cfd] transition-colors"
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
              {paginatedProjects.map((project, idx) => {
                const accent = project.accent || "#6324FC";
                const isHovered = hoveredCardId === project.id;
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                    onMouseEnter={() => setHoveredCardId(project.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    style={{
                      borderColor: isHovered ? `${accent}80` : undefined,
                      boxShadow: isHovered
                        ? `0 20px 45px -15px ${accent}30`
                        : undefined,
                    }}
                    className="group relative flex flex-col rounded-3xl bg-white dark:bg-[#0D0D14]/90 border border-black/10 dark:border-white/10 backdrop-blur-xl overflow-hidden shadow-lg dark:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                  >
                    {/* Ambient Hover Glow customized to Project Accent Color */}
                    <div
                      className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: accent }}
                    />

                    {/* Top Browser Chrome Bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-black/5 dark:border-white/5 bg-neutral-50 dark:bg-[#08080E]/90 relative z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-white/20" />
                      </div>
                      <span className="font-mono text-[12px] tracking-wider text-neutral-500 dark:text-white/40 uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Screenshot Preview with Accent Glow */}
                    <Link
                      href={`/work/${project.slug}`}
                      className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-black/40 block"
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-[#0D0D14] via-transparent to-transparent opacity-60" />

                      {/* Floating Category Badge */}
                      <div className="absolute bottom-3 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 dark:bg-black/60 border border-black/10 dark:border-white/10 backdrop-blur-md font-mono text-[12px] text-neutral-800 dark:text-white shadow-sm">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: accent }}
                        />
                        <span>{project.client}</span>
                      </div>
                    </Link>

                    {/* Body Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5 relative z-10">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <Link href={`/work/${project.slug}`}>
                            <h3
                              className="font-heading text-2xl tracking-tight font-bold capitalize text-neutral-900 dark:text-white transition-colors duration-300"
                              style={{
                                color: isHovered ? accent : undefined,
                              }}
                            >
                              {project.title}
                            </h3>
                          </Link>
                          <span className="font-mono text-[14px] text-neutral-400 dark:text-white/30">
                            {project.year}
                          </span>
                        </div>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {(project.tags || [project.category]).slice(0, 3).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 font-mono text-[12px] text-neutral-600 dark:text-white/50"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links with Image Accent Color on Hover */}
                      <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 font-heading text-[14px] tracking-wider uppercase text-neutral-900 dark:text-white transition-colors duration-300"
                          style={{
                            color: isHovered ? accent : undefined,
                          }}
                        >
                          View Case Study
                          <ArrowRight
                            className="w-3.5 h-3.5 transition-transform duration-300"
                            style={{
                              transform: isHovered ? "translateX(4px)" : "none",
                            }}
                          />
                        </Link>

                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-neutral-100 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-neutral-600 dark:text-white/60 transition-colors shadow-sm"
                            style={{
                              borderColor: isHovered ? accent : undefined,
                              color: isHovered ? accent : undefined,
                            }}
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
            <div className="flex flex-col w-full border-t border-black/10 dark:border-white/10">
              {paginatedProjects.map((project) => {
                const accent = project.accent || "#6324FC";
                const isHovered = hoveredListId === project.id;
                return (
                  <Link
                    href={`/work/${project.slug}`}
                    key={project.id}
                    onMouseEnter={() => {
                      setHoveredProject(project.img);
                      setHoveredListId(project.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredProject(null);
                      setHoveredListId(null);
                    }}
                    style={{
                      borderColor: isHovered ? `${accent}60` : undefined,
                    }}
                    className="group w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 border-b border-black/10 dark:border-white/10 transition-colors duration-300 cursor-pointer"
                  >
                    {/* Left: ID + Title */}
                    <div className="flex items-center gap-6 md:gap-12">
                      <span
                        className="font-mono text-sm text-neutral-400 dark:text-white/30 transition-colors"
                        style={{
                          color: isHovered ? accent : undefined,
                        }}
                      >
                        {project.id}
                      </span>

                      <div className="space-y-1">
                        <h3
                          className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase text-neutral-900 dark:text-white transition-colors duration-300"
                          style={{
                            color: isHovered ? accent : undefined,
                          }}
                        >
                          {project.title}
                        </h3>
                        <div className="font-mono text-[14px] text-neutral-500 dark:text-white/40 md:hidden">
                          {project.category} • {project.client}
                        </div>
                      </div>
                    </div>

                    {/* Right: Meta Info & Circle CTA with Project Accent Color */}
                    <div className="hidden md:flex items-center gap-12 font-mono text-[14px] tracking-wider">
                      <span className="text-neutral-600 dark:text-white/60 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors w-44 text-right">
                        {project.category}
                      </span>
                      <span className="text-neutral-500 dark:text-white/40 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors w-32 text-right">
                        {project.client}
                      </span>
                      <span className="text-neutral-400 dark:text-white/30">{project.year}</span>

                      <div
                        className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 shadow-sm"
                        style={{
                          backgroundColor: isHovered ? accent : undefined,
                          borderColor: isHovered ? accent : undefined,
                        }}
                      >
                        <ArrowUpRight
                          className="w-4 h-4 text-neutral-600 dark:text-white/60 transition-transform"
                          style={{
                            color: isHovered ? "#ffffff" : undefined,
                            transform: isHovered ? "translate(2px, -2px)" : "none",
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              PAGINATION CONTROLS
          ───────────────────────────────────────────────────────────── */}
          {filteredProjects.length > ITEMS_PER_PAGE && (
            <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">

              {/* Range Counter */}
              <div className="font-mono text-sm text-neutral-500 dark:text-white/40">
                Showing{" "}
                <span className="text-neutral-900 dark:text-white font-medium">
                  {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                </span>{" "}
                –{" "}
                <span className="text-neutral-900 dark:text-white font-medium">
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)}
                </span>{" "}
                of{" "}
                <span className="text-neutral-900 dark:text-white font-medium">
                  {filteredProjects.length}
                </span>{" "}
                Works
              </div>

              {/* Numbered Page Buttons & Prev/Next */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2.5 rounded-2xl border transition-all flex items-center justify-center ${currentPage === 1
                    ? "opacity-30 cursor-not-allowed border-black/5 dark:border-white/5 text-neutral-400"
                    : "cursor-pointer bg-white dark:bg-white/[0.03] border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:border-[#6324FC] hover:text-[#6324FC] shadow-sm"
                    }`}
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Number Pills */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`min-w-[42px] h-[42px] px-3.5 rounded-2xl font-mono text-[14px] font-semibold transition-all cursor-pointer border ${isActive
                        ? "bg-[#6324FC] text-white border-[#6324FC] shadow-[0_0_20px_rgba(99,36,252,0.4)]"
                        : "bg-white dark:bg-white/[0.03] text-neutral-700 dark:text-white/70 border-black/10 dark:border-white/10 hover:border-[#6324FC] hover:text-neutral-950 dark:hover:text-white shadow-sm"
                        }`}
                    >
                      {pageNum < 10 ? `0${pageNum}` : pageNum}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2.5 rounded-2xl border transition-all flex items-center justify-center ${currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed border-black/5 dark:border-white/5 text-neutral-400"
                    : "cursor-pointer bg-white dark:bg-white/[0.03] border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:border-[#6324FC] hover:text-[#6324FC] shadow-sm"
                    }`}
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

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
