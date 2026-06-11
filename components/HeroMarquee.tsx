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
    <div className="w-full bg-[#060608] py-24 overflow-hidden relative flex flex-col justify-center items-center space-y-16">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-gradient-to-r from-[#6324FC]/20 to-[#00E5FF]/20 blur-[120px] pointer-events-none z-0" />

      {/* Row 1: Forward (Solid Purple Band) */}
      <div className="relative w-[110%] -ml-[5%] flex overflow-hidden bg-[#6324FC] py-5 md:py-8 group rotate-[2deg] shadow-[0_0_50px_rgba(99,36,252,0.4)] z-20">
        <div className="flex whitespace-nowrap animate-marquee hover:pause" style={{ animationDuration: '160s' }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-8">
              {marqueeRow1.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.href}
                  className="flex items-center gap-8 sm:gap-12 md:gap-16 hover:opacity-75 transition-opacity"
                >
                  <span className="font-heading text-4xl sm:text-6xl leading-none capitalize tracking-tighter text-white">
                    {item.label}
                  </span>
                  <span className="text-white/50 text-3xl md:text-5xl">✦</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse (Dark Outlined Band) */}
      <div className="relative w-[110%] -ml-[5%] flex overflow-hidden bg-[#060608] border-y border-[#00E5FF]/30 py-5 md:py-8 group -rotate-[2deg] shadow-[0_0_50px_rgba(0,229,255,0.1)] z-10">
        <div className="flex whitespace-nowrap animate-marquee-reverse hover:pause" style={{ animationDuration: '180s' }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-8">
              {marqueeRow2.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.href}
                  className="flex items-center gap-8 sm:gap-12 md:gap-16 group/link"
                >
                  <span className="font-heading text-4xl sm:text-6xl leading-none capitalize tracking-tighter transition-colors duration-300 text-white/40 group-hover/link:text-[#00E5FF]">
                    {item.label}
                  </span>
                  <span className="text-[#00E5FF]/30 text-3xl md:text-5xl">✦</span>
                </Link>
              ))}
            </div>
          ))}
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
