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
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      >
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[12px]" onClick={onClose} />
        
        <motion.div 
          initial={{ scale: 0.98, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#08080A] border border-white/5 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col h-auto max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#6324FC]" />
              <div className="font-heading  text-[9px] tracking-[0.3em] capitalize text-white/30">
                {step < 5 ? `Request Pipeline // Phase 0${step}` : "Status: Confirmed"}
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="w-full h-[1px] bg-white/[0.02]">
            <motion.div 
              className="h-full bg-[#6324FC]"
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Content Area */}
          <div className="flex-1 px-8 lg:px-16 py-10 lg:py-14 overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: SERVICES */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-10"
                >
                  <div className="space-y-4">
                    <h2 className="font-heading text-4xl lg:text-5xl capitalize tracking-tight text-white leading-tight">
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
                          className={`group relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-500 ${
                            isSelected 
                              ? 'bg-[#6324FC]/5 border-[#6324FC]/40 text-white shadow-[0_0_20px_rgba(99,36,252,0.1)]' 
                              : 'bg-white/[0.02] border-white/5 text-white/30 hover:border-white/10 hover:text-white'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isSelected ? 'bg-[#6324FC] text-white' : 'bg-white/5 text-white/20'
                          }`}>
                            <svc.icon className="w-5 h-5" />
                          </div>
                          <span className="font-heading  capitalize tracking-tight">{svc.id}</span>
                          
                          {isSelected && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 w-5 h-5 bg-[#6324FC] rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </button>
                      )
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
                  className="flex flex-col gap-10"
                >
                  <h2 className="font-heading text-4xl lg:text-5xl capitalize tracking-tight text-white leading-tight">
                    Define your <span className="text-[#6324FC] italic">strategic</span> <br/>
                    investment range.
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {budgetsList.map((b) => (
                      <button 
                        key={b}
                        onClick={() => { setBudget(b); setTimeout(handleNext, 400); }}
                        className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 ${
                          budget === b 
                            ? 'bg-[#6324FC]/5 border-[#6324FC]/40 text-white' 
                            : 'bg-white/[0.02] border-white/5 text-white/30 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        <span className="font-heading text-xl capitalize tracking-tight">{b}</span>
                        <div className={`w-8 h-8 rounded-full border border-white/5 flex items-center justify-center transition-all ${budget === b ? 'bg-[#6324FC] border-[#6324FC]' : 'group-hover:border-white/20'}`}>
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
                  className="flex flex-col gap-10 h-full"
                >
                  <h2 className="font-heading text-4xl lg:text-5xl capitalize tracking-tight text-white leading-tight">
                    Detail the <span className="text-[#6324FC] italic">vision</span> <br/>
                    of this objective.
                  </h2>
                  <textarea 
                    autoFocus
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Briefly describe the goals, timeline, and current challenges..."
                    className="w-full min-h-[200px] bg-white/[0.01] border border-white/5 rounded-2xl p-8 font-sans  font-light text-white focus:outline-none focus:border-[#6324FC]/40 transition-all resize-none placeholder:text-white/5"
                  />
                </motion.div>
              )}

              {/* STEP 4: CONTACT */}
              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-10"
                >
                  <h2 className="font-heading text-4xl lg:text-5xl capitalize tracking-tight text-white leading-tight">
                    Finalize your <span className="text-[#6324FC] italic">professional</span> <br/>
                    identification.
                  </h2>
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/20 text-red-500 font-heading  text-[10px] py-3 px-6 rounded-xl text-center"
                    >
                      {error}
                    </motion.div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-heading  text-[9px] tracking-widest capitalize text-white/20">Full Name</label>
                      <input 
                        type="text" 
                        value={contact.name}
                        onChange={(e) => setContact({...contact, name: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-4 font-heading text-2xl text-white focus:outline-none focus:border-[#6324FC] transition-colors"
                        placeholder="John Visionary"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="font-heading  text-[9px] tracking-widest capitalize text-white/20">Email Address</label>
                      <input 
                        type="email" 
                        value={contact.email}
                        onChange={(e) => setContact({...contact, email: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-4 font-heading text-2xl text-white focus:outline-none focus:border-[#6324FC] transition-colors"
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
                  className="flex flex-col items-center text-center gap-8 py-6"
                >
                  <div className="w-20 h-20 bg-[#6324FC] rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,36,252,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-heading text-5xl capitalize tracking-tight text-white">
                      Transmission <br/><span className="text-[#6324FC] italic">Confirmed.</span>
                    </h2>
                    <p className="font-sans font-light  text-white/30 max-w-sm mx-auto">
                      Our strategists will review your brief. Expect a response within 12 business hours.
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 bg-white text-black font-heading  capitalize tracking-tight hover:bg-[#6324FC] hover:text-white transition-all duration-300 rounded-full"
                  >
                    Return to Portal
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          {step < 5 && (
            <div className="px-8 py-8 border-t border-white/[0.03] flex items-center justify-between bg-black/20">
              {step > 1 ? (
                <button 
                  onClick={handlePrev}
                  className="font-heading  text-[10px] tracking-widest capitalize text-white/20 hover:text-white transition-colors"
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
                className="group relative px-10 py-4 bg-[#6324FC] rounded-full flex items-center gap-3 transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <span className="font-heading  capitalize tracking-tight text-white">
                  {isSubmitting ? "Transmitting..." : step === 4 ? "Submit Request" : "Next Phase"}
                </span>
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


