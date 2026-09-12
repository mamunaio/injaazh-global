"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  MessageSquare,
  Building2,
  User,
  ChevronDown,
  Globe2,
  Calendar,
} from "lucide-react";
import { useProjectModal } from "@/components/ProjectModalContext";

// Inquiry category definitions
const inquiryTypes = [
  { id: "project", label: "Enterprise Project", icon: Zap, hint: "Custom web architectures, web applications, or scalable digital transformations." },
  { id: "audit", label: "Technical Audit", icon: Sparkles, hint: "Deep-dive performance, Core Web Vitals, and Technical SEO analysis." },
  { id: "partnership", label: "Strategic Partnership", icon: Building2, hint: "White-label engineering, agency collaboration, or enterprise ventures." },
  { id: "general", label: "General Inquiry", icon: MessageSquare, hint: "Media requests, career inquiries, or general communication." },
];

// Available specialized services
const serviceOptions = [
  "Next.js Architectures",
  "UI/UX Design Systems",
  "Technical SEO & AEO",
  "AI & Growth Automation",
  "Headless Commerce",
  "Full-Cycle Web Apps",
];

// Budget tiers
const budgetTiers = [
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Flexible / Needs Discovery",
];

// Global Office Locations
const globalOffices = [
  {
    city: "London",
    country: "United Kingdom",
    address: "124 Shoreditch High St., EC1 6JE",
    timeZone: "Europe/London",
    phone: "+44 (0) 20 7946 0920",
    coordinates: "51.5260° N, 0.0782° W",
  },
  {
    city: "New York",
    country: "United States",
    address: "85 Broad Street, Manhattan, NY 10004",
    timeZone: "America/New_York",
    phone: "+1 (212) 555-0199",
    coordinates: "40.7042° N, 74.0113° W",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "DIFC Gate Precinct 4, Level 7",
    timeZone: "Asia/Dubai",
    phone: "+971 4 362 7000",
    coordinates: "25.2048° N, 55.2708° E",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "Marina Bay Financial Centre, Tower 2",
    timeZone: "Asia/Singapore",
    phone: "+65 6709 8888",
    coordinates: "1.2797° N, 103.8547° E",
  },
];

// FAQ items
const faqItems = [
  {
    question: "How fast can we kick off a new engagement?",
    answer: "Discovery and architectural roadmapping begin within 48 to 72 hours following the initial brief alignment and NDA execution. Sprint 1 kickoff typically commences inside 5 business days.",
  },
  {
    question: "What is your engagement and pricing structure?",
    answer: "We offer both fixed-scope milestone delivery for precisely defined builds and dedicated monthly sprint retainers for continuous agile engineering and digital transformation.",
  },
  {
    question: "Who retains intellectual property (IP) rights?",
    answer: "You retain 100% intellectual property ownership. Upon milestone sign-off, all repository source code, design systems, Figma assets, and production configs transfer fully to your organization.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs) prior to review?",
    answer: "Yes, standard practice. We provide our mutual enterprise NDA or review your corporate NDA prior to inspecting proprietary data, codebases, or strategic documentation.",
  },
];

