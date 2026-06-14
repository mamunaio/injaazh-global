"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useProjectModal } from "@/components/ProjectModalContext";

const categories = ["All", "Strategy", "Design", "Engineering", "Marketing"];

const posts = [
  {
    id: 1,
    title: "The Future of Headless Architecture in 2025",
    excerpt:
      "Why the world's fastest-growing brands are ditching traditional CMS platforms for headless Next.js architectures — and what it means for your SEO, speed, and conversion rate.",
    category: "Engineering",
    date: "Latest",
    readTime: "8 MIN READ",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    slug: "future-of-headless-architecture",
    featured: true,
  },
  {
    id: 2,
    title: "Neuro-Design: The Psychology Behind High-Converting Interfaces",
    excerpt:
      "How we leverage cognitive load theory to build digital interfaces that feel like second nature to Western users — and convert at 2x the industry average.",
    category: "Design",
    date: "Latest",
    readTime: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    slug: "neuro-design-psychology",
  },
  {
    id: 3,
    title: "Scaling Beyond 10,000+ Users: Lessons from the Edge",
    excerpt:
      "A technical deep-dive into global data management and database architecture for hyper-growth platforms — drawn from real client deployments across the US and UK.",
    category: "Strategy",
    date: "Latest",
    readTime: "7 MIN READ",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    slug: "scaling-beyond-10m-users",
  },
  {
    id: 4,
    title: "Personalization at Scale: More Than Just a Buzzword",
    excerpt:
      "Implementing real-time content personalization for Western e-commerce and SaaS brands — strategies that actually drive revenue without compromising user privacy.",
    category: "Marketing",
    date: "Latest",
    readTime: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    slug: "ai-driven-personalization",
  },
];

