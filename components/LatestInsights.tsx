"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    category: "TECHNICAL SEO",
    badge: "SEMANTIC SEARCH BLUEPRINT",
    title: "The SEO Renaissance: Why Modern Brands are Ditching Old Strategies",
    slug: "the-seo-renaissance",
    excerpt:
      "Standard keyword-stuffing SEO is obsolete. Discover the seismic shift toward Semantic Search and why your headless Next.js architecture is now your biggest organic ranking factor.",
    readTime: "5 min read",
    date: "May 04, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "#6324FC",
  },
  {
    category: "NEXT.JS 15 ENGINEERING",
    badge: "PERFORMANCE BENCHMARK",
    title: "Performance as a Feature: Building Speed-First Architectures with Next.js",
    slug: "performance-as-a-feature",
    excerpt:
      "A slow website is a silent revenue killer. We examine how migrating to headless React & Next.js architectures converts +140% higher and outperforms legacy monolith platforms.",
    readTime: "7 min read",
    date: "May 02, 2026",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    color: "#00E5FF",
  },
  {
    category: "GLOBAL EXPANSION",
    badge: "B2B REVENUE PLAYBOOK",
    title: "From Clicks to Clients: The Blueprint for B2B Growth in Global Markets",
    slug: "from-clicks-to-clients",
    excerpt:
      "Scale across North America, Europe, and the Middle East without brand erosion. A granular breakdown of how we localized digital revenue engines across 5 international hubs.",
    readTime: "6 min read",
    date: "April 28, 2026",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    color: "#00FFA3",
  },
];

export default function LatestInsights() {
  return (
    <section className="w-full bg-[#060608] py-20 md:py-28 relative overflow-hidden border-t border-white/5 text-white">
      {/* Background Ambient Glows - GPU Accelerated */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(99,36,252,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
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
              THE INTELLIGENCE HUB // RESEARCH & WHITE PAPERS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
            {/* Signature Triad Heading */}
            <div className="max-w-2xl">
              <h2 className="sr-only">
                The Intelligence Hub: Insights That Drive Growth - Web Design, Next.js Architecture, and SEO Strategy
              </h2>
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white"
              >
                <span className="text-white mr-3 md:mr-4">INSIGHTS</span>
                <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
                  THAT
                </span>
                <br />
                <span className="stroke-text opacity-95">DRIVE GROWTH.</span>
              </div>

              {/* Research Capability Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                  ORIGINAL RESEARCH
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  NEXT.JS BENCHMARKS
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                  GLOBAL SEO PLAYBOOKS
                </div>
              </div>
            </div>

            {/* Editorial Description */}
            <div className="max-w-lg">
              <p className="font-sans font-light text-white/75 text-sm sm:text-base leading-relaxed border-l-2 border-[#6324FC]/60 pl-5 sm:pl-6 py-0.5 mb-4">
                Battle-tested engineering whitepapers, technical SEO teardowns, and actionable growth architectures engineered by our principal practitioners.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 pl-5 sm:pl-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>DATA-BACKED AGENCY WHITE PAPERS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col h-full rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.07] hover:border-[#6324FC]/40 transition-all duration-700 overflow-hidden backdrop-blur-2xl shadow-2xl hover:-translate-y-2"
            >
              {/* Card Ambient Glow on Hover */}
              <div
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: post.color }}
              />

              {/* Top Image Container */}
              <Link href={`/blog/${post.slug}`} className="relative h-64 sm:h-72 w-full overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-85 group-hover:opacity-100"
                />
                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/40 to-transparent opacity-90" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: post.color }}
                />

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span
                    className="px-3.5 py-1.5 backdrop-blur-md text-white font-mono text-[10px] font-semibold tracking-wider uppercase rounded-full border shadow-lg"
                    style={{
                      backgroundColor: `${post.color}20`,
                      borderColor: `${post.color}40`,
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Top Right Spec Chip */}
                <div className="absolute top-6 right-6 z-10 hidden sm:block">
                  <span className="px-2.5 py-1 rounded-full bg-[#060608]/70 border border-white/[0.08] font-mono text-[9px] text-white/60 font-semibold uppercase tracking-wider backdrop-blur-md">
                    {post.badge}
                  </span>
                </div>
              </Link>

              {/* Content Area */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 relative z-10 justify-between">
                <div>
                  {/* Meta Bar */}
                  <div className="flex items-center gap-5 mb-5 font-mono text-[11px] text-white/45">
                    <div className="flex items-center gap-1.5 group-hover:text-white/70 transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-[#6324FC]" />
                      {post.date}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5 group-hover:text-white/70 transition-colors">
                      <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-heading text-xl sm:text-2xl tracking-tight text-white mb-4 leading-snug group-hover:text-[#00E5FF] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="font-sans font-light text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="pt-5 border-t border-white/[0.06] mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-between w-full text-white/60 font-mono tracking-wider text-xs group/btn transition-colors duration-300 hover:text-white"
                  >
                    <span className="font-semibold uppercase flex items-center gap-2">
                      READ FULL BRIEFING
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover/btn:bg-[#6324FC] group-hover/btn:border-[#6324FC] group-hover/btn:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white/70 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Hub CTA Button */}
        <div className="flex justify-center">
          <Link href="/blog" className="group block w-full md:w-auto relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 w-full hover:shadow-[0_0_35px_rgba(99,36,252,0.35)] isolate"
            >
              {/* Centered spinning conic border */}
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>

              <div className="relative w-full h-full px-8 py-4 md:px-12 md:py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />

                <span className="relative z-10 flex items-center justify-center gap-4 font-heading md:text-lg tracking-[0.2em] text-white uppercase text-center font-bold">
                  ACCESS THE VAULT
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#00E5FF]" />
                </span>
              </div>
            </motion.div>

            <div className="absolute -inset-4 bg-[#6324FC]/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}
