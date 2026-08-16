"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Globe,
  Mail,
  Link2,
  ArrowUpRight,
  MoveRight,
  Plus,
  Hash,
  User,
  Target,
  Zap,
  Briefcase,
  AtSign,
  Code,
} from "lucide-react";
import Counter from "@/components/Counter";
import { teamMembers } from "@/lib/teamData";

export default function TeamClient() {
  const router = useRouter();

  return (
    <main className="bg-[#F5F5F0] dark:bg-[#060608] min-h-screen text-primary dark:text-white selection:bg-[#6324FC]">
      {/* 1. Ultra-Premium Hero Section — Agency-style gradient, no image */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] py-20 md:py-32 flex items-center justify-center overflow-hidden bg-[#F0EEF8] dark:bg-[#060608]">
        {/* Dynamic Glow Orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#6324FC]/15 to-[#00E5FF]/10 dark:from-[#6324FC]/20 dark:to-[#00E5FF]/20 blur-[120px] rounded-full animate-pulse pointer-events-none"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6324FC]/5 via-transparent to-[#F5F5F0]/60 dark:from-[#6324FC]/10 dark:via-transparent dark:to-[#060608]/80 pointer-events-none" />

        {/* Massive watermark text */}
        <div className="absolute inset-0 flex items-center justify-center font-heading text-[18vw] md:text-[14vw] leading-none whitespace-nowrap tracking-tighter text-[#6324FC]/[0.04] dark:text-white/[0.02] text-center w-full select-none pointer-events-none">
          TEAM
        </div>

        <div className="relative z-20 w-full max-w-[1400px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left"
          >
            <div className="font-heading text-[10px] tracking-[0.8em] text-[#6324FC] capitalize mb-6 ml-[0.8em]">
              The Collective // Talent 0x88
            </div>
            <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-4 text-[#060608] dark:text-white">
              THE MINDS <br />
              BEHIND <span className="text-[#6324FC]">INJAAZH.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Surgical Talent Gallery */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              style={{
                "--member-color": member.color,
                "--member-color-30": `${member.color}4D`,
                "--member-color-40": `${member.color}66`,
                "--member-color-60": `${member.color}99`,
              } as React.CSSProperties}
              className="group relative h-[650px] rounded-[3rem] overflow-hidden border border-[#060608]/10 dark:border-white/5 hover:border-[var(--member-color-30)] transition-all duration-700 bg-[#EEECEA] dark:bg-white/[0.02]"
            >
              {/* Main Card Link - Covers everything */}
              <Link href={`/team/${member.slug}`} className="absolute inset-0 z-10" />
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-60 group-hover:opacity-100"
                />
                {/* Always-dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content Overlay - pointer-events-none so it doesn't block the main Link */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 lg:p-12 pointer-events-none">
                {/* Meta (Top Right ID) */}
                <div className="absolute top-10 right-10 font-heading text-[10px] text-white/20 group-hover:text-[var(--member-color-60)] transition-colors">
                  {member.id} // SECURE
                </div>

                {/* Role Badge */}
                <div className="inline-flex w-fit px-3 py-1.5 bg-[var(--member-color-30)] backdrop-blur-md border border-[var(--member-color-40)] rounded-full font-heading text-[9px] tracking-[0.2em] text-sky-100 capitalize mb-6 group-hover:bg-[var(--member-color)] group-hover:border-[var(--member-color)] group-hover:text-white transition-all duration-500">
                  {member.role}
                </div>

                {/* Name - white always since it overlays the image */}
                <h3 className="font-heading text-4xl lg:text-5xl leading-[0.85] tracking-tighter capitalize mb-8 text-sky-100 group-hover:text-[var(--member-color)] transition-colors duration-500">
                  {member.name}
                </h3>

                {/* Description & Links */}
                <div className="h-0 group-hover:h-44 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col">
                  <p className="font-sans font-light text-sm text-sky-100/60 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 flex-wrap mt-auto pointer-events-auto">
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sky-100 hover:bg-[var(--member-color)] hover:border-[var(--member-color)] hover:text-white transition-all shadow-sm"
                      >
                        <Briefcase className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sky-100 hover:bg-[var(--member-color)] hover:border-[var(--member-color)] hover:text-white transition-all shadow-sm"
                      >
                        <AtSign className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sky-100 hover:bg-[var(--member-color)] hover:border-[var(--member-color)] hover:text-white transition-all shadow-sm"
                      >
                        <Code className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.website && (
                      <a
                        href={member.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sky-100 hover:bg-[var(--member-color)] hover:border-[var(--member-color)] hover:text-white transition-all shadow-sm"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.email && (
                      <a
                        href={member.socials.email}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sky-100 hover:bg-[var(--member-color)] hover:border-[var(--member-color)] hover:text-white transition-all shadow-sm"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-[var(--member-color)] w-0 group-hover:w-full transition-all duration-1000" />
                </div>
              </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Global Stats Bento */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-16 md:py-24 border-t border-[#060608]/10 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 p-16 rounded-[4rem] bg-white dark:bg-white/[0.02] border border-[#060608]/10 dark:border-white/5 flex flex-col justify-center space-y-8 shadow-sm">
            <div className="font-heading text-[10px] text-[#6324FC] tracking-[0.5em] capitalize">
              Global Sync
            </div>
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize">
              BASED IN BANGLADESH. <br />
              <span className="stroke-text text-transparent italic opacity-20">
                SERVICING THE GLOBE.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-[#6324FC] text-white flex flex-col justify-between">
            <Zap className="w-12 h-12 opacity-30 text-white" />
            <div className="font-heading text-8xl leading-none tracking-tighter text-white">
              <Counter value="100%" />
            </div>
            <div className="font-heading text-[10px] tracking-[0.4em] capitalize opacity-60 text-white">
              Success Rate
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center border-t border-[#060608]/10 dark:border-white/5">
        <Link href="/contact" className="group flex flex-col items-center">
          <div className="font-heading text-[11px] tracking-[0.8em] text-primary/40 capitalize mb-12">
            Next Move
          </div>
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize text-primary group-hover:text-[#6324FC] transition-colors duration-700 italic">
            JOIN THE SQUAD.
          </h2>
          <div className="mt-20 relative w-32 h-32 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-2xl isolate">
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>
            <div className="relative w-full h-full rounded-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <Plus className="relative z-10 w-12 h-12 text-[#6324FC] group-hover:rotate-90 transition-all duration-700" />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
