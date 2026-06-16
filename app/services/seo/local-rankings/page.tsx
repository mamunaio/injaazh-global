"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Sparkles,
  MapPin,
  Navigation,
  Building2,
  Star,
  Map,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LocalRankingsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "GMB Dominance",
      description:
        "Optimizing your Google Business Profile to ensure you rank #1 in the local map pack for high-intent searches — complete profile buildout, category strategy, photo optimization, and weekly post cadence.",
      icon: MapPin,
      color: "#6324FC",
    },
    {
      title: "Geo-Targeted Content",
      description:
        "Crafting location-specific landing pages that resonate with local audiences and satisfy geo-intent — so Google understands exactly which city, suburb, or region you serve and ranks you accordingly.",
      icon: Navigation,
      color: "#00E5FF",
    },
    {
      title: "Citation Engineering",
      description:
        "Building consistent and authoritative local citations across the web to solidify your business authority — NAP data synchronized across every major directory, data aggregator, and local map engine.",
      icon: Building2,
      color: "#FF2D55",
    },
    {
      title: "Reputation Velocity",
      description:
        "Implementing automated systems to gather and manage high-quality local reviews that build trust — because Google ranks businesses customers trust, and customers choose businesses Google shows first.",
      icon: Star,
      color: "#00FFA3",
    },
  ];

  const bullets = [
    {
      label: "Mobile First",
      desc: "Optimizing for the \"Near Me\" generation who search on the move. Over 76% of local searches happen on mobile — and over half result in a visit within 24 hours. Your listing needs to convert before they click elsewhere.",
    },
    {
      label: "Voice Search",
      desc: "Structuring content for Siri, Alexa, and Google Assistant local queries — because voice searches are longer, more conversational, and carry extremely high purchase intent. We write for how people actually speak.",
    },
    {
      label: "High Conversion",
      desc: "Driving direct actions: calls, direction requests, and website visits — the three signals Google uses to determine whether your listing deserves to rank higher. We optimize for actions, not just impressions.",
    },
  ];

  const blueprintSteps = [
    {
      step: "01",
      title: "Map Audit",
      desc: "Analyzing your current map presence and identifying every inconsistency in your NAP (Name, Address, Phone) data — across your GMB profile, website, and every directory where your business appears. Inconsistent data is an invisible ranking penalty. We find it and fix it.",
    },
    {
      step: "02",
      title: "Citation Blast",
      desc: "Synchronizing your business data across premium directories and local map engines for maximum authority — Google Business Profile, Apple Maps, Bing Places, Yelp, Foursquare, and 50+ niche and regional directories relevant to your industry and location.",
    },
    {
      step: "03",
      title: "Review Loop",
      desc: "Implementing a continuous feedback system that boosts your reputation and ranking prominence — automated review request sequences, response templates, and a negative review management protocol so your star rating climbs and stays there.",
    },
  ];

  const checklistItems = [
    "You serve customers in a specific city, region, or set of locations",
    "Your Google Business Profile is incomplete, unverified, or rarely updated",
    "You're not appearing in the local map pack for your core service keywords",
    "Your business has inconsistent NAP data across online directories",
    "Competitors with fewer reviews are ranking above you locally",
    "You're getting website traffic but not enough calls, visits, or direction requests",
  ];

  const industries = [
    {
      title: "Professional Services",
      subtitle: "Law firms, accountants, financial advisors, consultancies.",
      desc: "High-value clients who research before they call — we build the authority that earns the call.",
    },
    {
      title: "Health & Medical",
      subtitle: "Dental clinics, physiotherapists, optometrists, GPs.",
      desc: "Trust is the conversion trigger — we build it through reviews, schema markup, and GMB optimization that signals credibility before the first appointment.",
    },
    {
      title: "Home Services",
      subtitle: "Plumbers, electricians, HVAC, cleaners, landscapers.",
      desc: "Speed and proximity win here — we put you in the map pack for every \"near me\" search in your service area.",
    },
    {
      title: "Retail & Hospitality",
      subtitle: "Restaurants, cafés, boutiques, gyms.",
      desc: "Foot traffic is the metric — we optimize for discovery, directions, and the \"open now\" filter that drives same-day visits.",
    },
    {
      title: "E-commerce with Physical Presence",
      subtitle: "Brands with both online and physical locations.",
      desc: "Brands with both online and physical locations need both strategies aligned. We build local authority that feeds national visibility and vice versa.",
    },
  ];

  const faqs = [
    {
      q: "How long does local SEO take to show results?",
      a: "Local SEO moves faster than general SEO. Most businesses see meaningful map pack movement within 60–90 days — particularly for GMB optimization and citation building. Full local dominance for competitive markets typically takes 4–6 months of consistent work.",
    },
    {
      q: "Do I need a physical address to rank locally?",
      a: "Yes — Google requires a verified physical address for map pack rankings. If you operate a service-area business without a public-facing address (like a mobile plumber or home cleaner), we configure your GMB as a Service Area Business, which allows you to rank in the areas you serve without displaying your address publicly.",
    },
    {
      q: "My business has multiple locations. Can you handle all of them?",
      a: "Yes. Multi-location local SEO is a defined specialty. Each location gets its own GMB profile, location-specific landing page, and independent citation profile — managed under a unified strategy so every location ranks in its own market.",
    },
    {
      q: "How important are Google reviews for local rankings?",
      a: "Extremely. Review count, review velocity (how frequently you receive them), and average star rating are among the top local ranking factors. A business with 50 reviews and a 4.8 rating will almost always outrank a business with 10 reviews and a 5.0 — because consistency signals trust to Google and customers equally.",
    },
    {
      q: "Can you help with negative reviews or reputation damage?",
      a: "Yes. We implement a proactive reputation management system that increases the volume of positive reviews — which naturally dilutes negative ones over time. We also provide response templates and guidance for handling negative feedback in a way that demonstrates professionalism to future customers reading your profile.",
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
                REGIONAL DIVISION
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-16">
              Local <br />
              <span className="stroke-text text-transparent italic opacity-40">
                Rankings.
              </span>
            </h1>

            <p className="font-sans font-light text-lg text-white/40 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-8 mb-16">
              We dominate the neighborhood. Our local SEO strategies ensure that
              when customers search for your services nearby, you are the only
              choice they see — in the map pack, in the results, and in their
              decision.
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
                  Dominate Locally
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
              src="/assets/nexus_esports_final.webp"
              alt="Local SEO Visual"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-8 right-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="font-heading text-[9px] text-[#6324FC] mb-2 capitalize">
                Market Share
              </div>
              <div className="font-heading text-4xl text-white">
                84%{" "}
                <span className="text-xs text-[#00FFA3] tracking-normal font-sans">
                  ↑
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 02. Hyper-Local Authority */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize max-w-xl">
              Hyper-Local <br />
              <span className="italic text-[#6324FC]">Authority.</span>
            </h2>
            <p className="font-sans font-light text-xl text-white/50 max-w-md leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
              Local search is about proximity, relevance, and prominence. We
              optimize all three to put you on the map — and keep your
              competitors off it.
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

        {/* 03. Be The Only Choice */}
        <div className="py-16 md:py-24 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent animate-scan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square bg-[#0A0A0C] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <Map className="w-8 h-8 text-[#00E5FF]" />
                <div className="font-heading text-[9px] text-white/20 capitalize tracking-[0.3em]">
                  Map Radius // 50KM
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-6">
                {[
                  { name: "Your Business", rank: "#1", active: true },
                  { name: "Competitor A", rank: "#4", active: false },
                  { name: "Competitor B", rank: "#9", active: false },
                ].map((biz, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border transition-all duration-500 ${
                      biz.active
                        ? "bg-[#6324FC]/10 border-[#6324FC]/30"
                        : "bg-white/[0.02] border-white/5 opacity-40"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="font-heading text-xl text-white capitalize">
                          {biz.name}
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className="w-2.5 h-2.5 text-[#00FFA3] fill-[#00FFA3]"
                            />
                          ))}
                          <span className="font-heading text-[8px] text-white/20 ml-2">
                            483 Reviews
                          </span>
                        </div>
                      </div>
                      <div
                        className={`font-heading text-3xl ${
                          biz.active ? "text-[#6324FC]" : "text-white/20"
                        }`}
                      >
                        {biz.rank}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between font-heading text-[9px] text-[#00E5FF] capitalize tracking-widest">
                <span>Proximity Optimization</span>
                <span>Geo-Shield Active</span>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-12">
                Be The Only <br />
                <span className="italic text-[#00E5FF]">Choice.</span>
              </h2>

              <p className="font-sans font-light text-xl text-white/40 mb-12 leading-relaxed">
                When local intent peaks, we ensure your business is the most
                prominent, relevant, and trusted option on the screen — at the
                exact moment a nearby customer is ready to act.
              </p>

              <div className="space-y-8">
                {bullets.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="font-heading text-2xl text-white capitalize">
                        Bullet 0{i + 1} — {item.label}
                      </div>
                      <p className="font-sans font-light text-sm text-white/35">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 04. The Local Blueprint */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-24 text-center">
            The Local <span className="italic text-[#6324FC]">Blueprint.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blueprintSteps.map((s, i) => (
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

        {/* SECTION A — Who Needs Local SEO */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              LOCAL CLARITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize mb-8">
                Your Competitors Are <br />
                <span className="italic text-[#6324FC]">
                  Taking Your Customers.
                </span>
              </h2>
              <p className="font-sans font-light text-xl text-white/50 leading-relaxed border-l-2 border-[#6324FC]/40 pl-8">
                Every day your business doesn't appear in the local map pack,
                someone nearby is choosing your competitor. Local SEO is the
                most direct path from search to sale for location-based
                businesses.
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
                  Fix My Local Presence
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </div>
        </div>

        {/* SECTION B — Local SEO vs General SEO */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              KNOW THE DIFFERENCE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                Two Different <br />
                <span className="italic text-[#6324FC]">Battlefields.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              General SEO targets keywords with national or global intent. Local
              SEO targets searches made by people within a specific geographic
              radius who are ready to buy now. The signals, the strategy, and
              the timeline are different — and most agencies treat them the
              same.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* General SEO Card */}
            <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-500">
              <h3 className="font-heading text-3xl text-white mb-8">
                General SEO
              </h3>
              <ul className="space-y-6">
                {[
                  "Targets national or global keyword intent",
                  "Competes across the entire web",
                  "Results take 6–12 months typically",
                  "Primary asset: domain authority and content",
                  "Conversion path: long, research-driven",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span className="font-sans font-light text-white/60 text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local SEO Card */}
            <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6324FC]/10 blur-3xl rounded-full pointer-events-none" />
              <h3 className="font-heading text-3xl text-[#6324FC] mb-8">
                Local SEO (Injaazh)
              </h3>
              <ul className="space-y-6">
                {[
                  "Targets high-intent searches within your service area",
                  "Competes within your city, suburb, or region",
                  "Map pack results visible within 60–90 days",
                  "Primary asset: GMB profile, local citations, reviews",
                  "Conversion path: short — search, call/visit, sale",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Check className="w-5 h-5 text-[#00FFA3] shrink-0 mt-1" />
                    <span className="font-sans font-light text-white/90 text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center max-w-4xl mx-auto">
            <p className="font-sans font-light text-lg text-white/70">
              <strong className="font-heading text-white">Bottom Line:</strong>{" "}
              If your customer is within 50km of your door, local SEO will
              outperform general SEO on every metric that matters — cost, speed,
              and conversion rate.
            </p>
          </div>
        </div>

        {/* SECTION C — Industries We Dominate Locally */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-heading text-[#6324FC] text-[10px] tracking-[0.5em] capitalize">
              PROVEN IN YOUR MARKET
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
                We Know Your <br />
                <span className="italic text-[#6324FC]">Industry.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-lg text-white/40 max-w-md leading-relaxed border-l-2 border-[#6324FC]/20 pl-8">
              Local search behavior varies by industry. The keywords, intent
              patterns, and conversion triggers for a law firm are entirely
              different from a dental clinic or a home services company. We've
              built local dominance strategies across all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-2xl text-white mb-3 group-hover:text-[#6324FC] transition-colors">
                    {ind.title}
                  </h3>
                  <div className="font-sans font-light text-sm text-[#00E5FF] mb-4">
                    {ind.subtitle}
                  </div>
                  <p className="font-sans font-light text-white/40 text-sm leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION D — Local SEO FAQ */}
        <div className="py-16 md:py-24 border-b border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-white capitalize">
              Local SEO <span className="italic text-[#6324FC]">FAQ.</span>
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
            Own The <span className="italic text-[#6324FC]">Street.</span>
          </h2>
          <p className="font-sans text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to become the local market leader? Let's put your business on
            the map and drive more high-intent traffic to your door.
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
                DOMINATE MAP PACKS
              </span>
              <ArrowRight className="relative z-10 w-6 h-6 text-[#6324FC] group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
