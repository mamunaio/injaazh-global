"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  Microscope,
  Brain,
  Eye,
  Filter,
  Percent,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ConversionOptimizationPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Scientific A/B Testing",
      description:
        "Executing data-driven experiments to identify the exact layout and copy that drives maximum user action — not redesigns based on opinion, but decisions backed by statistical significance.",
      icon: Microscope,
      color: "#6324FC",
    },
    {
      title: "Behavioral Psychology",
      description:
        "Leveraging cognitive biases and psychological triggers to eliminate friction and nudge users toward conversion — the science of why people click, hesitate, and buy, applied to every page element.",
      icon: Brain,
      color: "#00E5FF",
    },
    {
      title: "Heatmap Analysis",
      description:
        "Visualizing exactly where your users click, scroll, and hesitate to identify and fix leakage points — because what you think users do and what they actually do are almost never the same thing.",
      icon: Eye,
      color: "#FF2D55",
    },
    {
      title: "Funnel Engineering",
      description:
        "Redesigning checkout and lead-gen flows to ensure the absolute smoothest path from click to cash — every unnecessary step removed, every friction point eliminated, every conversion signal strengthened.",
      icon: Filter,
      color: "#00FFA3",
    },
  ];

  const bullets = [
    {
      label: "Friction Removal",
      desc: "Identifying and eliminating every unnecessary step in your checkout and signup flows — because every additional field, every extra click, and every moment of confusion costs you a conversion. We map the path and clear the obstacles.",
    },
    {
      label: "Social Proofing",
      desc: "Strategically placing authority signals to build instant trust with first-time visitors — reviews, case studies, trust badges, client logos, and real-time social proof positioned at the exact moments doubt enters the user's mind.",
    },
    {
      label: "Urgency Ops",
      desc: "Implementing ethical scarcity and urgency triggers to drive immediate action — limited availability signals, time-sensitive offers, and progress indicators that activate the loss-aversion response without manipulating or deceiving.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Hypothesis",
      desc: "Using quantitative and qualitative data to identify the highest-leverage testing opportunities on your site — heatmaps, session recordings, funnel drop-off data, and user surveys combined to build a prioritized test backlog.",
    },
    {
      step: "02",
      title: "Experiment",
      desc: "Designing and deploying split-tests to validate our theories and find the winning user experience — statistically rigorous A/B and multivariate tests run until we reach 95%+ confidence in the result.",
    },
    {
      step: "03",
      title: "Deployment",
      desc: "Implementing the winners permanently while moving on to the next phase of the continuous growth cycle — because CRO isn't a one-time project, it's a compounding system that improves every month.",
    },
  ];

  const leaks = [
    {
      title: "Landing Pages",
      desc: "Are visitors bouncing before they scroll? Is the hero section answering the right question? Is the CTA specific enough to compel action? Landing page optimization is where most conversion gains are found — and where most teams have the least data.",
    },
    {
      title: "Checkout & Signup Flows",
      desc: "Cart abandonment rates of 70%+ are common — and almost always fixable. We map every step of your checkout or signup flow, identify where users drop off, and redesign the friction points until completion rates improve measurably.",
    },
    {
      title: "Pricing Pages",
      desc: "The pricing page is where purchase intent either converts or evaporates. We optimize value framing, plan comparison structure, CTA language, trust signals, and objection-handling copy — turning hesitation into decisions.",
    },
    {
      title: "Product & Service Pages",
      desc: "Most product pages describe features. Buyers want to understand outcomes. We rewrite and restructure product pages around the specific desires and objections of your target buyer — tested against the original until a winner is confirmed.",
    },
    {
      title: "Mobile Experience",
      desc: "Over 60% of web traffic is mobile — and mobile conversion rates are typically 2–3x lower than desktop. We audit your mobile UX independently and fix the friction points that desktop users never experience.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to see results from CRO?",
      a: "The first round of A/B tests typically takes 3–6 weeks to reach statistical significance — depending on your traffic volume. Higher-traffic sites move faster because tests accumulate data quickly. Lower-traffic sites require longer test windows or multivariate approaches. We set realistic timelines based on your monthly visitor count before we start.",
    },
    {
      q: "Do we need a minimum traffic volume for CRO to work?",
      a: "Yes. A/B testing requires sufficient traffic to reach statistical significance within a reasonable timeframe. We recommend a minimum of 5,000 monthly visitors to a specific page before running split tests. Below that threshold, we focus on qualitative methods — heatmaps, session recordings, user interviews — to make high-confidence improvements without testing.",
    },
    {
      q: "Does CRO require redesigning our entire website?",
      a: "Almost never. The highest-impact CRO changes are usually targeted — a headline rewrite, a CTA repositioning, a checkout field removal, a trust signal addition. We test before we redesign, and we redesign only what the data tells us to. Full site redesigns without data are expensive guesses.",
    },
    {
      q: "How do you measure the success of CRO work?",
      a: "The primary metric is conversion rate — the percentage of visitors who complete the desired action. We also track revenue per visitor, average order value, and cart abandonment rate where relevant. Every test result is documented with statistical significance, confidence level, and estimated annual revenue impact.",
    },
    {
      q: "Can CRO work alongside our existing SEO and paid campaigns?",
      a: "Yes — and it should. CRO improves the ROI of every traffic source simultaneously. Better conversion rates mean lower effective CPA from paid campaigns and higher revenue from organic traffic. We recommend CRO as a parallel investment, not a sequential one.",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 01. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
                OPTIMIZATION DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Conversion <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Mastery.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We don't just drive traffic — we manufacture revenue. Our
              optimization strategies turn your existing visitors into loyal,
              high-value customers — without spending another dollar on ads.
            </p>

            <Link
              href="/contact"
              className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
            >
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>
              <div className="relative w-full h-full px-12 py-6 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500 uppercase">
                  Maximize Your ROI
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group flex items-center justify-center"
          >
            <Image
              src="/assets/scalia_app_final.webp"
              alt="Conversion Lab Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-8 left-8 p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="font-heading text-[9px] text-[#00FFA3] mb-2 capitalize">
                Lifting Conversion By
              </div>
              <div className="font-heading text-5xl text-white">+42%</div>
            </div>
          </motion.div>
        </div>

        {/* 02. The Art Of Revenue Generation */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              The Art Of Revenue <br />
              <span className="italic text-[#6324FC]">Generation.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Optimization is a science. We test, learn, and iterate until your
              user journey is mathematically perfect — every element on every
              page earning its place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-xl relative flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <f.icon className="w-24 h-24 text-white" />
                </div>
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${f.color}15`,
                      border: `1px solid ${f.color}30`,
                    }}
                  >
                    <f.icon className="w-8 h-8" style={{ color: f.color }} />
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 capitalize">
                    {f.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 03. The Science Of Profit */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <Microscope className="w-8 h-8 text-[#6324FC]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Testing Node // 0x7B
                </div>
              </div>

              <div className="flex-1 flex items-center gap-4">
                <div className="flex-1 space-y-4">
                  <div className="font-heading text-[8px] text-white/20 capitalize">
                    Variant A
                  </div>
                  <div className="h-32 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                    <Percent className="w-6 h-6 text-white/10" />
                  </div>
                  <div className="font-heading text-2xl text-white/40">
                    3.2%
                  </div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="font-heading text-xl text-[#6324FC]">
                    VS
                  </span>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="font-heading text-[8px] text-[#00FFA3] capitalize">
                    Variant B
                  </div>
                  <div className="h-32 bg-[#00FFA3]/10 rounded-xl border border-[#00FFA3]/30 flex items-center justify-center relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-[#00FFA3] rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <Zap className="w-12 h-12 text-[#00FFA3]" />
                    </div>
                  </div>
                  <div className="font-heading text-2xl text-[#00FFA3]">
                    7.8%
                  </div>
                </div>
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#6324FC] capitalize tracking-widest">
                <span>Winner Identified</span>
                <span>Statistical Significance: 99%</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                The Science Of <br />
                <span className="italic text-[#00FFA3]">Profit.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                Small changes lead to massive revenue increases. We analyze
                every pixel, every word, and every micro-interaction to remove
                the barriers to your growth — because a 2% lift in conversion
                rate is worth more than doubling your ad spend.
              </p>

              <div className="space-y-8">
                {bullets.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize">
                        Bullet 0{i + 1} — {item.label}
                      </div>
                      <p className="font-sans font-light text-sm text-white/30">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 04. The Optimization Cycle */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            The Optimization <span className="italic text-[#6324FC]">Cycle.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white capitalize">
                    Step {s.step} — {s.title}
                  </h3>
                  <p className="font-sans font-light text-lg text-white/40 leading-relaxed border-l border-white/10 pl-8 group-hover:border-[#6324FC] transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION A — THE CRO OPPORTUNITY */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              THE MATH MOST BRANDS IGNORE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                More Traffic Isn't <br />
                <span className="italic text-[#6324FC]">Always The Answer.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                If your conversion rate is 2% and you double your traffic, you
                double your ad spend — and you still have a 2% conversion rate.
                Fix the conversion rate first and every traffic source you
                already have becomes more profitable immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current State Card */}
              <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all">
                <h3 className="font-heading text-2xl text-white/60 mb-6 border-b border-white/5 pb-4">
                  Current State (example)
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "Monthly visitors", val: "10,000" },
                    { label: "Conversion rate", val: "2%" },
                    { label: "Average order value", val: "$150" },
                    { label: "Monthly revenue", val: "$30,000" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm">
                      <span className="font-sans text-white/40">{item.label}:</span>
                      <span className="font-heading text-white">{item.val}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After CRO Card */}
              <div className="p-8 rounded-3xl bg-white/[0.01] border border-[#6324FC]/30 hover:border-[#6324FC]/50 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6324FC]/10 blur-2xl rounded-full pointer-events-none" />
                <h3 className="font-heading text-2xl text-[#6324FC] mb-6 border-b border-white/5 pb-4">
                  After CRO (example)
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "Monthly visitors", val: "10,000 (unchanged)" },
                    { label: "Conversion rate", val: "4%" },
                    { label: "Average order value", val: "$150" },
                    { label: "Monthly revenue", val: "$60,000" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm">
                      <span className="font-sans text-white/40">{item.label}:</span>
                      <span className={`font-heading ${idx === 1 || idx === 3 ? 'text-[#00FFA3] font-bold' : 'text-white'}`}>{item.val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center max-w-4xl mx-auto">
            <p className="font-sans font-light text-lg text-white/70">
              <strong className="font-heading text-white">The difference:</strong>{" "}
              $30,000 more revenue per month. Same traffic. Same ad spend. Same
              product. Just a higher conversion rate.
              <br />
              <br />
              <strong className="font-heading text-[#6324FC]">Bottom Line:</strong>{" "}
              CRO is the highest-ROI investment in your marketing stack. You're
              already paying for the traffic. We make sure it converts.
            </p>
          </div>
        </div>

        {/* SECTION B — WHERE WE FIND THE LEAKS */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              CONVERSION AUDIT
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Every Page <br />
                <span className="italic text-[#6324FC]">Is A Revenue Decision.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              Revenue doesn't leak from one place — it leaks from everywhere.
              Here's where we look first.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leaks.map((leak, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors flex gap-6"
              >
                <div className="font-heading text-[#6324FC] text-2xl">
                  0{idx + 1}
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl text-white">
                    {leak.title}
                  </h3>
                  <p className="font-sans font-light text-white/40 text-sm leading-relaxed">
                    {leak.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION C — CRO FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              CRO <span className="italic text-[#6324FC]">FAQ.</span>
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

        {/* 05. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            Stop Leaking <span className="italic text-[#6324FC]">Revenue.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Your traffic is expensive. Don't waste it. Let's build a conversion
            engine that extracts maximum value from every single visitor.
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
                START CONVERSION AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
