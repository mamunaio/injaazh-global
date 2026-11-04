"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, ReactNode } from "react";
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

type MarkdownBlock =
  | { type: "code"; lang: string; code: string }
  | { type: "math"; formula: string }
  | { type: "blockquote"; lines: string[] }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "p"; text: string };

function parseMarkdownBlocks(raw: string): MarkdownBlock[] {
  const lines = raw.split(/\r?\n/);
  const blocks: MarkdownBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') {
      i++;
      continue;
    }

    // 1. Fenced Code Block
    const codeMatch = line.match(/^```(\w*)/);
    if (codeMatch) {
      const lang = codeMatch[1] || '';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].match(/^```\s*$/)) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // consume closing ```
      blocks.push({ type: 'code', lang, code: codeLines.join('\n') });
      continue;
    }

    // 2. Block Math: $$...$$
    if (line.trim().startsWith('$$')) {
      const trimmed = line.trim();
      if (trimmed.length > 2 && trimmed.endsWith('$$') && trimmed !== '$$') {
        const formula = trimmed.slice(2, -2).trim();
        blocks.push({ type: 'math', formula });
        i++;
        continue;
      }
      const mathLines: string[] = [];
      const afterOpening = trimmed.slice(2).trim();
      if (afterOpening) mathLines.push(afterOpening);
      i++;
      while (i < lines.length && !lines[i].trim().endsWith('$$')) {
        mathLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) {
        const closingLine = lines[i].trim();
        const beforeClosing = closingLine.slice(0, -2).trim();
        if (beforeClosing) mathLines.push(beforeClosing);
        i++;
      }
      blocks.push({ type: 'math', formula: mathLines.join('\n') });
      continue;
    }

    // 3. Blockquote: lines starting with >
    if (line.trim().startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', lines: quoteLines });
      continue;
    }

    // 4. Ordered List: lines starting with 1. 2. etc.
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      let currentItem = line.replace(/^\s*\d+\.\s+/, '');
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        if (nextLine.trim() === '') {
          if (i + 1 < lines.length && /^\s*\d+\.\s+/.test(lines[i + 1])) {
            i++;
            continue;
          }
          break;
        }
        if (/^\s*\d+\.\s+/.test(nextLine)) {
          items.push(currentItem);
          currentItem = nextLine.replace(/^\s*\d+\.\s+/, '');
          i++;
        } else if (/^\s+/.test(nextLine) || !/^(?:[#\d>]|```|\$\$)/.test(nextLine.trim())) {
          currentItem += ' ' + nextLine.trim();
          i++;
        } else {
          break;
        }
      }
      items.push(currentItem);
      blocks.push({ type: 'ol', items });
      continue;
    }

    // 5. Unordered List: lines starting with - or * or +
    if (/^\s*[-*+]\s+/.test(line)) {
      const items: string[] = [];
      let currentItem = line.replace(/^\s*[-*+]\s+/, '');
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        if (nextLine.trim() === '') {
          if (i + 1 < lines.length && /^\s*[-*+]\s+/.test(lines[i + 1])) {
            i++;
            continue;
          }
          break;
        }
        if (/^\s*[-*+]\s+/.test(nextLine)) {
          items.push(currentItem);
          currentItem = nextLine.replace(/^\s*[-*+]\s+/, '');
          i++;
        } else if (/^\s+/.test(nextLine) || !/^(?:[#\d>]|```|\$\$)/.test(nextLine.trim())) {
          currentItem += ' ' + nextLine.trim();
          i++;
        } else {
          break;
        }
      }
      items.push(currentItem);
      blocks.push({ type: 'ul', items });
      continue;
    }

    // 6. Regular Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].match(/^```/) &&
      !lines[i].trim().startsWith('$$') &&
      !lines[i].trim().startsWith('>') &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^\s*[-*+]\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ type: 'p', text: paraLines.join('\n') });
  }

  return blocks;
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const pattern = /(`[^`\n]+`)|(\$[^$\n]+\$)|(\*\*\*[^*]+\*\*\*)|(\*\*[^*]+\*\*)|(\*[^*\n]+\*)|(\[[^\]]+\]\([^)]+\))/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const matchedStr = match[0];
    const key = `${match.index}-${matchedStr.slice(0, 10)}`;

    if (matchedStr.startsWith("`") && matchedStr.endsWith("`")) {
      const code = matchedStr.slice(1, -1);
      nodes.push(
        <code
          key={key}
          className="px-1.5 py-0.5 rounded bg-white/[0.08] text-[#00E5FF] font-mono text-[0.88em] border border-white/10"
        >
          {code}
        </code>
      );
    } else if (matchedStr.startsWith("$") && matchedStr.endsWith("$")) {
      const math = matchedStr.slice(1, -1);
      nodes.push(
        <code
          key={key}
          className="px-1.5 py-0.5 mx-0.5 rounded bg-[#6324FC]/10 text-[#00E5FF] font-mono text-[0.9em] border border-[#6324FC]/30 whitespace-nowrap"
        >
          {math}
        </code>
      );
    } else if (matchedStr.startsWith("***") && matchedStr.endsWith("***")) {
      const inner = matchedStr.slice(3, -3);
      nodes.push(
        <strong key={key} className="font-semibold text-white">
          <em className="italic">{renderInlineMarkdown(inner)}</em>
        </strong>
      );
    } else if (matchedStr.startsWith("**") && matchedStr.endsWith("**")) {
      const inner = matchedStr.slice(2, -2);
      nodes.push(
        <strong key={key} className="font-semibold text-white">
          {renderInlineMarkdown(inner)}
        </strong>
      );
    } else if (matchedStr.startsWith("*") && matchedStr.endsWith("*")) {
      const inner = matchedStr.slice(1, -1);
      nodes.push(
        <em key={key} className="italic text-white/90">
          {renderInlineMarkdown(inner)}
        </em>
      );
    } else if (matchedStr.startsWith("[") && matchedStr.includes("](")) {
      const linkMatch = matchedStr.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const linkUrl = linkMatch[2];
        const isSafeUrl = /^(https?:\/\/|\/)/i.test(linkUrl) && !linkUrl.toLowerCase().startsWith("javascript:");
        if (isSafeUrl) {
          nodes.push(
            <a
              key={key}
              href={linkUrl}
              target={linkUrl.startsWith("http") ? "_blank" : undefined}
              rel={linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[#6324FC] underline hover:text-[#00E5FF] transition-colors"
            >
              {linkText}
            </a>
          );
        } else {
          nodes.push(linkText);
        }
      } else {
        nodes.push(matchedStr);
      }
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderMarkdownBlock(block: MarkdownBlock, index: number): ReactNode {
  switch (block.type) {
    case "code":
      return (
        <div key={index} className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c12] shadow-2xl">
          <div className="flex items-center justify-between px-5 py-2.5 bg-white/[0.03] border-b border-white/10 text-xs font-mono text-white/40">
            <span className="uppercase tracking-widest text-[11px] text-[#6324FC] font-heading font-semibold">
              {block.lang || "code"}
            </span>
            <span className="text-[10px] tracking-wider text-white/30">READ-ONLY</span>
          </div>
          <pre className="p-5 md:p-6 text-sm md:text-base font-mono leading-relaxed text-white/90 overflow-x-auto selection:bg-[#6324FC]">
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "math":
      return (
        <div
          key={index}
          className="my-8 p-6 md:p-8 bg-white/[0.02] border border-[#6324FC]/30 rounded-2xl overflow-x-auto text-center font-mono text-[#00E5FF] text-lg md:text-xl tracking-wide shadow-inner"
        >
          <div className="text-[10px] uppercase font-heading tracking-[0.2em] text-[#6324FC] mb-2 select-none">
            Mathematical Specification
          </div>
          <div className="py-2">{block.formula}</div>
        </div>
      );

    case "blockquote":
      return (
        <blockquote
          key={index}
          className="relative p-8 md:p-10 bg-white/[0.02] border-l-4 border-[#6324FC] rounded-r-2xl my-8 text-white/90 italic space-y-2"
        >
          {block.lines.map((line, lIdx) => (
            <p key={lIdx} className="leading-relaxed">
              {renderInlineMarkdown(line)}
            </p>
          ))}
        </blockquote>
      );

    case "ol":
      return (
        <ol key={index} className="list-decimal pl-6 space-y-3 my-6 text-white/80 marker:text-[#6324FC] marker:font-heading">
          {block.items.map((item, iIdx) => (
            <li key={iIdx} className="pl-2 leading-relaxed">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ol>
      );

    case "ul":
      return (
        <ul key={index} className="list-disc pl-6 space-y-3 my-6 text-white/80 marker:text-[#6324FC]">
          {block.items.map((item, iIdx) => (
            <li key={iIdx} className="pl-2 leading-relaxed">
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );

    case "p":
    default:
      return (
        <p key={index} className="text-white/70 leading-relaxed">
          {renderInlineMarkdown(block.text)}
        </p>
      );
  }
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Back Button */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-3 text-white/50 hover:text-[#6324FC] transition-colors mb-8 font-heading text-[12px] tracking-widest capitalize group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK TO INSIGHTS
            </Link>

            {/* Meta Category & Timing */}
            <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest capitalize mb-6">
              <span className="bg-[#6324FC] text-white px-3 py-1 font-heading text-[11px] tracking-widest">
                {article.category}
              </span>
              <span className="font-heading text-[12px] tracking-widest text-[#00FFA3] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
                {article.badge} {"//"} 2026
              </span>
              <span className="text-white/40 font-heading text-[12px] tracking-widest flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            {/* Split Title */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.9] capitalize mb-8">
              <span>{firstPart}</span> <br className="hidden sm:block" />
              <span className="italic text-[#6324FC]">{secondPart}</span>
            </h1>

            {/* Sub-bar / Excerpt */}
            <p className="font-sans font-light text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              {article.cardExcerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Editorial Content Layout */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Author, Dates, Share, TOC */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-12 lg:sticky lg:top-32 h-fit">
            {/* Meta Metadata Grid */}
            <div className="p-8 bg-white/[0.02] border border-white/5 space-y-6">
              <div className="space-y-1">
                <div className="font-heading text-[12px] text-white/30 tracking-[0.4em] capitalize">Published</div>
                <div className="font-heading text-base tracking-widest text-white flex items-center gap-2 capitalize">
                  <Calendar className="w-4 h-4 text-[#6324FC]" />
                  {article.formattedDate}
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-heading text-[12px] text-white/30 tracking-[0.4em] capitalize">Standard</div>
                <div className="font-heading text-base tracking-widest text-white capitalize">
                  Full Strategic Briefing
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-heading text-[12px] text-white/30 tracking-[0.4em] capitalize">Access Mode</div>
                <div className="font-heading text-base tracking-widest text-[#00FFA3] flex items-center gap-2 capitalize">
                  <span className="w-2 h-2 rounded-full bg-[#00FFA3]" />
                  Unrestricted Research
                </div>
              </div>
            </div>

            {/* Social Share Suite */}
            <div className="space-y-4">
              <div className="font-heading text-[12px] text-white/30 tracking-[0.5em] capitalize">Disseminate</div>
              <div className="grid grid-cols-1 gap-2">
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
                &quot;{renderInlineMarkdown(article.overview)}&quot;
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

                  {/* Render markdown blocks cleanly */}
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/60 font-light">
                    {parseMarkdownBlocks(sec.content).map((block, bIdx) =>
                      renderMarkdownBlock(block, bIdx)
                    )}
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
                        <span className="flex-1 font-light">{renderInlineMarkdown(takeaway)}</span>
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
