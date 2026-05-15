"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const marqueeRow1 = [
  { label: "FULL-SERVICE DIGITAL AGENCY", href: "/agency" },
  { label: "HIGH-PERFORMANCE WEB DEV", href: "/services/web-dev" }, // Web Development থেকে আরেকটু স্ট্রং
  { label: "TECHNICAL SEO & GEO", href: "/services/seo" }, // মডার্ন এসইও ফোকাস
  { label: "DIGITAL MARKETING", href: "/services/marketing" },
  { label: "AEO & CONTENT SILOS", href: "/services/content" }, // Content Writing-এর প্রিমিয়াম ভার্সন
  { label: "INJAAZH GLOBAL", href: "/agency" },
  { label: "MARKET DOMINATION", href: "/services/strategy" },
  { label: "US · UK · AU · CA · UAE", href: "/contact" },
  { label: "CINEMATIC DIGITAL EXPERIENCE", href: "/services/ui-ux-design" }, // আপনাদের গ্লাসমর্ফিক ভাইবের সাথে ম্যাচ করে
  { label: "ENGINEERING EXCELLENCE", href: "/services/web-dev" }
];

const marqueeRow2 = [
  { label: "RESULTS-DRIVEN AGENCY", href: "/agency" },
  { label: "BRAND SCALING", href: "/services/marketing" },
  { label: "TOPICAL AUTHORITY", href: "/services/seo" }, // Organic Traffic-এর অ্যাডভান্সড টার্ম
  { label: "CONVERSION OPTIMIZATION", href: "/services/strategy" },
  { label: "TOP 1% AGENCY", href: "/agency" },
  { label: "ACHIEVING MORE", href: "/agency" },
  { label: "PIXEL-PERFECT ARCHITECTURE", href: "/services/ui-ux-design" }, 
  { label: "GLOBAL REACH", href: "/agency" },
  { label: "IMMERSIVE UI/UX", href: "/services/ui-ux-design" }, // Web Design-এর চেয়ে বেশি প্রফেশনাল
  { label: "PERFORMANCE MARKETING", href: "/services/marketing" },
  { label: "REVENUE GROWTH", href: "/services/strategy" }, // Strategic Growth-এর চেয়ে বেশি রেজাল্ট-ফোকাসড
  { label: "ENTERPRISE WEB APPS", href: "/services/web-dev" } // Innovative Solutions-এর চেয়ে স্পেসিফিক
];

export default function HeroMarquee() {
  return (
    <div className="w-full bg-[#060608] py-20 overflow-hidden border-b border-white/5 relative flex flex-col justify-center" style={{ perspective: "1200px" }}>
      
      {/* Dynamic Glow Behind Marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-[#6324FC]/10 blur-[100px] pointer-events-none z-0" />

      {/* Edge Blur & Fade Masks for the Cylinder Illusion */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#060608] via-[#060608]/80 to-transparent z-20 pointer-events-none" />
      
      {/* Gradual Edge Blurs to create focal depth */}
      <div className="absolute inset-y-0 left-0 w-1/4 z-10 pointer-events-none" style={{ backdropFilter: "blur(4px)", WebkitMaskImage: "linear-gradient(to right, black, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-1/4 z-10 pointer-events-none" style={{ backdropFilter: "blur(4px)", WebkitMaskImage: "linear-gradient(to left, black, transparent)" }} />

      {/* 3D Container */}
      <div 
        className="w-[110%] -ml-[5%] relative z-10"
        style={{ 
          transform: "rotateX(20deg) scale(1.05)",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Row 1: Forward */}
        <div className="relative flex overflow-hidden border-y border-white/5 py-8 group bg-transparent">
          <div className="flex whitespace-nowrap animate-marquee hover:pause" style={{ animationDuration: '100s' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
                {marqueeRow1.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href}
                    className={`font-heading text-5xl md:text-7xl tracking-[0.05em] transition-all duration-500 uppercase flex items-center gap-16 md:gap-24 ${
                      item.label.includes("AGENCY") || item.label.includes("INJAAZH")
                        ? "text-white opacity-80 hover:text-[#00E5FF] hover:opacity-100 drop-shadow-[0_0_15px_rgba(0,229,255,0)] hover:drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]" 
                        : "text-white/20 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className="text-[#6324FC] opacity-50 text-3xl">✦</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse */}
        <div className="relative flex overflow-hidden border-b border-white/5 py-8 group bg-transparent" style={{ transform: "translateZ(-10px)" }}>
          <div className="flex whitespace-nowrap animate-marquee-reverse hover:pause" style={{ animationDuration: '120s' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
                {marqueeRow2.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href}
                    className={`font-heading text-5xl md:text-7xl tracking-[0.05em] transition-all duration-500 uppercase flex items-center gap-16 md:gap-24 ${
                      item.label.includes("AGENCY") || item.label.includes("INJAAZH")
                        ? "text-white opacity-80 hover:text-[#6324FC] hover:opacity-100 drop-shadow-[0_0_15px_rgba(99,36,252,0)] hover:drop-shadow-[0_0_20px_rgba(99,36,252,0.8)]" 
                        : "text-white/20 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className="text-[#00E5FF] opacity-50 text-3xl">✦</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
