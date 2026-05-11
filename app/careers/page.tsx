"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Cpu, Users, Heart, Briefcase, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const jobs = [
  {
    title: "Senior Next.js Developer",
    type: "FULL-TIME / REMOTE",
    location: "GLOBAL (EST/GMT)",
    desc: "We are looking for a performance-obsessed Next.js architect to build high-scale headless architectures for global brands.",
    requirements: ["5+ years React/Next.js experience", "Expertise in Core Web Vitals", "Experience with Headless CMS (Sanity/Contentful)"]
  },
  {
    title: "SEO Strategist (Technical)",
    type: "FULL-TIME / REMOTE",
    location: "UK / EUROPE",
    desc: "Lead technical SEO audits and growth strategies for high-intent B2B and E-commerce clients across Western markets.",
    requirements: ["Proven track record in Technical SEO", "Expertise in Search Console & Ahrefs", "Understanding of Semantic Search"]
  },
  {
    title: "Performance Marketing Manager",
    type: "CONTRACT / REMOTE",
    location: "US / CANADA",
    desc: "Architect and manage high-ROAS Google and Meta ad campaigns for global enterprise clients.",
    requirements: ["$50k+ monthly spend management", "Data-driven mindset", "Expertise in conversion tracking"]
  }
];

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<number | null>(null);

  return (
    <main className="bg-[#060608] min-h-screen pt-32 lg:pt-48 pb-32 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 1. Hero Section */}
        <div className="mb-32 lg:mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-[#6324FC]" />
            <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Join the Collective</span>
          </motion.div>
          
          <h1 className="font-heading text-8xl md:text-[10vw] leading-[0.85] tracking-tighter text-white uppercase mb-16">
            ENGINEER THE <br/>
            <span className="stroke-text text-transparent italic opacity-40">FUTURE WITH US.</span>
          </h1>
          
          <p className="font-sans font-light text-2xl md:text-3xl text-white/40 max-w-3xl leading-relaxed border-l-2 border-[#6324FC] pl-8">
            We don't hire employees. We recruit elite digital architects and growth hackers to build the infrastructure of 2027.
          </p>
        </div>

        {/* 2. Values / Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-48">
          {[
            { icon: Globe, title: "100% Remote", desc: "Work from anywhere on Earth. We value output over office hours." },
            { icon: Zap, title: "Elite Velocity", desc: "We move fast, ship daily, and dominate markets with technical precision." },
            { icon: Heart, title: "Growth Budget", desc: "Unlimited books, courses, and conferences to sharpen your lethal edge." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-700 backdrop-blur-xl"
            >
              <item.icon className="w-10 h-10 text-[#6324FC] mb-8" />
              <h3 className="font-heading text-3xl text-white mb-4 uppercase">{item.title}</h3>
              <p className="font-sans font-light text-white/40 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. Open Positions (Job Board) */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-20">
            <h2 className="font-heading text-6xl text-white uppercase tracking-tighter">Open <span className="italic text-[#6324FC]">Missions</span></h2>
            <div className="hidden md:flex items-center gap-4 text-white/20 font-mono text-[10px] tracking-widest uppercase">
               <span>Total Active: {jobs.length}</span>
               <div className="w-1 h-1 rounded-full bg-[#6324FC]" />
               <span>Global Intake</span>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                <button 
                  onClick={() => setOpenJob(openJob === idx ? null : idx)}
                  className="w-full text-left p-8 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] tracking-widest text-[#6324FC] px-3 py-1 bg-[#6324FC]/10 rounded-full">{job.type}</span>
                      <span className="font-mono text-[9px] tracking-widest text-white/30">{job.location}</span>
                    </div>
                    <h3 className="font-heading text-3xl lg:text-4xl text-white group-hover:text-[#6324FC] transition-colors">{job.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-[#6324FC] group-hover:text-white transition-all">
                        {openJob === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                     </div>
                  </div>
                </button>

                <motion.div 
                  initial={false}
                  animate={{ height: openJob === idx ? "auto" : 0 }}
                  className="overflow-hidden bg-white/[0.01]"
                >
                  <div className="p-8 lg:p-12 pt-0 lg:pt-0 space-y-10 border-t border-white/[0.03]">
                    <div className="max-w-3xl space-y-6">
                      <p className="font-sans font-light text-xl text-white/50 leading-relaxed">
                        {job.desc}
                      </p>
                      
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">Baseline Requirements:</span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-center gap-3 font-sans text-sm text-white/40">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link 
                      href={`/careers/apply?role=${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center gap-4 px-10 py-5 bg-[#6324FC] rounded-full text-white font-heading text-lg tracking-widest hover:bg-white hover:text-black transition-all group/btn"
                    >
                      INITIATE APPLICATION
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Bottom CTA */}
        <div className="mt-48 text-center py-24 border-t border-white/5">
          <h2 className="font-heading text-5xl text-white mb-8">DON&apos;T SEE YOUR ROLE?</h2>
          <p className="font-sans text-white/40 text-xl mb-12 max-w-xl mx-auto italic">
            "If you are exceptionally lethal at what you do, we will create a mission for you."
          </p>
          <Link href="/contact" className="font-mono text-sm tracking-widest text-[#6324FC] hover:text-white transition-colors border-b border-[#6324FC]">
             SEND US A SPECULATIVE DECK →
          </Link>
        </div>

      </div>
    </main>
  );
}
