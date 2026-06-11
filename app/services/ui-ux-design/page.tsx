"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function UIUXPage() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "99/100", label: "DESIGN SCORE" },
    { value: "+62%", label: "CONVERSION LIFT" },
    { value: "Awwwards", label: "DESIGN STANDARD" },
    { value: "72hrs", label: "PROTOTYPE DELIVERY" },
  ];

  const whatIsIncluded = [
    {
      title: "Brand Identity & Logo Design",
      desc: "Your brand is your first impression — and first impressions are permanent. We create complete brand identities including logo, color system, typography, and brand guidelines that communicate authority and trust at a glance.",
      tags: ["Logo", "Color System", "Typography", "Brand Guidelines"],
    },
    {
      title: "UI/UX Design Systems",
      desc: "Consistent, scalable design that works across every screen and every touchpoint. We build comprehensive design systems — components, patterns, and guidelines that make your product look premium and function flawlessly.",
      tags: ["Figma", "Component Library", "Design Tokens", "Style Guide"],
    },
    {
      title: "Motion Graphics & Animation",
      desc: "Static is forgettable. Motion is memorable. We design scroll animations, micro-interactions, and motion graphics that bring your brand to life — creating experiences visitors remember and return to.",
      tags: ["GSAP", "Framer Motion", "Lottie", "After Effects"],
    },
  ];

  const whyItWorks = [
    {
      title: "Awwwards-Level Aesthetics",
      desc: "We design to the standard of the world's most recognized digital design awards — because your brand deserves to look like it belongs among the best, not the average.",
    },
    {
      title: "Conversion Psychology Built In",
      desc: "Beautiful design that doesn't convert is art — not business. Every layout, color choice, and CTA placement is informed by conversion psychology and Western user behavior research.",
    },
    {
      title: "Design + Development Aligned",
      desc: "We design and build. That means no translation loss between design and development — what you approve in Figma is exactly what gets built in code. Pixel-perfect, every time.",
    },
  ];

  const process = [
    {
      id: "01",
      title: "Discovery & Research",
      desc: "User research, competitor analysis, and brand audit. We understand your audience before we design a single element.",
    },
    {
      id: "02",
      title: "Wireframe & Prototype",
      desc: "Low-fidelity wireframes to high-fidelity interactive prototypes — reviewed and approved before full design begins.",
    },
    {
      id: "03",
      title: "Design & Refine",
      desc: "Full visual design with two rounds of revisions. We refine until every detail is exactly right.",
    },
    {
      id: "04",
      title: "Handoff & Build",
      desc: "Complete Figma handoff with design tokens, component specs, and developer notes — or we build it ourselves for pixel-perfect results.",
    },
  ];

  const faqs = [
    {
      q: "Do you design in Figma?",
      a: "Yes. All UI/UX design work is done in Figma with full handoff files, component libraries, and developer-ready specifications.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Absolutely. We conduct a full UX audit of your existing site before redesigning — so every decision is backed by data, not just aesthetics.",
    },
    {
      q: "Do you handle both design and development?",
      a: "Yes. As a full-service digital agency, we design and build — ensuring zero gap between what's designed and what gets coded.",
    },
    {
      q: "How long does a UI/UX project take?",
      a: "Brand identity projects typically take 1–2 weeks. Full website UI/UX design takes 2–4 weeks depending on scope and complexity.",
    },
    {
      q: "What industries do you design for?",
      a: "We design for e-commerce, SaaS, fintech, real estate, healthcare, hospitality, and more — across US, UK, and Australian markets.",
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
          <span className="font-heading  text-sm tracking-[0.5em] text-[#6324FC] capitalize ">UI/UX DESIGN</span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-12">
          UI/UX Design Services <br/>
          That Look World-Class <br/>
          <span className="italic text-[#6324FC]">and Convert Like Crazy.</span>
        </h1>

        <p className="font-sans font-light text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl mb-12 border-l border-white/10 pl-8">
          Design is not decoration — it's your most powerful sales tool.
          <br/><br/>
          At Injaazh, we design digital experiences that stop the scroll, build instant trust, and guide users toward one outcome — taking action. Every pixel is intentional. Every interaction is engineered.
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
              <div className="font-heading  text-[10px] tracking-widest text-white/40 capitalize ">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">WHAT'S INCLUDED</h2>
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
                  <span key={j} className="px-4 py-1.5 bg-white/[0.05] border border-white/5 font-heading  text-[10px] tracking-widest text-white/40 capitalize rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* WHY INJAAZH DESIGN WORKS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">WHY INJAAZH DESIGN WORKS</h2>
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

      {/* OUR DESIGN PROCESS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">OUR DESIGN PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <div key={i} className="relative p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="font-heading  text-xs text-[#6324FC] mb-4">{step.id}</div>
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
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">FREQUENTLY ASKED QUESTIONS</h2>
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
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8">Ready to Dominate Design?</h2>
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
