"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Code, Search, TrendingUp, PenTool, ArrowRight, Menu, X, Paintbrush, LayoutDashboard } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsHovered(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const services = [
    { 
      title: "Web Dev", 
      icon: Code, 
      items: [
        { name: "Next.js Architectures", link: "/services/web-dev/nextjs-architectures" },
        { name: "Headless Commerce", link: "/services/web-dev/headless-commerce" },
        { name: "Custom Web Apps", link: "/services/web-dev/custom-web-apps" }
      ] 
    },
    { 
      title: "UI/UX Design", 
      icon: Paintbrush, 
      items: [
        { name: "Brand Identity", link: "/services/ui-ux-design/brand-identity" },
        { name: "Design Systems", link: "/services/ui-ux-design/design-systems" },
        { name: "Motion Graphics", link: "/services/ui-ux-design/motion-graphics" }
      ] 
    },
    { 
      title: "SEO", 
      icon: Search, 
      items: [
        { name: "Technical Audits", link: "/services/seo/technical-audits" },
        { name: "Local Rankings", link: "/services/seo/local-rankings" },
        { name: "Keyword Strategy", link: "/services/seo/keyword-strategy" }
      ] 
    },
    { 
      title: "Marketing", 
      icon: TrendingUp, 
      items: [
        { name: "PPC Campaigns", link: "/services/marketing/ppc-campaigns" },
        { name: "Growth Automation", link: "/services/marketing/growth-automation" },
        { name: "Conversion Optimization", link: "/services/marketing/conversion-optimization" }
      ] 
    },
    { 
      title: "Content", 
      icon: PenTool, 
      items: [
        { name: "Editorial Writing", link: "/services/content/editorial-writing" },
        { name: "Brand Narrative", link: "/services/content/brand-narrative" },
        { name: "Copywriting", link: "/services/content/copywriting" }
      ] 
    },
    { 
      title: "Strategy", 
      icon: LayoutDashboard, 
      items: [
        { name: "Digital Transformation", link: "/services/strategy/digital-transformation" },
        { name: "Business Intelligence", link: "/services/strategy/business-intelligence" },
        { name: "UX Audits", link: "/services/strategy/ux-audits" }
      ] 
    },
  ];

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || isHovered 
            ? "bg-[#F5F5F0]/95 dark:bg-[#060608]/95 backdrop-blur-xl border-b border-primary/10 pt-0 pb-0" 
            : "bg-transparent backdrop-blur-none border-b border-transparent pt-4 pb-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="relative z-[101] flex items-center h-12 w-auto">
            <div className="relative h-full aspect-[3/1]">
              <Image 
                src="/assets/logo.webp" 
                alt="INJAAZH" 
                fill 
                className="object-contain dark:brightness-0 dark:invert transition-all duration-300" 
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 h-full">
            <Link href="/work" className="group relative text-sm font-sans text-primary/80 hover:text-primary transition-colors">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#6324FC] transition-all duration-300 group-hover:w-full" />
            </Link>
            
            <div 
              className="h-full flex items-center group relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/services" className="text-sm font-sans text-primary/80 group-hover:text-primary transition-colors flex items-center gap-1">
                Services 
                <motion.span animate={{ rotate: isHovered ? 180 : 0 }} className="text-[10px] ml-1 text-[#6324FC]">▼</motion.span>
              </Link>
              <span className={`absolute bottom-6 left-0 h-[1px] bg-[#6324FC] transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'}`} />
            </div>

            <Link href="/agency" className="group relative text-sm font-sans text-primary/80 hover:text-primary transition-colors">
              Agency
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#6324FC] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/insights" className="group relative text-sm font-sans text-primary/80 hover:text-primary transition-colors">
              Insights
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#6324FC] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/team" className="group relative text-sm font-sans text-primary/80 hover:text-primary transition-colors">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#6324FC] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="clip-cta relative overflow-hidden bg-[#6324FC] px-8 py-3 font-heading text-xl tracking-wider shadow-[0_0_20px_rgba(99,36,252,0.3)] group cursor-pointer flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
                <span className="relative z-10 flex items-center gap-2 text-background group-hover:text-[#6324FC] transition-colors duration-500">
                  LET&apos;S TALK
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-[101] text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute top-[100%] left-0 w-full bg-background/95 backdrop-blur-3xl border-b border-primary/10 shadow-2xl overflow-hidden"
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-12 gap-8">
                  
                  {/* 6 Services across a 3x2 Grid */}
                  <div className="col-span-8 grid grid-cols-3 gap-y-12 gap-x-8">
                    {services.map((svc, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 + 0.1 }}
                        className="flex flex-col gap-4"
                      >
                        <div className="flex items-center gap-3 mb-2 group/title cursor-pointer">
                          <svc.icon className="w-5 h-5 text-[#6324FC]" />
                          <Link href={`/services/${svc.title.toLowerCase().replace(/[\s\/]+/g, '-')}`} onClick={() => setIsHovered(false)}>
                            <h3 className="font-heading text-2xl tracking-wide text-primary group-hover/title:text-[#6324FC] transition-colors">{svc.title}</h3>
                          </Link>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {svc.items.map((item, idx) => (
                            <li key={idx} className="group/link flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-[#6324FC] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                              <Link href={item.link} className="font-sans text-sm font-light text-primary/60 group-hover/link:text-primary group-hover/link:translate-x-1 transition-all duration-300">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Featured Case Study Right Column */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="col-span-4 border-l border-primary/10 pl-8"
                  >
                    <div className="text-xs font-mono text-[#6324FC] uppercase tracking-widest mb-4">Featured Case Study</div>
                    <Link href="/work/themesjet" onClick={() => setIsHovered(false)} className="group relative block overflow-hidden rounded-none cursor-pointer">
                      <div className="relative w-full aspect-video bg-primary/5 border border-primary/10 mb-4 overflow-hidden">
                        <div className="absolute inset-0 bg-[#6324FC]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                        <Image src="/assets/themes_jet_final.webp" alt="ThemesJet" fill className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="font-mono text-[10px] tracking-widest text-[#6324FC] mb-2">WEB DEV · MARKETPLACE · 🌐 GLOBAL</div>
                      <h4 className="font-heading text-2xl tracking-wide text-primary group-hover:text-[#6324FC] transition-colors mb-2">ThemesJet — Premium Marketplace</h4>
                      <div className="font-sans text-sm font-light text-primary/50 mb-3">500+ Assets · 10k+ Developers</div>
                      <p className="font-sans text-sm font-light text-primary/60 flex items-center gap-2 group-hover:text-primary transition-colors">
                        View Full Study <ArrowRight className="w-4 h-4 text-[#6324FC]" />
                      </p>
                    </Link>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] bg-background flex flex-col pt-32 px-6 pb-12"
          >
            <nav className="flex flex-col gap-6 md:gap-8 mb-auto">
              {["Work", "Services", "Agency", "Insights", "Team", "Contact"].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                >
                  <Link 
                    href={["Work", "Agency", "Services", "Insights", "Team"].includes(item) ? `/${item.toLowerCase()}` : `/${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-widest text-primary hover:text-[#6324FC] transition-colors flex items-center justify-between group"
                  >
                    {item}
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[#6324FC] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <div className="w-full h-[1px] bg-primary/10 mt-4 md:mt-6" />
                </motion.div>
              ))}
            </nav>

            <div className="font-mono text-xs text-primary/40 tracking-widest uppercase mb-4">Get in touch</div>
            <a href="mailto:contact@injaazh.com" className="font-sans font-light text-xl text-[#6324FC]">contact@injaazh.com</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