export default function InsightsPage() {
  const { openModal } = useProjectModal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts.slice(1)
      : posts.slice(1).filter((post) => post.category === activeCategory);

  return (
    <main className="w-full bg-[#F5F5F0] dark:bg-[#060608] min-h-screen pt-32 text-primary dark:text-white font-sans overflow-hidden">
      {/* 1. Header Section — agency-style gradient, no image */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] py-20 md:py-32 flex items-center justify-center overflow-hidden bg-[#F0EEF8] dark:bg-[#060608] mb-20">
        {/* Dynamic Glow Orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#6324FC]/15 to-[#00E5FF]/10 dark:from-[#6324FC]/20 dark:to-[#00E5FF]/20 blur-[120px] rounded-full animate-pulse pointer-events-none"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6324FC]/5 via-transparent to-[#F5F5F0]/60 dark:from-[#6324FC]/10 dark:via-transparent dark:to-[#060608]/80 pointer-events-none" />

        {/* Massive watermark text */}
        <div className="absolute inset-0 flex items-center justify-center font-heading text-[18vw] md:text-[14vw] leading-none whitespace-nowrap tracking-tighter text-[#6324FC]/[0.04] dark:text-white/[0.02] text-center w-full select-none pointer-events-none">
          INSIGHTS
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8 text-[#060608] dark:text-white">
                IN <span className="italic text-[#6324FC]">SIGHTS</span>
              </h1>
              <p className="font-sans font-light text-xl text-[#060608]/50 dark:text-white/50 leading-relaxed">
                Explorations into the intersection of full-service digital
                strategy, <br className="hidden md:block" />
                engineering excellence, and global market dominance.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 z-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-heading text-xs tracking-widest capitalize transition-all border ${
                    activeCategory === cat
                      ? "bg-[#6324FC] border-[#6324FC] text-white"
                      : "bg-transparent border-[#060608]/20 dark:border-white/10 text-[#060608]/60 dark:text-white/40 hover:border-[#060608]/40 dark:hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Post */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto ">
        <Link href={`/insights/${posts[0].slug}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="group relative w-full aspect-[21/9] md:aspect-[3/1] bg-white/[0.02] border border-white/5 overflow-hidden rounded-none cursor-pointer"
          >
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#6324FC] text-white px-3 py-1 font-heading  text-[10px] tracking-widest capitalize ">
                    FEATURED
                  </span>
                  <span className="font-heading  text-[10px] tracking-widest capitalize text-white/60">
                    {posts[0].category.toUpperCase()}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl text-white tracking-tight leading-none group-hover:text-[#6324FC] transition-colors duration-500 mb-4">
                  {posts[0].title}
                </h2>
                <p className="font-sans font-light text-white/50  max-w-2xl hidden md:block">
                  {posts[0].excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 text-white/60 font-heading  text-[10px] tracking-widest capitalize whitespace-nowrap">
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" /> {posts[0].readTime}
                </span>
                <ArrowUpRight className="w-6 h-6 text-[#6324FC] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* 3. Post Grid */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 py-16 md:py-24">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col"
          >
            <Link
              href={`/insights/${post.slug}`}
              className="relative aspect-[4/3] bg-white/[0.02] border border-white/5 overflow-hidden mb-8 block"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-[#060608]/80 backdrop-blur-md px-3 py-1 font-heading  text-[10px] tracking-widest capitalize text-white border border-white/10">
                {post.category}
              </div>
            </Link>

            <div className="flex items-center gap-4 mb-4 font-heading  text-[10px] tracking-widest capitalize text-white/40">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-[#6324FC]" />
              <span>{post.readTime}</span>
            </div>

            <Link href={`/insights/${post.slug}`}>
              <h3 className="font-heading text-3xl text-white tracking-tight leading-tight mb-4 group-hover:text-[#6324FC] transition-colors duration-300">
                {post.title}
              </h3>
            </Link>

            <p className="font-sans font-light text-white/50 mb-8 flex-1">
              {post.excerpt}
            </p>

            <Link
              href={`/insights/${post.slug}`}
              className="group/btn relative p-[1px] rounded-xl overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,36,252,0.2)] isolate"
            >
              {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
              <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-xl">
                <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
              </div>

              <div className="relative w-full h-full py-3.5 rounded-[11px] bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                {/* Flowing background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-[11px]" />

                <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-[10px] tracking-[0.2em] text-white/60 group-hover/btn:text-white transition-colors duration-500 uppercase text-center">
                  READ ARTICLE
                  <ArrowRight className="w-4 h-4 text-[#6324FC] group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* 4. Editorial Flagship Newsletter */}
      <section className="relative px-6 lg:px-12 max-w-[1400px] mx-auto py-16 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full min-h-[600px] rounded-[4rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl flex flex-col lg:flex-row items-stretch group"
        >
          {/* Card Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

          {/* Left: Cinematic Image Side */}
          <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full overflow-hidden border-r border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
              alt="Intelligence Hub"
              fill
              className="object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[4000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060608]/80" />

            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="font-heading  text-[9px] tracking-[0.5em] text-[#6324FC] capitalize mb-4">
                Core Signal
              </div>
              <h3 className="font-heading text-4xl capitalize tracking-tighter italic">
                Join the Elite <br />
                Intelligence Squad.
              </h3>
            </div>
          </div>

          {/* Right: Content & Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-24 flex flex-col justify-center space-y-12 relative z-10">
            <div className="space-y-6">
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize ">
                NEVER MISS <br />
                <span className="text-[#6324FC] italic">A SIGNAL.</span>
              </h2>
              <p className="font-sans font-light text-xl text-white/40 max-w-lg leading-relaxed">
                Weekly deep-dives into the technologies and strategies that
                drive{" "}
                <span className="text-white">global market dominance.</span> No
                fluff, just intelligence.
              </p>
            </div>

            <div className="relative group/input max-w-xl">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-8 font-heading text-2xl focus:outline-none focus:border-[#6324FC] focus:bg-white/[0.05] transition-all placeholder:text-white/10 capitalize text-white backdrop-blur-xl"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-xl bg-[#6324FC] flex items-center justify-center group-hover/input:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(99,36,252,0.3)]">
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#060608] bg-white/10 overflow-hidden relative grayscale"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?u=${i + 10}`}
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="font-heading  text-[9px] tracking-widest text-white/20 capitalize ">
                Join a global network of digital architects
              </p>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6324FC]/5 blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5FF]/5 blur-[80px] -z-10" />
        </motion.div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto text-center py-16 md:py-24 border-t border-white/5">
        <div className="font-heading  text-sm tracking-[0.5em] text-[#6324FC] capitalize mb-8">
          COLLABORATE WITH US
        </div>
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-12">
          <span className="text-white">LET'S SCALE</span> <br />
          <span className="stroke-white italic opacity-80">WORLDWIDE.</span>
        </h2>
        <div className="flex justify-center">
          <button
            onClick={() => openModal()}
            className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] isolate"
          >
            {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
              <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
            </div>

            <div className="relative w-full h-full px-12 py-5 rounded-full bg-[#F5F5F0] dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
              {/* Flowing background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

              {/* Bouncing/pulsating dot */}
              <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />

              <span className="relative z-10 flex items-center justify-center gap-4 font-heading text-xl tracking-widest text-primary uppercase text-center">
                START A PROJECT
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#6324FC] dark:group-hover:text-white" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Injaazh Insights",
            description:
              "Expert insights on web development, SEO, digital marketing, and content strategy for businesses scaling in the US, UK & Australia.",
            url: "https://injaazh.com/insights",
            publisher: {
              "@type": "Organization",
              name: "Injaazh",
              logo: {
                "@type": "ImageObject",
                url: "https://injaazh.com/logo.png",
              },
            },
          }),
        }}
      />
    </main>
  );
}
