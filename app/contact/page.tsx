"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-background text-primary selection:bg-[#6324FC] selection:text-white pt-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 min-h-[80vh]">
        
        {/* Left Side: Info */}
        <div className="flex flex-col justify-between py-16 md:py-24 border-b lg:border-b-0 lg:border-r border-primary/10 pr-0 lg:pr-12">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-heading  text-xs tracking-[0.3em] capitalize flex items-center gap-4 mb-8 text-[#6324FC]"
            >
              <span className="w-8 h-[1px] bg-[#6324FC]" /> GET IN TOUCH
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter capitalize mb-8"
            >
              LET'S <br/><span className="italic text-[#6324FC]">TALK.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-sans font-light text-2xl md:text-3xl text-primary/60 max-w-md leading-relaxed"
            >
              Have a visionary project in mind? We partner with ambitious brands to engineer the future.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col gap-12 mt-16 lg:mt-0"
          >
            <div>
              <h3 className="font-heading  text-xs tracking-widest capitalize text-primary/40 mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Us
              </h3>
              <a href="mailto:hello@injaazh.com" className="font-sans text-3xl md:text-4xl hover:text-[#6324FC] transition-colors relative group inline-block">
                hello@injaazh.com
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6324FC] transition-all duration-500 group-hover:w-full" />
              </a>
            </div>

            <div>
              <h3 className="font-heading  text-xs tracking-widest capitalize text-primary/40 mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Global Offices
              </h3>
              <div className="grid grid-cols-2 gap-8 font-sans">
                <div>
                  <div className="text-xl mb-1">London</div>
                  <div className="font-light text-primary/50 text-sm">124 Shoreditch High St.<br/>UK</div>
                </div>
                <div>
                  <div className="text-xl mb-1">New York</div>
                  <div className="font-light text-primary/50 text-sm">85 Broad Street<br/>NY 10004</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-center py-16 md:py-24">
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col gap-12"
            onSubmit={(e) => e.preventDefault()}
          >
            
            <div className="flex flex-col gap-4">
              <label className="font-heading  text-xs tracking-widest capitalize text-primary/60">01. What's your name?</label>
              <input 
                type="text" 
                placeholder="John Doe *" 
                className="w-full bg-transparent border-b border-primary/20 py-4 font-sans text-2xl focus:outline-none focus:border-[#6324FC] transition-colors placeholder:text-primary/20"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-heading  text-xs tracking-widest capitalize text-primary/60">02. What's your email?</label>
              <input 
                type="email" 
                placeholder="john@company.com *" 
                className="w-full bg-transparent border-b border-primary/20 py-4 font-sans text-2xl focus:outline-none focus:border-[#6324FC] transition-colors placeholder:text-primary/20"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-heading  text-xs tracking-widest capitalize text-primary/60">03. Tell us about your project</label>
              <textarea 
                placeholder="Hello Injaazh, I need a new web architecture for..." 
                rows={3}
                className="w-full bg-transparent border-b border-primary/20 py-4 font-sans text-2xl focus:outline-none focus:border-[#6324FC] transition-colors resize-none placeholder:text-primary/20"
                required
              />
            </div>

            <div className="flex flex-col gap-6">
              <label className="font-heading  text-xs tracking-widest capitalize text-primary/60">04. Project Budget (USD)</label>
              <div className="flex flex-wrap gap-4">
                {["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map((budget) => (
                  <label key={budget} className="cursor-pointer">
                    <input type="radio" name="budget" className="peer sr-only" value={budget} />
                    <div className="px-6 py-3 rounded-full border border-primary/20 font-sans text-sm hover:border-[#6324FC] peer-checked:bg-[#6324FC] peer-checked:text-white peer-checked:border-[#6324FC] transition-all">
                      {budget}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button type="submit" className="flex items-center gap-4 bg-primary text-background px-12 py-6 rounded-full font-heading  text-sm tracking-widest capitalize hover:scale-105 hover:bg-[#6324FC] hover:text-white transition-all duration-300 shadow-2xl">
                SEND MESSAGE <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

          </motion.form>
        </div>

      </div>
    </main>
  );
}
