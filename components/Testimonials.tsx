"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: "01",
    quote:
      "This guy thought outside the box - I gave him basic instructions and he researched other sites similar and created all types of extra content and information. Usually when I hire freelancers I have to hold their hand and tell them what to do and they never think outside the box where this guy did. As much as I want to keep him all to myself - I also want to do the right thing and let others know how good this guy was.",
    name: "Robert",
    role: "Astro Sites Visual Designer",
    project: "Astro Sites Visual Designer & UI Elevation",
    location: "Australia",
    flag: "🇦🇺",
    countryCode: "AU",
    initials: "RB",
    stars: 5,
    impact: "THOUGHT OUTSIDE THE BOX",
    service: "Astro / Next.js & UI Elevation",
    tags: ["Website Design", "WordPress", "CSS", "HTML", "UI/UX"],
    gradient: "from-amber-500/30 to-[#6324FC]/20",
    color: "#F59E0B",
  },
  {
    id: "02",
    quote:
      "Hired this freelancer to fix issues on our website and couldn't be happier. He diagnosed the problems quickly, delivered clean fixes on time, and communicated clearly throughout. No chasing, no vague updates — just solid, reliable work done right the first time. Professional and easy to work with. Would hire again without hesitation and recommend to anyone needing dependable web support.",
    name: "Matthew",
    role: "Managing Director, AKA Moving",
    project: "Fixing AKA Moving Website Architecture",
    location: "Canada",
    flag: "🇨🇦",
    countryCode: "CA",
    initials: "MT",
    stars: 5,
    impact: "SOLID & RELIABLE WORK",
    service: "Full-Stack PHP, SEO & Web Support",
    tags: ["PHP", "Website Design", "SEO", "HTML"],
    gradient: "from-rose-500/30 to-[#6324FC]/20",
    color: "#FF2D55",
  },
  {
    id: "03",
    quote:
      "He produced excellent results. I recommend him. Delivered a clean 1:1 UI recreation with React and Next.js for our TinaCMS architecture.",
    name: "Mauro Adamo",
    role: "TinaCMS Lead Developer",
    project: "1:1 UI Recreation for TinaCMS Site (MUI)",
    location: "Italy",
    flag: "🇮🇹",
    countryCode: "IT",
    initials: "MA",
    stars: 5,
    impact: "1:1 PIXEL-PERFECT UI",
    service: "React / Next.js & TinaCMS",
    tags: ["React.js", "SEO", "CMS", "Git", "Web Development"],
    gradient: "from-[#00E5FF]/30 to-[#6324FC]/20",
    color: "#00E5FF",
  },
  {
    id: "04",
    quote:
      "I worked with a freelancer who does their job professionally, communicates very effectively, and does everything I ask for perfectly. I'm very lucky. They solved all my requests without any problems. We will work together on future projects.",
    name: "Gurkan",
    role: "Product & UX Lead",
    project: "Elementor ACF CPT Page Templates",
    location: "Turkey",
    flag: "🇹🇷",
    countryCode: "TR",
    initials: "GK",
    stars: 5,
    impact: "SOLVED ALL REQUESTS PERFECTLY",
    service: "WordPress, ACF & Advanced UX/UI Templates",
    tags: ["WordPress", "User Interface / IA", "UX Design", "Web Development", "Elementor"],
    gradient: "from-emerald-500/30 to-[#6324FC]/20",
    color: "#00FFA3",
  },
  {
    id: "05",
    quote:
      "It was my 3rd time to work with this freelancer. He is an expert at what he does, trustworthy and flexible. I definitely recommend him",
    name: "Philippe",
    role: "Founder, Aequitur (3rd Repeat Contract)",
    project: "Adjust Aequitur Platform",
    location: "China",
    flag: "🇨🇳",
    countryCode: "CN",
    initials: "PH",
    stars: 5,
    impact: "3RD TIME REPEAT CLIENT",
    service: "PHP Architecture & CSS Optimization",
    tags: ["PHP", "Website Design", "CSS", "HTML"],
    gradient: "from-cyan-500/30 to-[#6324FC]/20",
    color: "#00E5FF",
  },
  {
    id: "06",
    quote:
      "2nd time for me to work with this Freelancer. He did a good job and is competent. I especially appreciated the availability and patience when accommodating my requests and changes. I do recommend him.",
    name: "Philippe",
    role: "Founder, Aequitur (2nd Repeat Contract)",
    project: "aequitur.com site Development",
    location: "China",
    flag: "🇨🇳",
    countryCode: "CN",
    initials: "PH",
    stars: 5,
    impact: "2ND CONTRACT // HIGH AVAILABILITY",
    service: "PHP, Web Design & Technical SEO",
    tags: ["PHP", "Website Design", "SEO", "HTML"],
    gradient: "from-[#6324FC]/30 to-[#00E5FF]/20",
    color: "#6324FC",
  },
  {
    id: "07",
    quote:
      "I have to say, this Freelancer impressed me. He was professional all the way, competent and veeery patient with me and willing to accommodate my changes. Many Freelancers overpromise but underdeliver, this was not his case: He is reliable. I absolutely recommend him and I already have a 2nd project coming his way",
    name: "Philippe",
    role: "Founder, Personal Brand Platform",
    project: "Professional Personal Branding WordPress Site",
    location: "China",
    flag: "🇨🇳",
    countryCode: "CN",
    initials: "PH",
    stars: 5,
    impact: "IMPRESSED // RELIABLE PARTNER",
    service: "WordPress, SEO & Custom Frontend",
    tags: ["PHP", "Website Design", "SEO", "WordPress", "CSS"],
    gradient: "from-amber-500/30 to-[#6324FC]/20",
    color: "#F59E0B",
  },
  {
    id: "08",
    quote: "his work is excellent and wanna work with again!",
    name: "Saroj",
    role: "Platform Administrator",
    project: "Add PayPal Gateway to Website",
    location: "United States",
    flag: "🇺🇸",
    countryCode: "US",
    initials: "SR",
    stars: 5,
    impact: "EXCELLENT WORK & REPEAT CLIENT",
    service: "PayPal API & Software Architecture",
    tags: ["PHP", "JavaScript", "Software Architecture", "PayPal API"],
    gradient: "from-[#6324FC]/30 to-[#00FFA3]/20",
    color: "#6324FC",
  },
  {
    id: "09",
    quote:
      "The freelancer did a good job and delivered the correct output in time. Highly recommended !",
    name: "Saikat",
    role: "Web Application Lead",
    project: "Feature Engineering in Existing PHP Web App",
    location: "Australia",
    flag: "🇦🇺",
    countryCode: "AU",
    initials: "SK",
    stars: 5,
    impact: "DELIVERED IN TIME",
    service: "PHP, MySQL & Debugging",
    tags: ["PHP", "MySQL", "Debugging", "Web App Coding"],
    gradient: "from-[#00FFA3]/30 to-[#6324FC]/20",
    color: "#00FFA3",
  },
  {
    id: "10",
    quote: "He failed to complete the project within the given deadline.",
    name: "smstaci",
    role: "eCommerce Store Owner",
    project: "PrestaShop 9 Bug Repair",
    location: "Ukraine",
    flag: "🇺🇦",
    countryCode: "UA",
    initials: "SM",
    stars: 1,
    impact: "DEADLINE DISPUTE REVIEW",
    service: "PrestaShop 9 & PHP Debugging",
    tags: ["PrestaShop", "PHP", "eCommerce", "Debugging"],
    gradient: "from-rose-500/30 to-[#6324FC]/20",
    color: "#FF2D55",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#060608] pt-16 md:pt-24 pb-16 md:pb-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glows - GPU Accelerated */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,36,252,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          <div className="max-w-2xl">
            {/* Eyebrow Kicker */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-[1px] bg-gradient-to-r from-[#6324FC] to-[#00E5FF]"
              />
              <span className="font-mono text-xs md:text-sm tracking-[0.45em] text-[#6324FC] uppercase font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                CLIENT SUCCESS STORIES // EXECUTIVE PROOF
              </span>
            </div>

            {/* Signature Triad Heading */}
            <h2 className="sr-only">
              Client Success Stories: Trusted by Global Leaders in Web Design and SEO
            </h2>
            <div
              aria-hidden="true"
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tighter text-white"
            >
              <span className="text-white mr-3 md:mr-4">TRUSTED</span>
              <span className="italic text-[#6324FC] drop-shadow-[0_0_35px_rgba(99,36,252,0.35)]">
                BY
              </span>
              <br />
              <span className="stroke-text opacity-95">LEADERS.</span>
            </div>

            {/* Capability Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6324FC]" />
                100% VERIFIED REVIEWS
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                CLUTCH TOP AGENCY
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
                C-LEVEL CLIENTELE
              </div>
            </div>
          </div>

          {/* Luxury Executive Rating Capsule */}
          <div className="relative group/seal rounded-3xl bg-[#0A0A0E] border border-white/10 p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-[#6324FC]/40 max-w-sm w-full">
              <div className="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-white/[0.08]">
                <div>
                  <div className="font-heading text-3xl font-bold text-white flex items-baseline gap-1">
                    4.9<span className="text-white/30 text-lg font-normal">/ 5.0</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/45 uppercase tracking-widest block mt-0.5">
                    GLOBAL CLIENT SATISFACTION
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AUDITED
                </span>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/[0.04]">
                <span>Clutch Verified</span>
                <span>•</span>
                <span>Google 5.0 ★</span>
                <span>•</span>
                <span className="text-[#00E5FF]">100% SLA</span>
              </div>
            </div>
          </div>

        {/* Swiper Slider */}
        <div className="relative group/swiper testimonial-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!overflow-visible"
          >
            {reviews.map((rev) => (
              <SwiperSlide key={rev.id} className="!h-auto flex">
                <div className="group relative w-full h-full min-h-[360px] md:min-h-[380px] rounded-3xl bg-[#09090E] border border-white/[0.07] hover:border-[#6324FC]/40 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between shadow-xl">
                  {/* Card Dynamic Glow on Hover */}
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: rev.color }}
                  />

                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-5 right-5 w-12 h-12 text-white/[0.025] group-hover:text-[#6324FC]/10 group-hover:scale-105 transition-all duration-500 -rotate-12 pointer-events-none" />

                  {/* Top & Middle Content Container */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        {/* Verified Project Impact Chip */}
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider uppercase border"
                          style={{
                            backgroundColor: `${rev.color}10`,
                            borderColor: `${rev.color}30`,
                            color: rev.color,
                          }}
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          {rev.impact}
                        </span>

                        {/* Dynamic Star Rating */}
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                                i < rev.stars
                                  ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.35)]"
                                  : "fill-white/10 text-white/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Project Title / Spec */}
                      {rev.project && (
                        <div className="font-mono text-[10px] sm:text-[11px] text-white/50 mb-3 flex items-center gap-1.5 line-clamp-1">
                          <span className="text-[#6324FC] font-bold">//</span>
                          <span className="truncate">{rev.project}</span>
                        </div>
                      )}
                    </div>

                    {/* Quotation Body - Vertically Centered in Available Space */}
                    <div className="flex-1 flex flex-col justify-center my-1.5">
                      <p className="font-sans font-light text-xs sm:text-sm md:text-[14.5px] text-white/85 leading-relaxed">
                        "{rev.quote}"
                      </p>
                    </div>

                    {/* Verified Project Tags */}
                    {rev.tags && (
                      <div className="flex flex-wrap items-center gap-1 mt-3 pt-2.5 border-t border-white/[0.04]">
                        {rev.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[9px] font-mono text-white/45"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Author Attribution Footer */}
                  <div className="relative z-10 pt-4 border-t border-white/[0.06] mt-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading text-sm font-bold text-white bg-gradient-to-br ${rev.gradient} border border-white/10 shadow-md shrink-0`}
                      >
                        {rev.initials}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-heading text-sm sm:text-[15px] font-bold text-white group-hover:text-[#00E5FF] transition-colors truncate">
                            {rev.name}
                          </span>
                          <span className="px-1.5 py-0.2 rounded-full bg-white/[0.05] border border-white/[0.08] font-mono text-[8px] text-white/70 font-semibold tracking-wider shrink-0">
                            {rev.countryCode}
                          </span>
                        </div>
                        <div className="font-sans text-[11px] text-white/50 truncate">
                          {rev.role} · <span className="text-white/70">{rev.location}</span>
                        </div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-[#6324FC] mt-0.5 truncate">
                          {rev.service}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="swiper-pagination-custom flex gap-3" />

            <div className="flex gap-4">
              <button
                aria-label="Previous testimonial slide"
                className="testimonial-prev group relative w-12 h-12 rounded-full border border-white/15 bg-[#0A0A0E] hover:border-[#6324FC] hover:bg-[#6324FC]/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
              <button
                aria-label="Next testimonial slide"
                className="testimonial-next group relative w-12 h-12 rounded-full border border-white/15 bg-[#0A0A0E] hover:border-[#6324FC] hover:bg-[#6324FC]/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
