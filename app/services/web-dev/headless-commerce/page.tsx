"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  Zap,
  Shield,
  Globe,
  Layers,
  BarChart,
  CheckCircle2,
  Layout,
  Smartphone,
  Repeat,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeadlessCommercePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const features = [
    {
      title: "API-FIRST RETAIL",
      description:
        "We decouple your storefront from the backend entirely — giving you absolute flexibility over design, content, and user experience, without sacrificing an ounce of performance.",
      icon: Layers,
      color: "#6324FC",
    },
    {
      title: "OMNICHANNEL FLOW",
      description:
        "One backend, infinite frontends. Your product data, inventory, and pricing sync seamlessly across web, mobile, and IoT devices — so your customer experience is consistent everywhere they shop.",
      icon: Smartphone,
      color: "#00E5FF",
    },
    {
      title: "CONVERSION ENGINE",
      description:
        "Sub-second page loads that directly correlate to a 30%+ increase in checkout conversion rates. Every millisecond we recover from your load time is revenue recovered for your business.",
      icon: Repeat,
      color: "#FF2D55",
    },
    {
      title: "ENTERPRISE SCALING",
      description:
        "Handle Black Friday-level traffic spikes, flash sales, and global product launches without downtime, degraded performance, or a single lost sale.",
      icon: BarChart,
      color: "#00FFA3",
    },
  ];

  return (
    <main className="bg-[#060608] min-h-screen relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#6324FC]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">
                COMMERCE DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white uppercase mb-16">
              HEADLESS <br />
              <span className="stroke-text text-transparent italic opacity-40">
                COMMERCE.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We engineer ultra-fast e-commerce ecosystems that eliminate
              friction and maximize ROI. Slow stores lose sales — every 100ms of
              delay costs 1% in revenue. Your store should be as fast as your
              customers&apos; intent.
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
                <span className="relative z-10 font-heading text-xl tracking-widest text-white transition-colors duration-500">
                  REBUILD YOUR STORE
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group"
          >
            <Image
              src="/assets/enterprise_ecommerce_1780213870802.png"
              alt="Headless Commerce Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>

        {/* 2. Key Pillars */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              RETAIL AT THE{" "}
              <span className="italic text-[#6324FC]">SPEED OF LIGHT.</span>
            </h2>
            <p className="font-heading text-[16px] tracking-widest text-white/30 capitalize max-w-xs leading-loose">
              By decoupling the presentation layer from the commerce engine, we
              unlock infinite design possibilities, extreme loading speeds, and
              a storefront that never buckles under traffic.
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
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-xl relative"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <f.icon className="w-24 h-24 text-white" />
                </div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${f.color}15`,
                    border: `1px solid ${f.color}30`,
                  }}
                >
                  <f.icon className="w-8 h-8" style={{ color: f.color }} />
                </div>
                <h3 className="font-heading text-2xl text-white mb-4 capitalize ">
                  {f.title}
                </h3>
                <p className="font-sans font-light text-white/40 text-base leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. The Tech Stack Visualization */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6324FC] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                ELITE RETAIL <br />
                <span className="italic text-[#6324FC]">STACKS.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                We integrate world-class commerce engines with cutting-edge
                Next.js frontends to create high-conversion machines — built on
                the stack that fits your business, not ours.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "SHOPIFY PLUS",
                  "BIGCOMMERCE",
                  "WOOCOMMERCE",
                  "SANITY CMS",
                  "CONTENTFUL",
                  "SWELL",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 bg-white/[0.03] border border-white/5 rounded-xl font-heading text-[10px] tracking-widest text-white/60 uppercase"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-full flex items-center justify-center p-20 shadow-2xl shadow-black">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6324FC]/20 to-transparent blur-3xl rounded-full" />
              <div className="text-center relative z-10">
                <ShoppingCart className="w-20 h-20 text-[#6324FC] mx-auto mb-8 animate-pulse" />
                <div className="font-heading text-6xl text-white tracking-tighter uppercase">
                  API FIRST
                </div>
                <div className="font-heading text-[10px] tracking-[0.5em] text-[#6324FC] uppercase mt-4">
                  UNIFIED COMMERCE
                </div>
              </div>

              {/* Orbits */}
              <div className="absolute inset-0 border border-white/[0.05] rounded-full scale-75 animate-spin-slow" />
              <div className="absolute inset-0 border border-white/[0.03] rounded-full scale-110" />
            </div>
          </div>
        </div>

        {/* 4. Strategic Flow */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            COMMERCE{" "}
            <span className="italic text-[#6324FC]">ARCHITECTURE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "DISCOVERY",
                desc: "We analyze your current store's bottlenecks — page speed, checkout drop-off points, and CMS limitations — then define the ideal technical path for maximum conversion and scalability.",
              },
              {
                step: "02",
                title: "ENGINEERING",
                desc: "We build a high-performance Next.js frontend and connect it to your commerce engine of choice. Every component is optimized for speed, SEO, and conversion from the first line of code.",
              },
              {
                step: "03",
                title: "OPTIMIZATION",
                desc: "We fine-tune checkout flows, image delivery pipelines, and edge caching strategies to squeeze out every last millisecond — ensuring the absolute fastest shopping experience your customers have ever seen.",
              },
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="font-heading text-[8rem] text-white/[0.02] absolute -top-12 -left-4 group-hover:text-[#6324FC]/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pt-12 space-y-6">
                  <h3 className="font-heading text-3xl text-white uppercase">
                    {s.title}
                  </h3>
                  <p className="font-sans font-light text-lg text-white/40 leading-relaxed border-l border-white/10 pl-8 group-hover:border-[#6324FC] transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* [NEW] SECTION A — THE COST OF SLOW */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                THE COST OF <span className="italic text-[#6324FC]">SLOW.</span>
              </h2>
              <p className="font-sans font-light text-lg text-white/40 leading-relaxed mb-12">
                53% of mobile users abandon a site that takes more than 3
                seconds to load. A 1-second delay in page response causes a 7%
                reduction in conversions. Your legacy store is bleeding revenue
                — silently, every day.
              </p>
              <Link
                href="/contact"
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <span className="relative z-10 font-heading text-lg tracking-widest text-white transition-colors duration-500 uppercase">
                    SEE WHAT YOU&apos;RE LOSING
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { val: "53%", label: "USERS ABANDON", sub: "AFTER 3s" },
                { val: "7%", label: "CONVERSION LOSS", sub: "PER 1s DELAY" },
                {
                  val: "$2.6B",
                  label: "ANNUAL REVENUE LOST",
                  sub: "INDUSTRY-WIDE TO SLOW STORES",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl text-center group hover:bg-[#6324FC]/5 transition-colors"
                >
                  <div className="font-heading text-4xl text-white mb-2 group-hover:text-[#6324FC] transition-colors">
                    {stat.val}
                  </div>
                  <div className="font-heading text-[9px] tracking-widest text-[#6324FC] uppercase mb-1">
                    {stat.label}
                  </div>
                  <div className="font-sans text-[10px] text-white/20 uppercase">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* [NEW] SECTION B — HEADLESS VS. TRADITIONAL */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              HEADLESS{" "}
              <span className="italic text-[#6324FC]">VS. TRADITIONAL.</span>
            </h2>
          </div>
          <div className="overflow-x-auto rounded-[2.5rem] border border-white/10 bg-white/[0.01] backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-8 font-heading text-lg text-white uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="p-8 font-heading text-lg text-white/50 uppercase tracking-wider">
                    Traditional WooCommerce
                  </th>
                  <th className="p-8 font-heading text-lg text-[#6324FC] uppercase tracking-wider">
                    Injaazh Headless
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Page Speed",
                    traditional: "3–6s avg",
                    headless: "< 0.4s TTI",
                    highlight: true,
                  },
                  {
                    feature: "Flexibility",
                    traditional: "Theme-limited",
                    headless: "Fully custom",
                    highlight: false,
                  },
                  {
                    feature: "SEO Performance",
                    traditional: "Good",
                    headless: "100/100 Lighthouse",
                    highlight: true,
                  },
                  {
                    feature: "Scalability",
                    traditional: "Server bottlenecks",
                    headless: "Edge-distributed",
                    highlight: false,
                  },
                  {
                    feature: "Checkout Control",
                    traditional: "Plugin-dependent",
                    headless: "Fully engineered",
                    highlight: false,
                  },
                  {
                    feature: "Mobile Performance",
                    traditional: "PageSpeed ~60",
                    headless: "PageSpeed 99+",
                    highlight: true,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-8 font-heading text-base text-white">
                      {row.feature}
                    </td>
                    <td className="p-8 font-sans text-white/40 text-base">
                      {row.traditional}
                    </td>
                    <td
                      className={`p-8 font-sans text-base ${row.highlight ? "text-[#00E5FF] font-semibold" : "text-white"}`}
                    >
                      {row.headless}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* [NEW] SECTION C — COMMERCE CASE STUDY */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                FROM LEGACY{" "}
                <span className="italic text-[#6324FC]">TO DOMINANCE.</span>
              </h2>
              <div className="space-y-8 mb-12">
                <div>
                  <span className="font-heading text-[#6324FC] text-xs uppercase tracking-widest block mb-2">
                    Client & Industry
                  </span>
                  <p className="font-sans text-white text-lg">
                    AKA Moving — Premium E-Commerce & Service Logistics Platform
                  </p>
                </div>
                <div>
                  <span className="font-heading text-red-500/80 text-xs uppercase tracking-widest block mb-2">
                    The Bottleneck
                  </span>
                  <p className="font-sans text-white/50 text-base">
                    Legacy platform with a sluggish 5.2s load time, causing
                    severe drop-offs on mobile checkouts and hindering search
                    visibility.
                  </p>
                </div>
                <div>
                  <span className="font-heading text-[#00E5FF] text-xs uppercase tracking-widest block mb-2">
                    The Solution
                  </span>
                  <p className="font-sans text-white/50 text-base">
                    Engineered a custom headless Next.js storefront integrated
                    via API-first architectures. Implemented dynamic asset
                    optimization and global edge distribution.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div>
                    <div className="font-heading text-3xl text-white">0.3s</div>
                    <div className="font-sans text-xs text-white/40">
                      TTI (Load Speed)
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl text-white">+32%</div>
                    <div className="font-sans text-xs text-white/40">
                      Conversion Lift
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-3xl text-white">+40%</div>
                    <div className="font-sans text-xs text-white/40">
                      Mobile Sales
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/work"
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] hover:scale-105 inline-block isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-4 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <span className="relative z-10 font-heading text-lg tracking-widest text-white transition-colors duration-500 uppercase">
                    READ THE FULL CASE STUDY
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </Link>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
              <Image
                src="/assets/aka_moving_final.webp"
                alt="AKA Moving Headless Storefront Case Study"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* [NEW] SECTION D — COMMERCE FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              COMMERCE <span className="italic text-[#6324FC]">FAQ.</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Will my existing product data and SEO rankings be preserved during migration?",
                a: "Yes. Every Injaazh headless migration includes a full SEO preservation audit — 301 redirects, metadata migration, and structured data transfer — so your rankings are protected throughout the transition.",
              },
              {
                q: "Can headless commerce work with Shopify or WooCommerce?",
                a: "Absolutely. We build headless frontends that connect to Shopify Plus, WooCommerce, BigCommerce, and Swell via their APIs — so you keep your existing commerce engine while replacing the slow frontend with a blazing-fast Next.js layer.",
              },
              {
                q: "How much faster will my store be after going headless?",
                a: "Our clients typically see TTI drop from 3–6 seconds to under 0.4 seconds. PageSpeed scores move from the 40–60 range to 95–100. The exact improvement depends on your current stack, but the gains are always significant.",
              },
              {
                q: "Is headless commerce right for small stores?",
                a: "Headless is ideal for stores doing $50K+ monthly revenue where conversion rate improvements have a measurable financial impact. For smaller stores, we may recommend a highly optimized WooCommerce or Shopify build instead — we'll tell you honestly which approach fits your stage.",
              },
              {
                q: "How long does a headless commerce build take?",
                a: "A standard headless build takes 6–10 weeks from brief to launch. Complex enterprise builds with custom integrations run 10–16 weeks. Every project starts with a detailed technical blueprint so timelines are set and kept.",
              },
            ].map((faq, i) => {
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

        {/* 5. Bottom CTA */}
        <div className="text-center py-16 md:py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
            MAXIMIZE <span className="italic text-[#6324FC]">REVENUE.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Stop losing sales to slow legacy systems. Every day your store runs
            on outdated infrastructure is a day your competitors gain ground.
            Rebuild on the future of commerce.
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
                INITIATE COMMERCE AUDIT
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
