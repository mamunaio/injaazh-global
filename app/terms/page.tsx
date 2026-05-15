"use client";

import { motion } from "framer-motion";
import { Scale, FileCheck, Users, AlertTriangle, Gavel, Mail, CheckCircle2, Info } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: <FileCheck className="w-6 h-6 text-[#6324FC]" />,
      content: "By accessing and using Injaazh Global's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      accent: "from-[#6324FC]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(99,36,252,0.1)]",
      borderColor: "border-[#6324FC]/20"
    },
    {
      title: "2. Intellectual Property",
      icon: <Scale className="w-6 h-6 text-[#00E5FF]" />,
      content: "All content, features, and functionality on this site, including text, graphics, logos, and software, are the exclusive property of Injaazh Global and are protected by international copyright, trademark, and other intellectual property laws.",
      accent: "from-[#00E5FF]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(0,229,255,0.1)]",
      borderColor: "border-[#00E5FF]/20"
    },
    {
      title: "3. User Responsibilities",
      icon: <Users className="w-6 h-6 text-[#6324FC]" />,
      content: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account.",
      accent: "from-[#6324FC]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(99,36,252,0.1)]",
      borderColor: "border-[#6324FC]/20"
    },
    {
      title: "4. Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6 text-[#00E5FF]" />,
      content: "Injaazh Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services or any content provided therein.",
      accent: "from-[#00E5FF]/10 to-transparent",
      glow: "shadow-[0_0_30px_rgba(0,229,255,0.1)]",
      borderColor: "border-[#00E5FF]/20"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#060608] pt-48 pb-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6324FC]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <div className="font-mono text-[#00E5FF] tracking-[0.5em] text-[10px] uppercase mb-10 flex justify-center items-center gap-4">
            <span className="w-12 h-[1px] bg-[#00E5FF]" /> 
            Agreements & Usage
            <span className="w-12 h-[1px] bg-[#00E5FF]" />
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase mb-10">
            TERMS OF <br/>
            <span className="stroke-text text-transparent italic opacity-30">SERVICE</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/40 font-mono text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>Effective Date: May 15, 2026</span>
            </div>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-2">
              <Gavel className="w-4 h-4 text-[#00E5FF]" />
              <span>Standard Terms v1.2</span>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-8 border-l-2 border-[#00E5FF]/30 bg-white/[0.01]"
        >
          <p className="font-sans font-light text-white/60 text-xl leading-relaxed">
            Welcome to Injaazh Global. These terms and conditions outline the rules and regulations for the use of our Website and Services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Injaazh Global if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-2xl relative group overflow-hidden h-full`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 space-y-6">
                <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 ${section.glow}`}>
                  {section.icon}
                </div>
                <h2 className="font-heading text-3xl tracking-tight uppercase">{section.title}</h2>
                <p className="font-sans text-white/50 text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact/Support Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 border border-[#00E5FF]/20 bg-[#00E5FF]/5 rounded-[3rem] text-center space-y-8"
        >
          <div className="w-16 h-16 bg-[#00E5FF]/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="text-[#00E5FF] w-8 h-8" />
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-4xl tracking-tight uppercase">Questions?</h3>
            <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              If you have any questions regarding these Terms of Service or any other legal matters, please don't hesitate to reach out to our legal department.
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center">
              <p className="font-mono text-[#00E5FF] text-[10px] uppercase tracking-widest mb-2">Legal Support</p>
              <a href="mailto:legal@injaazh.com" className="font-heading text-2xl hover:text-[#00E5FF] transition-colors uppercase tracking-tighter">legal@injaazh.com</a>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-white/10" />
            <div className="text-center">
              <p className="font-mono text-[#6324FC] text-[10px] uppercase tracking-widest mb-2">Global HQ</p>
              <address className="font-heading text-2xl not-italic uppercase tracking-tighter">Dubai, United Arab Emirates</address>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
