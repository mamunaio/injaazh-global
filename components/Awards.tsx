"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Star, 
  ShieldCheck, 
  Zap, 
  Trophy, 
  CheckCircle2
} from "lucide-react";

interface AwardItem {
  platform: string;
  category: string;
  title: string;
  badge: string;
  detail: string;
  score: string;
  auditMetric: string;
  stars: number;
  accentColor: string;
  icon: typeof Award;
}

const awards: AwardItem[] = [
  {
    platform: "Clutch",
    category: "GLOBAL B2B DIRECTORY",
    title: "Top Global Digital Agency 2024 - 2025",
    badge: "TOP LEADER",
    detail: "Ranked #1 in Technical SEO, Next.js Web Architecture & High-Conversion Digital Systems across US, UK & AU markets.",
    score: "4.9 / 5.0",
    auditMetric: "120+ Verified Client Audits",
    stars: 5,
    accentColor: "#6324FC",
    icon: Award,
  },
  {
    platform: "Google Partner",
    category: "PREMIER PERFORMANCE BADGE",
    title: "Certified Search & Performance Authority",
    badge: "TOP TIER",
    detail: "Accredited for top-percentile Core Web Vitals, enterprise indexation velocity, and semantic search dominance.",
    score: "5.0 / 5.0",
    auditMetric: "Audited Search Authority",
    stars: 5,
    accentColor: "#00E5FF",
    icon: Zap,
  },
  {
    platform: "DesignRush",
    category: "GLOBAL AGENCY AUTHORITY",
    title: "Top 1% Full-Service Digital Agency",
    badge: "VERIFIED LEADER",
    detail: "Vetted among the top 10 international agencies for headless e-commerce, custom UX design systems, and brand scaling.",
    score: "Verified Leader",
    auditMetric: "Top 10 Global Selection",
    stars: 5,
    accentColor: "#FF2D55",
    icon: ShieldCheck,
  },
  {
    platform: "G2 Crowd",
    category: "ENTERPRISE SOFTWARE & SERVICES",
    title: "Leader & High Performer 2025",
    badge: "HIGH PERFORMER",
    detail: "Awarded top quartile rankings for client satisfaction, high-velocity sprint delivery, and SLA compliance.",
    score: "4.9 / 5.0",
    auditMetric: "98% Customer Satisfaction",
    stars: 5,
    accentColor: "#00FFA3",
    icon: Star,
  },
  {
    platform: "CSSDA & Awwwards",
    category: "DIGITAL DESIGN HONORS",
    title: "UI/UX & Mobile Excellence Honors",
    badge: "HONORABLE MENTION",
    detail: "Recognized for buttery 60fps micro-interactions, responsive fluidity, and world-class digital visual craftsmanship.",
    score: "Honorable Mention",
    auditMetric: "Awwwards & CSSDA Nominee",
    stars: 5,
    accentColor: "#F59E0B",
    icon: Trophy,
  },
];

