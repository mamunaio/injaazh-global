"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";
import Counter from "@/components/Counter";

export default function ContentClient() {
  const { openModal } = useProjectModal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const stats = [
    { value: "+120%", label: "Average Engagement Increase" },
    { value: "3m 40s", label: "Average Time On Page" },
    { value: "100%", label: "SEO Optimized" },
    { value: "72hrs", label: "Average Turnaround" },
  ];

  const whatIsIncluded = [
    {
      title: "SEO Blog Writing",
      desc: "Long-form, research-backed blog articles written to rank for high-intent keywords. We handle keyword research, content structure, internal linking, and on-page SEO — so every article works as a long-term organic asset that compounds in value over time.",
      tags: ["LONG-FORM", "KEYWORD RESEARCH", "ON-PAGE SEO", "INTERNAL LINKING"],
    },
    {
      title: "Website Copywriting",
      desc: "Your website has 8 seconds to convince a visitor to stay. We write homepage copy, service pages, about pages, and landing pages that communicate your value instantly — and compel the reader toward one clear action.",
      tags: ["HOMEPAGE", "SERVICE PAGES", "LANDING PAGES", "ABOUT"],
    },
    {
      title: "Sales Page Copy",
      desc: "Copy that closes. We write high-converting sales pages and product descriptions engineered around buyer psychology — addressing objections, building trust, and driving the reader toward one clear action without friction.",
      tags: ["SALES PAGES", "PRODUCT COPY", "VSL SCRIPTS", "CTAs"],
    },
    {
      title: "Technical Writing",
      desc: "Complex topics made simple. We write technical documentation, case studies, white papers, and API docs that are clear, accurate, and accessible — for both technical and non-technical audiences who need to make decisions.",
      tags: ["DOCUMENTATION", "CASE STUDIES", "WHITE PAPERS", "API DOCS"],
    },
    {
      title: "Brand Narrative & PR",
      desc: "Your brand story told compellingly. We craft brand narratives, press releases, and thought leadership content that positions you as the authority in your industry — and gets you noticed by the right people, in the right publications.",
      tags: ["BRAND STORY", "PRESS RELEASES", "THOUGHT LEADERSHIP", "PR"],
    },
  ];

  const whyItWorks = [
    {
      title: "Written For Western Audiences",
      desc: "We don't just write in English — we write for US, UK, and Australian readers. That means the right tone, the right cultural references, and the right level of formality for your specific market and audience. Content that reads native — because it is.",
    },
    {
      title: "SEO-Optimized By Default",
      desc: "Every piece of content we write is built around a target keyword strategy. Title tags, meta descriptions, header structure, internal links, and semantic keywords — all handled before the first word is written. SEO isn't an afterthought; it's the foundation.",
    },
    {
      title: "Conversion-Focused Always",
      desc: "Content that doesn't convert is just noise. Every article, page, and piece of copy we produce has a clear goal — whether that's a form submission, a call booking, or a purchase. We write with the end action in mind, always.",
    },
  ];

  const processSteps = [
    {
      id: "01",
      title: "Research & Brief",
      desc: "Keyword research, competitor content analysis, and audience profiling. We understand exactly who we're writing for, what they need to read before making a decision, and where your content currently falls short.",
    },
    {
      id: "02",
      title: "Write & Optimize",
      desc: "Expertly written content structured for readability, SEO, and conversion. Every piece is reviewed internally before it reaches you — for accuracy, tone, keyword placement, and flow.",
    },
    {
      id: "03",
      title: "Review & Deliver",
      desc: "Two rounds of revisions included on every piece. We refine until you're satisfied — no extra charges, no arguments. Your brief is our contract.",
    },
    {
      id: "04",
      title: "Measure & Improve",
      desc: "We track rankings, traffic, and engagement for ongoing content clients — and use that data to continuously improve future content performance. Every month, we know more about what works for your audience than the month before.",
    },
  ];

  const compareContent = [
    {
      title: "Generic Content Mills",
      items: [
        "No keyword strategy — just stuffing",
        "Written to fill word count, not to rank",
        "No understanding of audience search intent",
        "Delivered fast, forgotten faster",
        "Zero conversion architecture built in",
      ],
      isPositive: false,
    },
    {
      title: "Injaazh Content",
      items: [
        "Every piece built around search intent",
        "Keyword strategy mapped before writing starts",
        "Written for your specific Western audience",
        "Structured to hold attention and drive action",
        "Tracked, measured, and improved over time",
      ],
      isPositive: true,
    },
  ];

  const numbersStats = [
    { value: "500+", label: "Pieces Published" },
    { value: "25+", label: "Industries Covered" },
    { value: "100%", label: "SEO-Optimized On Delivery" },
    { value: "4.9/5", label: "Client Satisfaction" },
  ];

  const checklistItems = [
    "You're launching a new website and need copy that converts from day one",
    "Your blog exists but doesn't rank — you're publishing but getting zero organic traffic",
    "You're targeting US, UK, or Australian markets and need content that reads native",
    "You're scaling a SaaS or service business and need a consistent content engine",
    "Your sales team needs better collateral — case studies, white papers, pitch decks",
    "You've tried cheap content before and paid the price in rankings and credibility",
  ];

  const faqs = [
    {
      q: "Do You Write In American Or British English?",
      a: "Both. We match the English variant to your target market — American English for US audiences, British English for UK and Australian clients. If you serve multiple markets, we can produce market-specific versions of the same content.",
    },
    {
      q: "How Long Does Content Take To Deliver?",
      a: "Standard blog articles and web copy are delivered within 72 hours of brief approval. Longer pieces — white papers, case studies, technical documentation — are scoped individually with a clear delivery timeline agreed upfront.",
    },
    {
      q: "Is The Content AI-Generated?",
      a: "No. Every piece is written by human experts with subject-matter knowledge in your industry. We don't use AI to generate content we deliver to clients. We may use AI tools for research and SEO analysis — but every word that reaches you is written and edited by a human.",
    },
    {
      q: "Do You Handle Content Strategy Too?",
      a: "Yes. If you need more than just writing — a full content calendar, topical authority map, keyword cluster strategy, or content audit — we offer content strategy as a standalone service or as part of an ongoing retainer. We'll tell you what to write, when to publish it, and why.",
    },
    {
      q: "Can You Write For Any Industry?",
      a: "We have deep experience in SaaS, e-commerce, logistics, legal, finance, real estate, and technology. For niche industries, we conduct thorough research and work with your internal subject-matter experts to ensure accuracy before a word is written.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 01. Hero Section */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-sm tracking-[0.5em] capitalize">
              CONTENT WRITING
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16 max-w-4xl">
            Content Writing Services <br />
            That Rank On Google <br />
            <span className="stroke-text text-transparent italic opacity-40">
              And Convert Readers.
            </span>
          </h1>

          <p className="font-sans font-light text-lg md:text-xl text-white/50 max-w-3xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-8">
            Bad content costs you rankings. Good content costs you nothing
            compared to what it earns.
          </p>

          <p className="font-sans font-light text-lg text-white/45 max-w-3xl leading-relaxed pl-8 mb-16">
            At Injaazh, we write content that does three things simultaneously
            — ranks on Google, engages your audience, and converts readers into
            paying clients. Every word is intentional. Every piece is built for
            Western audiences in the US, UK, and Australia.
          </p>

          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                GET A FREE PROPOSAL
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>

        {/* Stats Strip */}
        <div className="border-b border-white/5 bg-white/[0.01] py-12 md:py-16 backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="py-6 px-6 text-center hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-10 bg-[#6324FC]/5 blur-2xl rounded-full" />
                </div>
                <div className="font-heading text-5xl md:text-6xl mb-2 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent group-hover:from-[#6324FC] group-hover:to-[#d946ef] transition-all duration-700 uppercase">
                  <Counter value={stat.value} />
                </div>
                <div className="font-heading text-[10px] tracking-widest text-white/40 group-hover:text-white/70 transition-colors duration-500 capitalize">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 02. What's Included */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whatIsIncluded.map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-3xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <h3 className="font-heading text-3xl text-white mb-4 group-hover:text-[#6324FC] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-white/50 text-lg leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-1.5 bg-white/[0.05] border border-white/5 font-heading text-[10px] tracking-widest text-white/40 capitalize rounded-full group-hover:text-white group-hover:border-[#6324FC]/30 transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION A — CONTENT THAT RANKS VS. CONTENT THAT DOESN'T */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              WHY MOST CONTENT FAILS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Content That Ranks <br />
                <span className="italic text-[#6324FC]">Vs. Content That Doesn't.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              The difference isn't just quality — it's strategy. Cheap content
              costs more in the long run when it fails to rank, fails to convert,
              and has to be rewritten entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {compareContent.map((table, i) => (
              <div
                key={i}
                className={`p-10 rounded-[2.5rem] bg-white/[0.01] border transition-all duration-500 relative overflow-hidden ${
                  table.isPositive
                    ? "border-[#6324FC]/30 hover:border-[#6324FC]/50"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {table.isPositive && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#6324FC]/10 blur-3xl rounded-full pointer-events-none" />
                )}
                <h3
                  className={`font-heading text-3xl mb-8 ${
                    table.isPositive ? "text-[#6324FC]" : "text-white/60"
                  }`}
                >
                  {table.title}
                </h3>
                <ul className="space-y-6">
                  {table.items.map((item, j) => (
                    <li key={j} className="flex gap-4 items-start">
                      {table.isPositive ? (
                        <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-1" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                      )}
                      <span className="font-sans font-light text-white/70 text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B — CONTENT BY THE NUMBERS */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              BY THE NUMBERS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Content That <br />
                <span className="italic text-[#6324FC]">Compounds.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              From 500-word product descriptions to 5,000-word pillar pages —
              we've produced content at every scale, for every format, across
              industries from SaaS to logistics to real estate. Every piece
              tracked. Every result measured.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {numbersStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 text-center hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="font-heading text-5xl text-white mb-2 group-hover:text-[#6324FC] transition-colors duration-500">
                  <Counter value={stat.value} />
                </div>
                <div className="font-heading text-[10px] tracking-widest text-[#00E5FF] capitalize group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03. Why Injaazh Content Works */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            Why Injaazh Content Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {whyItWorks.map((item, i) => (
              <div key={i} className="space-y-4 border-l border-white/5 pl-8 hover:border-[#6324FC] transition-all duration-500 relative group overflow-hidden">
                <div className="absolute -top-10 -right-5 font-heading text-[10rem] text-white/[0.02] group-hover:text-[#6324FC]/5 transition-colors duration-700 pointer-events-none">
                  0{i + 1}
                </div>
                <h3 className="font-heading text-2xl text-[#6324FC] group-hover:text-white transition-colors duration-500 relative z-10">
                  Reason 0{i + 1} — {item.title}
                </h3>
                <p className="font-sans font-light text-white/50 text-lg leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 04. Our Content Process */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
            Our Content Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative p-8 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl group hover:border-[#6324FC]/20 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500"
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-[#6324FC]/20 to-[#6324FC]/5 hidden lg:block z-0" />
                )}
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  0{step.id}
                </div>
                <div className="relative z-10 pt-8">
                  <div className="font-heading text-xs text-[#6324FC] mb-4 group-hover:text-white transition-colors duration-500">
                    Step {step.id}
                  </div>
                  <h3 className="font-heading text-xl text-white mb-3 group-hover:text-[#6324FC] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-[#6324FC] transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION C — WHO THIS IS FOR */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              WHO THIS IS FOR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Who This <br />
                <span className="italic text-[#6324FC]">Is For.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                We work best with businesses that understand content is a
                long-term investment — not a one-time purchase. If any of these
                describe you, we should talk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-500 group flex gap-4"
                >
                  <Sparkles className="w-5 h-5 text-[#6324FC] shrink-0 mt-0.5" />
                  <p className="font-sans font-light text-white/60 group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => openModal()}
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                  THIS IS ME — GET A PROPOSAL
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </button>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Frequently Asked <span className="italic text-[#6324FC]">Questions.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => {
              const isOpen = activeIndex === i;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
                  onClick={() => toggleFaq(i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-xl text-white">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-white/50" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 16 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 06. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Ready To Rank And Convert?
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Send us your brief and we'll respond with a clear content proposal
            within 24 hours — including recommended content types, estimated
            timeline, and pricing scoped to your goals.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 mx-auto isolate"
          >
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            <div className="relative w-full h-full md:px-16 px-8 py-4 md:py-8 text-xl md:text-2xl rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-6 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative z-10 font-heading text-lg md:text-2xl tracking-widest text-white uppercase text-center flex items-center gap-6">
                START YOUR FREE AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
