"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    quote: "Our 3rd major engagement with Injaazh. Their team consists of absolute experts at what they do — trustworthy, flexible, and innovative. I highly recommend them for any complex digital requirements and global campaigns.",
    name: "Sarah M.",
    role: "Chief Marketing Officer",
    flag: "UK",
    initials: "SM",
    gradient: "from-[#6324FC]/20 to-amber-500/10"
  },
  {
    quote: "Injaazh delivered an outstanding headless commerce platform. I especially appreciated their proactive approach when accommodating our enterprise compliance requirements. Highly recommended for elite web development.",
    name: "David K.",
    role: "Product Owner",
    flag: "CA",
    initials: "DK",
    gradient: "from-[#6324FC]/20 to-emerald-500/10"
  },
  {
    quote: "Excellent work on our custom web application. They integrated new features perfectly into our existing monolithic codebase while migrating us to Next.js. Professional, efficient, and incredibly easy to communicate with.",
    name: "Saikat G.",
    role: "Technical Lead",
    flag: "IN",
    initials: "SG",
    gradient: "from-[#6324FC]/20 to-rose-500/10"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#060608] pt-32 lg:pt-48 pb-0 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6324FC]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase mb-8 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-[#6324FC]" /> 
              CLIENT SUCCESS STORIES
            </motion.div>
            <h2 className="font-heading text-6xl md:text-[8rem] tracking-tighter text-white leading-[0.85] uppercase">
              TRUSTED <br/>
              <span className="stroke-white italic opacity-80">BY LEADERS.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-end text-right">
            <div className="flex items-center gap-6 mb-4">
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-[0.4em]">Global Rating</div>
              <div className="font-heading text-4xl text-white">4.9<span className="text-white/30 text-2xl">/5</span></div>
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#6324FC] text-[#6324FC] drop-shadow-[0_0_15px_rgba(99,36,252,0.6)]" />
              ))}
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative group/swiper testimonial-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 2.5 },
            }}
            className="!overflow-visible"
          >
            {reviews.map((rev, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="group relative h-full rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#6324FC]/30 transition-all duration-700 overflow-hidden backdrop-blur-xl p-8 lg:p-12 flex flex-col">
                  {/* Card Hover Glow */}
                  <div className="absolute inset-0 bg-[#6324FC]/0 group-hover:bg-[#6324FC]/5 transition-colors duration-700" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#6324FC]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <Quote className="absolute top-10 right-10 w-16 h-16 text-[#6324FC]/5 group-hover:text-[#6324FC]/10 group-hover:scale-110 transition-all duration-700 -rotate-12" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#6324FC] text-[#6324FC] drop-shadow-[0_0_10px_rgba(99,36,252,0.8)]" />
                    ))}
                  </div>

                  <p className="font-sans font-light text-lg md:text-xl lg:text-2xl text-white/90 leading-[1.6] mb-12 relative z-10 flex-grow">
                    "{rev.quote}"
                  </p>

                  <div className="flex items-center gap-5 pt-8 border-t border-white/5 mt-auto relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-heading text-xl text-white bg-gradient-to-br ${rev.gradient} border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                      {rev.initials}
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-heading text-xl text-white group-hover:text-[#6324FC] transition-colors">{rev.name}</span>
                        <span className="font-mono text-[8px] text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest">{rev.flag}</span>
                      </div>
                      <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">
                        {rev.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="swiper-pagination-custom flex gap-3" />
            
            <div className="flex gap-4">
              <button className="testimonial-prev w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#6324FC] hover:bg-[#6324FC] transition-all duration-500 group">
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="testimonial-next w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#6324FC] hover:bg-[#6324FC] transition-all duration-500 group">
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Stats Footer */}
        <div className="mt-32 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
           <div className="flex flex-col items-center justify-center py-12 md:py-16 group hover:bg-white/[0.02] transition-colors duration-500 cursor-crosshair">
             <span className="font-heading text-7xl md:text-[6rem] text-white group-hover:text-[#6324FC] transition-colors duration-500 mb-2 leading-none">98%</span>
             <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 group-hover:text-white/80 transition-colors duration-500">RETENTION RATE</span>
           </div>
           <div className="flex flex-col items-center justify-center py-12 md:py-16 group hover:bg-white/[0.02] transition-colors duration-500 cursor-crosshair">
             <span className="font-heading text-7xl md:text-[6rem] text-white group-hover:text-[#00E5FF] transition-colors duration-500 mb-2 leading-none">24/7</span>
             <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 group-hover:text-white/80 transition-colors duration-500">GLOBAL SUPPORT</span>
           </div>
           <div className="flex flex-col items-center justify-center py-12 md:py-16 group hover:bg-white/[0.02] transition-colors duration-500 cursor-crosshair">
             <span className="font-heading text-7xl md:text-[6rem] text-white group-hover:text-[#6324FC] transition-colors duration-500 mb-2 leading-none">500+</span>
             <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 group-hover:text-white/80 transition-colors duration-500">PROJECTS DELIVERED</span>
           </div>
        </div>

      </div>
    </section>
  );
}

