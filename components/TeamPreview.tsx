"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamPreviewData = [
  {
    id: "01",
    name: "Md Mamun Hossain",
    role: "Founder & Chief Architect",
    image: "/assets/mamun.ceo.webp",
    bio: "The visionary leader behind INJAAZH, specialized in orchestrating digital growth."
  },
  {
    id: "02",
    name: "Imtiaz Ahmed",
    role: "Head of Global Operations",
    image: "/assets/team_imtiaz_real.webp",
    bio: "Driving operational excellence with surgical precision and efficiency."
  },
  {
    id: "03",
    name: "Sakib Hasan Ruhin",
    role: "Co-Founder & Tech Lead",
    image: "/assets/team_ruhin_real.webp",
    bio: "Bridging the gap between complex engineering and business objectives."
  },
  {
    id: "04",
    name: "Ismail Hossain",
    role: "Senior Backend Architect",
    image: "/assets/team_ismail_real.webp",
    bio: "Building robust backend architectures for high-traffic platforms."
  }
];

export default function TeamPreview() {
  return (
    <section className="w-full bg-[#060608] py-16 md:py-24 pb-0 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading  text-[#6324FC] text-[10px] tracking-[0.5em] capitalize mb-8 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-[#6324FC]" /> 
              THE COLLECTIVE
            </motion.div>
            <h2 className="font-heading text-5xl md:text-7xl tracking-tighter text-white leading-[0.85] capitalize ">
              THE MINDS BEHIND <br/>
              <span className="stroke-white italic opacity-80">INJAAZH.</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm"
          >
            <p className="font-sans font-light text-white/40  leading-relaxed border-l-2 border-[#6324FC] pl-8">
              A global squad of elite digital architects, growth engineers, and SEO strategists — built to outperform agencies ten times our size.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 md:mb-20">
          {teamPreviewData.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[3/4] rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#6324FC]/40 transition-all duration-700 overflow-hidden backdrop-blur-xl"
            >
              {/* Member Image with Grayscale to Color Reveal */}
              <div className="absolute inset-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-out">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Cinematic Vignette & Bottom Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Vertical ID Number */}
              <div className="absolute top-8 left-8 font-heading text-4xl opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 text-white select-none">
                {member.id}
              </div>

              {/* Profile Details Container */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col z-10">
                <div className="w-8 h-[2px] bg-[#6324FC] mb-6 group-hover:w-16 transition-all duration-700 ease-out" />
                
                <div className="inline-flex w-fit px-3 py-1.5 bg-[#6324FC]/20 backdrop-blur-md border border-[#6324FC]/30 rounded-full font-heading  text-[9px] md:text-[10px] tracking-[0.2em] text-[#E0D4FF] capitalize mb-4 whitespace-nowrap group-hover:bg-[#6324FC] group-hover:border-[#6324FC] group-hover:text-white transition-all duration-500">
                  {member.role}
                </div>
                
                <h3 className="font-heading text-3xl tracking-tight text-white mb-2 leading-none group-hover:text-[#6324FC] transition-colors duration-500">
                  {member.name.split(' ')[0]} <br/>
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">{member.name.split(' ').slice(1).join(' ')}</span>
                </h3>
                
                {/* Expandable Bio & Social Links */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="overflow-hidden">
                    <p className="font-sans font-light text-[13px] text-white/50 leading-relaxed pt-4 pb-6 group-hover:text-white/70 transition-colors">
                      {member.bio}
                    </p>
                    <div className="flex gap-5 border-t border-white/10 pt-6">
                      <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                        <Globe className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#6324FC] hover:border-[#6324FC] hover:bg-[#6324FC]/10 transition-all duration-300">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                        <Mail className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6324FC]/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="flex justify-center">
          <Link href="/team" className="group relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-16 py-8 bg-transparent border border-white/10 text-white font-heading text-xl tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 flex items-center gap-8 capitalize "
            >
              {/* Button Hover Background */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                MEET THE ENTIRE SQUAD
              </span>
              <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black transition-colors duration-500">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
            
            {/* CTA Glow */}
            <div className="absolute -inset-4 bg-[#6324FC]/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Link>
        </div>

      </div>
    </section>
  );
}

