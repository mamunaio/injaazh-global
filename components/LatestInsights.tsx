"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    category: "SEO",
    title: "The SEO Renaissance: Why Modern Brands are Ditching Old Strategies",
    slug: "the-seo-renaissance",
    excerpt: "Standard SEO is dying. Discover the shift toward Semantic Search and why your technical architecture is now the biggest ranking factor in 2025.",
    readTime: "5 min read",
    date: "May 04, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "WEB DEV",
    title: "Performance as a Feature: Building Speed-First Architectures with Next.js",
    slug: "performance-as-a-feature",
    excerpt: "A slow website is a silent revenue killer. We explore how migrating to headless architectures converts higher and outranks legacy WordPress setups.",
    readTime: "7 min read",
    date: "May 02, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "MARKETING",
    title: "From Clicks to Clients: The Blueprint for B2B Growth in Global Markets",
    slug: "from-clicks-to-clients",
    excerpt: "Scale across borders without losing your brand's voice. A deep dive into how we localized digital strategies for market leaders in the US and UK.",
    readTime: "6 min read",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad79?auto=format&fit=crop&q=80&w=800"
  }
];

export default function LatestInsights() {
  return (
    <section className="w-full bg-[#060608] py-32 lg:py-48 relative overflow-hidden border-t border-white/5">
      
      {/* Background Cinematic Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase mb-8 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-[#6324FC]" /> 
              The Intelligence Hub
            </motion.div>
            <h2 className="font-heading text-8xl md:text-[9rem] tracking-tighter text-white leading-[0.85] uppercase">
              INSIGHTS THAT <br/>
              <span className="stroke-white italic opacity-80">DRIVE GROWTH.</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm"
          >
            <p className="font-sans font-light text-white/40 text-lg leading-relaxed border-l-2 border-[#6324FC] pl-8">
              Strategy, deep-dives, and actionable intelligence from our global elite squad.
            </p>
          </motion.div>
        </div>
 
        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-32">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col h-full rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-700 overflow-hidden backdrop-blur-xl"
            >
              {/* Card Glow Layer */}
              <div className="absolute inset-0 bg-[#6324FC]/0 group-hover:bg-[#6324FC]/5 transition-colors duration-700" />
              
              {/* Image Container */}
              <Link href={`/blog/${post.slug}`} className="relative h-72 w-full overflow-hidden block">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-125 transition-transform duration-[2000ms] ease-out opacity-80 group-hover:opacity-100"
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#6324FC]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Category Badge */}
                <div className="absolute top-8 left-8">
                  <span className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-white font-mono text-[8px] tracking-[0.25em] uppercase rounded-full group-hover:bg-[#6324FC] group-hover:border-[#6324FC] transition-all duration-500">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Content Area */}
              <div className="p-10 lg:p-12 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-6 mb-8 font-mono text-[9px] tracking-[0.2em] uppercase text-white/30">
                  <div className="flex items-center gap-2 group-hover:text-white/60 transition-colors">
                    <Calendar className="w-3.5 h-3.5 text-[#6324FC]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-white/60 transition-colors">
                    <Clock className="w-3.5 h-3.5 text-[#6324FC]" />
                    {post.readTime}
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-heading text-2xl lg:text-3xl tracking-tight text-white mb-6 leading-tight group-hover:text-[#6324FC] transition-colors duration-500">
                    {post.title}
                  </h3>
                </Link>

                <p className="font-sans font-light text-white/40 text-base leading-relaxed mb-12 line-clamp-3 group-hover:text-white/60 transition-colors duration-500">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-5 text-white/40 font-heading tracking-[0.2em] text-[10px] group/btn uppercase transition-all duration-500 hover:text-white hover:gap-8">
                    <span className="relative z-10">EXPLORE FULL REPORT</span>
                    <div className="relative">
                      <ArrowRight className="w-5 h-5 text-[#6324FC] group-hover/btn:translate-x-2 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-[#6324FC] blur-[15px] opacity-0 group-hover/btn:opacity-50 transition-opacity" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Sophisticated Corner Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6324FC]/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Global Hub CTA */}
        <div className="flex justify-center">
          <Link href="/blog" className="group relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-16 py-8 bg-transparent border border-white/10 text-white font-heading text-xl tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 flex items-center gap-8 uppercase"
            >
              {/* Button Hover Background */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                ACCESS THE VAULT
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

