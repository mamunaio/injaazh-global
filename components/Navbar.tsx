"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Code, Search, TrendingUp, PenTool, ArrowRight, Menu, X, Paintbrush, LayoutDashboard, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  // Mobile menu sub-navigation states
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [currentPane, setCurrentPane] = useState<"main" | "services" | "category">("main");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

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

  // Reset mobile sub-menu states when drawer is closed
  useEffect(() => {
    if (!mobileMenuOpen) {
      const timer = setTimeout(() => {
        setCurrentPane("main");
        setActiveCategory(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  const paneVariants = {
    enter: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? "-100%" : "100%",
      opacity: 0
    })
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services", isDropdown: true },
    { name: "Agency", href: "/agency" },
    { name: "Insights", href: "/insights" },
    { name: "Team", href: "/team" }
  ];

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
          <nav className="hidden lg:flex items-center gap-4 h-full relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const isHoveredOrDropdownOpen = hoveredLink === link.name || (link.isDropdown && isHovered);
              return (
                <div
                  key={link.name}
                  className="relative py-2 px-4 rounded-full flex items-center h-fit cursor-pointer group"
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    if (link.isDropdown) handleMouseEnter();
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    if (link.isDropdown) handleMouseLeave();
                  }}
                >
                  <Link 
                    href={link.href} 
                    className={`relative z-10 text-sm font-sans tracking-wide transition-colors duration-300 flex items-center gap-1 ${
                      isActive 
                        ? "text-[#6324FC] font-semibold" 
                        : "text-primary/70 hover:text-[#6324FC]"
                    }`}
                  >
                    {link.name}
                    {link.isDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? "rotate-180 text-[#6324FC]" : "text-primary/50"}`} />
                    )}
                  </Link>
                  
                  {/* Hover Pill Background */}
                  {isHoveredOrDropdownOpen && (
                    <motion.span
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-primary/[0.05] dark:bg-white/[0.05] rounded-full -z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  
                  {/* Active Indicator Under Link */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)]"
                    />
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)]"
            >
              {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              
              <div className="relative w-full h-full px-6 py-3 rounded-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                {/* Flowing background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                
                {/* Bouncing/pulsating dot */}
                <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />
                
                <span className="relative z-10 flex items-center gap-2 font-heading text-lg tracking-wider text-primary uppercase transition-colors duration-500">
                  LET'S TALK
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#6324FC] dark:group-hover:text-white" />
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Action Buttons (Let's Talk & Hamburger Toggle) */}
          <div className="lg:hidden flex items-center gap-3 relative z-[101]">
            {!mobileMenuOpen && (
              <Link 
                href="/contact" 
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(99,36,252,0.3)]"
              >
                {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                
                <div className="relative w-full h-full px-3.5 py-1.5 rounded-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-2 z-10">
                  {/* Pulsating dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />
                  
                  <span className="relative z-10 flex items-center gap-1 font-heading text-xs tracking-wider text-primary uppercase transition-colors duration-500">
                    LET'S TALK
                    <ArrowRight className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#6324FC] dark:group-hover:text-white" />
                  </span>
                </div>
              </Link>
            )}
            
            <button 
              className="text-primary hover:text-[#6324FC] transition-colors p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
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

      {/* Mobile Off-canvas Drawer Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setMobileMenuOpen(false);
              setCurrentPane("main");
            }}
            className="fixed inset-0 z-[98] bg-black"
          />
        )}
      </AnimatePresence>

      {/* Slide-in Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[99] w-full max-w-[400px] h-screen bg-background border-l border-primary/10 shadow-2xl p-6 pt-32 pb-12 flex flex-col overflow-hidden"
          >
            {/* Horizontal sliding panes area */}
            <div className="relative flex-grow overflow-hidden w-full h-full flex flex-col">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                
                {/* PANE 1: MAIN MENU */}
                {currentPane === "main" && (
                  <motion.div
                    key="main"
                    custom={direction}
                    variants={paneVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
                    className="flex flex-col gap-4 w-full h-full overflow-y-auto pr-2 absolute inset-0 custom-scrollbar"
                  >
                    {/* Main Nav Items */}
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                      return (
                        <div key={link.name} className="w-full">
                          {link.isDropdown ? (
                            <button
                              onClick={() => {
                                setDirection("forward");
                                setCurrentPane("services");
                              }}
                              className="w-full font-sans text-base font-medium tracking-wide text-primary hover:text-[#6324FC] transition-colors flex items-center justify-between group text-left cursor-pointer py-2"
                            >
                              <span>{link.name}</span>
                              <ChevronDown className="w-4 h-4 -rotate-90 text-[#6324FC]" />
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`font-sans text-base font-medium tracking-wide transition-colors flex items-center justify-between group py-2 ${
                                isActive ? "text-[#6324FC]" : "text-primary hover:text-[#6324FC]"
                              }`}
                            >
                              <span>{link.name}</span>
                              {isActive ? (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)]" />
                              ) : (
                                <ArrowRight className="w-4 h-4 text-[#6324FC] opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </Link>
                          )}
                          <div className="w-full h-[1px] bg-primary/5 mt-2" />
                        </div>
                      );
                    })}
                    
                    {/* Contact Link in menu */}
                    <div className="w-full">
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-sans text-base font-medium tracking-wide transition-colors flex items-center justify-between group py-2 ${
                          pathname === "/contact" ? "text-[#6324FC]" : "text-primary hover:text-[#6324FC]"
                        }`}
                      >
                        <span>Contact</span>
                        {pathname === "/contact" ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)]" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-[#6324FC] opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                      <div className="w-full h-[1px] bg-primary/5 mt-2" />
                    </div>

                    {/* Get in touch footer */}
                    <div className="mt-auto pt-8">
                      <div className="font-mono text-xs text-primary/40 tracking-widest uppercase mb-4">Get in touch</div>
                      <a href="mailto:contact@injaazh.com" className="font-sans font-light text-xl text-[#6324FC]">contact@injaazh.com</a>
                    </div>
                  </motion.div>
                )}

                {/* PANE 2: SERVICES CATEGORIES */}
                {currentPane === "services" && (
                  <motion.div
                    key="services"
                    custom={direction}
                    variants={paneVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
                    className="flex flex-col gap-4 w-full h-full overflow-y-auto pr-2 absolute inset-0 custom-scrollbar"
                  >
                    {/* Back header */}
                    <button
                      onClick={() => {
                        setDirection("backward");
                        setCurrentPane("main");
                        setActiveCategory(null);
                      }}
                      className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-primary/50 hover:text-primary transition-colors text-left uppercase mb-4 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180 text-[#6324FC]" />
                      Back to Menu
                    </button>
                    
                    <h3 className="font-sans text-lg font-semibold text-primary tracking-wide mb-2 border-b border-primary/10 pb-4">Our Services</h3>

                    {services.map((svc, i) => {
                      const isOpen = activeCategory === i;
                      return (
                        <div key={i} className="w-full">
                          <button
                            onClick={() => {
                              setActiveCategory(isOpen ? null : i);
                            }}
                            className="w-full font-sans text-base font-medium tracking-wide text-primary hover:text-[#6324FC] transition-colors flex items-center justify-between group text-left cursor-pointer py-2"
                          >
                            <span className="flex items-center gap-3">
                              <svc.icon className="w-4 h-4 text-[#6324FC]" />
                              {svc.title}
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-[#6324FC] ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden mt-2 pl-7 border-l border-primary/10 flex flex-col gap-2"
                              >
                                {svc.items.map((item, idx) => {
                                  const isSubActive = pathname === item.link;
                                  return (
                                    <Link
                                      key={idx}
                                      href={item.link}
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveCategory(null);
                                      }}
                                      className={`font-sans text-sm font-light transition-colors flex items-center justify-between group py-1.5 ${
                                        isSubActive ? "text-[#6324FC] font-normal" : "text-primary/70 hover:text-[#6324FC]"
                                      }`}
                                    >
                                      <span>{item.name}</span>
                                      <ArrowRight className="w-3.5 h-3.5 text-[#6324FC] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <div className="w-full h-[1px] bg-primary/5 mt-2" />
                        </div>
                      );
                    })}
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
