"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Cpu, Globe, Search, BarChart3, ShieldCheck, Zap, Activity, ChevronLeft } from "lucide-react";

export default function AIAuditModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "Increase Organic Traffic"
  });

  const handleBack = () => {
    if (step === 3) setStep(1);
    if (step === 4) setStep(3);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      // Send data to our API
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          url,
          performance: results.performance,
          seo: results.seo,
          roi: results.roiPotential,
          gaps: results.gapsFound,
          metrics: results.metrics
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStep(5);
      } else {
        setError(data.error || "Neural transmission failed. Try again.");
      }
    } catch (err) {
      console.error("Submission failed", err);
      setError("Network connection unstable. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setUrl("");
      setProgress(0);
      setResults(null);
      setError(null);
      setFormData({ name: "", email: "", goal: "Increase Organic Traffic" });
    }
  }, [isOpen]);

  // Real API Data Fetching with Realistic Timing
  useEffect(() => {
    if (step === 2) {
      const runAudit = async () => {
        const startTime = Date.now();
        try {
          // 1. Start the real API call in parallel
          const apiPromise = fetch(`/api/analyze?url=${encodeURIComponent(url)}`);
          
          // 2. Realistic progress animation (minimum 8 seconds)
          let currentProgress = 0;
          const statusMessages = [
            "Initializing Neural Link...",
            "Querying Google PSI Servers...",
            "Analyzing Mobile Responsiveness...",
            "Measuring Largest Contentful Paint...",
            "Checking Cumulative Layout Shift...",
            "Identifying Technical SEO Gaps...",
            "Calculating Growth Potential..."
          ];

          const interval = setInterval(() => {
            currentProgress += Math.random() * 2;
            if (currentProgress >= 98) {
              clearInterval(interval);
              return;
            }
            setProgress(Math.floor(currentProgress));
            
            // Update status message based on progress
            const msgIdx = Math.floor((currentProgress / 100) * statusMessages.length);
            setError(statusMessages[msgIdx]); // Reusing error state temporarily for status msg
          }, 100);

          const response = await apiPromise;
          const data = await response.json();
          
          // 3. Ensure we wait at least 8 seconds total for credibility
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, 8000 - elapsedTime);

          setTimeout(() => {
            clearInterval(interval);
            if (data.error) {
              setError("Audit failed. Check URL and try again.");
              setStep(1);
              return;
            }
            setResults(data);
            setProgress(100);
            setError(null); // Clear the status message
            setTimeout(() => setStep(3), 800);
          }, remainingTime);

        } catch (err) {
          console.error("Audit fetch failed:", err);
          setError("Neural link blocked or failed. Please disable ad-blockers and try again.");
          setStep(1);
        }
      };

      runAudit();
    }
  }, [step, url]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          className="relative w-full max-w-2xl bg-[#0a0a0d] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(99,36,252,0.2)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-white/5">
            <div className="flex items-center gap-4">
               {(step === 3 || step === 4) && (
                 <button onClick={handleBack} className="flex items-center gap-1 text-white/40 hover:text-[#6324FC] transition-colors group">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-heading  text-[10px] capitalize tracking-widest">Back</span>
                 </button>
               )}
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6324FC]/20 flex items-center justify-center border border-[#6324FC]/30">
                     <Cpu className="w-4 h-4 text-[#6324FC] animate-pulse" />
                  </div>
                  <span className="font-heading  text-[10px] tracking-[0.3em] text-white/50 capitalize ">Neural Audit Engine v2.0</span>
               </div>
            </div>
            <button onClick={onClose} className="text-white/20 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-10 lg:p-16 flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: INPUT URL */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="w-full flex flex-col items-center gap-8"
                >
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#6324FC] to-[#00E5FF] flex items-center justify-center shadow-lg shadow-[#6324FC]/20 mb-4">
                     <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl text-white tracking-tight capitalize leading-[0.9]">
                    Analyze Your <br/><span className="text-[#6324FC] italic">Digital DNA</span>
                  </h2>
                  
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 font-heading  text-[10px] py-2 px-4 rounded-full">
                       ERROR: {error}
                    </div>
                  )}

                  <p className="font-sans text-white/40 max-w-sm">
                    Enter your website URL to trigger a deep neural scan of your performance, SEO, and ROI potential.
                  </p>
                  
                  <div className="w-full relative">
                    <input 
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 font-heading  text-sm text-white focus:outline-none focus:border-[#6324FC] transition-all placeholder:text-white/10"
                    />
                    <button 
                      onClick={() => url.includes('.') && setStep(2)}
                      disabled={!url.includes('.')}
                      className="group absolute right-2 top-2 bottom-2 px-8 bg-black text-white rounded-full font-heading text-sm tracking-widest overflow-hidden hover:scale-105 transition-all duration-500 disabled:opacity-50"
                    >
                      {/* Button Glow Layer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC] to-[#4310C7] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      <span className="relative z-10">SCAN NOW</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-4">
                     <div className="flex items-center gap-2 font-heading  text-[9px] text-white/20">
                        <ShieldCheck className="w-3 h-3 text-green-500" />
                        SECURE SCAN
                     </div>
                     <div className="flex items-center gap-2 font-heading  text-[9px] text-white/20">
                        <Activity className="w-3 h-3 text-[#00E5FF]" />
                        REAL-TIME DATA
                     </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SCANNING ANIMATION */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex flex-col items-center gap-12"
                >
                  <div className="relative w-40 h-40">
                     {/* Outer Ring */}
                     <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-[#6324FC]/30 rounded-full"
                     />
                     <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="font-heading text-4xl text-white">{progress}%</span>
                        <span className="font-heading  text-[8px] tracking-widest text-white/50 capitalize mt-2">
                           {progress < 100 ? "Processing Data" : "Scan Complete"}
                        </span>
                     </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <p className="font-heading  text-[11px] tracking-[0.3em] text-white animate-pulse capitalize ">
                       {error && !error.includes("failed") ? error : `Scanning: ${url}`}
                     </p>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: RESULTS */}
              {step === 3 && results && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full flex flex-col items-center gap-8"
                >
                  <div className="flex items-center gap-6 mb-4">
                     <div className="flex flex-col items-center">
                        <div className={`text-5xl font-heading mb-2 ${results.performance > 80 ? 'text-green-500' : results.performance > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                           {results.performance}
                        </div>
                        <div className="font-heading  text-[9px] text-white/20 capitalize tracking-widest">Performance</div>
                     </div>
                     <div className="w-[1px] h-12 bg-white/10" />
                     <div className="flex flex-col items-center">
                        <div className={`text-5xl font-heading mb-2 ${results.seo > 80 ? 'text-green-500' : results.seo > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                           {results.seo}
                        </div>
                        <div className="font-heading  text-[9px] text-white/20 capitalize tracking-widest">SEO Score</div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                        <div className="text-[9px] font-heading  text-white/30 capitalize mb-1">LCP (Load Time)</div>
                        <div className="text-xl font-heading text-white">{results.metrics.lcp}</div>
                     </div>
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                        <div className="text-[9px] font-heading  text-white/30 capitalize mb-1">Total Blocking Time</div>
                        <div className="text-xl font-heading text-white">{results.metrics.tbt}</div>
                     </div>
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                        <div className="text-[9px] font-heading  text-white/30 capitalize mb-1">Visual Stability (CLS)</div>
                        <div className="text-xl font-heading text-white">{results.metrics.cls}</div>
                     </div>
                     <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                        <div className="text-[9px] font-heading  text-white/30 capitalize mb-1">Growth Potential</div>
                        <div className="text-xl font-heading text-[#00E5FF]">{results.roiPotential}x ROI</div>
                     </div>
                  </div>

                  <p className="font-sans text-white/40 text-sm max-w-sm">
                    {results.performance < 70 
                      ? "Your site's slow performance is causing major bounce rates and lost revenue."
                      : "Your site has a solid foundation, but there are critical SEO gaps hiding your ROI."}
                  </p>

                  <button 
                    onClick={() => setStep(4)}
                    className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] isolate w-full"
                  >
                    {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                      <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                    </div>
                    
                    <div className="relative w-full h-full py-5 rounded-full bg-[#0a0a0d] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                      {/* Flowing background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      
                      {/* Bouncing/pulsating dot */}
                      <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-4 font-heading text-lg tracking-[0.1em] text-white uppercase text-center">
                        GET 100% ACCURATE REPORT
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 text-[#6324FC] dark:group-hover:text-white" />
                      </span>
                    </div>
                  </button>
                </motion.div>
              )}

              {/* STEP 4: CONTACT FORM (LEAD GEN) */}
              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="w-full flex flex-col items-center gap-8 text-left"
                >
                  <div className="w-full">
                    <h3 className="font-heading text-3xl text-white mb-2 capitalize italic text-center">Where should we send the report?</h3>
                    <p className="font-heading  text-[9px] text-[#6324FC] text-center mb-10 tracking-[0.3em]">URL: {url}</p>
                    
                    <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-heading  text-[10px] text-white/30 capitalize tracking-widest">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-[#6324FC] outline-none transition-all" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-heading  text-[10px] text-white/30 capitalize tracking-widest">Business Email</label>
                        <input 
                          type="email" 
                          placeholder="john@company.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-[#6324FC] outline-none transition-all" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-heading  text-[10px] text-white/30 capitalize tracking-widest">Growth Goal</label>
                        <select 
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-[#6324FC] outline-none transition-all appearance-none [&>option]:bg-[#0a0a0d] [&>option]:text-white"
                        >
                           <option value="Increase Organic Traffic" className="bg-[#0a0a0d] text-white">Increase Organic Traffic</option>
                           <option value="Higher Conversion Rates" className="bg-[#0a0a0d] text-white">Higher Conversion Rates</option>
                           <option value="Global Market Expansion" className="bg-[#0a0a0d] text-white">Global Market Expansion</option>
                           <option value="Brand Identity Refinement" className="bg-[#0a0a0d] text-white">Brand Identity Refinement</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.email || !formData.name}
                    className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none isolate w-full"
                  >
                    {/* Centered square spinning infinitely to produce a perfect 360-degree rotating border */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                      <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                    </div>
                    
                    <div className="relative w-full h-full py-5 rounded-full bg-[#0a0a0d] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                      {/* Flowing background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-lg tracking-[0.1em] text-white uppercase text-center">
                        {isSubmitting ? "TRANSMITTING LEAD..." : "SEND MY REPORT NOW"} 
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-[#6324FC] border-t-white rounded-full animate-spin" />
                        ) : (
                          <Zap className="w-4 h-4 fill-[#6324FC] text-[#6324FC] group-hover:fill-white group-hover:text-white transition-colors duration-500" />
                        )}
                      </span>
                    </div>
                  </button>
                </motion.div>
              )}

              {/* STEP 5: SUCCESS MESSAGE */}
              {step === 5 && (
                <motion.div 
                  key="step5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col items-center gap-8 py-10"
                >
                  <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-4">
                     <ShieldCheck className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="font-heading text-5xl text-white capitalize tracking-tighter leading-none">
                    Mission <br/><span className="text-[#6324FC] italic">Confirmed.</span>
                  </h2>
                  <p className="font-sans text-white/40 max-w-sm">
                    Our specialists are now compiling your 20-page PDF report for <strong>{url}</strong>. Expect a deep-dive analysis in your inbox within 2 hours.
                  </p>
                  <div className="w-full h-[1px] bg-white/10 my-4" />
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 border border-white/10 rounded-full font-heading  text-[10px] text-white/50 tracking-[0.3em] hover:text-white hover:border-white transition-all capitalize "
                  >
                    Close & Continue
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#6324FC]/20 blur-[60px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#00E5FF]/10 blur-[60px] pointer-events-none" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
