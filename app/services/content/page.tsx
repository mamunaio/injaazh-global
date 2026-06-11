"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function ContentPage() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "+120%", label: "AVERAGE ENGAGEMENT INCREASE" },
    { value: "3m 40s", label: "AVERAGE TIME ON PAGE" },
    { value: "100%", label: "SEO OPTIMIZED" },
    { value: "72hrs", label: "AVERAGE TURNAROUND" },
  ];

  const whatIsIncluded = [
    {
      title: "SEO Blog Writing",
      desc: "Long-form, research-backed blog articles written to rank for high-intent keywords. We handle keyword research, content structure, internal linking, and on-page SEO — so every article works as a long-term organic asset.",
      tags: ["Long-form", "Keyword Research", "On-Page SEO", "Internal Linking"],
    },
    {
      title: "Website Copywriting",
      desc: "Your website has 8 seconds to convince a visitor to stay. We write homepage copy, service pages, about pages, and landing pages that communicate your value instantly — and compel action.",
      tags: ["Homepage", "Service Pages", "Landing Pages", "About"],
    },
    {
      title: "Sales Page Copy",
      desc: "Copy that closes. We write high-converting sales pages and product descriptions engineered around buyer psychology — addressing objections, building trust, and driving the reader toward one clear action.",
      tags: ["Sales Pages", "Product Copy", "VSL Scripts", "CTAs"],
    },
    {
      title: "Technical Writing",
      desc: "Complex topics made simple. We write technical documentation, case studies, white papers, and API docs that are clear, accurate, and accessible — for both technical and non-technical audiences.",
      tags: ["Documentation", "Case Studies", "White Papers", "API Docs"],
    },
    {
      title: "Brand Narrative & PR",
      desc: "Your brand story told compellingly. We craft brand narratives, press releases, and thought leadership content that positions you as an authority in your industry — and gets you noticed by the right people.",
      tags: ["Brand Story", "Press Releases", "Thought Leadership", "PR"],
    },
  ];

  const whyItWorks = [
    {
      title: "Written for Western Audiences",
      desc: "We don't just write in English — we write for US, UK, and Australian readers. That means the right tone, the right cultural references, and the right level of formality for your specific market and audience.",
    },
    {
      title: "SEO-Optimized by Default",
      desc: "Every piece of content we write is built around a target keyword strategy. Title tags, meta descriptions, header structure, internal links, and semantic keywords — all handled before the first word is written.",
    },
    {
      title: "Conversion-Focused Always",
      desc: "Content that doesn't convert is just noise. Every article, page, and piece of copy we produce has a clear goal — whether that's a form submission, a call booking, or a purchase. We write with the end action in mind.",
    },
  ];

  const process = [
    {
      id: "01",
      title: "Research & Brief",
      desc: "Keyword research, competitor content analysis, and audience profiling. We understand exactly who we're writing for and what they need to read before making a decision.",
    },
    {
      id: "02",
      title: "Write & Optimize",
      desc: "Expertly written content structured for readability, SEO, and conversion. Every piece reviewed internally before it reaches you.",
    },
    {
      id: "03",
      title: "Review & Deliver",
      desc: "Two rounds of revisions included on every piece. We refine until you're satisfied — no extra charges, no arguments.",
    },
    {
      id: "04",
      title: "Measure & Improve",
      desc: "We track rankings, traffic, and engagement for ongoing content clients — and use that data to continuously improve future content performance.",
    },
  ];

  const faqs = [
    {
      q: "Do you write in American or British English?",
      a: "Both. We match the English variant to your target market — American English for US audiences, British English for UK and Australian audiences.",
    },
    {
      q: "How long does content take to deliver?",
      a: "Standard blog articles are delivered within 72 hours. Larger projects like website copy or white papers are scoped with a clear timeline upfront.",
    },
    {
      q: "Is the content AI-generated?",
      a: "No. All content is written by experienced human writers with expertise in your industry. We use AI tools for research assistance only — never for final output.",
    },
    {
      q: "Do you handle content strategy too?",
      a: "Yes. We offer full content strategy services including keyword mapping, content calendars, topic clustering, and competitor gap analysis — not just individual pieces.",
    },
    {
      q: "Can you write for any industry?",
      a: "Yes. We have experience writing for e-commerce, SaaS, real estate, healthcare, fintech, law firms, hospitality, and more — across US, UK, and Australian markets.",
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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#6324FC]" />
          <span className="font-mono text-sm tracking-[0.5em] text-[#6324FC] uppercase">CONTENT WRITING</span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-12">
          Content Writing Services <br/>
          That Rank on Google <br/>
          <span className="italic text-[#6324FC]">and Convert Readers.</span>
        </h1>

        <p className="font-sans font-light text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl mb-12 border-l border-white/10 pl-8">
          Bad content costs you rankings. Good content costs you nothing compared to what it earns.
          <br/><br/>
          At Injaazh, we write content that does three things simultaneously — ranks on Google, engages your audience, and converts readers into paying clients. Every word is intentional. Every piece is built for Western audiences in the US, UK, and Australia.
        </p>

        <button 
          onClick={() => openModal()}
          className="group relative px-10 py-5 bg-[#6324FC] text-white rounded-full font-heading text-xl tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,36,252,0.4)] active:scale-95"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 group-hover:text-[#6324FC] transition-colors duration-500 flex items-center gap-3">
            GET A FREE PROPOSAL <ArrowUpRight className="w-5 h-5" />
          </span>
        </button>
      </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-white/5 bg-white/[0.01] py-12 md:py-16">
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
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-16">WHAT'S INCLUDED</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
      </div>
      </section>

      {/* WHY INJAAZH CONTENT WORKS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-16">WHY INJAAZH CONTENT WORKS</h2>
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
      </div>
      </section>

      {/* OUR CONTENT PROCESS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-16">OUR CONTENT PROCESS</h2>
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
      </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-16">FREQUENTLY ASKED QUESTIONS</h2>
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
      </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/5 text-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-8">Ready to Rank and Convert?</h2>
        <p className="font-sans font-light text-xl text-white/50 max-w-2xl mx-auto mb-12">
          Send us your brief and we'll respond with a clear proposal within 24 hours.
        </p>
        <button 
          onClick={() => openModal()}
          className="group relative px-12 py-6 bg-[#6324FC] text-white rounded-full font-heading text-2xl tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(99,36,252,0.5)]"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 group-hover:text-[#6324FC] transition-colors duration-500 flex items-center gap-3">
            START YOUR FREE AUDIT ⚡
          </span>
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
