"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Code, Paintbrush, Search, TrendingUp, PenTool, LayoutDashboard, CheckCircle2 } from "lucide-react";

const servicesList = [
  { id: "Web Dev", icon: Code },
  { id: "UI/UX Design", icon: Paintbrush },
  { id: "SEO", icon: Search },
  { id: "Marketing", icon: TrendingUp },
  { id: "Content", icon: PenTool },
  { id: "Strategy", icon: LayoutDashboard },
];

const budgetsList = [
  "Under $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+"
];

export default function ProjectModal({ isOpen, onClose, defaultService }: { isOpen: boolean, onClose: () => void, defaultService: string }) {
  const [step, setStep] = useState(1);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form Data
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [contact, setContact] = useState({ name: "", email: "" });

  // Handle initialization when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setError(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/pipeline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          services: selectedServices,
          budget,
          details
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setStep(5);
      } else {
        setError(data.error || "Neural link failed. Please try again.");
      }
    } catch (err) {
      console.error("Project submission failed", err);
      setError("Connection blocked or unstable. Please disable ad-blockers and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (step === 4) {
      handleSubmit();
    } else {
      setStep(prev => Math.min(prev + 1, 5));
    }
  };

  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  // Sync default service
  useEffect(() => {
    if (isOpen && defaultService && !selectedServices.includes(defaultService)) {
      setSelectedServices([defaultService]);
    }
  }, [isOpen, defaultService]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-hidden overscroll-contain"
      >
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-[12px] overscroll-contain" onClick={onClose} />
        
        <motion.div 
          initial={{ scale: 0.98, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#08080A] border border-black/10 dark:border-white/10 rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col h-auto max-h-[90vh] overscroll-contain my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 border-b border-black/5 dark:border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#6324FC]" />
              <div className="font-heading text-[10px] tracking-[0.25em] uppercase font-semibold text-neutral-500 dark:text-white/40">
                {step < 5 ? `Request Pipeline // Phase 0${step}` : "Status: Confirmed"}
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-neutral-500 hover:text-black dark:text-white/40 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="w-full h-[2px] bg-neutral-200 dark:bg-white/[0.05]">
            <motion.div 
              className="h-full bg-[#6324FC]"
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Content Area */}
          <div className="flex-1 px-6 sm:px-10 lg:px-16 py-6 sm:py-8 overflow-y-auto overscroll-contain custom-scrollbar">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: SERVICES */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-8"
                >
                  <div className="space-y-4">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl capitalize tracking-tight text-neutral-900 dark:text-white leading-tight">
                      What can we <span className="text-[#6324FC] italic">architect</span> <br/>
                      for your enterprise?
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {servicesList.map((svc) => {
                      const isSelected = selectedServices.includes(svc.id);
                      return (
                        <button 
                          key={svc.id}
                          onClick={() => toggleService(svc.id)}
                          className={`group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                            isSelected 
                              ? 'bg-[#6324FC]/10 border-[#6324FC] text-[#6324FC] dark:text-white shadow-[0_0_20px_rgba(99,36,252,0.15)]' 
                              : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 text-neutral-700 dark:text-white/50 hover:border-[#6324FC]/40 hover:text-neutral-900 dark:hover:text-white'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isSelected 
                              ? 'bg-[#6324FC] text-white' 
                              : 'bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-white/40 group-hover:bg-[#6324FC]/10 group-hover:text-[#6324FC]'
                          }`}>
                            <svc.icon className="w-5 h-5" />
                          </div>
                          <span className="font-heading text-sm sm:text-base capitalize tracking-tight font-medium">{svc.id}</span>
                          
                          {isSelected && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 w-5 h-5 bg-[#6324FC] rounded-full flex items-center justify-center shadow-sm">
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: BUDGET */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-8"
                >
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl capitalize tracking-tight text-neutral-900 dark:text-white leading-tight">
                    Define your <span className="text-[#6324FC] italic">strategic</span> <br/>
                    investment range.
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {budgetsList.map((b) => (
                      <button 
                        key={b}
                        onClick={() => { setBudget(b); setTimeout(handleNext, 400); }}
                        className={`group flex items-center justify-between p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          budget === b 
                            ? 'bg-[#6324FC]/10 border-[#6324FC] text-[#6324FC] dark:text-white shadow-[0_0_20px_rgba(99,36,252,0.15)]' 
                            : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 text-neutral-700 dark:text-white/50 hover:border-[#6324FC]/40 hover:text-neutral-900 dark:hover:text-white'
                        }`}
                      >
                        <span className="font-heading text-lg sm:text-xl capitalize tracking-tight font-medium">{b}</span>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          budget === b 
                            ? 'bg-[#6324FC] border-[#6324FC] text-white' 
                            : 'border-black/15 dark:border-white/10 text-neutral-400 dark:text-white/30 group-hover:border-[#6324FC] group-hover:text-[#6324FC]'
                        }`}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: DETAILS */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-6 sm:gap-8 h-full"
                >
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl capitalize tracking-tight text-neutral-900 dark:text-white leading-tight">
                    Detail the <span className="text-[#6324FC] italic">vision</span> <br/>
                    of this objective.
                  </h2>
                  <div className="space-y-2">
                    <textarea 
                      autoFocus
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Briefly describe the goals, timeline, and current challenges..."
                      className="w-full min-h-[180px] sm:min-h-[220px] bg-black/[0.02] dark:bg-white/[0.02] border border-black/15 dark:border-white/10 rounded-2xl p-6 sm:p-8 font-sans text-neutral-900 dark:text-white focus:outline-none focus:border-[#6324FC] focus:ring-1 focus:ring-[#6324FC] transition-all resize-none placeholder:text-neutral-400 dark:placeholder:text-white/25 text-base leading-relaxed"
                    />
                    <div className="flex justify-between items-center px-1 text-xs text-neutral-400 dark:text-white/30">
                      <span>{details.trim().length < 10 ? "Min 10 characters required" : "Ready to proceed"}</span>
                      <span>{details.length} characters</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CONTACT */}
              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-8"
                >
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl capitalize tracking-tight text-neutral-900 dark:text-white leading-tight">
                    Finalize your <span className="text-[#6324FC] italic">professional</span> <br/>
                    identification.
                  </h2>
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/20 text-red-500 font-heading text-xs py-3 px-6 rounded-xl text-center"
                    >
                      {error}
                    </motion.div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="font-heading text-[10px] tracking-widest uppercase font-semibold text-neutral-500 dark:text-white/40">Full Name</label>
                      <input 
                        type="text" 
                        value={contact.name}
                        onChange={(e) => setContact({...contact, name: e.target.value})}
                        className="w-full bg-transparent border-b border-black/15 dark:border-white/15 py-3 sm:py-4 font-heading text-xl sm:text-2xl text-neutral-900 dark:text-white focus:outline-none focus:border-[#6324FC] transition-colors placeholder:text-neutral-400 dark:placeholder:text-white/25"
                        placeholder="John Visionary"
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="font-heading text-[10px] tracking-widest uppercase font-semibold text-neutral-500 dark:text-white/40">Email Address</label>
                      <input 
                        type="email" 
                        value={contact.email}
                        onChange={(e) => setContact({...contact, email: e.target.value})}
                        className="w-full bg-transparent border-b border-black/15 dark:border-white/15 py-3 sm:py-4 font-heading text-xl sm:text-2xl text-neutral-900 dark:text-white focus:outline-none focus:border-[#6324FC] transition-colors placeholder:text-neutral-400 dark:placeholder:text-white/25"
                        placeholder="john@future.com"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: SUCCESS */}
              {step === 5 && (
                <motion.div 
                  key="step5"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6 sm:gap-8 py-6"
                >
                  <div className="w-20 h-20 bg-[#6324FC] rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,36,252,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-heading text-4xl sm:text-5xl capitalize tracking-tight text-neutral-900 dark:text-white">
                      Transmission <br/><span className="text-[#6324FC] italic">Confirmed.</span>
                    </h2>
                    <p className="font-sans font-light text-neutral-600 dark:text-white/40 max-w-sm mx-auto text-sm sm:text-base">
                      Our strategists will review your brief. Expect a response within 12 business hours.
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] isolate w-full md:w-auto"
                  >
                    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                      <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                    </div>
                    
                    <div className="relative w-full h-full px-8 py-3.5 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-4 font-heading text-base sm:text-lg tracking-tight text-neutral-900 dark:text-white capitalize text-center font-medium">
                        Return to Portal
                      </span>
                    </div>
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          {step < 5 && (
            <div className="px-6 sm:px-8 py-5 sm:py-6 border-t border-black/5 dark:border-white/[0.05] flex items-center justify-between bg-neutral-50/80 dark:bg-black/20">
              {step > 1 ? (
                <button 
                  onClick={handlePrev}
                  className="font-heading text-xs tracking-wider capitalize text-neutral-500 hover:text-neutral-900 dark:text-white/40 dark:hover:text-white transition-colors cursor-pointer"
                >
                  ← Previous Phase
                </button>
              ) : <div />}
              
              <button 
                onClick={handleNext}
                disabled={
                  (step === 1 && selectedServices.length === 0) || 
                  (step === 2 && !budget) || 
                  (step === 3 && details.trim().length < 10) || 
                  (step === 4 && (!contact.name.trim() || !contact.email.includes('@') || contact.email.length < 5))
                }
                className="group relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,36,252,0.3)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none isolate"
              >
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-full">
                  <div className="w-[150%] aspect-square bg-[conic-gradient(from_0deg,#6324FC,#00E5FF,#6324FC)] animate-[spin_6s_linear_infinite] rounded-full" />
                </div>
                
                <div className="relative w-full h-full px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white dark:bg-[#060608] transition-colors duration-500 flex items-center justify-center gap-3 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6324FC]/10 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3 font-heading text-base sm:text-lg tracking-tight text-neutral-900 dark:text-white capitalize text-center font-medium">
                    {isSubmitting ? "Transmitting..." : step === 4 ? "Submit Request" : "Next Phase"}
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-[#6324FC] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-[#6324FC] group-hover:translate-x-1 transition-transform" />
                    )}
                  </span>
                </div>
              </button>
            </div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


