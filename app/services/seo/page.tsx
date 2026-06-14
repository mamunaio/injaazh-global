"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function SEOPage() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "340%", label: "AVG TRAFFIC GROWTH" },
    { value: "Top 3", label: "AVERAGE RANKING" },
    { value: "6 Months", label: "TO PAGE ONE" },
    { value: "98%", label: "CLIENT RETENTION" },
  ];

  const whatIsIncluded = [
    {
      title: "Technical SEO Audit",
      desc: "Before we optimize, we diagnose. A full technical audit covering crawlability, indexation, Core Web Vitals, schema markup, site speed, and mobile performance — so we know exactly what's holding your site back.",
      tags: ["Core Web Vitals", "Schema", "Crawl Audit", "Site Speed"],
    },
    {
      title: "On-Page Optimization",
      desc: "Every page optimized to rank. Title tags, meta descriptions, H-tag structure, internal linking, image optimization, and keyword placement — done precisely for Google US, UK, and AU algorithms.",
      tags: ["Title Tags", "Meta", "H-Tags", "Internal Linking"],
    },
    {
      title: "Link Building & Authority",
      desc: "Google ranks authority. We build it. Through strategic outreach, digital PR, and white-hat link acquisition — we grow your domain authority with high-quality backlinks that move the needle and stick.",
      tags: ["Backlinks", "Digital PR", "Outreach", "DA Growth"],
    },
    {
      title: "Local & International SEO",
      desc: "Whether you're targeting a single city or multiple countries, we build geo-targeted SEO strategies that put you in front of the right audience — in the right location — at exactly the right moment.",
      tags: ["Local SEO", "hreflang", "Geo-targeting", "GMB"],
    },
    {
      title: "Keyword & Content Strategy",
      desc: "Rankings start with the right keywords. We research, map, and prioritize keywords with real commercial intent — then build a content strategy around them that compounds organic traffic month over month.",
      tags: ["Keyword Research", "Search Intent", "Content Map"],
    },
  ];

  const whyItWorks = [
    {
      title: "Built for Google US, UK & AU",
      desc: "Google algorithms behave differently across markets. We understand the ranking signals, search intent patterns, and competitive landscape specific to US, UK, and Australian search — not just generic global SEO.",
    },
    {
      title: "Technical First Approach",
      desc: "Most agencies start with content. We start with your technical foundation — because no amount of content will rank a technically broken website. We fix the foundation first, then build on top of it.",
    },
    {
      title: "SEO + Content Combined",
      desc: "SEO without content is a car without fuel. Every Injaazh SEO engagement includes content strategy — because ranking requires both technical excellence and authoritative, search-optimized content.",
    },
  ];

  const process = [
    {
      id: "01",
      title: "Audit & Research",
      desc: "Full technical audit + competitor analysis + keyword research. We map the battlefield before we plan the attack.",
    },
    {
      id: "02",
      title: "Strategy & Roadmap",
      desc: "A clear, prioritized SEO roadmap with timelines, targets, and KPIs agreed upfront — so you always know what we're doing and why.",
    },
    {
      id: "03",
      title: "Implementation",
      desc: "On-page optimization, technical fixes, content creation, and link building — executed systematically, week by week, with full transparency.",
    },
    {
      id: "04",
      title: "Monitor & Scale",
      desc: "Monthly reporting with real data — rankings, traffic, conversions. We continuously refine the strategy based on what's working and double down on what drives results.",
    },
  ];

  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a: "SEO is a long-term investment. Most clients see meaningful ranking improvements within 3–6 months. Significant traffic growth typically follows at the 6–12 month mark — and compounds from there.",
    },
    {
      q: "Do you do SEO for US and UK businesses?",
      a: "Yes. The majority of our SEO clients are based in the US, UK, Australia, and Canada. We build market-specific strategies for each target region.",
    },
    {
      q: "Is your SEO white-hat?",
      a: "100%. We only use white-hat, Google-compliant SEO techniques. No shortcuts, no penalties, no black-hat tactics — ever.",
    },
    {
      q: "Do you guarantee rankings?",
      a: "No agency can ethically guarantee specific rankings — and any that do are misleading you. What we guarantee is a data-driven strategy, full transparency, and measurable progress every single month.",
    },
    {
      q: "What is your pricing?",
      a: "SEO pricing depends on your market, competition level, and goals. We offer transparent USD-based monthly retainers. Send us your website and target keywords — we'll respond with a clear proposal within 24 hours.",
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
    <main className="w-full min-h-screen bg-[#060608] text-white pt-32 pb-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading  text-sm tracking-[0.5em] text-[#6324FC] capitalize ">
              SEARCH ENGINE OPTIMIZATION
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-12">
            SEO Services That Rank You <br />
            on Page One.{" "}
            <span className="italic text-[#6324FC]">And Keep You There.</span>
          </h1>

          <p className="font-sans font-light text-lg text-white/50 leading-relaxed max-w-3xl mb-12 border-l border-white/10 pl-8">
            Most agencies promise rankings. We engineer them.
            <br />
            <br />
            At Injaazh, SEO isn't a checklist — it's a full-stack growth system.
            Technical SEO, content strategy, and authority building — combined
            into one relentless campaign designed to dominate Google search
            results across the US, UK, and Australia.
          </p>

          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
          >
            {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>

            <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
              {/* Flowing background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-xl tracking-widest text-white uppercase text-center">
                GET A FREE SEO AUDIT{" "}
                <ArrowUpRight className="w-5 h-5 text-[#6324FC] group-hover:text-white transition-all duration-500" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-white/5 bg-white/[0.01] py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="py-12 px-6 text-center">
              <div className="font-heading text-5xl md:text-7xl text-white mb-2">
                {stat.value}
              </div>
              <div className="font-heading  text-[10px] tracking-widest text-white/40 capitalize ">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            WHAT'S INCLUDED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whatIsIncluded.map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-[#6324FC]/30 transition-colors duration-500 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-3xl mb-4">{item.title}</h3>
                  <p className="font-sans font-light text-white/50 text-lg leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-1.5 bg-white/[0.05] border border-white/5 font-heading  text-[10px] tracking-widest text-white/40 capitalize rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INJAAZH SEO WORKS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            WHY INJAAZH SEO WORKS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {whyItWorks.map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="font-heading text-2xl text-[#6324FC]">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-white/50 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SEO PROCESS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            OUR SEO PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div
                key={i}
                className="relative p-8 bg-white/[0.02] border border-white/5 rounded-2xl"
              >
                <div className="font-heading  text-xs text-[#6324FC] mb-4">
                  {step.id}
                </div>
                <h3 className="font-heading text-xl mb-3">{step.title}</h3>
                <p className="font-sans font-light text-white/40 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left"
                >
                  <span className="font-sans text-xl text-white hover:text-[#6324FC] transition-colors">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <Minus className="w-5 h-5 text-[#6324FC]" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/40" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="pb-6">
                    <p className="font-sans font-light text-white/50 text-lg leading-relaxed max-w-4xl">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/5 text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8">
            Ready to Dominate Search?
          </h2>
          <p className="font-sans font-light text-xl text-white/50 max-w-2xl mx-auto mb-12">
            Send us your website and target keywords — we'll respond with a
            clear proposal within 24 hours.
          </p>
          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 mx-auto isolate"
          >
            {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>

            <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
              {/* Flowing background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-2xl tracking-widest text-white uppercase text-center">
                START YOUR FREE AUDIT ⚡
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
