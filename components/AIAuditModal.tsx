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
        className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 overflow-hidden overscroll-contain"
      >
        <div className="absolute inset-0 bg-black/70 dark:bg-black/90 backdrop-blur-2xl overscroll-contain" onClick={onClose} />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0d] border border-black/10 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.2)] dark:shadow-[0_0_100px_rgba(99,36,252,0.2)] max-h-[90vh] flex flex-col overscroll-contain my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-black/5 dark:border-white/5">
            <div className="flex items-center gap-4">
               {(step === 3 || step === 4) && (
                 <button onClick={handleBack} className="flex items-center gap-1 text-neutral-500 hover:text-[#6324FC] dark:text-white/40 dark:hover:text-[#6324FC] transition-colors group cursor-pointer">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-heading text-[10px] capitalize tracking-widest font-semibold">Back</span>
                 </button>
               )}
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6324FC]/20 flex items-center justify-center border border-[#6324FC]/30">
                     <Cpu className="w-4 h-4 text-[#6324FC] animate-pulse" />
                  </div>
                  <span className="font-heading text-[10px] tracking-[0.25em] text-neutral-500 dark:text-white/50 capitalize font-medium">Neural Audit Engine v2.0</span>
               </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-neutral-500 hover:text-black dark:text-white/40 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8 sm:p-10 lg:p-14 flex flex-col items-center text-center overflow-y-auto overscroll-contain custom-scrollbar">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: INPUT URL */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="w-full flex flex-col items-center gap-6 sm:gap-8"
                >
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#6324FC] to-[#00E5FF] flex items-center justify-center shadow-lg shadow-[#6324FC]/20 mb-2">
                     <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-neutral-900 dark:text-white tracking-tight capitalize leading-tight">
                    Analyze Your <br/><span className="text-[#6324FC] italic">Digital DNA</span>
                  </h2>
                  
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 font-heading text-xs py-2 px-4 rounded-full">
                       ERROR: {error}
                    </div>
                  )}

                  <p className="font-sans text-neutral-600 dark:text-white/40 max-w-sm text-sm sm:text-base">
                    Enter your website URL to trigger a deep neural scan of your performance, SEO, and ROI potential.
                  </p>
                  
                  <div className="w-full relative">
                    <input 
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full py-4 sm:py-5 px-6 sm:px-8 font-heading text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#6324FC] transition-all placeholder:text-neutral-400 dark:placeholder:text-white/20"
                    />
                    <button 
                      onClick={() => url.includes('.') && setStep(2)}
                      disabled={!url.includes('.')}
                      className="group absolute right-2 top-2 bottom-2 px-6 sm:px-8 bg-black dark:bg-[#6324FC] text-white rounded-full font-heading text-xs sm:text-sm tracking-widest overflow-hidden hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:hover:scale-100 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC] to-[#4310C7] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                      <span className="relative z-10 font-medium">SCAN NOW</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-2">
                     <div className="flex items-center gap-2 font-heading text-[10px] text-neutral-500 dark:text-white/30 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                        SECURE SCAN
                     </div>
                     <div className="flex items-center gap-2 font-heading text-[10px] text-neutral-500 dark:text-white/30 font-medium">
                        <Activity className="w-3.5 h-3.5 text-[#00E5FF]" />
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
                  className="w-full flex flex-col items-center gap-10 py-6"
                >
                  <div className="relative w-40 h-40">
                     <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-[#6324FC]/30 rounded-full"
                     />
                     <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="font-heading text-4xl text-neutral-900 dark:text-white">{progress}%</span>
                        <span className="font-heading text-[9px] tracking-widest text-neutral-500 dark:text-white/50 capitalize mt-2 font-medium">
                           {progress < 100 ? "Processing Data" : "Scan Complete"}
                        </span>
                     </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <p className="font-heading text-xs tracking-[0.25em] text-neutral-900 dark:text-white animate-pulse capitalize font-medium">
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
                  className="w-full flex flex-col items-center gap-6 sm:gap-8"
                >
                  <div className="flex items-center gap-6 mb-2">
                     <div className="flex flex-col items-center">
                        <div className={`text-4xl sm:text-5xl font-heading mb-1 ${results.performance > 80 ? 'text-green-500' : results.performance > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                           {results.performance}
                        </div>
                        <div className="font-heading text-[10px] text-neutral-500 dark:text-white/40 capitalize tracking-widest font-medium">Performance</div>
                     </div>
                     <div className="w-[1px] h-12 bg-black/10 dark:bg-white/10" />
                     <div className="flex flex-col items-center">
                        <div className={`text-4xl sm:text-5xl font-heading mb-1 ${results.seo > 80 ? 'text-green-500' : results.seo > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                           {results.seo}
                        </div>
                        <div className="font-heading text-[10px] text-neutral-500 dark:text-white/40 capitalize tracking-widest font-medium">SEO Score</div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                     <div className="bg-black/[0.02] dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10 text-left">
                        <div className="text-[10px] font-heading text-neutral-500 dark:text-white/40 capitalize mb-1">LCP (Load Time)</div>
                        <div className="text-lg sm:text-xl font-heading text-neutral-900 dark:text-white">{results.metrics.lcp}</div>
                     </div>
                     <div className="bg-black/[0.02] dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10 text-left">
                        <div className="text-[10px] font-heading text-neutral-500 dark:text-white/40 capitalize mb-1">Total Blocking Time</div>
                        <div className="text-lg sm:text-xl font-heading text-neutral-900 dark:text-white">{results.metrics.tbt}</div>
                     </div>
                     <div className="bg-black/[0.02] dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10 text-left">
                        <div className="text-[10px] font-heading text-neutral-500 dark:text-white/40 capitalize mb-1">Visual Stability (CLS)</div>
                        <div className="text-lg sm:text-xl font-heading text-neutral-900 dark:text-white">{results.metrics.cls}</div>
                     </div>
                     <div className="bg-black/[0.02] dark:bg-white/5 p-4 rounded-2xl border border-black/10 dark:border-white/10 text-left">
                        <div className="text-[10px] font-heading text-neutral-500 dark:text-white/40 capitalize mb-1">Growth Potential</div>
                        <div className="text-lg sm:text-xl font-heading text-[#00E5FF] font-semibold">{results.roiPotential}x ROI</div>
                     </div>
                  </div>

                  <p className="font-sans text-neutral-600 dark:text-white/50 text-sm max-w-sm">
                    {results.performance < 70 
                      ? "Your site's slow performance is causing major bounce rates and lost revenue."
                      : "Your site has a solid foundation, but there are critical SEO gaps hiding your ROI."}
                  </p>

                  <button 
                    onClick={() => setStep(4)}
                    className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] isolate w-full"
                  >
                    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                      <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                    </div>
                    
                    <div className="relative w-full h-full py-4 sm:py-5 rounded-full bg-white dark:bg-[#0a0a0d] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      
                      <span className="w-2 h-2 rounded-full bg-[#6324FC] shadow-[0_0_10px_rgba(99,36,252,0.8)] animate-pulse shrink-0 relative z-10" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 font-heading text-sm sm:text-base tracking-[0.1em] text-neutral-900 dark:text-white uppercase text-center font-medium">
                        GET 100% ACCURATE REPORT
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#6324FC]" />
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
                  className="w-full flex flex-col items-center gap-6 sm:gap-8 text-left"
                >
                  <div className="w-full">
                    <h3 className="font-heading text-2xl sm:text-3xl text-neutral-900 dark:text-white mb-2 capitalize italic text-center">Where should we send the report?</h3>
                    <p className="font-heading text-[10px] text-[#6324FC] text-center mb-6 sm:mb-8 tracking-[0.25em] font-medium">URL: {url}</p>
                    
                    <div className="space-y-4 sm:space-y-5">
                      <div className="flex flex-col gap-2">
                        <label className="font-heading text-[10px] text-neutral-600 dark:text-white/40 capitalize tracking-widest font-semibold">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-3.5 sm:p-4 text-neutral-900 dark:text-white focus:border-[#6324FC] outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-white/20" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-heading text-[10px] text-neutral-600 dark:text-white/40 capitalize tracking-widest font-semibold">Business Email</label>
                        <input 
                          type="email" 
                          placeholder="john@company.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-3.5 sm:p-4 text-neutral-900 dark:text-white focus:border-[#6324FC] outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-white/20" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-heading text-[10px] text-neutral-600 dark:text-white/40 capitalize tracking-widest font-semibold">Growth Goal</label>
                        <select 
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-3.5 sm:p-4 text-neutral-900 dark:text-white focus:border-[#6324FC] outline-none transition-all appearance-none [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-[#0a0a0d] dark:[&>option]:text-white"
                        >
                           <option value="Increase Organic Traffic">Increase Organic Traffic</option>
                           <option value="Higher Conversion Rates">Higher Conversion Rates</option>
                           <option value="Global Market Expansion">Global Market Expansion</option>
                           <option value="Brand Identity Refinement">Brand Identity Refinement</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.email || !formData.name}
                    className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none isolate w-full"
                  >
                    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                      <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                    </div>
                    
                    <div className="relative w-full h-full py-4 sm:py-5 rounded-full bg-white dark:bg-[#0a0a0d] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-sm sm:text-base tracking-[0.1em] text-neutral-900 dark:text-white uppercase text-center font-medium">
                        {isSubmitting ? "TRANSMITTING LEAD..." : "SEND MY REPORT NOW"} 
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-[#6324FC] border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Zap className="w-4 h-4 fill-[#6324FC] text-[#6324FC] transition-colors duration-300" />
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
                  className="w-full flex flex-col items-center gap-6 sm:gap-8 py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-2">
                     <ShieldCheck className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="font-heading text-4xl sm:text-5xl text-neutral-900 dark:text-white capitalize tracking-tighter leading-none">
                    Mission <br/><span className="text-[#6324FC] italic">Confirmed.</span>
                  </h2>
                  <p className="font-sans text-neutral-600 dark:text-white/40 max-w-sm text-sm sm:text-base">
                    Our specialists are now compiling your 20-page PDF report for <strong>{url}</strong>. Expect a deep-dive analysis in your inbox within 2 hours.
                  </p>
                  <div className="w-full h-[1px] bg-black/10 dark:bg-white/10 my-2" />
                  <button 
                    onClick={onClose}
                    className="px-8 sm:px-10 py-3.5 sm:py-4 border border-black/15 dark:border-white/10 rounded-full font-heading text-xs text-neutral-600 dark:text-white/50 tracking-[0.25em] hover:text-neutral-900 dark:hover:text-white hover:border-black/30 dark:hover:border-white transition-all capitalize font-medium cursor-pointer"
                  >
                    Close & Continue
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#6324FC]/15 dark:bg-[#6324FC]/20 blur-[60px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#00E5FF]/10 blur-[60px] pointer-events-none" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
