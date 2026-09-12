"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Target,
  Layers,
  LineChart,
  Globe,
  Mail,
  Search,
  Zap,
  CheckCircle2,
  XCircle,
  BarChart3,
  ShieldCheck,
  Cpu,
  Calculator,
  Sliders,
  DollarSign,
  PieChart,
  Repeat,
  ChevronRight,
  Check,
  Flame,
  Activity,
  Award,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";
import Counter from "@/components/Counter";

// -------------------------------------------------------------
// Custom SVG Social & Channel Icons
// -------------------------------------------------------------
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function hexToRgba(hex: string, alpha: number) {
  const c = hex.replace("#", "");
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// -------------------------------------------------------------
// Interactive Channel Spotlight Card (Dynamic Icon-Matched Colors)
// -------------------------------------------------------------
function ChannelSpotlightCard({
  chan,
  idx,
}: {
  chan: {
    title: string;
    subtitle: string;
    desc: string;
    metrics: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
  };
  idx: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = chan.icon;

  const colorRgba = useMemo(() => hexToRgba(chan.color, 0.2), [chan.color]);
  const colorBorder = useMemo(() => hexToRgba(chan.color, 0.6), [chan.color]);
  const colorShadow = useMemo(() => hexToRgba(chan.color, 0.22), [chan.color]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative rounded-3xl p-7 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-default"
      style={{
        borderColor: isHovered ? colorBorder : undefined,
        boxShadow: isHovered ? `0 20px 50px ${colorShadow}` : undefined,
      }}
    >
      {/* Dynamic Mouse Spotlight Glow Matched to Icon Color */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(360px circle at ${x}px ${y}px, ${colorRgba}, transparent 70%)`
          ),
        }}
      />

      {/* Decorative ambient corner glow on hover in matched color */}
      <div
        className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(chan.color, 0.2)} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-20 space-y-4">
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
            style={{
              backgroundColor: isHovered ? chan.color : `${chan.color}15`,
              border: `1px solid ${isHovered ? chan.color : `${chan.color}35`}`,
              boxShadow: isHovered ? `0 0 20px ${hexToRgba(chan.color, 0.4)}` : undefined,
            }}
          >
            <Icon
              className="w-6 h-6 transition-colors duration-300"
              style={{ color: isHovered ? "#ffffff" : chan.color }}
            />
          </div>
          <span
            className="px-3 py-1 rounded-full text-[10px] font-heading uppercase tracking-widest font-semibold bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/5 text-primary/70 transition-all duration-300"
            style={{
              backgroundColor: isHovered ? hexToRgba(chan.color, 0.12) : undefined,
              color: isHovered ? chan.color : undefined,
              borderColor: isHovered ? hexToRgba(chan.color, 0.3) : undefined,
            }}
          >
            {chan.subtitle}
          </span>
        </div>

        <div>
          <h3
            className="font-heading text-xl font-bold tracking-tight text-primary transition-colors duration-300"
            style={{
              color: isHovered ? chan.color : undefined,
            }}
          >
            {chan.title}
          </h3>
          <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed mt-2">
            {chan.desc}
          </p>
        </div>
      </div>

      <div className="relative z-20 pt-5 mt-5 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-primary/50 uppercase tracking-tight">
          Target Metric:
        </span>
        <span
          className="text-xs font-heading font-bold transition-colors duration-300"
          style={{ color: chan.color }}
        >
          {chan.metrics}
        </span>
      </div>

      {/* Expanding Bottom Progress Line in matched icon color */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out z-20"
        style={{
          background: `linear-gradient(90deg, ${chan.color}, ${hexToRgba(chan.color, 0.2)})`,
        }}
      />
    </motion.div>
  );
}

// -------------------------------------------------------------
// Interactive Metric Spotlight Card (Dynamic Hover & Spotlight)
// -------------------------------------------------------------
function MetricSpotlightCard({
  stat,
  idx,
}: {
  stat: {
    value: string;
    label: string;
    desc: string;
    badge: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
  };
  idx: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = stat.icon;

  const colorRgba = useMemo(() => hexToRgba(stat.color, 0.18), [stat.color]);
  const colorBorder = useMemo(() => hexToRgba(stat.color, 0.6), [stat.color]);
  const colorShadow = useMemo(() => hexToRgba(stat.color, 0.22), [stat.color]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-default shadow-sm"
      style={{
        borderColor: isHovered ? colorBorder : undefined,
        boxShadow: isHovered ? `0 20px 50px ${colorShadow}` : undefined,
      }}
    >
      {/* Dynamic Mouse Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(350px circle at ${x}px ${y}px, ${colorRgba}, transparent 70%)`
          ),
        }}
      />

      {/* Decorative ambient corner glow on hover */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(stat.color, 0.2)} 0%, transparent 70%)`,
        }}
      />

      {/* Card Header: Icon & Badge */}
      <div className="relative z-20 flex items-center justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
          style={{
            backgroundColor: isHovered ? stat.color : `${stat.color}15`,
            border: `1px solid ${isHovered ? stat.color : `${stat.color}30`}`,
            boxShadow: isHovered ? `0 0 15px ${hexToRgba(stat.color, 0.4)}` : undefined,
          }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isHovered ? "#ffffff" : stat.color }}
          />
        </div>

        <span
          className="px-2.5 py-0.5 rounded-full text-[9px] font-heading uppercase tracking-wider font-semibold transition-all duration-300 bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/5 text-primary/60"
          style={{
            backgroundColor: isHovered ? hexToRgba(stat.color, 0.12) : undefined,
            color: isHovered ? stat.color : undefined,
            borderColor: isHovered ? hexToRgba(stat.color, 0.3) : undefined,
          }}
        >
          {stat.badge}
        </span>
      </div>

      {/* Numeric Metric */}
      <div className="relative z-20 space-y-1 my-2">
        <div
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight transition-all duration-300 group-hover:scale-105"
          style={{ color: stat.color }}
        >
          <Counter value={stat.value} />
        </div>
        <div className="font-heading text-xs sm:text-sm uppercase tracking-wider text-primary font-bold transition-colors">
          {stat.label}
        </div>
      </div>

      {/* Description */}
      <p className="relative z-20 text-[11px] font-sans text-primary/60 leading-relaxed pt-2 border-t border-black/5 dark:border-white/5">
        {stat.desc}
      </p>

      {/* Bottom Expanding Accent Line */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out z-20"
        style={{
          background: `linear-gradient(90deg, ${stat.color}, ${hexToRgba(stat.color, 0.2)})`,
        }}
      />
    </motion.div>
  );
}

// -------------------------------------------------------------
// Main Marketing Client
// -------------------------------------------------------------
export default function MarketingClient() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Growth Simulator State
  const [monthlyBudget, setMonthlyBudget] = useState<number>(15000);
  const [industry, setIndustry] = useState<"ecommerce" | "b2b" | "saas">("ecommerce");

  // Funnel Active Stage
  const [activeStage, setActiveStage] = useState<number>(0);

  // Dynamic Simulator Calculations
  const simulation = useMemo(() => {
    let roasMultiplier = 4.8;
    let cpaEstimate = 32;
    let conversionRate = "3.4%";

    if (industry === "b2b") {
      roasMultiplier = 3.9;
      cpaEstimate = 85;
      conversionRate = "4.2%";
    } else if (industry === "saas") {
      roasMultiplier = 5.2;
      cpaEstimate = 110;
      conversionRate = "2.8%";
    }

    const projectedRevenue = Math.round(monthlyBudget * roasMultiplier);
    const estimatedConversions = Math.round(monthlyBudget / cpaEstimate);
    const netGrowth = Math.round(projectedRevenue - monthlyBudget);

    return {
      roas: roasMultiplier.toFixed(1) + "x",
      revenue: projectedRevenue.toLocaleString(),
      conversions: estimatedConversions.toLocaleString(),
      netGrowth: netGrowth.toLocaleString(),
      cpa: "$" + cpaEstimate,
      convRate: conversionRate,
    };
  }, [monthlyBudget, industry]);

  const stats = [
    {
      value: "4.8x",
      label: "Average Blended ROAS",
      desc: "Measured across active multi-channel accounts",
      badge: "PROVEN ROAS",
      icon: TrendingUp,
      color: "#6324FC",
    },
    {
      value: "42%",
      label: "CPA Reduction",
      desc: "First 90-day algorithmic bidding optimization",
      badge: "COST VELOCITY",
      icon: Target,
      color: "#00E5FF",
    },
    {
      value: "96%",
      label: "1st-Party Match Rate",
      desc: "Server-side CAPI & sGTM precision tracking",
      badge: "TELEMETRY",
      icon: Cpu,
      color: "#00FFA3",
    },
    {
      value: "$18M+",
      label: "Attributed Revenue",
      desc: "Generated for enterprise & scale-up clients",
      badge: "SCALE RECORD",
      icon: DollarSign,
      color: "#FACC15",
    },
  ];

  // 3 Primary Sub-Architectures with direct internal links
  const subArchitectures = [
    {
      title: "PPC & Algorithmic Paid Search",
      slug: "ppc-campaigns",
      href: "/services/marketing/ppc-campaigns",
      tagline: "High-Commercial Intent Google Ads & Meta Advantage+",
      desc: "Bid management, automated negative keyword harvesting, and responsive search ads engineered for bottom-funnel conversion velocity.",
      badge: "PAID MEDIA",
      metrics: "4.5x Avg ROAS",
      features: ["Google Search & PMax", "Meta Dynamic Creative", "Target CPA Bidding", "Negative Match Sculpting"],
    },
    {
      title: "Growth Automation & Retention",
      slug: "growth-automation",
      href: "/services/marketing/growth-automation",
      tagline: "Lifecycle Email, SMS Sequences & Customer LTV Engines",
      desc: "Turn one-time shoppers into high-LTV repeat brand advocates using automated Klaviyo flows, RFM segmentation, and predictive replenishment.",
      badge: "RETENTION",
      metrics: "38% Rev from Email",
      features: ["Klaviyo Flow Architecture", "Behavioral Trigger Loops", "Churn Mitigation", "SMS Broadcast Engine"],
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      slug: "conversion-optimization",
      href: "/services/marketing/conversion-optimization",
      tagline: "Heuristic Funnel Telemetry & High-Impact Multivariate A/B Testing",
      desc: "Stop wasting expensive ad clicks on leaky funnels. We deploy heatmaps, session recording audits, and bespoke Next.js landing pages that convert.",
      badge: "CRO AUDIT",
      metrics: "+140% Conv Lift",
      features: ["Multivariate A/B Testing", "Checkout Friction Removal", "Sub-second LCP Landers", "Heatmap Behavioral Audits"],
    },
  ];

  // 4-Stage Precision Acquisition Lifecycle
  const funnelStages = [
    {
      id: "01",
      name: "Top of Funnel (Demand Creation)",
      focus: "High-Impact Awareness & Pattern-Interruption",
      desc: "Interrupting consumer inertia with cinematic short-form video, programmatic display, and Meta lookalikes that trigger initial commercial intent.",
      channels: ["Meta Advantage+ Creative", "YouTube Bumper Ads", "TikTok Spark Ads", "Google Display sGTM"],
      kpis: ["Thumb-Stop Ratio (> 35%)", "CPM Efficiency", "Brand Search Lift", "Engaged Visitor Velocity"],
    },
    {
      id: "02",
      name: "Mid Funnel (Consideration & Intent)",
      focus: "High-Intent Capture & Competitive Supremacy",
      desc: "Intercepting active market queries on Google Search and YouTube. We target users evaluating solutions and outposition competitors on commercial search queries.",
      channels: ["Google Search Exact Match", "Comparison Landing Pages", "LinkedIn ABM Audiences", "Remarketing Sequences"],
      kpis: ["Click-Through Rate (> 8.5%)", "Search Impression Share (> 70%)", "Qualified Traffic %", "Time on Page"],
    },
    {
      id: "03",
      name: "Bottom of Funnel (Direct Conversion)",
      focus: "Zero-Friction Checkout & Pipeline Acquisition",
      desc: "Converting high-intent visitors through lightning-fast, conversion-optimized landing pages, dynamic cart incentives, and retargeting triggers.",
      channels: ["Performance Max Shopping", "Dynamic Product Ads (DPA)", "Dedicated Next.js Landers", "Exit-Intent Modals"],
      kpis: ["Blended ROAS (4x - 6x)", "Checkout Completion Rate", "CPA Reduction", "Cart Abandonment Drop"],
    },
    {
      id: "04",
      name: "Retention & LTV (Automated Growth)",
      focus: "Post-Purchase Monetization & Zero Ad Cost Revenue",
      desc: "Monetizing your owned client base on autopilot. Predictive replenishment flows, VIP loyalty rewards, and automated re-engagement that boost net margins.",
      channels: ["Klaviyo Flow Sequences", "VIP SMS Early Access", "Cross-Sell Trigger Workflows", "Customer Referral Loops"],
      kpis: ["Repeat Purchase Rate (> 40%)", "30-Day LTV Surge", "Email Attributed Rev (> 35%)", "Unsubscribe Rate (< 0.2%)"],
    },
  ];

  // Omnichannel Platforms
  const channels = [
    {
      title: "Google Search & Shopping",
      subtitle: "High-Intent Bottom Funnel",
      desc: "Captures high-intent prospects actively searching for your solutions. Managed with algorithmic bid ceilings and tight keyword negative sculpts.",
      metrics: "8.5%+ Average CTR",
      icon: Search,
      color: "#6324FC",
    },
    {
      title: "Meta Advantage+ (FB & IG)",
      subtitle: "High-Velocity Demand Gen",
      desc: "Scroll-stopping direct-response creative paired with Meta's machine learning engine to drive scalable customer acquisition.",
      metrics: "3.5x - 5.2x ROAS",
      icon: FacebookIcon,
      color: "#00E5FF",
    },
    {
      title: "LinkedIn Account-Based Marketing",
      subtitle: "High-Ticket B2B & Enterprise",
      desc: "Hyper-targeted B2B campaigns reaching verified decision-makers by job title, company revenue, industry vertical, and technology stack.",
      metrics: "$150k+ Pipeline Velocity",
      icon: LinkedinIcon,
      color: "#00FFA3",
    },
    {
      title: "YouTube & Direct-Response Video",
      subtitle: "Full-Funnel Brand Lift",
      desc: "Cinematic video creative engineered with 3-second pattern interrupts, compelling problem-solution frameworks, and measurable action triggers.",
      metrics: "45%+ View-Through Rate",
      icon: Globe,
      color: "#FF2D55",
    },
    {
      title: "Klaviyo & Automated Retention",
      subtitle: "Zero Ad Cost Revenue",
      desc: "Automated behavioral email and SMS sequences that monetize your customer list without spending an extra dollar on media buys.",
      metrics: "35%+ Total Store Revenue",
      icon: Mail,
      color: "#FACC15",
    },
    {
      title: "Server-Side Telemetry (CAPI & sGTM)",
      subtitle: "100% Attribution Precision",
      desc: "Circumvents iOS 14.5+ tracking loss and cookie degradation with cloud server-side Google Tag Manager and Meta Conversions API.",
      metrics: "96% Event Match Quality",
      icon: Cpu,
      color: "#8B5CF6",
    },
  ];

  // Comparison Matrix
  const comparisonItems = [
    {
      feature: "Attribution & Telemetry",
      agency: "Client-side pixel relying on third-party cookies (40% data loss)",
      injaazh: "Server-Side GTM + Meta CAPI with 96%+ Event Match Quality",
    },
    {
      feature: "Bidding Architecture",
      agency: "Set-and-forget broad match spending budget blindly",
      injaazh: "Algorithmic Target ROAS / CPA with continuous negative keyword sculpting",
    },
    {
      feature: "Ad Creative & Copy",
      agency: "Generic Canva templates or recycled static stock graphics",
      injaazh: "Custom high-converting bespoke creative with dynamic multivariate hooks",
    },
    {
      feature: "Landing Page Speed & CRO",
      agency: "Sends expensive traffic to slow, unoptimized homepage",
      injaazh: "Dedicated sub-second Headless Next.js landing pages tested for conversion",
    },
    {
      feature: "Reporting & Transparency",
      agency: "Misleading vanity screenshots and vague monthly impressions",
      injaazh: "Live transparent revenue attribution dashboard with daily pipeline telemetry",
    },
  ];

  const faqs = [
    {
      q: "What minimum ad budget is recommended to achieve optimal ROAS?",
      a: "For Google Search and Shopping campaigns, we recommend a minimum ad spend of $2,000–$3,000/month to generate sufficient conversion events for algorithmic machine-learning optimization. For Meta Advantage+ campaigns, $1,500–$2,500/month provides the required volume to exit the learning phase within 7 days. Our management fee is separate from ad spend and is structured on performance milestones.",
    },
    {
      q: "How does Injaazh solve iOS 14.5+ tracking and cookie loss?",
      a: "We do not rely on fragile browser-side pixels. Every marketing engagement includes the deployment of Server-Side Google Tag Manager (sGTM) hosted on dedicated cloud containers, alongside direct server-to-server Meta Conversions API (CAPI) and Google Enhanced Conversions. This restores 96%+ event match quality and enables true multi-touch revenue attribution.",
    },
    {
      q: "How quickly can we expect to see profitable returns?",
      a: "Google Search campaigns targeting high-intent commercial keywords typically generate qualified leads and sales within the first 7 to 14 days of deployment. Meta paid social campaigns typically require 3 to 4 weeks to complete algorithmic audience testing and creative iteration. By month two, campaigns compound as winning creative is scaled and underperforming segments are pruned.",
    },
    {
      q: "Do you produce all ad copy and creative assets in-house?",
      a: "Yes, completely. Our creative team produces high-converting ad copy, static visual frameworks, and direct-response video assets. Every asset is engineered specifically for platform psychology — from 3-second pattern interrupts on Meta to high-CTR headline angles on Google Search.",
    },
    {
      q: "Can Injaazh build dedicated landing pages for our campaigns?",
      a: "Yes. In fact, sending paid traffic to a generic homepage is the number one reason ad campaigns fail. We design and deploy high-velocity, sub-second Headless Next.js landing pages featuring heuristic UX wireframing, trust badges, and frictionless checkout flows that double or triple baseline conversion rates.",
    },
  ];

  return (
    <main className="bg-[#FAF9F6] dark:bg-[#060608] min-h-screen relative overflow-hidden transition-colors duration-500">
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/10 dark:bg-[#6324FC]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[#00E5FF]/10 dark:bg-[#00E5FF]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.025] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ========================================================
            1. HERO HEADER SECTION
            ======================================================== */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-primary/50 hover:text-[#6324FC] transition-colors"
            >
              Services
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-xs font-heading uppercase tracking-widest text-[#6324FC] font-semibold">
              Performance Marketing & Growth
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6324FC]/25 bg-[#6324FC]/10 text-[#6324FC] text-xs font-heading font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" />
                ENTERPRISE GROWTH ARCHITECTURE // V2.5
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.92] capitalize">
                Data-Driven Marketing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6324FC] via-[#a855f7] to-[#00E5FF] italic">
                  That Prints Revenue.
                </span>
              </h1>

              <p className="font-sans font-light text-base sm:text-xl text-primary/70 max-w-2xl leading-relaxed border-l-2 border-[#6324FC] pl-6">
                Anyone can burn an ad budget on generic vanity clicks. We construct deterministic, milestone-gated paid media campaigns and retention systems engineered for exponential customer acquisition across US, UK, European, and Middle Eastern markets.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => openModal("Performance Marketing")}
                  className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.4)] isolate"
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                    <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                  </div>
                  <div className="relative w-full h-full px-8 py-4 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                    <span className="relative z-10 font-heading text-sm tracking-[0.15em] text-primary uppercase text-center font-medium">
                      LAUNCH MARKETING AUDIT
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>

                <a
                  href="#simulator"
                  className="px-6 py-4 rounded-full border border-black/10 dark:border-white/10 hover:border-[#6324FC]/40 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.05] text-xs font-heading uppercase tracking-wider text-primary font-medium flex items-center gap-2 transition-all"
                >
                  <Calculator className="w-4 h-4 text-[#6324FC]" />
                  Simulate Growth & ROAS
                </a>
              </div>
            </div>

            {/* Quick Guarantees Badge */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 shadow-lg space-y-4">
              <span className="text-[10px] font-heading uppercase tracking-widest text-[#6324FC] font-bold block">
                GUARANTEED EXECUTION SLA
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary">100% Client Ownership of Ad Accounts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary">Server-Side CAPI Telemetry Included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary">Zero Long-Term Lock-in Contracts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. PROVEN METRICS STRIP
            ======================================================== */}
        <section className="py-12 border-b border-black/10 dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <MetricSpotlightCard key={stat.label} stat={stat} idx={i} />
            ))}
          </div>
        </section>

        {/* ========================================================
            3. INTERACTIVE GROWTH & ROAS SIMULATOR
            ======================================================== */}
        <section id="simulator" className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 text-[#6324FC] border border-[#6324FC]/20 text-xs font-heading font-semibold uppercase tracking-widest">
              <Sliders className="w-3.5 h-3.5" />
              LIVE PIPELINE PROJECTION ENGINE
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Calculate Your Revenue <br />
              <span className="text-[#6324FC] italic">Trajectory & Return.</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-xl mx-auto">
              Simulate your expected blended return based on our historical benchmark algorithms across US, UK, and global campaign deployments.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-[32px] bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Controls Column */}
              <div className="lg:col-span-6 space-y-8">
                {/* Industry Selector */}
                <div>
                  <label className="text-xs font-heading uppercase tracking-widest text-primary/60 font-semibold block mb-3">
                    Select Your Business Model:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["ecommerce", "b2b", "saas"] as const).map((ind) => (
                      <button
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={`py-2.5 px-3 rounded-xl font-heading text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          industry === ind
                            ? "bg-[#6324FC] text-white font-semibold shadow-[0_0_15px_rgba(99,36,252,0.3)]"
                            : "bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-primary/70 hover:text-primary"
                        }`}
                      >
                        {ind === "ecommerce" ? "E-Commerce" : ind === "b2b" ? "B2B Leads" : "SaaS / App"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monthly Ad Budget Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-heading uppercase tracking-widest text-primary/60 font-semibold">
                      Monthly Media Budget:
                    </label>
                    <span className="font-heading text-2xl font-black text-[#6324FC]">
                      ${monthlyBudget.toLocaleString()}/mo
                    </span>
                  </div>

                  <input
                    type="range"
                    min={3000}
                    max={100000}
                    step={1000}
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6324FC]"
                  />

                  <div className="flex justify-between text-[10px] font-mono text-primary/40">
                    <span>$3k (Kickoff)</span>
                    <span>$25k</span>
                    <span>$50k</span>
                    <span>$100k+ (Enterprise)</span>
                  </div>
                </div>

                {/* Strategy Snapshot */}
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-primary/70">
                    <span>Est. Target ROAS:</span>
                    <span className="font-heading font-bold text-primary">{simulation.roas}</span>
                  </div>
                  <div className="flex items-center justify-between text-primary/70">
                    <span>Avg Customer Acquisition (CPA):</span>
                    <span className="font-heading font-bold text-primary">{simulation.cpa}</span>
                  </div>
                  <div className="flex items-center justify-between text-primary/70">
                    <span>Landing Page Conv Rate:</span>
                    <span className="font-heading font-bold text-primary">{simulation.convRate}</span>
                  </div>
                </div>
              </div>

              {/* Simulation Results Column */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-[#6324FC]/10 via-[#00E5FF]/5 to-transparent border border-[#6324FC]/20 space-y-6">
                <div>
                  <span className="text-[10px] font-heading uppercase tracking-widest text-[#6324FC] font-bold block mb-1">
                    PROJECTED 30-DAY PIPELINE RETURN
                  </span>
                  <div className="font-heading text-4xl sm:text-6xl font-black text-primary tracking-tight">
                    ${simulation.revenue}
                  </div>
                  <p className="text-xs text-primary/60 mt-1 font-sans">
                    Estimated gross revenue returned per 30-day billing cycle.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/10 dark:border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-primary/50 block">Est. Monthly Orders / Leads</span>
                    <span className="font-heading text-2xl font-bold text-[#6324FC]">{simulation.conversions}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-primary/50 block">Est. Net Revenue Margin</span>
                    <span className="font-heading text-2xl font-bold text-green-500">+${simulation.netGrowth}</span>
                  </div>
                </div>

                <button
                  onClick={() => openModal(`Marketing Plan (${monthlyBudget}/mo ${industry.toUpperCase()})`)}
                  className="w-full py-4 rounded-full bg-[#6324FC] hover:bg-[#521cd6] text-white font-heading text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_25px_rgba(99,36,252,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lock In This Acquisition Target</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            4. DEDICATED 3 SUB-ARCHITECTURES (DEEP ROUTES)
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
                SPECIALIZED GROWTH MODULES
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
                Our 3 Core Marketing <br />
                <span className="text-[#6324FC] italic">Sub-Architectures.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-md">
              Each specialized discipline operates with dedicated telemetry, custom bidding scripts, and deep funnel CRO. Explore our individual architectures below:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subArchitectures.map((sub, idx) => (
              <div
                key={sub.slug}
                className="group relative rounded-3xl p-8 bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 hover:border-[#6324FC]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(99,36,252,0.18)] flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-heading uppercase tracking-widest font-semibold bg-[#6324FC]/10 text-[#6324FC] border border-[#6324FC]/20">
                      {sub.badge}
                    </span>
                    <span className="font-mono text-xs text-[#6324FC] font-bold">
                      {sub.metrics}
                    </span>
                  </div>

                  <div>
                    <Link href={sub.href} className="group-hover:text-[#6324FC] transition-colors">
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-primary flex items-center justify-between">
                        <span>{sub.title}</span>
                        <ChevronRight className="w-5 h-5 text-primary/30 group-hover:text-[#6324FC] group-hover:translate-x-1 transition-transform" />
                      </h3>
                    </Link>
                    <p className="text-xs text-[#6324FC] font-heading font-medium tracking-wide mt-1">
                      {sub.tagline}
                    </p>
                    <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed mt-3">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 dark:border-white/5 space-y-2">
                    <span className="text-[10px] font-heading uppercase tracking-wider text-primary/50 block font-semibold">
                      Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sub.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-[11px] font-mono text-primary/70"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-black/5 dark:border-white/5">
                  <Link
                    href={sub.href}
                    className="w-full py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-[#6324FC] hover:text-white border border-black/10 dark:border-white/10 hover:border-[#6324FC] font-heading text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Inspect Deep Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#6324FC] transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. THE 4-STAGE FULL-FUNNEL LIFECYCLE
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              END-TO-END CUSTOMER LIFECYCLE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              The 4-Stage Precision <br />
              <span className="text-[#6324FC] italic">Acquisition Framework.</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70">
              We do not rely on isolated campaigns. Every ad touchpoint feeds into a unified full-funnel ecosystem designed to lower blended CPA as volume scales.
            </p>
          </div>

          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {funnelStages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeStage === idx
                    ? "bg-[#6324FC] text-white border-[#6324FC] shadow-[0_0_20px_rgba(99,36,252,0.3)]"
                    : "bg-white dark:bg-[#0c0c12] border-black/10 dark:border-white/10 text-primary hover:border-[#6324FC]/40"
                }`}
              >
                <div className={`font-heading text-xs font-mono mb-1 ${activeStage === idx ? "text-white/80" : "text-[#6324FC]"}`}>
                  STAGE {stage.id}
                </div>
                <div className="font-heading text-sm font-bold tracking-tight line-clamp-1">
                  {stage.name.split(" (")[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Stage Active Content Display */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-heading font-semibold uppercase tracking-widest text-[#6324FC]">
                      {funnelStages[activeStage].name}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                      {funnelStages[activeStage].focus}
                    </h3>
                    <p className="font-sans font-light text-sm sm:text-base text-primary/70 leading-relaxed pt-2">
                      {funnelStages[activeStage].desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4">
                    <span className="text-xs font-heading uppercase tracking-wider text-primary/50 block font-semibold">
                      Deployed Channels & Formats:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {funnelStages[activeStage].channels.map((chan, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-xs text-primary font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#6324FC] shrink-0" />
                          <span>{chan}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 space-y-4">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#6324FC] block">
                    TARGET KEY PERFORMANCE INDICATORS
                  </span>
                  <div className="space-y-2.5">
                    {funnelStages[activeStage].kpis.map((kpi, kIdx) => (
                      <div
                        key={kIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#0a0a0f] border border-black/5 dark:border-white/5 text-xs font-heading font-semibold text-primary"
                      >
                        <span>{kpi.split(" (")[0]}</span>
                        <span className="text-[#6324FC] font-mono">
                          {kpi.includes("(") ? kpi.substring(kpi.indexOf("(")) : "Primary KPI"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(`Stage ${activeStage + 1} Strategy Session`)}
                    className="w-full mt-4 py-3 rounded-xl bg-[#6324FC] text-white font-heading text-xs uppercase tracking-wider font-semibold hover:bg-[#521cd6] transition-colors cursor-pointer"
                  >
                    Audit This Funnel Stage
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================
            6. OMNICHANNEL DEPLOYMENT MATRIX
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
                PLATFORM ECOSYSTEM
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
                Where We Deploy <br />
                <span className="text-[#6324FC] italic">Your Growth Capital.</span>
              </h2>
            </div>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-md">
              We do not run shotgun campaigns across all networks. We selectively allocate budget strictly where your highest-LTV customers congregate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((chan, idx) => (
              <ChannelSpotlightCard key={chan.title} chan={chan} idx={idx} />
            ))}
          </div>
        </section>

        {/* ========================================================
            7. CONVENTIONAL AGENCIES VS INJAAZH ENGINEERING
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6324FC]/10 text-[#6324FC] border border-[#6324FC]/20 text-xs font-heading font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              THE PARADIGM SHIFT
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Why Traditional Agencies <br />
              <span className="text-[#6324FC] italic">Burn Your Budget.</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-xl mx-auto">
              The difference between vanity ad clicks and profitable, compounding revenue lies in our deterministic engineering standard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Typical Digital Agency (Pain Points) */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-red-500/[0.02] dark:bg-red-500/[0.03] border border-red-500/20 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-red-500/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading text-xs uppercase tracking-widest text-red-500 font-bold block">
                        TYPICAL DIGITAL AGENCY
                      </span>
                      <span className="text-[11px] text-primary/50 font-sans">High overhead & low accountability</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-heading uppercase tracking-wider font-semibold bg-red-500/10 text-red-500 border border-red-500/20">
                    LEGACY MODEL
                  </span>
                </div>

                <div className="space-y-3.5 pt-2">
                  {comparisonItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-red-500/10 flex items-start gap-3.5"
                    >
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-heading text-xs font-bold uppercase tracking-wider text-red-400">
                          {item.feature}
                        </div>
                        <p className="font-sans font-light text-xs sm:text-sm text-primary/70 leading-relaxed">
                          {item.agency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-red-500/10 text-center">
                <span className="text-xs font-heading uppercase tracking-wider text-red-500/80 font-semibold">
                  Result: Wasted Ad Spend & Untracked Customer Churn
                </span>
              </div>
            </div>

            {/* Card 2: Injaazh Growth Engineering (Featured Hero Solution) */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-white dark:bg-[#0c0c12] border-2 border-[#6324FC] shadow-[0_25px_70px_rgba(99,36,252,0.22)] dark:shadow-[0_30px_90px_rgba(99,36,252,0.35)] flex flex-col justify-between relative overflow-hidden">
              {/* Subtle ambient gradient backdrops */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#6324FC]/20 to-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#6324FC]/15 border border-[#6324FC]/30 flex items-center justify-center text-[#6324FC]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading text-xs uppercase tracking-widest text-[#6324FC] font-bold block">
                        INJAAZH GROWTH ENGINEERING
                      </span>
                      <span className="text-[11px] text-primary/50 font-sans">Deterministic revenue acceleration</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-heading uppercase tracking-wider font-bold bg-[#6324FC] text-white shadow-[0_0_15px_rgba(99,36,252,0.5)]">
                    ENTERPRISE STANDARD
                  </span>
                </div>

                <div className="space-y-3.5 pt-2">
                  {comparisonItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#6324FC]/[0.04] dark:bg-[#6324FC]/[0.08] border border-[#6324FC]/30 hover:border-[#6324FC]/70 transition-colors flex items-start gap-3.5 group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-heading text-xs font-bold uppercase tracking-wider text-[#6324FC] group-hover:text-primary transition-colors">
                          {item.feature}
                        </div>
                        <p className="font-sans font-medium text-xs sm:text-sm text-primary leading-relaxed">
                          {item.injaazh}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-black/10 dark:border-white/10">
                <button
                  onClick={() => openModal("Growth Engineering Transition")}
                  className="w-full py-4 rounded-2xl bg-[#6324FC] hover:bg-[#521cd6] text-white font-heading text-xs uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(99,36,252,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Transition To Injaazh Growth Standard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            8. FREQUENTLY ASKED QUESTIONS
            ======================================================== */}
        <section className="py-20 border-b border-black/10 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              TRANSPARENCY FIRST
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl capitalize tracking-tight">
              Frequently Asked <br />
              <span className="text-[#6324FC] italic">Questions.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-[#0c0c12] border border-black/10 dark:border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-primary">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6324FC] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-primary/70 leading-relaxed font-sans border-t border-black/5 dark:border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            9. BOTTOM HERO CTA: AUDIT CALL TO ACTION
            ======================================================== */}
        <section className="text-center py-24 px-6 rounded-[36px] bg-gradient-to-br from-[#6324FC]/10 via-transparent to-[#00E5FF]/10 border border-[#6324FC]/25 my-16 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              KICKOFF YOUR GROWTH CYCLE
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl capitalize tracking-tight leading-tight">
              Ready To Scale <br />
              <span className="text-[#6324FC] italic">Your Paid Acquisition?</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-primary/70 max-w-lg mx-auto">
              Request an in-depth technical ad audit or schedule a direct consultation with our principal growth engineers. We will analyze your account within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => openModal("Performance Marketing Growth Proposal")}
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,36,252,0.4)] isolate w-full sm:w-auto"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                <div className="relative w-full h-full px-10 py-5 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                  <span className="relative z-10 font-heading text-sm tracking-[0.15em] text-primary uppercase text-center font-medium">
                    REQUEST GROWTH AUDIT
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>

              <Link
                href="/contact"
                className="px-8 py-5 rounded-full border border-black/10 dark:border-white/10 hover:border-[#6324FC]/40 bg-white/40 dark:bg-white/[0.03] text-xs font-heading uppercase tracking-wider text-primary font-medium transition-all"
              >
                Contact Growth Team
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
