"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Upload, Send, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "Digital Architect";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#060608]">
      {/* Left Side: Brand/Context */}
      <div className="lg:w-1/2 relative overflow-hidden flex flex-col justify-between p-12 lg:p-20 bg-[#0A0A0C] border-r border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6324FC]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <Link href="/careers" className="relative z-10 flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-xs tracking-widest uppercase">Back to Missions</span>
        </Link>

        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
             <div className="w-10 h-[1px] bg-[#6324FC]" />
             <span className="font-mono text-[#6324FC] text-[10px] tracking-[0.5em] uppercase">Active Objective</span>
          </div>
          <h1 className="font-heading text-6xl lg:text-8xl text-white tracking-tighter uppercase leading-[0.9]">
            JOIN AS <br/>
            <span className="italic text-[#6324FC]">{role}</span>
          </h1>
          <p className="font-sans font-light text-xl text-white/40 max-w-md leading-relaxed">
            You are applying for a mission-critical position at Injaazh Global. We value precision, speed, and absolute technical dominance.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-10 grayscale opacity-30">
          <div className="flex items-center gap-3">
             <ShieldCheck className="w-6 h-6 text-[#6324FC]" />
             <span className="font-mono text-[9px] tracking-widest text-white uppercase">Neural Shield Active</span>
          </div>
          <div className="flex items-center gap-3">
             <Cpu className="w-6 h-6 text-[#00E5FF]" />
             <span className="font-mono text-[9px] tracking-widest text-white uppercase">Hiring Engine v4.2</span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-[#060608]">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-lg space-y-12"
            >
              <div className="space-y-4">
                <h2 className="font-heading text-3xl text-white uppercase">Infiltration Profile</h2>
                <div className="h-[1px] w-12 bg-[#6324FC]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="font-mono text-[9px] tracking-widest uppercase text-white/30">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-[#6324FC] transition-all font-sans"
                    placeholder="E.G. JULIAN VANCE"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[9px] tracking-widest uppercase text-white/30">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-[#6324FC] transition-all font-sans"
                    placeholder="MISSION@CONTACT.COM"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[9px] tracking-widest uppercase text-white/30">LinkedIn / Portfolio URL</label>
                  <input 
                    required
                    type="url" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-[#6324FC] transition-all font-sans"
                    placeholder="HTTPS://LINKEDIN.COM/IN/USER"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[9px] tracking-widest uppercase text-white/30">Resume / Dossier</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full bg-white/[0.02] border border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center gap-4 group-hover:border-[#6324FC]/40 transition-all">
                       <Upload className="w-6 h-6 text-white/20 group-hover:text-[#6324FC] transition-colors" />
                       <span className="font-sans text-xs text-white/30">UPLOAD PDF / DOCX (MAX 5MB)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[9px] tracking-widest uppercase text-white/30">Why are you the asset we need?</label>
                  <textarea 
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-[#6324FC] transition-all font-sans min-h-[150px] resize-none"
                    placeholder="DESCRIBE YOUR LETHAL EDGE..."
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full group relative py-6 bg-[#6324FC] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(99,36,252,0.3)] disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  <span className="relative z-10 flex items-center justify-center gap-4 font-heading text-xl tracking-widest text-white group-hover:text-black transition-colors duration-500">
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT APPLICATION"}
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="w-24 h-24 bg-[#6324FC] rounded-3xl flex items-center justify-center text-white mx-auto shadow-[0_0_50px_rgba(99,36,252,0.5)]">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-5xl text-white uppercase tracking-tighter">Transmission <br/><span className="italic text-[#6324FC]">Received.</span></h2>
                <p className="font-sans font-light text-white/40 text-xl max-w-sm mx-auto leading-relaxed">
                  Your profile has been indexed. Our command center will contact you if your skills match our current objectives.
                </p>
              </div>
              <Link href="/" className="inline-block px-10 py-5 border border-white/10 rounded-full text-white font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                Return to Surface
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060608] flex items-center justify-center"><div className="w-10 h-10 border-2 border-[#6324FC] border-t-transparent rounded-full animate-spin" /></div>}>
      <ApplyFormContent />
    </Suspense>
  );
}
