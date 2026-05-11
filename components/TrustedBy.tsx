"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Zap, ShoppingBag, Landmark, Building2, Briefcase, Rocket, Sparkles, Monitor } from "lucide-react";

const partners = [
  { name: "E-COMMERCE", icon: ShoppingBag, size: "col-span-2 row-span-1", desc: "Scale-ready retail ecosystems" },
  { name: "FINTECH", icon: Landmark, size: "col-span-1 row-span-2", desc: "Secure digital banking" },
  { name: "SAAS", icon: Cpu, size: "col-span-1 row-span-1", desc: "Cloud infrastructures" },
  { name: "REAL ESTATE", icon: Building2, size: "col-span-1 row-span-1", desc: "Luxury property platforms" },
  { name: "HEALTHCARE", icon: Briefcase, size: "col-span-2 row-span-1", desc: "Next-gen medical interfaces" },
  { name: "STARTUPS", icon: Rocket, size: "col-span-1 row-span-1", desc: "Seed-to-Scale growth" },
  { name: "FASHION", icon: Sparkles, size: "col-span-1 row-span-1", desc: "High-end brand experiences" },
  { name: "TECH", icon: Monitor, size: "col-span-1 row-span-1", desc: "Cutting-edge software" },
  { name: "GLOBAL IMPACT", icon: Globe, size: "col-span-2 row-span-1", desc: "Worldwide market dominance" }
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-[#060608] py-24 lg:py-32 relative overflow-hidden border-b border-white/5">
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6324FC]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#6324FC]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#6324FC]" />
              THE NETWORK
            </motion.div>
            <h1 className="font-heading text-8xl md:text-[9rem] leading-[0.8] tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                TRUSTED BY
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="stroke-text text-transparent italic opacity-40"
              >
                GLOBAL LEADERS
              </motion.div>
            </h1>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-start md:items-end text-left md:text-right"
          >
            <p className="font-sans font-light text-white/40 text-base md:text-lg max-w-[320px] leading-relaxed mb-4">
              We partner with industry pioneers to engineer digital dominance across every sector.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white font-mono text-2xl">1,200+</span>
              <span className="text-white/20 font-mono text-sm uppercase tracking-widest">Active Clients</span>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className={`${partner.size} group relative bg-white/[0.02] border border-white/5 hover:border-[#6324FC]/30 hover:bg-[#6324FC]/5 transition-all duration-500 overflow-hidden p-6 md:p-10 flex flex-col justify-between`}
            >
              {/* Card Glow */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#6324FC]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:bg-[#6324FC] group-hover:border-[#6324FC] transition-all duration-500">
                  <partner.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="font-mono text-[8px] md:text-[10px] tracking-widest text-white/20 uppercase group-hover:text-[#6324FC] transition-colors">
                  Sector 0{idx + 1}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-heading text-xl md:text-2xl tracking-wide text-white mb-2 group-hover:translate-x-1 transition-transform">
                  {partner.name}
                </h3>
                <p className="font-sans font-light text-[10px] md:text-xs text-white/30 tracking-wider uppercase group-hover:text-white/60 transition-colors">
                  {partner.desc}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-2 right-2 w-px h-4 bg-[#6324FC]/50" />
                <div className="absolute bottom-2 right-2 h-px w-4 bg-[#6324FC]/50" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
