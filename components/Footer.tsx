"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useProjectModal } from "./ProjectModalContext";
import Link from "next/link";

export default function Footer() {
  const [now, setNow] = useState(new Date());
  const [userRegion, setUserRegion] = useState("US");
  const [mounted, setMounted] = useState(false);
  const { openModal } = useProjectModal();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setNow(new Date()), 1000);
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes("London") || tz.includes("Europe/GB") || tz.includes("Europe/London")) setUserRegion("UK");
      else if (tz.includes("Sydney") || tz.includes("Melbourne") || tz.includes("Australia")) setUserRegion("AU");
      else if (tz.includes("Dubai") || tz.includes("Asia/Dubai")) setUserRegion("UAE");
      else if (tz.includes("Toronto") || tz.includes("Canada")) setUserRegion("CA");
      else if (tz.includes("New_York") || tz.includes("America") || tz.includes("US")) setUserRegion("US");
    } catch (e) { console.log("Timezone detection failed"); }
    return () => clearInterval(interval);
  }, []);

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "Agency", href: "/agency" },
        { label: "Our Work", href: "/work" },
        { label: "Insights", href: "/insights" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Web Engineering", href: "/services/web-dev" },
        { label: "E-Commerce", href: "/services/web-dev/headless-commerce" },
        { label: "Performance SEO", href: "/services/seo" },
        { label: "Growth Strategy", href: "/services/marketing" },
        { label: "Brand Identity", href: "/services/content" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter / X", href: "https://twitter.com" },
        { label: "Awwwards", href: "https://awwwards.com" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-700 text-primary pt-32 lg:pt-48 relative overflow-hidden flex flex-col justify-between min-h-screen">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 flex-grow">
        
        {/* 1. Massive Cinematic CTA */}
        <div className="mb-48 lg:mb-64">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[#6324FC] tracking-[0.5em] text-[10px] uppercase mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-[#6324FC]" /> 
            Collaborate With Us
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[12vw] lg:text-[10vw] leading-[0.8] tracking-tighter uppercase mb-24 select-none"
          >
            LET&apos;S SCALE <br/>
            <span className="stroke-text text-transparent italic opacity-30">WORLDWIDE.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => openModal()}
              className="group relative px-16 py-8 bg-black dark:bg-white text-white dark:text-black font-heading text-xl tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 flex items-center gap-10 uppercase hover:pr-20"
            >
              <div className="absolute inset-0 bg-[#6324FC] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                START A PROJECT
              </span>
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* 2. Mega Navigation & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-12 pb-32 border-b border-primary/10">
          
          {/* Newsletter Section */}
          <div className="col-span-1 lg:col-span-5 flex flex-col lg:pr-24">
            <h3 className="font-heading text-5xl tracking-tighter mb-8 uppercase">The Insider</h3>
            <p className="font-sans font-light text-primary/50 text-sm leading-relaxed mb-12">
              Join 5,000+ founders and digital architects receiving our weekly breakdown of the technologies shaping the future.
            </p>
            <div className="relative group w-full max-w-md">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-primary/20 py-5 text-sm tracking-[0.2em] uppercase focus:outline-none focus:border-[#6324FC] transition-all placeholder:text-primary/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary/40 hover:text-[#6324FC] transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6324FC] group-focus-within:w-full transition-all duration-700 ease-out" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-10">
                <div className="font-mono text-[10px] text-[#6324FC] tracking-[0.4em] uppercase opacity-60">
                  {column.title}
                </div>
                <ul className="flex flex-col gap-5">
                  {column.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href} 
                        className="group relative inline-flex items-center font-heading text-2xl tracking-tight hover:text-[#6324FC] transition-all duration-300"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute -left-6 w-0 h-[2px] bg-[#6324FC] group-hover:w-4 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#6324FC]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="py-12 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* World Clocks */}
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {[
              { city: "New York", tz: "America/New_York", code: "US" },
              { city: "London", tz: "Europe/London", code: "UK" },
              { city: "Dubai", tz: "Asia/Dubai", code: "UAE" }
            ].map((loc, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC] group-hover:scale-150 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-primary/40 group-hover:text-primary transition-colors">{loc.city}</span>
                  <span className="font-heading text-lg tracking-tight">
                    {mounted ? now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: loc.tz, hour12: true }) : "--:--"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legal & Copyright */}
          <div className="flex flex-col lg:items-end gap-4">
            <div className="flex gap-8 font-mono text-[10px] tracking-widest text-primary/40 uppercase">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
            <p className="font-sans text-xs text-primary/20 tracking-wider">
              © 2025 Injaazh. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Infinite Cinematic Marquee */}
      <div className="w-full relative pointer-events-none select-none overflow-hidden pb-12 border-t border-white/5 pt-12">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-20 items-center pr-20"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                <span className="font-heading text-[12vw] leading-none tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#6324FC] via-[#A855F7] to-[#00E5FF] opacity-20">
                  INJAAZH GLOBAL
                </span>
                <span className="font-heading text-[12vw] leading-none tracking-tighter stroke-text text-transparent opacity-10 uppercase italic">
                  DIGITAL AGENCY
                </span>
              </div>
            ))}
          </motion.div>
          
          {/* Duplicate for seamless loop */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-20 items-center pr-20"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                <span className="font-heading text-[12vw] leading-none tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#6324FC] via-[#A855F7] to-[#00E5FF] opacity-20">
                  INJAAZH GLOBAL
                </span>
                <span className="font-heading text-[12vw] leading-none tracking-tighter stroke-text text-transparent opacity-10 uppercase italic">
                  DIGITAL AGENCY
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
