"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ExternalLink, Mail, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamPreviewData = [
  {
    id: "01",
    name: "Md Mamun Hossain",
    role: "Founder & Chief Architect",
    image: "/assets/mamun.ceo.webp",
    bio: "Architecting high-scale digital flagships, international technical SEO dominance, and high-velocity engineering squads.",
    specialty: "System Architecture & Growth Strategy",
    badge: "FOUNDER",
    color: "#6324FC",
  },
  {
    id: "02",
    name: "Imtiaz Ahmed",
    role: "Head of Global Operations",
    image: "/assets/team_imtiaz_real.webp",
    bio: "Driving global operational excellence, client SLA compliance, and cross-timezone project delivery with surgical precision.",
    specialty: "Global Delivery & SLA Enforcement",
    badge: "OPERATIONS",
    color: "#00E5FF",
  },
  {
    id: "03",
    name: "Sakib Hasan Ruhin",
    role: "Co-Founder & Tech Lead",
    image: "/assets/team_ruhin_real.webp",
    bio: "Translating complex enterprise requirements into lightning-fast Next.js 15 frontends and frictionless digital experiences.",
    specialty: "Next.js 15 & UI Architecture",
    badge: "TECH LEAD",
    color: "#00FFA3",
  },
  {
    id: "04",
    name: "Ismail Hossain",
    role: "Senior Backend Architect",
    image: "/assets/team_ismail_real.webp",
    bio: "Engineering resilient cloud microservices, high-concurrency database pipelines, and secure API architectures.",
    specialty: "Cloud Infrastructure & APIs",
    badge: "BACKEND ARCHITECT",
    color: "#FF2D55",
  },
];

export default function TeamPreview() {
  return (
    <section className="w-full bg-[#060608] py-20 md:py-28 border-t border-white/5 relative overflow-hidden text-white">
      {/* Background Ambient Glows - GPU Accelerated */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(99,36,252,0.12)_0%,transparent_70%)] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          {/* Eyebrow Kicker */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-gradient-to-r from-[#6324FC] to-[#00E5FF]"
            />
            <span className="font-mono text-xs md:text-sm tracking-[0.45em] text-[#6324FC] uppercase font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              THE COLLECTIVE // LEADERSHIP & ARCHITECTURE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
            {/* Signature Triad Heading */}
            <div className="max-w-2xl">
              <h2 className="sr-only">
                The Minds Behind Injaazh: Leadership, Web Architects, and Technical SEO Engineers
              </h2>
              <div
                aria-hidden="true"
                className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white"
              >
                <span className="text-white mr-3 md:mr-4">THE MINDS</span>
                <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
                  BEHIND
                </span>
                <br />
                <span className="stroke-text opacity-95">INJAAZH.</span>
              </div>

              {/* Executive Capability Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                  FOUNDER-LED ARCHITECTURE
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  CROSS-TIMEZONE SQUAD
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                  100% IN-HOUSE TALENT
                </div>
              </div>
            </div>

            {/* Editorial Authority Copy */}
            <div className="max-w-lg">
              <p className="font-sans font-light text-white/75 text-sm sm:text-base leading-relaxed border-l-2 border-[#6324FC]/60 pl-5 sm:pl-6 py-0.5 mb-4">
                A specialized collective of enterprise software architects, technical SEO scientists, and digital growth engineers — operating with surgical precision to outperform legacy agencies ten times our size.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 pl-5 sm:pl-6">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>DIRECT ACCESS TO PRINCIPAL ARCHITECTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 md:mb-20">
          {teamPreviewData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[3/4.2] rounded-[2.5rem] border border-white/[0.08] hover:border-[#6324FC]/50 transition-all duration-700 overflow-hidden backdrop-blur-xl bg-[#0A0A0E] shadow-2xl"
            >
              {/* Member Image with Smooth Grayscale to Color Reveal */}
              <div className="absolute inset-0 grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Rich Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/50 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-700" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${member.color}, transparent 60%)`,
                }}
              />

              {/* Top Bar with Member ID and Badge */}
              <div className="absolute top-6 inset-x-6 flex items-center justify-between z-10">
                <span className="font-mono text-xs font-semibold text-white/50 bg-[#060608]/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/[0.08]">
                  // {member.id}
                </span>
                <span
                  className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border"
                  style={{
                    backgroundColor: `${member.color}15`,
                    borderColor: `${member.color}35`,
                    color: member.color,
                  }}
                >
                  {member.badge}
                </span>
              </div>

              {/* Profile Details Container */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col z-10">
                <div
                  className="w-8 h-[2px] mb-4 group-hover:w-16 transition-all duration-500 ease-out"
                  style={{ backgroundColor: member.color }}
                />

                {/* Role Pill */}
                <div
                  className="inline-flex w-fit px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase mb-3 border backdrop-blur-md"
                  style={{
                    backgroundColor: `${member.color}15`,
                    borderColor: `${member.color}30`,
                    color: member.color,
                  }}
                >
                  {member.role}
                </div>

                {/* Member Name */}
                <h3 className="font-heading text-2xl sm:text-3xl tracking-tight text-white mb-1 leading-tight group-hover:text-white transition-colors">
                  {member.name.split(" ")[0]} <br />
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {member.name.split(" ").slice(1).join(" ")}
                  </span>
                </h3>

                {/* Specialty Pill */}
                <div className="font-mono text-[11px] text-white/50 mb-2 truncate">
                  {member.specialty}
                </div>

                {/* Expandable Bio & Social Links Drawer */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="font-sans font-light text-xs text-white/70 leading-relaxed pt-2 pb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-2.5 border-t border-white/[0.08] pt-3">
                      <Link
                        href="#"
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#6324FC] hover:bg-[#6324FC]/20 transition-all duration-300"
                        aria-label="Website"
                      >
                        <Globe className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5FF] hover:bg-[#00E5FF]/20 transition-all duration-300"
                        aria-label="Portfolio link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00FFA3] hover:bg-[#00FFA3]/20 transition-all duration-300"
                        aria-label="Contact email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Corner Accent on Hover */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: member.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="flex justify-center">
          <Link href="/team" className="group block w-full md:w-auto relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 w-full hover:shadow-[0_0_35px_rgba(99,36,252,0.35)] isolate"
            >
              {/* Infinite 360-degree rotating conic gradient */}
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>

              <div className="relative w-full h-full px-8 py-4 md:px-12 md:py-5 rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />

                <span className="relative z-10 flex items-center justify-center gap-4 font-heading md:text-lg tracking-[0.2em] text-white uppercase text-center font-bold">
                  MEET THE ENTIRE SQUAD
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#00E5FF]" />
                </span>
              </div>
            </motion.div>

            <div className="absolute -inset-4 bg-[#6324FC]/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}
