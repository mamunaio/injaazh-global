"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Share2,
  Calendar,
  User,
  Globe,
  Link2,
  Quote,
  MoveRight,
  Check,
  Sparkles
} from "lucide-react";
import type { InsightArticle } from "@/lib/insightsData";

interface ArticleViewClientProps {
  article: InsightArticle;
  nextArticle: InsightArticle;
}

export default function ArticleViewClient({ article, nextArticle }: ArticleViewClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const [copied, setCopied] = useState(false);

  const handleShare = (platform: "linkedin" | "twitter" | "facebook" | "copy") => {
    const url = article.canonicalUrl;
    const title = article.title;

    if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (platform === "copy") {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        });
      }
    }
  };

  // Helper to split title into primary + secondary stylized text
  const words = article.title.split(" ");
  const firstPart = words.slice(0, 3).join(" ");
  const secondPart = words.slice(3).join(" ");

  const nextWords = nextArticle.title.split(" ");
  const nextFirst = nextWords.slice(0, 3).join(" ");
  const nextSecond = nextWords.slice(3).join(" ");

  return (
    <main
      ref={containerRef}
      className="w-full bg-[#060608] min-h-screen text-white selection:bg-[#6324FC] selection:text-white"
    >
      {/* 0. Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#6324FC] z-[210] origin-left"
        style={{ scaleX }}
      />

      {/* 1. Cinematic Editorial Hero */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src={article.heroImage.url}
            alt={article.heroImage.alt}
            fill
            className="object-cover grayscale brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/80 via-transparent to-[#060608]" />
        </motion.div>

        {/* Floating Grain Overlay */}
        <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay z-10" />

        <div className="relative z-20 w-full max-w-[1400px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center pt-32"
          >
            {/* Back Button */}
            <Link
              href="/insights"
              className="group inline-flex items-center gap-4 mb-12 px-6 py-3 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-md hover:border-[#6324FC] transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#6324FC]" />
              <span className="font-heading text-[12px] tracking-[0.4em] capitalize text-white/40 group-hover:text-white transition-colors">
                Back to Insights
              </span>
            </Link>

            <div className="font-heading text-[12px] tracking-[0.8em] text-[#6324FC] capitalize mb-8 ml-[0.8em]">
              {article.badge} {"//"} 2026
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6.5vw] leading-[0.9] tracking-tighter capitalize mb-12 max-w-5xl">
              {firstPart} <br />
              <span className="stroke-text text-transparent italic opacity-50">{secondPart}</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 font-heading text-[12px] tracking-[0.4em] capitalize text-white/40">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-[#6324FC] transition-colors relative">
                  {article.author.avatarUrl ? (
                    <Image
                      src={article.author.avatarUrl}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="w-3.5 h-3.5 text-[#6324FC]" />
                  )}
                </div>
                <span className="group-hover:text-white transition-colors">{article.author.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-3.5 h-3.5 text-[#6324FC]" />
                {article.formattedDate}
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-3.5 h-3.5 text-[#6324FC]" />
                {article.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Article Architecture (The Narrative) */}
      <section className="py-24 md:py-36 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Metadata & Interactions */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-16 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="font-heading text-[12px] text-[#6324FC] tracking-[0.5em] capitalize">Core Topic</div>
              <div className="font-heading text-3xl md:text-4xl capitalize tracking-tighter italic text-white/90">
                {article.category}
              </div>
            </div>

            {/* Share Card */}
            <div className="p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] space-y-8 backdrop-blur-xl">
              <div className="font-heading text-[12px] text-white/30 tracking-[0.5em] capitalize">
                Share Intelligence
              </div>
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => handleShare("linkedin")}
                  className="flex items-center justify-between group cursor-pointer text-left"
                >
                  <span className="font-heading text-[12px] tracking-widest text-white/40 group-hover:text-white transition-colors capitalize">
                    LinkedIn
                  </span>
                  <Link2 className="w-4 h-4 text-white/20 group-hover:text-[#6324FC] transition-colors" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center justify-between group cursor-pointer text-left"
                >
                  <span className="font-heading text-[12px] tracking-widest text-white/40 group-hover:text-white transition-colors capitalize">
                    Twitter / X
                  </span>
                  <Globe className="w-4 h-4 text-white/20 group-hover:text-[#6324FC] transition-colors" />
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="flex items-center justify-between group cursor-pointer text-left"
                >
                  <span className="font-heading text-[12px] tracking-widest text-white/40 group-hover:text-white transition-colors capitalize">
                    {copied ? "Link Copied!" : "Copy Route"}
                  </span>
                  {copied ? (
                    <Check className="w-4 h-4 text-[#00FFA3] transition-colors" />
                  ) : (
                    <Share2 className="w-4 h-4 text-white/20 group-hover:text-[#6324FC] transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Contributor Card */}
            <div className="space-y-6">
              <div className="font-heading text-[12px] text-white/30 tracking-[0.5em] capitalize">Contributor</div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/20 flex items-center justify-center shrink-0 overflow-hidden relative">
                  {article.author.avatarUrl ? (
                    <Image
                      src={article.author.avatarUrl}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="w-6 h-6 text-[#6324FC]" />
                  )}
                </div>
                <div>
                  <div className="font-heading text-xl capitalize text-white">{article.author.name}</div>
                  <div className="font-heading text-[12px] tracking-widest text-white/40 capitalize">
                    {article.author.role}
                  </div>
                  <div className="font-heading text-[10px] tracking-widest text-[#6324FC] uppercase mt-1">
                    {article.author.type}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Body & Narrative */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">
            {/* Overview Pull-Quote */}
            <div className="relative pl-8 md:pl-12 border-l-2 border-[#6324FC]/40">
              <Quote className="absolute -top-6 -left-4 w-12 h-12 text-[#6324FC] opacity-20 pointer-events-none" />
              <p className="font-sans font-light text-2xl md:text-4xl leading-[1.3] text-white/90 italic tracking-tight">
                &quot;{article.overview}&quot;
              </p>
            </div>

            {/* Article Sections */}
            <article className="prose prose-invert prose-xl max-w-none font-sans font-light leading-[1.8] text-white/70 space-y-16">
              {article.sections.map((sec, secIdx) => (
                <div key={secIdx} className="space-y-8">
                  {sec.heading && (
                    <h2 className="font-heading text-3xl md:text-5xl text-white tracking-tighter capitalize pt-8 mb-6 italic">
                      {sec.heading}
                    </h2>
                  )}

                  {/* Render paragraphs cleanly */}
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/60 font-light">
                    {sec.content
                      .split(/\n\s*\n/)
                      .map((para, pIdx) => {
                        const trimmed = para.trim();
                        if (!trimmed) return null;

                        // Check if block is a numbered list
                        if (/^\d+\.\s+/.test(trimmed)) {
                          const items = trimmed.split(/\n(?=\d+\.\s+)/);
                          return (
                            <ol key={pIdx} className="list-decimal pl-6 space-y-3 my-6 text-white/80">
                              {items.map((item, iIdx) => (
                                <li key={iIdx} className="pl-2">
                                  {item.replace(/^\d+\.\s+/, "")}
                                </li>
                              ))}
                            </ol>
                          );
                        }

                        // Check if block is an unordered bullet list
                        if (/^[-*+]\s+/.test(trimmed)) {
                          const items = trimmed.split(/\n(?=[-*+]\s+)/);
                          return (
                            <ul key={pIdx} className="list-disc pl-6 space-y-3 my-6 text-white/80">
                              {items.map((item, iIdx) => (
                                <li key={iIdx} className="pl-2">
                                  {item.replace(/^[-*+]\s+/, "")}
                                </li>
                              ))}
                            </ul>
                          );
                        }

                        // Check if block is a blockquote
                        if (trimmed.startsWith(">")) {
                          return (
                            <blockquote
                              key={pIdx}
                              className="relative p-8 md:p-10 bg-white/[0.02] border-l-4 border-[#6324FC] rounded-r-2xl my-8 text-white/90 italic"
                            >
                              {trimmed.replace(/^>\s*/, "")}
                            </blockquote>
                          );
                        }

                        return (
                          <p key={pIdx} className="text-white/70">
                            {trimmed}
                          </p>
                        );
                      })}
                  </div>

                  {/* Visual card between section 2 and 3 */}
                  {secIdx === 2 && (
                    <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden my-16 border border-white/10 group">
                      <Image
                        src={article.heroImage.url}
                        alt={article.heroImage.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                      />
                      <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                      <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <div className="font-heading text-[12px] tracking-widest capitalize text-white/50">
                          {article.heroImage.caption}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Key Takeaways Section */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="mt-20 p-10 md:p-14 bg-white/[0.02] border border-[#6324FC]/30 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="w-5 h-5 text-[#6324FC]" />
                    <span className="font-heading text-sm tracking-[0.4em] uppercase text-[#6324FC] font-semibold">
                      Key Strategic Takeaways
                    </span>
                  </div>

                  <div className="space-y-6">
                    {article.keyTakeaways.map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-4 text-white/80 text-base md:text-lg leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-[#6324FC] mt-2.5 shrink-0" />
                        <span className="flex-1 font-light">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* 3. Next Article Takeover Banner */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#060608] border-t border-white/5 group">
        <Link
          href={`/insights/${nextArticle.slug}`}
          className="relative z-10 w-full h-full flex flex-col items-center justify-center cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute inset-0 z-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
          >
            <Image
              src={nextArticle.heroImage.url}
              alt={nextArticle.title}
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]" />
          </motion.div>

          <div className="relative z-10 text-center space-y-8 px-6">
            <div className="font-heading text-[12px] tracking-[0.8em] text-white/30 capitalize">
              Continue Reading // Up Next
            </div>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-[7vw] leading-tight tracking-tighter capitalize text-white group-hover:text-[#6324FC] transition-colors duration-700 italic max-w-4xl mx-auto">
              {nextFirst} <br className="hidden md:block" />
              <span>{nextSecond}</span>
            </h2>
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="w-16 h-[1px] bg-white/20" />
              <div className="relative w-20 h-20 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-xl isolate">
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <MoveRight className="relative z-10 w-8 h-8 text-[#6324FC] group-hover:text-white transition-all duration-500" />
                </div>
              </div>
              <div className="w-16 h-[1px] bg-white/20" />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
