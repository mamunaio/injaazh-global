"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useProjectModal } from "./ProjectModalContext";
import Link from "next/link";
import Image from "next/image";

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
    <footer className="w-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-700 text-primary pt-16 md:pt-24 relative overflow-hidden flex flex-col justify-between min-h-screen">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 flex-grow">
        
        {/* 1. Massive Cinematic CTA */}
       <div className="mb-16 md:mb-20">
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="font-mono text-[#6324FC] tracking-[0.5em] text-[10px] uppercase mb-12 flex items-center gap-4"
  >
    <span className="w-12 h-[1px] bg-[#6324FC]" /> 
    COLLABORATE WITH US
  </motion.div>
  
  {/* এখানে flex ব্যবহার করা হয়েছে যাতে টেক্সট এবং বাটন পাশাপাশি থাকে */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
    
    <motion.h2 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="font-heading text-5xl md:text-7xl leading-[0.8] tracking-tighter uppercase select-none flex-1"
    >
      LET&apos;S SCALE <br/>
      <span className="stroke-text text-transparent italic opacity-80">WORLDWIDE.</span>
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex-shrink-0"
    >
      <button 
        onClick={() => openModal()}
        className="group relative px-8 md:px-16 py-5 md:py-8 bg-black dark:bg-white text-white dark:text-black font-heading md:text-xl tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 flex items-center justify-between gap-4 md:gap-10 uppercase hover:pr-12 md:hover:pr-20 w-full md:w-auto"
      >
        <div className="absolute inset-0 bg-[#6324FC] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        <span className="relative z-10 group-hover:text-white transition-colors duration-500 text-center">
          START A PROJECT
        </span>
        <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0">
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </div>
      </button>
    </motion.div>

  </div>
</div>

        {/* 2. Mega Navigation & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 lg:pb-16 border-b border-primary/10">
          
          {/* Newsletter Section */}
          <div className="col-span-1 lg:col-span-5 flex flex-col lg:pr-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[#6324FC]" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#6324FC] uppercase">JOIN THE COLLECTIVE</span>
            </div>
            <div className="relative h-12 w-36 mb-6">
              <Image 
                src="/assets/logo.webp" 
                alt="INJAAZH" 
                fill 
                className="object-contain dark:brightness-0 dark:invert transition-all duration-300" 
              />
            </div>
            <p className="font-sans font-light text-primary/70 text-base leading-relaxed mb-8 max-w-md">
              Receive our exclusive weekly breakdown of the engineering strategies and digital technologies shaping the future of global brands.
            </p>
            <div className="relative group w-full max-w-md">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 rounded-xl px-6 py-5 text-sm tracking-[0.2em] uppercase focus:outline-none focus:border-[#6324FC] focus:bg-primary/10 dark:focus:bg-white/10 transition-all placeholder:text-primary/30"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#6324FC] text-white rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(99,36,252,0.3)]">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 lg:gap-8 lg:mt-0">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="font-sans  font-bold text-primary/95 dark:text-primary/90 tracking-wider uppercase">
                  {column.title}
                </div>
                <ul className="flex flex-col gap-3.5">
                  {column.links.map((link, lIdx) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={lIdx}>
                        <Link 
                          href={link.href} 
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="group relative inline-flex items-center gap-1.5 font-sans text-base font-light text-primary/90 dark:text-primary/60 hover:text-[#6324FC] dark:hover:text-[#6324FC] transition-all duration-300 pl-0 hover:pl-4"
                        >
                          {/* Circle dot appearing on hover */}
                          <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#6324FC] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-[0_0_8px_rgba(99,36,252,0.8)]" />
                          
                          <span className="relative transition-all duration-300">{link.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary/60 group-hover:text-[#6324FC]" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pb-6 py-8 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* World Clocks */}
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {[
              { city: "NEW YORK", tz: "America/New_York", code: "US" },
              { city: "LONDON", tz: "Europe/London", code: "UK" },
              { city: "DUBAI", tz: "Asia/Dubai", code: "UAE" }
            ].map((loc, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="relative flex items-center justify-center w-2 h-2">
                   <div className="absolute w-full h-full rounded-full bg-[#6324FC] animate-ping opacity-70" />
                   <div className="relative w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/60 group-hover:text-[#6324FC] transition-colors">{loc.city}</span>
                  <span className="font-heading text-xl tracking-tight text-primary">
                    {mounted ? now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: loc.tz, hour12: true }) : "--:--"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legal & Copyright */}
          <div className="flex flex-col lg:items-end gap-6">
            <div className="flex gap-8 font-mono text-[10px] tracking-widest text-primary/60 uppercase">
              <Link href="/privacy-policy" className="hover:text-[#6324FC] transition-colors">PRIVACY</Link>
              <Link href="/terms" className="hover:text-[#6324FC] transition-colors">TERMS</Link>
              <Link href="/cookies" className="hover:text-[#6324FC] transition-colors">COOKIES</Link>
            </div>
            <p className="font-sans text-xs text-primary/40 tracking-wider">
              © 2026 Injaazh. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Infinite Cinematic Marquee replaced with Futuristic Cybernetic Global Hub Grid Visual */}
      <div className="w-full relative h-[100px] lg:h-[250px] overflow-hidden border-t border-primary/5 flex items-center justify-center bg-black/5 dark:bg-white/[0.01]">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,36,252,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,36,252,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated network nodes */}
        <svg className="w-full max-w-[1200px] h-full opacity-70 dark:opacity-90 z-10" viewBox="0 0 1200 250">
          {/* Connection paths */}
          <motion.path 
            d="M 200 130 Q 600 40 1000 130" 
            fill="none" 
            stroke="url(#neon-grad)" 
            strokeWidth="2" 
            strokeDasharray="8 6"
            animate={{ strokeDashoffset: [-100, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 200 130 Q 400 90 600 90 T 1000 130" 
            fill="none" 
            stroke="url(#cyan-grad)" 
            strokeWidth="1.5" 
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6324FC" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6324FC" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Pulse rings and dots for Hubs */}
          {/* Hub 1 (New York - approx 200, 130) */}
          <g transform="translate(200, 130)">
            <circle r="3" fill="#6324FC" />
            <motion.circle r="12" fill="none" stroke="#6324FC" strokeWidth="1" animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />
            <text y="-14" textAnchor="middle" className="font-mono text-[9px] font-bold fill-primary tracking-[0.2em] uppercase">NYC HUB</text>
            <text y="18" textAnchor="middle" className="font-mono text-[7px] fill-primary/30 tracking-widest">40.7128° N / 74.0060° W</text>
          </g>

          {/* Hub 2 (London - approx 600, 90) */}
          <g transform="translate(600, 90)">
            <circle r="3" fill="#A855F7" />
            <motion.circle r="12" fill="none" stroke="#A855F7" strokeWidth="1" animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }} />
            <text y="-14" textAnchor="middle" className="font-mono text-[9px] font-bold fill-primary tracking-[0.2em] uppercase">LDN HUB</text>
            <text y="18" textAnchor="middle" className="font-mono text-[7px] fill-primary/30 tracking-widest">51.5074° N / 0.1278° W</text>
          </g>

          {/* Hub 3 (Dubai - approx 1000, 130) */}
          <g transform="translate(1000, 130)">
            <circle r="3" fill="#00E5FF" />
            <motion.circle r="12" fill="none" stroke="#00E5FF" strokeWidth="1" animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.6 }} />
            <text y="-14" textAnchor="middle" className="font-mono text-[9px] font-bold fill-primary tracking-[0.2em] uppercase">DXB HUB</text>
            <text y="18" textAnchor="middle" className="font-mono text-[7px] fill-primary/30 tracking-widest">25.2048° N / 55.2708° E</text>
          </g>
        </svg>
        
        {/* Center brand watermark behind nodes with letter wave float & infinite gradient shifts */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h2 className="font-heading text-[14vw] tracking-[0.05em] leading-none uppercase font-bold flex">
            {["I", "N", "J", "A", "A", "Z", "H"].map((char, index) => (
              <motion.span
                key={index}
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.25
                }}
                className="bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#6324FC] bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent opacity-[0.18] dark:opacity-[0.06]"
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>
    </footer>
  );
}
