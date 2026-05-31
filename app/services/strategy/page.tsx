"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function StrategyPage() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "+25%", label: "AVERAGE MARKET SHARE GROWTH" },
    { value: "100%", label: "STRATEGY ALIGNMENT" },
    { value: "High", label: "BRAND EQUITY" },
    { value: "95%", label: "MARKET FIT SCORE" },
  ];

  const whatIsIncluded = [
    {
      title: "Digital Transformation",
      desc: "The gap between where you are and where you need to be — bridged. We audit your entire digital presence, identify inefficiencies, and build a transformation roadmap that modernizes your business from the inside out.",
      tags: ["Digital Audit", "Roadmapping", "Process Optimization", "Tech Stack"],
    },
    {
      title: "Business Intelligence & Analytics",
      desc: "You can't improve what you don't measure. We implement analytics frameworks, build custom dashboards, and translate raw data into clear, actionable insights — so every business decision is backed by real numbers, not gut feeling.",
      tags: ["Google Analytics 4", "Data Studio", "KPI Dashboards", "Reporting"],
    },
    {
      title: "UX Audit & Optimization",
      desc: "Your website might be losing clients right now — and you don't know it. We conduct comprehensive UX audits using heatmaps, session recordings, and conversion data to identify exactly where visitors drop off and why — then fix it.",
      tags: ["Heatmaps", "Session Recording", "A/B Testing", "CRO"],
    },
  ];

  const whyItWorks = [
    {
      title: "Full-Service Perspective",
      desc: "Most strategy consultants hand you a report and disappear. At Injaazh, strategy and execution live under the same roof — so our recommendations are always grounded in what can actually be built, ranked, and marketed right now.",
    },
    {
      title: "Western Market Intelligence",
      desc: "We understand the competitive landscape of US, UK, and Australian digital markets — including search behavior, platform preferences, buying psychology, and industry benchmarks specific to each region.",
    },
    {
      title: "KPIs Agreed Upfront",
      desc: "Every strategy engagement begins with clearly defined success metrics. We agree on KPIs before work starts — so you always know what success looks like and how we're tracking toward it.",
    },
  ];

  const process = [
    {
      id: "01",
      title: "Discovery & Audit",
      desc: "A deep dive into your business, your market, your competitors, and your current digital performance. We ask the hard questions — because the right strategy starts with the right diagnosis.",
    },
    {
      id: "02",
      title: "Insight & Opportunity Mapping",
      desc: "We translate audit findings into clear opportunities — ranked by impact, effort, and timeline. You see exactly where the biggest gains are and in what order to pursue them.",
    },
    {
      id: "03",
      title: "Roadmap & Planning",
      desc: "A prioritized, actionable digital roadmap with clear milestones, owners, timelines, and KPIs. Not a 100-page PDF you'll never read — a practical plan you'll actually execute.",
    },
    {
      id: "04",
      title: "Execute & Measure",
      desc: "Strategy without execution is just theory. We implement the roadmap across web, SEO, marketing, and content — measuring progress at every step and adapting as the market evolves.",
    },
  ];

  const faqs = [
    {
      q: "What is a digital strategy engagement?",
      a: "It's a structured process where we analyze your business, market, and digital presence — then build a clear, prioritized roadmap for growth covering web, SEO, marketing, content, and analytics.",
    },
    {
      q: "How long does a strategy project take?",
      a: "Initial strategy audits and roadmaps typically take 2–3 weeks. Ongoing strategy retainers are available monthly for continuous optimization and execution.",
    },
    {
      q: "Do you implement the strategy too?",
      a: "Yes. As a full-service digital agency, we both define and execute the strategy — across web development, SEO, marketing, and content. One team. One vision.",
    },
    {
      q: "Who is digital strategy for?",
      a: "Any business that wants to grow online but isn't sure where to focus first. Especially useful for businesses entering new markets like the US, UK, or Australia for the first time.",
    },
    {
      q: "How much does a strategy engagement cost?",
      a: "Strategy pricing depends on scope and business size. We offer transparent, USD-based pricing. Book a free 30-minute strategy call and we'll outline the right engagement for your goals.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <main className="w-full min-h-screen bg-[#060608] text-white pt-32 pb-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#6324FC]" />
          <span className="font-mono text-sm tracking-[0.5em] text-[#6324FC] uppercase">DIGITAL STRATEGY</span>
        </div>
        
        <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter uppercase mb-12">
          Digital Strategy Services <br/>
          That Turn Vision Into <br/>
          <span className="italic text-[#6324FC]">Market Domination.</span>
        </h1>

        <p className="font-sans font-light text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl mb-12 border-l border-white/10 pl-8">
          Tactics without strategy is just expensive experimentation.
          <br/><br/>
          At Injaazh, strategy comes before everything else. We analyze your market, your competitors, and your customers — then build a clear, data-backed roadmap that aligns every digital decision with one goal: sustainable, scalable growth across the US, UK, and Australia.
        </p>

        <button 
          onClick={() => openModal()}
          className="group relative px-10 py-5 bg-[#6324FC] text-white rounded-full font-heading text-xl tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,36,252,0.4)] active:scale-95"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 group-hover:text-[#6324FC] transition-colors duration-500 flex items-center gap-3">
            BOOK A FREE STRATEGY CALL <ArrowUpRight className="w-5 h-5" />
          </span>
        </button>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-white/5 bg-white/[0.01] mb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="py-12 px-6 text-center">
              <div className="font-heading text-5xl md:text-7xl text-white mb-2">{stat.value}</div>
              <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
        <h2 className="font-heading text-4xl md:text-6xl uppercase mb-16">WHAT'S INCLUDED</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {whatIsIncluded.map((item, i) => (
            <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-[#6324FC]/30 transition-colors duration-500 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-3xl mb-4">{item.title}</h3>
                <p className="font-sans font-light text-white/50 text-lg leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-1.5 bg-white/[0.05] border border-white/5 font-mono text-[10px] tracking-widest text-white/40 uppercase rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY INJAAZH STRATEGY WORKS */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
        <h2 className="font-heading text-4xl md:text-6xl uppercase mb-16">WHY INJAAZH STRATEGY WORKS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {whyItWorks.map((item, i) => (
            <div key={i} className="space-y-4">
              <h3 className="font-heading text-2xl text-[#6324FC]">{item.title}</h3>
              <p className="font-sans font-light text-white/50 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STRATEGY PROCESS */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
        <h2 className="font-heading text-4xl md:text-6xl uppercase mb-16">OUR STRATEGY PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <div key={i} className="relative p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="font-mono text-xs text-[#6324FC] mb-4">{step.id}</div>
              <h3 className="font-heading text-xl mb-3">{step.title}</h3>
              <p className="font-sans font-light text-white/40 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-32">
        <h2 className="font-heading text-4xl md:text-6xl uppercase mb-16">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <span className="font-sans text-xl text-white hover:text-[#6324FC] transition-colors">{faq.q}</span>
                {openFaq === i ? <Minus className="w-5 h-5 text-[#6324FC]" /> : <Plus className="w-5 h-5 text-white/40" />}
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
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto text-center py-32 border-t border-white/5">
        <h2 className="font-heading text-5xl md:text-7xl mb-8 uppercase">Ready to Dominate Your Market?</h2>
        <p className="font-sans font-light text-xl text-white/50 max-w-2xl mx-auto mb-12">
          Book a free 30-minute strategy call and we'll outline the right engagement for your goals.
        </p>
        <button 
          onClick={() => openModal()}
          className="group relative px-12 py-6 bg-[#6324FC] text-white rounded-full font-heading text-2xl tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(99,36,252,0.5)]"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 group-hover:text-[#6324FC] transition-colors duration-500 flex items-center gap-3">
            BOOK A FREE STRATEGY CALL ⚡
          </span>
        </button>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
