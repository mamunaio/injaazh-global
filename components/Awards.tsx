"use client";

import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Zap } from "lucide-react";

const awards = [
  {
    platform: "Clutch",
    detail: "Top Digital Agency 2024",
    score: "4.9 / 5.0",
    icon: Award,
    color: "group-hover:text-blue-400"
  },
  {
    platform: "DesignRush",
    detail: "Top Full-Service Agency",
    score: "Verified Partner",
    icon: ShieldCheck,
    color: "group-hover:text-red-400"
  },
  {
    platform: "G2",
    detail: "Enterprise High Performer",
    score: "4.9 / 5.0",
    icon: Star,
    color: "group-hover:text-green-400"
  },
  {
    platform: "Google",
    detail: "5-Star Rated",
    score: "5.0 / 5.0",
    icon: Zap,
    color: "group-hover:text-yellow-400"
  }
];

export default function Awards() {
  return (
    <section className="w-full bg-[#08080A] py-16 md:py-24 border-t border-white/[0.03] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#6324FC]/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header (Left Side) */}
          <div className="lg:w-1/2 lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-[#6324FC]" />
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#6324FC] uppercase">VALIDATED EXCELLENCE</span>
            </div>
            
            <div className="relative">
              <h2 className="font-heading text-5xl md:text-7xltracking-tighter text-white leading-[0.8] uppercase mb-12">
                INDUSTRY <br/>
                <span className="stroke-white italic opacity-80">AWARDS.</span>
              </h2>
              {/* Background Text */}
              <div className="absolute -top-10 -left-10 text-[15rem] font-heading font-black text-white/[0.02] pointer-events-none uppercase tracking-tighter select-none">
                Trust
              </div>
            </div>

            <p className="font-sans font-light text-white/30 text-xl leading-relaxed max-w-lg mb-16 border-l border-white/5 pl-10">
              Our work is recognized by the world's leading digital platforms and industry watchdogs. We don't just compete — we set the benchmark.
            </p>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-[#6324FC] transition-all duration-500">
                <Award className="w-8 h-8 text-white/20 group-hover:text-[#6324FC]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading ">Quality Guaranteed</span>
                <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">ISO 9001:2015 COMPLIANT</span>
              </div>
            </div>
          </div>

          {/* Grid (Right Side) */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {awards.map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-6 lg:p-8 hover:border-[#6324FC]/30 transition-all duration-700 overflow-hidden rounded-3xl flex items-center gap-8"
              >
                {/* Spotlight Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative z-10 w-14 h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 flex-shrink-0">
                  <award.icon className={`w-7 h-7 transition-colors duration-500 ${award.color}`} />
                </div>
                
                <div className="relative z-10 flex-grow">
                  <div className="font-mono text-[8px] text-[#6324FC] uppercase tracking-[0.4em] mb-1">Platform Verified</div>
                  <h3 className="font-heading text-xl text-white tracking-tight group-hover:text-[#6324FC] transition-colors">
                    {award.platform}
                  </h3>
                  <p className="font-sans text-xs text-white/30 group-hover:text-white/60 transition-colors">
                    {award.detail}
                  </p>
                </div>

                <div className="relative z-10 text-right">
                  <span className="font-heading text-xl text-white/80 block mb-1">{award.score}</span>
                  <div className="flex justify-end">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-[#6324FC] text-[#6324FC]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Authenticity Badge */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 text-white/[0.01] group-hover:text-white/[0.03] transition-colors pointer-events-none">
                  <Award className="w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

