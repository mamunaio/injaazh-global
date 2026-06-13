"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Link2, ArrowUpRight, MoveRight, Plus, Hash, User, Target, Zap } from "lucide-react";

const teamMembers = [
  {
    id: "01",
    name: "Md Mamun Hossain",
    role: "Founder & Chief Architect",
    bio: "The visionary leader behind INJAAZH, MD Mamun specializes in orchestrating digital ecosystems that drive exponential growth for global enterprises.",
    image: "/assets/mamun.ceo.webp",
    color: "#6324FC",
    tags: ["Strategy", "Vision", "Growth"]
  },
  {
    id: "02",
    name: "Imtiaz Ahmed",
    role: "Head of Global Operations",
    bio: "Driving operational excellence, Imtiaz ensures that every project at INJAAZH is executed with surgical precision and absolute efficiency.",
    image: "/assets/team_imtiaz_real.webp",
    color: "#4A90E2",
    tags: ["Operations", "Precision", "Delivery"]
  },
  {
    id: "03",
    name: "Sakib Hasan Ruhin",
    role: "Co-Founder & Tech Lead",
    bio: "A technical strategist who bridges the gap between complex software engineering and high-level business objectives.",
    image: "/assets/team_ruhin_real.webp",
    color: "#50E3C2",
    tags: ["Technology", "Strategy", "Execution"]
  },
  {
    id: "04",
    name: "Ismail Hossain",
    role: "Senior Backend Architect",
    bio: "Specializing in robust backend architectures, Ismail builds secure and scalable server-side systems that power high-traffic platforms.",
    image: "/assets/team_ismail_real.webp",
    color: "#F5A623",
    tags: ["Backend", "Laravel", "Security"]
  },
  {
    id: "05",
    name: "Khandakar Shanto",
    role: "Lead Full-Stack Engineer",
    bio: "An expert in modern full-stack development, Shanto crafts real-time web applications with a focus on speed and interactive fluidity.",
    image: "/assets/team_shanto_real.webp",
    color: "#BD10E0",
    tags: ["Full-Stack", "React", "Real-time"]
  },
  {
    id: "06",
    name: "Arafat Al Siam",
    role: "Creative Frontend Developer",
    bio: "Passionate about cutting-edge interfaces, Arafat builds reactive web experiences that push the boundaries of modern user engagement.",
    image: "/assets/team_siam_real.webp",
    color: "#9013FE",
    tags: ["Frontend", "UX", "Performance"]
  },
  {
    id: "07",
    name: "Rakibuzaman Siam",
    role: "Global Growth Strategist",
    bio: "A growth-focused strategist who specializes in connecting high-end services with high-value international opportunities.",
    image: "/assets/team_rakib.webp",
    color: "#7ED321",
    tags: ["Marketing", "Leads", "Growth"]
  },
  {
    id: "08",
    name: "Saikat",
    role: "Market Intelligence Analyst",
    bio: "Optimizing the outreach funnel, Saikat leverages market intelligence to drive meaningful engagement and high-quality leads.",
    image: "/assets/team_saikat.webp",
    color: "#F8E71C",
    tags: ["Intelligence", "Market", "Outreach"]
  }
];

export default function TeamPage() {
  return (
    <main className="bg-[#060608] min-h-screen text-white selection:bg-[#6324FC]">
      
      {/* 1. Ultra-Premium Hero Section */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] py-20 md:py-32 flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero_bg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-35 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#060608]/80 to-[#060608]" />
        </div>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-10" />
        
        <div className="relative z-20 w-full max-w-[1400px] px-6 lg:px-12">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="text-center md:text-left"
           >
              <div className="font-heading text-[10px] tracking-[0.8em] text-[#6324FC] capitalize mb-6 ml-[0.8em]">The Collective // Talent 0x88</div>
              <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-4">
                 THE MINDS <br/>
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
                className="group relative h-[650px] rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-700"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 lg:p-12">
                   
                   {/* Meta (Top Right ID) */}
                   <div className="absolute top-10 right-10 font-heading  text-[10px] text-white/10 group-hover:text-[#6324FC]/40 transition-colors">
                      {member.id} // SECURE
                   </div>

                   {/* Role Badge - Homepage Style */}
                   <div className="inline-flex w-fit px-3 py-1.5 bg-[#6324FC]/20 backdrop-blur-md border border-[#6324FC]/30 rounded-full font-heading  text-[9px] tracking-[0.2em] text-[#E0D4FF] capitalize mb-6 group-hover:bg-[#6324FC] group-hover:border-[#6324FC] group-hover:text-white transition-all duration-500">
                      {member.role}
                   </div>

                   {/* Name */}
                   <h3 className="font-heading text-4xl lg:text-5xl leading-[0.85] tracking-tighter capitalize mb-8 group-hover:text-[#6324FC] transition-colors duration-500">
                     {member.name}
                   </h3>

                   {/* Description & Links */}
                   <div className="h-0 group-hover:h-40 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <p className="font-sans font-light text-sm text-white/40 mb-10 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex items-center gap-6">
                         <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#6324FC] hover:border-[#6324FC] transition-all">
                            <Link2 className="w-4 h-4" />
                         </Link>
                         <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#6324FC] hover:border-[#6324FC] transition-all">
                            <Mail className="w-4 h-4" />
                         </Link>
                      </div>
                   </div>

                   <div className="absolute bottom-0 left-0 h-1 bg-[#6324FC] w-0 group-hover:w-full transition-all duration-1000" />
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 3. Global Stats Bento */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-16 md:py-24 border-t border-white/5">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center space-y-8">
               <div className="font-heading  text-[10px] text-[#6324FC] tracking-[0.5em] capitalize ">Global Sync</div>
               <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize ">
                  BASED IN BANGLADESH. <br/>
                  <span className="stroke-text text-transparent italic opacity-20">SERVICING THE GLOBE.</span>
               </h2>
            </div>
            <div className="lg:col-span-4 p-12 rounded-[3.5rem] bg-[#6324FC] text-white flex flex-col justify-between">
               <Zap className="w-12 h-12 opacity-30" />
               <div className="font-heading text-8xl leading-none tracking-tighter">100%</div>
               <div className="font-heading  text-[10px] tracking-[0.4em] capitalize opacity-60">Success Rate</div>
            </div>
         </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto text-center border-t border-white/5">
         <Link href="/contact" className="group flex flex-col items-center">
            <div className="font-heading  text-[11px] tracking-[0.8em] text-white/30 capitalize mb-12">Next Move</div>
            <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize text-white group-hover:text-[#6324FC] transition-colors duration-700 italic">
               JOIN THE SQUAD.
            </h2>
            <div className="mt-20 relative w-32 h-32 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-2xl isolate">
               <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                 <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
               </div>
               <div className="relative w-full h-full rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
                 <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                 <Plus className="relative z-10 w-12 h-12 text-[#6324FC] group-hover:text-white group-hover:rotate-90 transition-all duration-700" />
               </div>
            </div>
         </Link>
      </section>

    </main>
  );
}
