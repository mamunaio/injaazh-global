"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, Zap, ShoppingBag, Code, Link } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useProjectModal } from "@/components/ProjectModalContext";

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isDecimal = value.includes('.');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;
    
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = progress * target;
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {value.includes('%') && '%'}
      {value.includes('+') && '+'}
      {value.includes('s') && 's'}
    </span>
  );
}

export default function WebDevPage() {
  const { openModal } = useProjectModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "99", label: "PAGE SPEED SCORE" },
    { value: "0.8s", label: "AVERAGE LOAD TIME" },
    { value: "100%", label: "ON-TIME DELIVERY" },
    { value: "1,200+", label: "PROJECTS DELIVERED" },
  ];

  const whatWeBuild = [
    {
      title: "Next.js & Headless Architecture",
      desc: "The fastest way to build modern websites. We deploy headless Next.js infrastructures that guarantee 99/100 Lighthouse scores, sub-second load times, and seamless scalability for growing businesses.",
      tags: ["Next.js", "React 19", "Tailwind CSS", "Vercel"],
    },
    {
      title: "WordPress & WooCommerce",
      desc: "The world's most flexible CMS — built right. Custom themes, bespoke plugins, and high-performance WooCommerce stores optimized for PageSpeed 90+ on mobile and maximum conversion rates.",
      tags: ["WordPress", "WooCommerce", "Custom Themes", "PHP"],
    },
    {
      title: "Custom Web Applications",
      desc: "For complex needs that off-the-shelf solutions can't handle. We build robust, secure, and scalable web apps using the MERN stack, PHP, and Python — tailored exactly to your business requirements.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Python"],
    },
    {
      title: "API & Backend Automation",
      desc: "Eliminate manual workflows and integrate your entire tech stack. We build custom API integrations and backend automation that save time, reduce errors, and dramatically improve business efficiency.",
      tags: ["REST API", "GraphQL", "Webhooks", "Automation"],
    },
  ];

  const whyItWorks = [
    {
      title: "PageSpeed 99/100 — Guaranteed",
      desc: "Slow websites lose clients. Every Injaazh project is built to achieve a minimum 99/100 PageSpeed score — because Google rewards fast sites with higher rankings and users reward them with more sales.",
    },
    {
      title: "Built for Western Markets",
      desc: "We understand how US, UK, and Australian users browse, trust, and buy online. Every design decision, CTA placement, and UX choice is informed by Western consumer psychology — not guesswork.",
    },
    {
      title: "Conversion-Optimized by Default",
      desc: "A beautiful website that doesn't convert is just an expensive brochure. We build with conversion rate optimization baked in from day one — layouts, copy, and flows designed to turn visitors into leads.",
    },
  ];

  const process = [
    {
      id: "01",
      title: "Discovery & Architecture",
      desc: "We analyze your business goals, target audience, and technical requirements. Then we build a clear technical blueprint before a single line of code is written.",
    },
    {
      id: "02",
      title: "Design & Prototype",
      desc: "Wireframes and interactive prototypes reviewed and approved by you — so there are zero surprises at launch.",
    },
    {
      id: "03",
      title: "Development & Testing",
      desc: "Clean, modular, production-ready code. Tested across devices, browsers, and screen sizes before we ship anything.",
    },
    {
      id: "04",
      title: "Launch & Optimize",
      desc: "We don't disappear after launch. Post-launch monitoring, performance optimization, and ongoing support — because your success is our success.",
    },
  ];

  const faqs = [
    {
      q: "How long does a website take to build?",
      a: "Most projects take 2–6 weeks depending on complexity. We provide a clear timeline before work begins — and we stick to it.",
    },
    {
      q: "Do you work with clients in the US and UK?",
      a: "Yes. The majority of our clients are based in the US, UK, Australia, and Canada. We offer 24-hour response and work across all timezones.",
    },
    {
      q: "What platform do you recommend — WordPress or Next.js?",
      a: "It depends on your goals. WordPress is ideal for content-heavy sites and e-commerce. Next.js is better for performance-critical applications and SaaS products. We'll recommend the right stack after understanding your needs.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes. All projects include a 30-day post-launch support period. Ongoing maintenance packages are also available.",
    },
    {
      q: "What is your pricing?",
      a: "Pricing depends on project scope. We offer transparent, USD-based pricing with no hidden fees. Send us your brief and we'll respond with a clear proposal within 24 hours.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <main className="relative w-full min-h-screen bg-[#060608] text-white pt-32 pb-20 font-sans overflow-hidden">
      {/* Background Grids & Textures */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      {/* Additional Ambient Glows with Animation */}
      <motion.div 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6324FC] blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#6324FC]/5 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#6324FC]/5 blur-[100px] rounded-full pointer-events-none" 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#6324FC]" />
          <span className="font-heading  text-sm tracking-[0.5em] text-[#6324FC] capitalize ">WEB DEVELOPMENT</span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-12">
          Web Development Services <br/>
          That Perform <span className="italic bg-gradient-to-r from-[#6324FC] to-[#d946ef] bg-clip-text text-transparent">Globally.</span>
        </h1>

        <p className="font-sans font-light text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl mb-12 border-l border-white/10 pl-8">
          We don't just build websites — we engineer high-performance digital products that load fast, rank on Google, and convert visitors into paying clients.
          <br/><br/>
          From Next.js headless architectures to custom WordPress solutions, every line of code we write is optimized for speed, security, and scale — across the US, UK, Australia, and beyond.
        </p>

        <button 
          onClick={() => openModal()}
          className="group relative px-10 py-5 bg-[#6324FC] text-white rounded-full font-heading text-xl tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,36,252,0.4)] active:scale-95"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 group-hover:text-[#6324FC] transition-colors duration-500 flex items-center gap-3">
            GET A FREE PROPOSAL <ArrowUpRight className="w-5 h-5" />
          </span>
        </button>
      </div>
      </section>

      {/* Stats Strip */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="py-16 px-6 text-center hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden">
              {/* Radial gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute -inset-10 bg-[#6324FC]/5 blur-2xl rounded-full" />
              </div>
              
              <div className="font-heading text-6xl md:text-8xl mb-4 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent group-hover:from-[#6324FC] group-hover:to-[#d946ef] transition-all duration-700">
                <Counter value={stat.value} />
              </div>
              
              <div className="font-heading  text-xs tracking-[0.2em] text-white/30 capitalize group-hover:text-white/70 transition-colors duration-500">
                {stat.label}
              </div>
              
              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#6324FC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#6324FC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">WHAT WE BUILD</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {whatWeBuild.map((item, i) => (
            <div key={i} className="p-10 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-3xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 group relative overflow-hidden">
              {/* Icon */}
              <div className="mb-6 w-12 h-12 bg-[#6324FC]/10 rounded-2xl flex items-center justify-center text-[#6324FC] group-hover:bg-[#6324FC] group-hover:text-white transition-all duration-500">
                {i === 0 && <Zap className="w-6 h-6" />}
                {i === 1 && <ShoppingBag className="w-6 h-6" />}
                {i === 2 && <Code className="w-6 h-6" />}
                {i === 3 && <Link className="w-6 h-6" />}
              </div>

              <h3 className="font-heading text-3xl mb-4 group-hover:text-[#6324FC] transition-colors duration-500">{item.title}</h3>
              <p className="font-sans font-light text-white/50 text-lg leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-1.5 bg-white/[0.05] border border-white/5 font-heading  text-[10px] tracking-widest text-white/40 capitalize rounded-full group-hover:text-white group-hover:border-[#6324FC]/30 transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* WHY OUR WEB DEVELOPMENT WORKS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">WHY OUR WEB DEVELOPMENT WORKS</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {whyItWorks.map((item, i) => (
            <div key={i} className="relative space-y-4 p-8 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-[#6324FC]/20 transition-all duration-500 group overflow-hidden">
              {/* Huge background number */}
              <div className="absolute -top-10 -right-5 font-heading text-[10rem] text-white/[0.02] group-hover:text-[#6324FC]/5 transition-colors duration-700 pointer-events-none">
                0{i + 1}
              </div>
              
              <h3 className="font-heading text-2xl text-[#6324FC] group-hover:text-white transition-colors duration-500 relative z-10">{item.title}</h3>
              <p className="font-sans font-light text-white/50 text-lg leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* OUR WEB DEVELOPMENT PROCESS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">OUR WEB DEVELOPMENT PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <div key={i} className="relative p-8 bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-2xl hover:border-[#6324FC]/30 hover:shadow-[0_0_30px_rgba(99,36,252,0.1)] transition-all duration-500 group">
              {/* Connecting line for desktop */}
              {i < process.length - 1 && (
                <div className="absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-[#6324FC]/20 to-[#6324FC]/5 hidden lg:block z-0" />
              )}
              
              <div className="font-heading  text-xs text-[#6324FC] mb-4 group-hover:text-white transition-colors duration-500 relative z-10">{step.id}</div>
              <h3 className="font-heading text-xl mb-3 group-hover:text-[#6324FC] transition-colors duration-500 relative z-10">{step.title}</h3>
              <p className="font-sans font-light text-white/40 text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-16">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className={`border border-white/5 rounded-2xl transition-all duration-500 ${isOpen ? 'bg-white/[0.01] border-[#6324FC]/20' : 'bg-transparent'}`}>
                <button
                  className="w-full py-6 px-8 flex justify-between items-center text-left group"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <span className={`font-sans text-xl transition-colors duration-300 ${isOpen ? 'text-[#6324FC]' : 'text-white group-hover:text-[#6324FC]'}`}>{faq.q}</span>
                  <div className={`transform transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <Plus className={`w-5 h-5 ${isOpen ? 'text-[#6324FC]' : 'text-white/40 group-hover:text-[#6324FC]'}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-8">
                        <p className="font-sans font-light text-white/50 text-lg leading-relaxed max-w-4xl">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#060608] py-16 md:py-24 relative overflow-hidden border-t border-white/5 text-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8">Ready to Build Something Incredible?</h2>
        <p className="font-sans font-light text-xl text-white/50 max-w-2xl mx-auto mb-12">
          Send us your brief and we'll respond with a clear proposal within 24 hours.
        </p>
        <button 
          onClick={() => openModal()}
          className="group relative px-12 py-6 bg-[#6324FC] text-white rounded-full font-heading text-2xl tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(99,36,252,0.5)]"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 group-hover:text-[#6324FC] transition-colors duration-500 flex items-center gap-3">
            START YOUR FREE AUDIT ⚡
          </span>
        </button>
      </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
