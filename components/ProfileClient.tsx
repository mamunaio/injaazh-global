"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  AtSign,
  Code,
  Globe,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { TeamMember } from "@/lib/teamData";

export default function ProfileClient({ member }: { member: TeamMember }) {
  return (
    <main
      className="bg-[#F5F5F0] dark:bg-[#060608] min-h-screen text-primary dark:text-white selection:bg-[#6324FC] overflow-hidden"
      style={{ "--member-color": member.color } as React.CSSProperties}
    >
      {/* 1. Profile Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end py-20 px-6 lg:px-12 bg-[#F0EEF8] dark:bg-[#060608]">
        {/* Dynamic Glow Orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[var(--member-color)]/20 to-transparent blur-[120px] rounded-full animate-pulse pointer-events-none"
          style={{ animationDuration: "6s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/40 to-transparent z-10 pointer-events-none" />

        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            priority
            className="object-cover object-top opacity-50 grayscale mix-blend-luminosity hover:mix-blend-normal hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
        </div>

        {/* Floating Nav Back */}
        <div className="fixed top-32 left-6 lg:left-12 z-50">
          <Link
            href="/team"
            className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-heading text-[10px] tracking-widest uppercase text-white hover:bg-[var(--member-color)] hover:border-[var(--member-color)] hover:shadow-[0_0_30px_var(--member-color-30)] transition-all duration-500 shadow-2xl"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO ROSTER
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex w-fit px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-heading text-[10px] tracking-[0.3em] text-white capitalize mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--member-color)] mr-3 animate-pulse" />
              {member.role}
            </div>
            <h1 className="font-heading text-6xl md:text-[8rem] leading-[0.85] tracking-tighter capitalize text-white mb-6">
              {member.name.split(" ")[0]} <br />
              <span className="text-[var(--member-color)] italic">
                {member.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Social Links Panel */}
            <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <div className="font-heading text-[9px] tracking-widest text-white/40 uppercase mb-2">
                Connect Network
              </div>
              <div className="flex items-center gap-3">
                {member.socials?.linkedin && (
                  <Link
                    href={member.socials.linkedin}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--member-color)] hover:border-[var(--member-color)] transition-all shadow-sm group"
                  >
                    <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {member.socials?.twitter && (
                  <Link
                    href={member.socials.twitter}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--member-color)] hover:border-[var(--member-color)] transition-all shadow-sm group"
                  >
                    <AtSign className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {member.socials?.github && (
                  <Link
                    href={member.socials.github}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--member-color)] hover:border-[var(--member-color)] transition-all shadow-sm group"
                  >
                    <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {member.socials?.website && (
                  <Link
                    href={member.socials.website}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--member-color)] hover:border-[var(--member-color)] transition-all shadow-sm group"
                  >
                    <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {member.socials?.email && (
                  <Link
                    href={member.socials.email}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--member-color)] hover:border-[var(--member-color)] transition-all shadow-sm group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Deep Dive Bio & Expertise */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            <div className="font-heading text-4xl leading-tight tracking-tight text-[#060608] dark:text-white">
              "{member.bio}"
            </div>
            
            <div className="space-y-6">
              {member.extendedBio ? (
                member.extendedBio.map((paragraph, index) => (
                  <p key={index} className="font-sans font-light text-xl text-[#060608]/60 dark:text-white/60 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="font-sans font-light text-xl text-[#060608]/60 dark:text-white/60 leading-relaxed">
                  More detailed biography and career highlights will be updated soon.
                </p>
              )}
            </div>
          </div>

          {/* Right: Expertise & Extended Info */}
          <div className="lg:col-span-5 flex flex-col space-y-16">
            
            {/* Core Competencies */}
            {member.expertise && member.expertise.length > 0 && (
              <div>
                <h3 className="font-heading text-[11px] tracking-[0.5em] text-[var(--member-color)] uppercase mb-8">
                  Core Competencies
                </h3>
                <div className="flex flex-col space-y-4">
                  {member.expertise.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4 border-b border-[#060608]/10 dark:border-white/10 pb-4">
                      <CheckCircle2 className="w-5 h-5 text-[var(--member-color)]" />
                      <span className="font-sans text-lg font-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience */}
            {member.experience && member.experience.length > 0 && (
              <div>
                <h3 className="font-heading text-[11px] tracking-[0.5em] text-[#060608]/40 dark:text-white/40 uppercase mb-8">
                  Professional Experience
                </h3>
                <div className="flex flex-col space-y-8">
                  {member.experience.map((exp, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-sans text-xl font-medium text-[#060608] dark:text-white">{exp.role}</h4>
                        <span className="font-heading text-[10px] tracking-widest text-[var(--member-color)]">{exp.duration}</span>
                      </div>
                      <div className="font-sans text-sm text-[#060608]/60 dark:text-white/60 mb-2">{exp.company}</div>
                      <p className="font-sans font-light text-sm text-[#060608]/80 dark:text-white/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div>
                <h3 className="font-heading text-[11px] tracking-[0.5em] text-[#060608]/40 dark:text-white/40 uppercase mb-8">
                  Key Achievements
                </h3>
                <div className="flex flex-col space-y-4">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--member-color)] mt-2 shrink-0" />
                      <span className="font-sans font-light text-base text-[#060608]/80 dark:text-white/80 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Strategic Tags */}
            <div>
              <h3 className="font-heading text-[11px] tracking-[0.5em] text-[#060608]/40 dark:text-white/40 uppercase mb-8">
                Strategic Domains
              </h3>
              <div className="flex flex-wrap gap-3">
                {member.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 rounded-full border border-[#060608]/10 dark:border-white/10 bg-[#060608]/5 dark:bg-white/5 font-heading text-[10px] tracking-widest text-[#060608]/80 dark:text-white/80 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Next Action */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto text-center py-24 border-t border-[#060608]/10 dark:border-white/5">
        <Link href="/contact" className="group inline-flex flex-col items-center">
          <div className="font-heading text-[11px] tracking-[0.8em] text-[var(--member-color)] capitalize mb-8">
            Work With Us
          </div>
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize group-hover:text-[var(--member-color)] transition-colors duration-500 mb-12">
            START A <br/> <span className="italic">PROJECT.</span>
          </h2>
          <div className="w-16 h-16 rounded-full bg-[#060608] dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
            <ArrowRight className="w-6 h-6 text-white dark:text-[#060608] group-hover:-rotate-45 transition-transform" />
          </div>
        </Link>
      </section>
    </main>
  );
}