export default function Awards() {
  return (
    <section 
      id="awards"
      className="w-full bg-[#060608] py-20 md:py-28 relative overflow-hidden border-t border-white/5 text-white"
    >
      {/* Background Ambient Glows - GPU Accelerated */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(99,36,252,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none" />


      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* ========================================================
              LEFT COLUMN: Sticky Authority & Institutional Trust Hub
              ======================================================== */}
          <div className="w-full lg:w-[44%] lg:sticky lg:top-28">
            
            {/* Eyebrow Kicker */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-[1px] bg-gradient-to-r from-[#6324FC] to-[#00E5FF]"
              />
              <span className="font-mono text-xs md:text-sm tracking-[0.45em] text-[#6324FC] uppercase font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                VALIDATED EXCELLENCE // GLOBAL RECOGNITION
              </span>
            </div>

            {/* Signature Triad Heading */}
            <div className="mb-6">
              <h2 className="sr-only">
                Industry Awards & Global Accreditations - Recognized by Clutch, Google, DesignRush, G2, and Awwwards
              </h2>
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white"
              >
                <span className="text-white mr-3 md:mr-4">INDUSTRY</span>
                <br className="hidden sm:inline" />
                <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
                  HONORS &amp;
                </span>
                <br />
                <span className="stroke-text opacity-95">AWARDS.</span>
              </div>
            </div>

            {/* Executive Capability Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                TOP 1% GLOBAL AGENCY
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                INDEPENDENTLY AUDITED
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                ISO 9001:2015 CERTIFIED
              </div>
            </div>

            {/* Authority Editorial Copy */}
            <p className="font-sans font-light text-white/75 text-sm sm:text-base leading-relaxed border-l-2 border-[#6324FC]/60 pl-5 sm:pl-6 py-0.5 mb-8">
              Our engineering architecture, technical SEO methodologies, and conversion benchmarks are independently audited and recognized by premier global platforms. We don't just build websites — we set international standards that legacy agencies measure against.
            </p>

            {/* Institutional Quality Seal Bento Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl bg-[#09090E] border border-white/10 p-6 md:p-7 overflow-hidden hover:border-[#6324FC]/40 transition-all duration-300 shadow-2xl"
            >
              {/* Radial Accent Glow */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#6324FC]/15 blur-3xl rounded-full pointer-events-none group-hover:bg-[#6324FC]/25 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

              {/* Header inside Card */}
              <div className="relative z-10 flex items-start gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl bg-[#6324FC]/10 border border-[#6324FC]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <ShieldCheck className="w-7 h-7 text-[#00E5FF]" />
                  <div className="absolute -inset-1 rounded-2xl border border-[#6324FC]/20 animate-pulse pointer-events-none" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#00E5FF] font-semibold">Institutional Seal</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                  </div>
                  <h3 className="font-heading text-lg text-white font-medium">Quality Guaranteed &amp; Audited</h3>
                  <p className="font-sans text-xs text-white/50">ISO 9001:2015 Compliant Management System</p>
                </div>
              </div>

              {/* Audit Metrics List */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs font-mono">
                <div className="flex items-center justify-between text-white/80">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFA3]" />
                    Audit Pass Rate
                  </span>
                  <span className="text-white font-semibold">100% Verified</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFA3]" />
                    Enterprise SLA Standard
                  </span>
                  <span className="text-white font-semibold">99.98% Guarantee</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFA3]" />
                    Architecture Compliance
                  </span>
                  <span className="text-white font-semibold">Zero Vulnerability Vetted</span>
                </div>
              </div>

              {/* Micro Status Chip */}
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>CERTIFICATE #INJ-2026-GLOBAL</span>
                <span className="text-[#00FFA3] flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#00FFA3] animate-ping" />
                  ACTIVE ACCREDITATION
                </span>
              </div>
            </motion.div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Interactive Accolades Bento Cards Stack
              ======================================================== */}
          <div className="w-full lg:w-[56%] flex flex-col gap-4 md:gap-5">
            {awards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group relative rounded-3xl bg-[#09090E] border border-white/[0.08] p-6 md:p-8 hover:border-white/25 transition-all duration-300 overflow-hidden shadow-xl"
                >
                  {/* Spotlight Radial Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 10% 20%, ${award.accentColor}18 0%, transparent 70%)`
                    }}
                  />

                  {/* Shimmer Light Beam Effect on Card Top */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                  {/* Card Content Grid */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    
                    {/* Left & Center: Icon + Platform & Award Details */}
                    <div className="flex items-start gap-4 md:gap-5 flex-1">
                      
                      {/* Squircle Metallic Icon Container */}
                      <div 
                        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-500 relative"
                        style={{
                          boxShadow: `0 0 20px ${award.accentColor}10`
                        }}
                      >
                        <Icon 
                          className="w-7 h-7 md:w-8 md:h-8 transition-colors duration-500" 
                          style={{ color: award.accentColor }}
                        />
                        {/* Tiny corner pulse indicator */}
                        <div 
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-[#060608]"
                          style={{ backgroundColor: award.accentColor }}
                        />
                      </div>

                      {/* Text Details */}
                      <div className="flex-1 min-w-0">
                        {/* Category & Badge Meta Row */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span 
                            className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-semibold"
                            style={{ color: award.accentColor }}
                          >
                            {award.category}
                          </span>
                          <span className="text-white/20 text-xs">•</span>
                          <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] font-mono text-[9px] text-white/70">
                            {award.badge}
                          </span>
                        </div>

                        {/* Platform Name */}
                        <h3 className="font-heading text-xl md:text-2xl text-white font-medium tracking-tight mb-1 group-hover:text-white transition-colors">
                          {award.platform}
                        </h3>

                        {/* Official Award Title */}
                        <p className="font-sans font-medium text-xs md:text-sm text-white/90 mb-2">
                          {award.title}
                        </p>

                        {/* Detailed Description */}
                        <p className="font-sans text-xs text-white/60 leading-relaxed max-w-lg">
                          {award.detail}
                        </p>
                      </div>

                    </div>

                    {/* Right Side: Score Capsule & Star Array */}
                    <div className="w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-center pt-4 sm:pt-0 border-t sm:border-t-0 border-white/[0.06] flex-shrink-0">
                      
                      {/* Numeric Score Pill */}
                      <div className="font-heading text-xl md:text-2xl text-white font-semibold tracking-tight mb-1">
                        {award.score}
                      </div>

                      {/* 5-Star Rating Array */}
                      <div className="flex items-center gap-1 mb-1.5" aria-label={`${award.stars} out of 5 stars`}>
                        {[...Array(award.stars)].map((_, starIdx) => (
                          <Star 
                            key={starIdx} 
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]" 
                          />
                        ))}
                      </div>

                      {/* Verified Audit Beacon */}
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
                        <span className="truncate max-w-[130px] sm:max-w-none">{award.auditMetric}</span>
                      </div>

                    </div>

                  </div>

                  {/* Watermark platform icon in background */}
                  <div 
                    aria-hidden="true" 
                    className="absolute -right-6 -bottom-6 w-32 h-32 text-white/[0.015] group-hover:text-white/[0.035] group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  >
                    <Icon className="w-full h-full" />
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
