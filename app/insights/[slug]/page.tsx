"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { use, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, MessageCircle, ExternalLink, ArrowRight, Quote, MoveRight, Calendar, User, Globe, Link2 } from "lucide-react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mock post data (Enhanced)
  const post = {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: "Engineering // Intelligence",
    author: "Zayd Al-Mansur",
    authorRole: "Technical Director",
    date: "May 04, 2026",
    readTime: "8 MIN READ",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    overview: "The digital landscape of 2026 demands more than just responsive design. It demands architectural integrity, predictive performance, and a soulful connection between human and machine.",
  };

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <main ref={containerRef} className="w-full bg-[#060608] min-h-screen text-white selection:bg-[#6324FC] selection:text-white">
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#6324FC] z-[210] origin-left"
        style={{ scaleX }}
      />

      {/* 1. Cinematic "Editorial" Hero */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover grayscale brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/80 via-transparent to-[#060608]" />
        </motion.div>

        {/* Floating Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay z-10" />

        <div className="relative z-20 w-full max-w-[1400px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center pt-32"
          >
            {/* Back Button - Re-placed here but lowered to clear Navbar/Logo */}
            <Link href="/insights" className="group inline-flex items-center gap-4 mb-16 px-6 py-3 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-md hover:border-[#6324FC] transition-all">
               <ArrowLeft className="w-4 h-4 text-[#6324FC]" />
               <span className="font-heading  text-[9px] tracking-[0.4em] capitalize text-white/40 group-hover:text-white transition-colors">Back to Insights</span>
            </Link>

            <div className="font-heading  text-[10px] tracking-[0.8em] text-[#6324FC] capitalize mb-12 ml-[0.8em]">Insights Archive // 2026</div>
            
            <h1 className="font-heading text-6xl md:text-[10vw] leading-[0.85] tracking-tighter capitalize mb-16">
               {post.title.split(' ').slice(0, 2).join(' ')} <br/>
               <span className="stroke-text text-transparent italic opacity-40">{post.title.split(' ').slice(2).join(' ')}</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-12 font-heading  text-[9px] tracking-[0.4em] capitalize text-white/30">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#6324FC] transition-colors">
                     <User className="w-3.5 h-3.5 text-[#6324FC]" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{post.author}</span>
               </div>
               <div className="flex items-center gap-4">
                  <Calendar className="w-3.5 h-3.5 text-[#6324FC]" />
                  {post.date}
               </div>
               <div className="flex items-center gap-4">
                  <Clock className="w-3.5 h-3.5 text-[#6324FC]" />
                  {post.readTime}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Article Architecture (The Narrative) */}
      <section className="py-32 md:py-48 px-6 lg:px-12 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            
            {/* Left: Metadata & Interactions */}
            <div className="lg:col-span-4 lg:sticky lg:top-48 space-y-20 order-2 lg:order-1">
               <div className="space-y-6">
                  <div className="font-heading  text-[9px] text-[#6324FC] tracking-[0.5em] capitalize ">Core Topic</div>
                  <div className="font-heading text-4xl capitalize tracking-tighter italic">{post.category}</div>
               </div>

               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] space-y-8 backdrop-blur-xl">
                  <div className="font-heading  text-[9px] text-white/20 tracking-[0.5em] capitalize ">Share Intelligence</div>
                  <div className="flex flex-col gap-6">
                     <button className="flex items-center justify-between group">
                        <span className="font-heading  text-[10px] tracking-widest text-white/40 group-hover:text-white transition-colors capitalize ">LinkedIn</span>
                        <Link2 className="w-4 h-4 text-white/10 group-hover:text-[#6324FC] transition-colors" />
                     </button>
                     <button className="flex items-center justify-between group">
                        <span className="font-heading  text-[10px] tracking-widest text-white/40 group-hover:text-white transition-colors capitalize ">Twitter</span>
                        <Globe className="w-4 h-4 text-white/10 group-hover:text-[#6324FC] transition-colors" />
                     </button>
                     <button className="flex items-center justify-between group">
                        <span className="font-heading  text-[10px] tracking-widest text-white/40 group-hover:text-white transition-colors capitalize ">Facebook</span>
                        <Share2 className="w-4 h-4 text-white/10 group-hover:text-[#6324FC] transition-colors" />
                     </button>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="font-heading  text-[9px] text-white/20 tracking-[0.5em] capitalize ">Contributor</div>
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full bg-[#6324FC]/10 border border-[#6324FC]/20 flex items-center justify-center shrink-0">
                        <User className="w-6 h-6 text-[#6324FC]" />
                     </div>
                     <div>
                        <div className="font-heading text-xl capitalize ">{post.author}</div>
                        <div className="font-heading  text-[9px] tracking-widest text-white/40 capitalize ">{post.authorRole}</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: The Body Content */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-24">
               
               {/* Editorial Intro */}
               <div className="relative">
                  <Quote className="absolute -top-12 -left-8 w-24 h-24 text-[#6324FC] opacity-[0.05] pointer-events-none" />
                  <p className="font-sans font-light text-3xl md:text-5xl leading-[1.2] text-white/90 italic tracking-tight">
                     &quot;{post.overview}&quot;
                  </p>
               </div>

               {/* Article Body */}
               <article className="prose prose-invert prose-2xl max-w-none font-sans font-light leading-[1.8] text-white/60">
                  <div className="space-y-12">
                     <p>
                        In the rapidly evolving world of digital architecture, the concept of <span className="text-white font-normal underline decoration-[#6324FC]/50 underline-offset-8">headless</span> has moved from a buzzword to a fundamental necessity. As we look at the benchmarks of 2026, the agencies that dominate are those that have decoupled the presentation layer from the core business logic.
                     </p>
                     
                     <h3 className="font-heading text-5xl text-white tracking-tighter capitalize pt-16 mb-8 italic">
                        The Death of the <span className="text-[#6324FC]">Monolith.</span>
                     </h3>
                     <p>
                        Traditional CMS platforms were built for a web that was static. Today&apos;s web is dynamic, edge-cached, and deeply integrated with AI. By moving towards a headless architecture, we empower brands to distribute content across IoT devices, AR interfaces, and super-apps without the overhead of legacy code.
                     </p>

                     <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden my-24 border border-white/10 group">
                        <Image 
                           src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                           alt="Data Architecture" 
                           fill 
                           className="object-cover group-hover:scale-105 transition-transform duration-[3s]" 
                        />
                        <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                           <div className="font-heading  text-[9px] tracking-widest capitalize text-white/40">Visual 0x44 // Global Data Distribution Architecture</div>
                        </div>
                     </div>

                     <h3 className="font-heading text-5xl text-white tracking-tighter capitalize pt-16 mb-8 italic">
                        Predictive <span className="text-[#6324FC]">Performance.</span>
                     </h3>
                     <p>
                        Loading speeds are no longer measured in seconds, but in milliseconds. With the latest advancements in edge computing, we&apos;ve achieved a state where the browser can predict user intent, pre-fetching data before the click even happens. This isn&apos;t just optimization; it&apos;s digital sorcery.
                     </p>

                     <blockquote className="relative p-16 bg-white/[0.02] border-l-4 border-[#6324FC] rounded-r-3xl my-24">
                        <p className="font-heading text-3xl md:text-5xl text-white leading-tight capitalize tracking-tighter mb-8">
                           &quot;Efficiency is not about doing more. It&apos;s about eliminating the friction between a user&apos;s desire and the machine&apos;s response.&quot;
                        </p>
                        <cite className="font-heading  text-[10px] tracking-[0.4em] capitalize text-[#6324FC]">/ Senior Architect Insight</cite>
                     </blockquote>

                     <p>
                        As we move forward, the barrier between &apos;online&apos; and &apos;offline&apos; will continue to dissolve. The architectures we build today are the foundations of that seamless future. Insights isn&apos;t just about reporting; it&apos;s about pioneering.
                     </p>
                  </div>
               </article>

            </div>
         </div>
      </section>

      {/* 3. Next Article Takeover */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#060608] border-t border-white/5 group">
         <Link href="/insights" className="relative z-10 w-full h-full flex flex-col items-center justify-center cursor-pointer">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="absolute inset-0 z-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
            >
               <Image 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Next Article" 
                  fill 
                  className="object-cover grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]" />
            </motion.div>

            <div className="relative z-10 text-center space-y-8">
               <div className="font-heading  text-[11px] tracking-[0.8em] text-white/30 capitalize ">Continue Reading</div>
               <h2 className="font-heading text-[15vw] leading-none tracking-tighter capitalize text-white group-hover:text-[#6324FC] transition-colors duration-700 italic">
                  NEURO <br className="md:hidden" /> DESIGN.
               </h2>
               <div className="flex items-center justify-center gap-6">
                  <div className="w-16 h-[1px] bg-white/20" />
                  <div className="relative w-20 h-20 p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-xl isolate">
                     <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                       <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                     </div>
                     <div className="relative w-full h-full rounded-full bg-[#060608] transition-colors duration-500 flex items-center justify-center z-10">
                       <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                       <MoveRight className="relative z-10 w-8 h-8 text-[#6324FC] group-hover:text-white transition-all duration-500" />
                     </div>
                  </div>
                  <div className="w-16 h-[1px] bg-white/20" />
               </div>
            </div>
         </Link>
      </section>

    </main>
  );
}