export default function ContactClient() {
  const { openModal } = useProjectModal();

  // Form State
  const [inquiryType, setInquiryType] = useState("project");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Next.js Architectures"]);
  const [budget, setBudget] = useState("$25,000 - $50,000");
  const [details, setDetails] = useState("");

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Live Clocks for Global Offices
  const [timeState, setTimeState] = useState<{ [key: string]: { time: string; isOpen: boolean } }>({});

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const updated: { [key: string]: { time: string; isOpen: boolean } } = {};

      globalOffices.forEach((office) => {
        try {
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: office.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
          const timeString = formatter.format(now);

          // Business hours check (9am to 6pm local)
          const hourFormatter = new Intl.DateTimeFormat("en-US", {
            timeZone: office.timeZone,
            hour: "numeric",
            hour12: false,
          });
          const currentHour = parseInt(hourFormatter.format(now), 10);
          const isOpen = currentHour >= 9 && currentHour < 18;

          updated[office.city] = { time: timeString, isOpen };
        } catch {
          updated[office.city] = { time: "--:--:--", isOpen: false };
        }
      });

      setTimeState(updated);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // Copy email utility
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@injaazh.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Toggle service selection
  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !email.trim() || !email.includes("@")) {
      setErrorMessage("Please provide a valid full name and work email address.");
      return;
    }

    if (details.trim().length < 10) {
      setErrorMessage("Please provide at least a brief summary of your project vision (min 10 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      const enrichedDetails = `[Inquiry Type: ${inquiryType.toUpperCase()}] ${company ? `[Company: ${company}] ` : ""}${phone ? `[Phone: ${phone}] ` : ""}${details}`;

      const res = await fetch("/api/pipeline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          services: selectedServices,
          budget: budget,
          details: enrichedDetails,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to transmit message. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please reach us directly at hello@injaazh.com";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-background text-primary selection:bg-[#6324FC] selection:text-white pt-28 sm:pt-32 pb-24 font-sans relative overflow-x-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6324FC]/10 dark:bg-[#6324FC]/15 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] -left-40 w-[500px] h-[500px] bg-[#00E5FF]/5 dark:bg-[#00E5FF]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ========================================================
            HERO HEADER
            ======================================================== */}
        <section className="mb-16 lg:mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md text-[10px] font-heading uppercase tracking-[0.25em] text-[#6324FC] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#6324FC] animate-pulse" />
              COMMUNICATION NEXUS // 24/7 AVAILABILITY
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-heading uppercase tracking-[0.2em] text-green-600 dark:text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Average Response SLA: &lt; 6 Hours
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] capitalize">
                LET'S ARCHITECT <br />
                <span className="text-[#6324FC] italic">THE FUTURE</span> TOGETHER.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="font-sans font-light text-base sm:text-lg text-primary/70 leading-relaxed max-w-md">
                We partner with visionary enterprises, high-growth scale-ups, and ambitious founders worldwide to build resilient software, bespoke design systems, and dominant search architectures.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            MAIN WORKSPACE GRID: FORM (LEFT) + COMMAND CENTER (RIGHT)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ----------------------------------------------------
              LEFT COLUMN: INTERACTIVE FORM & PIPELINE
              ---------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.06)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6324FC] via-[#00E5FF] to-[#6324FC]" />

            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* ---------------- SUCCESS VIEW ---------------- */
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 sm:py-16 flex flex-col items-center text-center gap-6"
                >
                  <div className="w-20 h-20 rounded-3xl bg-[#6324FC] flex items-center justify-center text-white shadow-[0_0_40px_rgba(99,36,252,0.4)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-3 max-w-md">
                    <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#6324FC] font-semibold">
                      Status: Transmitted & Logged
                    </span>
                    <h2 className="font-heading text-4xl sm:text-5xl tracking-tight capitalize">
                      Transmission <br />
                      <span className="text-[#6324FC] italic">Confirmed.</span>
                    </h2>
                    <p className="font-sans font-light text-primary/70 text-sm sm:text-base leading-relaxed">
                      Thank you, <strong className="text-primary font-medium">{name}</strong>. Our partner engineers and strategists have received your brief. We will review your objective and respond via <strong className="text-primary font-medium">{email}</strong> within 6 business hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-xs text-primary/60 max-w-sm flex items-center gap-3 text-left">
                    <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Your submission is encrypted and safeguarded under our enterprise NDA protocol.</span>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setDetails("");
                    }}
                    className="mt-4 px-8 py-3.5 rounded-full border border-black/15 dark:border-white/15 font-heading text-xs uppercase tracking-widest hover:border-[#6324FC] hover:text-[#6324FC] transition-all cursor-pointer font-medium"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                /* ---------------- FORM VIEW ---------------- */
                <motion.form
                  key="form-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  {/* Step 1: Select Inquiry Type */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="font-heading text-xs tracking-widest uppercase font-semibold text-primary/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                        01. Objective Classification
                      </label>
                      <span className="text-xs text-primary/40">Select one</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {inquiryTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = inquiryType === type.id;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setInquiryType(type.id)}
                            className={`flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? "bg-[#6324FC]/10 border-[#6324FC] text-[#6324FC] dark:text-white shadow-[0_0_20px_rgba(99,36,252,0.15)]"
                                : "bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 text-primary/70 hover:border-[#6324FC]/40 hover:text-primary"
                            }`}
                          >
                            <Icon className="w-5 h-5 mb-2" />
                            <span className="font-heading text-xs capitalize tracking-tight font-medium">
                              {type.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Contact Details */}
                  <div className="space-y-4">
                    <label className="font-heading text-xs tracking-widest uppercase font-semibold text-primary/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                      02. Identity & Enterprise Information
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-heading uppercase tracking-wider text-primary/60">
                          Full Name <span className="text-[#6324FC]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Visionary"
                            className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-[#6324FC] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-heading uppercase tracking-wider text-primary/60">
                          Work Email <span className="text-[#6324FC]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@enterprise.com"
                            className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-[#6324FC] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-heading uppercase tracking-wider text-primary/60">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Global Inc."
                          className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-[#6324FC] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-heading uppercase tracking-wider text-primary/60">
                          WhatsApp / Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 019-2831"
                          className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 font-sans text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-[#6324FC] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Required Engineering Services */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="font-heading text-xs tracking-widest uppercase font-semibold text-primary/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                        03. Capability Alignment
                      </label>
                      <span className="text-xs text-primary/40">Select all that apply</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {serviceOptions.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`px-4 py-2.5 rounded-xl border font-heading text-xs tracking-tight transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? "bg-[#6324FC] border-[#6324FC] text-white shadow-[0_0_15px_rgba(99,36,252,0.3)]"
                                : "bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 text-primary/70 hover:border-[#6324FC]/50 hover:text-primary"
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 4: Strategic Investment Range */}
                  <div className="space-y-4">
                    <label className="font-heading text-xs tracking-widest uppercase font-semibold text-primary/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                      04. Anticipated Investment (USD)
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {budgetTiers.map((tier) => {
                        const isSelected = budget === tier;
                        return (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setBudget(tier)}
                            className={`p-3 rounded-xl border text-center font-heading text-xs tracking-tight transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? "bg-[#6324FC]/10 border-[#6324FC] text-[#6324FC] dark:text-white font-medium shadow-[0_0_15px_rgba(99,36,252,0.15)]"
                                : "bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 text-primary/70 hover:border-[#6324FC]/40 hover:text-primary"
                            }`}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 5: Vision & Scope Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="font-heading text-xs tracking-widest uppercase font-semibold text-primary/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                        05. Project Objective & Vision
                      </label>
                      <span className="text-xs text-primary/40 font-mono">
                        {details.length} chars
                      </span>
                    </div>

                    <textarea
                      rows={4}
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Briefly describe your objectives, existing architecture, target timeline, and primary technical challenges..."
                      className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-2xl p-4 sm:p-5 font-sans text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-[#6324FC] focus:ring-1 focus:ring-[#6324FC] transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-heading tracking-wide text-center"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submission Controls */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-2 text-xs text-primary/50">
                      <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                      <span>100% Confidential. Protected by Mutual NDA.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.4)] disabled:opacity-50 disabled:cursor-not-allowed isolate w-full sm:w-auto"
                    >
                      {/* Spinning Border */}
                      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                        <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                      </div>

                      <div className="relative w-full h-full px-8 py-4 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                        
                        <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-sm tracking-[0.15em] text-primary uppercase text-center font-medium">
                          {isSubmitting ? "TRANSMITTING BRIEF..." : "TRANSMIT PROJECT BRIEF"}
                          {isSubmitting ? (
                            <div className="w-4 h-4 border-2 border-[#6324FC] border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          )}
                        </span>
                      </div>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* ----------------------------------------------------
              RIGHT COLUMN: COMMAND CENTERS & DIRECT CHANNELS
              ---------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct VIP Contact Card */}
            <div className="bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading text-xs tracking-widest uppercase font-semibold text-[#6324FC]">
                  Direct Channels
                </span>
                <span className="text-[11px] font-mono text-primary/40">VIP Fast-Track</span>
              </div>

              <div className="space-y-4">
                {/* Email Copy Card */}
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#6324FC]/10 flex items-center justify-center text-[#6324FC] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-heading uppercase tracking-wider text-primary/40">Inquiries & Briefs</div>
                      <a
                        href="mailto:hello@injaazh.com"
                        className="font-heading text-base sm:text-lg text-primary hover:text-[#6324FC] transition-colors truncate block"
                      >
                        hello@injaazh.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:border-[#6324FC] hover:text-[#6324FC] text-primary/60 transition-all cursor-pointer shrink-0"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Instant Modal Trigger Button */}
                <button
                  onClick={() => openModal()}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 border border-[#6324FC]/30 hover:border-[#6324FC] flex items-center justify-between transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6324FC] flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(99,36,252,0.4)]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-heading uppercase tracking-wider text-[#6324FC] font-semibold">Guided Wizard</div>
                      <div className="font-heading text-sm text-primary font-medium">Launch Interactive Pipeline Modal</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Global Command Centers (Live Clocks) */}
            <div className="bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 font-heading text-xs tracking-widest uppercase font-semibold text-primary/80">
                  <Globe2 className="w-4 h-4 text-[#6324FC]" />
                  Global Command Centers
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-green-600 dark:text-green-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  Live Sync
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {globalOffices.map((office) => {
                  const clock = timeState[office.city] || { time: "--:--:--", isOpen: false };
                  return (
                    <div
                      key={office.city}
                      className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-[#6324FC]/30 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading text-base font-medium text-primary">
                          {office.city}
                        </span>
                        <span
                          className={`text-[9px] font-heading uppercase px-2 py-0.5 rounded-full border ${
                            clock.isOpen
                              ? "border-green-500/30 text-green-500 bg-green-500/10"
                              : "border-primary/20 text-primary/40 bg-primary/5"
                          }`}
                        >
                          {clock.isOpen ? "Open" : "Standby"}
                        </span>
                      </div>

                      <div className="font-mono text-sm text-[#6324FC] mb-2 font-medium tracking-wide">
                        {clock.time}
                      </div>

                      <div className="text-xs text-primary/50 font-light leading-snug">
                        {office.address}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive FAQ Card */}
            <div className="bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <h2 className="font-heading text-xs tracking-widest uppercase font-semibold text-primary/80 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                Frequently Clarified Inquiries
              </h2>

              <div className="space-y-3">
                {faqItems.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden transition-all bg-black/[0.01] dark:bg-white/[0.01]"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full px-4 py-3.5 flex items-center justify-between text-left gap-4 cursor-pointer hover:text-[#6324FC] transition-colors"
                      >
                        <span className="font-heading text-xs font-medium tracking-tight">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-primary/40 transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-180 text-[#6324FC]" : ""
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
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pt-1 text-xs text-primary/60 font-light leading-relaxed border-t border-black/5 dark:border-white/5">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
