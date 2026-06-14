"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useProjectModal } from "@/components/ProjectModalContext";

export default function MarketingPage() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "4.5x", label: "AVERAGE ROAS" },
    { value: "40%", label: "CPA REDUCTION" },
    { value: "95%", label: "AUDIENCE MATCH RATE" },
    { value: "20+", label: "COUNTRIES SERVED" },
  ];

  const whatIsIncluded = [
    {
      title: "Google Ads (PPC)",
      desc: "Put your business in front of people actively searching for what you offer. We build, manage, and optimize Google Search, Display, and Shopping campaigns with one goal — maximum return on every dollar you spend.",
      tags: ["Search Ads", "Shopping", "Display", "Remarketing"],
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Reach the right audience before they even know they need you. We design scroll-stopping creative and build precision-targeted Meta campaigns that drive awareness, leads, and sales across US, UK, and AU markets.",
      tags: ["Facebook", "Instagram", "Lookalike", "Retargeting"],
    },
    {
      title: "Social Media Marketing",
      desc: "Consistency builds brands. We manage your social presence across LinkedIn, Instagram, Facebook, and X — creating content that builds authority, drives engagement, and keeps your brand top-of-mind for your target audience.",
      tags: ["LinkedIn", "Instagram", "Facebook", "X (Twitter)"],
    },
    {
      title: "Email Marketing",
      desc: "Your most underutilized growth channel. We build automated email sequences, newsletters, and drip campaigns that nurture leads, retain clients, and generate revenue on autopilot — without touching your ad budget.",
      tags: ["Klaviyo", "Mailchimp", "Automation", "Sequences"],
    },
    {
      title: "Conversion Rate Optimization",
      desc: "More traffic means nothing if it doesn't convert. We analyze your funnel, identify drop-off points, and implement data-backed changes that turn more of your existing visitors into paying clients.",
      tags: ["A/B Testing", "Heatmaps", "Landing Pages", "UX"],
    },
  ];

  const whyItWorks = [
    {
      title: "Western Market Specialists",
      desc: "US, UK, and Australian consumers behave differently online. We understand their search intent, buying psychology, and platform preferences — and we build campaigns that speak their language and match their expectations.",
    },
    {
      title: "Data First, Always",
      desc: "Every decision we make is backed by data — not opinions. We track every click, conversion, and dollar spent, and we use that data to continuously improve your campaign performance month over month.",
    },
    {
      title: "Full-Funnel Approach",
      desc: "We don't just run ads — we build complete marketing funnels. From first impression to final purchase, every touchpoint is optimized to move your prospect closer to becoming a paying client.",
    },
  ];

  const process = [
    {
      id: "01",
      title: "Research & Strategy",
      desc: "Competitor analysis, audience research, and platform selection. We identify exactly where your ideal clients spend time online — and build a strategy to reach them there.",
    },
    {
      id: "02",
      title: "Campaign Build",
      desc: "Ad creative, copy, targeting, and landing pages — built and reviewed before a single dollar is spent. No shortcuts, no cutting corners.",
    },
    {
      id: "03",
      title: "Launch & Optimize",
      desc: "We launch, monitor, and optimize continuously — adjusting bids, creative, and targeting based on real performance data from day one.",
    },
    {
      id: "04",
      title: "Scale & Report",
      desc: "Monthly reports with clear metrics — ROAS, CPA, CTR, conversions. When campaigns perform, we scale them. When they don't, we fix them fast.",
    },
  ];

  const faqs = [
    {
      q: "What budget do I need to start?",
      a: "We recommend a minimum ad spend of $1,000/month for Google or Meta campaigns to generate meaningful data and results. Our management fee is separate and transparent from day one.",
    },
    {
      q: "How quickly will I see results?",
      a: "Paid campaigns can generate leads within days of launch. However, optimizing for maximum ROAS typically takes 4–8 weeks as we gather data and refine targeting.",
    },
    {
      q: "Do you create the ad creative too?",
      a: "Yes. Our team handles everything — strategy, copywriting, creative design, campaign setup, and ongoing optimization. You just approve before we launch.",
    },
    {
      q: "Which is better — Google Ads or Meta Ads?",
      a: "It depends on your business. Google Ads captures high-intent buyers actively searching for your service. Meta Ads reaches your audience before they search. Most businesses benefit from both — we'll recommend the right mix for you.",
    },
    {
      q: "Do you offer month-to-month contracts?",
      a: "Yes. We don't believe in locking clients into long contracts. Our results speak for themselves — and that's what keeps clients working with us long-term.",
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
              DIGITAL MARKETING
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-12">
            Digital Marketing Services <br />
            That Turn{" "}
            <span className="italic text-[#6324FC]">Clicks Into Clients.</span>
          </h1>

          <p className="font-sans font-light text-lg text-white/50 leading-relaxed max-w-3xl mb-12 border-l border-white/10 pl-8">
            Anyone can run ads. We run ads that make money.
            <br />
            <br />
            At Injaazh, every campaign is built on data, not guesswork.
            Precision-targeted Google and Meta campaigns engineered for maximum
            ROAS — reaching high-intent audiences across the US, UK, Australia,
            Canada, and the Middle East.
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
                GET A FREE PROPOSAL{" "}
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

      {/* WHY INJAAZH MARKETING WORKS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            WHY INJAAZH MARKETING WORKS
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

      {/* OUR MARKETING PROCESS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">
            OUR MARKETING PROCESS
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
            Ready to Grow Your Business?
          </h2>
          <p className="font-sans font-light text-xl text-white/50 max-w-2xl mx-auto mb-12">
            Send us your brief and we'll respond with a clear proposal within 24
            hours.
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
